
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryListEl = document.querySelector(".gallery");

const createGalleryItemEl = (image) => {
    return `
        <li class="gallery-item">
        <a class="gallery-link" href=${image.largeImageURL}>
            <img
            class="gallery-image"
            src="${image.previewURL}"
            alt="${image.tags}"
            title="Likes \n ${image.likes} Views \n ${image.views} Comments \n ${image.comments} Downloads \n ${image.downloads}"
            />
        </a>
        </li>
        `;
}

export function createGallery(images) {
    const galleryArr = images.map(el => createGalleryItemEl(el)).join('');
  galleryListEl.innerHTML = galleryArr;
  // galleryListEl.insertAdjacentHTML('beforeend', galleryArr);

    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'title',
        captionDelay: 250,
      });
}
