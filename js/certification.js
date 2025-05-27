// Certifications data
const certifications = [
    {
        title: "KI Spezialist",
        issuer: "Match4IT",
        year: "2025",
        url: "https://match4it.com"
    },
    {
        title: "Analyze Data with SQL",
        issuer: "Codecademy",
        year: "2024",
        url: "https://www.codecademy.com/profiles/_cosinus/certificates/5cafb2d937090210d7df3652"
    },
    {
        title: "Bash Scripting",
        issuer: "Codecademy",
        year: "2024",
        url: "https://www.codecademy.com/profiles/_cosinus/certificates/37c55263a9f1b1f7603f7551c293ecbd"
    },
    {
        title: "BI Dashboards with Power BI",
        issuer: "Codecademy",
        year: "2023",
        url: "https://www.codecademy.com/profiles/constantinsinowski/certificates/1cb76ac48943853ca32c394afeb491c9"
    },
    {
        title: "KNIME L1",
        issuer: "KNIME",
        year: "2023",
        url: "https://www.credly.com/badges/891bf1ee-0b27-4b8d-945a-1a1587e1d36b/public_url"
    }
];

// Function to create certification elements
function createCertificationElement(cert) {
    const div = document.createElement('div');
    div.className = 'certification-item';
    div.innerHTML = `
      <div class="group relative flex justify-between items-start">
        <div>
          <a href="${cert.url}" class="publication-title">
            <h3>${cert.title}</h3>
          </a>
          <p class="date">${cert.issuer}, ${cert.year}</p>
        </div>
        <a href="${cert.url}" class="external-link" aria-label="External link to certification">
          <i data-lucide="external-link"></i>
        </a>
      </div>
    `;
    return div;
}

// Load certifications
function loadCertifications() {
    const container = document.querySelector('.certification-items');
    certifications.forEach(cert => {
        container.appendChild(createCertificationElement(cert));
    });
    // Reinitialize icons for newly added elements
    lucide.createIcons();
}

export { loadCertifications };