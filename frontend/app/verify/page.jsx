'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function VerificationSuitePage() {
  const { language, isHindi, t } = useLanguage();
  const [step, setStep] = useState(2);
  const [aadhaarVerified, setAadhaarVerified] = useState(true);
  const [barCouncilVerified, setBarCouncilVerified] = useState(true);

  return (
    <div className="flex-1 bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* BANNER */}
        <section className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-primary-container text-tertiary-fixed border-2 border-secondary flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">verified_user</span>
          </div>
          <span className="bg-surface-container px-3 py-1 rounded text-secondary text-xs font-bold uppercase tracking-wider">
            {isHindi ? 'स्तर-3 सार्वभौम क्रिप्टोग्राफिक सत्यापन' : 'Level-3 Sovereign Cryptographic Assurance'}
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary tracking-tight mt-2 mb-2">
            {isHindi ? 'नागरिक प्रमाणीकरण एवं सत्यापन सूट' : 'Citizen Authentication & Verification Suite'}
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {isHindi ? 'डिजिलॉकर, आधार जनसांख्यिकी और बार काउंसिल रजिस्ट्री द्वारा अपनी कानूनी पहचान सत्यापित करें।' : 'Verify your legal identity via DigiLocker, Aadhaar demographic authentication, and Bar Council registry to unlock encrypted Cause Vault filing privileges.'}
          </p>
        </section>

        {/* VERIFICATION STEPS PROGRESSION */}
        <div className="bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="font-serif text-xl font-bold text-primary pb-3 border-b border-outline-variant/40">
            Identity Credential Attestation
          </h2>

          <div className="space-y-4">
            
            {/* Step 1: DigiLocker */}
            <div className="p-4 rounded-xl border border-secondary/40 bg-secondary-fixed/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-secondary text-3xl">badge</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-primary">Aadhaar e-KYC (DigiLocker Integration)</span>
                    <span className="bg-secondary/20 text-secondary text-[10px] font-bold px-2 py-0.5 rounded">VERIFIED</span>
                  </div>
                  <div className="text-[11px] text-on-surface-variant">UIDAI Token: •••••••• 8812 • Verified on 12 Oct 2026</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
            </div>

            {/* Step 2: Bar Council / Litigant Status */}
            <div className="p-4 rounded-xl border border-secondary/40 bg-secondary-fixed/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-secondary text-3xl">account_balance</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-primary">Bar Council of Delhi Enrollment</span>
                    <span className="bg-secondary/20 text-secondary text-[10px] font-bold px-2 py-0.5 rounded">VERIFIED</span>
                  </div>
                  <div className="text-[11px] text-on-surface-variant">Enrollment No: D/8849/2014 • Advocate Rajesh Sharma</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
            </div>

            {/* Step 3: Digital Signature */}
            <div className="p-4 rounded-xl border border-outline-variant bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-outline text-3xl">draw</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-primary">Aadhaar eSign & DSC Certificate</span>
                    <span className="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded">READY</span>
                  </div>
                  <div className="text-[11px] text-on-surface-variant">Bind Class-3 Digital Signature Certificate for automated Vakalatnama signing.</div>
                </div>
              </div>
              <button
                onClick={() => alert('Aadhaar eSign certificate generated and paired with Cause Vault!')}
                className="px-4 py-2 bg-primary text-surface rounded-lg text-xs font-bold whitespace-nowrap shadow-sm hover:bg-primary-container transition-colors"
              >
                Pair eSign Certificate
              </button>
            </div>

          </div>

          <div className="pt-4 border-t border-outline-variant/40 flex flex-wrap gap-3">
            <Link
              href="/workspace"
              className="flex-1 py-3 bg-primary hover:bg-primary-container text-surface rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-sm text-tertiary-fixed">arrow_forward</span>
              <span>Proceed to Citizen Workspace</span>
            </Link>
            <Link
              href="/cause-vault"
              className="py-3 px-6 bg-surface-container hover:bg-surface-container-high text-primary rounded-xl text-xs font-bold text-center border border-outline-variant transition-all"
            >
              Access Cause Vault
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
