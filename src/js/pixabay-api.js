export function createUrl(keyword) {
    const options = {
        baseUrl: "https://pixabay.com/api/",
        apiKey: import.meta.env.VITE_PIXABAY_API_KEY,
        query: keyword,
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

    return url;
}