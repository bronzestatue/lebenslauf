import { initializeSidebar } from './sidebar.js';
import { loadExperiences } from './experience.js';
import { loadCertifications } from './certification.js';
import { loadPublications } from './publication.js';
import { loadEducation } from './education.js';
import { initFloatingNav } from './navbar.js'

// Initialize Lucide icons
lucide.createIcons();

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeSidebar();
  lucide.createIcons();
  loadExperiences();
  loadCertifications();
  loadPublications();
  loadEducation();
  initFloatingNav();
});
    


