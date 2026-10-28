export interface WorkflowStepState {
  id: string;
  order: number;
  name: string;
  stage: 'Data Sources' | 'Data Validation' | 'Processing' | 'Report Generation' | 'Notification';
  description: string;
  icon: string;
  duration: string;
  sampleLog: string;
  status: 'pending' | 'running' | 'completed' | 'warning';
}

export const INITIAL_WORKFLOW_STEPS: WorkflowStepState[] = [
  {
    id: 'step-1',
    order: 1,
    name: 'Ingest Multi-Source Data',
    stage: 'Data Sources',
    description: 'Pulls daily transaction dumps from ERP SQL database, sales CSV spreadsheets, and payment gateway webhooks.',
    icon: 'Database',
    duration: '1.4s',
    sampleLog: 'Connected to 3 endpoints. Ingested 1,420 transaction records from raw_sales_drop/2026-09-29.csv.',
    status: 'pending',
  },
  {
    id: 'step-2',
    order: 2,
    name: 'Validation & Deduplication',
    stage: 'Data Validation',
    description: 'Validates mandatory fields (Date, Customer GSTIN, SKU, Total), strips duplicate order IDs, flags price discrepancies.',
    icon: 'CheckCircle2',
    duration: '0.8s',
    sampleLog: '1,420 rows audited. 3 duplicate entries pruned, 0 missing mandatory fields detected. Schema match 100%.',
    status: 'pending',
  },
  {
    id: 'step-3',
    order: 3,
    name: 'Pandas Transformation & Aggregation',
    stage: 'Processing',
    description: 'Calculates regional target attainment, salesperson commissions, product margin contribution, and month-to-date pacing.',
    icon: 'Cpu',
    duration: '2.1s',
    sampleLog: 'Aggregated metrics by 4 zones. Computed gross margins, target variance, and quota percentages.',
    status: 'pending',
  },
  {
    id: 'step-4',
    order: 4,
    name: 'Compile MIS Dashboard & PDF Report',
    stage: 'Report Generation',
    description: 'Renders executive summary tables, embeds Recharts trend visualizations, and generates executive C-Suite PDF brief.',
    icon: 'FileText',
    duration: '1.6s',
    sampleLog: 'Generated monthly_executive_mis_sep2026.pdf (4 pages). Synchronized Web BI cache tables.',
    status: 'pending',
  },
  {
    id: 'step-5',
    order: 5,
    name: 'Dispatch Multi-Channel Alerts',
    stage: 'Notification',
    description: 'Sends automated briefing email to leadership team, dispatches webhook notification to Slack/Teams with summary KPIs.',
    icon: 'BellRing',
    duration: '0.9s',
    sampleLog: 'Dispatched 4 recipient emails. Webhook delivery status 200 OK.',
    status: 'pending',
  },
];
