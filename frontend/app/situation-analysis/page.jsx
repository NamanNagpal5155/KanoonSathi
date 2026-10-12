'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function SituationAnalysisPage() {
  const { language, isHindi, t } = useLanguage();
  const [category, setCategory] = useState('property');
  const [step, setStep] = useState(1);
  const [urgency, setUrgency] = useState('medium');
  const [analyzed, setAnalyzed] = useState(false);

  const categories = [
    { id: 'property', name: 'Property & Tenancy Dispute', hindi: 'संपत्ति एवं किरायेदारी विवाद', icon: 'home' },
    { id: 'cheque', name: 'Cheque Bounce / Banking Debt', hindi: 'चेक बाउंस (धारा 138)', icon: 'payments' },
    { id: 'consumer', name: 'Consumer Grievance / Defective Product', hindi: 'उपभोक्ता संरक्षण विवाद', icon: 'shopping_bag' },
    { id: 'matrimonial', name: 'Family & Matrimonial Matters', hindi: 'पारिवारिक एवं वैवाहिक मामले', icon: 'diversity_1' },
    { id: 'cyber', name: 'Cyber Crime & Online Financial Fraud', hindi: 'साइबर वित्तीय धोखाधड़ी', icon: 'security' },
    { id: 'criminal', name: 'Criminal Defense / Police Complaint', hindi: 'आपराधिक शिकायत / बचाव', icon: 'gavel' }
  ];

  const handleAnalyze = (e) => {
    e.preventDefault();
    setAnalyzed(true);
  };

  return (
    <div className="flex-1 bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* BANNER */}
        <section className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
            <div>
              <div className="flex items-center space-x-2 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">psychology</span>
                <span>{isHindi ? 'एआई-सहायक विधिक विश्लेषण एवं धारा मैपिंग' : 'AI-Assisted Constitutional Triage & Statutory Mapping'}</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary tracking-tight mb-2">
                {t('triageTitle')}
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                {t('triageSub')}
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/court-process"
                className="bg-primary hover:bg-primary-container text-surface px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border border-secondary shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-sm text-tertiary-fixed">account_tree</span>
                <span>{isHindi ? 'अदालती प्रक्रिया चरण' : 'Court Process Steps'}</span>
              </Link>
              <Link
                href="/legal-aid"
                className="bg-secondary hover:bg-secondary/90 text-on-secondary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-sm">support_agent</span>
                <span>{isHindi ? 'विधिक सहायक से बात करें' : 'Talk to Paralegal'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* INTERACTIVE FORM & RESULTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: FORM INPUT */}
          <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="font-serif text-xl font-bold text-primary">
              {isHindi ? '1. अपनी विधिक स्थिति को वर्गीकृत करें' : '1. Classify Your Legal Situation'}
            </h2>

            {/* Category Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {categories.map((c) => {
                const isSelected = category === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => { setCategory(c.id); setAnalyzed(false); }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-primary text-surface border-secondary shadow-sm'
                        : 'bg-surface-container-low text-on-surface border-outline-variant/50 hover:bg-surface-container'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl mb-1 block text-tertiary-fixed">{c.icon}</span>
                    <div className="text-xs font-bold leading-snug">{isHindi ? c.hindi : c.name}</div>
                    <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-surface-dim' : 'text-on-surface-variant'}`}>{isHindi ? c.name : c.hindi}</div>
                  </button>
                );
              })}
            </div>

            <form onSubmit={handleAnalyze} className="space-y-4 pt-4 border-t border-outline-variant/40">
              <div>
                <label className="block text-xs font-bold text-primary mb-1">
                  {t('describeGrievance')}
                </label>
                <textarea
                  rows={4}
                  required
                  defaultValue="Landlord sent an informal eviction message giving 3 days notice despite an active 11-month registered lease agreement running until December 2026. Security deposit of Rs. 1,20,000 is withheld without cause."
                  className="w-full p-3 bg-surface-container-low border border-outline-variant rounded-xl text-xs text-on-surface focus:outline-none focus:border-primary leading-relaxed"
                  placeholder={isHindi ? 'तारीख, अनुबंध, राशि और संबंधित पक्षों का विवरण दें...' : 'Detail dates, agreements, amounts involved, and opposing parties...'}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    {isHindi ? 'विवाद उत्पन्न होने की तिथि' : 'Date Cause of Action Arose'}
                  </label>
                  <input
                    type="date"
                    defaultValue="2026-10-01"
                    className="w-full p-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-xs text-on-surface focus:outline-none focus:border-primary font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    {t('urgencyLevel')}
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full p-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-xs text-on-surface font-semibold focus:outline-none focus:border-primary"
                  >
                    <option value="high">{t('urgencyEmergency')}</option>
                    <option value="medium">{t('urgencyUrgent')}</option>
                    <option value="low">{t('urgencyNormal')}</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary-container text-surface rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-secondary shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base text-tertiary-fixed">smart_toy</span>
                <span>{t('runAnalysis')}</span>
              </button>
            </form>
          </div>

          {/* RIGHT: ANALYSIS RESULT */}
          <div className="lg:col-span-5 bg-surface-container-low border border-outline-variant/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span>
                Statutory Assessment Dossier
              </span>
              <span className="bg-surface-container-highest px-2 py-0.5 rounded text-[11px] font-mono text-primary">
                BNS & CPC Linked
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block">
                  Identified Legal Causes of Action
                </span>
                <h3 className="font-serif text-lg font-bold text-primary mt-1">
                  Unlawful Dispossession & Breach of Lease Covenant
                </h3>
              </div>

              {/* Sections Mapped */}
              <div className="space-y-2 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/40 text-xs">
                <div className="font-bold text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-secondary">gavel</span>
                  <span>Applicable Statutes & Provisions:</span>
                </div>
                <ul className="space-y-1.5 pl-5 list-disc text-on-surface leading-relaxed text-[11px]">
                  <li><strong>Section 6, Specific Relief Act, 1963:</strong> Suit by person dispossessed of immovable property.</li>
                  <li><strong>Section 106, Transfer of Property Act, 1882:</strong> Mandatory 15-day notice requirement for termination of lease.</li>
                  <li><strong>Section 316 BNS (405 IPC):</strong> Criminal Breach of Trust regarding security deposit.</li>
                </ul>
              </div>

              {/* Court Jurisdiction */}
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/40 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Forum / Court of Jurisdiction:</span>
                  <span className="font-bold text-primary">Court of Civil Judge / Rent Tribunal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Limitation Period:</span>
                  <span className="font-bold text-secondary">6 Months (Sec 6 SRA)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Interim Relief Available:</span>
                  <span className="font-bold text-primary">Temporary Injunction (Order 39 CPC)</span>
                </div>
              </div>

              {/* Recommended Steps */}
              <div className="p-4 bg-secondary-fixed/40 rounded-xl border border-secondary/30 space-y-2">
                <h4 className="text-xs font-bold text-on-secondary-fixed flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">priority_high</span>
                  Immediate Recommended Legal Actions:
                </h4>
                <ol className="text-xs text-on-surface space-y-1 pl-4 list-decimal leading-relaxed">
                  <li>Dispatch formal reply notice under Section 106 Transfer of Property Act.</li>
                  <li>Preserve all rent payment receipts, WhatsApp correspondence, and lease deed.</li>
                  <li>File for Police DD entry if physical lock-breaking is threatened.</li>
                </ol>
              </div>

              {/* Connected Action Buttons */}
              <div className="space-y-2 pt-2">
                <Link
                  href="/workspace"
                  className="w-full py-2.5 bg-primary text-surface rounded-xl text-xs font-bold text-center block hover:bg-primary-container transition-colors"
                >
                  Save Assessment to Citizen Workspace
                </Link>
                <Link
                  href="/nalsa-locator"
                  className="w-full py-2.5 bg-surface-container text-primary rounded-xl text-xs font-bold text-center block hover:bg-surface-container-high border border-outline-variant transition-colors"
                >
                  Connect with Free Legal Aid Counsel
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
