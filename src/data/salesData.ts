import { SalesRecord } from '../types';

/**
 * Realistic fictional sales dataset for GrowthPilots interactive dashboards and demos.
 * Clearly labeled as DEMO DATA.
 * Currency scale: INR (₹)
 */
export const RAW_SALES_RECORDS: SalesRecord[] = [
  // Q1 2026
  {
    id: 'TXN-1001',
    date: '2026-01-14',
    month: 'Jan 2026',
    quarter: 'Q1',
    salesperson: 'Aarav Sharma',
    region: 'North',
    productCategory: 'Enterprise BI',
    orders: 4,
    revenue: 1250000,
    target: 1200000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1002',
    date: '2026-01-20',
    month: 'Jan 2026',
    quarter: 'Q1',
    salesperson: 'Pooja Iyer',
    region: 'South',
    productCategory: 'Automation Bots',
    orders: 3,
    revenue: 980000,
    target: 1000000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1003',
    date: '2026-01-28',
    month: 'Jan 2026',
    quarter: 'Q1',
    salesperson: 'Rohan Mehta',
    region: 'West',
    productCategory: 'Data Pipelines',
    orders: 5,
    revenue: 1450000,
    target: 1300000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1004',
    date: '2026-02-05',
    month: 'Feb 2026',
    quarter: 'Q1',
    salesperson: 'Sneha Roy',
    region: 'East',
    productCategory: 'Enterprise BI',
    orders: 2,
    revenue: 620000,
    target: 750000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1005',
    date: '2026-02-18',
    month: 'Feb 2026',
    quarter: 'Q1',
    salesperson: 'Aarav Sharma',
    region: 'North',
    productCategory: 'Predictive Models',
    orders: 3,
    revenue: 1320000,
    target: 1200000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1006',
    date: '2026-02-24',
    month: 'Feb 2026',
    quarter: 'Q1',
    salesperson: 'Pooja Iyer',
    region: 'South',
    productCategory: 'Enterprise BI',
    orders: 6,
    revenue: 1680000,
    target: 1500000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1007',
    date: '2026-03-10',
    month: 'Mar 2026',
    quarter: 'Q1',
    salesperson: 'Rohan Mehta',
    region: 'West',
    productCategory: 'Automation Bots',
    orders: 7,
    revenue: 1890000,
    target: 1700000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1008',
    date: '2026-03-25',
    month: 'Mar 2026',
    quarter: 'Q1',
    salesperson: 'Sneha Roy',
    region: 'East',
    productCategory: 'Data Pipelines',
    orders: 3,
    revenue: 850000,
    target: 900000,
    pipelineStage: 'Won',
  },

  // Q2 2026
  {
    id: 'TXN-1009',
    date: '2026-04-08',
    month: 'Apr 2026',
    quarter: 'Q2',
    salesperson: 'Aarav Sharma',
    region: 'North',
    productCategory: 'Automation Bots',
    orders: 5,
    revenue: 1420000,
    target: 1350000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1010',
    date: '2026-04-19',
    month: 'Apr 2026',
    quarter: 'Q2',
    salesperson: 'Pooja Iyer',
    region: 'South',
    productCategory: 'Predictive Models',
    orders: 4,
    revenue: 1540000,
    target: 1400000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1011',
    date: '2026-05-12',
    month: 'May 2026',
    quarter: 'Q2',
    salesperson: 'Rohan Mehta',
    region: 'West',
    productCategory: 'Enterprise BI',
    orders: 8,
    revenue: 2150000,
    target: 1900000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1012',
    date: '2026-05-22',
    month: 'May 2026',
    quarter: 'Q2',
    salesperson: 'Sneha Roy',
    region: 'East',
    productCategory: 'Automation Bots',
    orders: 4,
    revenue: 960000,
    target: 1050000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1013',
    date: '2026-06-04',
    month: 'Jun 2026',
    quarter: 'Q2',
    salesperson: 'Aarav Sharma',
    region: 'North',
    productCategory: 'Data Pipelines',
    orders: 6,
    revenue: 1780000,
    target: 1600000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1014',
    date: '2026-06-18',
    month: 'Jun 2026',
    quarter: 'Q2',
    salesperson: 'Pooja Iyer',
    region: 'South',
    productCategory: 'Enterprise BI',
    orders: 7,
    revenue: 1920000,
    target: 1750000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1015',
    date: '2026-06-27',
    month: 'Jun 2026',
    quarter: 'Q2',
    salesperson: 'Rohan Mehta',
    region: 'West',
    productCategory: 'Predictive Models',
    orders: 5,
    revenue: 2280000,
    target: 2000000,
    pipelineStage: 'Won',
  },

  // Q3 2026
  {
    id: 'TXN-1016',
    date: '2026-07-09',
    month: 'Jul 2026',
    quarter: 'Q3',
    salesperson: 'Aarav Sharma',
    region: 'North',
    productCategory: 'Enterprise BI',
    orders: 7,
    revenue: 1950000,
    target: 1800000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1017',
    date: '2026-07-21',
    month: 'Jul 2026',
    quarter: 'Q3',
    salesperson: 'Pooja Iyer',
    region: 'South',
    productCategory: 'Data Pipelines',
    orders: 5,
    revenue: 1620000,
    target: 1550000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1018',
    date: '2026-08-04',
    month: 'Aug 2026',
    quarter: 'Q3',
    salesperson: 'Rohan Mehta',
    region: 'West',
    productCategory: 'Enterprise BI',
    orders: 9,
    revenue: 2490000,
    target: 2200000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1019',
    date: '2026-08-16',
    month: 'Aug 2026',
    quarter: 'Q3',
    salesperson: 'Sneha Roy',
    region: 'East',
    productCategory: 'Predictive Models',
    orders: 4,
    revenue: 1120000,
    target: 1200000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1020',
    date: '2026-09-02',
    month: 'Sep 2026',
    quarter: 'Q3',
    salesperson: 'Aarav Sharma',
    region: 'North',
    productCategory: 'Predictive Models',
    orders: 8,
    revenue: 2310000,
    target: 2000000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1021',
    date: '2026-09-15',
    month: 'Sep 2026',
    quarter: 'Q3',
    salesperson: 'Pooja Iyer',
    region: 'South',
    productCategory: 'Automation Bots',
    orders: 6,
    revenue: 1850000,
    target: 1700000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1022',
    date: '2026-09-27',
    month: 'Sep 2026',
    quarter: 'Q3',
    salesperson: 'Rohan Mehta',
    region: 'West',
    productCategory: 'Data Pipelines',
    orders: 10,
    revenue: 2750000,
    target: 2400000,
    pipelineStage: 'Won',
  },
  {
    id: 'TXN-1023',
    date: '2026-09-29',
    month: 'Sep 2026',
    quarter: 'Q3',
    salesperson: 'Sneha Roy',
    region: 'East',
    productCategory: 'Enterprise BI',
    orders: 5,
    revenue: 1290000,
    target: 1350000,
    pipelineStage: 'Won',
  },
];

