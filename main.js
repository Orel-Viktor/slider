import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".swiper__prev");
  const nextBtn = document.querySelector(".swiper__next");
  const slides = document.querySelectorAll(".swiper__item");
  let currentSlideIndex = 2;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      const description = slide.querySelector(".swiper__item-description");
      const profileImg = slide
        .querySelector(".swiper__item-image")
        .querySelector("img");

      if (i === index) {
        description.classList.add("active");
        profileImg.classList.add("active");
      } else {
        description.classList.remove("active");
        profileImg.classList.remove("active");
      }
    });
  }

  function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
    console.log("prev");
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
    console.log("prev");
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  showSlide(currentSlideIndex);
});
