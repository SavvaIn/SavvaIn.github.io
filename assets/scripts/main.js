const container = document.querySelector(".brands__container");
let Slider;

function createSlider() {
  if (window.innerWidth < 768) {
    if (!container.classList.contains("swiper-initialized")) {
      Slider = new Swiper(container, {
        slidesPerView: 1.2,
        spaceBetween: 10,
        slideClass: "item",
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          640: {
            slidesPerView: 2.8,
            spaceBetween: 25,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
    }
  } else {
    if (
      container.classList.contains("swiper-initialized") &&
      !Slider.destroyed
    ) {
      Slider.destroy();
    }
  }
}

const button = document.querySelector(".expand-button__expand-show");
const expandShow = document.querySelector(".expand-show");
const wrapper = document.querySelector(".brands__container");
const arrow = document.querySelector(".expand-button__expand-show");
const text = document.querySelector(".expand-button__text");

button.addEventListener("click", () => {
  wrapper.classList.toggle("hide");
  button.classList.toggle("expand-close");
  arrow.classList.toggle("arrow-rotate");
  if (wrapper.classList.contains("hide")) {
    text.textContent = "Показать все";
  } else {
    text.textContent = "Скрыть";
  }
});

createSlider();
window.addEventListener("resize", () => {
  createSlider();
});
