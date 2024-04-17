export function slider() {
  const prevBtn = document.querySelector(".swiper__prev");
  const nextBtn = document.querySelector(".swiper__next");
  const slides = Array.from(document.querySelectorAll(".swiper__item"));
  const swiperContent = document.querySelector(".swiper__wrapper");

  const curentIndex = 3;

  const prevSlide = (curentIndex) => {
    const lastElement = slides.pop();
    slides.unshift(lastElement);
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
  const nextSlide = (curentIndex) => {
    const firstElement = slides.shift();
    slides.push(firstElement);
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
    prevSlide(curentIndex);
    const lastSlide = swiperContent.lastElementChild;
    swiperContent.removeChild(lastSlide);
    swiperContent.insertBefore(lastSlide, swiperContent.firstElementChild);
  });

  nextBtn.addEventListener("click", () => {
    nextSlide(curentIndex);
    const firstSlide = swiperContent.firstElementChild;
    swiperContent.removeChild(firstSlide);
    swiperContent.appendChild(firstSlide);
  });
  prevSlide(curentIndex);
}
