import{S as g,a as d,i as u}from"./assets/vendor-DWXSRYDZ.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const y=document.querySelector(".gallery"),p=new g(".gallery a",{captionsData:"title",captionDelay:250}),h=t=>`
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
        `;function f(t){const n=t.map(o=>h(o)).join("");y.insertAdjacentHTML("beforeend",n),p.refresh()}function m(t,n=1){const o={baseUrl:"https://pixabay.com/api/",apiKey:"50902999-34d3d718e1412684e61a556a9",query:t,imageType:"photo",orientation:"hohorizontal",safesearch:!0,perPage:15,page:n},r=new URL(o.baseUrl);return r.search=new URLSearchParams({key:o.apiKey,q:o.query,imageType:o.imageType,orientation:o.orientation,safesearch:o.safesearch,per_page:o.perPage,page:o.page}).toString(),r}const a={formEl:document.querySelector(".form"),formInputEl:document.querySelector(".form-input-key-word"),formBtnEl:document.querySelector(".search-btn"),formLoadMoreBtn:document.querySelector(".load-more-btn"),galleryListEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};let l=1,i="";a.formLoadMoreBtn.addEventListener("click",()=>{w(i)});async function L(t){if(t.preventDefault(),i=t.target.elements.keyword.value.trim(),console.log(i),i===""){u.warning({title:"Caution",message:"No keyword to start search",position:"topRight"});return}a.loaderEl.classList.remove("hidden");const n=m(i,l);try{const r=(await d.get(n)).data;if(console.log(r),console.log(r.totalHits),a.galleryListEl.innerHTML="",r.total===0){aiziToast.warning({title:"Caution",message:"Any image matches with given keyword.",position:"topRight"}),a.loaderEl.classList.add("hidden");return}r.totalHits>1&&a.formLoadMoreBtn.classList.remove("hidden"),f(r.hits)}catch(o){console.error(o)}finally{a.loaderEl.classList.add("hidden"),a.formEl.reset()}}a.formEl.addEventListener("submit",L);async function w(t){console.log("Click LoadMore Button");try{l=l+1;const n=m(t,l),r=(await d.get(n)).data;console.log(r),console.log(l),f(r.hits);const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();console.log(e),window.scrollBy({top:e*2,behavior:"smooth"}),l*15>=r.totalHits&&(a.formLoadMoreBtn.classList.add("hidden"),u.info({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{console.error(error)}}
//# sourceMappingURL=index.js.map
