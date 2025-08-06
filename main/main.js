new Swiper('.card-wrapper', {

  loop: true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    375: {
        slidesPerView: 1,
        spaceBetween: 60,
    },
    425: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 4,
    },
  }
});