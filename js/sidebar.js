// Funktion zur Steuerung der Sidebar
const initializeSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");
    let timeout;

    // Funktion zum Einklappen der Sidebar nach einer bestimmten Zeit
    const collapseSidebar = () => {
        sidebar.classList.add("collapsed");
        mainContent.style.marginLeft = "50px";
        mainContent.style.width = "calc(100% - 50px)";
    };

    // Sidebar nach 5 Sekunden (5000 ms) einklappen
    timeout = setTimeout(collapseSidebar, 5000);

    // Funktion zum Ausklappen der Sidebar beim Hovern
    const expandSidebar = () => {
        sidebar.classList.remove("collapsed");
        mainContent.style.marginLeft = "var(--sidebar-width)";
        mainContent.style.width = "calc(100% - var(--sidebar-width))";
        clearTimeout(timeout);
        timeout = setTimeout(collapseSidebar, 5000); // Erneut einklappen nach 5 Sekunden
    };

    // Event Listener für Hover
    sidebar.addEventListener("mouseenter", expandSidebar);
    sidebar.addEventListener("mouseleave", () => {
        timeout = setTimeout(collapseSidebar, 5000); // Einklappen nach 5 Sekunden
    });

    const sidebarHeader = document.getElementById("sidebar-header");
    /* Insert a profile picture */
    sidebarHeader.insertAdjacentHTML(
        "beforeend",
        '<img src="img/profile.jpg" alt="Profile" class="profile-picture" />'
    );
};

export { initializeSidebar };