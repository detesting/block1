!function(){"use strict";new Swiper(".brands-container",{pagination:{el:".swiper-pagination-brands",type:"bullets",clickable:!0},spaceBetween:16,slidesPerView:1.15,centeredSlides:!0}),new Swiper(".services-container",{pagination:{el:".swiper-pagination-services",type:"bullets",clickable:!0},spaceBetween:16,slidesPerView:1.15,centeredSlides:!0});var e=document.querySelector(".blog-more"),s=document.querySelector(".blog__text");e.addEventListener("click",(function(t){e.classList.remove("blog-more"),e.classList.add("blog-more--state--active"),s.classList.add("blog__text--state--active")}));var t=document.querySelector(".brands-more"),i=document.querySelector(".brands-hide"),a=document.querySelector(".brands-main");t.addEventListener("click",(function(e){t.classList.add("brands-more--state--active"),i.classList.remove("brands-hide--state--active"),a.classList.add("brands-main--show")})),i.addEventListener("click",(function(e){i.classList.add("brands-hide--state--active"),t.classList.remove("brands-more--state--active"),a.classList.remove("brands-main--show")}));var c=document.querySelector(".services-more"),r=document.querySelector(".services-hide"),n=document.querySelector(".services-main");c.addEventListener("click",(function(e){c.classList.add("services-more--state--active"),r.classList.remove("services-hide--state--active"),n.classList.add("services-main--show")})),r.addEventListener("click",(function(e){r.classList.add("services-hide--state--active"),c.classList.remove("services-more--state--active"),n.classList.remove("services-main--show")}))}();
//# sourceMappingURL=bundle.js.map