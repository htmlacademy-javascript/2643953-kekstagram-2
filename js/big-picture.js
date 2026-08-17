const COMMENTS_STEP = 5;
const modalNode = document.querySelector('.big-picture');
const imageNode = modalNode.querySelector('.big-picture__img img');
const captionNode = modalNode.querySelector('.social__caption');
const likesCountNode = modalNode.querySelector('.likes-count');
const commentsCountNode = modalNode.querySelector(
  '.social__comment-total-count',
);
const commentsListNode = modalNode.querySelector('.social__comments');
const bodyNode = document.body;
const commentsNumberNode = modalNode.querySelector(
  '.social__comment-shown-count',
);
const closeModalBtnNode = document.querySelector('.big-picture__cancel');
const commentTemplate = modalNode.querySelector('.social__comment');
const loaderCommentsNode = modalNode.querySelector('.comments-loader');

let localComments;
let renderedComments;

const closeModal = () => {
  modalNode.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
    bodyNode.classList.remove('modal-open');
  }
}

const showModal = () => {
  modalNode.classList.remove('hidden');
  bodyNode.classList.add('modal-open');
};

const renderStatistics = () => {
  commentsNumberNode.textContent = renderedComments;
};

const renderloaderComments = () => {
  if (localComments.length) {
    loaderCommentsNode.classList.remove('hidden');
    return;
  }
  loaderCommentsNode.classList.add('hidden');
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();

  localComments
    .splice(0, COMMENTS_STEP)
    .forEach(({ avatar, message, name }) => {
      const newCommentsNode = commentTemplate.cloneNode(true);
      const avatarNode = newCommentsNode.querySelector('.social__picture');
      avatarNode.src = avatar;
      avatarNode.alt = name;
      newCommentsNode.querySelector('.social__text').textContent = message;
      fragment.append(newCommentsNode);
      renderedComments++;
    });
  commentsListNode.appendChild(fragment);
  renderStatistics();
  renderloaderComments();
};

const renderModal = ({ url, description, likes, comments }) => {
  imageNode.src = url;
  imageNode.alt = description;
  captionNode.textContent = description;
  likesCountNode.textContent = likes;
  commentsCountNode.textContent = comments.length;
  localComments = [...comments];
  commentsListNode.innerHTML = '';
  renderedComments = 0;
  renderComments();
};

export const openModal = (photo) => {
  showModal();
  renderModal(photo);
  document.addEventListener('keydown', onDocumentKeydown);
};

closeModalBtnNode.addEventListener('click', () => {
  closeModal();
});

loaderCommentsNode.addEventListener('click', () => {
  renderComments();
});
