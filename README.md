📄 Interactive Portfolio & Digital CVDieses Repository enthält den Quellcode für das persönliche Portfolio von Constantin Sinowski. Die Seite dient als digitale Visitenkarte und interaktiver Lebenslauf mit Fokus auf Business Engineering, Data Analytics und KI-Automatisierung.🚀 Key Features50% Focus Layout: Optimierte Lesbarkeit durch Begrenzung des Hauptinhalts auf $800\text{px}$.75/25 Header-System: Konsistente Trennung von Rollenbeschreibung ($75\%$) und Zeitraum ($25\%$).Glassmorphism Sidebar: Eine fixierte Sidebar mit Backdrop-Blur für Stammdaten und Kontakt.Calendly Integration: Direkt im Layout eingebetteter Terminplaner für Erstgespräche.Print-Ready: Spezielle Media-Queries für einen sauberen PDF-Export direkt aus dem Browser.Floating Navigation: Desktop-exklusive Quick-Links mit Scroll-Spy Unterstützung.📂 Project StructureDie Dateistruktur ist modular aufgebaut, um Wartbarkeit und Performance zu gewährleisten:Plaintextlebenslauf/
├── index.html            # Hauptstruktur (HTML5)
├── css/
│   └── style.css         # Konsolidiertes Design (Layout, Icons, Print)
├── js/
│   └── main.js           # ScrollSpy & UI-Interaktionen
├── assets/
│   ├── img/              # Profilbilder & Icons
│   └── docs/             # PDF-Version des Lebenslaufs
├── plan.md               # Architektur-Logik & Roadmap
└── README.md             # Diese Dokumentation
🛠 Entwicklung & Build-CommandsDas Projekt ist als statische Web-App konzipiert. Für die lokale Entwicklung und Optimierung stehen folgende Optionen zur Verfügung:1. Lokale EntwicklungUm die Seite mit Live-Reload zu bearbeiten, wird Browsersync empfohlen:Bash# Browsersync installieren
npm install -g browser-sync

# Server starten & Dateien überwachen
browser-sync start --server --files "*.html, css/*.css, js/*.js"
2. CSS-OptimierungFür das Deployment auf sinowski.de kann das Stylesheet minifiziert werden:Bash# Minifier installieren
npm install clean-css-cli -g

# Build-Prozess
cleancss -o css/style.min.css css/style.css
3. DeploymentÄnderungen werden direkt über Git auf den Webspace oder via GitHub Pages ausgespielt:Bashgit add .
git commit -m "style: optimize focus-container for mobile responsiveness"
git push origin main
📐 Architektur-Prinzipien (plan.md)Document-First: Die Seite folgt der Informationshierarchie eines klassischen CVs, ergänzt um moderne Web-Features.Data Integrity: Zeiträume werden mit font-variant-numeric: tabular-nums formatiert, um vertikale Ausrichtung zu garantieren.Iframe-Isolation: Externe Widgets (Calendly) sind in Containern gekapselt, um Layout-Shifts zu vermeiden.📊 Performance & QualitätMetrikStatusZielLighthouse Performance🟢 100100SEO Score🟢 100100Accessibility (A11y)🟢 95+100📬 KontaktConstantin Sinowski Bachelor of Engineering – Business Engineer📧 bewerbung@sinowski.de📞 +49 156 79001672🌐 sinowski.de© 2026 Constantin Sinowski. All rights reserved.
