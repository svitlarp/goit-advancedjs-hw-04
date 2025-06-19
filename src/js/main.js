import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGallery } from './render-function.js';
import { url } from "./pixabay-api.js";


const refs = {
    formEl: document.querySelector('.form'),
    formInputEl: document.querySelector('.form-input-key-word'),
    formBtnEl: document.querySelector('.search-btn'),
    galleryListEl: document.querySelector(".gallery"),
}

console.dir(refs.galleryListEl);


function handleSubmit(event) {
    event.preventDefault();
    const keyWord = event.target.elements.keyword.value;
    console.log(keyWord);
    console.log(typeof keyWord);

    if (keyWord === '') {
        iziToast.warning({
            title: 'Caution',
            message: 'No keyword to start search',
            position: 'topRight',
          }); 
        return;
    }

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const responseApi = data;
            console.log(data);
            createGallery(data.hits);
        })
        .catch(error => {
            console.log(error);
        });
}

refs.formEl.addEventListener('submit', handleSubmit);

