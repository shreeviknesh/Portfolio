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

// Page has to go back to the beginning on reload
// Source: https://stackoverflow.com/a/13824103
const goToStartOnReload = () => {
    window.location.replace("#");
    if (typeof window.history.replaceState == 'function') {
        history.replaceState({}, '', window.location.href.slice(0, -1));
    }
}

// Go to the next section on clicking the arrow
const arrowGoto = () => {
    const arrows = document.querySelectorAll('.down-arrow');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', event => {
            event.preventDefault();
            let target = arrow.getAttribute('data-goto');
            window.location = target;
        });
    });
}

// Invoking all the defined functions
(() => {
    navSlide();
    goToStartOnReload();
    arrowGoto();
})();