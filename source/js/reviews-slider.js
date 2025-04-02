import Swiper from './vendor/swiper.js';
import '../sass/vendor/swiper.scss';

const reviewsButtonPrev = document.querySelector('.reviews__button--prev');
const reviewsButtonNext = document.querySelector('.reviews__button--next');

const reviewsSlider = new Swiper('.reviews-slider', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 40,
});
const updateButtons = () => {
  reviewsButtonPrev.disabled = reviewsSlider.isBeginning;
  reviewsButtonNext.disabled = reviewsSlider.isEnd;
};
updateButtons();
reviewsButtonNext.addEventListener('click', () => {
  reviewsSlider.slideNext();
  reviewsSlider.update();
});
reviewsButtonPrev.addEventListener('click', () => {
  reviewsSlider.slidePrev();
  reviewsSlider.update();
});
reviewsSlider.on('slideChange', updateButtons);
