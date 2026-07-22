

const formNode = document.querySelector('.img-upload__form');
const modalNode = formNode.querySelector('.img-upload__overlay');
const uploadInputNode = formNode.querySelector('#upload-file');

const cancelButtonNode = modalNode.querySelector('#upload-cancel');
const bodyNode = document.body;
const hashtagsNode = formNode.querySelector('.text__hashtags');
const descriptionNode = formNode.querySelector('.text__description');

const uploadWrapperNode = document.querySelector('.img-upload__field-wrapper');



const pristine = new Pristine(formNode, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'pristine-error'
});


const isValidHashtag = (hashtag) => {
  const hashtagRegex = /^#[a-zA-Zа-яА-ЯёЁ0-9]{1,19}$/;
  return hashtagRegex.test(hashtag);
};

const validateHashtags = (value) => {

  if (value.trim().length === 0) return true;

  const hashtags = value.trim().split(/\s+/);

  if (hashtags.length > 5) return false;

  const lowerHashtags = hashtags.map((tag) => tag.toLowerCase());
  const uniqueHashtags = new Set(lowerHashtags);
  if (uniqueHashtags.size !== hashtags.length) return false;

  return hashtags.every(isValidHashtag);
};



pristine.addValidator(hashtagsNode, validateHashtags, 'Неправильный хэштег');

pristine.addValidator(
  descriptionNode,
  (value) => value.length <= 140,
  'Длина комментария не может быть больше 140 символов'
);


const openUploadModal = () => {

  modalNode.classList.remove('hidden');
  bodyNode.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUploadModal = () => {
  modalNode.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadInputNode.value = '';
};


uploadInputNode.addEventListener('change', () => {
  openUploadModal();
});


cancelButtonNode.addEventListener('click', () => {
  closeUploadModal();
});

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape'
    && document.activeElement !== hashtagsNode
    && document.activeElement !== descriptionNode) {
    evt.preventDefault();
    closeUploadModal();
    bodyNode.classList.remove('modal-open');
  }

}

const showSuccessMessage = () => { };


formNode.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {

  }
});
