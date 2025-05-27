export function loadErfahrung() {
    const container = document.getElementById('erfahrung');
    if (container) {
        container.innerHTML = `
            <ul>
                <li>Frontend Developer at ExampleCorp (2020-2022)</li>
                <li>Backend Developer at Backendify (2018-2020)</li>
            </ul>
        `;
    } else {
        console.error('Erfahrung container not found');
    }
}
