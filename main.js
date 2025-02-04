// Initialize Lucide icons
lucide.createIcons();

// Work Experience data
const experiences = [
    {
        title: "IT Consultant",
        company: "HAVI Solutions GmbH & Co. KG",
        period: "06.2024 - 11.2024",
        description: "Im Rahmen meiner Tätigkeit habe ich interne Tools zur Datenmigration in XML angepasst. Diese Anpassungen umfassten die Optimierung von Prozessen zur sicheren und effizienten Übertragung großer Datenmengen zwischen verschiedenen Systemen. Darüber hinaus habe ich regelmäßig Datenanalysen durchgeführt, wobei ich SQL und Perl-Skripte verwendet habe, um komplexe Datenmuster zu identifizieren und relevante Erkenntnisse zu gewinnen. Diese Analysen ermöglichten es, fundierte Entscheidungen zu treffen und Geschäftsstrategien entsprechend anzupassen. Ein weiterer wichtiger Aspekt meiner Arbeit war die Entwicklung von Skripten mit Bash und Power Shell. Diese Skripte wurden eingesetzt, um wiederkehrende Aufgaben zu automatisieren und die Effizienz der IT-Infrastruktur zu verbessern. Durch den Einsatz dieser Automatisierungstechniken konnte ich die Betriebskosten senken und die Zuverlässigkeit der Systeme erhöhen. Zusätzlich habe ich während meiner Tätigkeit kontinuierlich an meiner eigenen Weiterbildung gearbeitet, um stets auf dem neuesten Stand der Technik zu bleiben und innovative Lösungen für aktuelle Herausforderungen zu entwickeln. Meine Fähigkeit, mich in neue Themen einzuarbeiten und kontinuierlich weiterzubilden, hat es mir ermöglicht, meine Expertise in den Bereichen Datenbanken, Datenanalyse und Softwareentwicklung stetig zu erweitern."
    },
    {
        title: "Business Intelligence & Data Analytics",
        company: "Hubert Burda Media Holding",
        period: "04.2023 - 02.2024",
        description: "Eine meiner Hauptaufgaben war die Erstellung und Verwaltung einer umfassenden Zeitarbeitstabelle mit Microsoft Excel. Hierbei habe ich Tabellenblätter eingerichtet, die präzise Daten zu Arbeitszeiten der Mitarbeiter enthielten, darunter Spalten für Datum, Mitarbeitername, Startzeit, Endzeit, Pausenzeit, Gesamtarbeitszeit und Überstunden. Ich nutzte Formeln zur Berechnung der Gesamtarbeitszeit und Überstunden, was eine genaue Dokumentation und Auswertung ermöglichte. Regelmäßig überprüfte und aktualisierte ich die Zeitarbeitstabellen, um sicherzustellen, dass die Daten korrekt und aktuell waren. Eine weitere bedeutende Aufgabe bestand in der Analyse finanzieller Daten mit KNIME. Ich importierte finanzielle Datensätze in KNIME, um detaillierte Analysen und Modellierungen durchzuführen. Dabei bereinigte und transformierte ich die Daten zur Vorbereitung auf die Analyse, einschließlich der Verwendung von KNIME-Knoten wie 'Row Filter' und 'String Manipulation'. Durch die Aggregation und Analyse der Daten mittels 'GroupBy'-Knoten konnte ich aussagekräftige Berichte über finanzielle Kennzahlen erstellen. Zudem erstellte ich Visualisierungen und Diagramme, um die Ergebnisse der Analysen anschaulich darzustellen und Entscheidungsträgern zugänglich zu machen. Zudem beinhaltete meine Tätigkeit die Recherche und Bewertung verschiedener Softwarelösungen, die lokal ausgeführt werden können, leicht zu erlernen und zu pflegen sind, jedoch mehr Leistung und Funktionen bieten als Microsoft Excel. Dabei habe ich zahlreiche Softwareoptionen analysiert, um die bestmöglichen Werkzeuge für spezifische Anwendungsfälle zu identifizieren. Zu den bewerteten Lösungen gehörten u.a. Datenbankmanagementsysteme, fortschrittliche Datenanalysetools und benutzerfreundliche Software für die Automatisierung von Geschäftsprozessen. Diese Recherche hat es mir ermöglicht, passende Technologien zu implementieren, die die Effizienz und Produktivität der Geschäftsvorgänge erheblich steigerten."
    },
    {
        title: "Datenerfasser",
        company: "TIER Mobility",
        period: "10.2021 - 10.2022",
        description: "Während meiner Zeit als Datenerfasser bei TIER Mobility war ich hauptsächlich für die Digitalisierung und Verwaltung von Dokumenten sowie für die Erfassung und Analyse von Daten verantwortlich. Diese Aufgaben umfassten mehrere wichtige Schritte und Prozesse, die zur Effizienzsteigerung und Kostensenkung beitrugen. Eine zentrale Aufgabe war die Digitalisierung von automatisch erstellten Dokumenten, die in Papierform postalisch eintrafen. Diese Dokumente wurden eingescannt und systematisch in Google Drive archiviert. Dadurch konnte ich sicherstellen, dass alle wichtigen Unterlagen digital zugänglich und leicht auffindbar waren. Die Digitalisierung ermöglichte eine schnellere Verarbeitung und reduzierte die Notwendigkeit physischer Lagerung. Ein weiterer wichtiger Teil meiner Tätigkeit war die Erfassung und Analyse von Informationen in Google Sheets. Hierbei nutzte ich verschiedene Formeln und Datenvalidierungen, um die Genauigkeit und Effizienz der Datenverarbeitung zu erhöhen. Durch die Implementierung dieser Methoden konnte ich Fehler reduzieren und den Prozess der Dateneingabe und -auswertung erheblich verbessern. Diese Optimierungen führten zu signifikanten Kosteneinsparungen und erhöhten die Produktivität des Teams. Zusätzlich zu meinen regulären Aufgaben habe ich zwei wissenschaftliche Arbeiten in Kooperation mit TIER Mobility verfasst. Die erste Arbeit befasste sich mit dem Thema Technischer Vertrieb und untersuchte, wie technische Verkaufsstrategien optimiert werden können. Die zweite Arbeit beschäftigte sich mit Business Intelligence & Data Science und analysierte, wie datenbasierte Entscheidungen die Geschäftsprozesse verbessern können. Beide Arbeiten trugen dazu bei, wertvolle Erkenntnisse für das Unternehmen zu gewinnen und die strategische Ausrichtung zu unterstützen."
    },
    {
        title: "Datenanalyst",
        company: "Sasserath Munzinger Plus",
        period: "05.2022 - 06.2022",
        description: "Im Rahmen meiner Tätigkeit als Datenanalyst habe ich ein umfangreiches Projekt durchgeführt, das die Auslese und Analyse von Umfragedaten zur Meinung über europäische Fußballvereine umfasste. Diese Arbeit bot mir die Möglichkeit, meine Fähigkeiten in der Datenverarbeitung, Analyse und Präsentation zu vertiefen und zu erweitern. Das Projekt begann mit der Auslese von Daten aus einer umfangreichen Umfrage, an der 1000 Personen teilnahmen. Die Umfrage zielte darauf ab, die Meinungen der Befragten zu verschiedenen Aspekten europäischer Fußballvereine zu erfassen, darunter Innovation, Nachhaltigkeit, soziale Verantwortung und wirtschaftliche Kompetenz. Die Daten wurden mit der Software SPSS (Statistical Package for the Social Sciences) extrahiert. SPSS ermöglichte es mir, die rohen Umfragedaten zu bereinigen, fehlende Werte zu identifizieren und notwendige Transformationen vorzunehmen, um die Daten für die Analyse in Excel vorzubereiten. Nachdem die Daten aus SPSS extrahiert und aufbereitet waren, wurden sie in Excel importiert, um eine detaillierte Analyse durchzuführen. In Excel nutzte ich verschiedene Analysetechniken, darunter Pivot-Tabellen und Diagramme, um die Meinungen der Befragten zu den verschiedenen Aspekten der Fußballvereine zu visualisieren. Besondere Aufmerksamkeit galt dabei der Auswahl geeigneter Formatierungen für Diagramme, um die Ergebnisse klar und aussagekräftig darzustellen. Ein entscheidender Teil des Projekts war die Erstellung einer professionellen PowerPoint-Präsentation, in der die Ergebnisse der Analyse anschaulich dargestellt wurden. Jedes Diagramm wurde sorgfältig formatiert und mit den entsprechenden Logos der Fußballvereine versehen, um eine visuell ansprechende und leicht verständliche Präsentation zu gewährleisten. Die Präsentation umfasste nicht nur die grafischen Darstellungen der Ergebnisse, sondern auch erklärende Texte, die die wichtigsten Erkenntnisse und deren Bedeutung erläuterten."
    },
    {
        title: "Junior Software Developer & IT-Support",
        company: "HAVI Solutions GmbH & Co. KG",
        period: "02.2019 - 08.2019",
        description: "Ein wesentlicher Teil meiner Arbeit war die Datenbankmigration und -analyse von Archiven mithilfe von Bash, Perl und Java. Ich entwickelte Skripte zur Automatisierung von Datenmigrationen, um den Transfer großer Datenmengen zwischen verschiedenen Systemen effizient und fehlerfrei zu gestalten. Außerdem analysierte ich die migrierten Daten, um sicherzustellen, dass sie korrekt und vollständig übertragen wurden. Ich war an der Entwicklung eines Programms in Java beteiligt, das nach den Prinzipien von Scrum und unter Verwendung von Git als Versionskontrollsystem entwickelt wurde. In diesem Projekt arbeitete ich eng mit dem Entwicklungsteam zusammen, um Anforderungen zu spezifizieren, Features zu implementieren und regelmäßig Fortschritte zu präsentieren. Die Arbeit in einem agilen Umfeld ermöglichte es mir, flexibel auf Änderungen zu reagieren und kontinuierlich Verbesserungen einzubringen. Zusätzlich erstellte ich Konzepte im Projektmanagement für interne Dokumente. Eine zentrale Aufgabe war die Entwicklung eines Verfahrens, das es ermöglichte, Datenabgleiche in mehreren Microsoft Word-Dokumenten durchzuführen. Hierbei wurden Platzhalter für Textfelder mit den Namen der Projektverantwortlichen durch eine zentrale Microsoft Excel-Tabelle gefüllt. Dieses System verbesserte die Konsistenz und Aktualität der Dokumentation und vereinfachte die Verwaltung von Projektdokumenten erheblich. Ein bedeutender Teil meiner Tätigkeit umfasste die Recherche und Dokumentation zu modernen Technologien im Bereich Cloud Computing und Containerisierung. Ich untersuchte Cloud-Dienste wie AWS und d.velop sowie Container-Technologien wie Docker und Kubernetes. Meine Recherche konzentrierte sich darauf, wie eine Virtual Private Cloud (VPC) mit VPN, SSL, Firewall und Lambda-Funktionen eingerichtet und verwaltet werden kann. Die Ergebnisse meiner Recherche wurden in detaillierten Dokumentationen festgehalten, die als Leitfaden für zukünftige Implementierungen dienten."
    },
    {
        title: "EDV-Programmierer",
        company: "Motion Fashion Network Europe GmbH",
        period: "03.2018 - 06.2018",
        description: "Ein zentraler Teil meiner Arbeit war der Export von Daten aus dem systeminternen proMO-System in das SAP XML-Format. Dieser Prozess umfasste mehrere Schritte, darunter die Extraktion relevanter Daten aus proMO, die Transformation dieser Daten in das XML-Format und die anschließende Integration in das SAP-System. Durch diese Arbeit konnte ich sicherstellen, dass die Daten nahtlos zwischen den Systemen übertragen wurden, was die Effizienz der Datenverarbeitung und -analyse erheblich steigerte. Ein weiteres bedeutendes Projekt war die Integration von Google Maps in die Präsentationsseite der Firma.Ziel war es, eine interaktive Karte mit Standortkennungen und Marktübersichten zu erstellen, die den Nutzern eine einfache und visuell ansprechende Möglichkeit bot, Informationen über die verschiedenen Standorte und Märkte des Unternehmens zu erhalten.Ich war für die Implementierung der Google Maps API verantwortlich, die es ermöglichte, Standorte dynamisch zu kennzeichnen und zusätzliche Informationen anzuzeigen.Diese Integration erleichterte den Nutzern den Zugriff auf wichtige Standortdaten und verbesserte die Benutzerfreundlichkeit der Präsentationsseite erheblich. Im Bereich des Produktinformationsmanagements(PIM) war ich für die Verwaltung und Optimierung der Produktdaten verantwortlich.Dies umfasste die Erfassung, Speicherung und Pflege von Produktinformationen, um sicherzustellen, dass alle Daten aktuell und genau waren.Ich entwickelte und implementierte Prozesse zur Konsolidierung und Standardisierung der Produktinformationen, die es dem Unternehmen ermöglichten, konsistente und verlässliche Daten für Marketing, Vertrieb und Kundensupport bereitzustellen.Durch die Einführung automatisierter Workflows und Validierungsregeln konnte ich die Effizienz des Produktinformationsmanagements weiter verbessern und die Fehlerquote bei der Datenerfassung reduzieren."
    }
];

