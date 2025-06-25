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

refs.formLoadMoreBtn.addEventListener('click', () => {
    handleLoadMoreBtnClick(keyWord);
});

async function handleSubmit(event) {
    event.preventDefault();
    currentPage = 1;
    keyWord = event.target.elements.keyword.value.trim();
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
    refs.galleryListEl.innerHTML = '';
    refs.formLoadMoreBtn.classList.add('hidden');

    const url = createUrl(keyWord, currentPage);

    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        console.log(data.totalHits);
        refs.galleryListEl.innerHTML = '';


        if (data.total === 0) {
            iziToast.warning({
                title: 'Caution',
                message: 'Any image matches with given keyword.',
                position: 'topRight',
            });
            refs.loaderEl.classList.add('hidden');
            return;
          }
      
          if (data.totalHits > 15) {
            refs.formLoadMoreBtn.classList.remove('hidden');
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
        console.log(currentPage);
        createGallery(data.hits);

        const {height: cardHeight} = document.querySelector('.gallery').firstElementChild.getBoundingClientRect();
        console.log(cardHeight);

        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
          });

        if (currentPage * 15 >= data.totalHits) {
            refs.formLoadMoreBtn.classList.add('hidden');
            iziToast.info({
                title: 'Caution',
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
              }); 
        }
    } catch (err) {
        console.error(error);
    }
}