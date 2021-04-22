import menu from './menu.json';
import template from '../markup/template.hbs';
import './themes';


const menuList = document.querySelector('.js-menu');
const createMenuCards = createMenuCard(menu) 


function createMenuCard(menu) {
   return menu.map(template).join('')
}

menuList.insertAdjacentHTML('beforeend', createMenuCards)