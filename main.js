// Initialize Lucide icons
lucide.createIcons();

// Publications data
const publications = [
  {
    title: "Verantwortungsvoller Umgang mit künstlicher Intelligenz. Wie können Menschenrechte beim Einsatz von KI gewahrt werden?",
    publisher: "GRIN",
    year: "2023",
    url: "https://www.grin.com/document/1382179",
    description: "Diese Arbeit zielt darauf ab, AI-Methoden und deren Regulierung darzustellen, bestehende Rahmenbedingungen und Regulierungen von AI zu beleuchten und eine Diskussionsgrundlage über ihren Nutzen, Risiken und Gefahren im Sinne der Menschenrechte zu schaffen. Sie betont die Wichtigkeit einer angemessenen Überwachung von AI, um Missbrauch einzudämmen, und fordert die Sensibilisierung der Öffentlichkeit für die Potenziale und Risiken der AI, um Menschen vor Betrug und Manipulation zu schützen."
  },
  {
    title: "Integration eines Qualitätsmanagements in der Softwareentwicklung",
    publisher: "Amazon",
    year: "2023",
    url: "https://amzn.eu/d/00F2U5M",
    description: "Das Qualitätsmanagement in der Softwareentwicklung bezieht sich auf den Prozess, die Methoden und die Tools, die verwendet werden, um die Qualität von Softwareprodukten sicherzustellen. Dies beinhaltet die Überwachung und Überprüfung der Entwicklung von Anfang bis Ende, um sicherzustellen, dass die Software den Anforderungen des Kunden entspricht und Fehler minimiert werden. Ein wichtiger Teil des Qualitätsmanagements in der Softwareentwicklung ist die Durchführung von Tests."
  },
  // Add all other publications here...
];

// Function to create publication elements
function createPublicationElement(publication) {
  const div = document.createElement('div');
  div.className = 'publication-item';
  
  div.innerHTML = `
    <div class="publication-header">
      <div>
        <a href="${publication.url}" class="publication-title">
          <h3>${publication.title}</h3>
        </a>
        <p class="date">${publication.publisher}, ${publication.year}</p>
      </div>
      <a href="${publication.url}" class="external-link" aria-label="External link to publication">
        <i data-lucide="external-link"></i>
      </a>
    </div>
    <p class="description">${publication.description}</p>
  `;
  
  return div;
}

// Load publications
function loadPublications() {
  const container = document.querySelector('.publication-items');
  publications.forEach(pub => {
    container.appendChild(createPublicationElement(pub));
  });
  // Reinitialize icons for newly added elements
  lucide.createIcons();
}

// Floating navigation functionality
function initFloatingNav() {
  const nav = document.querySelector('.floating-nav');
  const navLinks = nav.querySelectorAll('a');
  const sections = document.querySelectorAll('section[id]');
  let lastScrollY = window.scrollY;
  let ticking = false;

  // Smooth scroll to section
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Update active section
  function updateActiveSection() {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 300) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Hide/show navigation based on scroll direction
  function updateNavVisibility() {
    const currentScrollY = window.scrollY;
    nav.classList.toggle('hidden', currentScrollY > lastScrollY && currentScrollY > 100);
    lastScrollY = currentScrollY;
    ticking = false;
  }

  // Scroll event handler
  window.addEventListener('scroll', () => {
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadPublications();
  initFloatingNav();
});