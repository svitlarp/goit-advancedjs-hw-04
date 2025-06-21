import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import { createGallery } from './js/render-functions.js';
import { createUrl } from "./js/pixabay-api.js";


const refs = {
    formEl: document.querySelector('.form'),
    formInputEl: document.querySelector('.form-input-key-word'),
    formBtnEl: document.querySelector('.search-btn'),
    galleryListEl: document.querySelector(".gallery"),
    loaderEl: document.querySelector('.loader'),
}

async function handleSubmit(event) {
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
    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        createGallery(data.hits.slice(0, 9));
    } catch (error) {
        console.error(error);
    } finally {
        refs.loaderEl.classList.add('hidden');
        refs.formEl.reset();
    }
}

refs.formEl.addEventListener('submit', handleSubmit);

