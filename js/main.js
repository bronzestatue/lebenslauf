import { createIcons } from "lucide";

// Initialize Lucide icons
createIcons();

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
        console.log("Importing modules...");
        const experienceModule = await import("./experience.js");
        console.log("Experience module imported");
        const certificationModule = await import("./certification.js");
        console.log("Certification module imported");
        const publicationModule = await import("./publication.js");
        console.log("Publication module imported");
        const educationModule = await import("./education.js");
        console.log("Education module imported");
        const focusModule = await import("./focus.js");
        console.log("Focus module imported");

        // Check containers and load content
        const containers = {
            experiences: document.querySelector(".experience-items"),
            certifications: document.querySelector(".certification-items"),
            publications: document.querySelector(".publication-items"),
            education: document.querySelector(".education-items"),
            focus: document.querySelector(".focus-items")
        };

        // Log container status
        Object.entries(containers).forEach(([name, container]) => {
            console.log(`${name} container ${container ? "found" : "not found"}`);
        });

        if (containers.experiences) {
            console.log("Loading experiences...");
            await experienceModule.loadExperiences();
            console.log("Experiences loaded");
        }

        if (containers.certifications) {
            console.log("Loading certifications...");
            await certificationModule.loadCertifications();
            console.log("Certifications loaded");
        }

        if (containers.publications) {
            console.log("Loading publications...");
            await publicationModule.loadPublications();
            console.log("Publications loaded");
        }

        if (containers.education) {
            console.log("Loading education...");
            await educationModule.loadEducation();
            console.log("Education loaded");
        }

        if (containers.focus) {
            console.log("Loading focus...");
            await focusModule.loadFocus();
            console.log("Focus loaded");
        }

        // Reinitialize icons after insertion
        createIcons();
        enableResumeDownload("documents/Lebenslauf_Sinowski.pdf");
        console.log("All sections loaded successfully");
    } catch (error) {
        console.error("Error loading content:", error);
    }
});