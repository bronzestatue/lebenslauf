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
        downloadButton.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default action
            // Check if the file exists by trying to fetch it first
            fetch(pdfPath, { method: "HEAD" })
                .then(response => {
                    if (response.ok) {
                        const link = document.createElement("a");
                        link.href = pdfPath;
                        link.download = "Lebenslauf_Sinowski.pdf";
                        link.style.display = "none"; // Hide the link
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
window.addEventListener("scroll", () => {
    document.querySelectorAll(".section").forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add("visible");
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOMContentLoaded event fired");

    try {
        // Check if containers exist before loading
        const containers = {
            experiences: document.querySelector(".experience-items"),
            certifications: document.querySelector(".certification-items"),
            publications: document.querySelector(".publication-items"),
            education: document.querySelector(".education-items"),
            focus: document.querySelector(".focus-items")
        };

        // Log container status
        Object.entries(containers).forEach(([name, container]) => {
            console.log(`${name} container ${container ? 'found' : 'not found'}`);
        });

        if (containers.experiences) await loadExperiences();
        if (containers.certifications) await loadCertifications();
        if (containers.publications) await loadPublications();
        if (containers.education) await loadEducation();
        if (containers.focus) await loadFocus();

        lucide.createIcons();
        enableResumeDownload("documents/Lebenslauf_Sinowski.pdf");
        console.log("All sections loaded successfully");
    } catch (error) {
        console.error("Error loading content:", error);
    }
});