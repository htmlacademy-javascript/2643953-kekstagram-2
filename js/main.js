//import {photos} from './data.js';
import { getPhotos } from './api.js'
import { renderCards } from "./render-cards.js";
import './upload-form.js';
import { showDataError } from './utils.js';
//renderCards(photos);


getPhotos()
  .then((photos) => {
     renderCards(photos);
  })
  .catch(() => {
    showDataError();
  });
  


