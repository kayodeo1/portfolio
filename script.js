document.addEventListener('DOMContentLoaded', function() {
    const skillIcons = document.querySelectorAll('.skill-icons i');

    skillIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'translateY(-10px)';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'translateY(0)';
        });
    });
});