// Certifications data
const certifications = [
    {
        title: "Analyze Data with SQL",
        issuer: "Codecademy",
        year: "2024",
        url: "https://www.codecademy.com/profiles/_cosinus/certificates/5cafb2d937090210d7df3652"
    },
    {
        title: "Bash Scripting",
        issuer: "Codecademy",
        year: "2024",
        url: "https://www.codecademy.com/profiles/_cosinus/certificates/37c55263a9f1b1f7603f7551c293ecbd"
    },
    {
        title: "BI Dashboards with Power BI",
        issuer: "Codecademy",
        year: "2023",
        url: "https://www.codecademy.com/profiles/constantinsinowski/certificates/1cb76ac48943853ca32c394afeb491c9"
    }
];

// Publications data
const publications = [
    {
        title: "Verantwortungsvoller Umgang mit künstlicher Intelligenz. Wie können Menschenrechte beim Einsatz von KI gewahrt werden?",
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
    },
    {
        title: "Digitale Zwillinge",
        publisher: "GRIN",
        year: "2023",
        url: "https://www.grin.com/document/1361892ttps://amzn.eu/d/7YCaeFZ",
        description: "Technologien und Informationsverarbeitung prägen den Alltag von Menschen. Viele Menschen besitzen ein Smartphone, welches mit Sensorik ausgestattet ist, um den Standort innerhalb von Funkantennen wie auch im Bereich geostationärer Satelliten zu bestimmen. Die Höhe verglichen zum Meeresspiegel, die Bewegungsgeschwindigkeit des Nutzers wie auch dessen durchschnittliche Nutzung des Geräts kann regelbasiert analysiert werden, um als Reaktion auf die gemessenen Daten die durchschnittliche Schlafenszeit wie auch präferierte Routen zu nutzen, um relevante Benachrichtigungen zu Neuigkeiten in der Umgebung zu erhalten (Alpaydi, 2021). Künstliche Intelligenzen erstellen Profile für Werbeagenturen, Versicherungen und Entwicklung von neuen Produkten wie Applikationen und Geräten (Jordan, 2016). Dieser Text selbst kann bereits von linguistischen, neuronalen Modellen auf Rechtschreibung geprüft, wie auch anhand einiger Vorgaben verfasst werden (Bubeck, et al., 2023, S. 92). In der fertigenden Industrie werden Roboterarme eingesetzt, um schwere Bauteile zu heben, Komponenten zu verschweißen und zu lackieren. Dabei entstehen viele Daten über die Nutzung und den Zustand eines Roboters, welche zur Optimierung genutzt werden können."
    },
    {
        title: "Iterative Entwicklung mit Versionsprotokollierung",
        publisher: "GRIN",
        year: "2023",
        url: "https://www.grin.com/document/1361892ttps://amzn.eu/d/7YCaeFZ",
        description: "Heutzutage basiert der größte Teil der Technologien, die wir verwenden, auf Software. Bei der Programmierung wird der Code erstellt, aus welcher die Software besteht. Die Programmierung hat also im Laufe der Zeit einen immer höheren Stellenwert eingenommen. Dies ist auch der Grund, warum immer mehr Programmierparadigmen und Programmiersprachen entwickelt wurde. Die Iterative Entwicklung mit Versionsprotokollierung ist ein wichtiger Ansatz für die Softwareentwicklung, bei dem Projekte in kleinen Schritten und mit regelmäßiger Überprüfung und Überarbeitung fortgesetzt werden. Durch die Verwendung eines Versionskontrollsystems werden Änderungen an der Codebasis dokumentiert und es kann jederzeit zu früheren Versionen zurückgekehrt werden, wenn Probleme auftreten.Dieser Ansatz ermöglicht es Entwicklern, kontinuierlich Feedback von Benutzern und Stakeholdern zu erhalten und darauf zu reagieren, wodurch die Qualität und die Übereinstimmung mit den Anforderungen des des Projekts garantiert werden. Darüber hinaus kann die Zusammenarbeit von Entwicklern vereinfacht und beschleunigt werden, da Änderungen an der Codebasis jederzeit sicher nachverfolgt werden können. Insgesamt trägt die Iterative Entwicklung mit Versionsprotokollierung zu einem besseren Verständnis und einer größeren Kontrolle über das Projekt bei und führt zu einer höheren Qualität und Zuverlässigkeit des endgültigen Produkts."
    },
    {
        title: "Informationssicherheit im Cloud-Computing",
        publisher: "GRIN",
        year: "2023",
        url: "https://www.grin.com/document/1318357",
        description: "Bereits in den 1960er Jahren entstanden Ideen, IT-Ressourcen wie Rechenleistung und Anwendungen als eine Dienstleistung einer großen Anzahl von Kunden gegen eine Nutzungsgebühr zur Verfügung zu stellen. Auf Grund der dafür notwendigen, aber damals noch nicht vorhandenen technischen Voraussetzungen wie schnelle und stabi­le Internetverbindungen sowie der Mehrbenutzerfähigkeit von IT-Systemen, war der technische und wirtschaftliche Durchbruch nicht möglich (Büst, 2013). Seit 2006 Amazon Web Services gestartet ist, haben sich weitere Dienstleister eta­bliert, bei denen mehrere unabhängige Nutzer in ihrem Budget flexibel agieren und durch gemeinsame Rechenkapazitäten hohe Bedarfsspitzen abdecken können. Der Aufbau einer Cloud Infrastruktur kann in drei Grundmodelle unterteilt werden: einer Public Cloud, einer Private Cloud und einer Kombination aus beidem - der Hybrid Cloud.Alle größeren Firmen in diesem Feld bieten Dienstleistungen an, welche durch internationale Datenschutzrichtlinien wie den Electronic Communications Privacy Act und den Patriot Act der Vereinigten Staaten von Amerika und der davon abhängigen Datenschutzvereinbarung Safe Harbour, welche durch den EU - US Data Privacy Shield und der Datenschutzgrundverordnung(GDPR, General Data Protection Regulation) der EU erweitert wurde, geschützt sind.Zur Vermeidung von Risiken der Datensicher­heit wird ein eingeschränkter Zugriff durch Befugnisrollen, eigene Verschlüsselung der verarbeiteten Daten, des Kommunikationsweges über Netzwerke durch Zugriffsbe­schränkungen, Virtuelle Private Netzwerk Tunnel, regelmäßige Prüfung auf Viren und andere Sicherheitsmaßnahmen empfohlen auch wenn Betreiber von Rechenzentren bereits hohe Standards für Verschlüsselungen und Datensicherheit erfüllen."
    },
    {
        title: "Risikomanagementprozesse. Wie sichert die Analyse von Risiken die strategische Positionierung eines Unternehmens ab?",
        publisher: "GRIN",
        year: "2022",
        url: "https://www.grin.com/document/1293242",
        description: "Ein Unternehmen unterliegt je nach Branche und Markt auch Geschäftsrisiken durch das Tagesgeschäft. Diese können durch den Standort, die Handhabung von Gefahren­gut, dem Ausfall von Personal, Geschäftspartnern, Technologie, Liquidität und Ände­rungen am rechtlichen Rahmen hervorgerufen werden. Um eine Resilienz in diesen Herausforderungen aufzubauen, bedarf es Risikomanagementprozesse, welche Ge­fahren analysieren und präventive Maßnahmen erschließen (RMS, Risikomanage­mentsystem). Das Alltagsgeschäft wird zusätzlich durch geopolitischen Umstände, welche Rohstoffpreise und Wechselkurse beeinflussen, geprägt. In den letzten Jahren ist die Anzahl an Krisen weltweit gestiegen. Ende der 1990er Jahre haben überbewer­tete Internetfirmen an der globalen Börse für Turbulenzen gesorgt, gefolgt von der Fi­nanzkrise im Jahr 2008 mit ungedeckten Immobilienkrediten. Obwohl es bereits in den 1980er Jahren deutlich wurde, dauerte es einige Jahrzehnte, bis strukturelle Änderun­gen durch internationale Konzerne und Lieferketten im Sinne nachhaltiger und sozialer Führung (ESG, Environmental Social Governance) realisiert wurden. Nach 2 Jahren Pandemie und zunehmender Nachfrage an nachhaltigen Lösungen für Mobilität, Indus­trie und Haushalte aufgrund von Engpässen von Öl und Gas nimmt auch die Wahr­scheinlichkeit für ernsthafte Risiken im Westen Europas zu."
    },
    {
        title: "IT-Security und Datenschutz. Bedrohungsanalyse für eine Arztpraxis",
        publisher: "GRIN",
        year: "2022",
        url: "https://www.grin.com/document/1264668",
        description: "Während zunehmend mehr digitale Geräte und Anwendungen im Alltag verwendet werden, um Informationen zu verarbeiten wächst auch die Anzahl an Bedrohungen für die Sicherheit der Kommunikationssysteme. Damit ein System sicher ist, muss es un­terbrechungsfrei und nur für befugte Personen verfügbar sein. Sowohl die technische Infrastruktur als auch die Art und Weise wie diese von Personen genutzt wird muss den Zielen einer Organisation gerecht werden, dass die Informationsverarbeitung vertrau­lich erfolgt. Cybersicherheit wird oft nur als notwendige Compliance-Aufgabe oder gar als reiner Kostenfaktor betrachtet. Dabei kann eine hohe Sicherheit bei digitalen Pro­zessen oder Produkten ein Mehrwert oder Wettbewerbsvorteil sein. Cloud-Systeme oder Plattformen etwa funktionieren nur zuverlässig, wenn sie von Grund auf sicher sind. Das Kundenvertrauen kann durch nachweislich existente Sicherheitsmaßnahmen gestärkt werden. Cybersicherheit ist so notwendig wie das Qualitätsmanagement. Laut dem Digitalverband Bitkom entstehen der deutschen Wirtschaft jährlich Schäden von rund 230 Milliarden Euro durch Cyberangriffe. Nicht nur Universitäten oder Politiker werde dadurch getroffen, sondern sogar kritische Infrastrukturen wie die Strom- oder Wasserversorgung, Krankenhäuser oder Kommunikationssysteme. Private Unterneh­men aller Größen sind in letzter Zeit verstärkt zur Zielscheibe von Cyberattacken ge­worden, die beträchtlichen Schaden anrichten und auch die Existenz bedrohen kön­nen. Beispiele sind gestohlene Kundendaten oder Innovationen, gefälschte E-Mails vom CEO mit der Aufforderung, Geld auf Auslandskonten zu überweisen, oder die Blo­ckade der Produktionsanlagen mit anschließender Erpressung. Am häufigsten greifen die Cyberkriminellen Unternehmen mit sogenannter Ransomware an, um so Lösegeld zu erpressen."
    },
    {
        title: "Qualitätsmanagement in der fertigenden Industrie mithilfe von Radiofrequenz-Identifikation",
        publisher: "GRIN",
        year: "2021",
        url: "https://www.grin.com/document/1264682",
        description: "Unternehmen agieren im globalen Wettbewerbsmarkt. Um sich gegenüber vergleichbaren Produkten der Konkurrenz durchzusetzen, müssen die Merkmale eines Produkts den Ansprüchen eines Kunden gerecht werden. Damit das Produkt eines Unternehmens in einem Rahmen erzielt wird, welcher sowohl Zeit, Kosten als auch Qualität beachtet, benötigt ein Unternehmen eine Überwachung und Verbesserung der Produktionsprozesse. Die Qualitätskontrolle kann durch Mitarbeiter oder durch Automation erfolgen. Auf den folgenden Seiten wird erläutert, wie RFID-Systeme in der fertigenden Industrie genutzt werden können, um qualitative Produkte zu erzielen."
    },
    {
        title: "Wie werden mithilfe eines Siebensegment-Dekodierers digitale Zahlen als Dezimalzahlen auf einer Siebensegment-Anzeige dargestellt?",
        publisher: "GRIN",
        year: "2021",
        url: "https://www.grin.com/document/1264678",
        description: "Schon Anfang des letzten Jahrhunderts wurden Nachrichten über lange Distanzen mit elektrischen Signalen übertragen. Das manuelle Übersetzen der Nachrichten in verschiedenste Kombinationen aus kurzen und langen Signalen, wie auch das Auslesen dieser in reinen Text dauerte jedoch sehr lange. Daher gab es Ansätze, um die Morsezeichen direkt als alphanumerische Zeichen darzustellen. Die Darstellung von Informationen zur Warnung von Mitarbeitern in der Industrie und Logistik oder zur Mitteilung von sich ändernden Preisen und Handlungsanweisungen sind eine nützliche Anwendung für jeden Betrieb, innerhalb eines Gebäudes oder auf einem öffentlichen Platz.Digitale Anzeigen sind heutzutage kostengünstig, mitunter wegen der weiten Verbreitung von LED, welche in unterschiedlichsten Farben und Licht- stärken verfügbar sind. Gegenüber Plakatwerbung und statischen Zeichen ist es möglich, mit Bildern, Animationen wie auch Videos die Aufmerksamkeit auf eine Botschaft zu richten. Im alltäglichen Gebrauch sind Anzeigen bei Radioweckern, Armbanduhren und Taschenrechnern zu finden oder um Temperaturen am Ofen, die verbleibende Laufzeit bei einer Waschmaschine oder die Preise an der Tankstelle anzuzeigen."
    },
    {
        title: "Analyse großer industrieller Datensätze. Wie werden große Datensätze in der fertigenden Industrie analysiert und verwertet?",
        publisher: "GRIN",
        year: "2021",
        url: "https://www.grin.com/document/1264676",
        description: "Innovative Technologien haben dem Menschen erst durch Wasserdampf, dann mithilfe von Elektrizität routinierte, mechanische Arbeiten abgenommen. Die Digitaltechnik er­möglicht zudem eine Verarbeitung von Informationen, um Betriebsprozesse fortlaufend zu optimieren und neu zu erfinden. Zusammen mit sensibler Sensorik können auch Fertigungsanlagen und deren Wartungsprüfung automatisiert werden und während ei­ner laufenden Produktion Fehler vermieden werden, was zu einer höheren Qualität der Produkte führt. Statt handwerkliche Arbeiten durchzuführen, erhält der Mensch da­durch neue Aufgabengebiete bei der Kontrolle, Steuerung, Überwachung und Verbes­serung von Maschinen. Unternehmen nutzen in industriellen Fertigungsanlagen ver­schiedenste automatisierte Lösungen von mehreren Herstellern. In einer Wertschöp­fungskette entstehen in der Logistik eines speziellen Bauteils eines Zulieferers Daten über den Status der derzeitigen Position, durch Prüfungen auf Unversehrtheit und der vollständigen Zahlung der Transaktion. Das empfangende Unternehmen kann wieder­um ein Zulieferer eines weiteren Unternehmens oder Konsortiums sein. Falls die anfal­lenden Daten von Maschinen unterschiedlichster Hersteller und die Transaktionsdaten von einem Unternehmenszusammenschluss nicht durch standardisierte Schnittstellen, Formate, Sprache und Maßeinheiten gleichgeschaltet sind, entsteht eine Barriere. Die­se muss mit zusätzlichem Aufwand und Investitionen aller beteiligten Unternehmen überwunden werden, um zeitnahe und aussagekräftige Rückschlüsse über den Zu­stand einer Produktionsanlage und der entsprechenden Logistik treffen zu können. Mit modernsten Technologien der elektronischen Datenverarbeitung können akkurate Aus­sagen über zukünftige Zustände erschlossen werden, sodass Steuerungskomponente Anpassungen der Produktionsumgebungen selbst übernehmen."
    },
    {
        title: "Die Bestimmung der Elementarladung",
        publisher: "GRIN",
        year: "2021",
        url: "https://www.grin.com/document/1336653",
        description: "Elektrizität ist im Alltag allgegenwärtig − jeder Haushalt erhält regelmäßig eine Stromrechnung. Die dort in Rechnung gestellte 'Ware' ist jedoch nicht der elektrische Strom, sondern die gelieferte elektrische Energie, die zum Beleuchten, Heizen, Kühlen oder für mechanische Arbeiten genutzt wurde. Wenn von elektrischem Strom gesprochen wird, ist im Allgemeinen die Stärke dieses Stromes gemeint, also die physikalische Größe elektrischer Stromstärke. Diese ist definiert als die Menge an elektrischer Ladung, die pro Zeitintervall durch den Querschnitt eines elektrischen Leiters fließt, geteilt durch die Länge des Zeitintervalls."
    },
    {
        title: "Die Monopolstellung von FlixBus im Markt für Personenverkehr",
        publisher: "GRIN",
        year: "2020",
        url: "https://www.grin.com/document/1336653",
        description: "Anhand des Segments im Markt für Personenverkehr wird aufgezeigt, wie das Unternehmen FlixBus sich im Markt fur Fernbusreisen etabliert hat. Dies wird dadurch gestützt, dass die Geschichte des Personenbeforderungsgesetz aufgeführt wird und wie verschiedene Unternehmen, welche später von FlixBus akquiriert wurden, diesen Markt ausgebaut und bedient haben. Weiter wird auch darauf ein- gegangen, wie sich FlixBus durch Markenbekanntheit und Qualität bei der Buchung und der Fahrt als Marktführer durchgesetzt hat und welche Preiselastizität in der Nachfrage fur Fahrscheine vorherrscht und wie diese die Erlöse beeinflusst. Zum Schluss wird diskutiert, wie die Bundesregierung von Deutschland bei einer Monopolbildung reagiert und wie sich diese Situation auf europäischer Ebene verhält."
    }

  // Add all other publications here...
];

