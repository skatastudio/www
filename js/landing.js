const textElement = document.querySelector('.landing-text');

document.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight / 2; // Scroll threshold point (halfway down the screen)

    // Check if the scroll position has passed the trigger point
    if (window.scrollY > triggerPoint) {
        textElement.style.webkitTextFillColor = 'transparent'; // Makes the text fill transparent, showing only the outline
    } else {
        textElement.style.webkitTextFillColor = 'black'; // Restores the solid color when above the trigger point
    }
});