/* ++++++++ MENU SHOW Y HIDDEN ++++++++ */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* +++++++ SHOW MENU +++++++++ */
/* Validate if contant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('menu__show');
    });
};

/* +++++++ HIDE MENU +++++++++ */
/* Validate if contant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('menu__show');
    });
};

/* ++++++++ REMOVE MENU MOBILE ++++++++ */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class.
    navMenu.classList.remove('menu__show');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ++++++++ ACCORDION SKILLS ++++++++ */
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

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

/* ++++++++ PORTFOLIO SWIPER ++++++++ */
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

/* ++++++++ TESTIMONIAL SWIPER ++++++++ */
var swiperTestimonial = new Swiper(".testimonial__container", {
    loop:true,
    grabCursor: true,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
  });

/* ++++++++ SCROLL SECTIONS ACTIVE LINK ++++++++ */
const sections = document.querySelectorAll('section[id');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(currentSection => {
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop - 50;
        const sectionId = currentSection.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        };
    });
};

window.addEventListener('scroll', scrollActive);

/* ++++++++ CHANGE BACKGROUND HEADER ++++++++ */
function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scoll is greater than 200 viewport height, and tehs scroll-header class is the header tag
    if(this.scrollY >= 80){
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    };
};

window.addEventListener('scroll', scrollHeader);

/* ++++++++ SHOW SCROLL UP ++++++++ */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
    if(this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    };
};

window.addEventListener('scroll', scrollUp);

/* ++++++++ SHOW SCROLL UP ++++++++ */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-them class.
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moonset' : 'uil-sun';

// we validate if the user previously choose a tipic.
if(selectedTheme) {
    // We validate is fulfilled, we ask what the issue was to know if we activated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moonset' ? 'add' : 'remove'] (iconTheme);
};

// Activate / deactivate the theme manully with the button 
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and teh current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});