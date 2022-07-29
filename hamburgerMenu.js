const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  document.getElementById('myDropdown').classList.toggle('show');
  document.getElementById('myHamburger').classList.toggle('change');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  document.getElementById('myDropdown').classList.remove('show');
  document.getElementById('myHamburger').classList.remove('change');
}));
