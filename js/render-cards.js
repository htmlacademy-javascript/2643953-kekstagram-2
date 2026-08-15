import { openModal } from "./big-picture.js";

const cardContainerNode = document.querySelector(".pictures");
const cardTemplate = document
  .querySelector("#picture")
  .content.querySelector(".picture");

let localPhotos;

export const renderCards = (pictures) => {
  document.querySelectorAll(".picture").forEach((item) => {
    item.remove();
  });
  localPhotos = [...pictures];
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const newCardNode = cardTemplate.cloneNode(true);
    const newCardImgNode = newCardNode.querySelector(".picture__img");
    newCardImgNode.src = picture.url;
    newCardImgNode.alt = picture.description;
    newCardNode.querySelector(".picture__comments").textContent =
      picture.comments.length;
    newCardNode.querySelector(".picture__likes").textContent = picture.likes;
    fragment.append(newCardNode);

    newCardNode.dataset.id = picture.id;
  });
  cardContainerNode.append(fragment);
};

cardContainerNode.addEventListener("click", (evt) => {
  const cardNode = evt.target.closest(".picture");
  if (cardNode) {
    const currentId = Number(cardNode.dataset.id);
    const currentPhoto = localPhotos.find((item) => item.id === currentId);
    openModal(currentPhoto);
  }
});