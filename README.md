# कानूनसाथी | KanoonSaathi — Sovereign Citizen Legal Aid Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.4.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?logo=react)](https://react.dev/)
[![Language Support](https://img.shields.io/badge/Bilingual-English%20%7C%20%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%80-orange)](#bilingual-support)
[![Mandate](https://img.shields.io/badge/Constitutional%20Mandate-Article%2039A-gold)](https://en.wikipedia.org/wiki/Directive_Principles#Article_39A)

**KanoonSaathi (कानूनसाथी)** is a civic-tech web application built with **Next.js (App Router)** and **React 19**. It operationalizes the constitutional guarantee of **Article 39A of the Constitution of India**—which directs the State to provide free legal aid and ensure that justice is not denied to any citizen due to economic or other disabilities.

The platform provides a bilingual (English & Hindi) interface connecting citizens with judicial complexes, legal aid authorities, step-by-step litigation process roadmaps, AI-guided legal situation triage, and a statutory Right to Information (RTI) petition crafter.

---

## Table of Contents

- [1. Project Overview](#1-project-overview)
- [2. Implemented Features](#2-implemented-features)
- [3. Technology Stack](#3-technology-stack)
- [4. Project Architecture & Directory Structure](#4-project-architecture--directory-structure)
- [5. Prerequisites](#5-prerequisites)
- [6. Setup & Installation](#6-setup--installation)
- [7. Available Scripts](#7-available-scripts)
- [8. Environment Variables](#8-environment-variables)
- [9. Frontend Architecture & Routing](#9-frontend-architecture--routing)
- [10. Backend & Database Status](#10-backend--database-status)
- [11. Testing & Build Verification](#11-testing--build-verification)
- [12. Git & Collaboration Workflow](#12-git--collaboration-workflow)
- [13. Common Troubleshooting](#13-common-troubleshooting)
- [14. Implementation Status, Known Limitations & Roadmap](#14-implementation-status-known-limitations--roadmap)
- [15. License & Contributions](#15-license--contributions)

---

## 1. Project Overview

In the Indian legal system, navigating civil disputes, criminal trials, and statutory rights often presents high barriers for citizens. KanoonSaathi addresses this by providing:

1. **Constitutional Literacy**: Transparent, structured procedural breakdowns for Civil suits (CPC 1908) and Criminal trials (BNSS 2023 / CrPC).
2. **Access to Justice**: Direct lookup of National Legal Services Authority (NALSA) and District Legal Services Authority (DLSA) clinics offering 100% free court representation under Section 12 of the Legal Services Authorities Act, 1987.
3. **Judicial Transparency**: A verified court directory with real-world judicial complex photos, GPS proximity sliders, sitting hours, registry contacts, and vector/satellite map visualizations.
4. **Bilingual Accessibility**: Instant one-click toggle between English and Hindi across the entire platform.

---

## 2. Implemented Features

Every feature listed below is verified and actively functional in the application:

### 🌐 Bilingual Language Switcher (English / हिन्दी)
- Located in the global navigation bar (desktop & mobile drawer).
- Dynamic translation driven by `LanguageContext` with persistence in browser `localStorage` (`kanoonsaathi_lang`).
- Features a dual-symbol interactive button: universal globe icon (`language`), current language label (`हिन्दी` / `English`), and an exchange arrow (`swap_horiz`).
- Full bilingual coverage across navigation links, action buttons, portal forms, court listings, metrics, and procedural guides.

### 🏛️ Interactive "Find a Court" Directory (`/find-court`)
- Search by court name, district, or pin code.
- Filter by jurisdiction level: **Apex Court**, **High Courts**, **District Courts**, and **Tribunals**.
- **Interactive Map Canvas**: Toggle between vector map and satellite view with clickable court pins, live radar proximity slider (1 km to 50 km radius), and coordinate readouts.
- **Authentic Indian Court Photography**: High-resolution imagery of the Supreme Court of India, High Court of Delhi, Patiala House Courts Complex, and Tis Hazari Courts Complex.
- **Court Details**: Sitting hours, active bench counts, e-filing counters, registry phone numbers, and direct "Get Directions via Google Maps" external navigation.

### 🔐 Sovereign Citizen Authentication Portal (`/`)
- Four interactive tabbed authentication workflows:
  1. **Login Flow**: Email or 10-digit mobile number, password, remember device checkbox.
  2. **Citizen Sign Up**: Full name, mobile number, OTP confirmation.
  3. **OTP Verification**: 6-digit Aadhaar / DigiLocker verification code input.
  4. **Reset Password**: Identity verification and credential reset.
- Constitutional quotes and live metric stats (14,200+ Litigants Aided, 18 Courts Mapped, 100% Free Access).

### 📊 Citizen Legal Workspace (`/workspace`)
- Personal command center displaying active legal proceedings and bookmarked judicial complexes.
- Real-time metric cards: Active Legal Actions, Next Court Hearing alert, Saved Court Complexes, and RTI Filings counter.
- Complex directory tabs: filter between "All Complexes" and "With Active Hearings".
- Quick-action shortcuts to Bookmark Courts, Draft RTI, and access Cause Vault.

### ⚖️ Step-by-Step Court Process Roadmap (`/court-process`)
- Interactive dual-track procedural roadmap:
  - **Civil Suit Track (CPC 1908)**: 7 stages from Pre-Litigation Statutory Notice (Sec 80 CPC) to Plaint e-Filing, Summons Service, Written Statement (Order VIII), Issue Framing (Order XIV), Evidence & Cross-Examination (Order XVIII), and Final Judgment/Decree (Order XX).
  - **Criminal Trial Track (BNSS 2023 / CrPC)**: 6 stages from FIR Registration (Sec 173 BNSS) to Investigation/Bail, Chargesheet, Framing of Charges, Trial/Evidence, and Judgment Pronouncement.
- Deep-dive panel for each stage with governing provisions, statutory timeline windows, procedural explanations, and mandatory document checklists.

### 🧠 Legal Situation Analysis & Triage (`/situation-analysis`)
- AI-guided constitutional triage mapping user grievances:
  - **6 Dispute Categories**: Property & Tenancy, Cheque Bounce (Sec 138 NI Act), Consumer Grievances, Family & Matrimonial, Cyber Crime / Financial Fraud, and Criminal Defense.
  - Incident narrative input and date selector.
  - Urgency & severity classification (Normal, Urgent, Emergency).
- Generates an immediate Statutory Assessment Dossier detailing applicable statutes (e.g., Specific Relief Act, Transfer of Property Act, BNS), appropriate court forum, limitation periods, interim relief options (Order 39 Injunctions), and immediate recommended legal actions.

### 📝 Statutory RTI Crafter (`/rti`)
- Section 6(1) Right to Information Act 2005 petition builder.
- Target public authorities: MCD Building Dept, DDA Land Allotment, Delhi Police Vigilance, Revenue Dept, and Delhi High Court PIO.
- Applicant details, Below Poverty Line (BPL) fee exemption toggle (Proviso to Sec 7(5)).
- Dynamic query list: add and delete numbered specific questions.
- **Live Form-A Canvas**: Real-time printable preview of the statutory RTI document with formatted header, authority designation, query schedule, fee details, and signature section.
- Print draft button (`window.print()`) and save-to-vault action.

### 📂 Cryptographic Cause Vault (`/cause-vault`)
- Case document manager simulating 256-bit cryptographic storage and DigiLocker integration.
- Document categories: Pleadings & Plaints, Vakalatnamas, Order Sheets, Statutory Notices, and RTI Petitions.
- Displays file sizes, SHA-256 integrity hash seals, certification badges, and storage usage gauges.

### 📁 Legal Case Dossier (`/dossier`)
- Master litigation file view for ongoing disputes (e.g., *Sharma v. Goel & Ors., CS 482/2024*).
- Certified Case Number (CNR: `DLND01-004821-2024`), presiding judge, court hall, and upcoming cross-examination schedule.
- Chronological litigation timeline from Agreement to Sell to Cross-Examination (PW-1).
- Admitted judicial exhibits roster (Mark P-1 through Mark P-5) with evidence classification.

### 🤝 NALSA Free Legal Aid Locator (`/nalsa-locator`)
- Statutory locator for Delhi State Legal Services Authority (DSLSA), New Delhi DLSA (Patiala House), and Central DLSA (Tis Hazari).
- **Section 12 Eligibility Calculator**: Evaluates statutory criteria (Women/Children, SC/ST, Annual Income < ₹3,00,000, Persons in Custody).
- Displays front office contacts, 24x7 toll-free helpline (**15100**), officer-in-charge details, and pro bono service listings.

### 🏥 Pro Bono Community Legal Clinics (`/legal-aid`)
- Filterable directory of community paralegal clinics: General Litigation, Women & Domestic Violence (One Stop Centre), Labour & Wage Disputes, and Senior Citizens Welfare.
- Front desk contact numbers, timing schedules, and paralegal volunteer endorsements.

### 🆔 Citizen Authentication & Verification Suite (`/verify`)
- Multi-step credential attestation interface:
  - Step 1: Aadhaar e-KYC (DigiLocker Integration token verification).
  - Step 2: Bar Council of Delhi Enrollment / Litigant credential check.
  - Step 3: Level-3 Sovereign Cryptographic Assurance badge.

### 📱 Mobile Citizen Legal Aid Suite (`/mobile-suite`)
- Touch-friendly quick-notice generator, NJDG hearing push alert preview, and one-touch Tele-Law emergency dialer.

---

## 3. Technology Stack

| Layer | Technology | Version | Purpose in Codebase |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | `^16.4.0` | App Router architecture, server-side rendering, client component interactivity, and Turbopack dev server. |
| **UI Library** | [React](https://react.dev/) | `^19.3.0` | Declarative component hierarchy, state hooks (`useState`, `useEffect`, `useContext`). |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | CDN (v3 script) | Dynamic responsive styling with custom Material Design tokens defined in `layout.jsx`. |
| **Global Styles** | Vanilla CSS | Custom | Custom parchment/navy design tokens, scrollbars, and card elevations in `globals.css`. |
| **State / i18n** | React Context API | Native React | `LanguageContext` managing bilingual English/Hindi translations and localStorage persistence. |
| **Icons** | Google Material Symbols | Web Font | Judicial, navigation, and procedural iconography (`Material Symbols Outlined`). |
| **Typography** | Google Fonts | Web Font | `Playfair Display` (serif for judicial headings) and `Plus Jakarta Sans` (sans-serif for interface text). |
| **Runtime** | Node.js | `>= 18.0.0` | JavaScript runtime environment executing Next.js and scripts. |

---

## 4. Project Architecture & Directory Structure

```
stitch_kanoonsaathi_legal_aid_platform/
├── .env.example                     # Environment variables template (safe defaults)
├── package.json                     # Monorepo / root package.json routing commands to frontend
├── README.md                        # Project documentation (this file)
└── frontend/                        # Main Next.js web application
    ├── AGENTS.md                    # Next.js agent build rules
    ├── index.html                   # Static HTML entry fallback
    ├── jsconfig.json                # JavaScript configuration with path alias support (@/*)
    ├── package.json                 # Frontend dependencies (Next 16, React 19) and scripts
    ├── package-lock.json            # Lockfile for frontend npm dependencies
    ├── server.js                    # Legacy standalone Node.js HTTP static server
    ├── app/                         # Next.js App Router (pages and layouts)
    │   ├── layout.jsx               # Root layout: font loading, Tailwind tokens, LanguageProvider
    │   ├── globals.css              # CSS root variables, card styling, and typography
    │   ├── page.jsx                 # Route: / (Sovereign Citizen Portal & Auth Flows)
    │   ├── context/
    │   │   └── LanguageContext.jsx  # Re-export helper for sub-routes
    │   ├── cause-vault/
    │   │   └── page.jsx             # Route: /cause-vault (Cryptographic Case Document Locker)
    │   ├── court-process/
    │   │   └── page.jsx             # Route: /court-process (Civil CPC & Criminal BNSS Roadmaps)
    │   ├── dossier/
    │   │   └── page.jsx             # Route: /dossier (Litigation Timeline & Admitted Exhibits)
    │   ├── find-court/
    │   │   └── page.jsx             # Route: /find-court (Court Directory & Interactive Map)
    │   ├── legal-aid/
    │   │   └── page.jsx             # Route: /legal-aid (Community Pro Bono Clinics)
    │   ├── mobile-suite/
    │   │   └── page.jsx             # Route: /mobile-suite (Mobile-Optimized Notice Suite)
    │   ├── nalsa-locator/
    │   │   └── page.jsx             # Route: /nalsa-locator (NALSA/DLSA Section 12 Calculator)
    │   ├── rti/
    │   │   └── page.jsx             # Route: /rti (Statutory Section 6(1) Form-A Crafter)
    │   ├── situation-analysis/
    │   │   └── page.jsx             # Route: /situation-analysis (AI Legal Triage & Assessment)
    │   ├── verify/
    │   │   └── page.jsx             # Route: /verify (Citizen & Bar Credential Attestation)
    │   └── workspace/
    │       └── page.jsx             # Route: /workspace (Litigant Workspace & Docket Alerts)
    ├── components/                  # Global shared UI components
    │   ├── Navbar.jsx               # Navigation bar with branding, routes, and language switcher
    │   └── Footer.jsx               # Footer with Article 39A citation, links, and helpline
    ├── context/                     # Global state providers
    │   └── LanguageContext.jsx      # Bilingual translation dictionaries (en, hi) and hook
    ├── kanoonsaathi/
    │   └── DESIGN.md                # Design system token specifications (colors, typography)
    └── public/                      # Static assets and reference resources
        └── images/                  # Authentic judicial complex photography
            ├── delhi_high_court.jpg      # High Court of Delhi building photograph
            ├── patiala_house_court.jpg   # Patiala House District Courts Complex photograph
            ├── supreme_court.jpg         # Supreme Court of India building photograph
            └── tis_hazari_court.jpg      # Tis Hazari District Courts Complex photograph
```

---

## 5. Prerequisites

Before installing and running the project, verify that your environment satisfies:

- **Node.js**: `v18.18.0` or higher (Node 20+ recommended). Check with `node -v`.
- **npm**: `v9.0.0` or higher (included with Node.js). Check with `npm -v`.
- **Operating System**: Cross-platform (Windows, macOS, or Linux).

---

## 6. Setup & Installation

Follow these step-by-step instructions to set up the repository locally:

### Step 1: Clone or Navigate to the Workspace
```bash
# If cloned via Git:
git clone <repository-url>
cd stitch_kanoonsaathi_legal_aid_platform
```

### Step 2: Install Dependencies
Install all required packages for the frontend workspace:
```bash
# From the project root:
npm install --prefix frontend

# OR navigate to the frontend folder:
cd frontend
npm install
cd ..
```

### Step 3: Run the Development Server
You can launch the development server directly from the root directory:
```bash
# From the project root:
npm run dev
```

The Next.js Turbopack development server will compile and start.
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 7. Available Scripts

The repository includes scripts configured at both the root level and inside `frontend/package.json`:

### Running from Project Root

| Command | Action |
| :--- | :--- |
| `npm run dev` | Executes `npm --prefix frontend run dev` to start the Next.js development server on `http://localhost:3000`. |
| `npm run build` | Executes `npm --prefix frontend run build` to generate an optimized production bundle. |
| `npm run start` | Executes `npm --prefix frontend run start` to serve the production build. |
| `npm run lint` | Executes `npm --prefix frontend run lint` to run Next.js ESLint checks. |

### Running from `frontend/` Directory

```bash
cd frontend

npm run dev    # Starts next dev (Turbopack)
npm run build  # Builds production Next.js application
npm run start  # Starts Next.js production server
npm run lint   # Runs ESLint checks
```

### Alternative: Standalone Static Server (Legacy)
The project also includes a standalone Node.js HTTP static server in `frontend/server.js`:
```bash
node frontend/server.js
```
*Note: This server is intended for serving static HTML/assets and does not provide Next.js server-side features.*

---

## 8. Environment Variables

At present, **no environment variables are required** to run the development server. The frontend operates with client-side state and mock data.

A template [`.env.example`](file:///.env.example) has been created at the project root for future configuration:

```env
# Application Server Configuration
PORT=3000
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Upcoming DigiLocker & Aadhaar e-KYC Integration (TODO)
# DIGILOCKER_CLIENT_ID=your_digilocker_client_id_here
# DIGILOCKER_CLIENT_SECRET=your_digilocker_client_secret_here

# Optional: Upcoming Database & Backend API Integration (TODO)
# DATABASE_URL=postgresql://user:password@localhost:5432/kanoonsaathi
# NEXTAUTH_SECRET=your_nextauth_secret_key_here
```

### Setup Instructions (When using `.env.local`):
1. Copy `.env.example` to `frontend/.env.local`:
   ```bash
   cp .env.example frontend/.env.local
   ```
2. Modify variables as needed. **Never commit `.env.local` to version control.**

---

## 9. Frontend Architecture & Routing

### Routing Table

All routes use the Next.js App Router and are located under `frontend/app/`:

| Route Path | Page Component | Feature Description |
| :--- | :--- | :--- |
| `/` | `frontend/app/page.jsx` | Sovereign Citizen Portal: Login, Citizen Signup, OTP verification, Password Reset. |
| `/workspace` | `frontend/app/workspace/page.jsx` | Litigant Workspace: Hearing schedules, docket metrics, bookmarked court cards. |
| `/find-court` | `frontend/app/find-court/page.jsx` | Find a Court: Proximity radar, interactive vector/satellite map, court photography, Google Maps links. |
| `/court-process` | `frontend/app/court-process/page.jsx` | Court Process: Civil CPC & Criminal BNSS litigation stages with document checklists. |
| `/situation-analysis` | `frontend/app/situation-analysis/page.jsx` | Legal Triage: 6 dispute categories, limitation checks, statutory section mapping. |
| `/rti` | `frontend/app/rti/page.jsx` | RTI Crafter: Section 6(1) Form-A generator, BPL exemption, live printable canvas. |
| `/cause-vault` | `frontend/app/cause-vault/page.jsx` | Cause Vault: Encrypted case document locker with SHA-256 integrity simulation. |
| `/dossier` | `frontend/app/dossier/page.jsx` | Case Dossier: Chronological litigation timeline and admitted evidence exhibits. |
| `/nalsa-locator` | `frontend/app/nalsa-locator/page.jsx` | NALSA Locator: Section 12 eligibility calculator and DLSA Front Office directory. |
| `/legal-aid` | `frontend/app/legal-aid/page.jsx` | Pro Bono Clinics: Legal defense clinics, women's support centers, Tele-Law hotline (15100). |
| `/verify` | `frontend/app/verify/page.jsx` | Citizen Verification: DigiLocker e-KYC and Bar Council credential status. |
| `/mobile-suite` | `frontend/app/mobile-suite/page.jsx` | Mobile Legal Aid Suite: Quick notice generator and hearing alert summary. |

### Global Layout & Components
- **Navbar (`frontend/components/Navbar.jsx`)**: Responsive navigation with constitutional brand identity, route links, free aid CTA, and the bilingual toggle button. Includes mobile hamburger drawer.
- **Footer (`frontend/components/Footer.jsx`)**: Article 39A constitutional citation, links to tools, and national Tele-Law helpline details.
- **LanguageContext (`frontend/context/LanguageContext.jsx`)**: Provides `language` (`'en'` or `'hi'`), `isHindi` boolean, `toggleLanguage()`, `setLanguage()`, and translation helper `t(key)`.

### Design System & Styling
- The visual style implements the tokens from [`frontend/kanoonsaathi/DESIGN.md`](file:///frontend/kanoonsaathi/DESIGN.md):
  - **Parchment Surface**: `#fef9f0` (background simulating official paper).
  - **Judicial Navy**: `#04122e` (primary brand color).
  - **Sovereign Saffron**: `#a23f00` (secondary accent color).
  - **Judicial Gold**: `#cfa85e` (tertiary accent color).
  - **Headings Font**: `Playfair Display` (formal serif).
  - **Interface Font**: `Plus Jakarta Sans` (clean sans-serif).
  - **Icons**: Google Material Symbols Outlined.

---

## 10. Backend & Database Status

Based on direct inspection of the codebase:

| Component | Current Implementation Status | Notes |
| :--- | :--- | :--- |
| **Backend API Endpoints** | **Not implemented (TODO)** | No `app/api/` or backend route handlers exist. Pages use client-side React state. |
| **Database Models / ORM** | **Not implemented (TODO)** | No Prisma, Mongoose, or SQL migrations exist. Mock datasets are embedded in component state. |
| **Authentication Server** | **Not implemented (TODO)** | The login/signup tabs in `/` provide UI form flows; real backend credential validation is planned. |
| **External API Integrations** | **Client Mock (TODO)** | Tele-Law 15100 uses native `tel:` protocol; Google Maps navigation uses standard external URLs. |

---

## 11. Testing & Build Verification

### Automated Tests
- **Status**: No automated testing frameworks (e.g., Jest, Vitest, Playwright) are currently installed in `package.json`.
- **Status Tag**: `TODO: Add automated unit and end-to-end test suites`.

### Manual Route Verification
To verify that all Next.js routes compile and serve successfully (HTTP 200 OK), run this Node.js verification script while the development server is active:

```bash
node -e "
const routes = ['/', '/workspace', '/find-court', '/court-process', '/situation-analysis', '/rti', '/cause-vault', '/dossier', '/nalsa-locator', '/legal-aid', '/verify', '/mobile-suite'];
Promise.all(routes.map(async (r) => {
  try {
    const res = await fetch('http://localhost:3000' + r);
    console.log(r, '->', res.status);
  } catch (err) {
    console.log(r, '-> ERROR', err.message);
  }
}));
"
```

Expected output: All 12 routes return `200`.

### Production Build Validation
To validate production compilation:
```bash
npm run build
```

---

## 12. Git & Collaboration Workflow

### Version Control Setup
*Note: The project root does not currently have a `.git` folder initialized.* If you are setting up version control:

```bash
git init
git add .
git commit -m "feat: initial commit of KanoonSaathi Next.js legal aid platform"
```

### Recommended Team Conventions

#### Branch Naming
- `feature/<feature-name>`: New user-facing capabilities (e.g., `feature/aadhaar-kyc`).
- `fix/<bug-description>`: Bug fixes (e.g., `fix/court-map-coords`).
- `docs/<doc-topic>`: Documentation updates (e.g., `docs/api-specs`).
- `refactor/<scope>`: Code restructuring without feature changes.

#### Commit Messages (Conventional Commits)
```
feat(rti): add section 8 exemption warnings to form-a
fix(navbar): resolve mobile drawer layout overflow
docs(readme): add detailed setup and architecture guide
style(find-court): align map pins with coordinate grid
```

#### Pull Request (PR) Checklist
1. Verify that `npm run build` passes with zero errors.
2. Confirm that both English and Hindi translations are provided for any newly added text.
3. Test layout responsiveness across mobile (375px), tablet (768px), and desktop (1280px).
4. Ensure no secret keys or personal credentials are committed.

---

## 13. Common Troubleshooting

### 1. `Port 3000 is in use`
**Symptom**: `Another next dev server is already running` or `Port 3000 in use`.  
**Resolution**:
- **Windows (PowerShell)**:
  ```powershell
  Get-Process -Name node | Stop-Process -Force
  ```
- **macOS / Linux**:
  ```bash
  kill -9 $(lsof -ti :3000)
  ```
- Alternatively, launch Next.js on an alternate port:
  ```bash
  npm --prefix frontend run dev -- -p 3001
  ```

### 2. Module Resolution Errors (`Can't resolve '../context/LanguageContext'`)
**Symptom**: `Module not found` when importing `LanguageContext` from nested sub-routes.  
**Resolution**:
- `frontend/jsconfig.json` is configured with path aliases (`@/*`).
- Always use the absolute alias import:
  ```javascript
  import { useLanguage } from '@/context/LanguageContext';
  ```
- Or use the root-level re-export at `frontend/app/context/LanguageContext.jsx`.

### 3. Tailwind CSS CDN Not Applying Offline
**Symptom**: Styles appear unformatted when operating without an active internet connection.  
**Resolution**: The project currently loads Tailwind CSS via the official CDN script in `frontend/app/layout.jsx`. Ensure an active internet connection or compile Tailwind locally using a PostCSS build pipeline (planned for production).

---

## 14. Implementation Status, Known Limitations & Roadmap

### Current Status
- ✅ Complete responsive frontend application covering all 12 core user views.
- ✅ Full bilingual English/Hindi localization with persistent state.
- ✅ Interactive map canvas with Indian court photos and GPS distance slider.
- ✅ Printable statutory RTI Form-A petition builder.
- ✅ Civil & Criminal litigation procedural stage roadmaps.

### Known Limitations
- State is currently in-memory and ephemeral (reset upon page refresh, except language setting stored in `localStorage`).
- Authentication flows are UI demonstrations without backend session management or JWT cookies.
- Cause Vault file uploads are simulated without actual AWS S3 or Blob storage integration.
- Map view uses an interactive custom canvas simulation; Leaflet/Google Maps API integration is optional for production.

### Development Roadmap (TODOs)
- [ ] **Backend Services**: Build Next.js Route Handlers (`app/api/`) or a dedicated backend service for database persistence.
- [ ] **Database Integration**: Integrate PostgreSQL with Prisma ORM for storing case dockets, user profiles, and saved courts.
- [ ] **Official DigiLocker API**: Connect sandbox DigiLocker OAuth for verified citizen identity attestation.
- [ ] **NJDG API**: Integrate National Judicial Data Grid APIs for real-time case status and cause list scraping.
- [ ] **Automated Testing**: Implement Vitest / React Testing Library component tests and Playwright E2E tests.
- [ ] **Offline PWA**: Add Service Worker support for rural and low-bandwidth accessibility.

---

## 15. License & Contributions

### License
*Status: No license file currently exists in the repository.*  
Before distributing or open-sourcing, add an appropriate license (e.g., [MIT License](https://opensource.org/licenses/MIT) or [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)) via a `LICENSE` file at the project root.

### Contributions
1. Fork or branch from `main`.
2. Create your feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes following conventional commit syntax.
4. Ensure `npm run build` succeeds.
5. Submit a Pull Request with a clear description of changes.

---

*Developed for equal justice under law • Article 39A, Constitution of India*
