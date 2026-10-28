import React from 'react';
import { Badge } from '../components/common/Badge';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const PrivacyTerms: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="cyan">Governance & Data Privacy</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
            Privacy Policy & Engagement Terms
          </h1>
          <p className="text-sm text-slate-300 mt-2">
            Last Updated: October 2026 | GrowthPilots Platform
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-slate-700 leading-relaxed">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-blue" />
            <span>1. Enterprise Data Confidentiality</span>
          </h2>
          <p>
            At GrowthPilots, data protection is paramount. Any company data, ERP records, financial spreadsheets, or CRM exports shared during consultations or project engagements are handled under strict non-disclosure agreements (NDAs).
          </p>
          <p>
            We do not share, sell, or commercialize customer data. When building custom AI agents or predictive models, your private enterprise records are never used to train public foundational AI models.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-purple-600" />
            <span>2. Deployment & Data Residency</span>
          </h2>
          <p>
            GrowthPilots solutions are engineered to run within the client's preferred infrastructure—whether on-premise, inside a private virtual cloud (VPC on AWS, Azure, or GCP), or hosted in our secure managed environment.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            3. Demonstration Data Transparency Notice
          </h2>
          <p>
            The live interactive dashboards, simulated workflows, and sample query engines showcased across this website utilize fictional synthetic demonstration datasets. All names, company codes, order counts, and revenue numbers are illustrative examples created for technical demonstration purposes.
          </p>
        </div>
      </section>
    </div>
  );
};
