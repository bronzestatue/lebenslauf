export function loadFocus() {
    const focusItems = [
        {
            title: "KI Masterclass Basic",
            description: "Weiterbildung"
        }
    ];

    const focusItemsContainer = document.querySelector('.focus-items');

    focusItems.forEach(item => {
        const focusItemDiv = document.createElement('div');
        focusItemDiv.classList.add('focus-item');

        const titleElement = document.createElement('h3');
        titleElement.textContent = item.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;

        focusItemDiv.appendChild(titleElement);
        focusItemDiv.appendChild(descriptionElement);

        focusItemsContainer.appendChild(focusItemDiv);
    });
}
