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