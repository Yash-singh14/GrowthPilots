export type Region = 'All' | 'North' | 'South' | 'West' | 'East';
export type DateRange = 'Q1-2026' | 'Q2-2026' | 'Q3-2026' | 'Full-Year-2026';
export type ProductCategory = 'All' | 'Enterprise BI' | 'Automation Bots' | 'Data Pipelines' | 'Predictive Models';

export interface SalesRecord {
  id: string;
  date: string;
  month: string;
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  salesperson: string;
  region: 'North' | 'South' | 'West' | 'East';
  productCategory: 'Enterprise BI' | 'Automation Bots' | 'Data Pipelines' | 'Predictive Models';
  orders: number;
  revenue: number;
  target: number;
  pipelineStage: 'Lead' | 'Qualified' | 'Proposal' | 'Negotiation' | 'Won';
}

export interface KPIStats {
  totalSales: number;
  totalTarget: number;
  achievementRate: number;
  totalOrders: number;
  averageOrderValue: number;
  salesGrowth: number;
  pipelineValue: number;
  topRep: string;
}

export interface MonthlyTrend {
  month: string;
  actual: number;
  target: number;
  orders: number;
}

export interface RegionSummary {
  region: string;
  revenue: number;
  target: number;
  achievementRate: number;
  share: number;
}

export interface SalespersonSummary {
  name: string;
  region: string;
  revenue: number;
  target: number;
  achievementRate: number;
  dealsClosed: number;
  pipelineActive: number;
}

export interface WorkflowNode {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'running' | 'success' | 'warning';
  stepNumber: number;
  type: 'Source' | 'Validation' | 'Processing' | 'Report' | 'Notification';
  logs: string[];
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  text: string;
  structuredData?: {
    type: 'table' | 'kpis' | 'chart';
    headers?: string[];
    rows?: (string | number)[][];
    kpis?: { label: string; value: string; note?: string }[];
  };
  requiresApproval?: boolean;
  approvalAction?: string;
  isApproved?: boolean;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
  benefits: string[];
  useCases: { title: string; description: string; impact: string }[];
  deliverables: string[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  slug: string;
  industry: string;
  isDemo: boolean;
  badge: string;
  tools: string[];
  problem: string;
  solution: string;
  outcomes: string[];
  kpis: { label: string; value: string; trend: string }[];
}
