// Education data
const education = [
    {
        title: "Wirtschaftsingenieurswesen Digital Engineering & Management",
        degree: "Bachelor of Engineering",
        institution: "Hochschule Fresenius",
        graduation: "2024",
        url: "https://www.fernstudium-fresenius.de/bachelor/wirtschaftsingenieurwesen-digital-engineering/"
    }
];

// Function to create education elements
function createEducationElement(edu) {
    const div = document.createElement("div");
    div.className = "education-item";
    
    div.innerHTML = `
      <div class="education-header">
        <div>
          <a href="${edu.url}" class="education-title">
            <h3>${edu.degree}</h3>
            <p>${edu.title}</p>
          </a>
          <p class="date">${edu.institution}, ${edu.graduation}</p>
        </div>
        <a href="${edu.url}" class="external-link" aria-label="External link to programme">
          <i data-lucide="external-link"></i>
        </a>
      </div>
    `;
    
    return div;
  }

// Load education
function loadEducation() {
    const container = document.querySelector(".education-items");
    education.forEach(edu => {
      container.appendChild(createEducationElement(edu));
    });
    // Reinitialize icons for newly added elements
    lucide.createIcons();
  }

export { loadEducation };