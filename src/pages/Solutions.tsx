import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Landmark,
  Boxes,
  Briefcase,
  Users,
  Workflow,
  CheckCircle2,
  ArrowRight,
  Calendar,
  AlertCircle,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SOLUTIONS_LIST } from '../data/solutionsData';

export const Solutions: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="purple">Functional Architecture</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Solutions by Business Function
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every department has distinct data challenges. GrowthPilots designs tailored analytics and automated workflows engineered to address the specific operational bottlenecks of each business function.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SOLUTIONS_LIST.map((solution, idx) => {
          return (
            <div
              key={solution.id}
              id={solution.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-brand-blue">
                    {idx === 0 && <TrendingUp className="w-5 h-5" />}
                    {idx === 1 && <Landmark className="w-5 h-5" />}
                    {idx === 2 && <Boxes className="w-5 h-5" />}
                    {idx === 3 && <Briefcase className="w-5 h-5" />}
                    {idx === 4 && <Users className="w-5 h-5" />}
                    {idx === 5 && <Workflow className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Functional Category: {solution.category}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {solution.title}
                    </h2>
                  </div>
                </div>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  Target Audience: {solution.targetAudience}
                </span>
              </div>

              {/* 3 Pillars: The Problem, The Solution, The Measurable Outcome */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {/* 1. Problem */}
                <div className="p-5 rounded-xl bg-rose-50/50 border border-rose-200/60 space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 text-xs font-bold uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>The Operational Problem:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {solution.problem}
                  </p>
                </div>

                {/* 2. Proposed Solution */}
                <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-200/60 space-y-2">
                  <div className="flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>GrowthPilots Solution:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {solution.proposedSolution}
                  </p>
                </div>

                {/* 3. Measurable Outcome */}
                <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200/60 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Measurable Business Outcome:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {solution.measurableOutcome}
                  </p>
                </div>
              </div>

              {/* Key Capabilities list */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-slate-500 uppercase mr-1">Modules:</span>
                  {solution.keyCapabilities.map((cap, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue-hover"
                >
                  <span>Request Functional Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Need a cross-functional solution architecture?</h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We frequently integrate sales with inventory forecasting and finance P&L into unified executive cockpits.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="lg" icon={<Calendar className="w-4 h-4" />}>
            Schedule an Architectural Review
          </Button>
        </div>
      </section>
    </div>
  );
};
