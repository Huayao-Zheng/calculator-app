const body = document.querySelector('body');
const themeDot = document.querySelector('.dot');

const storage = window.localStorage;

let direction = 'right';

(function getThemeFromLocalStorage() {
  const theme = storage.getItem('currentTheme');

  if (theme) {
    body.classList.add(theme);
  } else {
    body.classList.add('theme1');
    storage.setItem('currentTheme', 'theme1');
  }
})();

function checkDirection() {
  if (body.classList.contains('theme1')) direction = 'right';
  if (body.classList.contains('theme3')) direction = 'left';
}

function themeHandler() {
  const themeString = body.classList[0];
  const themeNum = +themeString[themeString.length - 1];

  checkDirection();
  if (direction === 'right') {
    body.classList.remove(`theme${themeNum}`);
    body.classList.add(`theme${themeNum + 1}`);
    storage.setItem('currentTheme', `theme${themeNum + 1}`);
  } else if (direction === 'left') {
    body.classList.remove(`theme${themeNum}`);
    body.classList.add(`theme${themeNum - 1}`);
    storage.setItem('currentTheme', `theme${themeNum - 1}`);
  }
}

themeDot.addEventListener('click', themeHandler);
