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
let buttonShowAllText = document.querySelector('.blog-more');
let text = document.querySelector('.blog__text');
buttonShowAllText.addEventListener('click', function (event) {
  buttonShowAllText.classList.remove('blog-more')
  buttonShowAllText.classList.add('blog-more--state--active');
  // text.classList.remove('blog__text')
  text.classList.add('blog__text--state--active')
})


// Показать все/Скрыть у брендов
let buttonShowAllBrends = document.querySelector('.brands-more');
let buttonHideAllBrends = document.querySelector('.brands-hide');
let brands = document.querySelector('.brands-main');

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
let buttonShowAllServices = document.querySelector('.services-more');
let buttonHideAllServices = document.querySelector('.services-hide');
let services = document.querySelector('.services-main');

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


// Открытие/закрытие меню
let buttonShowMenu = document.querySelector('.burger__button');
let buttonHideMenu = document.querySelector('.cancel__button');
let menu = document.querySelector('.main-menu');
let content = document.querySelector('.content__general')
let helpBlock = document.querySelector('.help-block')

buttonShowMenu.addEventListener('click', function (event){
  menu.classList.remove('main-menu')
  menu.classList.add('main-menu--state--active');
  content.classList.add('content__general-blur');
  helpBlock.classList.add('help-block--state--active');
})
buttonHideMenu.addEventListener('click', function (event){
  menu.classList.remove('main-menu--state--active');
  menu.classList.add('main-menu');
  content.classList.remove('content__general-blur');
  helpBlock.classList.remove('help-block--state--active');
})
helpBlock.addEventListener('click', function (event){
  menu.classList.remove('main-menu--state--active');
  menu.classList.add('main-menu');
  content.classList.remove('content__general-blur');
  helpBlock.classList.remove('help-block--state--active');
})


// Открытие/закрытие обратной связи
let buttonChatHeader = document.querySelector('.chat__button');
let buttonChatMenu = document.querySelector('.main-menu-footer__chat');
let feedback = document.querySelector('.feedback');
let buttonHideFeedback = document.querySelector('.feedback-header__cancel')
let helpBlockFeedback = document.querySelector('.help-block-feedback')

buttonChatHeader.addEventListener('click', function (event){
  feedback.classList.add('feedback--state--active');
  content.classList.add('content__general-blur');
  menu.classList.add('main-menu-blur');
  helpBlockFeedback.classList.add('help-block-feedback--state--active');
})
buttonChatMenu.addEventListener('click', function (event){
  feedback.classList.add('feedback--state--active');
  content.classList.add('content__general-blur');
  menu.classList.add('main-menu-blur');
  helpBlockFeedback.classList.add('help-block-feedback--state--active');
})
buttonHideFeedback.addEventListener('click', function (event){
  feedback.classList.remove('feedback--state--active');
  content.classList.remove('content__general-blur');
  helpBlockFeedback.classList.remove('help-block-feedback--state--active');
  menu.classList.remove('main-menu-blur');
})
helpBlockFeedback.addEventListener('click', function (event){
  feedback.classList.remove('feedback--state--active');
  content.classList.remove('content__general-blur');
  helpBlockFeedback.classList.remove('help-block-feedback--state--active');
  menu.classList.remove('main-menu-blur');
})
