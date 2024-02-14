'use strict';

const heroSection = document.querySelector('.section-hero');
const bottomHeroSection = document.querySelector('.section-bottom-hero');
const aboutMeSection = document.querySelector('.section-about-me');
const skillsSection = document.querySelector('.section-skills');
const projectsSection = document.querySelector('.section-projects');
const contactSection = document.querySelector('.section-contact');

const ggTitle = document.querySelector('.kgg-title');
const aboutEl = document.getElementById('about');
const skillsEl = document.getElementById('skills');
const projectsEl = document.getElementById('projects');
const contactEl = document.getElementById('contact');
const divider = document.querySelector('.divider');

let minScrollPos = 10;
let maxScrollPos = 50;

window.addEventListener('scroll', function () {
  const scrollPos = window.scrollY;
  // console.log(scrollPos);
  const dividerPos = window.innerHeight - divider.getBoundingClientRect().top;

  if (scrollPos > minScrollPos) {
    bottomHeroSection.classList.add('scroll-trigger');
    aboutMeSection.classList.add('open');

    if (dividerPos > 0)
      aboutMeSection.style.transform = `translate(-50%, ${
        -dividerPos * 0.1 + -50
      }%)`;
    else aboutMeSection.style.transform = `translate(-50%, -50%)`;
  } else {
    bottomHeroSection.classList.remove('scroll-trigger');
    aboutMeSection.classList.remove('open');
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.target === heroSection) {
        if (entry.isIntersecting) ggTitle.classList.add('is-active');
        else ggTitle.classList.remove('is-active');
      }

      if (entry.target === heroSection) {
        if (entry.isIntersecting) ggTitle.classList.add('is-active');
        else ggTitle.classList.remove('is-active');
      }

      if (entry.target === aboutMeSection) {
        if (entry.isIntersecting) aboutEl.classList.add('is-active');
        else aboutEl.classList.remove('is-active');
      }

      if (entry.target === skillsSection) {
        if (entry.isIntersecting) {
          skillsSection.classList.add('open');
          skillsEl.classList.add('is-active');
        } else {
          skillsEl.classList.remove('is-active');
        }
      }

      if (entry.target === projectsSection) {
        if (entry.isIntersecting) {
          projectsSection.classList.add('open');
          projectsEl.classList.add('is-active');
        } else {
          projectsEl.classList.remove('is-active');
        }
      }

      if (entry.target === contactSection) {
        if (entry.isIntersecting) {
          contactEl.classList.add('is-active');
        } else {
          contactEl.classList.remove('is-active');
        }
      }
    });
  },
  {
    root: null,
    threshold: 0.2,
  }
);

const elements = [
  heroSection,
  aboutMeSection,
  skillsSection,
  projectsSection,
  contactSection,
];
elements.forEach((els) => observer.observe(els));
