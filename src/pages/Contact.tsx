import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Calendar,
  Lock,
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

interface FormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  jobTitle: string;
  serviceOfInterest: string;
  companySize: string;
  problemDescription: string;
  preferredContact: string;
  honeypot: string; // Spam trap
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    jobTitle: '',
    serviceOfInterest: 'MIS Reporting & Power BI',
    companySize: '21-100 employees',
    problemDescription: '',
    preferredContact: 'Email',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please provide a valid email address.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required.';
    }

    if (!formData.serviceOfInterest) {
      newErrors.serviceOfInterest = 'Please select a service of interest.';
    }

    if (!formData.problemDescription.trim()) {
      newErrors.problemDescription = 'Please describe your current reporting or workflow problem.';
    } else if (formData.problemDescription.trim().length < 15) {
      newErrors.problemDescription = 'Please provide at least 15 characters describing your problem.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot for spam bot detection
    if (formData.honeypot) {
      console.warn('Bot detected via honeypot.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulated reliable local submission flow (clearly labeled in UI)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setSubmittedData({ ...formData });
    }, 900);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      jobTitle: '',
      serviceOfInterest: 'MIS Reporting & Power BI',
      companySize: '21-100 employees',
      problemDescription: '',
      preferredContact: 'Email',
      honeypot: '',
    });
    setErrors({});
    setSubmitSuccess(false);
    setSubmittedData(null);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="cyan">Discovery & Consultation</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Book a Free Architecture Consultation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tell us about your current reporting spreadsheets, quota management, or automation friction. Our data architects will review your requirements and share an actionable evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Placeholders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Consultation Form Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
            {submitSuccess ? (
              <div className="space-y-6 text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Consultation Request Recorded (Demo Mode)
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{submittedData?.fullName}</strong>! In this interactive prototype, your consultation request for <strong>{submittedData?.serviceOfInterest}</strong> at <strong>{submittedData?.companyName}</strong> has been validated and simulated.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-1 text-slate-700 max-w-md mx-auto font-mono">
                  <div><strong>Email:</strong> {submittedData?.businessEmail}</div>
                  <div><strong>Company:</strong> {submittedData?.companyName} ({submittedData?.companySize})</div>
                  <div><strong>Preferred Contact:</strong> {submittedData?.preferredContact}</div>
                  <div><strong>Summary:</strong> {submittedData?.problemDescription}</div>
                </div>

                <div className="pt-4">
                  <Button onClick={handleResetForm} variant="outline" size="md">
                    Submit Another Consultation Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Discovery Consultation Form
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fields marked with an asterisk (<span className="text-rose-500">*</span>) are required.
                  </p>
                </div>

                {/* Honeypot field for bot protection (hidden from humans) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_field">Do not fill this</label>
                  <input
                    id="hp_field"
                    type="text"
                    value={formData.honeypot}
                    onChange={e => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Vikram Singhania"
                      className={`w-full text-sm bg-slate-50 border rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-600 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="businessEmail"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Business Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="businessEmail"
                      type="email"
                      value={formData.businessEmail}
                      onChange={e => setFormData({ ...formData, businessEmail: e.target.value })}
                      placeholder="vikram@company.com"
                      className={`w-full text-sm bg-slate-50 border rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all ${
                        errors.businessEmail ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.businessEmail}
                    />
                    {errors.businessEmail && (
                      <span className="text-[11px] text-rose-600 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.businessEmail}
                      </span>
                    )}
                  </div>
                </div>

                {/* Company Name & Job Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Company Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Industrial Solutions"
                      className={`w-full text-sm bg-slate-50 border rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all ${
                        errors.companyName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.companyName}
                    />
                    {errors.companyName && (
                      <span className="text-[11px] text-rose-600 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.companyName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="jobTitle"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Job Title
                    </label>
                    <input
                      id="jobTitle"
                      type="text"
                      value={formData.jobTitle}
                      onChange={e => setFormData({ ...formData, jobTitle: e.target.value })}
                      placeholder="e.g. Managing Director / VP Operations"
                      className="w-full text-sm bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Service of Interest & Company Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="serviceOfInterest"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Service of Interest <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="serviceOfInterest"
                      value={formData.serviceOfInterest}
                      onChange={e => setFormData({ ...formData, serviceOfInterest: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                    >
                      <option value="MIS Reporting & Power BI">MIS Reporting & Power BI</option>
                      <option value="Sales Performance Management">Sales Performance Management</option>
                      <option value="Business Process Automation">Business Process Automation</option>
                      <option value="AI Agents & Assistants">AI Agents & Assistants</option>
                      <option value="Predictive Analytics">Predictive Analytics</option>
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="companySize"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Approximate Company Size
                    </label>
                    <select
                      id="companySize"
                      value={formData.companySize}
                      onChange={e => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                    >
                      <option value="1-20 employees">1 - 20 employees</option>
                      <option value="21-100 employees">21 - 100 employees</option>
                      <option value="101-500 employees">101 - 500 employees</option>
                      <option value="500+ employees">500+ employees</option>
                    </select>
                  </div>
                </div>

                {/* Problem Description */}
                <div>
                  <label
                    htmlFor="problemDescription"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Current Reporting or Automation Problem <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="problemDescription"
                    rows={4}
                    value={formData.problemDescription}
                    onChange={e => setFormData({ ...formData, problemDescription: e.target.value })}
                    placeholder="Describe your current bottleneck (e.g., our team spends 3 hours daily consolidating branch spreadsheets, sales quotas are only calculated at month-end, etc.)"
                    className={`w-full text-sm bg-slate-50 border rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all ${
                      errors.problemDescription ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.problemDescription}
                  />
                  {errors.problemDescription && (
                    <span className="text-[11px] text-rose-600 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.problemDescription}
                    </span>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <span className="block text-xs font-semibold text-slate-700 mb-2">
                    Preferred Contact Method
                  </span>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-700">
                    {(['Email', 'Phone / WhatsApp', 'Video Call'] as const).map(method => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={e => setFormData({ ...formData, preferredContact: e.target.value })}
                          className="text-brand-blue focus:ring-brand-blue"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Privacy & Demo Notice */}
                <div className="pt-2">
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    By submitting this form, you acknowledge that GrowthPilots respects your confidentiality. Your business details are used strictly to evaluate your requirements and are never shared.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    isLoading={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                  >
                    Submit Consultation Request
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & Placeholder Explanations Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">
                Contact & Hub Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-brand-blue flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">
                      [Editable Location Placeholder]
                    </strong>
                    <span>Technology & Operations Hubs: Bengaluru & Mumbai, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-brand-blue flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">
                      Direct Email Placeholder:
                    </strong>
                    <span className="font-mono text-xs text-brand-blue">
                      contact@growthpilots.example
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-brand-blue flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">
                      Direct Phone Placeholder:
                    </strong>
                    <span className="font-mono text-xs text-slate-700">
                      +91 (0) 80 DEMO-PILOT
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Transparency & Privacy Standards:
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict NDA executed prior to reviewing proprietary data</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-brand-blue" />
                  <span>Architect response guaranteed within 1 business day</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Lock className="w-4 h-4 text-purple-600" />
                  <span>Local on-premise or private cloud architecture supported</span>
                </div>
              </div>
            </div>

            {/* Implementation Note for Developer / Integrations */}
            <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-slate-600 space-y-1.5">
              <span className="font-bold text-brand-blue block">
                Backend Integration Note:
              </span>
              <p>
                This form currently executes client-side validation and records simulated submissions. In production, configure environment variables (e.g. <code>VITE_API_BASE_URL</code> or <code>WEBHOOK_URL</code>) to route leads into your CRM or email provider.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
