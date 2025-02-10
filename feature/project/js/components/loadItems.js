import { createItemElement } from '../utils/createElement.js';

export function loadItems(items, containerSelector, type) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    items.forEach(item => {
        container.appendChild(createItemElement(item, type));
    });
    
    // Reinitialize icons for newly added elements
    lucide.createIcons();
}