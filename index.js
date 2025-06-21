import{S as y,a as d,i as u}from"./assets/vendor-DWXSRYDZ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const p=document.querySelector(".gallery"),g=new y(".gallery a",{captionsData:"title",captionDelay:250}),h=e=>`
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
        `;function f(e){const s=e.map(t=>h(t)).join("");p.insertAdjacentHTML("beforeend",s),g.refresh()}function m(e,s=1){const t={baseUrl:"https://pixabay.com/api/",apiKey:"50902999-34d3d718e1412684e61a556a9",query:e,imageType:"photo",orientation:"hohorizontal",safesearch:!0,perPage:15,page:s},r=new URL(t.baseUrl);return r.search=new URLSearchParams({key:t.apiKey,q:t.query,imageType:t.imageType,orientation:t.orientation,safesearch:t.safesearch,per_page:t.perPage,page:t.page}).toString(),r}const n={formEl:document.querySelector(".form"),formInputEl:document.querySelector(".form-input-key-word"),formBtnEl:document.querySelector(".search-btn"),formLoadMoreBtn:document.querySelector(".load-more-btn"),galleryListEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};let l=1,i="";n.formLoadMoreBtn.addEventListener("click",()=>{w(i)});async function L(e){if(e.preventDefault(),i=e.target.elements.keyword.value.trim(),console.log(i),i===""){u.warning({title:"Caution",message:"No keyword to start search",position:"topRight"});return}n.loaderEl.classList.remove("hidden");const s=m(i,l);try{const r=(await d.get(s)).data;if(console.log(r),console.log(r.totalHits),n.galleryListEl.innerHTML="",r.total===0){aiziToast.warning({title:"Caution",message:"Any image matches with given keyword.",position:"topRight"}),n.loaderEl.classList.add("hidden");return}r.totalHits>1&&n.formLoadMoreBtn.classList.remove("hidden"),f(r.hits)}catch(t){console.error(t)}finally{n.loaderEl.classList.add("hidden"),n.formEl.reset()}}n.formEl.addEventListener("submit",L);async function w(e){console.log("Click LoadMore Button");try{l=l+1;const s=m(e,l),r=(await d.get(s)).data;console.log(r),console.log(l),f(r.hits),l*15>=r.totalHits&&(n.formLoadMoreBtn.classList.add("hidden"),u.info({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{console.error(error)}}
//# sourceMappingURL=index.js.map
