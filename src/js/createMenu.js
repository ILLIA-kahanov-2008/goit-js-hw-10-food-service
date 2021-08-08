import dishCardTpl from '../templates/card.hbs'
import { refs } from './refs.js';
import dishes from '../menu.json';


refs.menuList.insertAdjacentHTML('beforeend', dishCardTpl(dishes));