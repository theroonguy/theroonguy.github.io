window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.scrollY;

    parallax.style.transform = 'translateY(' + scrollPosition * 0.1 + 'px)';
});