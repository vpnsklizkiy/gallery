$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$photosDir = Join-Path $root "photos"
$previewsDir = Join-Path $root "previews"
$scriptPath = Join-Path $root "script.js"

New-Item -ItemType Directory -Force -Path $photosDir | Out-Null
New-Item -ItemType Directory -Force -Path $previewsDir | Out-Null

$extensions = @(".jpg", ".jpeg", ".png", ".webp", ".bmp", ".gif")
$files = Get-ChildItem -Path $photosDir -File -Recurse | Where-Object { $extensions -contains $_.Extension.ToLower() } | Sort-Object FullName

function Apply-ExifOrientation([System.Drawing.Image]$img) {
    # EXIF tag 274 (Orientation). System.Drawing does not auto-rotate reliably.
    try {
        if ($img.PropertyIdList -contains 274) {
            $orientation = [int]$img.GetPropertyItem(274).Value[0]
            switch ($orientation) {
                2 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
                3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                4 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
                5 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
                6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                7 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
                8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
            try { $img.RemovePropertyItem(274) } catch {}
        }
    } catch {}
}

foreach ($file in $files) {
    $relative = $file.FullName.Substring($photosDir.Length + 1).Replace("\\", "/")
    $target = Join-Path $previewsDir $relative
    $targetDir = Split-Path -Parent $target
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        Apply-ExifOrientation $img

        $max = 700
        $ratio = [Math]::Min($max / $img.Width, $max / $img.Height)
        if ($ratio -gt 1) { $ratio = 1 }
        $w = [Math]::Max(1, [int]($img.Width * $ratio))
        $h = [Math]::Max(1, [int]($img.Height * $ratio))

        $bmp = New-Object System.Drawing.Bitmap($w, $h)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $g.DrawImage($img, 0, 0, $w, $h)
        $g.Dispose()
        $img.Dispose()

        switch ($file.Extension.ToLower()) {
            ".png" { $bmp.Save($target, [System.Drawing.Imaging.ImageFormat]::Png) }
            ".gif" { $bmp.Save($target, [System.Drawing.Imaging.ImageFormat]::Gif) }
            ".bmp" { $bmp.Save($target, [System.Drawing.Imaging.ImageFormat]::Bmp) }
            default { $bmp.Save($target, [System.Drawing.Imaging.ImageFormat]::Jpeg) }
        }
        $bmp.Dispose()
        Write-Host "Preview: $relative"
    } catch {
        # Unsupported formats are copied unchanged as a fallback.
        Copy-Item $file.FullName $target -Force
        Write-Host "Copied without resize: $relative"
    }
}

# IMPORTANT: explicitly read script.js as UTF-8. Windows PowerShell 5.1 otherwise
# may interpret UTF-8 without BOM as an ANSI code page and turn Russian text into Р... symbols.
$content = Get-Content $scriptPath -Raw -Encoding UTF8
$names = $files | ForEach-Object { $_.FullName.Substring($photosDir.Length + 1).Replace("\\", "/") }
$array = "const PHOTOS = [`r`n" + (($names | ForEach-Object { '  "' + $_.Replace('"','\\"') + '",' }) -join "`r`n") + "`r`n];"
$content = [regex]::Replace($content, 'const PHOTOS = \[[\s\S]*?\];', $array, 1)

# UTF-8 with BOM is intentional here for maximum compatibility with Windows PowerShell 5.1.
$utf8Bom = New-Object System.Text.UTF8Encoding($true)
[System.IO.File]::WriteAllText($scriptPath, $content, $utf8Bom)

Write-Host ""
Write-Host "Done. Photos: $($files.Count)"
Write-Host "Previews regenerated with EXIF orientation applied."
Write-Host "Upload photos/, previews/ and script.js to GitHub."
