import{S as i,i as c,a as u}from"./assets/vendor-DWXSRYDZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const d=document.querySelector(".gallery"),f=t=>`
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
        `;function y(t){const r=t.map(s=>f(s)).join("");d.innerHTML=r,new i(".gallery a",{captionsData:"title",captionDelay:250})}function m(t){const r={baseUrl:"https://pixabay.com/api/",apiKey:"50902999-34d3d718e1412684e61a556a9",query:t,imageType:"photo",orientation:"hohorizontal",safesearch:!0},s=new URL(r.baseUrl);return s.search=new URLSearchParams({key:r.apiKey,q:r.query,imageType:r.imageType,orientation:r.orientation,safesearch:r.safesearch}).toString(),s}const l={formEl:document.querySelector(".form"),formInputEl:document.querySelector(".form-input-key-word"),formBtnEl:document.querySelector(".search-btn"),galleryListEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};async function p(t){t.preventDefault();const r=t.target.elements.keyword.value;if(console.log(r),r===""){c.warning({title:"Caution",message:"No keyword to start search",position:"topRight"});return}l.loaderEl.classList.remove("hidden");const s=m(r);try{const e=(await u.get(s)).data;console.log(e),y(e.hits.slice(0,9))}catch(n){console.error(n)}finally{l.loaderEl.classList.add("hidden"),l.formEl.reset()}}l.formEl.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
