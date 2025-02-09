import { initializeSidebar } from './sidebar.js';
import { loadExperiences } from './experience.js';
import { loadCertifications } from './certification.js';
import { loadPublications } from './publication.js';
import { loadEducation } from './education.js';
import { initFloatingNav } from './navbar.js';

document.addEventListener("DOMContentLoaded", () => {
  initializeSidebar();
  loadExperiences();
  loadCertifications();
  loadPublications();
  loadEducation();
  initFloatingNav();

  // Ensure sections have unique IDs
  document.querySelectorAll('section').forEach((section, index) => {
    if (!section.id) {
      section.id = `section-${index}`;
    }
  });
});



