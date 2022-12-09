let container = document.querySelector(".brands__container");
let Slider;
let openned = false;

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

createSlider();

window.addEventListener("resize", () => {
  createSlider();
  if (window.innerWidth < 768) {
    openned = false;
    container.style.height = "100%";
    expand_show.querySelector("span").textContent = "Показать все";
    expand_show.querySelector("img").style.transform = "rotate(0deg)";
  }
});

let expand_show = document.querySelector(".expand-show");
expand_show.addEventListener("click", () => {
  if (openned) {
    container.style.height = "192px";
    expand_show.querySelector("span").textContent = "Показать все";
    expand_show.querySelector("img").style.transform = "rotate(0deg)";
  } else {
    container.style.height = "100%";
    expand_show.querySelector("span").textContent = "Скрыть";
    expand_show.querySelector("img").style.transform = "rotate(180deg)";
  }
  openned = !openned;
});
