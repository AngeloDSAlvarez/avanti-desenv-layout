var swiper = new Swiper(".centered-slide-carousel", {
  centeredSlides: false,
  paginationClickable: false,
  loop: true,
  spaceBetween: 17,
  slidesPerView: 6,
  slideToClickedSlide: false,
  pagination: {
    el: ".centered-slide-carousel .swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1028: {
      slidesPerView: 6,
      spaceBetween: 17,
    },
    990: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    390: {
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: 5,

      navigation: {
        nextEl: "",
        prevEl: "",
      },
    },
  },
});
