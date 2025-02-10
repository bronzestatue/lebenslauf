const publications = [
    {
        title: "Verantwortungsvoller Umgang mit künstlicher Intelligenz",
        publisher: "GRIN",
        year: "2023",
        url: "https://www.grin.com/document/1382179",
        description: "Diese Arbeit zielt darauf ab, AI-Methoden und deren Regulierung darzustellen..."
    }
    // Add other publications here...
];

function createPublicationElement(publication) {
    const div = document.createElement('div');
    div.className = 'publication-item';
    
    div.innerHTML = `
        <div class="publication-header">
            <div>
                <a href="${publication.url}" class="publication-title">
                    <h3>${publication.title}</h3>
                </a>
                <p class="date">${publication.publisher}, ${publication.year}</p>
            </div>
            <a href="${publication.url}" class="external-link" aria-label="External link to publication">
                <i data-lucide="external-link"></i>
            </a>
        </div>
        <p class="description">${publication.description}</p>
    `;
    
    return div;
}

export function loadPublications() {
    const container = document.querySelector('.publication-items');
    if (container) {
        publications.forEach(pub => {
            container.appendChild(createPublicationElement(pub));
        });
        // Reinitialize icons for newly added elements
        lucide.createIcons();
    }
}