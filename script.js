/*
  ВАЖНО:
  GitHub Pages не умеет автоматически получать список файлов из папки photos/.
  Поэтому добавьте имена своих фотографий в массив PHOTOS ниже.

  Пример:
  const PHOTOS = [
    "IMG_001.jpg",
    "IMG_002.jpg",
    "vacation/photo-03.webp"
  ];

  Можно использовать JPG, JPEG, PNG, WEBP, GIF, AVIF и другие форматы,
  которые поддерживает браузер.
*/

const PHOTOS = [
 "0DTnE9yFBiIoD9ernFbX9vPbTIstTJkM_SwhdOoib0zosm5QFVq-sj6ZtTOK6gIOG08hDEvQv3q7GEG1ghWQ4Fzr.jpg",
"3I7A7075.JPG",
"3I7A7183.jpg",
"3I7A7235.jpg",
"3I7A7237.JPG",
"3I7A7305.JPG",
"3I7A7311.JPG",
"3I7A7358.JPG",
"3I7A7368.JPG",
"3I7A7376.JPG",
"3I7A7378.JPG",
"3I7A7409.JPG",
"3I7A7414.JPG",
"3I7A7418.JPG",
"3I7A7420.JPG",
"3I7A7441.JPG",
"3I7A7454.JPG",
"3I7A7461.JPG",
"3I7A7464.JPG",
"3I7A7469.JPG",
"3I7A7496.JPG",
"3I7A7500.JPG",
"3I7A7507.jpg",
"3I7A7511.JPG",
"3I7A7514 (1).JPG",
"3I7A7514.jpg",
"3I7A7515.JPG",
"3I7A7527.JPG",
"3I7A7529.JPG",
"3I7A7537.JPG",
"3I7A7566.jpg",
"3I7A7643.JPG",
"3I7A7650.jpg",
"3I7A7653.jpg",
"3I7A7657.jpg",
"3I7A7686.jpg",
"3I7A7699.JPG",
"3I7A7702.JPG",
"3I7A7725.JPG",
"3I7A7727.JPG",
"3I7A7730.JPG",
"3I7A7732.JPG",
"3I7A7735.JPG",
"3I7A7736.jpg",
"3I7A7741.JPG",
"3I7A7761.jpg",
"3I7A7775.JPG",
"3I7A7780.jpg",
"3I7A7851.JPG",
"3I7A7890.JPG",
"3I7A7893.JPG",
"3I7A7893_1.jpg",
"3I7A7933.JPG",
"3I7A7941.JPG",
"3I7A7970.JPG",
"3I7A7973.jpg",
"3I7A7981.jpg",
"3I7A7982.JPG",
"3I7A7984.jpg",
"3I7A7986 (1).JPG",
"3I7A7986.jpg",
"3I7A7988.JPG",
"3I7A7990.JPG",
"3I7A7992.JPG",
"3I7A7995.JPG",
"3I7A7998 (1).JPG",
"3I7A7998.jpg",
"3I7A8002 (1).JPG",
"3I7A8002.jpg",
"3I7A8003.JPG",
"3I7A8004.JPG",
"3I7A8005.jpg",
"3I7A8010.JPG",
"3I7A8016.JPG",
"3I7A8017.JPG",
"3I7A8020.jpg",
"3I7A8053.jpg",
"3I7A8073.jpg",
"3I7A8089.jpg",
"3I7A8108.jpg",
"3I7A8121.jpg",
"3I7A8122.jpg",
"3I7A8126 (1).jpg",
"3I7A8126.jpg",
"3I7A8165.jpg",
"3I7A8248.jpg",
"3I7A8258.jpg",
"3I7A8324.jpg",
"3I7A8398.jpg",
"3I7A8467.jpg",
"3I7A8506.jpg",
"3I7A8591.jpg",
"3I7A8677.jpg",
"3I7A8704.jpg",
"3I7A8729.jpg",
"3I7A8774.jpg",
"3I7A8824.jpg",
"3I7A8870.jpg",
"3I7A8880.jpg",
"3I7A8895.jpg",
"3I7A8923.jpg",
"3I7A8930.jpg",
"3I7A8970.jpg",
"3I7A9019.jpg",
"3I7A9021.jpg",
"3I7A9105.jpg",
"3I7A9122.jpg",
"3I7A9140.jpg",
"3I7A9204.JPG",
"3I7A9207.JPG",
"3I7A9223.JPG",
"3I7A9283.JPG",
"3I7A9316.JPG",
"3I7A9325.JPG",
"3I7A9326.JPG",
"3I7A9343.JPG",
"3I7A9346.JPG",
"3I7A9366.JPG",
"3I7A9375.JPG",
"3I7A9385.JPG",
"3I7A9389.JPG",
"3I7A9407.JPG",
"3I7A9410.JPG",
"3I7A9413.JPG",
"3I7A9476.JPG",
"3I7A9561.jpg",
"3I7A9611.jpg",
"3I7A9619.JPG",
"3I7A9627 (1).JPG",
"3I7A9627.jpg",
"3I7A9750.jpg",
"3I7A9799.JPG",
"3I7A9800.JPG",
"3I7A9801 (1).JPG",
"3I7A9801.jpg",
"3I7A9802.JPG",
"3I7A9803.JPG",
"3I7A9804.JPG",
"3I7A9807 (1).JPG",
"3I7A9807.jpg",
"3I7A9808.JPG",
"3I7A9809.JPG",
"3I7A9813.JPG",
"3I7A9816.JPG",
"3I7A9831.JPG",
"3I7A9833.JPG",
"3I7A9834.JPG",
"3I7A9836.jpg",
"3I7A9838.JPG",
"3I7A9839.JPG",
"3I7A9843.JPG",
"3I7A9848.JPG",
"3I7A9867.jpg",
"3I7A9871.JPG",
"3I7A9897.JPG",
"3I7A9901.JPG",
"3I7A9902.JPG",
"3I7A9903.jpg",
"3I7A9907.JPG",
"3I7A9912.jpg",
"3I7A9913.JPG",
"3I7A9916.JPG",
"3I7A9918.JPG",
"3I7A9920.JPG",
"3I7A9923.JPG",
"3I7A9954.JPG",
"3I7A9955.JPG",
"3I7A9956.jpg",
"3I7A9957.JPG",
"3I7A9958.jpg",
"3I7A9959.JPG",
"3I7A9962.JPG",
"3I7A9963 (1).JPG",
"3I7A9963.jpg",
"3I7A9971.jpg",
"3I7A9973.JPG",
"3I7A9974 (1).JPG",
"3I7A9974.jpg",
"3I7A9981 (1).JPG",
"3I7A9981.jpg",
"3I7A9982.jpg",
"3I7A9983 (1).JPG",
"3I7A9983.jpg",
"3I7A9986 (1).JPG",
"3I7A9986.jpg",
"3I7A9988.JPG",
"3I7A9990.JPG",
"3I7A9994 (1).JPG",
"3I7A9994.jpg",
"3I7A9998.jpg",
"9677.jpg",
"gKp8r__sm3zw0nav44Wa_t662UTM1bk_4g3SD01ugDPXfw_iOYEff4OWEC1NkYAyVTX98Dv5xXNjyKxtD3jM3Hbu.jpg",
"odQ7p-F0JpVwpSJhnxs2dbfRl0KeHrT5RV5OI3OuM59H9uXmSfMDamm2vHRhwpMUEcdKjNgCpnMK1kcDSyrpCc15.jpg",
"qQIXU0Tyy2UPJ6eY445vM-bwKPTVonnNinK2kYchZDx8o5YPZxS0-FY9LdoeqTTDx2yQu94IFrwt5oRwMRyWT7oP.jpg",
"VCUkXKTmycozwBpub_s9iTkSgXhWFIJ_91WR3qcJoG2ZnpYtTdXDGqk0mvxCHfMK42LSEE2VaLUAx-zeXylOrDiE.jpg",
"VpSzpfThhWkY-fMilxsCeAD4U1axQprErpfxDQwlpFETd7lXnt8eyf3rtw0ode3uF7vX2WyWTSyzDFgJw82WbgXC.jpg"
];

