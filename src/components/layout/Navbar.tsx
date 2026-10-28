import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BarChart2, TrendingUp, Cpu, Bot, LineChart, Calendar } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'MIS Reporting & BI', path: '/services/mis-reporting', icon: BarChart2, desc: 'Automated executive reports & Power BI' },
        { name: 'Sales Performance', path: '/services/sales-performance', icon: TrendingUp, desc: 'Quotas, leaderboards & pipeline velocity' },
        { name: 'Process Automation', path: '/services/automation', icon: Cpu, desc: 'Data cleaning, ETL & scheduled alerts' },
        { name: 'AI Business Assistants', path: '/services/ai-agents', icon: Bot, desc: 'Conversational data retrieval & summaries' },
        { name: 'Predictive Analytics', path: '/services/predictive-analytics', icon: LineChart, desc: 'Sales forecasting & inventory demand' },
      ],
    },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Projects', path: '/projects' },
    { name: 'Live Dashboard', path: '/dashboard' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#D9D0FF]/60 py-2.5'
          : 'bg-white/90 backdrop-blur-xs border-b border-slate-200/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo showTagline={true} size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1" aria-label="Main Navigation">
            {navLinks.map(link => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors ${
                          isActive
                            ? 'text-brand-violet bg-[#F0EDFF]'
                            : 'text-[#161B32] hover:text-brand-violet hover:bg-[#F0EDFF]/60'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#68708A] transition-transform duration-200 ${
                          servicesDropdown ? 'rotate-180 text-brand-violet' : ''
                        }`}
                      />
                    </NavLink>

                    {/* Services Dropdown */}
                    <div
                      className={`absolute top-full left-0 w-80 p-2.5 bg-white rounded-2xl shadow-premium border border-[#D9D0FF]/90 transition-all duration-200 ${
                        servicesDropdown
                          ? 'opacity-100 visible translate-y-1'
                          : 'opacity-0 invisible pointer-events-none'
                      }`}
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#68708A] px-3 py-1">
                        Core Service Capabilities
                      </div>
                      {link.dropdownItems?.map(item => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0EDFF]/70 transition-colors group/item"
                          >
                            <div className="p-2 rounded-lg bg-[#F0EDFF] text-[#7657FF] group-hover/item:bg-[#7657FF] group-hover/item:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#161B32] group-hover/item:text-[#7657FF]">
                                {item.name}
                              </div>
                              <p className="text-[11px] text-[#68708A] line-clamp-1">{item.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                      <div className="mt-1 pt-2 border-t border-slate-100 px-3 py-1">
                        <Link
                          to="/services"
                          className="text-xs font-bold text-[#7657FF] hover:underline flex items-center justify-between"
                        >
                          <span>Explore All 5 Services</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                      isActive
                        ? 'text-brand-violet bg-[#F0EDFF]'
                        : 'text-[#161B32] hover:text-brand-violet hover:bg-[#F0EDFF]/60'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={<Calendar className="w-3.5 h-3.5" />}
              iconPosition="left"
            >
              Book a Free Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-[#161B32] hover:bg-[#F0EDFF] focus:outline-none focus:ring-2 focus:ring-[#7657FF]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-xl text-sm font-semibold ${
                  isActive ? 'bg-[#F0EDFF] text-[#7657FF]' : 'text-[#161B32] hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>

            {/* Services with Mobile Sub-links */}
            <div className="space-y-1 pl-2 bg-[#F5F6FC] rounded-xl p-2.5">
              <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-[#68708A]">
                Services & Modules
              </div>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    isActive ? 'bg-white text-[#7657FF] shadow-xs' : 'text-[#161B32] hover:bg-white'
                  }`
                }
              >
                All Services Overview
              </NavLink>
              <NavLink
                to="/services/mis-reporting"
                className="block px-3 py-1.5 rounded-lg text-xs text-[#68708A] hover:text-[#7657FF]"
              >
                ↳ MIS Reporting & Power BI
              </NavLink>
              <NavLink
                to="/services/sales-performance"
                className="block px-3 py-1.5 rounded-lg text-xs text-[#68708A] hover:text-[#7657FF]"
              >
                ↳ Sales Performance Management
              </NavLink>
              <NavLink
                to="/services/automation"
                className="block px-3 py-1.5 rounded-lg text-xs text-[#68708A] hover:text-[#7657FF]"
              >
                ↳ Business Process Automation
              </NavLink>
              <NavLink
                to="/services/ai-agents"
                className="block px-3 py-1.5 rounded-lg text-xs text-[#68708A] hover:text-[#7657FF]"
              >
                ↳ AI Agents & Assistants
              </NavLink>
              <NavLink
                to="/services/predictive-analytics"
                className="block px-3 py-1.5 rounded-lg text-xs text-[#68708A] hover:text-[#7657FF]"
              >
                ↳ Predictive Analytics & Models
              </NavLink>
            </div>

            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-xl text-sm font-semibold ${
                  isActive ? 'bg-[#F0EDFF] text-[#7657FF]' : 'text-[#161B32] hover:bg-slate-50'
                }`
              }
            >
              Solutions
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-xl text-sm font-semibold ${
                  isActive ? 'bg-[#F0EDFF] text-[#7657FF]' : 'text-[#161B32] hover:bg-slate-50'
                }`
              }
            >
              Projects & Case Studies
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-xl text-sm font-semibold ${
                  isActive ? 'bg-[#F0EDFF] text-[#7657FF]' : 'text-[#161B32] hover:bg-slate-50'
                }`
              }
            >
              Interactive Analytics Dashboard
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-xl text-sm font-semibold ${
                  isActive ? 'bg-[#F0EDFF] text-[#7657FF]' : 'text-[#161B32] hover:bg-slate-50'
                }`
              }
            >
              About GrowthPilots
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-xl text-sm font-semibold ${
                  isActive ? 'bg-[#F0EDFF] text-[#7657FF]' : 'text-[#161B32] hover:bg-slate-50'
                }`
              }
            >
              Pricing Packages
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-xl text-sm font-semibold ${
                  isActive ? 'bg-[#F0EDFF] text-[#7657FF]' : 'text-[#161B32] hover:bg-slate-50'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <Button to="/contact" variant="primary" size="md" className="w-full">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
