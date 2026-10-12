'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function LegalDossierPage() {
  const { language, isHindi, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('timeline');

  const timelineEvents = [
    {
      date: '12 Jan 2024',
      stage: 'Agreement to Sell Executed',
      details: 'Registered agreement to sell for commercial property at Connaught Place, New Delhi with earnest advance of Rs. 25,00,000 paid via RTGS.',
      exhibit: 'Exhibit P-1',
      status: 'Admitted'
    },
    {
      date: '14 Jul 2024',
      stage: 'Statutory Notice under Section 80 CPC',
      details: 'Formal demand of specific performance dispatched via Registered Post AD after vendor failed to execute sale deed within 6 months.',
      exhibit: 'Exhibit P-2 & P-3',
      status: 'Proved'
    },
    {
      date: '12 Sep 2024',
      stage: 'Institution of Commercial Suit',
      details: 'Plaint filed before Patiala House District Courts Complex. Verified Statement of Truth and Court Fee of Rs. 1,08,000 paid.',
      exhibit: 'Plaint Docket',
      status: 'Cognizance Taken'
    },
    {
      date: '28 Oct 2024',
      stage: 'Written Statement & Issues Framed',
      details: 'Defendant filed defense claiming readiness and willingness issues. Court formulated 4 judicial issues under Order XIV CPC.',
      exhibit: 'Order Sheet dt. 28.10.2024',
      status: 'Framed'
    },
    {
      date: 'Tomorrow, 10:30 AM',
      stage: 'Cross-Examination of Plaintiff (PW-1)',
      details: 'Plaintiff Adv. Rajesh Sharma to appear in Court Room 14 for oral cross-examination before Sh. Vikramajit Sen, DHJS.',
      exhibit: 'Subpoena Served',
      status: 'Listed'
    }
  ];

  const exhibits = [
    { mark: 'Mark P-1', title: 'Original Agreement to Sell dt. 12.01.2024', type: 'Registered Deed', pages: '14 Pages' },
    { mark: 'Mark P-2', title: 'Bank Statement proving RTGS Transfer of Rs. 25 Lakhs', type: 'Bank Certificate', pages: '02 Pages' },
    { mark: 'Mark P-3', title: 'RPAD Postal Consignment Tracking Delivery Slip', type: 'India Post Certificate', pages: '01 Page' },
    { mark: 'Mark P-4', title: 'WhatsApp Communications Transcript with Vendor', type: 'Section 65B Certificate', pages: '08 Pages' },
    { mark: 'Mark P-5', title: 'Certified Copy of Encumbrance Certificate', type: 'Sub-Registrar Record', pages: '04 Pages' }
  ];

  return (
    <div className="flex-1 bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HERO DOSSIER COMMAND HEADER */}
        <section className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-secondary/15 text-secondary px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  {isHindi ? 'वाणिज्यिक वाद • आदेश 37 सीपीसी' : 'Commercial Suit • Order XXXVII CPC'}
                </span>
                <span className="text-outline text-xs">•</span>
                <span className="text-xs font-mono text-primary font-bold">CNR: DLND01-004821-2024</span>
              </div>
              
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary tracking-tight mb-2">
                {isHindi ? 'शर्मा बनाम गोयल एवं अन्य (वाद संख्या 482/2024)' : 'Sharma v. Goel & Ors. (CS 482/2024)'}
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                {isHindi ? 'संविदा के विनिर्दिष्ट पालन, स्थायी निषेधाज्ञा और क्षतिपूर्ति हेतु वाणिज्यिक वाद। दिल्ली उच्च न्यायालय नियमावली के अधीन संचालित।' : 'Suit for Specific Performance of Contract, Permanent Injunction, and Recovery of Damages. Maintained under the High Court of Delhi Rules & Commercial Courts Act.'}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-on-surface">
                <div><strong>{isHindi ? 'अदालत:' : 'Court:'}</strong> Patiala House Courts (Court Room 14)</div>
                <div><strong>{isHindi ? 'न्यायाधीश:' : 'Judge:'}</strong> Sh. Vikramajit Sen, DHJS</div>
                <div><strong>{isHindi ? 'आगामी कार्यवाही:' : 'Next Stage:'}</strong> <span className="text-error font-bold">{isHindi ? 'कल, 10:30 पूर्वाह्न (वादी जिरह)' : 'Tomorrow, 10:30 AM (PW-1 Cross)'}</span></div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => alert('Generating complete authenticated legal dossier PDF...')}
                className="bg-primary hover:bg-primary-container text-surface px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border border-secondary shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-sm text-tertiary-fixed">download</span>
                <span>{isHindi ? 'डोजियर पीडीएफ डाउनलोड' : 'Download Dossier PDF'}</span>
              </button>
              <Link
                href="/cause-vault"
                className="bg-surface-container hover:bg-surface-container-high text-primary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border border-outline-variant transition-all"
              >
                <span className="material-symbols-outlined text-sm text-secondary">folder</span>
                <span>{isHindi ? 'वॉल्ट फ़ाइलें' : 'Vault Files'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* TABS */}
        <div className="flex border-b border-outline-variant/60 gap-4">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`pb-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'timeline'
                ? 'border-secondary text-secondary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-sm">timeline</span>
            <span>Case Procedural Chronology (5 Events)</span>
          </button>
          <button
            onClick={() => setActiveTab('exhibits')}
            className={`pb-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'exhibits'
                ? 'border-secondary text-secondary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-sm">attachment</span>
            <span>Evidence & Exhibits Mark List (5 Items)</span>
          </button>
        </div>

        {/* TAB 1: TIMELINE */}
        {activeTab === 'timeline' && (
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="font-serif text-lg font-bold text-primary">
              Litigation Proceeding Chronology
            </h2>

            <div className="relative border-l-2 border-secondary/40 ml-4 space-y-8 pl-6">
              {timelineEvents.map((evt, index) => (
                <div key={index} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-surface shadow-sm"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                    <h3 className="font-serif font-bold text-base text-primary">
                      {evt.stage}
                    </h3>
                    <span className="text-xs font-bold text-secondary font-mono">
                      {evt.date}
                    </span>
                  </div>

                  <p className="text-xs text-on-surface-variant leading-relaxed max-w-3xl mb-2">
                    {evt.details}
                  </p>

                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="bg-surface-container px-2 py-0.5 rounded text-primary font-bold">
                      {evt.exhibit}
                    </span>
                    <span className="text-secondary font-semibold">
                      Status: {evt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: EXHIBITS */}
        {activeTab === 'exhibits' && (
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-6 shadow-sm space-y-4">
            <h2 className="font-serif text-lg font-bold text-primary">
              Marked Exhibits & Admitted Documents
            </h2>

            <div className="divide-y divide-outline-variant/40">
              {exhibits.map((item, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-1 bg-primary text-surface rounded text-xs font-mono font-bold">
                      {item.mark}
                    </span>
                    <div>
                      <div className="font-bold text-xs text-primary">{item.title}</div>
                      <div className="text-[11px] text-on-surface-variant">{item.type} • {item.pages}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={() => alert(`Opening ${item.mark} viewer`)} className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-primary rounded-lg text-xs font-bold transition-colors">
                      View Exhibit
                    </button>
                    <button onClick={() => alert(`Downloading verified certificate for ${item.mark}`)} className="px-3 py-1.5 bg-secondary text-on-secondary rounded-lg text-xs font-bold transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
