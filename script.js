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
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('result').innerHTML = '<p>Thank you for your message!</p>';
            this.reset();
        } else {
            response.json().then(data => {
                document.getElementById('result').innerHTML = '<p>' + data.message + '</p>';
            });
        }
    }).catch(error => {
        document.getElementById('result').innerHTML = '<p>There was an error sending your message.</p>';
    });
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
