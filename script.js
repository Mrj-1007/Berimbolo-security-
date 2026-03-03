const cards = document.querySelectorAll('.product-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked a product!');
    });
});

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}