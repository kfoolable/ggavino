'use strict';

const bottomHeroSection = document.querySelector('.section-bottom-hero');
const aboutMeSection = document.querySelector('.section-about-me');

const divider = document.querySelector('.divider');

let minScrollPos = 10;

window.addEventListener('scroll', function () {
  const scrollPos = window.scrollY;
  // console.log(scrollPos);
  const dividerPos =
    (window.innerHeight - divider.getBoundingClientRect().top) * 0.1;

  if (scrollPos > minScrollPos) {
    bottomHeroSection.classList.add('scroll-trigger');
    aboutMeSection.classList.add('open');

    // if (dividerPos >= 0) {
    //   aboutMeSection.style.transform = `matrix(1, 0, 0, 1, 0, -${dividerPos})`;
    // }

    if (dividerPos > 0) {
      aboutMeSection.style.transform = `translate(-50%, ${-dividerPos + -50}%)`;
    } else {
      aboutMeSection.style.transform = `translate(-50%, -50%)`;
    }
  } else {
    bottomHeroSection.classList.remove('scroll-trigger');
    aboutMeSection.classList.remove('open');
  }

  // if (dividerPos >= 0) {
  //   aboutMeSection.style.transform = `matrix(1, 0, 0, 1, 0, -${dividerPos})`;
  // }

  // if (dividerPos > 0) {
  //   aboutMeSection.style.transform = `translateY(-${dividerPos}%)`;
  // }
});

console.log('Hello');
