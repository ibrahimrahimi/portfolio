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

/* ++++++++ ACCORDION SKILLS ++++++++ */
const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    console.log(itemClass);
    for(i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    };
    
    if(itemClass === 'skills__content skills__close') {
        this.parentNode.classList = 'skills__content skills__open';
    };
};

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
}); 