function distFromCenter(element) {
    const winHeight = window.innerHeight;
    const rect = element.getBoundingClientRect(); // Get element's position
    // Calculate distance from viewport center
    const divCenter = rect.top + rect.height / 2; 
    const viewportCenter = winHeight / 2; 
    return divCenter - viewportCenter;
}

function parallax_low() {
    const winHeight = window.innerHeight;

    // PARALLAX EFFECT FOR ELEMENTS WITH CLASS 'parallax_low'
    const parallax_low = document.querySelectorAll('.parallax_low');

    parallax_low.forEach((element) => {
        distanceFromCenter = distFromCenter(element);
        const maxTranslate = 100; // Maximum translateY value
        const translateY = Math.max(Math.min(distanceFromCenter * -0.1, maxTranslate), -maxTranslate);

        element.style.transform = 'translateY(' + translateY + 'px)';
    });
}

function parallax_high() {
    const winHeight = window.innerHeight;

    // PARALLAX EFFECT FOR ELEMENTS WITH CLASS 'parallax_low'
    const parallax_high = document.querySelectorAll('.parallax_high');

    parallax_high.forEach((element) => {
        distanceFromCenter = distFromCenter(element);
        const maxTranslate = 100; // Maximum translateY value
        const translateY = Math.max(Math.min(distanceFromCenter * 0.1, maxTranslate), -maxTranslate);

        element.style.transform = 'translateY(' + translateY + 'px)';
    });
}

function blur_on_scroll() {
    const winHeight = window.innerHeight;

    // BLUR EFFECT FOR ELEMENTS WITH CLASS 'blur'
    const blurElements = document.querySelectorAll('.blur');

    blurElements.forEach((element) => {
        const distanceFromCenter = distFromCenter(element);
        // Maximum blur value (e.g., 10px)
        const maxBlur = 10;
        // Map distance to blur amount
        const blurAmount = Math.min((distanceFromCenter / winHeight) * maxBlur, maxBlur);

        // Apply the blur effect
        element.style.filter = `blur(${blurAmount - 1}px)`;
    });
}

// function enlarge_when_centered() {
//     const elements = document.querySelectorAll('.enlargeable');

//     elements.forEach((element) => {
//         distanceFromCenter = distFromCenter(element);
//         if (distanceFromCenter < 4) {
//             element.classList.add('enlarged');
//         } else {
//             element.classList.remove('enlarged');
//         }
//     });
// }

// Scroll Effects
window.addEventListener('scroll', function () {
    parallax_low();
    parallax_high();
    blur_on_scroll();
    // enlarge_when_centered();
});