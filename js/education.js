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
    div.className = "education-item section";
    
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
async function loadEducation() {
    console.log("loadEducation function called");
    const container = document.querySelector("#studium");
    if (container) {
        console.log("Education container found");
        console.log("Education data:", education); // Log the data
        education.forEach(edu => {
            const element = createEducationElement(edu);
            container.appendChild(element);
            console.log("Appended education:", edu.title);
        });
    } else {
        console.error("Education container not found");
    }
}

export { loadEducation };