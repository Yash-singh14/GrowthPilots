/**
 * Predictive Analytics & Forecasting Mock Data
 * Realistic fictional demo data illustrating time-series forecasting,
 * confidence intervals, SKU demand patterns, customer segmentation, and model metrics.
 */

export interface ForecastPoint {
  period: string;
  actual?: number;
  forecast: number;
  lowerBound: number;
  upperBound: number;
  isProjected: boolean;
}

export const SALES_FORECAST_DATA: ForecastPoint[] = [
  // Historical
  { period: 'Jan 2026', actual: 4300000, forecast: 4250000, lowerBound: 4100000, upperBound: 4400000, isProjected: false },
  { period: 'Feb 2026', actual: 4470000, forecast: 4400000, lowerBound: 4250000, upperBound: 4550000, isProjected: false },
  { period: 'Mar 2026', actual: 5230000, forecast: 5100000, lowerBound: 4950000, upperBound: 5250000, isProjected: false },
  { period: 'Apr 2026', actual: 4890000, forecast: 4950000, lowerBound: 4780000, upperBound: 5120000, isProjected: false },
  { period: 'May 2026', actual: 5410000, forecast: 5350000, lowerBound: 5180000, upperBound: 5520000, isProjected: false },
  { period: 'Jun 2026', actual: 5980000, forecast: 5900000, lowerBound: 5720000, upperBound: 6080000, isProjected: false },
  { period: 'Jul 2026', actual: 5690000, forecast: 5750000, lowerBound: 5580000, upperBound: 5920000, isProjected: false },
  { period: 'Aug 2026', actual: 6100000, forecast: 6050000, lowerBound: 5880000, upperBound: 6220000, isProjected: false },
  { period: 'Sep 2026', actual: 6950000, forecast: 6850000, lowerBound: 6650000, upperBound: 7050000, isProjected: false },
  // Projected Future (Next Quarter)
  { period: 'Oct 2026 (F)', forecast: 7420000, lowerBound: 7050000, upperBound: 7800000, isProjected: true },
  { period: 'Nov 2026 (F)', forecast: 7850000, lowerBound: 7350000, upperBound: 8350000, isProjected: true },
  { period: 'Dec 2026 (F)', forecast: 8600000, lowerBound: 8000000, upperBound: 9200000, isProjected: true },
];

export const PRODUCT_DEMAND_DATA = [
  { category: 'Enterprise BI Solutions', historicalAvg: 42, forecastedAvg: 58, growth: '+38%' },
  { category: 'Process Automation Bots', historicalAvg: 36, forecastedAvg: 52, growth: '+44%' },
  { category: 'Data Pipeline Integrations', historicalAvg: 28, forecastedAvg: 37, growth: '+32%' },
  { category: 'Predictive Models', historicalAvg: 19, forecastedAvg: 31, growth: '+63%' },
];

export const CUSTOMER_SEGMENTS = [
  {
    segment: 'Champions (High LTV, Frequent)',
    count: 142,
    revenueShare: 46,
    churnRisk: 'Low (< 4%)',
    recommendedAction: 'VIP Early Access, Dedicated Account Manager',
    color: '#2563EB',
  },
  {
    segment: 'Loyal Regulars',
    count: 320,
    revenueShare: 28,
    churnRisk: 'Moderate (8-12%)',
    recommendedAction: 'Cross-sell AI assistants, Annual volume discounts',
    color: '#7C3AED',
  },
  {
    segment: 'Potential Churn / Needs Attention',
    count: 86,
    revenueShare: 16,
    churnRisk: 'High (34-45%)',
    recommendedAction: 'Proactive health-check call, Feature refresher session',
    color: '#F59E0B',
  },
  {
    segment: 'Dormant / Hibernating',
    count: 215,
    revenueShare: 10,
    churnRisk: 'Critical (> 65%)',
    recommendedAction: 'Automated re-engagement campaign, Incentive offer',
    color: '#94A3B8',
  },
];

export const MODEL_PERFORMANCE_METRICS = [
  { metric: 'Mean Absolute Percentage Error (MAPE)', value: '3.42%', status: 'Optimal', benchmark: '< 5.0%' },
  { metric: 'R² Correlation Score (Revenue Fit)', value: '0.941', status: 'High', benchmark: '> 0.90' },
  { metric: 'Root Mean Squared Error (RMSE)', value: '₹1,24,000', status: 'Within Tolerance', benchmark: '< ₹1.5L' },
  { metric: 'Forecast Horizon Precision', value: '90 Days', status: 'Validated', benchmark: 'Rolling 3 Mo.' },
];
