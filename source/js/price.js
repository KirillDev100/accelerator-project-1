const abonementCards = document.querySelectorAll('.abonements__item');
const tabs = document.querySelectorAll('.price-tabs__button');
const tabsItems = document.querySelectorAll('.price-tabs__item');
const price = document.getElementById('price');
const heroButton = document.querySelector('.hero__button');

heroButton.addEventListener('click', () => {
  price.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
);

const createBackgroundPrice = () => {
  abonementCards.forEach((abonement) => {
    abonement.querySelector('.abonement__price-back').textContent = abonement.querySelector('.abonement__price').textContent;
  });
};

createBackgroundPrice();

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const lastActiveTab = document.querySelector('.price-tabs__button--active');
    tabs.forEach(((button) => {
      button.classList.remove('price-tabs__button--active');
    }));
    tab.classList.add('price-tabs__button--active');
    abonementCards.forEach((abonement) => {
      abonement.querySelector('.abonement__price').textContent *= (tab.dataset.months / lastActiveTab.dataset.months);
    });
    createBackgroundPrice();
  });
});

const resetTabPadding = () => {
  tabsItems.forEach((tabsItem, index) => {
    const currentOffsetTop = tabsItem.offsetTop;
    const nextItem = tabsItems[index + 1] || null;
    tabsItem.style.overflow = '';
    if (!nextItem || nextItem.offsetTop > currentOffsetTop) {
      tabsItem.style.overflow = 'hidden';
    }
  });
};

export {resetTabPadding};
