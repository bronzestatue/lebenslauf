import { initializeSidebar } from './sidebar.js';
import { loadExperiences } from './experience.js';
import { loadCertifications } from './certification.js';
import { loadPublications } from './publication.js';
import { loadEducation } from './education.js';
import { initFloatingNav } from './navbar.js';
import { addScrollEventListener } from './scroll.js';

document.addEventListener("DOMContentLoaded", () => {
  initializeSidebar();
  loadExperiences();
  loadCertifications();
  loadPublications();
  loadEducation();
  initFloatingNav();
  lucide.createIcons();
  addScrollEventListener(); // Hinzufügen des Scroll-Event-Listeners
  console.log('Document loaded and functions initialized');

  // Ensure sections have unique IDs
  document.querySelectorAll('section').forEach((section, index) => {
    if (!section.id) {
      section.id = `section-${index}`;
    }
  });
});



