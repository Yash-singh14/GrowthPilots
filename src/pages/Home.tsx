import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Cpu,
  BarChart3,
  Bot,
  LineChart,
  CheckCircle2,
  Calendar,
  Sparkles,
  Database,
  Search,
  CheckSquare,
  ShieldCheck,
  Eye,
  SlidersHorizontal,
  Compass,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { HeroDashboardPreview } from '../components/dashboard/HeroDashboardPreview';
import { InteractiveSalesDashboard } from '../components/dashboard/InteractiveSalesDashboard';
import { SERVICES_LIST } from '../data/servicesData';
import { PROJECTS_LIST } from '../data/projectsData';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0 pb-0 overflow-x-hidden">
      {/* ============================================================== */}
      {/* 1. HERO SECTION (Balanced 45% / 55% Grid)                       */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 border-b border-[#D9D0FF]/60 bg-gradient-to-b from-white via-[#F5F6FC] to-[#F0EDFF]/30">
        {/* Subtle geometric background accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-50">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#F0EDFF] blur-3xl" />
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#EAF3FF] blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center min-w-0">
            {/* Left Hero Column — 45% width (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6 text-left min-w-0">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0EDFF] border border-[#D9D0FF] text-[#7657FF] text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#7657FF] animate-pulse" />
                <span>BUSINESS INTELLIGENCE · AUTOMATION · AI</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#161B32] tracking-tight leading-[1.15]">
                Don't Just Run <br className="hidden sm:inline" />
                a Business.{' '}
                <span className="gradient-text">Outperform.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base text-[#68708A] leading-relaxed max-w-lg">
                Turn scattered business data into actionable intelligence, automate repetitive work and make confident decisions with GrowthPilots.
              </p>

              {/* Two CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Book a Free Consultation
                </Button>
                <Button
                  to="/solutions"
                  variant="outline"
                  size="md"
                >
                  Explore Our Solutions
                </Button>
              </div>

              {/* Three Compact Benefits with Icons */}
              <div className="pt-5 border-t border-[#D9D0FF]/60 grid grid-cols-3 gap-2 sm:gap-3 min-w-0">
                <div className="flex items-start gap-2 min-w-0">
                  <div className="p-1.5 rounded-lg bg-[#EAF3FF] text-[#7657FF] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#161B32] block leading-tight truncate">
                      Smarter Decisions
                    </span>
                    <span className="text-[10px] text-[#68708A]">Live verified data</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 min-w-0">
                  <div className="p-1.5 rounded-lg bg-[#F0EDFF] text-[#7657FF] flex-shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#161B32] block leading-tight truncate">
                      Less Manual Work
                    </span>
                    <span className="text-[10px] text-[#68708A]">Automated ETL</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 min-w-0">
                  <div className="p-1.5 rounded-lg bg-[#E0F9FC] text-[#0A8894] flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#161B32] block leading-tight truncate">
                      Measurable Insights
                    </span>
                    <span className="text-[10px] text-[#68708A]">Quota attainment</span>
                  </div>
                </div>
              </div>

              {/* Small Trust Statement */}
              <p className="text-[11px] text-[#68708A] font-medium pt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7657FF] flex-shrink-0" />
                <span>Built to help ambitious businesses work smarter and grow.</span>
              </p>
            </div>

            {/* Right Hero Column — 55% width (lg:col-span-7) */}
            <div className="lg:col-span-7 w-full min-w-0 max-w-full overflow-hidden">
              <HeroDashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION A: SERVICES (Soft Lavender Background #F0EDFF)          */}
      {/* ============================================================== */}
      <section className="bg-[#F0EDFF] py-16 sm:py-20 border-b border-[#D9D0FF]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7657FF] bg-white px-3 py-1 rounded-full border border-[#D9D0FF]">
              Core Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#161B32] tracking-tight">
              Five High-Impact Services
            </h2>
            <p className="text-[#68708A] text-sm sm:text-base leading-relaxed">
              Eliminate reporting chaos and automate key decisions with our end-to-end data and AI services.
            </p>
          </div>

          {/* 3 cards per row on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-[#D9D0FF]/90 p-6 sm:p-7 flex flex-col justify-between hover:shadow-premium hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F0EDFF] text-[#7657FF] flex items-center justify-center mb-5 group-hover:bg-[#7657FF] group-hover:text-white transition-colors">
                    {idx === 0 && <BarChart3 className="w-6 h-6" />}
                    {idx === 1 && <TrendingUp className="w-6 h-6" />}
                    {idx === 2 && <Cpu className="w-6 h-6" />}
                    {idx === 3 && <Bot className="w-6 h-6" />}
                    {idx === 4 && <LineChart className="w-6 h-6" />}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#68708A] block mb-1">
                    Service 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-[#161B32] mb-2 group-hover:text-[#7657FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#7657FF] mb-3">
                    "{service.tagline}"
                  </p>
                  <p className="text-sm text-[#68708A] leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7657FF] hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Service Detail & Demos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Sixth highlight card: Architecture Sandbox */}
            <div className="bg-[#10152B] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-indigo-900 shadow-premium">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1B1B45] text-[#28D7E5] flex items-center justify-center mb-5 border border-cyan-400/20">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#28D7E5] block mb-1">
                  Interactive Platform
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Live Analytics Studio
                </h3>
                <p className="text-xs font-semibold text-indigo-200 mb-3">
                  "Experience our interactive reporting firsthand."
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Test custom filters, rep rankings, regional drill-downs, and download audited CSV exports directly.
                </p>
              </div>

              <div className="pt-4 border-t border-indigo-950">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#7657FF] to-[#28D7E5] text-white text-xs font-bold hover:brightness-105 transition-all"
                >
                  <span>Launch Dedicated Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION B: INTERACTIVE ANALYTICS SHOWCASE                       */}
      {/* (Dark Navy-to-Indigo Background with subtle data pattern)        */}
      {/* ============================================================== */}
      <section className="bg-gradient-to-b from-[#10152B] via-[#141438] to-[#1B1B45] text-white py-16 sm:py-20 border-b border-indigo-950 data-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#28D7E5] bg-[#1B1B45] px-3 py-1 rounded-full border border-cyan-400/30">
              Interactive Analytics Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              See Your Business From a New Perspective.
            </h2>
            <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
              Explore dynamic multi-dimensional analytics. Adjust quarters, territory zones, and product solutions. All KPI cards, trends, and rankings synchronize automatically from the underlying audited ledger.
            </p>
          </div>

          {/* Full Interactive Analytics Showcase */}
          <div className="w-full min-w-0">
            <InteractiveSalesDashboard darkTheme={true} showExport={true} />
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION C: HOW WE HELP (Pale Blue Background #EAF3FF)           */}
      {/* Horizontal timeline on desktop, vertical on mobile              */}
      {/* ============================================================== */}
      <section className="bg-[#EAF3FF] py-16 sm:py-20 border-b border-[#CADFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B1B45] bg-white px-3 py-1 rounded-full border border-[#CADFFF]">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#161B32] tracking-tight">
              How We Help You Grow
            </h2>
            <p className="text-[#68708A] text-sm sm:text-base leading-relaxed">
              A clear, four-step transformation process moving your operations from spreadsheet chaos to automated intelligence.
            </p>
          </div>

          {/* 4-Step Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-7 left-1/8 right-1/8 h-0.5 bg-[#CADFFF] -z-0" />

            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 border border-[#CADFFF] shadow-xs relative z-10 flex flex-col items-start space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#7657FF] text-white flex items-center justify-center font-black text-base shadow-sm">
                1
              </div>
              <h3 className="text-base font-bold text-[#161B32]">Connect Your Data</h3>
              <p className="text-xs text-[#68708A] leading-relaxed">
                We integrate your ERP, CRM, Excel files, and databases into a unified, secure data pipeline without disrupting daily operations.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 border border-[#CADFFF] shadow-xs relative z-10 flex flex-col items-start space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#28D7E5] text-[#10152B] flex items-center justify-center font-black text-base shadow-sm">
                2
              </div>
              <h3 className="text-base font-bold text-[#161B32]">Automate Your Workflows</h3>
              <p className="text-xs text-[#68708A] leading-relaxed">
                Automated background scripts clean, reconcile, and format recurring management reports without manual copy-pasting.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 border border-[#CADFFF] shadow-xs relative z-10 flex flex-col items-start space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1B1B45] text-white flex items-center justify-center font-black text-base shadow-sm">
                3
              </div>
              <h3 className="text-base font-bold text-[#161B32]">Discover Actionable Insights</h3>
              <p className="text-xs text-[#68708A] leading-relaxed">
                Interactive Power BI and web dashboards highlight territory variances, sales quota gaps, and margin trends.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-6 border border-[#CADFFF] shadow-xs relative z-10 flex flex-col items-start space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#7657FF] to-[#28D7E5] text-white flex items-center justify-center font-black text-base shadow-sm">
                4
              </div>
              <h3 className="text-base font-bold text-[#161B32]">Make Better Decisions</h3>
              <p className="text-xs text-[#68708A] leading-relaxed">
                Leadership acts on verified, audited numbers to adjust sales quotas, eliminate stockouts, and increase margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION D: FEATURED PROJECTS (Neutral / Lavender Background)    */}
      {/* 4 Portfolio Cards with genuine UI previews                      */}
      {/* ============================================================== */}
      <section className="bg-[#F5F6FC] py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7657FF] bg-[#F0EDFF] px-3 py-1 rounded-full border border-[#D9D0FF]">
                Demonstration Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#161B32] tracking-tight mt-2">
                Featured Demonstration Projects
              </h2>
              <p className="text-[#68708A] text-sm mt-1 max-w-xl">
                Realistic prototypes illustrating Business Intelligence, data pipelines, inventory analytics, and conversational AI.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7657FF] hover:underline"
            >
              <span>Explore all project case studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS_LIST.map((project, idx) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-premium transition-all duration-200 flex flex-col justify-between"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#7657FF]">{project.industry}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F0EDFF] text-[#7657FF] text-[10px] font-bold border border-[#D9D0FF]">
                      Demo Project
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#161B32]">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#68708A] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tools.slice(0, 4).map(t => (
                      <span
                        key={t}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#F5F6FC] text-slate-700 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Sample Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                    {project.sampleMetrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-xl bg-[#F5F6FC]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#68708A] block">
                          {m.label}
                        </span>
                        <span className="text-base font-extrabold text-[#161B32] block mt-0.5">
                          {m.value}
                        </span>
                        <span className="text-[10px] text-[#68708A]">{m.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#F5F6FC] border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/projects#${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7657FF] hover:underline"
                  >
                    <span>View Interactive Showcase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] font-semibold text-[#68708A]">Interactive UI</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION E: BUSINESS OUTCOMES (Deep Indigo #1B1B45 Background)   */}
      {/* Clear text, accent-colored icons, no fabricated percentages     */}
      {/* ============================================================== */}
      <section className="bg-[#1B1B45] text-white py-16 sm:py-20 border-b border-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#28D7E5] bg-[#10152B] px-3 py-1 rounded-full border border-cyan-400/30">
              Measurable Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Expected Business Outcomes
            </h2>
            <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
              We focus on practical operational enhancements that free up management time and drive sales execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Outcome 1 */}
            <div className="bg-[#10152B] rounded-2xl p-6 border border-indigo-900/60 flex flex-col justify-between space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1B1B45] text-[#28D7E5] flex items-center justify-center border border-cyan-400/30">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Improved Decision Making</h3>
              <p className="text-xs text-indigo-200 leading-relaxed">
                Replace retrospective monthly gut-feel reviews with audited daily and weekly operational KPIs across all commercial departments.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="bg-[#10152B] rounded-2xl p-6 border border-indigo-900/60 flex flex-col justify-between space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1B1B45] text-[#7657FF] flex items-center justify-center border border-purple-400/30">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Reduced Manual Effort</h3>
              <p className="text-xs text-indigo-200 leading-relaxed">
                Eliminate repetitive spreadsheet copy-pasting, VLOOKUP reconciliations, and manual email distribution through automated ETL scripts.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="bg-[#10152B] rounded-2xl p-6 border border-indigo-900/60 flex flex-col justify-between space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1B1B45] text-[#28D7E5] flex items-center justify-center border border-cyan-400/30">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Better Sales Visibility</h3>
              <p className="text-xs text-indigo-200 leading-relaxed">
                Gain real-time clarity over rep quota pacing, regional gaps, and stalled pipeline opportunities before quarter-end closing.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="bg-[#10152B] rounded-2xl p-6 border border-indigo-900/60 flex flex-col justify-between space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1B1B45] text-[#7657FF] flex items-center justify-center border border-purple-400/30">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">More Efficient Operations</h3>
              <p className="text-xs text-indigo-200 leading-relaxed">
                Harmonize inventory turnover, warehouse dispatch velocity, and financial gross margins into unified C-Suite briefing cockpits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION F: FINAL CTA (Prominent Violet-to-Blue Gradient Panel)   */}
      {/* ============================================================== */}
      <section className="bg-[#F5F6FC] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden bg-gradient-to-r from-[#7657FF] to-[#28D7E5]">
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 bg-white/30 backdrop-blur-xs px-3 py-1 rounded-full">
                Get Started Today
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Turn Data Into Growth?
              </h2>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium">
                Let's identify the reporting, sales or workflow problems holding your business back.
              </p>
              <div className="pt-3">
                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                  icon={<Calendar className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Book a Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
