import './style.css';

import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';
import { gsap } from 'gsap';

document.querySelector('#app').innerHTML = `
  <div class = "container">


  </div>
`;
const container = document.querySelector('.container');
const colors = ['#FF0000', '#D90000', '#B30000', '#8C0000', '#660000', '#4D0000', '#330000', '#1A0000', '#0F0000', '#080000', '#141414'];
colors.forEach(color => {
  const div = document.createElement('div');
  div.style.backgroundColor = color;
  div.style.flex = 1;
  div.style.opacity = 0;
  div.style.transform = 'translateX(-100%)';
  container.appendChild(div);
});
gsap.to('.container div', {
  duration: 1,
  x: '0%',
  opacity: 1,
  stagger: 0.1,
  ease: 'power1.inOut',
});
