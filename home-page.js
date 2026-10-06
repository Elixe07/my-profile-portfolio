const bars = document.querySelector(".bars");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-menu li a");
const changingText = document.getElementById("changing-text");

bars.addEventListener("click", selectMenu);

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active")
    });
});

function selectMenu() {
    bars.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const texts = ["FRONT-END DEVELOPER", "IT SYSTEM SUPPORT", "IT END USER"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

function type() {
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else{
        letter = currentText.slice(0, ++index);
    }
    changingText.textContent = letter;

    let typeSpeed = 100; 

    if (isDeleting) {
        typeSpeed = 50;
    }
    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = 2000; 
        isDeleting = true
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++; 
        if (count === texts.length) {
            count = 0;
        }
        typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
}
type();