const faqAccordeons = document.querySelectorAll('.faq__item');
const changeAccordeonsState = () => {
  faqAccordeons.forEach((accordeon) => {
    const accordeonContent = accordeon.querySelector('.faq__item-content');
    if (!accordeon.classList.contains('faq__item--active')) {
      accordeonContent.style.maxHeight = '0';
    } else {
      accordeonContent.style.maxHeight = `${accordeonContent.scrollHeight}px`;
    }
    const accordeonObserver = new MutationObserver(() => {
      if (accordeon.classList.contains('faq__item--active')) {
        accordeonContent.style.maxHeight = `${accordeonContent.scrollHeight}px`;
      }
    });
    accordeonObserver.observe(accordeonContent, {
      childList: true,
      subtree: true,
      characterData: true
    });

    accordeon.querySelector('.faq__item-button').addEventListener('click', () => {
      if (accordeon.classList.contains('faq__item--active')) {
        accordeonContent.style.maxHeight = '0';
        accordeon.classList.remove('faq__item--active');
      } else {
        accordeonContent.style.maxHeight = `${accordeonContent.scrollHeight}px`;
        accordeon.classList.add('faq__item--active');
      }
    });
  });
};
const faqAccordeonsOnResize = () => {
  faqAccordeons.forEach((accordeon) => {
    const accordeonContent = accordeon.querySelector('.faq__item-content');
    if (accordeon.classList.contains('faq__item--active') && parseInt(accordeonContent.style.maxHeight, 10) !== accordeonContent.scrollHeight) {
      accordeonContent.style.maxHeight = `${accordeonContent.scrollHeight}px`;
    }
  });
};

export {faqAccordeons, changeAccordeonsState, faqAccordeonsOnResize};
