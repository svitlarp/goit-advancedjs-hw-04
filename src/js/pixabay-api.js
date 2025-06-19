const refs = {
    formInputEl: document.querySelector('.form-input-key-word'),
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

export const url = new URL(options.baseUrl);
url.search = new URLSearchParams({
    key: options.apiKey,
    q: options.query,
    imageType: options.imageType,
    orientation: options.orientation,
    safesearch: options.safesearch,
}).toString();

