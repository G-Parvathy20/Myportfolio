const toggle = document.getElementById('menu-toggle');
const aside = document.querySelector('.aside');

  toggle.addEventListener('click', () => {
    aside.classList.toggle('show-aside');
  });
