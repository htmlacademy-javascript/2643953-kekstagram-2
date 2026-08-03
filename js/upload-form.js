import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import './effects.js';
import { resetEffects } from './effects.js';

const formNode = document.querySelector("#upload-select-image");
const modalNode = formNode.querySelector(".img-upload__overlay");
const uploadInputNode = formNode.querySelector("#upload-file");
const cancelButtonNode = modalNode.querySelector("#upload-cancel");
const bodyNode = document.body;
const hashtagsNode = formNode.querySelector(".text__hashtags");
const descriptionNode = formNode.querySelector(".text__description");

const openUploadModal = () => {
  modalNode.classList.remove("hidden");
  bodyNode.classList.add("modal-open");
  document.addEventListener("keydown", onDocumentKeydown);
};

const closeUploadModal = () => {
  modalNode.classList.add("hidden");
  formNode.reset();
  resetValidation();
  resetScale();
  resetEffects();
  document.removeEventListener("keydown", onDocumentKeydown);
  
};

uploadInputNode.addEventListener("change", () => {
  openUploadModal();
});

cancelButtonNode.addEventListener("click", (evt) => {
  evt.preventDefault();
  closeUploadModal();
});

function onDocumentKeydown(evt) {
  if (
    evt.key === "Escape" &&
    document.activeElement !== hashtagsNode &&
    document.activeElement !== descriptionNode
  ) {
    evt.preventDefault();
    closeUploadModal();
    bodyNode.classList.remove("modal-open");
  }
}

formNode.addEventListener("submit", (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});

