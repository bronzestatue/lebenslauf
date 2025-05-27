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

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Defensive: check containers exist before loading
    if (document.querySelector(".experience-items")) loadExperiences();
    else console.error("Container .experience-items not found");
    if (document.querySelector(".certification-items")) loadCertifications();
    else console.error("Container .certification-items not found");
    if (document.querySelector(".publication-items")) loadPublications();
    else console.error("Container .publication-items not found");
    if (document.querySelector(".education-items")) loadEducation();
    else console.error("Container .education-items not found");
    if (document.querySelector(".focus-items")) loadFocus();
    else console.error("Container .focus-items not found");
    lucide.createIcons();
    enableResumeDownload("documents/Lebenslauf_Sinowski.pdf");
    console.log("Document loaded and functions initialized");
});