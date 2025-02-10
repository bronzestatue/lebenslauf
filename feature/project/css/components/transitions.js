export function initializeTransitions() {
    const startSection = document.querySelector('#start');
    const profilePicture = document.querySelector('.profile-picture');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (!startSection || !profilePicture || !sidebar || !mainContent) return;

    // Initial fade in of profile picture
    setTimeout(() => {
        profilePicture.classList.add('loaded');
    }, 100);

    function updateTransitions() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const scrollProgress = Math.min(scrollY / viewportHeight, 1);

        // Desktop behavior
        if (window.innerWidth > 768) {
            sidebar.classList.add('visible');
            mainContent.classList.add('visible');
            
            if (scrollProgress > 0.3) {
                profilePicture.classList.add('behind-sidebar');
                startSection.style.opacity = 1 - (scrollProgress - 0.3) * 2;
            } else {
                profilePicture.classList.remove('behind-sidebar');
                startSection.style.opacity = 1;
            }
        } 
        // Mobile behavior
        else {
            if (scrollProgress > 0.3) {
                sidebar.classList.add('visible');
                mainContent.classList.add('visible');
                profilePicture.classList.add('behind-sidebar');
                startSection.style.opacity = 1 - (scrollProgress - 0.3) * 2;
            } else {
                sidebar.classList.remove('visible');
                mainContent.classList.remove('visible');
                profilePicture.classList.remove('behind-sidebar');
                startSection.style.opacity = 1;
            }
        }
    }

    // Handle scroll events with improved performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateTransitions();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Handle resize events with debouncing
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateTransitions();
        }, 250);
    });

    // Initial state
    updateTransitions();
}