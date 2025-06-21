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
    formLoadMoreBtn: document.querySelector('.load-more-btn'),
    galleryListEl: document.querySelector(".gallery"),
    loaderEl: document.querySelector('.loader'),
} 

let currentPage = 1;
let keyWord = '';

async function handleSubmit(event) {
    event.preventDefault();
    keyWord = event.target.elements.keyword.value;
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

    const url = createUrl(keyWord, currentPage);

    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        console.log(data.totalHits);


        if (data.total === 0) {
            alert(`Зображень по ключовому слову ${keyWord} не знайдено`);
            // refs.gallery.innerHTML = '';
            return;
          }
      
          if (data.totalHits > 1) {
            refs.formLoadMoreBtn.classList.remove('hidden');
            refs.formLoadMoreBtn.addEventListener('click', () => {
                  handleLoadMoreBtnClick(keyWord)
            });
            createGallery(data.hits);  
          }

        createGallery(data.hits);
        
    } catch (error) {
        console.error(error);
    } finally {
        refs.loaderEl.classList.add('hidden');
        refs.formEl.reset();
    }
}

refs.formEl.addEventListener('submit', handleSubmit);

async function handleLoadMoreBtnClick(keyWord) {
    console.log('Click LoadMore Button');
    try {
        currentPage = currentPage + 1;
        const url = createUrl(keyWord, currentPage);
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
    } catch (err) {
        console.error(error);
    }
}