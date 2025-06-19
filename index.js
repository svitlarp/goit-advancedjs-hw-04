import{S as u,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y=document.querySelector(".gallery"),m=o=>`
     <li class="gallery-item">
      <a class="gallery-link" href=${o.original}>
        <img
          class="gallery-image"
          src="${o.preview}"
          alt="${o.description}"
         />
      </a>
     </li>
     `;function p(o){const n=o.map(t=>m(t)).join("");y.innerHTML=n,new u(".gallery a",{captionsData:"alt",captionDelay:250})}const d={formInputEl:document.querySelector(".form-input-key-word")},l={baseUrl:"https://pixabay.com/api/",apiKey:void 0,query:d.formInputEl,imageType:"photo",orientation:"hohorizontal",safesearch:!0},a=new URL(l.baseUrl);a.search=new URLSearchParams({key:l.apiKey,q:l.query,imageType:l.imageType,orientation:l.orientation,safesearch:l.safesearch}).toString();const c={formEl:document.querySelector(".form"),formInputEl:document.querySelector(".form-input-key-word"),formBtnEl:document.querySelector(".search-btn"),galleryListEl:document.querySelector(".gallery")};console.dir(c.galleryListEl);function g(o){o.preventDefault();const n=o.target.elements.keyword.value;if(console.log(n),console.log(typeof n),n===""){f.warning({title:"Caution",message:"No keyword to start search",position:"topRight"});return}fetch(a).then(t=>t.json()).then(t=>{console.log(t),p(t.hits)}).catch(t=>{console.log(t)})}c.formEl.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
