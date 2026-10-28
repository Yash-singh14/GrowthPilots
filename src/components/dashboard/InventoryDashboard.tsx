import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  PieChart,
  Pie,
} from 'recharts';
import { Package, AlertCircle, TrendingDown, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { formatINR } from '../../utils/formatters';

const AGING_DATA = [
  { bucket: '0 - 30 Days (Fresh)', value: 4850000, count: 820, color: '#10B981' },
  { bucket: '31 - 60 Days (Normal)', value: 2420000, count: 340, color: '#2563EB' },
  { bucket: '61 - 90 Days (Slow)', value: 1150000, count: 180, color: '#F59E0B' },
  { bucket: '90+ Days (Dormant)', value: 920000, count: 80, color: '#EF4444' },
];

const FAST_SLOW_SKUS = [
  { sku: 'BI-ENT-LIC-01', name: 'Enterprise Analytics Suite', velocity: 'Fast Moving', turns: '8.4x', stock: 142, status: 'Healthy' },
  { sku: 'RPA-BOT-FIN-02', name: 'Financial Reconciliation Bot', velocity: 'Fast Moving', turns: '7.2x', stock: 98, status: 'Healthy' },
  { sku: 'ETL-SQL-SYNC-03', name: 'Database Cloud Connector', velocity: 'Moderate', turns: '4.6x', stock: 65, status: 'Normal' },
  { sku: 'LEG-CSV-PARS-04', name: 'Legacy File Ingestion Module', velocity: 'Slow Moving', turns: '1.8x', stock: 24, status: 'Review' },
  { sku: 'OLD-SCRP-MOD-05', name: 'Archived Scraper Plugin', velocity: 'Dormant (>90d)', turns: '0.4x', stock: 12, status: 'Clearance' },
];

export const InventoryDashboard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="p-5 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
              Supply Chain & Inventory Engine
            </span>
            <span className="text-xs text-slate-400">(Illustrative Demo)</span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">
            SKU Velocity & Working Capital Aging Matrix
          </h3>
          <p className="text-xs text-slate-400">
            Real-time stock turnover analysis across 1,420 monitored SKUs in 3 distribution centers.
          </p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Total Inventory Value</span>
            <div className="text-xl font-bold text-slate-900 mt-1">₹93,40,000</div>
            <span className="text-[11px] text-slate-500">1,420 Active SKUs</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Inventory Turnover</span>
            <div className="text-xl font-bold text-slate-900 mt-1">6.2x Turns</div>
            <span className="text-[11px] text-emerald-600 font-semibold">+0.8x vs Prior Quarter</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Stockout Incidents</span>
            <div className="text-xl font-bold text-slate-900 mt-1">0 Incidents</div>
            <span className="text-[11px] text-emerald-600 font-semibold">100% Fulfillment Pacing</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Aged Stock Risk (&gt;90d)</span>
            <div className="text-xl font-bold text-amber-600 mt-1">₹9,20,000</div>
            <span className="text-[11px] text-amber-700 font-medium">80 SKUs Identified</span>
          </div>
        </div>

        {/* Charts: Aging Bar Chart + Fast/Slow Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Inventory Aging Stratification (INR)
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              Distribution of capital across aging brackets
            </p>

            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={AGING_DATA} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                  <XAxis dataKey="bucket" stroke="#64748B" fontSize={10} tickLine={false} />
                  <YAxis
                    stroke="#64748B"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={v => `₹${(v / 100000).toFixed(0)}L`}
                  />
                  <Tooltip
                    formatter={(v: any) => [formatINR(Number(v)), 'Valuation']}
                    contentStyle={{ backgroundColor: '#0F172A', color: '#FFF', borderRadius: '8px', fontSize: '11px' }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {AGING_DATA.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Fast vs Slow SKU velocity sample table */}
          <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              SKU Turnover Velocity Sample
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              Fast-moving vs. slow-moving inventory classification
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase text-[10px]">
                    <th className="pb-2">SKU Code</th>
                    <th className="pb-2">Classification</th>
                    <th className="pb-2 text-right">Turns</th>
                    <th className="pb-2 text-right">Stock</th>
                    <th className="pb-2 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/60 font-medium">
                  {FAST_SLOW_SKUS.map(sku => (
                    <tr key={sku.sku}>
                      <td className="py-2 text-slate-900">
                        <div className="font-bold">{sku.sku}</div>
                        <div className="text-[10px] text-slate-500">{sku.name}</div>
                      </td>
                      <td className="py-2 text-slate-700">{sku.velocity}</td>
                      <td className="py-2 text-right font-bold text-slate-900">{sku.turns}</td>
                      <td className="py-2 text-right text-slate-600">{sku.stock}</td>
                      <td className="py-2 text-center">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            sku.status === 'Healthy'
                              ? 'bg-emerald-100 text-emerald-800'
                              : sku.status === 'Normal'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {sku.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
