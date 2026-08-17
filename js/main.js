import { getPhotos } from './api.js';
import './upload-form.js';
import { showDataError } from './utils.js';
import { initFilters } from './filters.js';

getPhotos()
  .then((photos) => {
    initFilters(photos);
  })
  .catch(() => {
    showDataError();
  });
