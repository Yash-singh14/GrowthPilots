import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  Cpu,
  Bot,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  Layers,
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SERVICES_LIST } from '../data/servicesData';

export const Services: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="cyan">Enterprise Services Portfolio</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Data. Automation. Intelligence.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We design, build, and deploy custom business intelligence pipelines, reporting automations, sales performance trackers, and conversational AI assistants.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES_LIST.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.slug}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center">
                      {index === 0 && <BarChart3 className="w-6 h-6" />}
                      {index === 1 && <TrendingUp className="w-6 h-6" />}
                      {index === 2 && <Cpu className="w-6 h-6" />}
                      {index === 3 && <Bot className="w-6 h-6" />}
                      {index === 4 && <LineChart className="w-6 h-6" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Service 0{index + 1}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-brand-blue">
                    "{service.tagline}"
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Core Features Grid */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                      Key Capabilities Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA link to dedicated service detail page */}
                  <div className="pt-2">
                    <Button
                      to={`/services/${service.slug}`}
                      variant="primary"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Open {service.title} Detail Page & Demos
                    </Button>
                  </div>
                </div>

                {/* Right Column: Business Impact & Use Cases */}
                <div className="lg:col-span-5 bg-slate-50/70 rounded-xl p-5 border border-slate-200/80 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Representative Impact & Use Cases
                  </h4>

                  <div className="space-y-3">
                    {service.useCases.map((uc, uIdx) => (
                      <div key={uIdx} className="p-3 bg-white rounded-lg border border-slate-200/60 shadow-2xs">
                        <span className="text-xs font-bold text-slate-900 block mb-1">
                          {uc.title}
                        </span>
                        <p className="text-[11px] text-slate-600 leading-normal mb-2">
                          {uc.desc}
                        </p>
                        <span className="inline-block text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Impact: {uc.metric}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="text-[11px] font-bold text-slate-700 block mb-1">
                      Tangible Deliverables:
                    </span>
                    <ul className="text-[11px] text-slate-500 space-y-1 list-disc list-inside">
                      {service.deliverables.slice(0, 3).map((d, dIdx) => (
                        <li key={dIdx}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Unsure which architecture fits your business?</h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We review your existing databases, spreadsheets, and reporting workflows to recommend a tailored scope.
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
