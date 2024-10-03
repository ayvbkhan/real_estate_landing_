document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('Burger');
    const burgerMenu = document.getElementById('burgerMenu');

    burger.addEventListener('click', () => {
        burgerMenu.classList.toggle('show'); // Показать или скрыть меню
    });
}); 