// Floating navigation functionality
function initFloatingNav() {
    const nav = document.querySelector(".floating-nav");
    const navLinks = nav.querySelectorAll("a");
    const sections = document.querySelectorAll("section[id]");
    let lastScrollY = window.scrollY;
    let ticking = false;

    // Smooth scroll to section
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });

    // Update active section
    function updateActiveSection() {
      let currentSection = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    }

    // Hide/show navigation based on scroll direction
    function updateNavVisibility() {
      const currentScrollY = window.scrollY;
      nav.classList.toggle("hidden", currentScrollY > lastScrollY && currentScrollY > 100);
      lastScrollY = currentScrollY;
      ticking = false;
    }

    // Scroll event handler
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateNavVisibility();
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Initial active section
    updateActiveSection();
}

export { initFloatingNav };