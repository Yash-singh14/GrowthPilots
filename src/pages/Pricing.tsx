import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Calendar, HelpCircle, Layers, ShieldCheck, Zap } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const Pricing: React.FC = () => {
  const packages = [
    {
      name: 'Starter Package',
      tagline: 'Reliable Recurring MIS & Reporting',
      target: 'Best for growing businesses that need dependable daily/weekly/monthly reports without manual spreadsheet chaos.',
      badge: 'Operational Foundation',
      quote: 'Custom Quote',
      quoteSubtext: 'Based on data volume & report frequency',
      features: [
        'Automated daily/weekly/monthly MIS compilation',
        'Consolidation of up to 5 recurring spreadsheets / CSV sources',
        'Data cleaning, validation checks & formula error elimination',
        'Standardized executive dashboard (Power BI or Web view)',
        'Automated scheduled PDF delivery to management',
        'Basic exception logging & email alerts',
      ],
      popular: false,
    },
    {
      name: 'Growth Package',
      tagline: 'Dashboards, Analytics & Process Automation',
      target: 'Best for multi-branch companies and sales teams that need live KPI tracking, quota visibility, and ERP sync.',
      badge: 'Most Popular',
      quote: 'Custom Quote',
      quoteSubtext: 'Based on integrations & user seats',
      features: [
        'Everything in Starter Package',
        'Sales Performance Management & Rep Quota Leaderboards',
        'Direct CRM / ERP database connectors (SQL, Tally, Zoho, SAP)',
        'Interactive drill-downs (Date, Region, Salesperson, Product SKU)',
        'Automated incentive, commission & target payout calculations',
        'Automated report scheduling and WhatsApp/Slack alert webhooks',
        'Role-based access permissions & security controls',
      ],
      popular: true,
    },
    {
      name: 'Intelligence Package',
      tagline: 'Advanced Analytics, AI Agents & Workflows',
      target: 'Best for enterprises looking to leverage grounded AI assistants, predictive forecasting, and complex multi-system automations.',
      badge: 'Enterprise AI Suite',
      quote: 'Custom Quote',
      quoteSubtext: 'Based on model architecture & compute requirements',
      features: [
        'Everything in Growth Package',
        'Custom conversational AI Executive Query Assistant',
        'Grounded RAG retrieval over internal documents and sales ledgers',
        'Time-series sales & inventory demand forecasting models',
        'Customer RFM segmentation and churn early-warning triggers',
        'Human-in-the-loop authorization gates for sensitive actions',
        'Private cloud deployment (AWS/Azure/GCP) with local data residency',
        'Dedicated data architect & priority SLAs',
      ],
      popular: false,
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="cyan">Transparent Engagement Models</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Tailored Architecture Packages
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every organization operates with different data sources, ERP environments, and reporting cadences. We provide transparent, custom quotes tailored to your scope and integration requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map(pkg => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-8 flex flex-col justify-between transition-all duration-200 ${
                pkg.popular
                  ? 'bg-white border-brand-blue ring-2 ring-brand-blue/30 shadow-xl relative'
                  : 'bg-white border-slate-200/90 shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                  {!pkg.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-brand-blue font-semibold mb-3">
                  {pkg.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {pkg.target}
                </p>

                {/* Pricing / Quote Box */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                  <div className="text-2xl font-extrabold text-slate-900">{pkg.quote}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{pkg.quoteSubtext}</div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2">
                    Package Scope Includes:
                  </span>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Button
                  to="/contact"
                  variant={pkg.popular ? 'primary' : 'outline'}
                  size="md"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Contact For a Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scope Determinants Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-blue" />
            <span>How GrowthPilots Pricing is Determined</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
            We avoid one-size-fits-all software licensing that charges for features you do not need. Our project proposals reflect:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
              <strong className="text-slate-900 block mb-1">1. Data Sources & Formats:</strong>
              Number of databases, spreadsheets, and APIs required to be consolidated.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
              <strong className="text-slate-900 block mb-1">2. Custom Business Logic:</strong>
              Complexity of commission tiers, variance reconciliation, and transformation rules.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
              <strong className="text-slate-900 block mb-1">3. Refresh Frequency:</strong>
              Daily, weekly, or near-real-time synchronization and notification triggers.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
              <strong className="text-slate-900 block mb-1">4. Support & Maintenance:</strong>
              Ongoing data pipeline monitoring, schema updates, and analyst support.
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Request a clear, scope-defined proposal</h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We analyze your reporting requirements and provide a fixed-scope feasibility assessment within 48 hours.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="lg" icon={<Calendar className="w-4 h-4" />}>
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};
