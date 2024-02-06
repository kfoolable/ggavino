'use strict';

const aboutMeSection = document.querySelector('.section-about-me');

window.addEventListener('scroll', function () {
  const scrollPos = window.scrollY;
  let lastScrollPos = 0;

  if (scrollPos > 15) {
    if (scrollPos > lastScrollPos) {
      aboutMeSection.classList.add('scroll-trigger');
    }
  } else {
    aboutMeSection.classList.remove('scroll-trigger');
  }

  // Update the last scroll poWsition
  lastScrollPos = scrollPos;
});

console.log('Hello');
