import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle2, ArrowRight, Calendar, Filter, Download } from 'lucide-react';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { InteractiveSalesDashboard } from '../../components/dashboard/InteractiveSalesDashboard';
import { SERVICES_LIST } from '../../data/servicesData';

export const SalesPerformance: React.FC = () => {
  const service = SERVICES_LIST[1]; // Sales Performance Management

  return (
    <div className="space-y-14 pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <Link to="/services" className="text-xs text-brand-cyan hover:underline">
              Services
            </Link>
            <span className="text-slate-500 text-xs">/</span>
            <span className="text-xs text-slate-300">Sales Performance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Sales Performance Management
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Understand your sales performance, identify gaps and help your team achieve its targets. Replace lagging reports with live quota pacing, rep leaderboards, and conversion analytics.
          </p>
        </div>
      </section>

      {/* Main Interactive Dashboard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Badge variant="blue">Interactive Live Dashboard</Badge>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Commercial Pacing & Quota Engine
          </h2>
          <p className="text-xs text-slate-500">
            Use the dropdown filters below to change quarters, territories, and individual sales representatives. All metrics and charts update dynamically in Indian Rupees (₹).
          </p>
        </div>

        <InteractiveSalesDashboard compactMode={false} showExport={true} />
      </section>

      {/* Capabilities & Business Impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Complete Visibility Over Sales Execution
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We connect your CRM pipeline, billing software, and field sales reports into a unified sales performance ecosystem.
            </p>
            <div className="space-y-2.5 pt-2">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Why Sales Leaders Choose GrowthPilots
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Eliminate quota surprises at month-end and give frontline managers actionable data for coaching:
            </p>
            <div className="space-y-3 pt-2">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
                  ✓ {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Want this dashboard connected to your CRM?</h3>
            <p className="text-xs text-slate-400 mt-1">We integrate with Zoho, Salesforce, LeadSquared, Excel and ERP systems.</p>
          </div>
          <Button to="/contact" variant="primary" size="md" icon={<Calendar className="w-4 h-4" />}>
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};
