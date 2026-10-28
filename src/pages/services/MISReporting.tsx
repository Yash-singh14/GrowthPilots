import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle2, ArrowRight, Calendar, FileText, Database, ShieldCheck, MailCheck } from 'lucide-react';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { MISReportDemo } from '../../components/dashboard/MISReportDemo';
import { SERVICES_LIST } from '../../data/servicesData';

export const MISReporting: React.FC = () => {
  const service = SERVICES_LIST[0]; // MIS Reporting

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
            <span className="text-xs text-slate-300">MIS Reporting & BI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            MIS Reporting & Business Intelligence
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Turn scattered business data into clear, reliable and actionable reports. We build automated data pipelines and Power BI dashboards that replace manual spreadsheet assembly with a single, audited source of truth.
          </p>
        </div>
      </section>

      {/* Interactive Demo Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Badge variant="blue">Live Interactive Preview</Badge>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Demo Executive MIS Report & Delivery Cadence
          </h2>
          <p className="text-xs text-slate-500">
            Switch between Daily, Weekly, and Monthly views to explore departmental variances and scheduled email dispatches.
          </p>
        </div>
        <MISReportDemo />
      </section>

      {/* Feature Breakdown & Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              What We Automate & Deliver
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our MIS solutions reconcile cross-departmental records so leadership never has to question whether sales revenue matches finance collections.
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
              Measurable Business Outcomes
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Realized operational improvements from transitioning away from manual spreadsheet compilation:
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

      {/* CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Ready to modernize your MIS reporting?</h3>
            <p className="text-xs text-slate-400 mt-1">Book an architecture review for your ERP and spreadsheet files.</p>
          </div>
          <Button to="/contact" variant="primary" size="md" icon={<Calendar className="w-4 h-4" />}>
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};
