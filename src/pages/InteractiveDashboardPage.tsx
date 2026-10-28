import React from 'react';
import { Badge } from '../components/common/Badge';
import { InteractiveSalesDashboard } from '../components/dashboard/InteractiveSalesDashboard';
import { Download, ShieldCheck, Info, FileSpreadsheet } from 'lucide-react';

export const InteractiveDashboardPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <Badge variant="cyan">Commercial Intelligence Hub</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Live Interactive Sales Dashboard
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore dynamic multi-dimensional analytics. Adjust quarters, territory regions, product lines, and sales representatives. All KPI cards, trends, and rankings synchronize automatically from the underlying audited ledger.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Dashboard View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-brand-blue flex-shrink-0" />
            <span>
              <strong>Dynamic Sandbox:</strong> Try filtering by <em>"West Region"</em> or <em>"Enterprise BI"</em> to inspect live quota pacing and rep scorecards. Click <strong>"Export CSV"</strong> to download the currently active sample records.
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 flex-shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>INR (₹) Standard Formats</span>
          </div>
        </div>

        <InteractiveSalesDashboard compactMode={false} showExport={true} />
      </section>
    </div>
  );
};
