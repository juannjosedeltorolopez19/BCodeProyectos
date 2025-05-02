// script.js// Toggle mobile menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Cerrar menú al hacer click fuera
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Cerrar menú al cambiar tamaño de pantalla
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
    }
});