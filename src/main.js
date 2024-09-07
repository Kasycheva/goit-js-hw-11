import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api'; // Исправлено
import { createCards } from './js/render-functions';

const form = document.querySelector('.form');
const galleryList = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader');
const lightBox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

const onSearchSubmit = e => {
  e.preventDefault();
  loader.classList.remove('hidden');

  const value = e.target.elements.inputField.value.toLowerCase().trim();
  if (!value) {
    iziToast.error({
      title: 'Error',
      message: 'You need to type something in the field!',
      position: 'topRight',
    });
    loader.classList.add('hidden');
    return;
  }

  fetchImages(value) 
    .then(img => {
      if (img.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        createCards(img.hits);
        lightBox.refresh();
      }
    })
    .catch(err => {
      iziToast.error({
        message: `There was an error: ${err.message}. Please try again!`,
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.classList.add('hidden');
    });

  form.reset();
};

form.addEventListener('submit', onSearchSubmit);
