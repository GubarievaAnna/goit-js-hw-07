import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

function createBlockWithImage({ preview, original, description }) {
  return `<li><a class="gallery__item" href = "${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a></li>`;
}

galleryListEl.insertAdjacentHTML(
  "beforeend",
  galleryItems.map(createBlockWithImage).join("")
);

const gallery = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.8,
  showCounter: false,
  widthRatio: 0.6,
});