/**
 * Active deals in pipeline for funnel analysis
 */
export const PIPELINE_STAGES_DATA = [
  { stage: 'Prospecting / Leads', count: 48, value: 8400000, conversion: 85 },
  { stage: 'Needs Analysis / Discovery', count: 32, value: 6150000, conversion: 68 },
  { stage: 'Proposal / Solution Demo', count: 21, value: 4320000, conversion: 54 },
  { stage: 'Negotiation / Legal', count: 12, value: 2850000, conversion: 82 },
  { stage: 'Closed - Won (This Quarter)', count: 24, value: 8320000, conversion: 100 },
];

/**
 * Filter calculation helper that guarantees consistency between KPIs and charts
 */
export function calculateFilteredSales(
  dateRange: string,
  region: string,
  category: string,
  salesperson: string
) {
  let records = [...RAW_SALES_RECORDS];

  if (dateRange === 'Q1-2026') {
    records = records.filter(r => r.quarter === 'Q1');
  } else if (dateRange === 'Q2-2026') {
    records = records.filter(r => r.quarter === 'Q2');
  } else if (dateRange === 'Q3-2026') {
    records = records.filter(r => r.quarter === 'Q3');
  }

  if (region !== 'All') {
    records = records.filter(r => r.region === region);
  }

  if (category !== 'All') {
    records = records.filter(r => r.productCategory === category);
  }

  if (salesperson !== 'All') {
    records = records.filter(r => r.salesperson === salesperson);
  }

  // Aggregate metrics
  const totalSales = records.reduce((sum, r) => sum + r.revenue, 0);
  const totalTarget = records.reduce((sum, r) => sum + r.target, 0);
  const totalOrders = records.reduce((sum, r) => sum + r.orders, 0);
  const averageOrderValue = totalOrders > 0 ? Math.round(totalSales / totalOrders) : 0;
  const achievementRate = totalTarget > 0 ? (totalSales / totalTarget) * 100 : 0;

  // Monthly trend grouping
  const monthMap = new Map<string, { month: string; actual: number; target: number; orders: number }>();
  // Pre-seed months based on range to preserve order
  const monthList =
    dateRange === 'Q1-2026'
      ? ['Jan 2026', 'Feb 2026', 'Mar 2026']
      : dateRange === 'Q2-2026'
      ? ['Apr 2026', 'May 2026', 'Jun 2026']
      : dateRange === 'Q3-2026'
      ? ['Jul 2026', 'Aug 2026', 'Sep 2026']
      : ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026', 'Jul 2026', 'Aug 2026', 'Sep 2026'];

  monthList.forEach(m => monthMap.set(m, { month: m, actual: 0, target: 0, orders: 0 }));

  records.forEach(r => {
    const existing = monthMap.get(r.month) || { month: r.month, actual: 0, target: 0, orders: 0 };
    existing.actual += r.revenue;
    existing.target += r.target;
    existing.orders += r.orders;
    monthMap.set(r.month, existing);
  });
  const monthlyTrends = Array.from(monthMap.values());

  // Regional breakdown
  const regionsList = ['North', 'West', 'South', 'East'];
  const regionalBreakdown = regionsList
    .map(reg => {
      const regRecords = records.filter(r => r.region === reg);
      const rev = regRecords.reduce((sum, r) => sum + r.revenue, 0);
      const tgt = regRecords.reduce((sum, r) => sum + r.target, 0);
      return {
        region: reg,
        revenue: rev,
        target: tgt,
        achievementRate: tgt > 0 ? Math.round((rev / tgt) * 100) : 0,
        share: totalSales > 0 ? Math.round((rev / totalSales) * 100) : 0,
      };
    })
    .filter(r => region === 'All' || r.region === region);

  // Salesperson Leaderboard
  const repNames = Array.from(new Set(RAW_SALES_RECORDS.map(r => r.salesperson)));
  const salespersonLeaderboard = repNames
    .map(name => {
      const repRecords = records.filter(r => r.salesperson === name);
      const rev = repRecords.reduce((sum, r) => sum + r.revenue, 0);
      const tgt = repRecords.reduce((sum, r) => sum + r.target, 0);
      const ords = repRecords.reduce((sum, r) => sum + r.orders, 0);
      const reg = repRecords.length > 0 ? repRecords[0].region : 'N/A';
      return {
        name,
        region: reg,
        revenue: rev,
        target: tgt,
        achievementRate: tgt > 0 ? Math.round((rev / tgt) * 100) : 0,
        dealsClosed: ords,
        pipelineActive: Math.round(rev * 0.45),
      };
    })
    .filter(rep => rep.revenue > 0)
    .sort((a, b) => b.revenue - a.revenue);

  // Product categories breakdown
  const catNames = ['Enterprise BI', 'Automation Bots', 'Data Pipelines', 'Predictive Models'];
  const categoryBreakdown = catNames
    .map(cat => {
      const catRecords = records.filter(r => r.productCategory === cat);
      const rev = catRecords.reduce((sum, r) => sum + r.revenue, 0);
      return {
        category: cat,
        revenue: rev,
        share: totalSales > 0 ? Math.round((rev / totalSales) * 100) : 0,
      };
    })
    .filter(c => category === 'All' || c.category === category);

  const topRep = salespersonLeaderboard.length > 0 ? salespersonLeaderboard[0].name : 'N/A';
  const salesGrowth = 18.4; // Q3 vs Q2 annualized benchmark

  return {
    filteredRecords: records,
    kpis: {
      totalSales,
      totalTarget,
      achievementRate,
      totalOrders,
      averageOrderValue,
      salesGrowth,
      pipelineValue: 21720000,
      topRep,
    },
    monthlyTrends,
    regionalBreakdown,
    salespersonLeaderboard,
    categoryBreakdown,
  };
}
