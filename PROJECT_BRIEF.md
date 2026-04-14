# Shouting Parents - Comprehensive Project Brief & Feature Report

> **Project Name:** Remix: Shouting Parents (veritynow.ai)
> **Description:** A neutral co-parenting incident tracker powered by AI to help divorced or separated parents log, analyze, and resolve co-parenting conflicts through a Biblical peacemaking lens.
> **AI Studio URL:** https://ai.studio/apps/f4d21f1c-c011-4429-9df6-d54cb4154372

---

## 1. Project Overview

**Shouting Parents** is a full-stack React Progressive Web Application (PWA) designed for divorced or separated co-parents. It uses Google's Gemini AI to serve as a "Biblical Peacemaking Assistant," helping users:

- **Document** co-parenting incidents in a neutral, court-ready format
- **Analyze** behavioral patterns and communication dynamics
- **Generate** legal documents, motions, and evidence packages
- **Communicate** with their co-parent through an in-app messaging system with AI auto-reply
- **Receive** spiritual guidance and scripture-based conflict resolution

The app is Indiana law-focused but generalizable. It stores all data remotely via a Google Apps Script backend (no local storage of user data) and supports offline operation with sync-on-reconnect.

---

## 2. Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, TypeScript, Vite 6 |
| **UI/Styling** | Tailwind CSS (utility classes visible in components) |
| **AI Engine** | Google Gemini 2.5 Flash (`@google/genai`) |
| **Charts** | Recharts 2.13 |
| **Markdown** | react-markdown 10 |
| **Backend** | Google Apps Script (`backend/Code.gs`) |
| **Deployment** | Vercel (configured via `vercel.json`) |
| **PWA** | Service Worker support built-in |

---

## 3. Complete Feature List

