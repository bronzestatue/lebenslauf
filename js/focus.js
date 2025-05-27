function loadFocus() {
    console.log("loadFocus function called");
    const focusItems = [
        {
            title: "Weiterbildung",
            description: "Aktuelle und zukünftige Weiterbildungen in den Bereichen Data Science, Data Engineering und Cloud Computing.", 
        }
    ];

    const focusItemsContainer = document.querySelector(".focus-items");

    if (focusItemsContainer) {
        console.log("Focus container found");
        console.log("Focus data:", focusItems); // Log the data
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
            console.log("Appended focus item:", item.title);
        });
    } else {
        console.error("Focus container not found");
    }
}

export { loadFocus };
