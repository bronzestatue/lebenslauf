function loadFocus() {
    const focusItems = [
        {
            title: "Weiterbildung",
            description: "Weitebildung ist ein wichtiger Bestandteil meiner beruflichen Entwicklung. Ich strebe danach, meine Fähigkeiten kontinuierlich zu verbessern und neue Technologien zu erlernen.",
        }
    ];

    const focusItemsContainer = document.querySelector(".focus-items");

    if (focusItemsContainer) {
        focusItems.forEach(item => {
            const focusItemDiv = document.createElement("div");
            focusItemDiv.classList.add("focus-item");

            const titleElement = document.createElement("h3");
            titleElement.textContent = item.title;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = item.description;

            focusItemDiv.appendChild(titleElement);
            focusItemDiv.appendChild(descriptionElement);

            focusItemsContainer.appendChild(focusItemDiv);
        });
    } else {
        console.error("Focus container not found");
    }
}

export { loadFocus };
