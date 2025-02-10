export function initializeProfile() {
    const profilePicture = document.querySelector('.profile-picture');
    const sidebar = document.querySelector('.sidebar');
    if (!profilePicture || !sidebar) return;

    let ticking = false;
    const transitionHeight = window.innerHeight;
    let lastScrollY = window.scrollY;

    function updateProfileTransition() {
        const scrollY = window.scrollY;
        const scrollProgress = Math.min(scrollY / transitionHeight, 1);
        
        // Mobile behavior
        if (window.innerWidth <= 768) {
            if (scrollProgress > 0.3) {
                sidebar.classList.add('visible');
                profilePicture.classList.add('behind-sidebar');
            } else {
                sidebar.classList.remove('visible');
                profilePicture.classList.remove('behind-sidebar');
            }
        } 
        // Desktop behavior
        else {
            sidebar.classList.add('visible');
            if (scrollProgress > 0.3) {
                profilePicture.classList.add('behind-sidebar');
            } else {
                profilePicture.classList.remove('behind-sidebar');
            }
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    // Scroll event listener with requestAnimationFrame for performance
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateProfileTransition();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Initial state
    requestAnimationFrame(() => {
        if (window.innerWidth > 768) {
            sidebar.classList.add('visible');
        }
        updateProfileTransition();
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateProfileTransition();
        }, 250);
    });
}