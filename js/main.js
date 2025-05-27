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
    // Get the download button element
    const downloadButton = document.getElementById("downloadResumeButton");

    // Check if the download button exists
    if (downloadButton) {
        // Add a click event listener to the download button
        downloadButton.addEventListener("click", () => {
            // Create a new link element
            const link = document.createElement("a");

            // Set the href attribute to the PDF path
            link.href = pdfPath;

            // Set the download attribute to specify the filename
            link.download = "documents/Lebenslauf_Sinowski.pdf";

            // Append the link to the document
            document.body.appendChild(link);

            // Programmatically click the link to trigger the download
            link.click();

            // Remove the link from the document
            document.body.removeChild(link);
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
  loadExperiences();
  loadCertifications();
  loadPublications();
  loadEducation();
  loadFocus();
  lucide.createIcons();
  enableResumeDownload("documents/Lebenslauf_Sinowski.pdf");
  console.log("Document loaded and functions initialized");
});