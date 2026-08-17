import { Filters, FiltersActions } from './const.js';
import { renderCards } from './render-cards.js';
import { debounce, getFilteredData } from './utils.js';

const filtersNode = document.querySelector('.img-filters');
const formFilterNode = filtersNode.querySelector('.img-filters__form');

let currentFilter = Filters.DEFAULT;
let allPhotos;

const debouncedRender = debounce(renderCards);
const showFilters = () => {
  filtersNode.classList.remove('img-filters--inactive');
};

export const initFilters = (photos) => {
  allPhotos = [...photos];

  showFilters();
  renderCards(allPhotos);
};

const setActiveButton = (button) => {
  filtersNode
    .querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

formFilterNode.addEventListener('click', ({ target }) => {
  const button = target.closest('.img-filters__button');

  if (button) {
    if (currentFilter === button.id) {
      return;
    }
    currentFilter = button.id;
    setActiveButton(button);
    const filteredPhotos = getFilteredData(
      currentFilter,
      allPhotos,
      FiltersActions,
    );
    debouncedRender(filteredPhotos);
  }
});
