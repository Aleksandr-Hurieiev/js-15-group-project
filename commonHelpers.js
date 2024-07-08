import{S as u,A as p}from"./assets/vendor-d17c2e39.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();let i=[];async function m(){try{const t=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!t.ok)throw new Error("Network response was not ok");const n=await t.json();return console.log("Full API response:",n),n}catch(t){return console.error("Error fetching reviews:",t),[]}}function l(){const t=document.getElementById("error-message");t.style.display="block"}function d(){const t=document.getElementById("error-message");t.style.display="none"}function w(t){const n=document.createElement("li");n.classList.add("reviews-card","swiper-slide");const s=document.createElement("img");s.classList.add("reviews-list-avatar"),s.src=t.avatar_url,s.alt=`${t.author} avatar`,s.width=48,s.height=48;const o=document.createElement("div");o.classList.add("reviews-box");const e=document.createElement("h3");e.classList.add("name-item"),e.textContent=t.author;const r=document.createElement("p");return r.classList.add("item-text"),r.textContent=t.review,o.appendChild(e),o.appendChild(r),n.appendChild(s),n.appendChild(o),n}async function f(){const t=document.getElementById("reviews-list");i=await m(),console.log("Reviews to render:",i),!i||i.length===0?l():(i.forEach(n=>{const s=w(n);t.appendChild(s)}),h())}function h(){const t=new u(".swiper-container",{slidesPerView:1,spaceBetween:12,navigation:{nextEl:".custom-swiper-button-next",prevEl:".custom-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:function(){const o=document.querySelector(".custom-swiper-button-prev");o.disabled=!0},slideChange:function(){const o=this,e=document.querySelector(".custom-swiper-button-prev"),r=document.querySelector(".custom-swiper-button-next");o.isBeginning?e.disabled=!0:e.disabled=!1,o.isEnd?(r.disabled=!0,l()):(r.disabled=!1,d())}}});document.querySelector(".custom-swiper-button-next");const n=document.querySelector(".custom-swiper-button-prev");function s(){d()}n.addEventListener("click",s),document.addEventListener("keydown",o=>{o.key==="ArrowLeft"&&s()}),t.on("touchEnd",()=>{t.isEnd?l():d()})}document.addEventListener("DOMContentLoaded",f);new u(".swiper-projects",{speed:500,spaceBetween:5,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}});new p(".accordionFaq-container");new p(".accordion-container_about",{duration:500,openOnInit:[0],elementClass:"acc",triggerClass:"acc-trigger",panelClass:"acc-panel"});new u(".swiper_about",{wrapperClass:".swiper_about-wrapper",slideClass:".swiper_about-slide",loop:!0,slidesPerView:3,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}});const c={menu:document.querySelector(".header-nav-menu"),menuItems:document.querySelector(".header-menu"),btnOrder:document.querySelector(".header-btn"),btnBurger:document.querySelector(".open-menu-btn")};c.menu.addEventListener("click",t=>{t.preventDefault(),c.menuItems.classList.contains("hidden")==!0?c.menuItems.classList.remove("hidden"):c.menuItems.classList.add("hidden")});
//# sourceMappingURL=commonHelpers.js.map
