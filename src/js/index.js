import '../scss/style.scss';

// Свайперы
const swiperBrands = new Swiper('.brands-container', {

  pagination: {
    el: '.swiper-pagination-brands',
    type: 'bullets',
    clickable: true,
  },
  spaceBetween: 16,
  slidesPerView: 1.15,
  centeredSlides: true,

});
const swiperServices = new Swiper('.services-container', {

  pagination: {
    el: '.swiper-pagination-services',
    type: 'bullets',
    clickable: true,
  },
  spaceBetween: 16,
  slidesPerView: 1.15,
  centeredSlides: true,

});
const swiperPrices = new Swiper('.prices-container', {

  pagination: {
    el: '.swiper-pagination-prices',
    type: 'bullets',
    clickable: true,
  },
  spaceBetween: 16,
  slidesPerView: 1.15,
  centeredSlides: true,

});


// Кнока Показать все у текста в статье
var buttonShowAllText = document.querySelector('.blog-more');
var text = document.querySelector('.blog__text');


buttonShowAllText.addEventListener('click', function (event) {
  buttonShowAllText.classList.remove('blog-more')
  buttonShowAllText.classList.add('blog-more--state--active');
  // text.classList.remove('blog__text')
  text.classList.add('blog__text--state--active')
})

// Показать все/Скрыть у брендов
var buttonShowAllBrends = document.querySelector('.brands-more');
var buttonHideAllBrends = document.querySelector('.brands-hide');
var brands = document.querySelector('.brands-main');


buttonShowAllBrends.addEventListener('click', function (event) {
  buttonShowAllBrends.classList.add('brands-more--state--active');
  buttonHideAllBrends.classList.remove('brands-hide--state--active');
  brands.classList.add('brands-main--show')
})
buttonHideAllBrends.addEventListener('click', function (event) {
  buttonHideAllBrends.classList.add('brands-hide--state--active');
  buttonShowAllBrends.classList.remove('brands-more--state--active');
  brands.classList.remove('brands-main--show');
})

// Показать все/Скрыть у услуг
var buttonShowAllServices = document.querySelector('.services-more');
var buttonHideAllServices = document.querySelector('.services-hide');
var services = document.querySelector('.services-main');


buttonShowAllServices.addEventListener('click', function (event) {
  buttonShowAllServices.classList.add('services-more--state--active');
  buttonHideAllServices.classList.remove('services-hide--state--active');
  services.classList.add('services-main--show')
})
buttonHideAllServices.addEventListener('click', function (event) {
  buttonHideAllServices.classList.add('services-hide--state--active');
  buttonShowAllServices.classList.remove('services-more--state--active');
  services.classList.remove('services-main--show');
})