const PHOTO_DIR = "photos/";

const gallery = document.getElementById("gallery");
const emptyState = document.getElementById("emptyState");
const galleryInfo = document.getElementById("galleryInfo");
const selectAllBtn = document.getElementById("selectAllBtn");
const downloadSelectedBtn = document.getElementById("downloadSelectedBtn");
const selectedCount = document.getElementById("selectedCount");

const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");
const viewerCounter = document.getElementById("viewerCounter");
const viewerDownloadBtn = document.getElementById("viewerDownloadBtn");
const viewerStage = document.getElementById("viewerStage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomResetBtn = document.getElementById("zoomResetBtn");

const selected = new Set();
let currentIndex = 0;
let scale = 1;
let translateX = 0;
let translateY = 0;
let dragging = false;
let dragStartX = 0;
let dragStartY = 0;
let dragOriginX = 0;
let dragOriginY = 0;

function photoUrl(filename) {
  return PHOTO_DIR + filename.split("/").map(encodeURIComponent).join("/");
}

function displayName(filename) {
  return filename.split("/").pop();
}

function renderGallery() {
  gallery.innerHTML = "";

  if (!PHOTOS.length) {
    galleryInfo.textContent = "0 фотографий";
    emptyState.hidden = false;
    selectAllBtn.disabled = true;
    return;
  }

  emptyState.hidden = true;
  selectAllBtn.disabled = false;
  galleryInfo.textContent = `${PHOTOS.length} ${pluralPhotos(PHOTOS.length)}`;

  PHOTOS.forEach((filename, index) => {
    const card = document.createElement("article");
    card.className = "photo-card";
    card.dataset.index = index;
    card.tabIndex = 0;
    card.setAttribute("aria-label", `Открыть ${displayName(filename)}`);

    const img = document.createElement("img");
    img.src = photoUrl(filename);
    img.alt = displayName(filename);
    img.loading = "lazy";
    img.decoding = "async";

    const label = document.createElement("label");
    label.className = "select-box";
    label.title = "Выбрать фото";
    label.addEventListener("click", (event) => event.stopPropagation());

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = selected.has(index);
    checkbox.setAttribute("aria-label", `Выбрать ${displayName(filename)}`);
    checkbox.addEventListener("change", () =>
      toggleSelection(index, checkbox.checked),
    );

    const mark = document.createElement("span");
    mark.className = "select-mark";

    const download = document.createElement("a");
    download.className = "card-download";
    download.href = photoUrl(filename);
    download.download = displayName(filename);
    download.title = "Скачать";
    download.setAttribute("aria-label", `Скачать ${displayName(filename)}`);
    download.innerHTML = "↓";
    download.addEventListener("click", (event) => event.stopPropagation());

    label.append(checkbox, mark);
    card.append(img, label, download);

    card.addEventListener("click", () => openViewer(index));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openViewer(index);
      }
    });

    if (selected.has(index)) card.classList.add("selected");
    gallery.appendChild(card);
  });

  updateSelectionUI();
}

