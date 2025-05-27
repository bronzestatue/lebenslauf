import * as lucide from 'lucide';

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
        // Dynamically import modules
        const experienceModule = await import('./experience.js');
        const certificationModule = await import('./certification.js');
        const publicationModule = await import('./publication.js');
        const educationModule = await import('./education.js');
        const focusModule = await import('./focus.js');

        // Check containers and load content
        const experienceContainer = document.querySelector(".experience-items");
        if (experienceContainer) {
            await experienceModule.loadExperiences();
            console.log("Experiences loaded");
        }

        const certificationContainer = document.querySelector(".certification-items");
        if (certificationContainer) {
            await certificationModule.loadCertifications();
            console.log("Certifications loaded");
        }

        const publicationContainer = document.querySelector(".publication-items");
        if (publicationContainer) {
            await publicationModule.loadPublications();
            console.log("Publications loaded");
        }

        const educationContainer = document.querySelector(".education-items");
        if (educationContainer) {
            await educationModule.loadEducation();
            console.log("Education loaded");
        }

        const focusContainer = document.querySelector(".focus-items");
        if (focusContainer) {
            await focusModule.loadFocus();
            console.log("Focus loaded");
        }

        // Initialize icons after content is loaded
        lucide.createIcons();
        enableResumeDownload("documents/Lebenslauf_Sinowski.pdf");
        console.log("All sections loaded successfully");
    } catch (error) {
        console.error("Error loading content:", error);
    }
});