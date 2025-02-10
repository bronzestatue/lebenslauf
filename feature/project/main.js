// Import components
import { initializeSidebar } from './js/components/sidebar.js';
import { initializeFocus } from './js/components/focus.js';
import { initializeCalendly } from './js/components/appointment.js';
import { loadExperiences } from './js/components/experience.js';
import { loadCertifications } from './js/components/certifications.js';
import { loadPublications } from './js/components/publications.js';
import { loadEducation } from './js/components/education.js';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    window.lucide.createIcons();
    
    // Initialize components
    initializeSidebar();
    initializeFocus();
    initializeCalendly();
    loadExperiences();
    loadCertifications();
    loadPublications();
    loadEducation();
});