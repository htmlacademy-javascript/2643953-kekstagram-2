import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendFormData } from './api.js';
import { Messages, showMessage } from './popups.js';

const formNode = document.querySelector('#upload-select-image');
const modalNode = formNode.querySelector('.img-upload__overlay');
const uploadInputNode = formNode.querySelector('#upload-file');
const cancelButtonNode = modalNode.querySelector('#upload-cancel');
const hashtagsNode = formNode.querySelector('.text__hashtags');
const descriptionNode = formNode.querySelector('.text__description');
const submitButtonNode = formNode.querySelector('#upload-submit');
const radiosPreviewNode = formNode.querySelectorAll('.effects__preview');
const imagePreviewNode = formNode.querySelector('.img-upload__preview img');

const resetForm = () => {
  formNode.reset();
  resetScale();
  resetEffects();
  resetValidation();
};

const canCloseModal = () => !document.querySelector(`.${Messages.ERROR}`);

const onDocumentKeydown = (evt) => {
  if (
    evt.key === 'Escape' &&
    document.activeElement !== hashtagsNode &&
    document.activeElement !== descriptionNode &&
    canCloseModal()
  ) {
    closeUploadModal();
    document.body.classList.remove('modal-open');
  }
};

const openUploadModal = () => {
  modalNode.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  const file = uploadInputNode.files[0];
  const currentUrl = URL.createObjectURL(file);
  imagePreviewNode.src = currentUrl;
  radiosPreviewNode.forEach((item) => {
    item.style.backgroundImage = `url(${currentUrl})`;
  });
};

function closeUploadModal() {
  modalNode.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  resetForm();
}

uploadInputNode.addEventListener('change', () => {
  openUploadModal();
});

cancelButtonNode.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeUploadModal();
});

formNode.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!isValid()) {
    return;
  }

  submitButtonNode.disabled = true;
  const formData = new FormData(formNode);

  sendFormData(formData)
    .then(() => {
      closeUploadModal();
      showMessage(Messages.SUCCESS);
    })
    .catch(() => {
      showMessage(Messages.ERROR);
    })
    .finally(() => {
      submitButtonNode.disabled = false;
    });
});
