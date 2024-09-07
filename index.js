import{S as p,i as o}from"./assets/vendor-DEu1ZBVp.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="45854856-78ad068c46767c3f7b48e1998",y="https://pixabay.com/api/";async function h(i){const t=new URL(y);t.searchParams.set("key",d),t.searchParams.set("q",i),t.searchParams.set("image_type","photo"),t.searchParams.set("orientation","horizontal"),t.searchParams.set("safesearch","true");try{const s=await fetch(t);if(!s.ok)throw new Error("Network response was not ok");const a=await s.json();if(!a.hits||a.hits.length===0)throw new Error("No images found");return a}catch(s){throw console.error("Fetching error:",s),s}}const n=document.querySelector(".gallery-list"),f=i=>{if(!n)return;const t=i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:l,comments:m,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${s}" alt="${e}">
            <div class="gallery-image-stats">
            <ul class="gallery-image-stats-list">
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Likes</p>
                <p class="gallery-image-stats-text">${r}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Views</p>
                <p class="gallery-image-stats-text">${l}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Comments</p>
                <p class="gallery-image-stats-text">${m}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Downloads</p>
                <p class="gallery-image-stats-text">${u}</p>
              </li>
            </ul>
          </div>
        </a>
      </li>`).join("");n.innerHTML="",n.insertAdjacentHTML("beforeend",t)},g=document.querySelector(".form");document.querySelector(".gallery-list");const c=document.querySelector(".loader"),L=new p(".gallery-list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),w=i=>{i.preventDefault(),c.classList.remove("hidden");const t=i.target.elements.inputField.value.toLowerCase().trim();if(!t){o.error({title:"Error",message:"You need to type something in the field!",position:"topRight"}),c.classList.add("hidden");return}h(t).then(s=>{s.hits.length===0?o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(f(s.hits),L.refresh())}).catch(s=>{o.error({message:`There was an error: ${s.message}. Please try again!`,position:"topRight"})}).finally(()=>{c.classList.add("hidden")}),g.reset()};g.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
