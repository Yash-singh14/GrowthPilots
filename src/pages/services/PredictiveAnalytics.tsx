import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, CheckCircle2, ArrowRight, Calendar, BrainCircuit, Activity, Sliders } from 'lucide-react';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { PredictiveDashboard } from '../../components/dashboard/PredictiveDashboard';
import { SERVICES_LIST } from '../../data/servicesData';

export const PredictiveAnalytics: React.FC = () => {
  const service = SERVICES_LIST[4]; // Predictive Analytics

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
            <span className="text-xs text-slate-300">Predictive Analytics</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Predictive Analytics & Forecasting
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Use data and machine learning to identify patterns, forecast trends and support better decisions. Look beyond historical reports with forward-looking revenue projections, SKU demand models, and churn risk scoring.
          </p>
        </div>
      </section>

      {/* Interactive Predictive Dashboard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Badge variant="purple">Machine Learning Demo</Badge>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Forward Revenue Projections & Probability Bands
          </h2>
          <p className="text-xs text-slate-500">
            Interactive time-series model displaying 90-day forward forecasts, confidence intervals, category demand growth, and RFM customer clusters.
          </p>
        </div>

        <PredictiveDashboard />
      </section>

      {/* Feature Capabilities & Business Outcomes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Predictive Capabilities
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We transition your business from reactive firefighting to proactive, anticipatory operational planning.
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
              Practical Business Value
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Measurable improvements delivered by grounded predictive models:
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
            <h3 className="text-xl font-bold">Have historical sales data waiting to be modeled?</h3>
            <p className="text-xs text-slate-400 mt-1">Schedule a pilot forecast feasibility study with our data science engineers.</p>
          </div>
          <Button to="/contact" variant="primary" size="md" icon={<Calendar className="w-4 h-4" />}>
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};
