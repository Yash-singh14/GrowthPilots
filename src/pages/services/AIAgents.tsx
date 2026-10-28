import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, CheckCircle2, ArrowRight, Calendar, Sparkles, ShieldCheck, Lock } from 'lucide-react';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { AIAssistantChat } from '../../components/assistant/AIAssistantChat';
import { SERVICES_LIST } from '../../data/servicesData';

export const AIAgents: React.FC = () => {
  const service = SERVICES_LIST[3]; // AI Agents & Business Assistants

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
            <span className="text-xs text-slate-300">AI Agents</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            AI Agents & Business Assistants
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Use AI assistants to retrieve information, summarize business performance and streamline repetitive workflows. Grounded directly in your company data with strict human-in-the-loop authorization gates.
          </p>
        </div>
      </section>

      {/* Interactive AI Chat Assistant */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Badge variant="purple">Live Interactive Assistant</Badge>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Grounded Commercial Query Engine
          </h2>
          <p className="text-xs text-slate-500">
            Interact with our sandbox agent. Click the suggested queries or ask about sales totals, missed targets, or leads needing attention.
          </p>
        </div>

        <AIAssistantChat />
      </section>

      {/* Enterprise Security & Guardrails */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Enterprise AI Capabilities
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We engineer custom RAG pipelines and SQL-translating AI assistants designed specifically for enterprise business operations.
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
              Enterprise Security & Governance
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Why business leaders trust GrowthPilots AI architecture for sensitive operational intelligence:
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">Strict Factual Grounding:</strong>
                Zero hallucinations. The agent answers exclusively from verified databases and internal records.
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">Human Approval Authorization Gates:</strong>
                Any consequential action (sending emails, modifying status, triggering payments) requires explicit human confirmation.
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">Local & Private VPC Deployment:</strong>
                Your confidential financial data never trains public LLMs. We deploy within your private cloud.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Ready to deploy a custom AI assistant for your team?</h3>
            <p className="text-xs text-slate-400 mt-1">Discuss your internal data sources and use cases with our AI architects.</p>
          </div>
          <Button to="/contact" variant="primary" size="md" icon={<Calendar className="w-4 h-4" />}>
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};
