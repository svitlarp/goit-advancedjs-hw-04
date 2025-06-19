import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGallery } from './render-function.js';
import { createUrl } from "./pixabay-api.js";


const refs = {
    formEl: document.querySelector('.form'),
    formInputEl: document.querySelector('.form-input-key-word'),
    formBtnEl: document.querySelector('.search-btn'),
    galleryListEl: document.querySelector(".gallery"),
    loaderEl: document.querySelector('.loader'),
}

function handleSubmit(event) {
    event.preventDefault();
    const keyWord = event.target.elements.keyword.value;
    console.log(keyWord);

    if (keyWord === '') {
        iziToast.warning({
            title: 'Caution',
            message: 'No keyword to start search',
            position: 'topRight',
          }); 
        return;
    }

    refs.loaderEl.classList.remove('hidden');
    const url = createUrl(keyWord);

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const responseApi = data;
            console.log(data);
            refs.loaderEl.classList.add('hidden');
            createGallery(data.hits.slice(0, 9));
        })
        .catch(error => {
            console.log(error);
        });
    
    refs.formEl.reset();
}

refs.formEl.addEventListener('submit', handleSubmit);

