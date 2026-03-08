import React from 'react';
import { Linkedin, Instagram, Mail, ExternalLink, Briefcase, BookText, Target, MapPin, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white md:w-80 p-8">
        <div className="sticky top-8">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2">Constantin Sinowski</h1>
            <p className="text-gray-400 text-lg">KI Spezialist</p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Kontakt</h2>
              <div className="space-y-3">
                <a href="mailto:bewerbung@sinowski.de" className="flex items-center gap-3 text-gray-300 hover:text-white">
                  <Mail className="w-4 h-4" />
                  <span>bewerbung@sinowski.de</span>
                </a>
                <a href="tel:+4915679001672" className="flex items-center gap-3 text-gray-300 hover:text-white">
                  <Phone className="w-4 h-4" />
                  <span>+49 156 79001672</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>Berlin, Deutschland</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Soziale Medien</h2>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/constantinsinowski/" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/constantinsinowski/" className="text-gray-400 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Gehaltsvorstellung</h2>
              <p className="text-gray-300">50.000€ - 60.000€</p>
              <p className="text-sm text-gray-400 mt-1">Verhandelbar</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 bg-white">
        <div className="max-w-3xl">
          {/* Current Focus */}
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-5 h-5 text-gray-700" />
              <h2 className="text-2xl font-semibold">Fokus</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Weiterbildung KI Masterclass Basic
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-gray-700" />
              <h2 className="text-2xl font-semibold">Professionelle Erfahrung</h2>
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-medium">IT Consultant</h3>
                    <p className="text-gray-600">HAVI Solutions GmbH & Co. KG</p>
                  </div>
                  <span className="text-gray-500">06.2024 - 11.2024</span>
                </div>
                <p className="text-gray-600">Im Rahmen meiner Tätigkeit habe ich interne Tools zur Datenmigration in XML angepasst. Diese Anpassungen umfassten die Optimierung von Prozessen zur sicheren und effizienten Übertragung großer Datenmengen zwischen verschiedenen Systemen. Darüber hinaus habe ich regelmäßig Datenanalysen durchgeführt, wobei ich SQL und Perl-Skripte verwendet habe, um komplexe Datenmuster zu identifizieren und relevante Erkenntnisse zu gewinnen. Diese Analysen ermöglichten es, fundierte Entscheidungen zu treffen und Geschäftsstrategien entsprechend anzupassen.

Ein weiterer wichtiger Aspekt meiner Arbeit war die Entwicklung von Skripten mit Bash und Power Shell. Diese Skripte wurden eingesetzt, um wiederkehrende Aufgaben zu automatisieren und die Effizienz der IT-Infrastruktur zu verbessern. Durch den Einsatz dieser Automatisierungstechniken konnte ich die Betriebskosten senken und die Zuverlässigkeit der Systeme erhöhen.

Zusätzlich habe ich während meiner Tätigkeit kontinuierlich an meiner eigenen Weiterbildung gearbeitet, um stets auf dem neuesten Stand der Technik zu bleiben und innovative Lösungen für aktuelle Herausforderungen zu entwickeln. Meine Fähigkeit, mich in neue Themen einzuarbeiten und kontinuierlich weiterzubilden, hat es mir ermöglicht, meine Expertise in den Bereichen Datenbanken, Datenanalyse und Softwareentwicklung stetig zu erweitern.</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-medium">Business Intelligence & Data Analytics</h3>
                    <p className="text-gray-600">Hubert Burda Media Holding</p>
                  </div>
                  <span className="text-gray-500">04.2023 - 02.2024</span>
                </div>
                <p className="text-gray-600">Eine meiner Hauptaufgaben war die Erstellung und Verwaltung einer umfassenden Zeitarbeitstabelle mit Microsoft Excel. Hierbei habe ich Tabellenblätter eingerichtet, die präzise Daten zu Arbeitszeiten der Mitarbeiter enthielten, darunter Spalten für Datum, Mitarbeitername, Startzeit, Endzeit, Pausenzeit, Gesamtarbeitszeit und Überstunden. Ich nutzte Formeln zur Berechnung der Gesamtarbeitszeit und Überstunden, was eine genaue Dokumentation und Auswertung ermöglichte. Regelmäßig überprüfte und aktualisierte ich die Zeitarbeitstabellen, um sicherzustellen, dass die Daten korrekt und aktuell waren.

Eine weitere bedeutende Aufgabe bestand in der Analyse finanzieller Daten mit KNIME. Ich importierte finanzielle Datensätze in KNIME, um detaillierte Analysen und Modellierungen durchzuführen. Dabei bereinigte und transformierte ich die Daten zur Vorbereitung auf die Analyse, einschließlich der Verwendung von KNIME-Knoten wie „Row Filter" und „String Manipulation". Durch die Aggregation und Analyse der Daten mittels „GroupBy"-Knoten konnte ich aussagekräftige Berichte über finanzielle Kennzahlen erstellen. Zudem erstellte ich Visualisierungen und Diagramme, um die Ergebnisse der Analysen anschaulich darzustellen und Entscheidungsträgern zugänglich zu machen.

Zudem beinhaltete meine Tätigkeit die Recherche und Bewertung verschiedener Softwarelösungen, die lokal ausgeführt werden können, leicht zu erlernen und zu pflegen sind, jedoch mehr Leistung und Funktionen bieten als Microsoft Excel. Dabei habe ich zahlreiche Softwareoptionen analysiert, um die bestmöglichen Werkzeuge für spezifische Anwendungsfälle zu identifizieren. Zu den bewerteten Lösungen gehörten u.a. Datenbankmanagementsysteme, fortschrittliche Datenanalysetools und benutzerfreundliche Software für die Automatisierung von Geschäftsprozessen. Diese Recherche hat es mir ermöglicht, passende Technologien zu implementieren, die die Effizienz und Produktivität der Geschäftsvorgänge erheblich steigerten.</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-medium">Datenerfasser</h3>
                    <p className="text-gray-600">TIER Mobility</p>
                  </div>
                  <span className="text-gray-500">10.2021 - 10.2022</span>
                </div>
                <p className="text-gray-600">Während meiner Zeit als Datenerfasser bei TIER Mobility war ich hauptsächlich für die Digitalisierung und Verwaltung von Dokumenten sowie für die Erfassung und Analyse von Daten verantwortlich. Diese Aufgaben umfassten mehrere wichtige Schritte und Prozesse, die zur Effizienzsteigerung und Kostensenkung beitrugen.

Eine zentrale Aufgabe war die Digitalisierung von automatisch erstellten Dokumenten, die in Papierform postalisch eintrafen. Diese Dokumente wurden eingescannt und systematisch in Google Drive archiviert. Dadurch konnte ich sicherstellen, dass alle wichtigen Unterlagen digital zugänglich und leicht auffindbar waren. Die Digitalisierung ermöglichte eine schnellere Verarbeitung und reduzierte die Notwendigkeit physischer Lagerung.

Ein weiterer wichtiger Teil meiner Tätigkeit war die Erfassung und Analyse von Informationen in Google Sheets. Hierbei nutzte ich verschiedene Formeln und Datenvalidierungen, um die Genauigkeit und Effizienz der Datenverarbeitung zu erhöhen. Durch die Implementierung dieser Methoden konnte ich Fehler reduzieren und den Prozess der Dateneingabe und -auswertung erheblich verbessern. Diese Optimierungen führten zu signifikanten Kosteneinsparungen und erhöhten die Produktivität des Teams.

Zusätzlich zu meinen regulären Aufgaben habe ich zwei wissenschaftliche Arbeiten in Kooperation mit TIER Mobility verfasst. Die erste Arbeit befasste sich mit dem Thema Technischer Vertrieb und untersuchte, wie technische Verkaufsstrategien optimiert werden können. Die zweite Arbeit beschäftigte sich mit Business Intelligence & Data Science und analysierte, wie datenbasierte Entscheidungen die Geschäftsprozesse verbessern können. Beide Arbeiten trugen dazu bei, wertvolle Erkenntnisse für das Unternehmen zu gewinnen und die strategische Ausrichtung zu unterstützen.</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-medium">Datenanalyst</h3>
                    <p className="text-gray-600">Sasserath Munzinger Plus</p>
                  </div>
                  <span className="text-gray-500">05.2022 - 06.2022</span>
                </div>
                <p className="text-gray-600">Im Rahmen meiner Tätigkeit als Datenanalyst habe ich ein umfangreiches Projekt durchgeführt, das die Auslese und Analyse von Umfragedaten zur Meinung über europäische Fußballvereine umfasste. Diese Arbeit bot mir die Möglichkeit, meine Fähigkeiten in der Datenverarbeitung, Analyse und Präsentation zu vertiefen und zu erweitern.

Das Projekt begann mit der Auslese von Daten aus einer umfangreichen Umfrage, an der 1000 Personen teilnahmen. Die Umfrage zielte darauf ab, die Meinungen der Befragten zu verschiedenen Aspekten europäischer Fußballvereine zu erfassen, darunter Innovation, Nachhaltigkeit, soziale Verantwortung und wirtschaftliche Kompetenz. Die Daten wurden mit der Software SPSS (Statistical Package for the Social Sciences) extrahiert. SPSS ermöglichte es mir, die rohen Umfragedaten zu bereinigen, fehlende Werte zu identifizieren und notwendige Transformationen vorzunehmen, um die Daten für die Analyse in Excel vorzubereiten.

Nachdem die Daten aus SPSS extrahiert und aufbereitet waren, wurden sie in Excel importiert, um eine detaillierte Analyse durchzuführen. In Excel nutzte ich verschiedene Analysetechniken, darunter Pivot-Tabellen und Diagramme, um die Meinungen der Befragten zu den verschiedenen Aspekten der Fußballvereine zu visualisieren. Besondere Aufmerksamkeit galt dabei der Auswahl geeigneter Formatierungen für Diagramme, um die Ergebnisse klar und aussagekräftig darzustellen. 

Ein entscheidender Teil des Projekts war die Erstellung einer professionellen PowerPoint-Präsentation, in der die Ergebnisse der Analyse anschaulich dargestellt wurden. Jedes Diagramm wurde sorgfältig formatiert und mit den entsprechenden Logos der Fußballvereine versehen, um eine visuell ansprechende und leicht verständliche Präsentation zu gewährleisten. Die Präsentation umfasste nicht nur die grafischen Darstellungen der Ergebnisse, sondern auch erklärende Texte, die die wichtigsten Erkenntnisse und deren Bedeutung erläuterten.</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-medium">Junior Software Developer & IT-Support</h3>
                    <p className="text-gray-600">HAVI Solutions GmbH & Co. KG</p>
                  </div>
                  <span className="text-gray-500">02.2019 - 08.2019</span>
                </div>
                <p className="text-gray-600">Ein wesentlicher Teil meiner Arbeit war die Datenbankmigration und -analyse von Archiven mithilfe von Bash, Perl und Java. Ich entwickelte Skripte zur Automatisierung von Datenmigrationen, um den Transfer großer Datenmengen zwischen verschiedenen Systemen effizient und fehlerfrei zu gestalten. Außerdem analysierte ich die migrierten Daten, um sicherzustellen, dass sie korrekt und vollständig übertragen wurden.

Ich war an der Entwicklung eines Programms in Java beteiligt, das nach den Prinzipien von Scrum und unter Verwendung von Git als Versionskontrollsystem entwickelt wurde. In diesem Projekt arbeitete ich eng mit dem Entwicklungsteam zusammen, um Anforderungen zu spezifizieren, Features zu implementieren und regelmäßig Fortschritte zu präsentieren. Die Arbeit in einem agilen Umfeld ermöglichte es mir, flexibel auf Änderungen zu reagieren und kontinuierlich Verbesserungen einzubringen.

Zusätzlich erstellte ich Konzepte im Projektmanagement für interne Dokumente. Eine zentrale Aufgabe war die Entwicklung eines Verfahrens, das es ermöglichte, Datenabgleiche in mehreren Microsoft Word-Dokumenten durchzuführen. Hierbei wurden Platzhalter für Textfelder mit den Namen der Projektverantwortlichen durch eine zentrale Microsoft Excel-Tabelle gefüllt. Dieses System verbesserte die Konsistenz und Aktualität der Dokumentation und vereinfachte die Verwaltung von Projektdokumenten erheblich.

Ein bedeutender Teil meiner Tätigkeit umfasste die Recherche und Dokumentation zu modernen Technologien im Bereich Cloud Computing und Containerisierung. Ich untersuchte Cloud-Dienste wie AWS und d.velop sowie Container-Technologien wie Docker und Kubernetes. Meine Recherche konzentrierte sich darauf, wie eine Virtual Private Cloud (VPC) mit VPN, SSL, Firewall und Lambda-Funktionen eingerichtet und verwaltet werden kann. Die Ergebnisse meiner Recherche wurden in detaillierten Dokumentationen festgehalten, die als Leitfaden für zukünftige Implementierungen dienten.</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-medium">EDV-Programmierer</h3>
                    <p className="text-gray-600">Motion Fashion Network Europe GmbH</p>
                  </div>
                  <span className="text-gray-500">03.2018 - 06.2018</span>
                </div>
                <p className="text-gray-600">Ein wesentlicher Teil meiner Arbeit war die Datenbankmigration und -analyse von Archiven mithilfe von Bash, Perl und Java. Ich entwickelte Skripte zur Automatisierung von Datenmigrationen, um den Transfer großer Datenmengen zwischen verschiedenen Systemen effizient und fehlerfrei zu gestalten. Außerdem analysierte ich die migrierten Daten, um sicherzustellen, dass sie korrekt und vollständig übertragen wurden.

Ich war an der Entwicklung eines Programms in Java beteiligt, das nach den Prinzipien von Scrum und unter Verwendung von Git als Versionskontrollsystem entwickelt wurde. In diesem Projekt arbeitete ich eng mit dem Entwicklungsteam zusammen, um Anforderungen zu spezifizieren, Features zu implementieren und regelmäßig Fortschritte zu präsentieren. Die Arbeit in einem agilen Umfeld ermöglichte es mir, flexibel auf Änderungen zu reagieren und kontinuierlich Verbesserungen einzubringen.

Zusätzlich erstellte ich Konzepte im Projektmanagement für interne Dokumente. Eine zentrale Aufgabe war die Entwicklung eines Verfahrens, das es ermöglichte, Datenabgleiche in mehreren Microsoft Word-Dokumenten durchzuführen. Hierbei wurden Platzhalter für Textfelder mit den Namen der Projektverantwortlichen durch eine zentrale Microsoft Excel-Tabelle gefüllt. Dieses System verbesserte die Konsistenz und Aktualität der Dokumentation und vereinfachte die Verwaltung von Projektdokumenten erheblich.

Ein bedeutender Teil meiner Tätigkeit umfasste die Recherche und Dokumentation zu modernen Technologien im Bereich Cloud Computing und Containerisierung. Ich untersuchte Cloud-Dienste wie AWS und d.velop sowie Container-Technologien wie Docker und Kubernetes. Meine Recherche konzentrierte sich darauf, wie eine Virtual Private Cloud (VPC) mit VPN, SSL, Firewall und Lambda-Funktionen eingerichtet und verwaltet werden kann. Die Ergebnisse meiner Recherche wurden in detaillierten Dokumentationen festgehalten, die als Leitfaden für zukünftige Implementierungen dienten.</p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-24">
            <div className="flex items-center gap-2 mb-6">
              <BookText className="w-5 h-5 text-gray-700" />
              <h2 className="text-2xl font-semibold">Zertifizierungen</h2>
            </div>
            <div className="space-y-8">
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Analyze Data with SQL</h3>
                    <p className="text-gray-500 mt-1">Codecademy, 2024</p>
                  </div>
                  <a 
                    href="https://www.codecademy.com/profiles/_cosinus/certificates/5cafb2d937090210d7df3652" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <BookText className="w-5 h-5 text-gray-700" />
              <h2 className="text-2xl font-semibold">Veröffentlichungen</h2>
            </div>
            <div className="space-y-8">
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Verantwortungsvoller Umgang mit künstlicher Intelligenz. Wie können Menschenrechte beim Einsatz von KI gewahrt werden?</h3>
                    <p className="text-gray-500 mt-1">GRIN, 2023</p>
                  </div>
                  <a 
                    href="https://www.grin.com/document/1382179" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">Diese Arbeit zielt darauf ab, AI-Methoden und deren Regulierung darzustellen, bestehende Rahmenbedingungen und Regulierungen von AI zu beleuchten und eine Diskussionsgrundlage über ihren Nutzen, Risiken und Gefahren im Sinne der Menschenrechte zu schaffen. Sie betont die Wichtigkeit einer angemessenen Überwachung von AI, um Missbrauch einzudämmen, und fordert die Sensibilisierung der Öffentlichkeit für die Potenziale und Risiken der AI, um Menschen vor Betrug und Manipulation zu schützen.</p>
              </div>
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Integration eines Qualitätsmanagements in der Softwareentwicklung</h3>
                    <p className="text-gray-500 mt-1">Amazon, 2023</p>
                  </div>
                  <a 
                    href="https://amzn.eu/d/00F2U5M" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">Das Qualitätsmanagement in der Softwareentwicklung bezieht sich auf den Prozess, die Methoden und die Tools, die verwendet werden, um die Qualität von Softwareprodukten sicherzustellen. Dies beinhaltet die Überwachung und Überprüfung der Entwicklung von Anfang bis Ende, um sicherzustellen, dass die Software den Anforderungen des Kunden entspricht und Fehler minimiert werden. Ein wichtiger Teil des Qualitätsmanagements in der Softwareentwicklung ist die Durchführung von Tests.</p>
              </div>
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Kanban-System zur Optimierung von Produktions- und Lieferketten</h3>
                    <p className="text-gray-500 mt-1">Amazon, 2023</p>
                  </div>
                  <a 
                    href="https://amzn.eu/d/7YCaeFZ" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">In dieser Studienarbeit werden die Möglichkeiten eines Kanban-Systems in Kombination mit ERP-Software erforscht, um Produktions- und Lieferketten nachhaltiger und effizienter zu gestalten. Dabei werden die Funktionsweise und Voraussetzungen für die automatisierte Überwachung von Materialflüssen erläutert, sowie Systeme zur automatischen Identifikation im Qualitätsmanagement vorgestellt. Die Vor- und Nachteile eines digitalisierten Kanban-Systems mit automatischer Identifikation von Komponenten werden im Kontext eines Unternehmens aufgezeigt. Die Vorgehensweise basiert auf wissenschaftlicher Literatur zu Produktions- und Logistikmanagement sowie PMT-Software zur Kapazitätsauslastung. Ziel ist es, Investitionspotenziale für schnellere Lieferungen und reduzierten Ressourcenbedarf aufzuzeigen.</p>
              </div>
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Digitale Zwillinge</h3>
                    <p className="text-gray-500 mt-1">GRIN, 2023</p>
                  </div>
                  <a 
                    href="https://www.grin.com/document/1361892" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">Technologien und Informationsverarbeitung prägen den Alltag von Menschen. Viele Menschen besitzen ein Smartphone, welches mit Sensorik ausgestattet ist, um den Standort innerhalb von Funkantennen wie auch im Bereich geostationärer Satelliten zu bestimmen. Die Höhe verglichen zum Meeresspiegel, die Bewegungsgeschwindigkeit des Nutzers wie auch dessen durchschnittliche Nutzung des Geräts kann regelbasiert analysiert werden, um als Reaktion auf die gemessenen Daten die durchschnittliche Schlafenszeit wie auch präferierte Routen zu nutzen, um relevante Benachrichtigungen zu Neuigkeiten in der Umgebung zu erhalten (Alpaydi, 2021). Künstliche Intelligenzen erstellen Profile für Werbeagenturen, Versicherungen und Entwicklung von neuen Produkten wie Applikationen und Geräten (Jordan, 2016). Dieser Text selbst kann bereits von linguistischen, neuronalen Modellen auf Rechtschreibung geprüft, wie auch anhand einiger Vorgaben verfasst werden (Bubeck, et al., 2023, S. 92). In der fertigenden Industrie werden Roboterarme eingesetzt, um schwere Bauteile zu heben, Komponenten zu verschweißen und zu lackieren. Dabei entstehen viele Daten über die Nutzung und den Zustand eines Roboters, welche zur Optimierung genutzt werden können.</p>
              </div>
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Iterative Entwicklung mit Versionsprotokollierung</h3>
                    <p className="text-gray-500 mt-1">GRIN, 2023</p>
                  </div>
                  <a 
                    href="https://www.grin.com/document/1336655" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">Heutzutage basiert der größte Teil der Technologien, die wir verwenden, auf Software. Bei der Programmierung wird der Code erstellt, aus welcher die Software besteht. Die Programmierung hat also im Laufe der Zeit einen immer höheren Stellenwert eingenommen. Dies ist auch der Grund, warum immer mehr Programmierparadigmen und Programmiersprachen entwickelt wurde. Die Iterative Entwicklung mit Versionsprotokollierung ist ein wichtiger Ansatz für die Softwareentwicklung, bei dem Projekte in kleinen Schritten und mit regelmäßiger Überprüfung und Überarbeitung fortgesetzt werden.

Durch die Verwendung eines Versionskontrollsystems werden Änderungen an der Codebasis dokumentiert und es kann jederzeit zu früheren Versionen zurückgekehrt werden, wenn Probleme auftreten. Dieser Ansatz ermöglicht es Entwicklern, kontinuierlich Feedback von Benutzern und Stakeholdern zu erhalten und darauf zu reagieren, wodurch die Qualität und die Übereinstimmung mit den Anforderungen des </p>
              </div>
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Informationssicherheit im Cloud-Computing</h3>
                    <p className="text-gray-500 mt-1">GRIN, 2023</p>
                  </div>
                  <a 
                    href="https://www.grin.com/document/1318357" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">Bereits in den 1960er Jahren entstanden Ideen, IT-Ressourcen wie Rechenleistung und Anwendungen als eine Dienstleistung einer großen Anzahl von Kunden gegen eine Nutzungsgebühr zur Verfügung zu stellen. Auf Grund der dafür notwendigen, aber damals noch nicht vorhandenen technischen Voraussetzungen wie schnelle und stabi­le Internetverbindungen sowie der Mehrbenutzerfähigkeit von IT-Systemen, war der technische und wirtschaftliche Durchbruch nicht möglich (Büst, 2013).

Seit 2006 Amazon Web Services gestartet ist, haben sich weitere Dienstleister eta­bliert, bei denen mehrere unabhängige Nutzer in ihrem Budget flexibel agieren und durch gemeinsame Rechenkapazitäten hohe Bedarfsspitzen abdecken können.

Der Aufbau einer Cloud Infrastruktur kann in drei Grundmodelle unterteilt werden: einer Public Cloud, einer Private Cloud und einer Kombination aus beidem - der Hybrid Cloud. Alle größeren Firmen in diesem Feld bieten Dienstleistungen an, welche durch internationale Datenschutzrichtlinien wie den Electronic Communications Privacy Act und den Patriot Act der Vereinigten Staaten von Amerika und der davon abhängigen Datenschutzvereinbarung Safe Harbour, welche durch den EU-US Data Privacy Shield und der Datenschutzgrundverordnung (GDPR, General Data Protection Regulation) der EU erweitert wurde, geschützt sind. Zur Vermeidung von Risiken der Datensicher­heit wird ein eingeschränkter Zugriff durch Befugnisrollen, eigene Verschlüsselung der verarbeiteten Daten, des Kommunikationsweges über Netzwerke durch Zugriffsbe­schränkungen, Virtuelle Private Netzwerk Tunnel, regelmäßige Prüfung auf Viren und andere Sicherheitsmaßnahmen empfohlen auch wenn Betreiber von Rechenzentren bereits hohe Standards für Verschlüsselungen und Datensicherheit erfüllen.</p>
              </div>
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Risikomanagementprozesse. Wie sichert die Analyse von Risiken die strategische Positionierung eines Unternehmens ab?</h3>
                    <p className="text-gray-500 mt-1">GRIN, 2022</p>
                  </div>
                  <a 
                    href="https://www.grin.com/document/1293242" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">Ein Unternehmen unterliegt je nach Branche und Markt auch Geschäftsrisiken durch das Tagesgeschäft. Diese können durch den Standort, die Handhabung von Gefahren­gut, dem Ausfall von Personal, Geschäftspartnern, Technologie, Liquidität und Ände­rungen am rechtlichen Rahmen hervorgerufen werden. Um eine Resilienz in diesen Herausforderungen aufzubauen, bedarf es Risikomanagementprozesse, welche Ge­fahren analysieren und präventive Maßnahmen erschließen (RMS, Risikomanage­mentsystem). Das Alltagsgeschäft wird zusätzlich durch geopolitischen Umstände, welche Rohstoffpreise und Wechselkurse beeinflussen, geprägt. In den letzten Jahren ist die Anzahl an Krisen weltweit gestiegen. Ende der 1990er Jahre haben überbewer­tete Internetfirmen an der globalen Börse für Turbulenzen gesorgt, gefolgt von der Fi­nanzkrise im Jahr 2008 mit ungedeckten Immobilienkrediten. Obwohl es bereits in den 1980er Jahren deutlich wurde, dauerte es einige Jahrzehnte, bis strukturelle Änderun­gen durch internationale Konzerne und Lieferketten im Sinne nachhaltiger und sozialer Führung (ESG, Environmental Social Governance) realisiert wurden. Nach 2 Jahren Pandemie und zunehmender Nachfrage an nachhaltigen Lösungen für Mobilität, Indus­trie und Haushalte aufgrund von Engpässen von Öl und Gas nimmt auch die Wahr­scheinlichkeit für ernsthafte Risiken im Westen Europas zu.</p>
              </div>
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">IT-Security und Datenschutz. Bedrohungsanalyse für eine Arztpraxis</h3>
                    <p className="text-gray-500 mt-1">GRIN, 2022</p>
                  </div>
                  <a 
                    href="https://www.grin.com/document/1264668" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">Während zunehmend mehr digitale Geräte und Anwendungen im Alltag verwendet werden, um Informationen zu verarbeiten wächst auch die Anzahl an Bedrohungen für die Sicherheit der Kommunikationssysteme. Damit ein System sicher ist, muss es un­terbrechungsfrei und nur für befugte Personen verfügbar sein. Sowohl die technische Infrastruktur als auch die Art und Weise wie diese von Personen genutzt wird muss den Zielen einer Organisation gerecht werden, dass die Informationsverarbeitung vertrau­lich erfolgt. Cybersicherheit wird oft nur als notwendige Compliance-Aufgabe oder gar als reiner Kostenfaktor betrachtet. Dabei kann eine hohe Sicherheit bei digitalen Pro­zessen oder Produkten ein Mehrwert oder Wettbewerbsvorteil sein. Cloud-Systeme oder Plattformen etwa funktionieren nur zuverlässig, wenn sie von Grund auf sicher sind. Das Kundenvertrauen kann durch nachweislich existente Sicherheitsmaßnahmen gestärkt werden. Cybersicherheit ist so notwendig wie das Qualitätsmanagement. Laut dem Digitalverband Bitkom entstehen der deutschen Wirtschaft jährlich Schäden von rund 230 Milliarden Euro durch Cyberangriffe. Nicht nur Universitäten oder Politiker werde dadurch getroffen, sondern sogar kritische Infrastrukturen wie die Strom- oder Wasserversorgung, Krankenhäuser oder Kommunikationssysteme. Private Unterneh­men aller Größen sind in letzter Zeit verstärkt zur Zielscheibe von Cyberattacken ge­worden, die beträchtlichen Schaden anrichten und auch die Existenz bedrohen kön­nen. Beispiele sind gestohlene Kundendaten oder Innovationen, gefälschte E-Mails vom CEO mit der Aufforderung, Geld auf Auslandskonten zu überweisen, oder die Blo­ckade der Produktionsanlagen mit anschließender Erpressung. Am häufigsten greifen die Cyberkriminellen Unternehmen mit sogenannter Ransomware an, um so Lösegeld zu erpressen.</p>
              </div>
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Qualitätsmanagement in der fertigenden Industrie mithilfe von Radiofrequenz-Identifikation</h3>
                    <p className="text-gray-500 mt-1">GRIN, 2021</p>
                  </div>
                  <a 
                    href="https://www.grin.com/document/1264682" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">Unternehmen agieren im globalen Wettbewerbsmarkt. Um sich gegenüber vergleichbaren Produkten der Konkurrenz durchzusetzen, müssen die Merkmale eines Produkts den Ansprüchen eines Kunden gerecht werden. Damit das Produkt eines Unternehmens in einem Rahmen erzielt wird, welcher sowohl Zeit, Kosten als auch Qualität beachtet, benötigt ein Unternehmen eine Überwachung und Verbesserung der Produktionsprozesse. Die Qualitätskontrolle kann durch Mitarbeiter oder durch Automation erfolgen. Auf den folgenden Seiten wird erläutert, wie RFID-Systeme in der fertigenden Industrie genutzt werden können, um qualitative Produkte zu erzielen.</p>
              </div>
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Wie werden mithilfe eines Siebensegment-Dekodierers digitale Zahlen als Dezimalzahlen auf einer Siebensegment-Anzeige dargestellt?</h3>
                    <p className="text-gray-500 mt-1">GRIN, 2021</p>
                  </div>
                  <a 
                    href="https://www.grin.com/document/1264678" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">Schon Anfang des letzten Jahrhunderts wurden Nachrichten über lange Distanzen mit elektrischen Signalen übertragen. Das manuelle Übersetzen der Nachrichten in verschiedenste Kombinationen aus kurzen und langen Signalen, wie auch das Auslesen dieser in reinen Text dauerte jedoch sehr lange. Daher gab es Ansätze, um die Morsezeichen direkt als alphanumerische Zeichen darzustellen.
Die Darstellung von Informationen zur Warnung von Mitarbeitern in der Industrie und Logistik oder zur Mitteilung von sich ändernden Preisen und Handlungsanweisungen sind eine nützliche Anwendung für jeden Betrieb, innerhalb eines Gebäudes oder auf einem öffentlichen Platz. Digitale Anzeigen sind heutzutage kostengünstig, mitunter wegen der weiten Verbreitung von LED, welche in unterschiedlichsten Farben und Licht- stärken verfügbar sind. Gegenüber Plakatwerbung und statischen Zeichen ist es möglich, mit Bildern, Animationen wie auch Videos die Aufmerksamkeit auf eine Botschaft zu richten. Im alltäglichen Gebrauch sind Anzeigen bei Radioweckern, Armbanduhren und Taschenrechnern zu finden oder um Temperaturen am Ofen, die verbleibende Laufzeit bei einer Waschmaschine oder die Preise an der Tankstelle anzuzeigen.</p>
              </div>
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Analyse großer industrieller Datensätze. Wie werden große Datensätze in der fertigenden Industrie analysiert und verwertet?</h3>
                    <p className="text-gray-500 mt-1">GRIN, 2021</p>
                  </div>
                  <a 
                    href="https://www.grin.com/document/1264676" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">Innovative Technologien haben dem Menschen erst durch Wasserdampf, dann mithilfe von Elektrizität routinierte, mechanische Arbeiten abgenommen. Die Digitaltechnik er­möglicht zudem eine Verarbeitung von Informationen, um Betriebsprozesse fortlaufend zu optimieren und neu zu erfinden. Zusammen mit sensibler Sensorik können auch Fertigungsanlagen und deren Wartungsprüfung automatisiert werden und während ei­ner laufenden Produktion Fehler vermieden werden, was zu einer höheren Qualität der Produkte führt. Statt handwerkliche Arbeiten durchzuführen, erhält der Mensch da­durch neue Aufgabengebiete bei der Kontrolle, Steuerung, Überwachung und Verbes­serung von Maschinen. Unternehmen nutzen in industriellen Fertigungsanlagen ver­schiedenste automatisierte Lösungen von mehreren Herstellern. In einer Wertschöp­fungskette entstehen in der Logistik eines speziellen Bauteils eines Zulieferers Daten über den Status der derzeitigen Position, durch Prüfungen auf Unversehrtheit und der vollständigen Zahlung der Transaktion. Das empfangende Unternehmen kann wieder­um ein Zulieferer eines weiteren Unternehmens oder Konsortiums sein. Falls die anfal­lenden Daten von Maschinen unterschiedlichster Hersteller und die Transaktionsdaten von einem Unternehmenszusammenschluss nicht durch standardisierte Schnittstellen, Formate, Sprache und Maßeinheiten gleichgeschaltet sind, entsteht eine Barriere. Die­se muss mit zusätzlichem Aufwand und Investitionen aller beteiligten Unternehmen überwunden werden, um zeitnahe und aussagekräftige Rückschlüsse über den Zu­stand einer Produktionsanlage und der entsprechenden Logistik treffen zu können. Mit modernsten Technologien der elektronischen Datenverarbeitung können akkurate Aus­sagen über zukünftige Zustände erschlossen werden, sodass Steuerungskomponente Anpassungen der Produktionsumgebungen selbst übernehmen.</p>
              </div>
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Die Bestimmung der Elementarladung</h3>
                    <p className="text-gray-500 mt-1">GRIN, 2021</p>
                  </div>
                  <a 
                    href="https://www.grin.com/document/1336653" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">Elektrizität ist im Alltag allgegenwärtig − jeder Haushalt erhält regelmäßig eine Stromrechnung. Die dort in Rechnung gestellte "Ware" ist jedoch nicht der elektrische Strom, sondern die gelieferte elektrische Energie, die zum Beleuchten, Heizen, Kühlen oder für mechanische Arbeiten genutzt wurde. Wenn von elektrischem Strom gesprochen wird, ist im Allgemeinen die Stärke dieses Stromes gemeint, also die physikalische Größe elektrischer Stromstärke. Diese ist definiert als die Menge an elektrischer Ladung, die pro Zeitintervall durch den Querschnitt eines elektrischen Leiters fließt, geteilt durch die Länge des Zeitintervalls.</p>
              </div>
              <div>
                <div className="group relative flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Die Monopolstellung von FlixBus im Markt für Personenverkehr</h3>
                    <p className="text-gray-500 mt-1">GRIN, 2020</p>
                  </div>
                  <a 
                    href="https://www.grin.com/document/1264671" 
                    className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="External link to publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">Anhand des Segments im Markt für Personenverkehr wird aufgezeigt, wie das Unternehmen FlixBus sich im Markt fur Fernbusreisen etabliert hat. Dies wird dadurch gestützt, dass die Geschichte des Personenbeforderungsgesetz aufgeführt wird und wie verschiedene Unternehmen, welche später von FlixBus akquiriert wurden, diesen Markt ausgebaut und bedient haben. Weiter wird auch darauf ein- gegangen, wie sich FlixBus durch Markenbekanntheit und Qualität bei der Buchung und der Fahrt als Marktführer durchgesetzt hat und welche Preiselastizität in der Nachfrage fur Fahrscheine vorherrscht und wie diese die Erlöse beeinflusst. Zum Schluss wird diskutiert, wie die Bundesregierung von Deutschland bei einer Monopolbildung reagiert und wie sich diese Situation auf europäischer Ebene verhält.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
