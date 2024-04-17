export function slider() {
  const prevBtn = document.querySelector(".swiper__prev");
  const nextBtn = document.querySelector(".swiper__next");
  const slides = Array.from(document.querySelectorAll(".swiper__item"));
  const swiperContent = document.querySelector(".swiper__wrapper");

  const curentIndex = 3;
  const nextSlide = (curentIndex) => {
    console.log("click");
    const lastElement = slides.pop();
    console.log(lastElement);
    slides.unshift(lastElement);
    console.log(slides);
    slides.forEach((slide, i) => {
      const description = slide.querySelector(".swiper__item-description");
      const profileImg = slide
        .querySelector(".swiper__item-image")
        .querySelector("img");
      if (i === curentIndex) {
        description.classList.add("active");
        profileImg.classList.add("active");
      } else {
        description.classList.remove("active");
        profileImg.classList.remove("active");
      }
    });
  };

  prevBtn.addEventListener("click", () => {
    nextSlide(curentIndex);
    const lastSlide = swiperContent.lastElementChild;
    swiperContent.removeChild(lastSlide);
    swiperContent.insertBefore(lastSlide, swiperContent.firstElementChild);
  });
  nextSlide(curentIndex);
}
