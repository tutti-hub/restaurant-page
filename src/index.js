import { pastas } from './pastas.js';
import { homePage } from './home.js';

require('./styles/styles.css');
require('./styles/header.css');
require('./styles/footer.css');
require('./styles/home.css');
require('./styles/menu.css');


const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const content = document.querySelector('#content');

content.appendChild(homePage);

homeBtn.addEventListener('click', () => {
    console.log('home');
    content.innerText = '';
    content.appendChild(homePage);
});
