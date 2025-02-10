export function createElement(type, className, content) {
    const element = document.createElement(type);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    return element;
}

export function createItemElement(item, type) {
    const div = createElement('div', `${type}-item item`);
    
    const header = createElement('div', `${type}-header item-header`);
    const titleContainer = createElement('div');
    
    const title = createElement('a', `${type}-title item-title`);
    title.href = item.url;
    title.innerHTML = `<h3>${item.title}</h3>`;
    
    const details = createElement('p', 'date');
    details.textContent = `${item.issuer || item.publisher || item.company || item.institution}, ${item.year || item.period || item.graduation}`;
    
    const externalLink = createElement('a', 'external-link');
    externalLink.href = item.url;
    externalLink.setAttribute('aria-label', `External link to ${type}`);
    externalLink.innerHTML = '<i data-lucide="external-link"></i>';
    
    titleContainer.appendChild(title);
    titleContainer.appendChild(details);
    header.appendChild(titleContainer);
    header.appendChild(externalLink);
    div.appendChild(header);
    
    if (item.description) {
        const description = createElement('p', 'description');
        description.textContent = item.description;
        div.appendChild(description);
    }
    
    return div;
}