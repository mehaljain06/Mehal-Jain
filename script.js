document.addEventListener("DOMContentLoaded", () => {

const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {

preloader.style.opacity = "0";

setTimeout(() => {

preloader.style.display = "none";

}, 500);

});



/* CURSOR */

const cursorDot = document.querySelector(".cursor-dot");

const cursorOutline = document.querySelector(".cursor-outline");

let cursorVisible = false;

window.addEventListener("mousemove", (e) => {

if (!cursorVisible) {

cursorDot.style.opacity = "1";

cursorOutline.style.opacity = "1";

cursorVisible = true;

}

const posX = e.clientX;

const posY = e.clientY;

cursorDot.style.left = posX + "px";

cursorDot.style.top = posY + "px";

cursorOutline.animate({

left: posX + "px",

top: posY + "px"

}, { duration: 500, fill: "forwards" });

});



/* TYPING EFFECT */

const textArray = [

"Digital Marketing",

"SEO Strategy",

"Content Creation",

"Social Media Management"

];

const typingSpan = document.getElementById("typing-text");

let textIndex = 0;

let charIndex = 0;

let isDeleting = false;

function type() {

const currentText = textArray[textIndex];

if (isDeleting) {

typingSpan.textContent = currentText.substring(0, charIndex - 1);

charIndex--;

} else {

typingSpan.textContent = currentText.substring(0, charIndex + 1);

charIndex++;

}

let typeSpeed = isDeleting ? 50 : 100;

if (!isDeleting && charIndex === currentText.length) {

typeSpeed = 2000;

isDeleting = true;

} else if (isDeleting && charIndex === 0) {

isDeleting = false;

textIndex = (textIndex + 1) % textArray.length;

typeSpeed = 500;

}

setTimeout(type, typeSpeed);

}

setTimeout(type, 1000);



/* NAVBAR ACTIVE LINKS */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if (scrollY >= sectionTop - 150) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href").includes(current)) {

link.classList.add("active");

}

});

});



/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("active");

}

});

});

revealElements.forEach(el => observer.observe(el));



/* RIPPLE BUTTON EFFECT */

const buttons = document.querySelectorAll(".ripple");

buttons.forEach(btn => {

btn.addEventListener("click", function (e) {

let x = e.clientX - e.target.getBoundingClientRect().left;

let y = e.clientY - e.target.getBoundingClientRect().top;

let ripple = document.createElement("span");

ripple.style.left = x + "px";

ripple.style.top = y + "px";

ripple.classList.add("ripple-span");

this.appendChild(ripple);

setTimeout(() => {

ripple.remove();

}, 600);

});

});



/* BACK TO TOP */

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

backToTop.style.display = "block";

} else {

backToTop.style.display = "none";

}

});

backToTop.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});



document.getElementById("year").textContent = new Date().getFullYear();

});