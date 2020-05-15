// Navbar
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-links-active');
        navLinks.forEach((navLink, index) => {
            if (navLink.style.animation) {
                navLink.style.animation = "";
            } else {
                navLink.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        hamburger.classList.toggle('hamburger-active');
    });
};

navSlide();