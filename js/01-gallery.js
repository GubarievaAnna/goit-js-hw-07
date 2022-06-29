import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createBlockWithImage({ preview, original, description }) {
  return ` <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
}

const blocksWithImages = galleryItems.map(createBlockWithImage).join("");

galleryEl.insertAdjacentHTML("beforeend", blocksWithImages);

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault;
  if (event.target.nodeName !== "img") {
    return;
  }
}

//   const instance = basicLightbox.create(
//     `<img src="${event.target.dataset.source}" width="800" height="600">`
//   );

//   instance.show(() => console.log("lightbox now visible"));

//   basicLightbox
//     .create(
//       `<img width="1400" height="900" src="${event.target.dataset.source}"> `
//     )
//     .show();
// }

//
