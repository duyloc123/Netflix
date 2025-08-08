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


// JS App Movie
const movieIntro  = document.querySelectorAll(".btn__movie");

// Open and exit Intro Movie
const boxMovie = document.getElementById("boxMovie");
const exitIntro = document.getElementById('exitIntro');

movieIntro.forEach((movie) => {
  movie.addEventListener('click', () => {
    boxMovie.classList.add("active");
    document.body.style.overflow = "hidden";
  });
})

exitIntro.addEventListener('click', () => {
  boxMovie.classList.remove("active");
  document.body.style.overflow = "";
});

document.addEventListener('keydown', function(event) {
  if(event.key === "Escape") {
    boxMovie.classList.remove("active");
    document.body.style.overflow = "";
  }
})

// Tab Hidden
const tabData = document.querySelectorAll(".btn__click");
const contentData = document.querySelectorAll(".box__content");

tabData.forEach((btn) => {
  btn.addEventListener('click',() => {
    const tabId = btn.dataset.tab;
    const targetTab = document.querySelector(`.box__content[data-content = "${tabId}"]`);

    if(targetTab.classList.contains("active")) {
      targetTab.classList.remove("active");
    } else {
      contentData.forEach(content => content.classList.remove("active"));
      targetTab.classList.add("active");
    }
  });
});