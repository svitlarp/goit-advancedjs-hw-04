import{S as m,i as p,a as u}from"./assets/vendor-DWXSRYDZ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const y=document.querySelector(".gallery"),g=e=>`
        <li class="gallery-item">
        <a class="gallery-link" href=${e.largeImageURL}>
            <img
            class="gallery-image"
            src="${e.previewURL}"
            alt="${e.tags}"
            title="Likes 
 ${e.likes} Views 
 ${e.views} Comments 
 ${e.comments} Downloads 
 ${e.downloads}"
            />
        </a>
        </li>
        `;function d(e){const a=e.map(t=>g(t)).join("");y.innerHTML=a,new m(".gallery a",{captionsData:"title",captionDelay:250})}function f(e,a=1){const t={baseUrl:"https://pixabay.com/api/",apiKey:"50902999-34d3d718e1412684e61a556a9",query:e,imageType:"photo",orientation:"hohorizontal",safesearch:!0,perPage:15,page:a},o=new URL(t.baseUrl);return o.search=new URLSearchParams({key:t.apiKey,q:t.query,imageType:t.imageType,orientation:t.orientation,safesearch:t.safesearch,per_page:t.perPage,page:t.page}).toString(),o}const l={formEl:document.querySelector(".form"),formInputEl:document.querySelector(".form-input-key-word"),formBtnEl:document.querySelector(".search-btn"),formLoadMoreBtn:document.querySelector(".load-more-btn"),galleryListEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};let i=1,s="";async function h(e){if(e.preventDefault(),s=e.target.elements.keyword.value,console.log(s),s===""){p.warning({title:"Caution",message:"No keyword to start search",position:"topRight"});return}l.loaderEl.classList.remove("hidden");const a=f(s,i);try{const o=(await u.get(a)).data;if(console.log(o),console.log(o.totalHits),o.total===0){alert(`Зображень по ключовому слову ${s} не знайдено`);return}o.totalHits>1&&(l.formLoadMoreBtn.classList.remove("hidden"),l.formLoadMoreBtn.addEventListener("click",()=>{L(s)}),d(o.hits)),d(o.hits)}catch(t){console.error(t)}finally{l.loaderEl.classList.add("hidden"),l.formEl.reset()}}l.formEl.addEventListener("submit",h);async function L(e){console.log("Click LoadMore Button");try{i=i+1;const a=f(e,i),o=(await u.get(a)).data;console.log(o)}catch{console.error(error)}}
//# sourceMappingURL=index.js.map
