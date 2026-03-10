# 📄 Interactive Portfolio & Digital CV
**[sinowski.de](https://sinowski.de)** | **Repository:** `lemonproof/lebenslauf`

[![Website Live](https://img.shields.io/badge/Website-sinowski.de-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://sinowski.de)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Constantin_Sinowski-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/constantinsinowski)
[![Status](https://img.shields.io/badge/Status-Production-10b981?style=for-the-badge)](#)

This repository contains the source code for the personal portfolio and interactive digital resume of **Constantin Sinowski**. The architecture is designed to combine technical precision in **Business Engineering, Data Analytics & AI** with a highly readable, professional, and print-ready web design.

---

## 🚀 Core Architecture & Features

The UI/UX is built on a strict, document-first philosophy, ensuring the site functions flawlessly both as a web application and as an exported PDF document.

* **50% Focus Layout:** The main content column is strictly constrained to `max-width: 800px`. This mimics the optimal reading width of a physical document and prevents eye strain on ultra-wide monitors.
* **Semantic 75/25 Grid:** A rigid flexbox layout used for all career and education entries. $75\%$ of the width is dedicated to the role and description, while $25\%$ is reserved for right-aligned, vertically stable dates (`font-variant-numeric: tabular-nums`).
* **Glassmorphism Sidebar:** A fixed `320px` left sidebar with backdrop-blur effects acting as a permanent anchor for contact details, personal data, and a direct Calendly booking widget.
* **Floating Navigation:** A context-sensitive, sticky right-hand navigation menu for quick access to specific sections (Desktop only).
* **Print-to-PDF Optimized:** Custom `@media print` CSS rules automatically hide the navigation, sidebar, and interactive iframes, stripping the page down to a clean, ATS-friendly printable resume.

---

## 📂 Project Structure

The project follows a modular, static-site architecture based on the **Separation of Concerns** principle.

```text
lebenslauf/
├── index.html              # Main HTML5 semantic structure
├── css/
│   └── style.css           # Consolidated styling (Layout, Icons, Print, Variables)
├── js/
│   └── main.js             # ScrollSpy logic & UI interaction states
├── json/
│   └── experiences.json    
│   └── certifications.json 
│   └── publications.json   # structured lists of content
├── assets/
│   ├── img/                # Profile pictures, media, and icons
│   └── docs/               # Downloadable PDF versions of the CV
├── plan.md                 # Architectural decision records (ADR)
└── README.md               # This documentation file
```
```text
git remote origin https://github.com/lemonproof/lebenslauf
git switch stable_features
git add .
git commit -m "chore: update experience section and optimize iframe constraints"
git push origin main
```
