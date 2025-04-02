import Swiper from './vendor/swiper.js';
import '../sass/vendor/swiper.scss';

const juriButtonPrev = document.querySelector('.juri__button--prev');
const juriButtonNext = document.querySelector('.juri__button--next');

const juriSlider = new Swiper('.juri-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

juriSlider.slides.forEach((slide, index) => {
  slide.addEventListener('focusin', () => {
    juriSlider.slideTo(index);
  });
});

const updateButtons = () => {
  juriButtonPrev.disabled = juriSlider.slides.length <= 1;
  juriButtonNext.disabled = juriSlider.slides.length <= 1;
};
updateButtons();

juriButtonNext.addEventListener('click', () => {
  juriSlider.slideNext();
  juriSlider.update();
});

juriButtonPrev.addEventListener('click', () => {
  juriSlider.slidePrev();
  juriSlider.update();
});
