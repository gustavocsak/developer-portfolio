const menuButton = document.getElementsByClassName('toggle-button')[0];
const links = document.getElementsByTagName('nav')[0];

menuButton.addEventListener('click', () => {
    links.classList.toggle('active');
});
