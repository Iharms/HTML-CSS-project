const projecktSlider = new Swiper(".js-partners-slider", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },

  spaceBetween: 20,
  navigation: {
    nextEl: ".projeckts-next",
    prevEl: ".projeckts-prev"
  },

  breakpoints: {


    590: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },

    1314: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

});


