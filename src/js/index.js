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


// Кнокки Показать все/Скрыть у текста в статье
let buttonShowAllText = document.querySelector('.blog-more');
let text = document.querySelector('.blog__text');
let buttonHideAllText = document.querySelector('.blog-hide')
buttonShowAllText.addEventListener('click', function (event) {
  buttonShowAllText.classList.add('blog-more--state--active');
  text.classList.add('blog__text--state--active')
  buttonHideAllText.classList.remove('blog-hide--state--active');
})
buttonHideAllText.addEventListener('click', function (event) {
  buttonHideAllText.classList.add('blog-hide--state--active');
  text.classList.remove('blog__text--state--active')
  buttonShowAllText.classList.remove('blog-more--state--active');
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
  menu.classList.remove('main-menu-blur');
  menu.classList.add('main-menu--state--active');
  content.classList.add('content__general-blur');
  helpBlock.classList.add('help-block--state--active');
})
buttonHideMenu.addEventListener('click', function (event){
  menu.classList.remove('main-menu--state--active');
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
let buttonChatHeaderFeedback = document.querySelector('.chat__button');
let buttonChatMenuFeedback = document.querySelector('.main-menu-footer__chat');
let feedback = document.querySelector('.feedback');
let buttonHideFeedback = document.querySelector('.feedback-header__cancel');
let helpBlockFeedback = document.querySelector('.help-block-feedback');
let cancelFeedback = document.querySelector('.feedback__cancel-1120');
let buttonCancel1120Feedback = document.querySelector('.feedback__cancel-1120');

buttonChatHeaderFeedback.addEventListener('click', function (event){
  feedback.classList.add('feedback--state--active');
  content.classList.add('content__general-blur');
  menu.classList.add('main-menu-blur');
  helpBlockFeedback.classList.add('help-block-feedback--state--active');
  cancelFeedback.classList.add('feedback__cancel-1120--active')
})
buttonChatMenuFeedback.addEventListener('click', function (event){
  feedback.classList.add('feedback--state--active');
  content.classList.add('content__general-blur');
  menu.classList.add('main-menu-blur');
  helpBlockFeedback.classList.add('help-block-feedback--state--active');
  cancelFeedback.classList.add('feedback__cancel-1120--active');
  menu.classList.remove('main-menu--state--active');
  helpBlock.classList.remove('help-block--state--active');
})
buttonHideFeedback.addEventListener('click', function (event){
  feedback.classList.remove('feedback--state--active');
  content.classList.remove('content__general-blur');
  helpBlockFeedback.classList.remove('help-block-feedback--state--active');
  menu.classList.remove('main-menu-blur');
  cancelFeedback.classList.remove('feedback__cancel-1120--active');
})
helpBlockFeedback.addEventListener('click', function (event){
  feedback.classList.remove('feedback--state--active');
  content.classList.remove('content__general-blur');
  helpBlockFeedback.classList.remove('help-block-feedback--state--active');
  menu.classList.remove('main-menu-blur');
  cancelFeedback.classList.remove('feedback__cancel-1120--active');
})
buttonCancel1120Feedback.addEventListener('click', function (event){
  feedback.classList.remove('feedback--state--active');
  content.classList.remove('content__general-blur');
  helpBlockFeedback.classList.remove('help-block-feedback--state--active');
  menu.classList.remove('main-menu-blur');
  cancelFeedback.classList.remove('feedback__cancel-1120--active');
})

// Открытие/закрытие обратного звонка
let buttonChatHeaderBackCall = document.querySelector('.call__button');
let buttonChatMenuBackCall = document.querySelector('.main-menu-footer__call');
let backCall = document.querySelector('.back-call');
let buttonHideBackCall = document.querySelector('.back-call-header__cancel');
let helpBlockBackCall = document.querySelector('.help-block-back-call');
let cancelBackCall = document.querySelector('.back-call__cancel-1120');
let buttonCancel1120BackCall = document.querySelector('.back-call__cancel-1120');

buttonChatHeaderBackCall.addEventListener('click', function (event){
  backCall.classList.add('back-call--state--active');
  content.classList.add('content__general-blur');
  menu.classList.add('main-menu-blur');
  helpBlockBackCall.classList.add('help-block-back-call--state--active');
  cancelBackCall.classList.add('back-call__cancel-1120--active');
})
buttonChatMenuBackCall.addEventListener('click', function (event){
  backCall.classList.add('back-call--state--active');
  content.classList.add('content__general-blur');
  menu.classList.add('main-menu-blur');
  helpBlockBackCall.classList.add('help-block-back-call--state--active');
  cancelBackCall.classList.add('back-call__cancel-1120--active');
  menu.classList.remove('main-menu--state--active');
  helpBlock.classList.remove('help-block--state--active');
})
buttonHideBackCall.addEventListener('click', function (event){
  backCall.classList.remove('back-call--state--active');
  content.classList.remove('content__general-blur');
  helpBlockBackCall.classList.remove('help-block-back-call--state--active');
  menu.classList.remove('main-menu-blur');
  cancelBackCall.classList.remove('back-call__cancel-1120--active');
})
helpBlockBackCall.addEventListener('click', function (event){
  backCall.classList.remove('back-call--state--active');
  content.classList.remove('content__general-blur');
  helpBlockBackCall.classList.remove('help-block-back-call--state--active');
  menu.classList.remove('main-menu-blur');
  cancelBackCall.classList.remove('back-call__cancel-1120--active');
})
buttonCancel1120BackCall.addEventListener('click', function (event){
  backCall.classList.remove('back-call--state--active');
  content.classList.remove('content__general-blur');
  helpBlockBackCall.classList.remove('help-block-back-call--state--active');
  menu.classList.remove('main-menu-blur');
  cancelBackCall.classList.remove('back-call__cancel-1120--active');
})
