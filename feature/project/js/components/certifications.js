import certificationsData from '../data/certifications.json';

export const certifications = certificationsData.map(certification => ({
    title: certification.title,
    issuer: certification.issuer,
    year: certification.year,
    url: certification.url
}));

function createCertificationElement(certification) {
    const div = document.createElement('div');
    div.className = 'certification-item';
    
    div.innerHTML = `
        <div class="certification-header">
            <div>
                <a href="${certification.url}" class="certification-title">
                    <h3>${certification.title}</h3>
                </a>
                <p class="date">${certification.issuer}, ${certification.year}</p>
            </div>
            <a href="${certification.url}" class="external-link" aria-label="External link to certification">
                <i data-lucide="external-link"></i>
            </a>
        </div>
    `;
    
    return div;
}

export function loadCertifications() {
    const container = document.querySelector('.certification-items');
    if (container) {
        certifications.forEach(cert => {
            container.appendChild(createCertificationElement(cert));
        });
    }
}