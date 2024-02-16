'use strict';

const heroSection = document.querySelector('.section-hero');
const bottomHeroSection = document.querySelector('.section-bottom-hero');
const aboutMeSection = document.querySelector('.section-about-me');
const skillsSection = document.querySelector('.section-skills');
const projectsSection = document.querySelector('.section-projects');
const contactSection = document.querySelector('.section-contact');

const ggTitle = document.querySelector('.kgg-title');
const arrowUp = document.querySelector('.arrow-up');

const btnNav = document.querySelector('.btn-mobile-nav');
const iconNav = document.querySelector('.icon-mobile-nav');
const topNav = document.querySelector('.top-nav');
const socialLogos = document.querySelectorAll('.socials-logo');
const navLinksEl = document.querySelector('.top-nav-list');
const navLinks = document.querySelectorAll('.top-nav-link');
const abContent = document.querySelector('.ab-content');
const abBtn = document.querySelector('.ab-work-together');
const houseEl = document.getElementById('house');
const aboutEl = document.getElementById('about');
const skillsEl = document.getElementById('skills');
const projectsEl = document.getElementById('projects');
const contactEl = document.getElementById('contact');
const divider = document.querySelector('.divider');

let minScrollPos = 10;
let maxScrollPos = 50;

const elements = [
  heroSection,
  aboutMeSection,
  skillsSection,
  projectsSection,
  contactSection,
  abContent,
];

const homeClick = [arrowUp, houseEl];

btnNav.addEventListener('click', function () {
  topNav.classList.toggle('nav-open');

  const contactisActive = contactEl.classList.contains('is-active');
  // console.log(contactisActive);

  if (contactisActive)
    socialLogos.forEach((logo) => logo.classList.toggle('btn-color'));
});

abBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const href = abBtn.getAttribute('href');
  const element = document.querySelector(href);

  element.scrollIntoView({
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', scrollEvent);
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = link.getAttribute('href');
    // console.log(id);
    const element = document.querySelector(href);

    element.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

homeClick.forEach((els) => {
  els.addEventListener('click', function (e) {
    e.preventDefault();

    heroSection.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const observer = new IntersectionObserver(isActive, {
  root: null,
  threshold: 0.15,
});
elements.forEach((els) => observer.observe(els));

function scrollEvent() {
  const scrollPos = window.scrollY;
  // console.log(scrollPos);
  const dividerPos = window.innerHeight - divider.getBoundingClientRect().top;

  if (scrollPos > minScrollPos) {
    bottomHeroSection.classList.add('scroll-trigger');
    aboutMeSection.classList.add('open');

    topNav.classList.add('open');

    if (dividerPos > 0)
      aboutMeSection.style.transform = `translate(-50%, ${
        -dividerPos * 0.1 + -50
      }%)`;
    else aboutMeSection.style.transform = `translate(-50%, -50%)`;
  } else {
    bottomHeroSection.classList.remove('scroll-trigger');
    aboutMeSection.classList.remove('open');
    topNav.classList.remove('open');
    topNav.classList.remove('nav-open');
  }
}

function isActive(entries) {
  entries.forEach((entry) => {
    if (entry.target === abContent) {
      if (entry.isIntersecting) houseEl.classList.add('is-active');
      else houseEl.classList.remove('is-active');
    }

    if (entry.target === heroSection) {
      if (entry.isIntersecting) ggTitle.classList.add('is-active');
      else ggTitle.classList.remove('is-active');
    }

    if (entry.target === skillsSection) {
      if (entry.isIntersecting) {
        skillsSection.classList.add('open');
        skillsEl.classList.add('is-active');
      } else {
        // skillsSection.classList.remove('open');
        skillsEl.classList.remove('is-active');
      }
    }

    if (entry.target === projectsSection) {
      if (entry.isIntersecting) {
        projectsSection.classList.add('open');
        projectsEl.classList.add('is-active');
      } else {
        // projectsSection.classList.remove('open');
        projectsEl.classList.remove('is-active');
      }
    }

    if (entry.target === contactSection) {
      if (entry.isIntersecting) {
        contactEl.classList.add('is-active');
        iconNav.classList.add('btn-color');
        socialLogos.forEach((logo) => logo.classList.add('btn-color'));
      } else {
        contactEl.classList.remove('is-active');
        iconNav.classList.remove('btn-color');
        socialLogos.forEach((logo) => logo.classList.remove('btn-color'));
      }
    }
  });
}
