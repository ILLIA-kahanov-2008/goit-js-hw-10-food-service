// Тема
// Добавь функционал изменения темы при нажатии (событие
// change) на чекбокс #theme-switch-toggle в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body
// класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками
// страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить
// свойство checked у чекбокса #theme-switch-toggle в true,
// чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое
// перечисление.

import { refs } from './refs.js';


const Theme = {
LIGHT: 'light-theme',
DARK: 'dark-theme',
};

refs.themeSwitcher.addEventListener('change', onThemeChange);

function onThemeChange(e) {


}