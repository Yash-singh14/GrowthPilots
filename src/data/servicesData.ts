export interface ServiceInfo {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  benefits: string[];
  useCases: { title: string; desc: string; metric: string }[];
  deliverables: string[];
}

export const SERVICES_LIST: ServiceInfo[] = [
  {
    id: 'mis-reporting',
    slug: 'mis-reporting',
    title: 'MIS Reporting & Business Intelligence',
    tagline: 'Turn scattered business data into clear, reliable and actionable reports.',
    shortDesc: 'Eliminate manual spreadsheet assembly. Get clean, automated Power BI & MIS dashboards updated daily, weekly, or monthly with reliable KPIs.',
    fullDesc: 'Most businesses suffer from data silos where sales, accounting, warehouse, and operational data are trapped in separate spreadsheets and legacy systems. We build robust Business Intelligence pipelines and automated MIS report ecosystems that consolidate disparate sources, reconcile variances, and present executive leadership with a single source of truth.',
    icon: 'BarChart3',
    features: [
      'Daily, weekly, monthly and annual MIS reports',
      'Power BI and modern interactive dashboards',
      'Sales, finance, inventory and operations reporting',
      'Excel and CSV automated data consolidation',
      'Real-time KPI monitoring & threshold alerts',
      'Automated executive management summaries',
      'Scheduled email and PDF report delivery',
    ],
    benefits: [
      'Eliminate 15+ hours per week of manual spreadsheet copy-pasting',
      '100% data consistency across finance, sales, and operations',
      'Faster board and management reviews with live KPI scorecards',
      'Early detection of margin leakages and operational bottlenecks',
    ],
    useCases: [
      {
        title: 'Multi-Branch Retail MIS Consolidation',
        desc: 'Automating the daily reconciliation of sales, cash drawers, and warehouse dispatches across 28 store locations into one executive view.',
        metric: 'Zero manual compilation delay by 8:00 AM daily',
      },
      {
        title: 'Manufacturing Cost-Center Variance BI',
        desc: 'Consolidating ERP production batches with raw material pricing to track scrap rates, yield per machine, and net margin variances.',
        metric: 'Identified 3.4% scrap reduction opportunity',
      },
      {
        title: 'Working Capital & Aging Receivables Monitor',
        desc: 'Automated debtor aging analysis with automated alerts for invoices crossing 45 and 60 days overdue.',
        metric: 'Improved debtor turnaround by 18 days',
      },
    ],
    deliverables: [
      'Custom Power BI / Web BI Dashboard suite',
      'Automated ETL pipelines connecting Excel, ERP, and SQL',
      'C-Suite Executive PDF Digest template with automated dispatch',
      'Data Dictionary & Field Governance documentation',
    ],
  },
  {
    id: 'sales-performance',
    slug: 'sales-performance',
    title: 'Sales Performance Management',
    tagline: 'Understand your sales performance, identify gaps and help your team achieve its targets.',
    shortDesc: 'Track targets vs. actuals, identify top performers, monitor pipeline velocity, and pinpoint regional gaps with live drill-down dashboards.',
    fullDesc: 'Driving consistent revenue growth requires deep visibility into sales pipeline health, salesperson activity, territory penetration, and product mix profitability. GrowthPilots Sales Performance Management replaces guesswork with granular analytics, giving sales heads and promoters actionable levers to lift team quota attainment.',
    icon: 'TrendingUp',
    features: [
      'Sales targets versus actuals tracking at daily/monthly granularity',
      'Salesperson leaderboard & individual performance scorecards',
      'Territory, branch, and regional performance drilldowns',
      'Sales pipeline analysis & conversion funnel metrics',
      'Win/Loss ratio tracking and deal aging velocity',
      'Objective incentive and commission calculations',
      'Sales forecasting and quota attainment simulation',
    ],
    benefits: [
      'Increase team quota attainment by transparently surfacing quota gaps early',
      'Empower 1-on-1 coaching sessions with rep-specific conversion metrics',
      'Automate monthly commission statements, eliminating disputes and delays',
      'Accurate pipeline forecasting for production and procurement planning',
    ],
    useCases: [
      {
        title: 'B2B Industrial Equipment Quota Tracking',
        desc: 'Implemented dynamic target vs. actual tracking across 4 sales zones and 18 technical sales engineers with monthly commission calculations.',
        metric: 'Quota attainment grew from 68% to 91%',
      },
      {
        title: 'FMCG Distributor Beat & Order Analysis',
        desc: 'Monitored daily distributor orders, outlet coverage, and zero-billing accounts across 1,200 retail touchpoints.',
        metric: 'Surfaced 220 dormant accounts for immediate reactivation',
      },
      {
        title: 'Software Sales Pipeline Velocity',
        desc: 'Tracked opportunity stage drop-offs, identifying that deals stalled between Proposal and Negotiation stages.',
        metric: 'Reduced average sales cycle length by 14 days',
      },
    ],
    deliverables: [
      'Executive Sales Performance Dashboard (Web + Mobile responsive)',
      'Individual Sales Representative Portals with target tracking',
      'Incentive & Commission Rules Engine with exportable audit sheets',
      'Weekly Sales Review automated briefing deck',
    ],
  },
  {
    id: 'automation',
    slug: 'automation',
    title: 'Business Process Automation',
    tagline: 'Eliminate repetitive manual work and allow your team to focus on important decisions.',
    shortDesc: 'Automate data cleaning, multi-source spreadsheet consolidation, invoice extraction, CRM sync, and scheduled report dispatch without code.',
    fullDesc: 'Knowledge workers spend up to 40% of their working hours downloading CSVs, matching VLOOKUP columns, correcting data entry mistakes, and emailing files. GrowthPilots constructs resilient, automated data workflows that run silently in the background, validating inputs, executing transformations, and dispatching alerts whenever exceptions occur.',
    icon: 'Cpu',
    features: [
      'Excel, CSV, and Google Sheets reconciliation bots',
      'Automated MIS report generation and multi-format dispatch',
      'Data cleaning, normalization, and deduplication pipelines',
      'CRM, ERP, and payment gateway workflow integration',
      'Automated email notifications, WhatsApp alerts, and PDF generation',
      'Invoice, purchase order, and document OCR data extraction',
      'Scheduled data synchronization with zero manual intervention',
      'Automated error detection, exception logging, and failover notifications',
    ],
    benefits: [
      'Eliminate 95%+ of manual clerical errors in reporting and accounting',
      'Free up key managers to focus on customer acquisition and operations',
      'Accelerate month-end financial book closing from 10 days to 2 days',
      'Audit-proof data processing logs for compliance and tax scrutiny',
    ],
    useCases: [
      {
        title: 'E-Commerce Marketplace Reconciliation Automation',
        desc: 'Automated downloading, settlement fee reconciliation, and tax classification across Amazon, Flipkart, and Shopify stores.',
        metric: 'Reconciled ₹4.2 Cr monthly sales with zero human intervention',
      },
      {
        title: 'Vendor Invoice Extraction & ERP Entry',
        desc: 'Constructed an automated OCR pipeline that extracts GSTIN, line items, and invoice totals from PDF emails and pushes them into accounting software.',
        metric: 'Cut invoice processing time from 20 minutes to 45 seconds',
      },
      {
        title: 'Daily Logistics Dispatch Discrepancy Alerts',
        desc: 'Cross-references courier tracking numbers against warehouse manifests, triggering WhatsApp alerts for stranded shipments.',
        metric: 'Reduced transit loss claims by 32%',
      },
    ],
    deliverables: [
      'Fully orchestrated background ETL automation pipelines',
      'Exception dashboard for administrative review of flagged records',
      'Scheduled report dispatch triggers (Email, Webhook, Slack)',
      'Comprehensive error handling and incident alerting runbook',
    ],
  },
  {
    id: 'ai-agents',
    slug: 'ai-agents',
    title: 'AI Agents & Business Assistants',
    tagline: 'Use AI assistants to retrieve information, summarize business performance and streamline repetitive workflows.',
    shortDesc: 'Deploy specialized conversational business assistants that answer natural-language questions from your company data with strict human-in-the-loop controls.',
    fullDesc: 'Generic chatbots hallucinate and lack business context. GrowthPilots engineers grounded, domain-specific AI Assistants and intelligent retrieval agents connected directly to your structured databases, operational spreadsheets, and enterprise knowledge bases. Executives can query metrics conversationally, while sales and ops teams get immediate context without navigating 20 tabs.',
    icon: 'Bot',
    features: [
      'Executive Business Reporting Assistant for natural-language queries',
      'Customer support and vendor query triage assistants',
      'Lead qualification, scoring, and automated follow-up drafting',
      'Document parsing, contract extraction, and compliance summarization',
      'Internal knowledge base assistants grounded on company SOPs',
      'Automated daily performance briefs generated in plain English',
      'Strict Human-in-the-loop authorization gates for consequential actions',
    ],
    benefits: [
      'Instant answers to complex business queries without waiting for an analyst',
      'Accelerate sales rep response times with auto-generated contextual drafts',
      'Ground responses 100% on verifiable internal data with zero hallucinations',
      'Enterprise security controls with role-based access permissions',
    ],
    useCases: [
      {
        title: 'Executive Voice & Text Query Assistant',
        desc: 'Allows the Managing Director to ask "Which region missed target this month?" and get an instantaneous tabular breakdown with root cause drivers.',
        metric: 'Saves 3 hours per executive weekly',
      },
      {
        title: 'RFP & Tender Response Assistant',
        desc: 'Retrieves technical specifications, past pricing benchmarks, and compliance certifications from historical bid files.',
        metric: 'Cut tender submission preparation time by 60%',
      },
      {
        title: 'Credit Limit & Outstanding Balance Agent',
        desc: 'Assists field sales executives via chat to check client credit limits and outstanding receivables before taking fresh orders.',
        metric: 'Prevented ₹35 Lakh in orders to delinquent clients',
      },
    ],
    deliverables: [
      'Web-based AI Chat Assistant customized with your company dataset',
      'RAG (Retrieval-Augmented Generation) pipeline over corporate documents',
      'Configurable Action Confirmation Gates for sensitive operations',
      'Guardrail configuration ensuring strict factual grounding',
    ],
  },
  {
    id: 'predictive-analytics',
    slug: 'predictive-analytics',
    title: 'Predictive Analytics & Forecasting',
    tagline: 'Use data and machine learning to identify patterns, forecast trends and support better decisions.',
    shortDesc: 'Move beyond historical reporting to anticipatory planning: machine learning models for sales forecasting, inventory demand, and customer retention.',
    fullDesc: 'Looking in the rear-view mirror only tells you where you have been. Predictive Analytics empowers leadership to look ahead. By modeling seasonal trends, lead indicators, macroeconomic factors, and historical customer behavior, GrowthPilots constructs interpretable predictive models that forecast revenue, optimize inventory buffers, and preempt customer churn.',
    icon: 'LineChart',
    features: [
      'Sales and revenue forecasting with statistical confidence intervals',
      'SKU-level inventory demand planning & safety stock optimization',
      'Customer segmentation using RFM (Recency, Frequency, Monetary) clustering',
      'Customer churn risk scoring and proactive retention triggers',
      'Lead scoring models to prioritize high-converting sales opportunities',
      'Price elasticity and margin optimization modeling',
      'Model performance tracking and transparent drift monitoring',
    ],
    benefits: [
      'Reduce inventory holding costs by minimizing over-ordering and stockouts',
      'Accurate 90-day cash flow projections based on anticipated collections',
      'Identify at-risk accounts 60 days before they defect to competitors',
      'Prioritize sales rep effort on leads with the highest probability to close',
    ],
    useCases: [
      {
        title: 'Automotive Parts Seasonal Demand Forecasting',
        desc: 'Forecasted replacement part demand 60 days in advance across 14 warehouses factoring in vehicle model age and monsoon seasonality.',
        metric: 'Reduced stockouts by 28% while lowering buffer inventory by 14%',
      },
      {
        title: 'B2B SaaS Churn Warning Indicator',
        desc: 'Trained a classification model on product usage telemetry, login frequencies, and support tickets to flag churn risks.',
        metric: 'Preempted 42% of potential customer churn',
      },
      {
        title: 'High-Value Customer RFM Segmentation',
        desc: 'Segmented 8,500 active trade accounts into Champions, Loyalists, At Risk, and Hibernating tiers with targeted promotional strategies.',
        metric: 'Lifted repeat purchase frequency by 19%',
      },
    ],
    deliverables: [
      'Interactive Predictive Dashboard with forecast adjustments',
      'Automated Python/Pandas feature engineering pipelines',
      'Model audit report explaining feature importance and confidence metrics',
      'Scheduled batch prediction exports into ERP or CRM databases',
    ],
  },
];
