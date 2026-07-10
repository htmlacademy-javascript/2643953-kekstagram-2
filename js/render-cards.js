const cardContainer = document.querySelector('.pictures');
const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const renderCards = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const newCard = cardTemplate.cloneNode(true);
    const newCardImg = newCard.querySelector('.picture__img');
    newCardImg.src = picture.url;
    newCardImg.alt = picture.description;
    newCard.querySelector('.picture__comments').textContent = picture.comments.length;
    newCard.querySelector('.picture__likes').textContent = picture.likes;
    fragment.append(newCard);
  });
  cardContainer.append(fragment);
}
