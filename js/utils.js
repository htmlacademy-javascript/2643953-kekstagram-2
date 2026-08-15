const DELAY = 500;
const dataErrorTemplate = document
  .querySelector("#data-error")
  .content.querySelector(".data-error");

export const showDataError = () => {
  const dataErrorNode = dataErrorTemplate.cloneNode(true);
  document.body.append(dataErrorNode);

  setTimeout(() => {
    dataErrorNode.remove();
  }, DELAY);
};

export const debounce = (callback, timeoutDelay = DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export const getFilteredData = (filter, data, actions) => {
  return actions[filter](data);
};