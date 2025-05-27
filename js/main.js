import { loadExperiences } from "./experience.js";
import { loadCertifications } from "./certification.js";
import { loadPublications } from "./publication.js";
import { loadEducation } from "./education.js";
import { loadFocus } from "./focus.js";

// Initialize Lucide icons
lucide.createIcons();

// PDF Download functionality
/**
 * @function enableResumeDownload
 * @description Enables the download of a PDF resume file.
 * @param {string} pdfPath - The path to the PDF resume file.
 */
function enableResumeDownload(pdfPath) {
    const downloadButton = document.getElementById("downloadResumeButton");
    if (downloadButton) {
        downloadButton.addEventListener("click", () => {
            // Check if the file exists by trying to fetch it first
            fetch(pdfPath, { method: "HEAD" })
                .then(response => {
                    if (response.ok) {
                        const link = document.createElement("a");
                        link.href = pdfPath;
                        link.download = "Lebenslauf_Sinowski.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    } else {
                        alert("Die PDF-Datei konnte nicht gefunden werden.");
                    }
                })
                .catch(() => {
                    alert("Die PDF-Datei konnte nicht gefunden werden.");
                });
        });
    } else {
        console.error("Download button not found. Please ensure the element with id 'downloadResumeButton' exists in the HTML.");
    }
}

// Add scroll event listener for profile background fade-out
window.addEventListener("scroll", () => {
    const profileBackground = document.querySelector(".profile-background");
    const scrollY = window.scrollY;
    
    if (scrollY > 200) {  // After 200px begins the Fade-Out
        profileBackground.classList.add("scrolled");
    } else {
        profileBackground.classList.remove("scrolled");
    }
});

// Scroll animation trigger
document.addEventListener("scroll", () => {
    document.querySelectorAll(".section").forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add("visible");
        }
    });
});

// Utility: Show loading spinner
function showLoading(container) {
    container.innerHTML = `<div class="spinner"></div>`;
}

// Utility: Show error message
function showError(container, msg = "Fehler beim Laden der Daten.") {
    container.innerHTML = `<p class="error-message">${msg}</p>`;
}

// Generic loader for JSON data
async function loadData(file, containerSelector, renderFn) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    showLoading(container);
    try {
        // Ensure the fetch path is correct for the data folder
        const response = await fetch(`data/${file}`);
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        const data = await response.json();
        container.innerHTML = data.map(renderFn).join('');
    } catch (error) {
        console.error(error);
        showError(container);
    }
}

// Renderers
function renderCertification(cert) {
    return `
        <div class="certification-item data-entry">
            <h3>${cert.title}</h3>
            <p>${cert.issuer} &bull; ${cert.year}</p>
        </div>
    `;
}
function renderExperience(exp) {
    return `
        <div class="experience-item data-entry">
            <h3>${exp.title}</h3>
            <p><strong>${exp.company}</strong> &bull; ${exp.location} &bull; ${exp.startDate} - ${exp.endDate}</p>
            <p>${exp.description}</p>
        </div>
    `;
}
function renderPublication(pub) {
    return `
        <div class="publication-item data-entry">
            <h3>${pub.title}</h3>
            <p>${pub.publisher} &bull; ${pub.year}</p>
            <p>${pub.description || ''}</p>
        </div>
    `;
}

// Calendly fallback
function setupCalendlyFallback() {
    const calendlyContainer = document.querySelector('.calendly-container');
    if (!calendlyContainer) return;
    // Add fallback link below the widget
    const fallback = document.createElement('p');
    fallback.innerHTML = `Falls das Buchungstool nicht lädt, klicken Sie <a href="https://calendly.com/constantinsinowski/telefonat" target="_blank">hier</a> zur Terminbuchung.`;
    calendlyContainer.appendChild(fallback);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Dynamically load data from JSON files in the data folder
    loadData('certifications.json', '.certification-items', renderCertification);
    loadData('experience.json', '.experience-items', renderExperience);
    loadData('publications.json', '.publication-items', renderPublication);

    // Calendly fallback
    setupCalendlyFallback();

    // Defensive: check containers exist before loading
    if (document.querySelector(".education-items")) loadEducation();
    else console.error("Container .education-items not found");
    if (document.querySelector(".focus-items")) loadFocus();
    else console.error("Container .focus-items not found");
    lucide.createIcons();
    enableResumeDownload("documents/Lebenslauf_Sinowski.pdf");
    console.log("Document loaded and functions initialized");
});