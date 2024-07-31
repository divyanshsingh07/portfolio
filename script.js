/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLinks.forEach(n => n.addEventListener("click", linkAction));

/*=============== HIDE MENU ON SCROLL OR CLICK ===============*/
const hideMenu = () => {
    navMenu.classList.remove("show-menu");
}

window.addEventListener("scroll", hideMenu);
window.addEventListener("click", (event) => {
    // Prevent hiding menu if navToggle is clicked
    if (event.target !== navToggle && !navToggle.contains(event.target)) {
        hideMenu();
    }
});

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".project-container", {

    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },


    },
});
/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
    contactName = document.getElementById("contact-name"),
    contactEmail = document.getElementById("contact-email"),
    contactProject = document.getElementById("contact-project"),
    contactMsg = document.getElementById("contact-msg");

const SendEmail = (e) => {
    e.preventDefault();
    if (contactName.value === "" || contactEmail.value === "" || contactProject.value === "") {
        contactMsg.classList.remove("color-blue");
        contactMsg.classList.add("color-red");
        contactMsg.textContent = 'Write all input fields 📩';
    } else {
        const templateParams = {
            name: contactName.value,
            email: contactEmail.value,
            project: contactProject.value,
        };

        emailjs.send('service_yguuf95', 'template_tjr3r1c', templateParams, 'ykhAovYoXk1NumHjQ')
            .then((response) => {
                contactMsg.classList.remove("color-red");
                contactMsg.classList.add("color-blue");
                contactMsg.textContent = 'Message sent successfully 📩';
                contactForm.reset();
            }, (error) => {
                contactMsg.classList.remove("color-blue");
                contactMsg.classList.add("color-red");
                contactMsg.textContent = 'Failed to send the message. Please try again later.';
            });
    }
}

contactForm.addEventListener("Submit", SendEmail);






/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== DARK LIGHT THEME ===============*/
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconThemeMoon = 'ri-moon-line';
const iconThemeSun = 'ri-sun-line';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Get the current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconThemeSun) ? iconThemeSun : iconThemeMoon;

// Apply the previously selected theme and icon
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList.remove(iconThemeMoon, iconThemeSun);
    themeButton.classList.add(selectedIcon === 'ri-sun-line' ? iconThemeSun : iconThemeMoon);
}

// Toggle theme and icon on button click
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    if (getCurrentTheme() === 'dark') {
        themeButton.classList.remove(iconThemeMoon);
        themeButton.classList.add(iconThemeSun);
    } else {
        themeButton.classList.remove(iconThemeSun);
        themeButton.classList.add(iconThemeMoon);
    }
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});



/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true /* Uncomment this line if you want the animations to repeat */
});

sr.reveal('.home-data');
sr.reveal('.home-info div', { delay: 200, origin: 'bottom', interval: 100 });
sr.reveal('.skills-content:nth-child(1)', { origin: 'left' });
sr.reveal('.skills-content:nth-child(2)', { origin: 'left', delay: 100 });
sr.reveal('.home-data');
sr.reveal('.home-info', { delay: 200, origin: 'bottom', interval: 80 });


sr.reveal('.skill-title', { origin: 'right', interval: 70 });
sr.reveal('.skill-data', { origin: 'left', interval: 70 });



sr.reveal('.qualification-content', { origin: 'left', interval: 90 });
sr.reveal('.qualification-title', { origin: 'right', delay: 90 });
