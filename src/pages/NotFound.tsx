import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center space-y-6 max-w-md">
        <span className="text-6xl font-extrabold text-brand-blue block">404</span>
        <h1 className="text-2xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-sm text-slate-600">
          The page or report you requested does not exist or has been relocated.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Button to="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
          <Button to="/dashboard" variant="outline" size="md">
            View Live Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};
