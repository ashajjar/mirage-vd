document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll-based animations for feature cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Simple mobile menu toggle (if needed in the future)
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= 768) {
            const menuButton = document.createElement('button');
            menuButton.classList.add('mobile-menu-button');
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
            
            menuButton.addEventListener('click', () => {
                navLinks.classList.toggle('show');
            });
            
            if (!nav.querySelector('.mobile-menu-button')) {
                nav.querySelector('.container').appendChild(menuButton);
            }
        }
    };

    // Call initially and on resize
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
}); 