function createExperienceElement(experience) {
    const div = document.createElement('div');
    div.className = 'experience-item';

    div.innerHTML = `
    <div class="experience-header">
      <div>
        <h3>${experience.title}</h3>
        <p class="company">${experience.company}</p>
      </div>
      <span class="date">${experience.period}</span>
    </div>
    <p class="description">${experience.description}</p>
  `;

    return div;
}


// Function to create certification elements
function createCertificationElement(certifications) {
    const div = document.createElement('div');
    div.className = 'certification-item';

    div.innerHTML = `
    <div class="group relative flex justify-between items-start">
      <div>
        <a href="${certifications.url}" class="publication-title">
          <h3>${certifications.title}</h3>
        </a>
        <p class="date">${certifications.issuer}, ${certifications.year}</p>
      </div>
      <a href="${certifications.url}" class="external-link" aria-label="External link to certification">
        <i data-lucide="external-link"></i>
      </a>
    </div>
  `;

    return div;
}

// Function to create publication elements
function createPublicationElement(publication) {
  const div = document.createElement('div');
  div.className = 'publication-item';
  
  div.innerHTML = `
    <div class="publication-header">
      <div>
        <a href="${publication.url}" class="publication-title">
          <h3>${publication.title}</h3>
        </a>
        <p class="date">${publication.publisher}, ${publication.year}</p>
      </div>
      <a href="${publication.url}" class="external-link" aria-label="External link to publication">
        <i data-lucide="external-link"></i>
      </a>
    </div>
    <p class="description">${publication.description}</p>
  `;
  
  return div;
}

