//import {photos} from './data.js';
import { getPhotos } from './api.js'
//import { renderCards } from "./render-cards.js";
import './upload-form.js';
import { showDataError } from './utils.js';
//renderCards(photos);
import { initFilters } from './filters.js';


getPhotos()
  .then((photos) => {
     initFilters(photos);
  })
  .catch(() => {
    showDataError();
  });
  


