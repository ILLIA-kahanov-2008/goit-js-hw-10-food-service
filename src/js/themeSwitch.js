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

const onThemeCheck = () => {
  const savedTheme = localStorage.getItem('theme');
  if (!savedTheme || savedTheme === Theme.LIGHT) {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.add(Theme.LIGHT);
    return
  }
  if (savedTheme === Theme.DARK) {
    refs.themeSwitcher.setAttribute('checked', true);
    refs.body.classList.add(Theme.DARK);
    return
   }  
}

onThemeCheck();

refs.toolbar.addEventListener('change', onThemeChange);

function onThemeChange(e) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.LIGHT) {
    e.target.setAttribute('checked', true);
    localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    return
  }
   if (savedTheme === Theme.DARK) {
    e.target.removeAttribute('checked');
    localStorage.setItem('theme', Theme.LIGHT);
     refs.body.classList.add(Theme.LIGHT);
     refs.body.classList.remove(Theme.DARK);
     return;
  }   
}