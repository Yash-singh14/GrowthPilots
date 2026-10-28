import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#10152B] text-slate-300 border-t border-indigo-950">
      {/* Top Banner / Callout */}
      <div className="border-b border-indigo-950/80 bg-[#141438]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#28D7E5]">
                Operational Excellence
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Ready to transform scattered spreadsheets into actionable intelligence?
              </h3>
              <p className="text-sm text-indigo-200 mt-1 max-w-2xl">
                Schedule a 30-minute discovery session with our data & automation architects.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#7657FF] to-[#28D7E5] hover:brightness-105 text-white font-bold text-sm transition-all shadow-md hover:shadow-glow-violet flex-shrink-0"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo theme="dark" showTagline={true} size="md" />
            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              GrowthPilots empowers enterprises and ambitious SMEs to convert scattered data into actionable insights, automate repetitive reporting workflows, and elevate team performance with enterprise Business Intelligence, process automation, and grounded AI agents.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#social-placeholder"
                aria-label="LinkedIn placeholder"
                className="w-9 h-9 rounded-xl bg-[#1B1B45] hover:bg-[#7657FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-indigo-900/60"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#social-placeholder"
                aria-label="Twitter / X placeholder"
                className="w-9 h-9 rounded-xl bg-[#1B1B45] hover:bg-[#7657FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-indigo-900/60"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#social-placeholder"
                aria-label="GitHub placeholder"
                className="w-9 h-9 rounded-xl bg-[#1B1B45] hover:bg-[#7657FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-indigo-900/60"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-indigo-300">
              <ShieldCheck className="w-4 h-4 text-[#28D7E5]" />
              <span>Strict Data Confidentiality & Local Sandbox Deployment</span>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/mis-reporting" className="text-slate-400 hover:text-white transition-colors">
                  MIS Reporting & Power BI
                </Link>
              </li>
              <li>
                <Link to="/services/sales-performance" className="text-slate-400 hover:text-white transition-colors">
                  Sales Performance Management
                </Link>
              </li>
              <li>
                <Link to="/services/automation" className="text-slate-400 hover:text-white transition-colors">
                  Business Process Automation
                </Link>
              </li>
              <li>
                <Link to="/services/ai-agents" className="text-slate-400 hover:text-white transition-colors">
                  AI Agents & Assistants
                </Link>
              </li>
              <li>
                <Link to="/services/predictive-analytics" className="text-slate-400 hover:text-white transition-colors">
                  Predictive Analytics & Forecasting
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-[#28D7E5] hover:underline inline-flex items-center gap-1 font-semibold pt-1">
                  <span>Live Interactive Dashboard</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions by Function */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Business Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/solutions#sales-intelligence" className="hover:text-white transition-colors">
                  Sales Intelligence
                </Link>
              </li>
              <li>
                <Link to="/solutions#finance-mis" className="hover:text-white transition-colors">
                  Finance & Margin MIS
                </Link>
              </li>
              <li>
                <Link to="/solutions#inventory-operations" className="hover:text-white transition-colors">
                  Inventory & Operations
                </Link>
              </li>
              <li>
                <Link to="/solutions#management-reporting" className="hover:text-white transition-colors">
                  Executive Cockpits
                </Link>
              </li>
              <li>
                <Link to="/solutions#customer-analytics" className="hover:text-white transition-colors">
                  Customer RFM Analytics
                </Link>
              </li>
              <li>
                <Link to="/solutions#workflow-automation" className="hover:text-white transition-colors">
                  Data Pipeline Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect With Us
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#28D7E5] flex-shrink-0 mt-0.5" />
                <span className="text-xs">
                  <strong className="text-slate-200 block">[Editable Location Placeholder]</strong>
                  Bengaluru & Mumbai Hubs, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#28D7E5] flex-shrink-0" />
                <span className="text-xs font-mono text-slate-200">
                  contact@growthpilots.example
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#28D7E5] flex-shrink-0" />
                <span className="text-xs font-mono text-slate-200">
                  +91 (0) 80 DEMO-PILOT
                </span>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-[#1B1B45] border border-indigo-900/60 text-[11px] text-indigo-200">
                <span className="font-semibold text-white block mb-1">Demo Showcase Notice:</span>
                Contact placeholders above and case study data are for illustrative demonstration.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal */}
        <div className="mt-12 pt-8 border-t border-indigo-950 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GrowthPilots. All rights reserved. Data. Automation. Growth.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Engagement
            </Link>
            <Link to="/projects" className="hover:text-slate-300 transition-colors">
              Demonstration Portfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
