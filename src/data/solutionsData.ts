export interface SolutionItem {
  id: string;
  category: string;
  icon: string;
  title: string;
  targetAudience: string;
  problem: string;
  proposedSolution: string;
  measurableOutcome: string;
  keyCapabilities: string[];
}

export const SOLUTIONS_LIST: SolutionItem[] = [
  {
    id: 'sales-intelligence',
    category: 'Sales Intelligence',
    icon: 'TrendingUp',
    title: 'Sales Intelligence & Quota Velocity',
    targetAudience: 'Chief Commercial Officers, VP Sales & National Sales Managers',
    problem:
      'Sales leadership frequently struggles with stale CRM data, delayed weekly pipeline reviews, and subjective quota estimates. Reps spend excessive time compiling status reports rather than closing deals, while regional underperformance remains hidden until the end of the quarter.',
    proposedSolution:
      'GrowthPilots implements an end-to-end Sales Intelligence hub uniting CRM, billing, and territory quota datasets. Provides real-time target versus actual pacing, opportunity velocity metrics, win-rate analysis by deal size, and automated quota attainment alerts.',
    measurableOutcome:
      'Enables proactive course-correction mid-month rather than post-mortem reviews, helps improve team-wide quota achievement, and significantly reduces the hours sales reps spend on manual administrative reporting.',
    keyCapabilities: [
      'Live target vs actual revenue tracking',
      'Deal progression & pipeline slippage detection',
      'Territory & branch drilldown analytics',
      'Rep productivity & activity scorecards',
    ],
  },
  {
    id: 'finance-mis',
    category: 'Finance & MIS',
    icon: 'Landmark',
    title: 'Financial MIS & Margin Governance',
    targetAudience: 'Chief Financial Officers, Controllers & Head of Accounts',
    problem:
      'Finance teams lose days each month-end manually reconciling general ledgers, sub-ledgers, invoice records, and bank statements across multiple entities. P&L reports arrive too late for operational decision-making, and hidden cost leakages go unnoticed.',
    proposedSolution:
      'We construct automated Financial MIS pipelines that pull directly from accounting software (Tally, SAP, Zoho Books, QuickBooks) to consolidate multi-entity revenue, gross margin by product line, overhead run-rates, and budget-vs-actual variance tracking.',
    measurableOutcome:
      'Shortens the monthly financial closing cycle, provides leadership with daily flash reports on cash flows and margins, and enforces granular cost-center accountability across departments.',
    keyCapabilities: [
      'Automated multi-entity P&L and balance sheet consolidation',
      'Budget versus actual expense variance monitors',
      'Gross margin analysis by SKU and customer segment',
      'Accounts receivable aging and debtor collection pacing',
    ],
  },
  {
    id: 'inventory-operations',
    category: 'Inventory & Operations',
    icon: 'Boxes',
    title: 'Inventory & Operational Efficiency',
    targetAudience: 'COO, Supply Chain Heads & Plant / Warehouse Directors',
    problem:
      'Balancing high customer order fulfillment with minimal working capital tied up in slow-moving stock is a constant friction. Lack of unified stock visibility leads to stockouts of top-selling items alongside piles of aged, depreciating inventory.',
    proposedSolution:
      'We deploy inventory intelligence tools that categorize inventory by SKU velocity, calculate inventory turnover ratios, track aging stock buckets, and provide statistically grounded re-order recommendations based on lead times and historical consumption trends.',
    measurableOutcome:
      'Reduces unnecessary safety-stock holding expenses, minimizes revenue lost to stockout occurrences, and provides early warnings for non-moving and expiring stock before significant write-downs occur.',
    keyCapabilities: [
      'SKU-level stock turnover & inventory health scoring',
      'Aging inventory stratification (0-30, 31-60, 61-90, 90+ days)',
      'Lead time and re-order point calculations',
      'Warehouse dispatch throughput & transit time monitoring',
    ],
  },
  {
    id: 'management-reporting',
    category: 'Management Reporting',
    icon: 'Briefcase',
    title: 'Executive KPI Cockpits & Board Reviews',
    targetAudience: 'Founders, Managing Directors & Board of Directors',
    problem:
      'Top executives often drown in conflicting reports from different departmental heads, where sales numbers do not match accounting collections, and warehouse shipments contradict billing invoices. Creating board presentations takes dozens of hours of slide preparation.',
    proposedSolution:
      'GrowthPilots builds unified C-Suite Management Cockpits. We establish a verified corporate data dictionary, harmonize metrics across departments, and deliver interactive executive dashboards alongside automated, clean PDF briefing digests dispatched prior to Monday leadership reviews.',
    measurableOutcome:
      'Establishes a single source of enterprise truth, cuts board presentation preparation overhead, and grounds executive strategy meetings in audited, objective operational data.',
    keyCapabilities: [
      'Cross-functional executive KPI scorecards',
      'One-click exportable PDF management packs',
      'Automated weekly email summaries for senior leadership',
      'Data lineage and field definition governance',
    ],
  },
  {
    id: 'customer-analytics',
    category: 'Customer Analytics',
    icon: 'Users',
    title: 'Customer Segmentation & Churn Prevention',
    targetAudience: 'Chief Marketing Officers, Customer Success Heads & Account Directors',
    problem:
      'Treating all clients with a uniform marketing and engagement cadence leads to wasted sales effort and high customer churn. Businesses typically find out an account is unhappy only after they cancel their contract or stop reordering.',
    proposedSolution:
      'We implement RFM (Recency, Frequency, Monetary) clustering and predictive churn detection models. By monitoring order cadence deviations, support interaction trends, and payment delays, we automatically categorize accounts into strategic cohorts and flag accounts displaying churn risk.',
    measurableOutcome:
      'Helps account management teams retain vulnerable high-value accounts proactively, identifies under-penetrated accounts ripe for upselling, and improves overall customer lifetime value.',
    keyCapabilities: [
      'Dynamic RFM customer tiering (Champions, Loyalists, At-Risk)',
      'Customer lifetime value (LTV) and CAC recovery tracking',
      'Behavioral churn early-warning triggers',
      'Cross-sell and repeat order propensity scoring',
    ],
  },
  {
    id: 'workflow-automation',
    category: 'Workflow Automation',
    icon: 'Workflow',
    title: 'End-to-End Workflow & Data Automation',
    targetAudience: 'Operations Managers, IT Leaders & Business Process Owners',
    problem:
      'Routine operational tasks—such as reformatting vendor files, cross-checking shipping numbers, sending daily sales alerts, and updating ERP records—consume thousands of skilled employee hours and are inherently prone to human copy-paste errors.',
    proposedSolution:
      'We engineer dependable background automation pipelines using modern ETL tools, Python microservices, and secure webhook integrations. These systems run scheduled or event-driven tasks, validate schemas, format data, trigger notifications, and log every event for complete transparency.',
    measurableOutcome:
      'Saves high volumes of repetitive administrative hours, accelerates turnaround times for recurring operational tasks, and provides complete audit trails with automatic error notifications.',
    keyCapabilities: [
      'Automated multi-spreadsheet consolidation & validation',
      'Scheduled multi-channel report dispatch (Email, Webhook)',
      'Automated exception detection and administrator alerting',
      'Seamless data synchronization across CRM, ERP, and DBs',
    ],
  },
];
