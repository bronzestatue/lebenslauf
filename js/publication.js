// Publications data
const publications = [
    {
        title: "Verantwortungsvoller Umgang mit künstlicher Intelligenz",
        publisher: "GRIN",
        year: "2023",
        url: "https://www.grin.com/document/1382179",
        description: "Diese Arbeit zielt darauf ab, AI-Methoden und deren Regulierung darzustellen, bestehende Rahmenbedingungen und Regulierungen von AI zu beleuchten und eine Diskussionsgrundlage über ihren Nutzen, Risiken und Gefahren im Sinne der Menschenrechte zu schaffen. Sie betont die Wichtigkeit einer angemessenen Überwachung von AI, um Missbrauch einzudämmen, und fordert die Sensibilisierung der Öffentlichkeit für die Potenziale und Risiken der AI, um Menschen vor Betrug und Manipulation zu schützen."
    },
    {
        title: "Integration eines Qualitätsmanagements in der Softwareentwicklung",
        publisher: "Amazon",
        year: "2023",
        url: "https://amzn.eu/d/00F2U5M",
        description: "Das Qualitätsmanagement in der Softwareentwicklung bezieht sich auf den Prozess, die Methoden und die Tools, die verwendet werden, um die Qualität von Softwareprodukten sicherzustellen. Dies beinhaltet die Überwachung und Überprüfung der Entwicklung von Anfang bis Ende, um sicherzustellen, dass die Software den Anforderungen des Kunden entspricht und Fehler minimiert werden. Ein wichtiger Teil des Qualitätsmanagements in der Softwareentwicklung ist die Durchführung von Tests."
    },
    {
        title: "Kanban-System zur Optimierung von Produktions- und Lieferketten",
        publisher: "Amazon",
        year: "2023",
        url: "https://amzn.eu/d/7YCaeFZ",
        description: "In dieser Studienarbeit werden die Möglichkeiten eines Kanban-Systems in Kombination mit ERP-Software erforscht, um Produktions- und Lieferketten nachhaltiger und effizienter zu gestalten. Dabei werden die Funktionsweise und Voraussetzungen für die automatisierte Überwachung von Materialflüssen erläutert, sowie Systeme zur automatischen Identifikation im Qualitätsmanagement vorgestellt. Die Vor- und Nachteile eines digitalisierten Kanban-Systems mit automatischer Identifikation von Komponenten werden im Kontext eines Unternehmens aufgezeigt. Die Vorgehensweise basiert auf wissenschaftlicher Literatur zu Produktions- und Logistikmanagement sowie PMT-Software zur Kapazitätsauslastung. Ziel ist es, Investitionspotenziale für schnellere Lieferungen und reduzierten Ressourcenbedarf aufzuzeigen."
    }
];

function createPublicationElement(pub) {
  const div = document.createElement("div");
  div.className = "publication-item section";
  
  div.innerHTML = `
    <div class="publication-header">
      <div>
        <a href="${pub.url}" class="publication-title">
          <h3>${pub.title}</h3>
        </a>
        <p class="date">${pub.publisher}, ${pub.year}</p>
      </div>
      <a href="${pub.url}" class="external-link" aria-label="External link to publication">
        <i data-lucide="external-link"></i>
      </a>
    </div>
    <p class="description">${pub.description}</p>
  `;
  
  return div;
}

// Load publications
async function loadPublications() {
    console.log("loadPublications function called");
    const container = document.querySelector(".publication-items");
    if (container) {
        console.log("Publication container found");
        console.log("Publications data:", publications); // Log the data
        publications.forEach(pub => {
            const element = createPublicationElement(pub);
            container.appendChild(element);
             console.log("Appended publication:", pub.title);
        });
    } else {
        console.error("Publication container not found");
    }
}

export { loadPublications };