const icon = document.querySelector('nav .burger');
const anchorLinks = document.querySelectorAll('nav .nav-links li a');
const navLinks = document.querySelector('nav .nav-links');

icon.addEventListener('click', () => {
    navLinks.classList.toggle('expand');
    icon.classList.toggle('expand-icon');
});

anchorLinks.forEach((value) => {
    value.addEventListener('click', () => {
        navLinks.classList.toggle('expand');
    });
});