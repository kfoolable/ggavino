'use strict';

const bottomHeroSection = document.querySelector('.section-bottom-hero');
const aboutMeSection = document.querySelector('.section-about-me');

const divider = document.querySelector('.divider');
let lastScrollPos = 10;

window.addEventListener('scroll', function () {
  const scrollPos = window.scrollY;

  if (scrollPos > lastScrollPos) {
    bottomHeroSection.classList.add('scroll-trigger');
    aboutMeSection.classList.add('open');
  } else {
    bottomHeroSection.classList.remove('scroll-trigger');
    aboutMeSection.classList.remove('open');
  }

  // Get the distance between the top of the viewport and the top of the divider element
  const distanceToDivider = divider.getBoundingClientRect().top;

  aboutMeSection.style.transform = `translateY(-${distanceToDivider}px)`;
});

const isInViewport = function (element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

console.log('Hello');
