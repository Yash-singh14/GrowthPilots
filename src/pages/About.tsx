import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  Calendar,
  Sparkles,
  BarChart2,
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const About: React.FC = () => {
  const principles = [
    {
      title: 'Business-Focused Problem Solving',
      desc: 'We start with the commercial problem, not the buzzword. Whether you need faster debt collection, quota visibility, or warehouse turns, our technology serves measurable business goals.',
      icon: TrendingUp,
    },
    {
      title: 'Practical Implementation',
      desc: 'No theoretical multi-year IT roadmaps. We build functional, modular prototypes rapidly, connect directly into your everyday tools (Excel, SQL, Tally, Zoho, SAP), and deploy iteratively.',
      icon: Cpu,
    },
    {
      title: 'Reliable Reporting & Audited Truth',
      desc: 'A dashboard is only as good as the underlying data integrity. We build automated data validation and reconciliation layers to ensure numbers match 100% across all departments.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Analytics',
      desc: 'No black-box models that leave stakeholders puzzled. Every metric, calculation logic, and statistical forecast is documented clearly with understandable business definitions.',
      icon: BarChart2,
    },
    {
      title: 'Continuous Improvement',
      desc: 'Business dynamics shift constantly. Our reporting structures and automation pipelines are engineered to adapt as your product lines, branches, and teams expand.',
      icon: Compass,
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="cyan">Our Philosophy & Mission</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              We Help Businesses Work Smarter With Data, Automation and AI.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              GrowthPilots is being built around a simple belief: every business should be able to understand its performance, reduce repetitive work and make better decisions using reliable data.
            </p>
          </div>
        </div>
      </section>

      {/* Core Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Transforming Fragmented Data into Practical Workflows
            </h2>
            <p>
              In most growing enterprises, valuable operational data is trapped in silos: sales quotes sit in CRMs, transaction logs reside in accounting software, inventory movements are buried in warehouse ERPs, and daily summaries are stitched together manually in dozens of disconnected spreadsheets.
            </p>
            <p>
              This fragmentation causes significant operational friction. Senior leaders wait days for basic performance updates, managers make decisions based on outdated assumptions, and high-value employees waste hours every week performing repetitive data cleaning.
            </p>
            <p>
              <strong>GrowthPilots was founded to fix this operational disconnect.</strong> We combine modern Business Intelligence, background workflow automation, and domain-grounded AI assistants to help organizations convert scattered information into dependable, real-time operating intelligence.
            </p>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-blue-50 to-indigo-50/60 rounded-2xl border border-blue-200/80 p-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Our Operating Standard
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Built For Pragmatic Growth
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We believe technology should fit into existing business rhythms rather than forcing organizations to reinvent their entire operational stack.
            </p>
            <div className="space-y-2 pt-2 border-t border-blue-200/60">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero complex multi-year lock-in</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Seamless integration with current spreadsheets & ERPs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Enterprise data privacy and local hosting options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <Badge variant="blue">Our Principles</Badge>
            <h2 className="text-3xl font-extrabold text-slate-900">
              How We Approach Every Engagement
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Grounded, transparent, and focused on tangible operational return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map(item => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-slate-200/80 p-6 space-y-3 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold">Discuss your company's data workflow challenges</h3>
            <p className="text-sm text-slate-300">
              Schedule a friendly consultation with our team to explore how we can assist your organization.
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