// Load experiences
function loadExperiences() {
    const container = document.querySelector('.experience-items');
    experiences.forEach(exp => {
        container.appendChild(createExperienceElement(exp));
    });
}

// Load certifications
function loadCertifications() {
    const container = document.querySelector('.certification-items');
    certifications.forEach(cert => {
        container.appendChild(createCertificationElement(cert));
    });
}

// Load publications
function loadPublications() {
  const container = document.querySelector('.publication-items');
  publications.forEach(pub => {
    container.appendChild(createPublicationElement(pub));
  });
  // Reinitialize icons for newly added elements
  lucide.createIcons();
}

// Floating navigation functionality
function initFloatingNav() {
  const nav = document.querySelector('.floating-nav');
  const navLinks = nav.querySelectorAll('a');
  const sections = document.querySelectorAll('section[id]');
  let lastScrollY = window.scrollY;
  let ticking = false;

  // Smooth scroll to section
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Update active section
  function updateActiveSection() {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 300) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Hide/show navigation based on scroll direction
  function updateNavVisibility() {
    const currentScrollY = window.scrollY;
    nav.classList.toggle('hidden', currentScrollY > lastScrollY && currentScrollY > 100);
    lastScrollY = currentScrollY;
    ticking = false;
  }

  // Scroll event handler
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateNavVisibility();
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial active section
  updateActiveSection();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadExperiences();
  loadCertifications();
  loadPublications();
  initFloatingNav();
  lucide.createIcons();
});