const DELAY = 500;
const ERROR_DELAY = 5000;

const dataErrorTemplate = document
  .querySelector('#data-error')
  .content.querySelector('.data-error');

export const showDataError = () => {
  const dataErrorNode = dataErrorTemplate.cloneNode(true);
  document.body.append(dataErrorNode);

  setTimeout(() => {
    dataErrorNode.remove();
  }, ERROR_DELAY);
};

export const debounce = (callback, timeoutDelay = DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export const getFilteredData = (filter, data, actions) => actions[filter](data);

