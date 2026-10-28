import { AIChatMessage } from '../types';

export interface PredefinedQuery {
  id: string;
  question: string;
  category: 'Sales' | 'Targets' | 'Products' | 'Summary' | 'Leads';
  response: AIChatMessage;
}

export const DEMO_PREDEFINED_QUERIES: PredefinedQuery[] = [
  {
    id: 'q1',
    question: 'What were our total sales this month?',
    category: 'Sales',
    response: {
      id: 'resp-1',
      sender: 'assistant',
      timestamp: 'Just now',
      text: 'Based on our September 2026 sales ledger (Demo Data), total closed sales revenue reached ₹82,00,000 across 29 customer transactions, achieving 109.3% of the monthly target of ₹75,00,000.',
      structuredData: {
        type: 'kpis',
        kpis: [
          { label: 'September Revenue', value: '₹82,00,000', note: '+15.2% vs Aug' },
          { label: 'September Target', value: '₹75,00,000', note: '109.3% Attainment' },
          { label: 'Total Closed Deals', value: '29 Deals', note: 'Avg ₹2.82L / deal' },
          { label: 'Top Contributor', value: 'Rohan Mehta', note: 'West Region (₹27.5L)' },
        ],
      },
    },
  },
  {
    id: 'q2',
    question: 'Which region missed its sales target?',
    category: 'Targets',
    response: {
      id: 'resp-2',
      sender: 'assistant',
      timestamp: 'Just now',
      text: 'Analyzing regional performance for Q3 2026: The East Region missed its target with a 92.4% achievement rate (₹33,70,000 actual vs ₹36,50,000 target). All other three regions (West, North, South) exceeded 100% of their quotas.',
      structuredData: {
        type: 'table',
        headers: ['Region', 'Target', 'Actual Revenue', 'Attainment', 'Status'],
        rows: [
          ['West', '₹66,00,000', '₹75,30,000', '114.1%', 'Exceeded Target'],
          ['North', '₹58,00,000', '₹65,80,000', '113.4%', 'Exceeded Target'],
          ['South', '₹48,00,000', '₹53,90,000', '112.3%', 'Exceeded Target'],
          ['East', '₹36,50,000', '₹33,70,000', '92.4%', 'Target Missed (-₹2.8L)'],
        ],
      },
      requiresApproval: true,
      approvalAction: 'Draft East Region diagnostic memo & schedule review with Sneha Roy',
    },
  },
  {
    id: 'q3',
    question: 'Show the top five products by revenue.',
    category: 'Products',
    response: {
      id: 'resp-3',
      sender: 'assistant',
      timestamp: 'Just now',
      text: 'Here is the revenue ranking for our top product solutions year-to-date (demo catalog):',
      structuredData: {
        type: 'table',
        headers: ['Product Solution', 'Units / Deals', 'Total Revenue', 'Avg Deal Size', 'Revenue Share'],
        rows: [
          ['Enterprise BI Platform & Dashboards', '48 deployments', '₹1,44,20,000', '₹3,00,416', '36%'],
          ['Process Automation Bots (ETL/RPA)', '38 deployments', '₹98,40,000', '₹2,58,947', '25%'],
          ['Predictive Models & Forecasting', '26 deployments', '₹85,60,000', '₹3,29,230', '22%'],
          ['Data Pipeline & Cloud Warehouse Sync', '24 deployments', '₹67,50,000', '₹2,81,250', '17%'],
        ],
      },
    },
  },
  {
    id: 'q4',
    question: 'Summarize the monthly business performance.',
    category: 'Summary',
    response: {
      id: 'resp-4',
      sender: 'assistant',
      timestamp: 'Just now',
      text: 'Executive Summary for September 2026:\n\n1. Revenue: Delivered ₹82,00,000, finishing +9.3% above monthly target.\n2. Key Driver: Strong demand for Enterprise BI in West zone (Rohan Mehta closed ₹27.5L).\n3. Flagged Item: East region closed at 92.4% of quota, primarily due to delayed procurement approvals on 2 industrial accounts.\n4. Pipeline Velocity: ₹2.17 Cr active pipeline across 48 ongoing negotiations with an average close cycle of 38 days.',
      structuredData: {
        type: 'kpis',
        kpis: [
          { label: 'Overall Pacing', value: '109.3%', note: 'Ahead of Plan' },
          { label: 'Margin Run-Rate', value: '41.2%', note: '+1.8% vs Q2' },
          { label: 'Active Pipeline', value: '₹2.17 Cr', note: 'Healthy Coverage' },
        ],
      },
    },
  },
  {
    id: 'q5',
    question: 'Which leads require follow-up?',
    category: 'Leads',
    response: {
      id: 'resp-5',
      sender: 'assistant',
      timestamp: 'Just now',
      text: 'Identified 3 high-priority commercial leads requiring immediate follow-up based on stage aging (> 7 days without rep interaction) and deal value:',
      structuredData: {
        type: 'table',
        headers: ['Account Name', 'Contact', 'Deal Value', 'Stalled Stage', 'Inactivity'],
        rows: [
          ['Apex Logistics Hubs', 'Vikas Bansal (VP Ops)', '₹14,50,000', 'Proposal Submitted', '9 Days Inactive'],
          ['Mahalaxmi Forgings', 'Rajesh Patel (MD)', '₹11,00,000', 'Contract Negotiation', '8 Days Inactive'],
          ['Zenith Consumer Brands', 'Anita Menon (Finance)', '₹8,20,000', 'Demo Completed', '7 Days Inactive'],
        ],
      },
      requiresApproval: true,
      approvalAction: 'Dispatch automated reminder emails to assigned account executives (Aarav & Pooja)',
    },
  },
];

export function getAssistantResponse(userInput: string): AIChatMessage {
  const normalized = userInput.toLowerCase().trim();

  const match = DEMO_PREDEFINED_QUERIES.find(q =>
    normalized.includes(q.question.toLowerCase()) ||
    (q.category === 'Sales' && (normalized.includes('total sales') || normalized.includes('revenue this month') || normalized.includes('sales this month'))) ||
    (q.category === 'Targets' && (normalized.includes('missed') || normalized.includes('target') || normalized.includes('quota') || normalized.includes('region missed'))) ||
    (q.category === 'Products' && (normalized.includes('top product') || normalized.includes('products') || normalized.includes('top five') || normalized.includes('revenue by product'))) ||
    (q.category === 'Summary' && (normalized.includes('summarize') || normalized.includes('performance') || normalized.includes('monthly summary') || normalized.includes('overview'))) ||
    (q.category === 'Leads' && (normalized.includes('lead') || normalized.includes('follow-up') || normalized.includes('follow up') || normalized.includes('stalled deals')))
  );

  if (match) {
    return {
      ...match.response,
      id: 'resp-' + Date.now(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  }

  // Fallback answer grounded in our fictional system
  return {
    id: 'resp-' + Date.now(),
    sender: 'assistant',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    text: `I searched the GrowthPilots internal demo database for "${userInput}". Our demo repository contains verified records for Sales Performance (Q1-Q3 2026), Regional Quotas, Product Solutions, and Lead Pipelines.\n\nTry asking one of our guided queries like "What were our total sales this month?", "Which region missed its sales target?", or "Which leads require follow-up?".`,
  };
}
