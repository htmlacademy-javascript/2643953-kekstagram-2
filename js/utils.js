const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export {getRandomPositiveInteger};
export {getRandomArrayElement};


export const showDataError = ()=> {
  const dataErrorNode = dataErrorTemplate.cloneNode(true);
  document.body.append(dataErrorNode);

  setTimeout(() =>{
    dataErrorNode.remove();

  }, 5000);

};