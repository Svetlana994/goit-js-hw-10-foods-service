const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

refs.checkbox.addEventListener('change', onCheckboxChange);


function onCheckboxChange() {
  if (refs.checkbox.checked) {
      refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
        
    localStorage.setItem('theme', Theme.DARK);
    }
    else {
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);

        localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const getTheme = localStorage.getItem('theme');
if (getTheme === Theme.DARK) {
  refs.checkbox.checked = true
  refs.body.classList.add(Theme.DARK);
}
