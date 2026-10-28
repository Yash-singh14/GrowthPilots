import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { MISReporting } from './pages/services/MISReporting';
import { SalesPerformance } from './pages/services/SalesPerformance';
import { Automation } from './pages/services/Automation';
import { AIAgents } from './pages/services/AIAgents';
import { PredictiveAnalytics } from './pages/services/PredictiveAnalytics';
import { Solutions } from './pages/Solutions';
import { Projects } from './pages/Projects';
import { InteractiveDashboardPage } from './pages/InteractiveDashboardPage';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { PrivacyTerms } from './pages/PrivacyTerms';
import { NotFound } from './pages/NotFound';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans selection:bg-brand-blue selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/mis-reporting" element={<MISReporting />} />
            <Route path="/services/sales-performance" element={<SalesPerformance />} />
            <Route path="/services/automation" element={<Automation />} />
            <Route path="/services/ai-agents" element={<AIAgents />} />
            <Route path="/services/predictive-analytics" element={<PredictiveAnalytics />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dashboard" element={<InteractiveDashboardPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyTerms />} />
            <Route path="/terms" element={<PrivacyTerms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
