export function loadContact() {
    const contactInfo = {
        email: "bewerbung@sinowski.de",
        phone: "+49 156 79001672",
        location: "Berlin, Deutschland"
    };

    const contactContainer = document.getElementById('contact');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-details');

    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${contactInfo.email}`;
    emailLink.classList.add('contact-item');
    emailLink.title = "E-Mail senden";
    emailLink.innerHTML = `<i data-lucide="mail"></i><span>${contactInfo.email}</span>`;

    const phoneLink = document.createElement('a');
    phoneLink.href = `#appointment`;
    phoneLink.classList.add('contact-item');
    phoneLink.title = "Telefonnummer anzeigen";
    phoneLink.innerHTML = `<i data-lucide="phone"></i><span>${contactInfo.phone}</span>`;

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('contact-item');
    locationDiv.innerHTML = `<i data-lucide="map-pin"></i><span>${contactInfo.location}</span>`;

    contactDiv.appendChild(emailLink);
    contactDiv.appendChild(phoneLink);
    contactDiv.appendChild(locationDiv);

    contactContainer.appendChild(contactDiv);

    lucide.createIcons();
}
