const menuButton = document.getElementsByClassName('toggle-button')[0];
const links = document.getElementsByTagName('nav')[0];

const intViewportWidth = window.innerWidth;

menuButton.addEventListener('click', () => {
    links.classList.toggle('active');
});

/* Smooth scrolling to section when clicking navigation anchor tags */
document.querySelectorAll('.link').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
