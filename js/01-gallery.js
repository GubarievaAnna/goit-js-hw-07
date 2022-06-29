import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
let instance;

function createBlockWithImage({ preview, original, description }) {
  return ` <div class="gallery__item">
        <a class="gallery__link" href = "${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
}

galleryEl.insertAdjacentHTML(
  "beforeend",
  galleryItems.map(createBlockWithImage).join("")
);

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const urlEl = event.target.dataset.source;

  instance = basicLightbox.create(`
      <img src="${urlEl}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener("keydown", onKeyboardPress);
}

function onKeyboardPress(event) {
  if (event.code === "Escape") {
    instance.close();
  }
  document.removeEventListener("keydown", onKeyboardPress);
}
