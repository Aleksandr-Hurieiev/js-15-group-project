import{S as b,i as E,A as k,a as L}from"./assets/vendor-a1193c0a.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const q=e=>{const n=document.querySelectorAll(".marquee__line");e.forEach(r=>{n.forEach(i=>{i.classList.toggle("animate",r.isIntersecting)})})},S=new IntersectionObserver(q),w=document.querySelector(".section-covers");w&&S.observe(w);let u=[];async function I(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Network response was not ok");const n=await e.json();return console.log("Full API response:",n),n}catch(e){return console.error("Error fetching reviews:",e),[]}}function m(){E.warning({title:"Hello",message:"Not found",position:"topRight",timeout:2e3,progressBar:!1})}function g(){const e=document.getElementById("error-message");e.style.display="none"}function M(e){const n=document.createElement("li");n.classList.add("reviews-card","swiper-slide");const r=document.createElement("img");r.classList.add("reviews-list-avatar"),r.src=e.avatar_url,r.alt=`${e.author} avatar`,r.width=48,r.height=48;const i=document.createElement("div");i.classList.add("reviews-box");const o=document.createElement("h3");o.classList.add("name-item"),o.textContent=e.author;const s=document.createElement("p");return s.classList.add("item-text"),s.textContent=e.review,i.appendChild(o),i.appendChild(s),n.appendChild(r),n.appendChild(i),n}async function C(){const e=document.getElementById("reviews-list");u=await I(),console.log("Reviews to render:",u),!u||u.length===0?m():(u.forEach(n=>{const r=M(n);e.appendChild(r)}),x())}function x(){let e=!1;const n=new b(".swiper-container",{slidesPerView:1,spaceBetween:16,navigation:{nextEl:".custom-swiper-button-next",prevEl:".custom-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:4,spaceBetween:16}},on:{init:function(){const c=document.querySelector(".custom-swiper-button-prev");c.disabled=!0},slideChange:function(){const c=this,p=document.querySelector(".custom-swiper-button-prev"),a=document.querySelector(".custom-swiper-button-next");p.disabled=c.isBeginning,a.disabled=!1,g(),e=!1}}}),r=document.querySelector(".custom-swiper-button-next"),i=document.querySelector(".custom-swiper-button-prev");function o(){g()}function s(){e?(m(),r.disabled=!0):n.isEnd&&(e=!0,m(),r.disabled=!0)}i.addEventListener("click",o),r.addEventListener("click",s),document.addEventListener("keydown",c=>{c.key==="ArrowLeft"?o():c.key==="ArrowRight"&&s()}),n.on("touchEnd",()=>{n.isEnd?e?(m(),r.disabled=!0):(e=!0,m(),r.disabled=!0):g()})}document.addEventListener("DOMContentLoaded",C);const y=document.querySelector(".footer-form"),B=document.querySelector(".footer-modal-close-btn"),f=document.querySelector(".footer-backdrop");y.addEventListener("submit",async e=>{e.preventDefault();const n=e.target.email.value,r=e.target.comment.value;try{const i=await _(n,r);console.log(i),f.classList.add("is-open"),y.reset()}catch{alert("Error! Change your querry, please!")}});async function _(e,n){return(await k.post("https://portfolio-js.b.goit.study/api/requests",{email:e,comment:n})).data}B.addEventListener("click",()=>{f.classList.remove("is-open")});f.addEventListener("click",e=>{e.target===e.currentTarget&&f.classList.remove("is-open")});document.addEventListener("keydown",e=>{e.keyCode===27&&f.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{try{let c=function(){try{r<n.length&&!s?(r>0&&n[r-1].classList.remove("activ"),n[r].classList.add("activ"),r++,o=setTimeout(c,1e3)):r>=n.length&&(n.length>0&&n[n.length-1].classList.remove("activ"),clearTimeout(o),r=0,i&&i.unobserve(e))}catch(a){console.log(a)}},p=function(a){try{a.forEach(v=>{v.isIntersecting&&!s&&c()})}catch(v){console.log(v)}};const e=document.querySelector("#projects .projects-list");if(!e)return;const n=e.querySelectorAll(".item-link");let r=0,i,o,s=!1;try{i=new IntersectionObserver(p,{root:null,rootMargin:"0px",threshold:1}),i.observe(e)}catch(a){console.log(a)}e.addEventListener("mouseover",()=>{try{s=!0,clearTimeout(o),n.forEach(a=>a.classList.remove("activ"))}catch(a){console.log(a)}}),e.addEventListener("mouseout",()=>{try{s=!1}catch(a){console.log(a)}})}catch(e){console.log(e)}});new b(".swiper-projects",{speed:500,spaceBetween:5,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}});new L(".accordionFaq-container",{duration:500,showMultiple:!0,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel"});new L(".accordion-container_about",{duration:500,openOnInit:[0],elementClass:"acc",triggerClass:"acc-trigger",panelClass:"acc-panel"});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".swiper_about-slide"),n=document.querySelector(".swiper_about-wrapper");e.forEach(o=>n.append(o.cloneNode(!0)));const r=new b(".swiper_about",{slidesPerView:2,speed:400,loop:!0,setWrapperSize:!0,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper_about-next"},keyboard:{enabled:!0,onlyInViewport:!0},on:{init:function(){this.slides[this.activeIndex].style.backgroundColor="#ed3b44"},slideChange:function(){this.slides.forEach(o=>o.style.backgroundColor=""),this.slides[this.activeIndex].style.backgroundColor="#ed3b44"}}});document.querySelector(".swiper_about-next").addEventListener("click",()=>r.slideNext())});const t={menu:document.querySelector(".header-nav-menu"),menuItems:document.querySelector(".header-menu"),btnBurger:document.querySelector(".open-menu-btn"),closeMenuBtn:document.querySelector(".modal-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),linkAboutMe:document.querySelector("#header-about-me"),linkBenefits:document.querySelector("#header-benefits"),linkProjects:document.querySelector("#header-projects"),linkFaq:document.querySelector("#header-faq"),btnOrder:document.querySelector("#orderProject"),linkAboutMe_:document.querySelector("#header-about-me_"),linkBenefits_:document.querySelector("#header-benefits_"),linkProjects_:document.querySelector("#header-projects_"),linkFaq_:document.querySelector("#header-faq_"),btnOrder_:document.querySelector("#orderProject_"),targetAboutMe:document.querySelector("#about_me"),targetBenefits:document.querySelector("#benefits"),targetProjects:document.querySelector("#projects"),targetFaq:document.querySelector("#faq-section"),targetOrder:document.querySelector("#work-together")};t.menu.addEventListener("click",e=>{h(e,t.menuItems)});window.onresize=()=>{window.innerWidth>=768?t.mobileMenu.classList.contains("fadeIn")&&(t.mobileMenu.classList.remove("fadeIn"),t.mobileMenu.classList.add("hidden"),t.menuItems.classList.remove("hidden"),t.menuItems.classList.remove("fadeOut"),t.menuItems.classList.add("fadeIn")):t.menuItems.classList.contains("fadeIn")&&(t.menuItems.classList.remove("fadeIn"),t.menuItems.classList.add("hidden"),t.mobileMenu.classList.remove("hidden"),t.mobileMenu.classList.remove("fadeOut"),t.mobileMenu.classList.add("fadeIn")),window.innerWidth<768&&t.menuItems.classList.add("hidden")};t.linkAboutMe.addEventListener("click",e=>{d(e,t.targetAboutMe),l(e,t.menuItems)});t.linkBenefits.addEventListener("click",e=>{d(e,t.targetBenefits),l(e,t.menuItems)});t.linkProjects.addEventListener("click",e=>{d(e,t.targetProjects),l(e,t.menuItems)});t.linkFaq.addEventListener("click",e=>{d(e,t.targetFaq),l(e,t.menuItems)});t.btnOrder.addEventListener("click",e=>{d(e,t.targetOrder),l(e,t.menuItems)});t.linkAboutMe_.addEventListener("click",e=>{d(e,t.targetAboutMe),l(e,t.mobileMenu)});t.linkBenefits_.addEventListener("click",e=>{d(e,t.targetBenefits),l(e,t.mobileMenu)});t.linkProjects_.addEventListener("click",e=>{d(e,t.targetProjects),l(e,t.mobileMenu)});t.linkFaq_.addEventListener("click",e=>{d(e,t.targetFaq),l(e,t.mobileMenu)});t.btnOrder_.addEventListener("click",e=>{d(e,t.targetOrder),l(e,t.mobileMenu)});t.btnBurger.addEventListener("click",e=>{h(e,t.mobileMenu)});t.closeMenuBtn.addEventListener("click",e=>{h(e,t.mobileMenu)});function h(e,n){e.preventDefault(),n.classList.contains("hidden")?(n.classList.remove("hidden"),n.classList.toggle("fadeIn")):(n.classList.toggle("fadeIn"),n.classList.toggle("fadeOut")),document.documentElement.classList.toggle("noScroll"),document.body.classList.toggle("noScroll")}function l(e,n){e.preventDefault(),n.classList.remove("fadeIn"),n.classList.add("fadeOut"),document.documentElement.classList.remove("noScroll"),document.body.classList.remove("noScroll")}function d(e,n){e.preventDefault(),n.scrollIntoView({behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
