// let slideIndex = 0;
// showSlide(slideIndex);

// function prevSlide() {
//     slideIndex -= 1;
//     if (slideIndex < 0) {
//         slideIndex = document.querySelectorAll('.gallery .card').length - 1;
//     }
//     showSlide(slideIndex);
// }

// function nextSlide() {
//     slideIndex += 1;
//     if (slideIndex >= document.querySelectorAll('.gallery .card').length) {
//         slideIndex = 0;
//     }
//     showSlide(slideIndex);
// }


let slideIndex = 0;
showSlide(slideIndex);

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(index) {
    let slides = document.querySelectorAll('.gallery .card');
    let dots = document.querySelectorAll('.dot');
    
    // Remove active class from all slides and dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }
    
    // Add active class to the current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= document.querySelectorAll('.gallery .card').length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)

// JavaScript file (e.g., script.js)

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbarLinks = document.querySelector('.navbar-links');

    menuIcon.addEventListener('click', function() {
        navbarLinks.classList.toggle('open');
    });
});



    