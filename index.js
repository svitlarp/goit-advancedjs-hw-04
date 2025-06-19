import{S as a,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();const u=document.querySelector(".gallery"),d=t=>`
        <li class="gallery-item">
        <a class="gallery-link" href=${t.largeImageURL}>
            <img
            class="gallery-image"
            src="${t.previewURL}"
            alt="${t.tags}"
            title="Likes 
 ${t.likes} Views 
 ${t.views} Comments 
 ${t.comments} Downloads 
 ${t.downloads}"
            />
        </a>
        </li>
        `;function f(t){const e=t.map(l=>d(l)).join("");u.innerHTML=e,new a(".gallery a",{captionsData:"title",captionDelay:250})}function m(t){const e={baseUrl:"https://pixabay.com/api/",apiKey:void 0,query:t,imageType:"photo",orientation:"hohorizontal",safesearch:!0},l=new URL(e.baseUrl);return l.search=new URLSearchParams({key:e.apiKey,q:e.query,imageType:e.imageType,orientation:e.orientation,safesearch:e.safesearch}).toString(),l}const s={formEl:document.querySelector(".form"),formInputEl:document.querySelector(".form-input-key-word"),formBtnEl:document.querySelector(".search-btn"),galleryListEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};function y(t){t.preventDefault();const e=t.target.elements.keyword.value;if(console.log(e),e===""){c.warning({title:"Caution",message:"No keyword to start search",position:"topRight"});return}s.loaderEl.classList.remove("hidden");const l=m(e);fetch(l).then(n=>n.json()).then(n=>{console.log(n),s.loaderEl.classList.add("hidden"),f(n.hits.slice(0,9))}).catch(n=>{console.log(n)}),s.formEl.reset()}s.formEl.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
