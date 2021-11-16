import '../scss/style.scss';

const swiper = new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination',
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
var buttonShowAllButtons = document.querySelector('.brands-more');
var buttonHideAllButtons = document.querySelector('.brands-hide');
var brands = document.querySelector('.brands-main');


buttonShowAllButtons.addEventListener('click', function (event) {
  buttonShowAllButtons.classList.add('brands-more--state--active');
  buttonHideAllButtons.classList.remove('brands-hide--state--active');
  brands.classList.add('brands-main--show')
})
buttonHideAllButtons.addEventListener('click', function (event) {
  buttonHideAllButtons.classList.add('brands-hide--state--active');
  buttonShowAllButtons.classList.remove('brands-more--state--active');
  brands.classList.remove('brands-main--show');
})
