// Import components
import { initializeTransitions } from './components/transitions.js';
import { initializeSidebar } from './components/sidebar.js';
import { initializeCalendly } from './components/appointment.js';
import { initFloatingNav } from './components/navigation.js';
import { loadItems } from './components/loadItems.js';

// Import data
import { experiences } from './data/experiences.js';
import { certifications } from './data/certifications.js';
import { publications } from './data/publications.js';
import { education } from './data/education.js';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    window.lucide.createIcons();
    
    // Initialize transitions first
    initializeTransitions();
    
    // Initialize other components
    initializeSidebar();
    initializeCalendly();
    initFloatingNav();
    
    // Load content
    loadItems(experiences, '.experience-items', 'experience');
    loadItems(certifications, '.certification-items', 'certification');
    loadItems(publications, '.publication-items', 'publication');
    loadItems(education, '.education-items', 'education');
});