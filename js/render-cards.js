
import { openModal } from './big-picture.js';
import { closeModal } from './big-picture.js';
const cardContainerNode = document.querySelector('.pictures');
const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');
const closeModalBtn = document.querySelector('.big-picture__cancel');
export const renderCards = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const newCardNode = cardTemplate.cloneNode(true);
    const newCardImgNode = newCardNode.querySelector('.picture__img');
    newCardImgNode.src = picture.url;
    newCardImgNode.alt = picture.description;
    newCardNode.querySelector('.picture__comments').textContent = picture.comments.length;
    newCardNode.querySelector('.picture__likes').textContent = picture.likes;
    fragment.append(newCardNode);

    newCardNode.addEventListener('click', () => {

      openModal(picture);
    });

    closeModalBtn.addEventListener('click', () => {

      closeModal();
    });


    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closeModal();
      }
    });


  });
  cardContainerNode.append(fragment);

}