function pluralPhotos(number) {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return "фотографий";
  if (n1 > 1 && n1 < 5) return "фотографии";
  if (n1 === 1) return "фотография";
  return "фотографий";
}

function toggleSelection(index, checked) {
  if (checked) selected.add(index);
  else selected.delete(index);

  const card = gallery.querySelector(`[data-index="${index}"]`);
  card?.classList.toggle("selected", checked);
  updateSelectionUI();
}

function updateSelectionUI() {
  const count = selected.size;
  selectedCount.textContent = count ? `(${count})` : "";
  downloadSelectedBtn.disabled = count === 0;

  const allSelected = PHOTOS.length > 0 && count === PHOTOS.length;
  selectAllBtn.textContent = allSelected ? "Снять выделение" : "Выбрать все";
}

selectAllBtn.addEventListener("click", () => {
  const allSelected = selected.size === PHOTOS.length;

  selected.clear();
  if (!allSelected) {
    PHOTOS.forEach((_, index) => selected.add(index));
  }

  renderGallery();
});

downloadSelectedBtn.addEventListener("click", async () => {
  if (!selected.size) return;

  /*
    В полностью статическом сайте без внешних библиотек браузер не может
    собрать ZIP "на лету". Поэтому выбранные файлы скачиваются по одному.
    Браузер может один раз попросить разрешить множественные загрузки.
  */
  const indexes = [...selected].sort((a, b) => a - b);
  const originalText = downloadSelectedBtn.innerHTML;
  downloadSelectedBtn.disabled = true;
  downloadSelectedBtn.textContent = "Скачивание…";

  for (const index of indexes) {
    triggerDownload(PHOTOS[index]);
    await sleep(220);
  }

  downloadSelectedBtn.innerHTML = originalText;
  downloadSelectedBtn.disabled = false;
  updateSelectionUI();
});

