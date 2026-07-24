/* ==========================================
   Sandhya Goud Portfolio
   script.js
========================================== */

// ================================
// Typing Animation
// ================================

const typingElement = document.querySelector(".typing");

const roles = [
    "Python Developer",
    "AI & ML Undergraduate",
    "Problem Solver",
    "Open to Internship"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


// ================================
// Mobile Navigation
// ================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// Close menu after clicking

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================================
// Scroll Progress Bar
// ================================

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / height) * 100;

    document.getElementById("progress-bar")
        .style.width = progress + "%";

});


// ================================
// Back To Top Button
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ================================
// Active Navigation
// ================================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=
section.offsetTop-150;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});


// ================================
// Contact Form
// ================================

const form =
document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs =
form.querySelectorAll("input,textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;

input.style.border="2px solid red";

}

else{

input.style.border="none";

}

});

if(valid){

alert("✅ Thank you! Your message has been recorded. You can also contact me directly via email.");

form.reset();

}

});


// ================================
// Scroll Reveal Animation
// ================================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(
".project-card,.skill-card,.certificate-card,.stat-box,.education-card,.detail-card"
).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// ================================
// Floating Hero Cards
// ================================

const cards =
document.querySelectorAll(".floating-card");

window.addEventListener("mousemove",(e)=>{

let x =
(e.clientX/window.innerWidth)-0.5;

let y =
(e.clientY/window.innerHeight)-0.5;

cards.forEach((card,index)=>{

card.style.transform=

`translate(${x*20*(index+1)}px,
${y*20*(index+1)}px)`;

});

});


// ================================
// Navbar Shadow
// ================================

const navbar =
document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

navbar.style.boxShadow=
"0 10px 30px rgba(0,0,0,.3)";

}

else{

navbar.style.boxShadow="none";

}

});


// ================================
// Welcome Message
// ================================

window.addEventListener("load",()=>{

console.log(
"Welcome to Sandhya Goud's Portfolio 🚀"
);
