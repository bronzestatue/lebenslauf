// Exported function to load Zertifizierungen content
export function loadZertifizierungen() {
    const container = document.getElementById('zertifizierungen');
    if (container) {
        container.innerHTML = `
            <ul>
                <li>Certified JavaScript Developer</li>
                <li>Certified Web Accessibility Specialist</li>
                <li>Certified Cloud Practitioner</li>
            </ul>
        `;
    } else {
        console.error('Zertifizierungen container not found');
    }
}
