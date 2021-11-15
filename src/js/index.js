import '../scss/style.scss';

console.log('Works!');

var buttonShowAllText = document.querySelector('.blog-more');
var text = document.querySelector('.blog__text');


buttonShowAllText.addEventListener('click', function (event) {
  buttonShowAllText.classList.remove('blog-more')
  buttonShowAllText.classList.add('blog-more--state--active');
  // text.classList.remove('blog__text')
  text.classList.add('blog__text--state--active')
})
