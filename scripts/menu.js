const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});