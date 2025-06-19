import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const refs = {
    formEl: document.querySelector('.form'),
    formInputEl: document.querySelector('.form-input-key-word'),
    formBtnEl: document.querySelector('.search-btn'),
}


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

    const options = {
        baseUrl: "https://pixabay.com/api/",
        apiKey: import.meta.env.VITE_PIXABAY_API_KEY,
        query: refs.formInputEl,
        // query: "elephant",
        imageType: "photo",
        orientation: "hohorizontal",
        safesearch: true,
    }
    
    const url = new URL(options.baseUrl);
    url.search = new URLSearchParams({
        key: options.apiKey,
        q: options.query,
        imageType: options.imageType,
        orientation: options.orientation,
        safesearch: options.safesearch,
    }).toString();

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}

refs.formEl.addEventListener('submit', handleSubmit);











    // Pixabay docs
// var API_KEY = '50902999-34d3d718e1412684e61a556a9';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });
