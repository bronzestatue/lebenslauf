// Funktion zum Hinzufügen des Scroll-Event-Listeners
const addScrollEventListener = () => {
    const profileContainer = document.querySelector('.profile-picture-container');
  
    // Event Listener für Scrollen
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // Schwellenwert anpassen
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });
  };

  export { addScrollEventListener };