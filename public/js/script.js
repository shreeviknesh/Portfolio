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
                navLink.style.animation = `navLinkFade 0.5s cubic-bezier(0.2, 0.68, 0.5, 1.71) forwards ${index / 7 + 0.5}s`;
            }
        });
        hamburger.classList.toggle('hamburger-active');
    });

    // Fixes https://github.com/shreeviknesh/Portfolio/issues/1
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', () => {
            hamburger.click();
        });
    });
};

navSlide();