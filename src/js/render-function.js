import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryListEl = document.querySelector(".gallery");

const createGalleryItemEl = (image) => {
  return `
     <li class="gallery-item">
      <a class="gallery-link" href=${image.original}>
        <img
          class="gallery-image"
          src="${image.preview}"
          alt="${image.description}"
         />
      </a>
     </li>
     `;
}

export function createGallery(images) {
    const galleryArr = images.map(el => createGalleryItemEl(el)).join('');
    galleryListEl.innerHTML = galleryArr;
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
}
