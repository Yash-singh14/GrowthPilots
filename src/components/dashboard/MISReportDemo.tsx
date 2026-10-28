import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Download,
  Calendar,
  CheckCircle2,
  Clock,
  Printer,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  MailCheck,
} from 'lucide-react';
import { formatINR, formatPercent, formatNumber } from '../../utils/formatters';

export const MISReportDemo: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'Daily' | 'Weekly' | 'Monthly' | 'Annual'>('Monthly');
  const [selectedDept, setSelectedDept] = useState<'Executive' | 'Sales' | 'Finance' | 'Operations'>('Executive');

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden text-slate-800">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white p-5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-900 text-blue-300 border border-blue-700/60">
              Automated MIS Suite
            </span>
            <span className="text-xs text-slate-400">Monthly Close Edition</span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">
            Executive MIS & Board Reporting Brief
          </h3>
          <p className="text-xs text-slate-400">
            Automated synthesis of ERP General Ledger, CRM Invoices, and Warehouse Operations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Cadence Pills */}
          <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs">
            {(['Daily', 'Weekly', 'Monthly', 'Annual'] as const).map(cadence => (
              <button
                key={cadence}
                onClick={() => setSelectedPeriod(cadence)}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  selectedPeriod === cadence
                    ? 'bg-brand-blue text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cadence}
              </button>
            ))}
          </div>

          <button
            onClick={() => window.print()}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            title="Print MIS Report"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Department Tabs */}
      <div className="px-6 py-3 bg-slate-50 border-b border-slate-200/80 flex items-center gap-2 overflow-x-auto text-xs font-semibold">
        {(['Executive', 'Sales', 'Finance', 'Operations'] as const).map(dept => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedDept === dept
                ? 'bg-white text-brand-blue shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {dept} Review
          </button>
        ))}
      </div>

      <div className="p-6 space-y-6">
        {/* Scheduled Dispatch Status Banner */}
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600 text-white">
              <MailCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">
                Automated Digest Status: Dispatched Successfully
              </span>
              <span className="text-slate-600">
                Delivered to 8 Directors & Key Stakeholders on Oct 1, 2026 at 07:30 AM IST.
              </span>
            </div>
          </div>
          <span className="font-mono text-blue-700 font-semibold bg-white px-2.5 py-1 rounded-md border border-blue-200">
            Next Schedule: Mon, 07:30 AM
          </span>
        </div>

        {/* Executive Summary Flash Scorecard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Gross Revenue</span>
            <div className="text-xl font-bold text-slate-900 mt-1">₹82,00,000</div>
            <span className="text-[11px] text-emerald-600 font-medium">+15.2% vs Previous Mo.</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Gross Margin %</span>
            <div className="text-xl font-bold text-slate-900 mt-1">41.8%</div>
            <span className="text-[11px] text-emerald-600 font-medium">+1.4% Target Variance</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Operating EBITDA</span>
            <div className="text-xl font-bold text-slate-900 mt-1">₹18,40,000</div>
            <span className="text-[11px] text-slate-500 font-medium">22.4% EBITDA Margin</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Debtor Days (DSO)</span>
            <div className="text-xl font-bold text-slate-900 mt-1">39 Days</div>
            <span className="text-[11px] text-emerald-600 font-medium">-4 Days Improvement</span>
          </div>
        </div>

        {/* Consolidated Departmental Variance Table */}
        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Departmental Performance & Variance Ledger ({selectedPeriod})
            </h4>
            <span className="text-[11px] text-slate-500">Values in INR (₹)</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/50 text-slate-400 font-semibold uppercase text-[10px] border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-4">Line Item / Metric</th>
                  <th className="py-2.5 px-4 text-right">Budget / Target</th>
                  <th className="py-2.5 px-4 text-right">Actual Realized</th>
                  <th className="py-2.5 px-4 text-right">Variance (₹)</th>
                  <th className="py-2.5 px-4 text-right">Attainment</th>
                  <th className="py-2.5 px-4 text-center">Health</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <tr>
                  <td className="py-2.5 px-4 font-bold text-slate-900">Commercial Sales Revenue</td>
                  <td className="py-2.5 px-4 text-right text-slate-600">₹75,00,000</td>
                  <td className="py-2.5 px-4 text-right font-bold text-slate-900">₹82,00,000</td>
                  <td className="py-2.5 px-4 text-right text-emerald-600 font-bold">+₹7,00,000</td>
                  <td className="py-2.5 px-4 text-right">109.3%</td>
                  <td className="py-2.5 px-4 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      Surpassed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold text-slate-900">Cost of Goods Sold (COGS)</td>
                  <td className="py-2.5 px-4 text-right text-slate-600">₹44,00,000</td>
                  <td className="py-2.5 px-4 text-right font-bold text-slate-900">₹47,72,000</td>
                  <td className="py-2.5 px-4 text-right text-rose-600 font-bold">-₹3,72,000</td>
                  <td className="py-2.5 px-4 text-right">108.5%</td>
                  <td className="py-2.5 px-4 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                      Within Limit
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold text-slate-900">Sales & Marketing Overheads</td>
                  <td className="py-2.5 px-4 text-right text-slate-600">₹8,50,000</td>
                  <td className="py-2.5 px-4 text-right font-bold text-slate-900">₹7,90,000</td>
                  <td className="py-2.5 px-4 text-right text-emerald-600 font-bold">+₹60,000</td>
                  <td className="py-2.5 px-4 text-right">92.9%</td>
                  <td className="py-2.5 px-4 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      Under Budget
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold text-slate-900">Plant / Operational Overheads</td>
                  <td className="py-2.5 px-4 text-right text-slate-600">₹8,00,000</td>
                  <td className="py-2.5 px-4 text-right font-bold text-slate-900">₹7,98,000</td>
                  <td className="py-2.5 px-4 text-right text-emerald-600 font-bold">+₹2,000</td>
                  <td className="py-2.5 px-4 text-right">99.8%</td>
                  <td className="py-2.5 px-4 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      On Target
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Automated Management Narrative Digest */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
            <CheckCircle2 className="w-4 h-4 text-brand-blue" />
            <span>Automated Management Narrative Summary:</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Overall revenue pacing exceeded expectations by 9.3%, driven by higher volume throughput in West Region enterprise deployments. COGS expanded in line with higher delivery activity but remained within the 58.2% gross margin tolerance ceiling. Debtor turnaround contracted from 43 to 39 days following automated payment reminder notifications. No emergency capex or credit anomalies flagged.
          </p>
        </div>
      </div>
    </div>
  );
};