### 3.1 Authentication & User Management
| Feature | Description |
|---------|-------------|
| **Login / Signup** | Username/password authentication via Google Apps Script backend |
| **Co-Parent Linking** | Accounts can be linked via `linkedUserId` to enable direct messaging between parents |
| **User Profile Setup** | On first login, users set up their profile (name, role as Mother/Father, children's names, cause number, court info) |
| **Logout** | Clears all in-memory data; no persistent local session |

### 3.2 Dashboard
| Feature | Description |
|---------|-------------|
| **Welcome Banner** | Personalized greeting with scripture quote |
| **Stats Cards** | Total logs, monthly incidents, communication conflicts, recent activity (7-day) |
| **Trend Indicators** | Visual "Elevated" / "Decreased" badges for incident trends |
| **Quick Actions** | "Log a Conflict" and "View Restoration Log" action cards |
| **Recent Logs Preview** | Shows last 3 incident reports with quick "Heart Inspection" (analysis) and "Details" buttons |

### 3.3 Incident Logging (ChatInterface)
| Feature | Description |
|---------|-------------|
| **Standard Form Mode** | Structured form with date/time, category, people involved, description, impact, and evidence upload |
| **AI Interview Mode** | Conversational chat where AI gently collects incident details using Biblical peacemaking principles |
| **AI Refinement** | "Refine & Save with AI" button reformats raw notes into a neutral, court-ready "Restoration Report" (costs 1 token) |
| **Evidence Upload** | Attach screenshots/photos/PDFs; auto-saved to Document Library |
| **Incident Templates** | Save and reuse report templates for recurring incident types |
| **Category System** | 8 categories: Communication Issue, Scheduling Conflict, Financial Dispute, Missed Visitation, Parental Alienation Concern, Child Wellbeing, Legal Documentation, Other |
| **Manual Save** | Fallback save without AI if offline or tokens unavailable |

### 3.4 Incident Timeline
| Feature | Description |
|---------|-------------|
| **Chronological View** | All incident reports displayed in reverse-chronological order |
| **Filter by Category** | Filter timeline by incident category |
| **Multi-Select** | Select multiple reports for batch operations |
| **Discuss Incident** | Jump to AI assistant with a specific incident as context (Plus/Pro tier only) |
| **Analyze Incident (Heart Inspection)** | Deep behavioral analysis of a single incident against the backdrop of all reports |

### 3.5 Pattern Analysis
| Feature | Description |
|---------|-------------|
| **Theme Detection** | AI identifies 3-5 recurring behavioral themes across reports (e.g., "Recurring anger," "Financial withholding") |
| **Frequency Charting** | Visual representation of theme frequency |
| **Biblical Lens** | Patterns analyzed against Biblical family order principles |
| **Token Cost** | Requires AI tokens for analysis |

### 3.6 Deep Analysis / Behavioral Insights (DeepAnalysis)
| Feature | Description |
|---------|-------------|
| **Single Incident Deep Dive** | Full forensic & behavioral analysis of one incident |
| **Cross-Reference** | Analyzes the target incident in context of all other reports |
| **Google Search Grounding** | AI uses web search for relevant legal/behavioral context |
| **Source Attribution** | Shows grounding sources for AI-generated analysis |
| **Motion Drafting** | Generate legal motions directly from analysis (Plus/Pro tier only) |

### 3.7 Legal Assistant
| Feature | Description |
|---------|-------------|
| **AI Legal Chat** | Conversational interface with AI trained on Indiana family law and scripture |
| **Knowledge Base** | AI has access to all incident reports and text documents as context |
| **Document Generation** | Can generate structured legal documents (motions, declarations) |
| **Google Search Integration** | Grounds responses in current legal information |
| **Analysis Context Mode** | Can operate with a forensic analysis as the primary context |
| **Tier-Gated** | Blocked for Free tier users (requires Plus or Pro) |

### 3.8 Messaging System
| Feature | Description |
|---------|-------------|
| **Threaded Discussions** | Organize conversations by subject (e.g., "Summer Vacation Schedule") |
| **Co-Parent Direct Messaging** | Real-time messaging between linked parent accounts (5-second polling) |
| **AI Auto-Reply ("Peacekeeper")** | AI can automatically draft gracious, BIFF-style replies to the co-parent's messages |
| **AI Toggle** | Enable/disable AI auto-reply per thread |
| **Hostility Analysis** | "Analyze Hostility" button runs forensic analysis on recent messages detecting gaslighting, narcissism, wrath/hostility (costs 5 tokens) |
| **Save as Incident** | Forensic chat analysis can be saved as an incident report |
| **Unread Badge** | Bottom nav shows unread message count |

### 3.9 Document Library
| Feature | Description |
|---------|-------------|
| **Folder System** | 5 folders: Drafted Motions, Forensic Analyses, Evidence Packages, User Uploads, Risk Assessments |
| **File Upload** | Upload images, PDFs, and text documents |
| **Document Viewer** | View document content in-app |
| **AI Analysis** | AI can analyze uploaded documents for legal relevance |
| **AI Redraft** | AI can restructure/redraft documents into formal legal formats |
| **Evidence Reference** | Documents can be referenced in incident reports and evidence packages |

### 3.10 Evidence Package Builder
| Feature | Description |
|---------|-------------|
| **Multi-Report Selection** | Select multiple incident reports from timeline |
| **Document Inclusion** | Include relevant documents from the library |
| **Objective Setting** | Define the purpose/objective of the evidence package |
| **AI Compilation** | AI generates a structured, court-ready evidence package document |
| **PDF Export** | Preview and export as PDF |

### 3.11 Custody Challenge Mode
| Feature | Description |
|---------|-------------|
| **Schedule Imbalance Detection** | Identifies when one parent has <35% custody time |
| **Challenge Dialogue** | AI challenges the restricting parent based on Attachment Theory and Biblical family structure (Exodus 20:12) |
| **Bond Protection Report** | Generates a "Risk Assessment: Parental Bond & Attachment" report |
| **Scriptural Basis** | Reminds users that children need both parents per God's design |

### 3.12 AI Voice Agent (AgentChat)
| Feature | Description |
|---------|-------------|
| **"Xai" Persona** | Christian Co-Parenting Guide voice agent |
| **App Navigation** | Can navigate the app via voice commands (`navigateToView` function) |
| **Biblical Counsel** | Answers questions using scripture and conflict resolution strategies |
| **De-escalation** | Reminds users of James 1:19 when anger is detected |
| **Legal Boundary** | Cannot give legal advice; redirects to organization |

### 3.13 Scripture & Spiritual Support
| Feature | Description |
|---------|-------------|
| **Scripture Modal** | Displays Bible verses related to peace, forgiveness, and family |
| **Timed Prompts** | Appears every 7 minutes during use to encourage spiritual reflection |
| **Post-Report Display** | Shows scripture after each incident report is generated |
| **10 Curated Verses** | 1 Corinthians, Proverbs, Matthew, Ephesians, Romans |

### 3.14 Subscription & Token System
| Tier | Tokens | Features |
|------|--------|----------|
| **Free** | 50 tokens | Basic incident logging, pattern analysis, messaging (no AI features) |
| **Plus** | 150 tokens | All Free features + Biblical Counsel (Legal Assistant), Incident Discussion |
| **Pro** | 550 tokens | All Plus features + Motion Drafting, advanced AI features |

**Token Costs:**
- AI Chat response: 1 token
- AI Report Refinement: 1 token
- AI Report Generation (from chat): 5 tokens
- Hostility Analysis: 5 tokens
- Deep Messaging Analysis: variable
- Evidence Package Generation: variable

### 3.15 PWA & Offline Support
| Feature | Description |
|---------|-------------|
| **Service Worker** | Registered for offline capability and auto-update |
| **Offline Mode** | App functions offline; data syncs when connection restored |
| **Offline Toast** | Warning notification when offline |
| **Update Prompt** | "New version available" toast with Refresh action |

---

## 4. Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (Vite/React)                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │  Auth    │  │Dashboard │  │ Timeline │  │Chat/Log │ │
│  └──────────┘  └──────────┘  └──────────┘  └─────────┘ │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │Messaging │  │ Patterns │  │  Legal   │  │Documents│ │
│  └──────────┘  └──────────┘  │ Assistant│  └─────────┘ │
│  ┌──────────┐  ┌──────────┐  └──────────┘  ┌─────────┐ │
│  │  Agent   │  │ Evidence │  ┌──────────┐  │Profile  │ │
│  │  Chat    │  │ Builder  │  │ Insights │  └─────────┘ │
│  └──────────┘  └──────────┘  └──────────┘              │
├─────────────────────────────────────────────────────────┤
│                    Service Layer                        │
│  ┌──────────────────────────┐  ┌──────────────────────┐ │
│  │    geminiService.ts      │  │     api.ts            │ │
│  │  (Google Gemini AI)      │  │  (Google Apps Script) │ │
│  └──────────────────────────┘  └──────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│                    Backend                              │
│  ┌────────────────────────────────────────────────────┐ │
│  │       Google Apps Script (backend/Code.gs)         │ │
│  │  - User auth (login/signup)                        │ │
│  │  - Data CRUD (reports, docs, templates, profile)   │ │
│  │  - Messaging relay                                   │ │
│  │  - Account linking                                   │ │
│  │  - Shared events / calendar                          │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Data Flow
1. **User logs in** → `api.login()` → Google Apps Script → returns User + linkedUserId
2. **Data sync** → `api.syncData()` → fetches reports, documents, templates, profile
3. **AI operations** → `geminiService.*` → Direct calls to Google Gemini API (no backend proxy)
4. **Messaging** → `api.sendMessage()` / `api.getMessages()` → 5-second polling to Google Apps Script
5. **No localStorage** → All data is server-side; user must re-login on each session

---

## 5. AI System Prompts & Personas

| Persona | System Prompt Constant | Purpose |
|---------|----------------------|---------|
| **Biblical Peacemaking Assistant** | `SYSTEM_PROMPT_CHAT` | Conversational incident logging with spiritual guidance |
| **Report Generator** | `SYSTEM_PROMPT_REPORT_GENERATION` | Converts conversations/form data into neutral "Restoration Reports" |
| **Spiritual Pattern Analyst** | `SYSTEM_PROMPT_THEME_ANALYSIS` | Identifies recurring behavioral themes across reports |
| **Xai (Voice Agent)** | `SYSTEM_PROMPT_VOICE_AGENT` | Christian co-parenting guide for app navigation and counsel |
| **Forensic Communication Expert** | `SYSTEM_PROMPT_DEEP_MESSAGING_ANALYSIS` | Analyzes chat logs for "Works of the Flesh" vs "Fruits of the Spirit" |
| **Child Advocate** | `SYSTEM_PROMPT_CUSTODY_CHALLENGE` | Challenges custody imbalance (<35% time) |
| **Forensic Psychologist** | `SYSTEM_PROMPT_IMBALANCE_REPORT` | Generates "Risk Assessment: Bond & Attachment" reports |
| **Peacekeeper (Auto-Reply)** | `SYSTEM_PROMPT_AUTO_REPLY` | Drafts gracious replies to co-parent messages (BIFF method) |
| **Forensic Analyst** | `SYSTEM_PROMPT_CHAT_INCIDENT` | Detects hostility, gaslighting, narcissism in chat logs |
| **Legal Assistant** | `SYSTEM_PROMPT_LEGAL_ASSISTANT` | AI legal chat trained on Indiana family law |

---

## 6. Building & Running

### Prerequisites
- Node.js (v18+)
- Google Gemini API key ([Google AI Studio](https://ai.google.dev/))

### Local Development
```bash
# 1. Install dependencies
npm install

# 2. Create .env.local with your API key
echo "GEMINI_API_KEY=your_key_here" > .env.local

# 3. Start dev server (port 3000)
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

### Deployment (Vercel)
1. Push to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Set `GEMINI_API_KEY` environment variable
4. Deploy

---

## 7. Key Use Cases

### Use Case 1: Single Parent Documenting Conflicts
**Scenario:** A separated mother needs to document instances where the father is late for pickups, sends hostile text messages, or misses visitation.

**Flow:**
1. Log in → Dashboard
2. "Log a Conflict" → Standard Form or AI Interview
3. Fill in details → "Refine & Save with AI" (1 token)
4. View in Timeline → "Heart Inspection" for deep analysis
5. After multiple incidents → Pattern Analysis to identify recurring issues
6. Build Evidence Package → Select relevant reports → Generate for court

### Use Case 2: Co-Parent Communication with AI Mediation
**Scenario:** Two co-parents need to discuss summer vacation scheduling but have a history of hostile exchanges.

**Flow:**
1. Both parents create accounts and link via username
2. Parent A starts "New Subject: Summer Vacation" thread
3. Parent A enables "AI Agent: ON" (Peacekeeper mode)
4. Parent B sends a hostile message
5. AI automatically draftss a gracious, BIFF-style reply on Parent A's behalf
6. If hostility escalates → "Analyze Hostility" (5 tokens) to generate a forensic report
7. Save the analysis as an incident report for the timeline

### Use Case 3: Legal Document Preparation
**Scenario:** A parent needs to file a motion for contempt due to repeated visitation interference.

**Flow:**
1. Log all related incidents over time (Missed Visitation, Communication Issue)
2. Go to Legal Assistant (requires Plus/Pro)
3. AI reviews all related reports and documents
4. Request: "Draft a Motion for Contempt regarding visitation interference"
5. AI generates structured legal motion using Indiana law context
6. Save to Document Library under "Drafted Motions"
7. Optionally build a full Evidence Package with supporting documents

### Use Case 4: Custody Schedule Challenge
**Scenario:** One parent has only 20% custody time (every other weekend) and the other parent wants to understand the impact.

**Flow:**
1. Go to Custody Challenge mode
2. Describe the current schedule
3. AI challenges the imbalance based on Attachment Theory and Exodus 20:12
4. Generate "Bond Protection Report" highlighting developmental and spiritual risks
5. Use report in mediation or court proceedings

---

## 8. File Structure

```
remix_-shouting-parents/
├── App.tsx                          # Main app component (routing, state management)
├── index.tsx                        # React entry point
├── index.html                       # HTML shell
├── types.ts                         # TypeScript type definitions (all interfaces)
├── constants.ts                     # System prompts, categories, parenting plan templates
├── mockData.ts                      # Empty (legacy file, data now server-side)
├── neon.tsx                         # Empty file
├── package.json                     # Dependencies and scripts
├── vite.config.ts                   # Vite configuration (API_KEY injection)
├── vercel.json                      # Vercel deployment config
├── tsconfig.json                    # TypeScript configuration
├── .env.example                     # Environment variable template
├── .gitignore                       # Git ignore rules
├── metadata.json                    # App metadata (name, description, permissions)
├── README.md                        # Setup and deployment instructions
│
├── components/                      # React components (25 files)
│   ├── AgentChat.tsx                # AI voice agent interface
│   ├── AuthScreen.tsx               # Login/signup screen
│   ├── BehavioralInsights.tsx       # Deep analysis view (DeepAnalysis)
│   ├── BottomNav.tsx                # Mobile bottom navigation
│   ├── ChatInterface.tsx            # Incident logging (form + chat modes)
│   ├── CustodyChallengeModal.tsx    # Custody challenge flow
│   ├── Dashboard.tsx                # Main dashboard with stats and actions
│   ├── DocumentLibrary.tsx          # Document management with folders
│   ├── DocumentViewerModal.tsx      # Document preview modal
│   ├── EvidencePackageBuilder.tsx   # Multi-report evidence compilation
│   ├── Header.tsx                   # Top navigation bar
│   ├── icons.tsx                    # SVG icon components
│   ├── IncidentCard.tsx             # Individual incident report card
│   ├── IncidentTimeline.tsx         # Timeline view of all reports
│   ├── LandingPage.tsx              # Landing/marketing page
│   ├── LegalAssistant.tsx           # AI legal chat interface
│   ├── Messaging.tsx                # Co-parent messaging system
│   ├── MotionPreviewModal.tsx       # Legal motion preview/preview
│   ├── PatternAnalysis.tsx          # Recurring theme analysis with charts
│   ├── PdfPreview.tsx               # PDF export preview
│   ├── ScriptureModal.tsx           # Biblical verse display
│   ├── Sidebar.tsx                  # Desktop side navigation
│   ├── Toast.tsx                    # Notification toast component
│   ├── UpgradeModal.tsx             # Subscription upgrade prompt
│   └── UserProfile.tsx              # User profile setup/edit
│
├── constants/                       # Additional prompt constants
│   ├── behavioralPrompts.ts         # Single incident analysis prompt
│   ├── legalContext.ts              # Indiana family law summaries
│   └── legalPrompts.ts              # Legal assistant and document prompts
│
├── services/                        # API and AI service layer
│   ├── api.ts                       # Google Apps Script API client
│   └── geminiService.ts             # Google Gemini AI integration (815 lines)
│
├── backend/                         # Server-side code
│   └── Code.gs                      # Google Apps Script backend
│
└── public/                          # Static assets
    └── (PWA assets, service worker)
```

---

## 9. Data Models (Key Types)

| Type | Purpose |
|------|---------|
| `User` | Authenticated user (userId, username, linkedUserId) |
| `UserProfile` | User details (name, role, children, court info, tier, tokens) |
| `Report` | Incident report (id, content, category, tags, createdAt, images) |
| `GeneratedReportData` | AI-generated report content before saving |
| `StoredDocument` | Uploaded/generated documents (id, name, mimeType, folder, data) |
| `StructuredLegalDocument` | AI-generated legal document (title, sections, metadata, closing) |
| `IncidentTemplate` | Reusable report templates |
| `Message` | Messaging system message (id, senderId, content, threadId, timestamp) |
| `SharedEvent` | Shared calendar event (id, title, start, end, category, creatorId, childName) |
| `MessagingAnalysisReport` | Deep messaging analysis output (conflictScore, themes, flaggedBehaviors) |
| `AuditLogEntry` | Change tracking for shared events |
| `ParentingPlanTemplate` | Predefined custody schedule patterns (2-2-3, 2-2-5-5, alternating weeks, EOW) |

---

## 10. Incident Categories

1. **Communication Issue** - Conflicts in speech, texting, or verbal exchanges
2. **Scheduling Conflict** - Disagreements over visitation timing or calendar conflicts
3. **Financial Dispute** - Child support, expense sharing, or financial withholding
4. **Missed Visitation** - No-shows for scheduled parenting time
5. **Parental Alienation Concern** - Behaviors that may turn the child against the other parent
6. **Child Wellbeing** - Issues directly affecting the children's physical/emotional health
7. **Legal Documentation** - Court orders, motions, or legal notices
8. **Other** - Uncategorized incidents

---

## 11. Security & Privacy Considerations

- **No LocalStorage:** User data is never stored locally; all data lives on the Google Apps Script backend
- **Session-Free:** Users must re-login every time the app is opened
- **API Key in Client:** The Gemini API key is injected via Vite's `define` config (should be server-side proxied in production for security)
- **CORS:** Backend uses CORS for cross-origin requests from the frontend
- **Auth Required:** All API calls require a valid userId

---

## 12. Known Limitations & TODOs

- **API Key Exposure:** `GEMINI_API_KEY` is exposed to the client-side bundle. Consider proxying through a backend server.
- **Google Apps Script Backend:** The current backend (Google Apps Script) may have rate limits and scalability concerns for production use.
- **No Real-time Messaging:** Uses 5-second polling instead of WebSockets or push notifications.
- **No Push Notifications:** PWA doesn't currently implement push notification badges.
- **Indiana Law Only:** Legal context is Indiana-specific; would need localization for other jurisdictions.
- **Token System is Client-Side:** Token tracking is in the user profile but enforcement is client-side only.

---

*Report generated from full codebase analysis on April 14, 2026.*
