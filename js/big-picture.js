
const modalNode = document.querySelector('.big-picture');
const imageNode = modalNode.querySelector('.big-picture__img img');
const captionNode = modalNode.querySelector('.social__caption');
const likesCountNode = modalNode.querySelector('.likes-count');
const commentsCountNode = modalNode.querySelector('.social__comment-total-count');
const commentsListNode = modalNode.querySelector('.social__comments');
const commentsNumberNode = modalNode.querySelector('.social__comment-shown-count');



export const openModal = (photo) => {
  modalNode.classList.remove('hidden');
  imageNode.src = photo.url;
  imageNode.alt = photo.description;
  captionNode.textContent = photo.description;
  likesCountNode.textContent = photo.likes;
  commentsCountNode.textContent = photo.comments.length;
  const maxShow = 5;

  commentsNumberNode.textContent = Math.min(maxShow, photo.comments.length);
  const showComments = parseInt(commentsNumberNode.textContent, 10);
  const fragment = document.createDocumentFragment();

  photo.comments.slice(0, showComments).forEach((comment) => {
    const commentNode = document.createElement('li');
    commentNode.className = 'social__comment';

    const commentPictureNode = document.createElement('img');
    commentPictureNode.className = 'social__picture';
    commentPictureNode.src = comment.avatar;
    commentPictureNode.alt = comment.name;
    commentPictureNode.width = 35;
    commentPictureNode.height = 35;

    const commentTextNode = document.createElement('p');
    commentTextNode.className = 'social__text';
    commentTextNode.textContent = comment.message;

    commentNode.appendChild(commentPictureNode);
    commentNode.appendChild(commentTextNode);
    fragment.appendChild(commentNode);
  });
  commentsListNode.innerHTML = '';
  commentsListNode.appendChild(fragment);
};

export const closeModal = ()=>{

   modalNode.classList.add('hidden');
};
