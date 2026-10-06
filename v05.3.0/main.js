import Swiper from 'swiper';

import 'swiper/css/swiper.min.css';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // on: {
  //   resize: function () {
  //     this.update();
  //     const currentTranslate = this.getTranslate();
  //     const maxTranslate = this.maxTranslate();
  //     if (currentTranslate < maxTranslate) {
  //       this.setTransition(0);
  //       this.setTranslate(maxTranslate);
  //       this.updateProgress();
  //       this.updateActiveIndex();
  //     }
  //   },
  // },
});
