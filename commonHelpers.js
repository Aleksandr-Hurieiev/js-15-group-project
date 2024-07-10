import{S as p,A as w}from"./assets/vendor-d17c2e39.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const v=e=>{const n=document.querySelectorAll(".marquee__line");e.forEach(o=>{n.forEach(i=>{i.classList.toggle("animate",o.isIntersecting)})})},y=new IntersectionObserver(v),b=document.querySelector(".section-covers");b&&y.observe(b);let d=[];async function L(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Network response was not ok");const n=await e.json();return console.log("Full API response:",n),n}catch(e){return console.error("Error fetching reviews:",e),[]}}function u(){const e=document.getElementById("error-message");e.style.display="block"}function m(){const e=document.getElementById("error-message");e.style.display="none"}function E(e){const n=document.createElement("li");n.classList.add("reviews-card","swiper-slide");const o=document.createElement("img");o.classList.add("reviews-list-avatar"),o.src=e.avatar_url,o.alt=`${e.author} avatar`,o.width=48,o.height=48;const i=document.createElement("div");i.classList.add("reviews-box");const r=document.createElement("h3");r.classList.add("name-item"),r.textContent=e.author;const s=document.createElement("p");return s.classList.add("item-text"),s.textContent=e.review,i.appendChild(r),i.appendChild(s),n.appendChild(o),n.appendChild(i),n}async function k(){const e=document.getElementById("reviews-list");d=await L(),console.log("Reviews to render:",d),!d||d.length===0?u():(d.forEach(n=>{const o=E(n);e.appendChild(o)}),q())}function q(){let e=!1;const n=new p(".swiper-container",{slidesPerView:1,spaceBetween:16,navigation:{nextEl:".custom-swiper-button-next",prevEl:".custom-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:4,spaceBetween:16}},on:{init:function(){const c=document.querySelector(".custom-swiper-button-prev");c.disabled=!0},slideChange:function(){const c=this,g=document.querySelector(".custom-swiper-button-prev"),h=document.querySelector(".custom-swiper-button-next");g.disabled=c.isBeginning,h.disabled=!1,m(),e=!1}}}),o=document.querySelector(".custom-swiper-button-next"),i=document.querySelector(".custom-swiper-button-prev");function r(){m()}function s(){e?(u(),o.disabled=!0):n.isEnd&&(e=!0,u(),o.disabled=!0)}i.addEventListener("click",r),o.addEventListener("click",s),document.addEventListener("keydown",c=>{c.key==="ArrowLeft"?r():c.key==="ArrowRight"&&s()}),n.on("touchEnd",()=>{n.isEnd?e?(u(),o.disabled=!0):(e=!0,u(),o.disabled=!0):m()})}document.addEventListener("DOMContentLoaded",k);new p(".swiper-projects",{speed:500,spaceBetween:5,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}});new w(".accordionFaq-container",{duration:500,showMultiple:!0,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel"});new w(".accordion-container_about",{duration:500,openOnInit:[0],elementClass:"acc",triggerClass:"acc-trigger",panelClass:"acc-panel"});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".swiper_about-slide"),n=document.querySelector(".swiper_about-wrapper");e.forEach(r=>n.append(r.cloneNode(!0)));const o=new p(".swiper_about",{slidesPerView:2,speed:400,loop:!0,setWrapperSize:!0,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper_about-next"},keyboard:{enabled:!0,onlyInViewport:!0},on:{init:function(){this.slides[this.activeIndex].style.backgroundColor="#ed3b44"},slideChange:function(){this.slides.forEach(r=>r.style.backgroundColor=""),this.slides[this.activeIndex].style.backgroundColor="#ed3b44"}}});document.querySelector(".swiper_about-next").addEventListener("click",()=>o.slideNext())});const t={menu:document.querySelector(".header-nav-menu"),menuItems:document.querySelector(".header-menu"),btnBurger:document.querySelector(".open-menu-btn"),closeMenuBtn:document.querySelector(".modal-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),linkAboutMe:document.querySelector("#header-about-me"),linkBenefits:document.querySelector("#header-benefits"),linkProjects:document.querySelector("#header-projects"),linkFaq:document.querySelector("#header-faq"),btnOrder:document.querySelector("#orderProject"),linkAboutMe_:document.querySelector("#header-about-me_"),linkBenefits_:document.querySelector("#header-benefits_"),linkProjects_:document.querySelector("#header-projects_"),linkFaq_:document.querySelector("#header-faq_"),btnOrder_:document.querySelector("#orderProject_"),targetAboutMe:document.querySelector("#about_me"),targetBenefits:document.querySelector("#benefits"),targetProjects:document.querySelector("#projects"),targetFaq:document.querySelector("#faq-section"),targetOrder:document.querySelector("#work-together")};t.menu.addEventListener("click",e=>{f(e,t.menuItems)});window.onresize=()=>{window.innerWidth>=768?t.mobileMenu.classList.contains("fadeIn")&&(t.mobileMenu.classList.remove("fadeIn"),t.mobileMenu.classList.add("hidden"),t.menuItems.classList.remove("hidden"),t.menuItems.classList.remove("fadeOut"),t.menuItems.classList.add("fadeIn")):t.menuItems.classList.contains("fadeIn")&&(t.menuItems.classList.remove("fadeIn"),t.menuItems.classList.add("hidden"),t.mobileMenu.classList.remove("hidden"),t.mobileMenu.classList.remove("fadeOut"),t.mobileMenu.classList.add("fadeIn")),window.innerWidth<768&&t.menuItems.classList.add("hidden")};t.linkAboutMe.addEventListener("click",e=>{l(e,t.targetAboutMe),a(e,t.menuItems)});t.linkBenefits.addEventListener("click",e=>{l(e,t.targetBenefits),a(e,t.menuItems)});t.linkProjects.addEventListener("click",e=>{l(e,t.targetProjects),a(e,t.menuItems)});t.linkFaq.addEventListener("click",e=>{l(e,t.targetFaq),a(e,t.menuItems)});t.btnOrder.addEventListener("click",e=>{l(e,t.targetOrder),a(e,t.menuItems)});t.linkAboutMe_.addEventListener("click",e=>{l(e,t.targetAboutMe),a(e,t.mobileMenu)});t.linkBenefits_.addEventListener("click",e=>{l(e,t.targetBenefits),a(e,t.mobileMenu)});t.linkProjects_.addEventListener("click",e=>{l(e,t.targetProjects),a(e,t.mobileMenu)});t.linkFaq_.addEventListener("click",e=>{l(e,t.targetFaq),a(e,t.mobileMenu)});t.btnOrder_.addEventListener("click",e=>{l(e,t.targetOrder),a(e,t.mobileMenu)});t.btnBurger.addEventListener("click",e=>{f(e,t.mobileMenu)});t.closeMenuBtn.addEventListener("click",e=>{f(e,t.mobileMenu)});function f(e,n){e.preventDefault(),n.classList.contains("hidden")?(n.classList.remove("hidden"),n.classList.toggle("fadeIn")):(n.classList.toggle("fadeIn"),n.classList.toggle("fadeOut")),document.documentElement.classList.toggle("noScroll"),document.body.classList.toggle("noScroll")}function a(e,n){e.preventDefault(),n.classList.remove("fadeIn"),n.classList.add("fadeOut"),document.documentElement.classList.remove("noScroll"),document.body.classList.remove("noScroll")}function l(e,n){e.preventDefault(),n.scrollIntoView({behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
