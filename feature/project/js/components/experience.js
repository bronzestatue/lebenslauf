const experiences = [
    {
        title: "IT Consultant",
        company: "HAVI Solutions GmbH & Co. KG",
        period: "06.2024 - 11.2024",
        description: "Im Rahmen meiner Tätigkeit habe ich interne Tools zur Datenmigration in XML angepasst..."
    }
    // Add other experiences here...
];

function createExperienceElement(experience) {
    const div = document.createElement('div');
    div.className = 'experience-item';
    
    div.innerHTML = `
        <div class="experience-header">
            <div>
                <h3>${experience.title}</h3>
                <p class="company">${experience.company}</p>
            </div>
            <span class="date">${experience.period}</span>
        </div>
        <p class="description">${experience.description}</p>
    `;
    
    return div;
}

export function loadExperiences() {
    const container = document.querySelector('.experience-items');
    if (container) {
        experiences.forEach(exp => {
            container.appendChild(createExperienceElement(exp));
        });
    }
}