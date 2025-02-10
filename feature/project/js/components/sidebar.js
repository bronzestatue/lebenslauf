export function initializeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (!sidebar || !mainContent) return;

    if (window.innerWidth <= 768) {
        // Mobile scroll behavior
        const scrollThreshold = window.innerHeight * 0.6;
        let isScrolled = false;
        let lastScrollY = window.scrollY;
        let scrollTimeout;

        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            
            scrollTimeout = setTimeout(() => {
                const currentScrollY = window.scrollY;
                const shouldBeScrolled = currentScrollY > scrollThreshold;
                
                if (shouldBeScrolled !== isScrolled) {
                    isScrolled = shouldBeScrolled;
                    sidebar.classList.toggle('scrolled', isScrolled);
                }
                
                lastScrollY = currentScrollY;
            }, 50);
        });
    }
}