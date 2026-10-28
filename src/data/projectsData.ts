export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  industry: string;
  isDemo: true;
  summary: string;
  problem: string;
  solution: string;
  tools: string[];
  features: string[];
  results: string[];
  chartType: 'sales-bar' | 'workflow-flow' | 'inventory-scatter' | 'assistant-chat';
  sampleMetrics: { label: string; value: string; note: string }[];
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'sales-performance-intelligence',
    slug: 'sales-performance-intelligence',
    title: 'Sales Performance Intelligence Dashboard',
    badge: 'Demo Project / Illustrative Case Study',
    industry: 'Wholesale & Industrial Distribution',
    isDemo: true,
    summary:
      'A multi-region commercial intelligence dashboard designed to monitor sales quotas, rep leaderboards, territory variance, and pipeline health across 4 distribution hubs.',
    problem:
      'A multi-branch wholesale distributor struggled to track actual sales against monthly targets across 4 regional warehouses. Territory managers were submitting conflicting spreadsheet summaries with delayed numbers, making it impossible to address quota deficits before month-end.',
    solution:
      'Constructed a centralized Power BI & Web analytics dashboard connected to the distribution ERP and CRM. Implemented automated daily data syncs, target vs actual pacing calculators, salesperson contribution rankings, and regional variance alerts.',
    tools: ['Power BI', 'SQL Server', 'Excel Power Query', 'DAX', 'TypeScript'],
    features: [
      'Interactive revenue tracking vs quarterly target lines',
      'Territory drill-downs: North, South, East, and West performance',
      'Sales rep leaderboard tracking deals closed and active pipeline',
      'Product category contribution margin visualization',
      'Deal stage progression and pipeline aging funnel',
    ],
    results: [
      'Replaced 4 disconnected weekly spreadsheets with 1 live unified view',
      'Gave regional sales managers instant visibility into target gaps by day 10 of each month',
      'Automated monthly sales performance review slide decks',
    ],
    chartType: 'sales-bar',
    sampleMetrics: [
      { label: 'Demonstrated Revenue', value: '₹4.35 Cr', note: 'Combined Q3 Demo Volume' },
      { label: 'Target Pacing', value: '108.4%', note: 'Exceeded Planned Run-Rate' },
      { label: 'Monitored Reps', value: '18 Reps', note: 'Across 4 Regional Zones' },
      { label: 'Refresh Frequency', value: 'Automated Daily', note: 'Replaced Manual Compilations' },
    ],
  },
  {
    id: 'automated-mis-reporting-system',
    slug: 'automated-mis-reporting-system',
    title: 'Automated MIS Reporting System',
    badge: 'Demo Project / Illustrative Case Study',
    industry: 'Precision Manufacturing & Engineering',
    isDemo: true,
    summary:
      'An automated data cleaning, validation, and scheduled multi-sheet MIS consolidation pipeline eliminating manual spreadsheet compilation for plant management.',
    problem:
      'A manufacturing business operated with 6 independent production lines and 3 warehouse storage yards, each recording raw material consumption, machine run-times, and finished goods output in separate daily Excel workbooks. The plant controller spent 4 hours every morning manually copying and formatting data before executive morning standups.',
    solution:
      'Developed a resilient Python and Pandas automation pipeline that scans folder dropboxes, executes schema validation, cleans date/numeric irregularities, merges production output with cost tables, generates standardized executive MIS workbooks, and dispatches an automated PDF digest to plant directors at 7:45 AM.',
    tools: ['Python', 'Pandas', 'OpenPyXL', 'Excel Automation', 'FastAPI', 'Power BI'],
    features: [
      'Multi-workbook automatic folder monitoring and ingestion',
      'Rigorous data validation checks (missing values, out-of-range scrap, duplicate batches)',
      'Automated reconciliation of machine hours against output quantities',
      'Simulated execution status dashboard with detailed run logs',
      'Scheduled email and cloud storage dispatch with zero human touch',
    ],
    results: [
      'Saved an estimated 20 hours per week of manual clerical assembly',
      'Eliminated calculation discrepancies in production scrap reporting',
      'Reports delivered reliably 15 minutes ahead of the daily 8:00 AM management briefing',
    ],
    chartType: 'workflow-flow',
    sampleMetrics: [
      { label: 'Daily Time Saved', value: '3.5 Hours', note: 'Every Single Working Day' },
      { label: 'Data Sources Merged', value: '6 Workbooks', note: 'Combined into 1 Unified Report' },
      { label: 'Validation Rules', value: '24 Rules', note: 'Detects Anomaly & Missing Entries' },
      { label: 'Error Rate', value: '0.0%', note: 'Formula Errors Eliminated' },
    ],
  },
  {
    id: 'inventory-demand-analytics',
    slug: 'inventory-demand-analytics',
    title: 'Inventory & Demand Analytics',
    badge: 'Demo Project / Illustrative Case Study',
    industry: 'Omnichannel Retail & Wholesale',
    isDemo: true,
    summary:
      'An inventory turnover, aging stock, and predictive demand analytics engine designed to minimize stockouts and free up dormant working capital.',
    problem:
      'An expanding consumer goods distributor was facing frequent stockouts of its fastest-moving SKUs while holding over ₹90 Lakh in slow-moving inventory older than 90 days. Procurement teams were ordering purely based on intuition without factoring in seasonal demand spikes or supplier lead time volatility.',
    solution:
      'Built an intelligent inventory analytics dashboard incorporating SKU stratification (Fast, Medium, Slow, Dead), stock turnover velocity metrics, inventory aging buckets, and an illustrative machine-learning demand forecast model providing dynamic re-order recommendations.',
    tools: ['Python', 'SQL', 'Scikit-Learn', 'Power BI', 'Pandas', 'Statsmodels'],
    features: [
      'Stock health overview: In Stock, Low Stock, and Out of Stock alerts',
      'Fast-moving vs. slow-moving inventory matrix',
      'Inventory aging distribution (0-30, 31-60, 61-90, 90+ days)',
      'Illustrative 90-day demand forecast with confidence intervals',
      'Automated supplier re-order point calculations',
    ],
    results: [
      'Identified ₹28 Lakh of dormant inventory suitable for clearance promotions',
      'Provided clear re-order alerts to prevent recurring stockouts on core revenue drivers',
      'Improved inventory turnover velocity by an estimated 22%',
    ],
    chartType: 'inventory-scatter',
    sampleMetrics: [
      { label: 'Monitored SKUs', value: '1,420 SKUs', note: 'Across 3 Fulfillment Hubs' },
      { label: 'Forecast Horizon', value: '90 Days', note: 'Rolling Forward Demand' },
      { label: 'Stockout Reduction', value: '-34%', note: 'On Fast-Moving Product Lines' },
      { label: 'Working Capital Target', value: '₹18.5 L', note: 'Identified for Liquidation' },
    ],
  },
  {
    id: 'ai-sales-assistant',
    slug: 'ai-sales-assistant',
    title: 'AI Sales Assistant & Executive Query Agent',
    badge: 'Demo Project / Illustrative Case Study',
    industry: 'B2B Sales & Enterprise Services',
    isDemo: true,
    summary:
      'A grounded conversational AI assistant that answers complex natural-language queries about commercial performance, pipeline health, and lead follow-ups.',
    problem:
      'Sales managers and regional directors spent hours digging through multiple CRM screens, filtered spreadsheets, and BI reports just to answer straightforward operational questions like "Which sales rep is furthest behind target?" or "Which high-value deals need attention this week?"',
    solution:
      'Engineered an enterprise AI assistant interface connected to the structured business dataset via a RAG query router and strict SQL translation layer. The assistant understands business terminology, generates instant tabular and chart answers, and includes human-in-the-loop confirmation gates before triggering follow-up drafts.',
    tools: ['Python', 'FastAPI', 'LLM Integration Architecture', 'RAG Pipeline', 'React', 'Tailwind CSS'],
    features: [
      'Natural-language querying over commercial and CRM records',
      'Instant synthesis of revenue attainment and regional variances',
      'Automated identification of stalled deals and missed targets',
      'Interactive follow-up task drafting with human approval controls',
      'Strict guardrails preventing hallucinations and fabricated metrics',
    ],
    results: [
      'Provides instantaneous answers to executive queries in seconds',
      'Reduces analyst ad-hoc query requests by over 50%',
      'Keeps commercial management informed on mobile and desktop without complex navigation',
    ],
    chartType: 'assistant-chat',
    sampleMetrics: [
      { label: 'Response Latency', value: '< 1.2s', note: 'Instant Grounded Retrieval' },
      { label: 'Query Accuracy', value: '100%', note: 'Grounded in Audited Records' },
      { label: 'Time Saved / Rep', value: '4 Hrs/Wk', note: 'Ad-hoc Reporting Queries' },
      { label: 'Safety Gates', value: 'Human-in-Loop', note: 'For All Sensitive Actions' },
    ],
  },
];
