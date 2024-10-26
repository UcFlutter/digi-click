// This handles the toggle navigation button.

const navbarToggler = document.querySelector('.navbar-toggler');
const navbar = document.getElementById('navbar');

navbarToggler.addEventListener('click', ()=> {
    navbar.classList.toggle('bg-dark-expanded');
});