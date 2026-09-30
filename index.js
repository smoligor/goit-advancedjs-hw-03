import{a as d,S as g,i as n}from"./assets/vendor-K03DOpbq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="53379882-a6be3555cf830bf3c42a42fe5",h="https://pixabay.com/api/";function b(i){const t=new URLSearchParams({key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get(`${h}?${t}`).then(o=>o.data)}const u=document.querySelector(".gallery"),f=document.querySelector(".loader-1"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function q(i){const t=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:s,comments:m,downloads:p})=>`
        <li class="gallery__item">
            <a class="gallery__link" href="${a}">
                <img class="gallery__image" src="${o}" alt="${e}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b><br>${r}</p>
                <p class="info-item"><b>Views</b><br>${s}</p>
                <p class="info-item"><b>Comments</b><br>${m}</p>
                <p class="info-item"><b>Downloads</b><br>${p}</p>
            </div>
        </li>
    `).join("");u.insertAdjacentHTML("beforeend",t),L.refresh()}function v(){u.innerHTML=""}function P(){f.classList.add("is-visible")}function l(){f.classList.remove("is-visible")}const c=document.querySelector(".search-form");c.addEventListener("submit",i=>{i.preventDefault();const t=i.currentTarget.elements.query.value.trim();if(!t){n.warning({title:"Caution",message:"Please enter a search query",position:"topRight"});return}v(),P(),b(t).then(o=>{l(),o.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):q(o.hits),c.reset()}).catch(o=>{l(),n.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),c.reset()})});
//# sourceMappingURL=index.js.map
