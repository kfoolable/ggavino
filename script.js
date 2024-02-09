'use strict';

const bottomHeroSection = document.querySelector('.section-bottom-hero');
const aboutMeSection = document.querySelector('.section-about-me');

const divider = document.querySelector('.divider');

let minScrollPos = 0;

window.addEventListener('scroll', function () {
  const scrollPos = window.scrollY;
  // console.log(scrollPos);

  if (scrollPos > minScrollPos) {
    bottomHeroSection.classList.add('scroll-trigger');
    aboutMeSection.classList.add('open');
  } else {
    bottomHeroSection.classList.remove('scroll-trigger');
    aboutMeSection.classList.remove('open');
  }
});

console.log('Hello');
