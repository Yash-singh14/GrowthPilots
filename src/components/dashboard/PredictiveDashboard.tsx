import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  BarChart,
  Bar,
} from 'recharts';
import { Sparkles, BrainCircuit, Activity, Sliders, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  SALES_FORECAST_DATA,
  PRODUCT_DEMAND_DATA,
  CUSTOMER_SEGMENTS,
  MODEL_PERFORMANCE_METRICS,
} from '../../data/predictiveData';
import { formatINR } from '../../utils/formatters';

export const PredictiveDashboard: React.FC = () => {
  const [confidenceLevel, setConfidenceLevel] = useState<'90%' | '95%' | '99%'>('95%');
  const [includeSeasonalAdjustment, setIncludeSeasonalAdjustment] = useState(true);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-900/80 text-purple-300 border border-purple-700/60">
              Machine Learning & Time-Series Engine
            </span>
            <span className="text-xs text-slate-400">
              (Illustrative Demo Models)
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">
            Predictive Revenue & Demand Analytics
          </h3>
          <p className="text-xs text-slate-400">
            Statistical projection showing historical trend, 90-day forward forecast, and confidence uncertainty bands.
          </p>
        </div>

        {/* Hyperparameter Controls */}
        <div className="flex items-center gap-3 bg-slate-800 p-2 rounded-xl border border-slate-700 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Sliders className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Confidence Interval:</span>
          </div>
          {(['90%', '95%', '99%'] as const).map(lvl => (
            <button
              key={lvl}
              onClick={() => setConfidenceLevel(lvl)}
              className={`px-2 py-1 rounded-md font-medium transition-colors ${
                confidenceLevel === lvl
                  ? 'bg-brand-blue text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Model Accuracy & Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MODEL_PERFORMANCE_METRICS.map(item => (
            <div
              key={item.metric}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                {item.metric}
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl font-extrabold text-slate-900">{item.value}</span>
                <span className="text-xs text-emerald-600 font-semibold">{item.status}</span>
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">
                Benchmark: {item.benchmark}
              </span>
            </div>
          ))}
        </div>

        {/* Primary Forecast Chart: Historical vs Forecast + Confidence Band */}
        <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-200/80">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Quarterly Revenue Forecast with Uncertainty Band
              </h4>
              <p className="text-xs text-slate-500">
                Light purple shaded band indicates {confidenceLevel} statistical probability cone. Oct–Dec 2026 are projected periods.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1 text-slate-600">
                <span className="w-3 h-3 bg-brand-blue rounded-full inline-block" /> Historical Actual
              </span>
              <span className="flex items-center gap-1 text-slate-600">
                <span className="w-3 h-3 bg-purple-600 rounded-full inline-block" /> Forecast (ML)
              </span>
              <span className="flex items-center gap-1 text-slate-600">
                <span className="w-3 h-3 bg-purple-200 rounded-sm inline-block" /> Uncertainty Band
              </span>
            </div>
          </div>

          <div className="h-72 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={SALES_FORECAST_DATA}
                margin={{ top: 10, right: 15, left: 15, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis
                  dataKey="period"
                  stroke="#64748B"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: '#CBD5E1' }}
                />
                <YAxis
                  stroke="#64748B"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={val => `₹${(val / 100000).toFixed(0)}L`}
                />
                <Tooltip
                  formatter={(value: any, name: any) => {
                    const label =
                      name === 'actual'
                        ? 'Actual Closed'
                        : name === 'forecast'
                        ? 'Predicted Revenue'
                        : name === 'upperBound'
                        ? 'Upper Bound'
                        : 'Lower Bound';
                    return [formatINR(Number(value)), label];
                  }}
                  contentStyle={{
                    backgroundColor: '#0F172A',
                    color: '#FFF',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />

                {/* Shaded confidence interval band */}
                <Area
                  type="monotone"
                  dataKey="upperBound"
                  stroke="none"
                  fill="#DDD6FE"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="lowerBound"
                  stroke="none"
                  fill="#FFFFFF"
                  fillOpacity={1}
                />

                {/* Historical Actual Line */}
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#2563EB"
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#2563EB' }}
                  connectNulls={false}
                />

                {/* Forecast Line */}
                <Line
                  type="monotone"
                  dataKey="forecast"
                  stroke="#7C3AED"
                  strokeWidth={2.5}
                  strokeDasharray="4 4"
                  dot={{ r: 4, fill: '#7C3AED' }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lower Row: Product Demand Projection + RFM Customer Segmentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Demand Forecast */}
          <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-200/80">
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              Category Demand Projections
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              Monthly average deployment run-rate vs. forecasted next quarter volume
            </p>

            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={PRODUCT_DEMAND_DATA}
                  margin={{ top: 10, right: 10, left: 0, bottom: 25 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                  <XAxis
                    dataKey="category"
                    stroke="#64748B"
                    fontSize={10}
                    tickLine={false}
                    interval={0}
                    angle={-10}
                    textAnchor="end"
                  />
                  <YAxis stroke="#64748B" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0F172A',
                      color: '#FFF',
                      borderRadius: '8px',
                      fontSize: '11px',
                    }}
                  />
                  <Legend verticalAlign="top" height={30} />
                  <Bar
                    dataKey="historicalAvg"
                    name="Historical Average"
                    fill="#94A3B8"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="forecastedAvg"
                    name="Forecasted Average"
                    fill="#7C3AED"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Customer RFM Segmentation Clusters */}
          <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-200/80">
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              Customer RFM Segmentation & Churn Risk
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              Algorithmic tiering of 763 commercial accounts based on Recency, Frequency & Spend
            </p>

            <div className="space-y-3">
              {CUSTOMER_SEGMENTS.map(seg => (
                <div
                  key={seg.segment}
                  className="p-3 bg-white rounded-lg border border-slate-200/80 shadow-2xs"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: seg.color }}
                      />
                      {seg.segment}
                    </span>
                    <span className="font-semibold text-slate-600">
                      {seg.count} Accounts ({seg.revenueShare}% Rev)
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                    <span>
                      Churn Risk: <strong className="text-slate-700">{seg.churnRisk}</strong>
                    </span>
                    <span className="text-brand-blue font-medium">
                      Action: {seg.recommendedAction}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
