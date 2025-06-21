export function createUrl(keyword, page = 1) {
    const options = {
        baseUrl: "https://pixabay.com/api/",
        apiKey: '50902999-34d3d718e1412684e61a556a9',
        query: keyword,
        imageType: "photo",
        orientation: "hohorizontal",
        safesearch: true,
        perPage: 15,
        page: page
    }
    
    const url = new URL(options.baseUrl);
    url.search = new URLSearchParams({
        key: options.apiKey,
        q: options.query,
        imageType: options.imageType,
        orientation: options.orientation,
        safesearch: options.safesearch,
        per_page: options.perPage,
        page: options.page,
    }).toString();

    return url;
}