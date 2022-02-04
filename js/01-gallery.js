import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
                <a class="gallery__link" href="large-image.jpg">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", openModal);

let instance = null;

function openModal(event) {
  event.preventDefault();

  if (event.target.tagName !== "IMG") {
    return;
  }

  window.addEventListener("keydown", escCloseModal);

  const dataSource = event.target.dataset.source;

  instance = basicLightbox.create(`
    <img src="${dataSource}" width="800" height="600">
`);

  instance.show();
}

function escCloseModal(event) {
  console.log(event);
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", escCloseModal);
  }
}
