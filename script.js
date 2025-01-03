window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const winHeight = window.innerHeight;

    // PARALLAX EFFECT FOR ELEMENTS WITH CLASS 'parallax_low'
    const parallaxElements = document.querySelectorAll('.parallax_low');

    parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect(); // Get element's position
        // Calculate distance from viewport center
        const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - winHeight / 2);
        // Maximum blur value (e.g., 10px)
        const parallaxOffset = scrollPosition - winHeight / 2;

        element.style.transform = 'translateY(' + parallaxOffset * 0.1 + 'px)';
    });

    // BLUR EFFECT FOR ELEMENTS WITH CLASS 'blur'
    const blurElements = document.querySelectorAll('.blur');

    blurElements.forEach((element) => {
        const rect = element.getBoundingClientRect(); // Get element's position
        // Calculate distance from viewport center
        const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - winHeight / 2);
        // Maximum blur value (e.g., 10px)
        const maxBlur = 10;
        // Map distance to blur amount
        const blurAmount = Math.min((distanceFromCenter / winHeight) * maxBlur, maxBlur);
        // Apply the blur effect
        element.style.filter = `blur(${blurAmount}px)`;
    });
});