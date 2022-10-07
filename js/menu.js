const menu = document.querySelector('.menu'),
    menuBtn = document.querySelector('.menu__btn');

function toggleMenu() {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
        menuBtn.classList.toggle('open');
    });
}

toggleMenu();