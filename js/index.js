import { loadZertifizierungen } from './modules/zertifizierungen.js';
import { loadErfahrung } from './modules/erfahrung.js';
import { loadVeroeffentlichungen } from './modules/veroeffentlichungen.js';
import { loadStudium } from './modules/studium.js';

// Ensure all modules load after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadZertifizierungen();
    loadErfahrung();
    loadVeroeffentlichungen();
    loadStudium();
});
