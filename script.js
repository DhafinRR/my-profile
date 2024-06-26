// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Add scroll event listener to change header background
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add fade-in animation for hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('load', function () {
        hero.classList.add('visible');
    });

    // Add animation for sidebar
    const sidebar = document.querySelector('.sidebar');
    window.addEventListener('load', function () {
        sidebar.classList.add('visible');
    });

    // Add hover effect for sidebar image
    const sidebarImg = document.querySelector('.sidebar img');
    sidebarImg.addEventListener('mouseover', function () {
        sidebarImg.style.transform = 'scale(1.10)';
        sidebarImg.style.transition = 'transform 0.3s ease';
    });
    sidebarImg.addEventListener('mouseout', function () {
        sidebarImg.style.transform = 'scale(1)';
        sidebarImg.style.transition = 'transform 0.3s ease';
    });
});
