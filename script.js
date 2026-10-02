// TYPING EFFECT

const words = [
    "Web Developer",
    "Frontend Developer",
    "Programmer",
    "Creative Developer"
];

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("mobile-nav");

});


// CLOSE MENU AFTER CLICK

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("mobile-nav");
    });

});


// SCROLL REVEAL

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});


// NAVBAR BACKGROUND ON SCROLL

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(8,8,8,0.95)";
    } else {
        navbar.style.background = "rgba(8,8,8,0.75)";
    }

});