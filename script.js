// Create cursor element
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Track mouse movement
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Show circle on hover for links & sections
const hoverTargets = document.querySelectorAll('a, section, button, .intro-text, .contact-section');

hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-active'); // Hide default cursor
        cursor.style.opacity = 1; // Show circle
    });

    target.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-active'); // Show default cursor
        cursor.style.opacity = 0; // Hide circle
    });
});


