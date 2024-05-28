import { pastas } from './pastas.js';
/*
   <div class="menu">
   <h2>Menu:</h2>
   <div class="menu-list">
   <div class="dish">
   <div class="dish-title">Lorem ipsum dolor sitdiv</div>
   <div class="dish-description">Lorem ipsum dolor amet consectetur adipisicing.</div>
   <div class="dish-region">Lorem</div>
   <div class="dish-price">9</div>
   </div>
   </div>
   </div>
   */


const menuPage = document.createElement('div');
menuPage.classList.add('menu');

const h2 = document.createElement('h2');
h2.innerText = 'Menu:';
menuPage.appendChild(h2);

const menuList = document.createElement('div');
menuList.classList.add('menu-list');
menuPage.appendChild(menuList);


function createDishElement(dish) {
    const dishElement = document.createElement('div');
    dishElement.classList.add('dish');
    dishElement.innerHTML = `<div class="dish-title">${dish.title}</div>
    <div class="dish-description">${dish.description}</div>
    <div class="dish-region">${dish.region}</div>
    <div class="dish-price">${dish.price}</div>`;
    return dishElement;
}

pastas.forEach(dish => {
    const elem = createDishElement(dish);
    menuList.appendChild(elem);
});

export { menuPage };
