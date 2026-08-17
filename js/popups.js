export const Messages = {
  SUCCESS: 'success',
  ERROR: 'error',
};

const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const templates = {
  [Messages.SUCCESS]: successTemplate,
  [Messages.ERROR]: errorTemplate,
};

export const showMessage = (type) => {
  const popupNode = templates[type].cloneNode(true);
  document.body.append(popupNode);

  const onButtonClick = () => {
    closeMessage();
  };

  const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape') {
      closeMessage();
    }
  };

  const onOverlayClick = (evt) => {
    if (evt.target.classList.contains(type)) {
      closeMessage();
    }
  };

  function closeMessage() {
    popupNode.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  popupNode
    .querySelector(`.${type}__button`)
    .addEventListener('click', onButtonClick);
  popupNode.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onDocumentKeydown);
};
