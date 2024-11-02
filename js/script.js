function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

// Load additional JavaScript files
loadScript('js/landing.js', function() {
    console.log('landing.js loaded!');
});

