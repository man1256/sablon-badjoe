// ==================== NAVBAR SCROLL EFFECT ====================
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// ==================== MOBILE MENU TOGGLE ====================
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navbarMenu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('open');
            const icon = toggle.querySelector('i');
            if (menu.classList.contains('open')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !toggle.contains(e.target)) {
                menu.classList.remove('open');
                const icon = toggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    }
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ==================== CONSOLE LOG ====================
console.log('👕 Sablon Badjoe - Kualitas Terbaik');
console.log('💬 Hubungi kami via WhatsApp: https://wa.me/6281234567890');
console.log('📧 Email: sablonbadjoe@gmail.com');

// ==================== YEAR AUTO UPDATE ====================
document.querySelectorAll('.footer-bottom p').forEach(el => {
    el.innerHTML = el.innerHTML.replace('2024', new Date().getFullYear());
});