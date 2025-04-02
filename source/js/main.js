import './video.js';
import {resetTabPadding} from './price.js';
import './juri-slider.js';
import {changeAccordeonsState, faqAccordeonsOnResize} from './accordeon.js';
import './faq-tabs.js';
import './reviews-slider.js';
import './lesson-form-validate.js';

window.addEventListener('load', () => {
  changeAccordeonsState();
  resetTabPadding();
});

window.addEventListener('resize', () => {
  faqAccordeonsOnResize();
  resetTabPadding();
});
