import { getImagesByQuery } from './pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './render-functions.js';

const searchForm = document.querySelector('#search-form');
let lightbox = null;

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = event.currentTarget.elements.query.value.trim();

    if (!query) {
        iziToast.warning({
            title: 'Caution',
            message: 'Please enter a search query',
            position: 'topRight',
        });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(query);

        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
        } else {
            createGallery(data.hits);
            
            if (lightbox) {
                lightbox.refresh();
            } else {
                lightbox = new SimpleLightbox('.gallery a', {
                    captionsData: 'alt',
                    captionDelay: 250,
                });
            }
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images. Please try again later.',
            position: 'topRight',
        });
    } finally {
        hideLoader();
        searchForm.reset();
    }
});
