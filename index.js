import{a as p,S as d,i as n}from"./assets/vendor-K03DOpbq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="53379882-a6be3555cf830bf3c42a42fe5",y="https://pixabay.com/api/";function h(o){const r=new URLSearchParams({key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return p.get(`${y}?${r}`).then(i=>i.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader-1"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
        <li class="gallery__item">
            <a class="gallery__link" href="${a}">
                <img class="gallery__image" src="${i}" alt="${e}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b><br>${t}</p>
                <p class="info-item"><b>Views</b><br>${s}</p>
                <p class="info-item"><b>Comments</b><br>${f}</p>
                <p class="info-item"><b>Downloads</b><br>${m}</p>
            </div>
        </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){c.innerHTML=""}function P(){u.classList.add("is-visible")}function S(){u.classList.remove("is-visible")}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({title:"Caution",message:"Please enter a search query",position:"topRight"});return}v(),P(),h(r).then(i=>{i.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(i.hits),l.reset()}).catch(()=>{n.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),l.reset()}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
