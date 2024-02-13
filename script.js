'use strict';

const bottomHeroSection = document.querySelector('.section-bottom-hero');
const aboutMeSection = document.querySelector('.section-about-me');
const skillsSection = document.querySelector('.section-skills');

const divider = document.querySelector('.divider');

let minScrollPos = 10;

window.addEventListener('scroll', function () {
  const scrollPos = window.scrollY;
  // console.log(scrollPos);
  const dividerPos = window.innerHeight - divider.getBoundingClientRect().top;

  if (scrollPos > minScrollPos) {
    bottomHeroSection.classList.add('scroll-trigger');
    aboutMeSection.classList.add('open');

    if (dividerPos > 0) {
      aboutMeSection.style.transform = `translate(-50%, ${
        -dividerPos * 0.1 + -50
      }%)`;
    } else {
      aboutMeSection.style.transform = `translate(-50%, -50%)`;
    }
  } else {
    bottomHeroSection.classList.remove('scroll-trigger');
    aboutMeSection.classList.remove('open');
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting) {
      skillsSection.classList.add('open');
    } else {
      skillsSection.classList.remove('open');
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
observer.observe(skillsSection);
