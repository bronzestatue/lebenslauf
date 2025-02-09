// Funktion zur Steuerung der Sidebar
const initializeSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    let timeout;
  
    // Funktion zum Einklappen der Sidebar nach einer bestimmten Zeit
    const collapseSidebar = () => {
      sidebar.classList.add("collapsed");
    };
  
    // Sidebar nach 5 Sekunden (5000 ms) einklappen
    timeout = setTimeout(collapseSidebar, 5000);
  
    // Funktion zum Ausklappen der Sidebar beim Hovern
    const expandSidebar = () => {
      sidebar.classList.remove("collapsed");
      clearTimeout(timeout);
      timeout = setTimeout(collapseSidebar, 5000); // Erneut einklappen nach 5 Sekunden
    };
  
    // Event Listener für Hover
    sidebar.addEventListener("mouseenter", expandSidebar);
  };

  export { initializeSidebar };