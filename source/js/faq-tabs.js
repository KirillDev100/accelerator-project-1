import { faqAccordeons } from './accordeon.js';

const faqTabsButtons = document.querySelectorAll('.faq-tabs__button');
const activeTabButton = document.querySelector('.faq-tabs__button--active');

const createBorderTop = () => {
  for (let i = 0; i < faqAccordeons.length; i++) {
    if (!faqAccordeons[i].classList.contains('visually-hidden')) {
      faqAccordeons[i].classList.add('faq__item--first');
      break;
    }
  }
};

const updateCategory = (category) => {
  faqAccordeons.forEach((faqAccordeon) => {
    faqAccordeon.classList.add('visually-hidden');
    faqAccordeon.querySelector('.faq__item-button').setAttribute('tabindex', '-1');
    if (faqAccordeon.dataset.category === category) {
      faqAccordeon.classList.remove('visually-hidden');
      faqAccordeon.querySelector('.faq__item-button').setAttribute('tabindex', '0');
    }
  });
  createBorderTop();
};
updateCategory(activeTabButton.dataset.category);

faqTabsButtons.forEach((faqTabsButton, index) => {
  faqTabsButton.addEventListener('click', () => {
    faqTabsButtons.forEach(((tabsButton) => {
      tabsButton.classList.remove('faq-tabs__button--active');
    }));
    faqTabsButtons[index].classList.add('faq-tabs__button--active');
    updateCategory(faqTabsButton.dataset.category);
  });
});
