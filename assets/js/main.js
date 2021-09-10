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

/* ++++++++ QUALIFICATION TABS ++++++++ */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabConten => {
            tabConten.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    });
});

/* ++++++++ SERVICES MODAL ++++++++ */
const modalViews = document.querySelectorAll('.services__modal'),
    modalButtons = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modol');
};

modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        modal(i);
    });
});

let activeModal = function(modalClose) {
    modalViews[modalClose].classList.remove('active-modol');
};

modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener('click', () => {
        activeModal(i);
    });
});