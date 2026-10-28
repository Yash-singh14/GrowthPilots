# GrowthPilots — Data. Automation. Growth.

**GrowthPilots** is a modern, high-performance Business Intelligence, MIS Reporting, Sales Performance Management, Business Process Automation, AI Business Assistants, and Predictive Analytics platform.

Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, **Lucide Icons**, and **Recharts**.

---

## 🚀 Key Features

1. **Brand Identity & Scalable Vector Logo**:
   - Custom SVG logo featuring an abstract growth trajectory, upward trending bars, and pilot dynamic arrow in brand gradient `#2563EB` to `#7C3AED` with `#06B6D4` cyan accent.
   - Designed for light & dark themes, navbar, footer, and SVG favicon.

2. **Homepage with Live Hero Dashboard**:
   - Compelling hero headline: *"Don't Just Run a Business. Outperform."*
   - Interactive commercial sales dashboard preview with dynamic filters, KPI cards, and Recharts trends.

3. **Five Core Services with Dedicated Pages**:
   - **MIS Reporting & Business Intelligence** (`/services/mis-reporting`): Automated daily/weekly/monthly ledger reconciliation, departmental variance tracking, and scheduled PDF brief statuses.
   - **Sales Performance Management** (`/services/sales-performance`): Target vs. actuals, regional drilldowns, sales leaderboard, and pipeline velocity funnels.
   - **Business Process Automation** (`/services/automation`): Interactive workflow architecture simulation tracing *Data Sources → Data Validation → Processing → Report Generation → Notification*.
   - **AI Agents & Business Assistants** (`/services/ai-agents`): Conversational query interface answering natural language prompts grounded on audited sales data, with strict human approval gates.
   - **Predictive Analytics & Forecasting** (`/services/predictive-analytics`): 90-day forward machine learning projections, statistical uncertainty confidence bands, category demand metrics, and customer RFM segmentation.

4. **Functional Business Solutions** (`/solutions`):
   - Department-specific operational solutions: Sales Intelligence, Finance & MIS, Inventory & Operations, Management Reporting, Customer Analytics, and Workflow Automation.
   - Breaks down *The Problem*, *Proposed Solution*, and *Measurable Outcome*.

5. **Demonstration Projects & Case Studies** (`/projects`):
   - 4 realistic proof-of-concept case studies with interactive working visualizations:
     1. *Sales Performance Intelligence Dashboard* (Wholesale Distribution)
     2. *Automated MIS Reporting System* (Manufacturing)
     3. *Inventory & Demand Analytics* (Retail & Distribution)
     4. *AI Sales Assistant* (B2B Enterprise)

6. **Dedicated Interactive Dashboard** (`/dashboard`):
   - Granular multi-dimensional filtering by Quarter, Region, Product Category, and Sales Representative.
   - All charts, KPI scorecards, and rankings dynamically recalculate from the same underlying dataset.
   - **Export to CSV**: Downloads the currently filtered transaction dataset with standard Indian currency formatting (₹).

7. **Validated Consultation & Contact Form** (`/contact`):
   - Client-side validation, required fields, loading/success states, spam honeypot trap, and privacy notices.

8. **Transparent Pricing Packages** (`/pricing`):
   - Scope-based tiers: Starter, Growth, and Intelligence with clear explanations of pricing drivers.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite 5, TypeScript 5
- **Styling**: Tailwind CSS 3, PostCSS, Autoprefixer
- **Charts & Visualizations**: Recharts 2.12
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Number & Currency Formatting**: Standard Indian numbering system (`Intl.NumberFormat('en-IN')` e.g. `₹12,50,000`)

---

## 📋 Prerequisites

- **Node.js**: v18.0.0 or higher (v22.x recommended)
- **npm**: v9.0.0 or higher

---

## ⚡ Installation & Local Development

1. Navigate to the project directory:
   ```bash
   cd "C:\Users\hp\.gemini\antigravity\scratch\growthpilots"
   ```

2. Dependencies are already installed. If running on a new machine:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 🧪 Building for Production

To test the TypeScript types and create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ⚙️ Environment Variables Setup

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Configurable keys:
- `VITE_API_BASE_URL`: Connect to a real FastAPI/PostgreSQL backend.
- `VITE_CONTACT_WEBHOOK_URL`: Forward consultation submissions to Zapier, Make, Slack, or your CRM webhook.

---

## 🔌 Replacing Demo Data with Real APIs

All sample business data is cleanly isolated in `src/data/`:
- `src/data/salesData.ts`: Commercial transactions and quota calculations.
- `src/data/predictiveData.ts`: Time-series forecast points and confidence bounds.
- `src/data/aiAssistantKnowledge.ts`: Query router and factual retrieval dataset.
- `src/data/workflowData.ts`: Background ETL pipeline steps.

To connect real APIs:
1. Replace functions in `src/data/` with fetch/axios calls to your FastAPI or PostgreSQL endpoints.
2. Maintain the TypeScript interfaces defined in `src/types/index.ts` for end-to-end type safety.

---

## 📄 License & Attribution

© 2026 GrowthPilots. All rights reserved. Data. Automation. Growth.
