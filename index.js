import{S as a,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const u=document.querySelector(".gallery"),f=t=>`
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
        `;function y(t){t.map(n=>console.log(n));const e=t.map(n=>f(n)).join("");u.innerHTML=e,new a(".gallery a",{captionsData:"title",captionDelay:250})}function d(t){const e={baseUrl:"https://pixabay.com/api/",apiKey:void 0,query:t,imageType:"photo",orientation:"hohorizontal",safesearch:!0},n=new URL(e.baseUrl);return n.search=new URLSearchParams({key:e.apiKey,q:e.query,imageType:e.imageType,orientation:e.orientation,safesearch:e.safesearch}).toString(),n}const i={formEl:document.querySelector(".form"),formInputEl:document.querySelector(".form-input-key-word"),formBtnEl:document.querySelector(".search-btn"),galleryListEl:document.querySelector(".gallery")};console.dir(i.galleryListEl);function m(t){t.preventDefault();const e=t.target.elements.keyword.value;if(console.log(e),console.log(typeof e),e===""){c.warning({title:"Caution",message:"No keyword to start search",position:"topRight"});return}const n=d(e);fetch(n).then(l=>l.json()).then(l=>{console.log(l),y(l.hits.slice(0,9))}).catch(l=>{console.log(l)})}i.formEl.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
