'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function CourtProcessPage() {
  const { language, isHindi, t } = useLanguage();
  const [track, setTrack] = useState('civil'); // 'civil' or 'criminal'
  const [activeStep, setActiveStep] = useState(1);

  const civilSteps = [
    {
      step: 1,
      title: 'Pre-Litigation Statutory Notice',
      hindi: 'वाद-पूर्व विधिक सूचना',
      timeline: '15-60 Days',
      section: 'Section 80 CPC / Section 138 NI Act',
      description: 'Formal legal notice dispatched via Registered Post A.D. specifying the cause of action, demand of remedy, and statutory notice period before institution of suit.',
      docs: ['Vakalatnama', 'Postal Receipt', 'Delivered Consignment Proof'],
      icon: 'mail'
    },
    {
      step: 2,
      title: 'Plaint Institution & e-Filing',
      hindi: 'वाद पत्र प्रस्तुतीकरण',
      timeline: 'Day 1 - 7',
      section: 'Order VII, Civil Procedure Code (CPC)',
      description: 'Drafting the Plaint with verified Statement of Truth, affidavit, list of reliance documents, court fee stamp calculation, and formal registry scrutiny.',
      docs: ['Plaint (2 Copies)', 'Court Fee Challan', 'Statement of Truth'],
      icon: 'description'
    },
    {
      step: 3,
      title: 'Issuance & Service of Summons',
      hindi: 'समन तामील प्रक्रिया',
      timeline: '30 Days',
      section: 'Order V, CPC',
      description: 'Court issues judicial summons upon the defendant through process server, registered post, speed post, and approved electronic messaging.',
      docs: ['Summons Form', 'Process Fee Memo', 'Speed Post Consignment'],
      icon: 'send'
    },
    {
      step: 4,
      title: 'Written Statement & Replications',
      hindi: 'लिखित कथन (प्रतिवाद)',
      timeline: '30 to 90 Days Maximum',
      section: 'Order VIII, Rule 1 CPC',
      description: 'Defendant must submit specific defense denials. Commercial disputes enforce strict 120-day forfeiture of right to defend under Commercial Courts Act.',
      docs: ['Written Statement', 'Affidavit of Admission/Denial'],
      icon: 'edit_note'
    },
    {
      step: 5,
      title: 'Framing of Judicial Issues',
      hindi: 'विवादकों की रचना',
      timeline: 'Next Hearing Date',
      section: 'Order XIV, CPC',
      description: 'Judge reviews rival pleadings and formulates explicit material propositions of fact and law for trial adjudication (Burden of Proof allocation).',
      docs: ['Order Sheet', 'Draft Issues proposed by Advocates'],
      icon: 'rule'
    },
    {
      step: 6,
      title: 'Evidence & Cross-Examination',
      hindi: 'साक्ष्य एवं जिरह',
      timeline: '3 - 6 Months',
      section: 'Order XVIII CPC / Indian Evidence Act',
      description: 'Examination-in-chief on affidavit, followed by cross-examination of plaintiff and defense witnesses in open court or before court commissioner.',
      docs: ['Evidence Affidavits', 'Certified Exhibits Mark-A to Z'],
      icon: 'record_voice_over'
    },
    {
      step: 7,
      title: 'Final Arguments & Decree',
      hindi: 'अंतिम बहस एवं निर्णय',
      timeline: 'Within 30 Days of Arguments',
      section: 'Order XX, Rule 1 CPC',
      description: 'Comprehensive oral and written arguments by counsel. Pronouncement of final judgment followed by formal extraction of the executable decree.',
      docs: ['Written Submissions', 'Certified Copy of Judgment & Decree'],
      icon: 'gavel'
    }
  ];

  const criminalSteps = [
    {
      step: 1,
      title: 'Registration of FIR / Zero FIR',
      hindi: 'प्राथमिकी (एफआईआर) पंजीकरण',
      timeline: 'Immediate / 24 Hours',
      section: 'Section 173 BNSS / 154 CrPC',
      description: 'Information regarding cognizable offenses recorded at the police station. Duty officer provides free authenticated FIR copy to the complainant.',
      docs: ['Signed Complaint', 'Certified e-FIR Copy'],
      icon: 'local_police'
    },
    {
      step: 2,
      title: 'Investigation & Bail Applications',
      hindi: 'जांच एवं ज़मानत प्रक्रिया',
      timeline: '60 - 90 Days',
      section: 'Section 187 BNSS / 167 CrPC',
      description: 'Police collection of statements, forensics, and panchnama. Litigant right to Regular Bail or Anticipatory Bail before Sessions or High Court.',
      docs: ['Bail Application', 'Surety Bonds', 'Medical/Forensic Memo'],
      icon: 'lock_open'
    },
    {
      step: 3,
      title: 'Filing of Police Report / Chargesheet',
      hindi: 'अंतिम रिपोर्ट (चार्जशीट)',
      timeline: 'Statutory 60/90 Days',
      section: 'Section 193 BNSS / 173 CrPC',
      description: 'Police report presented to the Judicial Magistrate detailing witness testimonies, seizure memos, and offenses charged.',
      docs: ['Final Form Report', 'List of Witnesses & Seizures'],
      icon: 'folder_shared'
    },
    {
      step: 4,
      title: 'Cognizance & Framing of Charges',
      hindi: 'संज्ञान एवं आरोप विरचन',
      timeline: '1 - 2 Hearings',
      section: 'Section 251 / 240 CrPC',
      description: 'Magistrate reads and explains the formal charges to the accused person in open court. Accused pleads guilty or claims trial.',
      docs: ['Formal Charge Order Sheet', 'Plea Record'],
      icon: 'balance'
    },
    {
      step: 5,
      title: 'Prosecution & Defense Trial',
      hindi: 'विचारण एवं साक्ष्य',
      timeline: '6 - 12 Months',
      section: 'Indian Evidence Act / BSA 2023',
      description: 'Public Prosecutor presents evidence (PWs), followed by Section 313 statement of the accused, and Defense Evidence (DWs).',
      docs: ['Deposition Records', 'Exhibits', '313 BNSS Record'],
      icon: 'record_voice_over'
    },
    {
      step: 6,
      title: 'Pronouncement of Judgment',
      hindi: 'निर्णय एवं दंडादेश',
      timeline: 'Open Court Pronouncement',
      section: 'Section 353 CrPC / 392 BNSS',
      description: 'Magistrate/Judge delivers judgment of Acquittal or Conviction. In case of conviction, separate hearing on quantum of sentence.',
      docs: ['Certified Copy of Judgment', 'Bail/Custody Warrant'],
      icon: 'gavel'
    }
  ];

  const currentSteps = track === 'civil' ? civilSteps : criminalSteps;

  return (
    <div className="flex-1 bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HERO BANNER */}
        <section className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
            <div>
              <div className="flex items-center space-x-2 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">account_tree</span>
                <span>{isHindi ? 'संवैधानिक मुकदमा प्रक्रिया मार्गदर्शिका' : 'Statutory Litigation Procedure Visualizer'}</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary tracking-tight mb-2">
                {t('processTitle')}
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                {t('processSub')}
              </p>
            </div>

            {/* Track Switcher */}
            <div className="flex items-center bg-surface-container p-1.5 rounded-xl border border-outline-variant">
              <button
                onClick={() => { setTrack('civil'); setActiveStep(1); }}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  track === 'civil'
                    ? 'bg-primary text-surface shadow-sm'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-sm">balance</span>
                <span>{t('civilTrack')}</span>
              </button>
              <button
                onClick={() => { setTrack('criminal'); setActiveStep(1); }}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  track === 'criminal'
                    ? 'bg-primary text-surface shadow-sm'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-sm">security</span>
                <span>{t('criminalTrack')}</span>
              </button>
            </div>
          </div>
        </section>

        {/* TIMELINE STEPPER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* STEP LIST SELECTOR */}
          <div className="space-y-3">
            <h2 className="font-serif text-lg font-bold text-primary mb-3">
              {isHindi ? `मुकदमे के चरण (${currentSteps.length} चरण)` : `Stages of Litigation (${currentSteps.length} Steps)`}
            </h2>
            {currentSteps.map((s) => {
              const isSelected = activeStep === s.step;
              return (
                <div
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-surface-container-highest border-secondary shadow-md'
                      : 'bg-surface-container-lowest border-outline-variant/60 hover:bg-surface-container-low'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                      {isHindi ? `चरण ${s.step} • ${s.timeline}` : `Stage ${s.step} • ${s.timeline}`}
                    </span>
                    <span className="material-symbols-outlined text-sm text-primary">{s.icon}</span>
                  </div>
                  <h3 className="font-serif font-bold text-sm text-primary">
                    {isHindi ? s.hindi : s.title}
                  </h3>
                  <div className="text-xs text-on-surface-variant font-medium">
                    {isHindi ? s.title : s.hindi}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ACTIVE STEP DEEP DIVE */}
          <div className="lg:col-span-2">
            {(() => {
              const current = currentSteps.find(s => s.step === activeStep) || currentSteps[0];
              return (
                <div className="bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                  
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-outline-variant/40">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-primary text-surface flex items-center justify-center font-serif text-xl font-bold">
                        0{current.step}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-secondary uppercase tracking-wider block">
                          {isHindi ? `विधिक प्रावधान: ${current.section}` : `Governing Law: ${current.section}`}
                        </span>
                        <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                          {isHindi ? current.hindi : current.title}
                        </h2>
                        <div className="text-xs font-semibold text-on-surface-variant">
                          {isHindi ? current.title : current.hindi}
                        </div>
                      </div>
                    </div>

                    <span className="bg-secondary/15 text-secondary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span>{isHindi ? `समय सीमा: ${current.timeline}` : `Statutory Window: ${current.timeline}`}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      {isHindi ? 'प्रक्रियात्मक विवरण' : 'Procedural Explanation'}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {current.description}
                    </p>
                  </div>

                  {/* Required Documents Checklist */}
                  <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/40 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-secondary">checklist</span>
                      <span>{t('requiredDocs')}</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {current.docs.map((doc, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-on-surface bg-surface-container-lowest p-2 rounded-lg border border-outline-variant/30">
                          <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Next Step Navigation */}
                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant/40">
                    <button
                      onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                      disabled={activeStep === 1}
                      className="px-4 py-2 rounded-lg text-xs font-bold text-primary border border-outline-variant hover:bg-surface-container disabled:opacity-40 transition-colors"
                    >
                      {isHindi ? '← पिछला चरण' : '← Previous Stage'}
                    </button>
                    <button
                      onClick={() => setActiveStep(Math.min(currentSteps.length, activeStep + 1))}
                      disabled={activeStep === currentSteps.length}
                      className="px-4 py-2 rounded-lg text-xs font-bold bg-primary text-surface hover:bg-primary-container disabled:opacity-40 transition-colors"
                    >
                      {isHindi ? 'अगला चरण →' : 'Next Stage →'}
                    </button>
                  </div>

                  {/* Litigant Guidance CTAs */}
                  <div className="pt-4 border-t border-outline-variant/40 flex flex-wrap gap-3">
                    <Link
                      href="/situation-analysis"
                      className="flex-1 py-2.5 bg-secondary text-on-secondary rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-sm">troubleshoot</span>
                      <span>{isHindi ? 'अपनी कानूनी स्थिति का विश्लेषण करें' : 'Analyze My Situation'}</span>
                    </Link>
                    <Link
                      href="/nalsa-locator"
                      className="flex-1 py-2.5 bg-primary text-surface rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm">volunteer_activism</span>
                      <span>{isHindi ? 'मुफ़्त कानूनी सहायता का अनुरोध करें' : 'Request Free Legal Aid'}</span>
                    </Link>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </div>
  );
}
