import './index.css';

import { scrollAnimBenefits, scrollAnimDesign, scrollAnimUseCase } from '$utils/gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  scrollAnimDesign();
  scrollAnimBenefits();
  scrollAnimUseCase();
});
