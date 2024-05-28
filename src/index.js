import { pastas } from './pastas.js';
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { aboutPage } from './about.js';

require('./styles/styles.css');
require('./styles/header.css');
require('./styles/footer.css');
require('./styles/home.css');
require('./styles/menu.css');
require('./styles/about.css');

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const content = document.querySelector('#content');

//content.appendChild(homePage);
//content.appendChild(aboutPage);

homeBtn.addEventListener('click', () => {
    addActiveClass(homeBtn);
    content.innerText = '';
    content.appendChild(homePage);
});

menuBtn.addEventListener('click', () => {
    addActiveClass(menuBtn);
    content.innerText = '';
    content.appendChild(menuPage);
});


function addActiveClass(btn) {
    document.querySelectorAll('header button').forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
}
