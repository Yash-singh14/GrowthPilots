import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Cpu,
  Bot,
  Package,
  Layers,
  ArrowRight,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Workflow,
  Sparkles,
  Info,
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { PROJECTS_LIST, ProjectItem } from '../data/projectsData';
import { InteractiveSalesDashboard } from '../components/dashboard/InteractiveSalesDashboard';
import { WorkflowSimulator } from '../components/workflow/WorkflowSimulator';
import { InventoryDashboard } from '../components/dashboard/InventoryDashboard';
import { AIAssistantChat } from '../components/assistant/AIAssistantChat';

export const Projects: React.FC = () => {
  const [activeProjectSlug, setActiveProjectSlug] = useState<string>(PROJECTS_LIST[0].slug);

  const activeProject = PROJECTS_LIST.find(p => p.slug === activeProjectSlug) || PROJECTS_LIST[0];

  return (
    <div className="space-y-14 pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="cyan">Demonstration Portfolio</Badge>
              <span className="text-xs text-amber-300 font-medium">
                ★ Illustrative Fictional Case Studies
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Demonstration Projects & Case Studies
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore working prototypes demonstrating our approach to Business Intelligence, process automation pipelines, inventory optimization, and conversational enterprise AI.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Disclaimer Alert */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block mb-0.5">Important Transparency Notice:</strong>
            These portfolio projects utilize realistic fictional demonstration datasets to illustrate technical capabilities, dashboard interactions, and workflow architectures. They do not represent confidential client engagements or proprietary customer databases.
          </div>
        </div>
      </section>

      {/* Project Selector Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECTS_LIST.map((project, idx) => {
            const isActive = project.slug === activeProjectSlug;

            return (
              <button
                key={project.id}
                onClick={() => setActiveProjectSlug(project.slug)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-brand-blue ring-2 ring-brand-blue/30 shadow-md'
                    : 'bg-white/70 hover:bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-2">
                    <span className="font-bold uppercase tracking-wider text-slate-400">
                      Demo 0{idx + 1}
                    </span>
                    <span className="text-slate-500 font-medium">{project.industry}</span>
                  </div>
                  <h3 className={`text-sm font-bold leading-snug ${isActive ? 'text-brand-blue' : 'text-slate-900'}`}>
                    {project.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">{project.tools[0]}</span>
                  <span className={`font-semibold ${isActive ? 'text-brand-blue' : 'text-slate-400'}`}>
                    {isActive ? 'Active Demo' : 'View Demo →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Project In-Depth Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-10 space-y-8">
          {/* Project Details Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-brand-blue border border-blue-200">
                  {activeProject.industry}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {activeProject.badge}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {activeProject.title}
              </h2>
              <p className="text-sm text-slate-600 max-w-3xl">
                {activeProject.summary}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap lg:flex-col lg:items-end gap-1.5 flex-shrink-0">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Technology Stack:
              </span>
              <div className="flex flex-wrap gap-1">
                {activeProject.tools.map(tool => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Business Problem & Solution Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800">
                The Business Problem
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeProject.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                The GrowthPilots Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeProject.solution}
              </p>
            </div>
          </div>

          {/* Sample Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {activeProject.sampleMetrics.map((m, mIdx) => (
              <div key={mIdx} className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block">
                  {m.label}
                </span>
                <span className="text-xl font-bold text-slate-900 block mt-0.5">
                  {m.value}
                </span>
                <span className="text-[11px] text-slate-500">{m.note}</span>
              </div>
            ))}
          </div>

          {/* Embedded Interactive Visualization based on active project */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-blue" />
                <span>Working Interactive Visualization: {activeProject.title}</span>
              </h4>
              <span className="text-xs text-slate-400">Full Functional Sandbox</span>
            </div>

            {activeProject.chartType === 'sales-bar' && (
              <InteractiveSalesDashboard compactMode={false} showExport={true} />
            )}

            {activeProject.chartType === 'workflow-flow' && (
              <WorkflowSimulator />
            )}

            {activeProject.chartType === 'inventory-scatter' && (
              <InventoryDashboard />
            )}

            {activeProject.chartType === 'assistant-chat' && (
              <AIAssistantChat />
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Have a similar use case in your industry?</h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We build custom proof-of-concept prototypes for your datasets within 5 business days.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="lg" icon={<Calendar className="w-4 h-4" />}>
            Request a Custom POC
          </Button>
        </div>
      </section>
    </div>
  );
};
