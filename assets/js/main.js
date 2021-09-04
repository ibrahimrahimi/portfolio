/* ++++++++ MENU SHOW Y HIDDEN ++++++++ */
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

/* +++++++ SHOW MENU +++++++++ */
/* Validate if contant exists */
if(navToggle) {
    console.log('close button clicked!!!');
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('nav__show');
    });
};

/* ++++++++ REMOVE MENU MOBILE ++++++++ */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    console.log('nav-menu is here!');
    // When we click on each nav__link, we remove the show-menu class.
    navMenu.classList.remove('nav__show');

};

console.log(navLink);
navLink.forEach(n => n.addEventListener('click', linkAction));