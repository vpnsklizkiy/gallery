$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$photosDir = Join-Path $root "photos"
$previewsDir = Join-Path $root "previews"
$scriptPath = Join-Path $root "script.js"

New-Item -ItemType Directory -Force -Path $previewsDir | Out-Null

$extensions = @(".jpg", ".jpeg", ".png", ".webp", ".bmp", ".gif")
$files = Get-ChildItem -Path $photosDir -File -Recurse | Where-Object { $extensions -contains $_.Extension.ToLower() } | Sort-Object FullName

foreach ($file in $files) {
    $relative = $file.FullName.Substring($photosDir.Length + 1).Replace("\\", "/")
    $target = Join-Path $previewsDir $relative
    $targetDir = Split-Path -Parent $target
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

    if ((Test-Path $target) -and ((Get-Item $target).LastWriteTimeUtc -ge $file.LastWriteTimeUtc)) { continue }

    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        $max = 700
        $ratio = [Math]::Min($max / $img.Width, $max / $img.Height)
        if ($ratio -gt 1) { $ratio = 1 }
        $w = [Math]::Max(1, [int]($img.Width * $ratio))
        $h = [Math]::Max(1, [int]($img.Height * $ratio))
        $bmp = New-Object System.Drawing.Bitmap($w, $h)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.DrawImage($img, 0, 0, $w, $h)
        $g.Dispose()
        $img.Dispose()

        # Сохраняем в исходном формате там, где это надёжно поддерживается System.Drawing.
        switch ($file.Extension.ToLower()) {
            ".png" { $bmp.Save($target, [System.Drawing.Imaging.ImageFormat]::Png) }
            ".gif" { $bmp.Save($target, [System.Drawing.Imaging.ImageFormat]::Gif) }
            ".bmp" { $bmp.Save($target, [System.Drawing.Imaging.ImageFormat]::Bmp) }
            default { $bmp.Save($target, [System.Drawing.Imaging.ImageFormat]::Jpeg) }
        }
        $bmp.Dispose()
        Write-Host "Preview: $relative"
    } catch {
        # Если формат не удалось обработать, копируем оригинал, чтобы галерея не ломалась.
        Copy-Item $file.FullName $target -Force
        Write-Host "Copied without resize: $relative"
    }
}

$content = Get-Content $scriptPath -Raw
$names = $files | ForEach-Object { $_.FullName.Substring($photosDir.Length + 1).Replace("\\", "/") }
$array = "const PHOTOS = [`r`n" + (($names | ForEach-Object { '  "' + $_.Replace('"','\\"') + '",' }) -join "`r`n") + "`r`n];"
$content = [regex]::Replace($content, 'const PHOTOS = \[[\s\S]*?\];', $array, 1)
Set-Content -Path $scriptPath -Value $content -Encoding UTF8

Write-Host ""
Write-Host "Done. Photos: $($files.Count)"
Write-Host "Upload photos/, previews/ and script.js to GitHub."
