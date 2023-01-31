let eventSlider = new Swiper(".js-events-slider", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".js-events-pagination"
  },
  navigation: {
    nextEl: ".events-next",
    prevEl: ".events-prev",
    disabledClass: "nav-btn-disabled",
  },

  breakpoints: {

    548: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    1023: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 27
    },

    1314: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: true
});


