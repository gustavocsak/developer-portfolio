const menuButton = document.getElementsByClassName('toggle-button')[0];
const links = document.getElementsByTagName('nav')[0];

menuButton.addEventListener('click', () => {
    links.classList.toggle('active');
});

/* Smooth scrolling to section when clicking navigation anchor tags */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
