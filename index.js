import{a as d,S as g,i as n}from"./assets/vendor-K03DOpbq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="53379882-a6be3555cf830bf3c42a42fe5",y="https://pixabay.com/api/";function b(i){const o=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get(`${y}?${o}`).then(t=>t.data).catch(t=>{throw console.error("Error fetching images:",t),t})}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function q(i){const o=i.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:s,comments:m,downloads:p})=>`
        <li class="gallery__item">
            <a class="gallery__link" href="${a}">
                <img class="gallery__image" src="${t}" alt="${e}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b><br>${r}</p>
                <p class="info-item"><b>Views</b><br>${s}</p>
                <p class="info-item"><b>Comments</b><br>${m}</p>
                <p class="info-item"><b>Downloads</b><br>${p}</p>
            </div>
        </li>
    `).join("");u.insertAdjacentHTML("beforeend",o),L.refresh()}function v(){u.innerHTML=""}function w(){f.classList.add("is-visible")}function l(){f.classList.remove("is-visible")}const c=document.querySelector(".search-form");c.addEventListener("submit",i=>{i.preventDefault();const o=i.currentTarget.elements.query.value.trim();if(!o){n.warning({title:"Caution",message:"Please enter a search query",position:"topRight"});return}v(),w(),b(o).then(t=>{l(),t.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):q(t.hits),c.reset()}).catch(t=>{l(),n.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),c.reset()})});
//# sourceMappingURL=index.js.map
