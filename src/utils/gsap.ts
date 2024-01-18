import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function scrollAnimDesign() {
  gsap.set("[gsap='design-trigger']", {
    y: 32,
    opacity: 0,
  });

  gsap.to("[gsap='design-trigger']", {
    scrollTrigger: {
      markers: false,
      trigger: '.design_wrapper',
      start: '-25% 50%',
      end: '75% 50%',
      scrub: 1,
    },
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 1,
  });
}

export function scrollAnimBenefits() {
  gsap.set("[gsap='benefits-trigger']", {
    y: 32,
    opacity: 0,
  });

  gsap.to("[gsap='benefits-trigger']", {
    scrollTrigger: {
      markers: false,
      trigger: '.benefits_grid',
      start: '-25% 50%',
      end: '50% 50%',
      scrub: 1,
    },
    y: 0,
    opacity: 1,
    duration: 1.5,
    stagger: 1,
  });
}

export function scrollAnimUseCase() {
  gsap.set("[gsap='use-case-trigger']", {
    x: -32,
    opacity: 0,
  });

  gsap.to("[gsap='use-case-trigger']", {
    scrollTrigger: {
      markers: false,
      trigger: '.use-case_content',
      start: '0% 50%',
      end: '100% 50%',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    duration: 1.5,
    stagger: 0.5,
  });
}
