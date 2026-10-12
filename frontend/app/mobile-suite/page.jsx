'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function MobileSuitePage() {
  const { language, isHindi, t } = useLanguage();
  const [activeNotice, setActiveNotice] = useState('cheque');

  return (
    <div className="flex-1 bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* BANNER */}
        <section className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-secondary/20 text-secondary border border-secondary flex items-center justify-center mb-3">
            <span className="material-symbols-outlined text-2xl">smartphone</span>
          </div>
          <span className="bg-surface-container px-3 py-1 rounded text-secondary text-xs font-bold uppercase tracking-wider">
            {isHindi ? 'स्पर्श-अनुकूलित नागरिक विधिक सहायता' : 'Touch-Optimized Citizen Legal Aid Suite'}
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary tracking-tight mt-2 mb-2">
            {isHindi ? 'मोबाइल नागरिक कानूनी सहायता सूट' : 'Mobile Citizen Legal Aid Suite'}
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            {isHindi ? 'त्वरित विधिक नोटिस प्रारूपक, वास्तविक समय सुनवाई अलर्ट और नालसा टेली-लॉ 15100 से सीधा संपर्क।' : 'Fast statutory notices generator, real-time court hearing push alerts, and direct one-touch connectivity to NALSA Tele-Law 15100.'}
          </p>
        </section>

        {/* QUICK ACTION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant/60 p-5 rounded-2xl shadow-sm space-y-2">
            <span className="material-symbols-outlined text-secondary text-2xl">notifications_active</span>
            <div className="font-serif font-bold text-sm text-primary">Court Hearing Alerts</div>
            <p className="text-xs text-on-surface-variant">Automated SMS & WhatsApp alerts for next listed dates on NJDG.</p>
            <Link href="/workspace" className="text-xs text-secondary font-bold hover:underline block pt-2">
              View Active Hearings →
            </Link>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/60 p-5 rounded-2xl shadow-sm space-y-2">
            <span className="material-symbols-outlined text-secondary text-2xl">call</span>
            <div className="font-serif font-bold text-sm text-primary">One-Touch Emergency SOS</div>
            <p className="text-xs text-on-surface-variant">Instant connection with government legal aid defense counsel.</p>
            <a href="tel:15100" className="text-xs text-secondary font-bold hover:underline block pt-2">
              Dial 15100 Direct →
            </a>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/60 p-5 rounded-2xl shadow-sm space-y-2">
            <span className="material-symbols-outlined text-secondary text-2xl">description</span>
            <div className="font-serif font-bold text-sm text-primary">Mobile Notice Crafter</div>
            <p className="text-xs text-on-surface-variant">Generate legal notices on your mobile phone in under 2 minutes.</p>
            <Link href="/rti" className="text-xs text-secondary font-bold hover:underline block pt-2">
              Open RTI Crafter →
            </Link>
          </div>
        </div>

        {/* STATUTORY NOTICE GENERATOR INTERFACE */}
        <div className="bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
            <h2 className="font-serif text-lg font-bold text-primary">
              Generate Mobile Legal Notice (RPAD Draft)
            </h2>
            <span className="text-xs text-secondary font-bold bg-secondary/10 px-2.5 py-1 rounded">
              Ready in 3 Steps
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'cheque', label: 'Section 138 Cheque Bounce', icon: 'payments' },
              { id: 'eviction', label: 'Tenancy Eviction Notice', icon: 'home' },
              { id: 'defamation', label: 'Defamation / Cease & Desist', icon: 'campaign' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveNotice(item.id)}
                className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                  activeNotice === item.id
                    ? 'bg-primary text-surface border-secondary shadow-sm'
                    : 'bg-surface-container-low text-on-surface border-outline-variant/40 hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-xl text-tertiary-fixed">{item.icon}</span>
                <span className="text-xs font-bold">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/40 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-primary mb-1">Addressee / Defaulter Name</label>
                <input
                  type="text"
                  defaultValue="Sh. Ramesh Goel"
                  className="w-full p-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs text-on-surface font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary mb-1">Cheque / Disputed Amount (₹)</label>
                <input
                  type="text"
                  defaultValue="₹ 8,50,000/-"
                  className="w-full p-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs text-on-surface font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-primary mb-1">Cheque Number & Bank Return Memo Date</label>
              <input
                type="text"
                defaultValue="Cheque No. 049182 drawn on HDFC Bank, returned on 28.09.2026 marked 'Funds Insufficient'"
                className="w-full p-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs text-on-surface font-medium"
              />
            </div>

            <button
              onClick={() => alert('Generated Section 138 Statutory Notice! Saved to Cause Vault.')}
              className="w-full py-3 bg-secondary hover:bg-secondary/90 text-on-secondary rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base">picture_as_pdf</span>
              <span>Generate Printable RPAD Legal Notice PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