function triggerDownload(filename) {
  const link = document.createElement("a");
  link.href = photoUrl(filename);
  link.download = displayName(filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function openViewer(index) {
  currentIndex = index;
  viewer.hidden = false;
  document.body.style.overflow = "hidden";
  loadViewerImage();
}

function closeViewer() {
  viewer.hidden = true;
  document.body.style.overflow = "";
  resetTransform();
}

function loadViewerImage() {
  const filename = PHOTOS[currentIndex];
  viewerImage.src = photoUrl(filename);
  viewerImage.alt = displayName(filename);
  viewerCounter.textContent = `${currentIndex + 1} / ${PHOTOS.length} · ${displayName(filename)}`;
  viewerDownloadBtn.href = photoUrl(filename);
  viewerDownloadBtn.download = displayName(filename);
  resetTransform();
}

function showPrevious() {
  currentIndex = (currentIndex - 1 + PHOTOS.length) % PHOTOS.length;
  loadViewerImage();
}

function showNext() {
  currentIndex = (currentIndex + 1) % PHOTOS.length;
  loadViewerImage();
}

function setScale(nextScale, clientX = null, clientY = null) {
  const oldScale = scale;
  scale = Math.min(8, Math.max(1, nextScale));

  if (clientX !== null && clientY !== null && oldScale !== scale) {
    const rect = viewerStage.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    const ratio = scale / oldScale;
    translateX = x - (x - translateX) * ratio;
    translateY = y - (y - translateY) * ratio;
  }

  if (scale === 1) {
    translateX = 0;
    translateY = 0;
  }

  applyTransform();
}

function resetTransform() {
  scale = 1;
  translateX = 0;
  translateY = 0;
  applyTransform();
}

function applyTransform() {
  viewerImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  zoomResetBtn.textContent = `${Math.round(scale * 100)}%`;
}

zoomInBtn.addEventListener("click", () => setScale(scale * 1.25));
zoomOutBtn.addEventListener("click", () => setScale(scale / 1.25));
zoomResetBtn.addEventListener("click", resetTransform);
prevBtn.addEventListener("click", showPrevious);
nextBtn.addEventListener("click", showNext);

document.querySelectorAll("[data-close-viewer]").forEach((element) => {
  element.addEventListener("click", closeViewer);
});

viewerStage.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    const factor = event.deltaY < 0 ? 1.16 : 1 / 1.16;
    setScale(scale * factor, event.clientX, event.clientY);
  },
  { passive: false },
);

viewerStage.addEventListener("dblclick", (event) => {
  if (scale === 1) setScale(2.5, event.clientX, event.clientY);
  else resetTransform();
});

viewerStage.addEventListener("pointerdown", (event) => {
  if (scale <= 1) return;
  dragging = true;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  dragOriginX = translateX;
  dragOriginY = translateY;
  viewerImage.classList.add("dragging");
  viewerStage.setPointerCapture(event.pointerId);
});

viewerStage.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  translateX = dragOriginX + (event.clientX - dragStartX);
  translateY = dragOriginY + (event.clientY - dragStartY);
  applyTransform();
});

function stopDragging() {
  dragging = false;
  viewerImage.classList.remove("dragging");
}

viewerStage.addEventListener("pointerup", stopDragging);
viewerStage.addEventListener("pointercancel", stopDragging);

document.addEventListener("keydown", (event) => {
  if (viewer.hidden) return;

  if (event.key === "Escape") closeViewer();
  if (event.key === "ArrowLeft") showPrevious();
  if (event.key === "ArrowRight") showNext();
  if (event.key === "+" || event.key === "=") setScale(scale * 1.25);
  if (event.key === "-") setScale(scale / 1.25);
  if (event.key === "0") resetTransform();
});

renderGallery();
