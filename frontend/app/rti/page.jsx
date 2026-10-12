'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function RtiCrafterPage() {
  const { language, isHindi, t } = useLanguage();
  const [department, setDepartment] = useState('mcd');
  const [applicantName, setApplicantName] = useState('Adv. Rajesh Sharma');
  const [applicantAddress, setApplicantAddress] = useState('Chamber 412, Patiala House Courts, New Delhi - 110001');
  const [bplStatus, setBplStatus] = useState(false);
  const [questions, setQuestions] = useState([
    'Please provide certified copy of sanctioned building plan for Property No. B-14, Connaught Circus, New Delhi.',
    'State the date and file diary number under which completion certificate was granted for said premises.',
    'Provide certified copies of inspection notes submitted by Junior Engineer (Building) between Jan 2024 to Aug 2024.'
  ]);
  const [newQuestion, setNewQuestion] = useState('');
  const [draftGenerated, setDraftGenerated] = useState(false);

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion.trim()]);
      setNewQuestion('');
    }
  };

  const removeQuestion = (idx) => {
    setQuestions(questions.filter((_, i) => i !== idx));
  };

  return (
    <div className="flex-1 bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HERO BANNER */}
        <section className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
            <div>
              <div className="flex items-center space-x-2 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">history_edu</span>
                <span>{isHindi ? 'सूचना का अधिकार अधिनियम, 2005 की धारा 6(1) के तहत' : 'Statutory RTI Crafter under Section 6(1), RTI Act 2005'}</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary tracking-tight mb-2">
                {t('rtiTitle')}
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                {t('rtiSub')}
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/workspace"
                className="bg-primary hover:bg-primary-container text-surface px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border border-secondary shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-sm text-tertiary-fixed">dashboard</span>
                <span>{isHindi ? 'नागरिक कार्यस्थल' : 'Citizen Workspace'}</span>
              </Link>
              <Link
                href="/cause-vault"
                className="bg-secondary hover:bg-secondary/90 text-on-secondary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-sm">folder</span>
                <span>{isHindi ? 'संग्रहीत आरटीआई' : 'Archived RTIs'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* APPLICATION BUILDER & LIVE PREVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: FORM BUILDER */}
          <div className="lg:col-span-6 bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="font-serif text-xl font-bold text-primary pb-3 border-b border-outline-variant/40">
              {isHindi ? '1. आवेदन विवरण' : '1. Application Parameters'}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-primary mb-1">
                  {t('selectDept')}
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full p-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-xs text-on-surface font-semibold focus:outline-none focus:border-primary"
                >
                  <option value="mcd">{isHindi ? 'दिल्ली नगर निगम (MCD) - भवन विभाग' : 'Municipal Corporation of Delhi (MCD) - Building Dept'}</option>
                  <option value="dda">{isHindi ? 'दिल्ली विकास प्राधिकरण (DDA) - भूमि आवंटन' : 'Delhi Development Authority (DDA) - Land Allotment'}</option>
                  <option value="police">{isHindi ? 'दिल्ली पुलिस - डीसीपी कार्यालय (सतर्कता)' : 'Delhi Police - Office of the DCP (Vigilance)'}</option>
                  <option value="revenue">{isHindi ? 'राजस्व विभाग एवं भूमि अभिलेख, दिल्ली सरकार' : 'Department of Revenue & Land Records, Govt of NCT'}</option>
                  <option value="highcourt">{isHindi ? 'जन सूचना अधिकारी, दिल्ली उच्च न्यायालय' : 'Public Information Officer, High Court of Delhi'}</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    {t('applicantNameLabel')}
                  </label>
                  <input
                    type="text"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full p-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-xs text-on-surface font-medium focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    {isHindi ? 'नागरिकता स्थिति' : 'Citizenship Status'}
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={isHindi ? 'भारत का नागरिक (धारा 3 के अनुरूप)' : 'Citizen of India (Sec 3 Compliant)'}
                    className="w-full p-2.5 bg-surface-container border border-outline-variant rounded-xl text-xs text-on-surface-variant font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-primary mb-1">
                  {t('applicantAddrLabel')}
                </label>
                <textarea
                  rows={2}
                  value={applicantAddress}
                  onChange={(e) => setApplicantAddress(e.target.value)}
                  className="w-full p-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-xs text-on-surface font-medium focus:outline-none focus:border-primary leading-relaxed"
                />
              </div>

              {/* BPL Exemption Toggle */}
              <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-primary">
                    {isHindi ? 'गरीबी रेखा से नीचे (BPL) शुल्क छूट' : 'Below Poverty Line (BPL) Exemption'}
                  </div>
                  <div className="text-[11px] text-on-surface-variant">
                    {isHindi ? 'धारा 7(5) के परंतुक के तहत ₹10 के आवेदन शुल्क से पूर्ण विधिक छूट।' : 'Statutory exemption from application fee of Rs. 10 under Proviso to Sec 7(5).'}
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={bplStatus}
                  onChange={(e) => setBplStatus(e.target.checked)}
                  className="rounded border-outline text-secondary w-5 h-5 cursor-pointer"
                />
              </div>

              {/* Information Questions */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-primary mb-2">
                  {isHindi ? `मांगी गई सूचना के बिंदु (${questions.length} प्रश्न)` : `Statutory Queries Sought (${questions.length} Items)`}
                </label>
                <div className="space-y-2 mb-3">
                  {questions.map((q, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-2 p-2.5 bg-surface-container-low rounded-lg border border-outline-variant/30 text-xs text-on-surface">
                      <span className="font-bold text-secondary">{idx + 1}.</span>
                      <span className="flex-1 leading-relaxed">{q}</span>
                      <button
                        type="button"
                        onClick={() => removeQuestion(idx)}
                        className="text-on-surface-variant hover:text-error text-xs"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder={isHindi ? 'धारा 6(1) के अंतर्गत विशिष्ट प्रश्न जोड़ें...' : 'Add specific question under Section 6(1)...'}
                    className="flex-1 p-2 bg-surface-container-low border border-outline-variant rounded-lg text-xs text-on-surface focus:outline-none focus:border-primary"
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addQuestion(); } }}
                  />
                  <button
                    type="button"
                    onClick={addQuestion}
                    className="px-3 py-2 bg-primary text-surface rounded-lg text-xs font-bold hover:bg-primary-container transition-colors"
                  >
                    {isHindi ? '+ जोड़ें' : '+ Add'}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setDraftGenerated(true)}
                className="w-full py-3 bg-secondary hover:bg-secondary/90 text-on-secondary rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base">format_align_left</span>
                <span>{isHindi ? 'फॉर्म-ए एवं स्टाम्प ड्राफ्ट तैयार करें' : 'Generate Official RTI Form & Stamp Paper Draft'}</span>
              </button>
            </div>
          </div>

          {/* RIGHT: LIVE RTI PREVIEW */}
          <div className="lg:col-span-6 bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">print</span>
                Official Form-A Preview
              </span>
              <button
                onClick={() => window.print()}
                className="text-xs text-primary font-bold hover:underline flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">print</span>
                <span>Print Draft</span>
              </button>
            </div>

            {/* DOCUMENT CANVAS */}
            <div className="p-6 bg-[#fffcf5] border-2 border-[#e3d7bf] rounded-xl text-xs font-serif leading-relaxed text-[#1a150e] space-y-4 shadow-inner">
              <div className="text-center space-y-1 pb-3 border-b border-[#e3d7bf]">
                <div className="font-bold text-base tracking-wide uppercase">FORM - A</div>
                <div className="text-xs font-sans font-bold">APPLICATION FOR OBTAINING INFORMATION UNDER SECTION 6(1)</div>
                <div className="text-[11px] font-sans">RIGHT TO INFORMATION ACT, 2005</div>
              </div>

              <div className="space-y-1 font-sans text-xs">
                <div><strong>To:</strong></div>
                <div>The Public Information Officer (PIO) / CPIO</div>
                <div className="capitalize">{department.toUpperCase()} Authority Headquarters</div>
                <div>National Capital Territory of Delhi</div>
              </div>

              <div className="space-y-2 pt-2">
                <div><strong>1. Full Name of the Applicant:</strong> {applicantName}</div>
                <div><strong>2. Address:</strong> {applicantAddress}</div>
                <div><strong>3. Particulars of Information Required:</strong></div>
                <ol className="list-decimal pl-6 space-y-1.5 text-[11px]">
                  {questions.map((q, idx) => (
                    <li key={idx} className="leading-relaxed">{q}</li>
                  ))}
                </ol>
                <div><strong>4. Period to which information relates:</strong> Current Financial Year & Preceding 2 Years</div>
                <div><strong>5. Mode of Delivery Preferred:</strong> By Registered Post / Speed Post</div>
                <div><strong>6. Application Fee Details:</strong> {bplStatus ? 'Exempted (BPL Certificate Attached)' : 'Rs. 10/- via Indian Postal Order / Court Fee Stamp No. IP-892182'}</div>
              </div>

              <div className="pt-6 flex justify-between items-end font-sans text-xs">
                <div>
                  <div>Date: 12 Oct 2026</div>
                  <div>Place: New Delhi</div>
                </div>
                <div className="text-right">
                  <div className="h-10"></div>
                  <div className="border-t border-[#1a150e] pt-1 font-bold">Signature of Applicant</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => alert('Saved RTI application to Cause Vault!')}
                className="flex-1 py-2.5 bg-primary text-surface rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm text-tertiary-fixed">save</span>
                <span>Save to Cause Vault</span>
              </button>
              <Link
                href="/find-court"
                className="flex-1 py-2.5 bg-surface-container text-primary rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 border border-outline-variant"
              >
                <span className="material-symbols-outlined text-sm text-secondary">domain</span>
                <span>Locate PIO Office</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
