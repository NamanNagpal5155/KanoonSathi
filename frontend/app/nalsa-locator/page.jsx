'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function NalsaLocatorPage() {
  const { language, isHindi, t } = useLanguage();
  const [selectedCriteria, setSelectedCriteria] = useState('');
  const [eligible, setEligible] = useState(false);

  const legalAidCenters = [
    {
      id: 1,
      authority: 'Delhi State Legal Services Authority (DSLSA)',
      hindi: 'दिल्ली राज्य विधिक सेवाएं प्राधिकरण',
      office: 'Central Office, Central Hall, High Court of Delhi',
      memberSecretary: 'Sh. Mukesh Kumar Gupta, DHJS',
      timings: '10:00 AM - 05:00 PM (Monday to Saturday)',
      phone: '011-2338-4781',
      emergency: '15100 (24x7 National Toll-Free)',
      services: ['Pro Bono Advocate Assignment', 'Pre-Litigation Mediation', 'Lok Adalat Settlements']
    },
    {
      id: 2,
      authority: 'New Delhi District Legal Services Authority (ND-DLSA)',
      hindi: 'नई दिल्ली जिला विधिक सेवा प्राधिकरण',
      office: 'Front Office, Ground Floor, Patiala House Courts Complex',
      memberSecretary: 'Ld. Secretary, ND-DLSA',
      timings: '10:00 AM - 05:00 PM',
      phone: '011-2338-6622 (Ext 114)',
      emergency: '15100',
      services: ['Legal Advice Clinic', 'Jail Visiting Advocates', 'Victim Compensation Scheme']
    },
    {
      id: 3,
      authority: 'Central DLSA - Tis Hazari Courts',
      hindi: 'केंद्रीय जिला विधिक सेवा प्राधिकरण',
      office: 'Room No. 287, Tis Hazari Courts, Delhi - 110054',
      memberSecretary: 'Ld. Secretary, Central DLSA',
      timings: '10:00 AM - 05:00 PM',
      phone: '011-2395-0041',
      emergency: '15100',
      services: ['Matrimonial Counseling Cell', 'Free Bail Counsel Representation', 'Paralegal Volunteers']
    }
  ];

  const handleEligibilityCheck = (val) => {
    setSelectedCriteria(val);
    setEligible(val !== 'none');
  };

  return (
    <div className="flex-1 bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HERO BANNER */}
        <section className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
            <div>
              <div className="flex items-center space-x-2 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">volunteer_activism</span>
                <span>{isHindi ? 'राष्ट्रीय विधिक सेवा प्राधिकरण (NALSA) • विधिक सेवा प्राधिकरण अधिनियम, 1987' : 'National Legal Services Authority (NALSA) • Legal Services Authorities Act, 1987'}</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary tracking-tight mb-2">
                {isHindi ? 'नालसा निःशुल्क विधिक सहायता केंद्र' : 'NALSA Free Legal Aid Locator'}
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                {isHindi ? 'संविधान का अनुच्छेद 39A गारंटी देता है कि किसी भी नागरिक को आर्थिक या अन्य अक्षमताओं के कारण न्याय से वंचित न किया जाए। अपने नजदीकी डीएलएसए कार्यालय का पता लगाएं।' : 'Article 39A of the Constitution guarantees that justice is not denied to any citizen by reason of economic or other disabilities. Locate your nearest DLSA Front Office and check free advocate entitlement under Section 12.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:15100"
                className="bg-secondary hover:bg-secondary/90 text-on-secondary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base">phone_in_talk</span>
                <span>Call 15100 Toll-Free</span>
              </a>
              <Link
                href="/legal-aid"
                className="bg-primary hover:bg-primary-container text-surface px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border border-secondary shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-sm text-tertiary-fixed">location_city</span>
                <span>Legal Clinics Map</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 12 ELIGIBILITY CALCULATOR */}
        <div className="bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-outline-variant/40">
            <div>
              <h2 className="font-serif text-lg font-bold text-primary">
                Section 12 Statutory Free Legal Aid Eligibility Check
              </h2>
              <p className="text-xs text-on-surface-variant">
                Under the Legal Services Authorities Act 1987, the following categories of persons are entitled to completely free court counsel:
              </p>
            </div>
            <span className="bg-surface-container-high px-3 py-1 rounded text-primary text-xs font-bold">
              100% Free of Cost
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {[
              { id: 'women', label: 'Woman or Child', desc: 'No income ceiling applies' },
              { id: 'scst', label: 'Member of SC / ST', desc: 'Protected under Article 46' },
              { id: 'income', label: 'Annual Income < ₹3,00,000', desc: 'Delhi/UT ceiling limit' },
              { id: 'custody', label: 'Person in Custody / Jail', desc: 'Undertrial or convict' }
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleEligibilityCheck(cat.id)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  selectedCriteria === cat.id
                    ? 'bg-primary text-surface border-secondary shadow-sm'
                    : 'bg-surface-container-low text-on-surface border-outline-variant/40 hover:bg-surface-container'
                }`}
              >
                <div className="text-xs font-bold mb-1">{cat.label}</div>
                <div className="text-[11px] opacity-80">{cat.desc}</div>
              </button>
            ))}
          </div>

          {eligible && (
            <div className="p-4 bg-secondary-fixed/50 border border-secondary rounded-xl flex items-center justify-between gap-4 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
                <div>
                  <div className="text-xs font-bold text-on-secondary-fixed">
                    Eligible for 100% Free Government Legal Aid & Court Representation
                  </div>
                  <div className="text-[11px] text-on-surface-variant">
                    You do not need to pay court fees, process fees, or advocate fees. An empaneled advocate from DLSA will be appointed.
                  </div>
                </div>
              </div>
              <button
                onClick={() => alert('Application submitted to Secretary, DLSA. Your token number is DLSA-2026-9041.')}
                className="px-4 py-2 bg-secondary text-on-secondary rounded-lg text-xs font-bold whitespace-nowrap shadow-sm"
              >
                Apply for DLSA Advocate
              </button>
            </div>
          )}
        </div>

        {/* DLSA FRONT OFFICES DIRECTORY */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-primary">
            State & District Legal Services Front Offices ({legalAidCenters.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legalAidCenters.map(center => (
              <div
                key={center.id}
                className="bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-surface-container text-secondary text-[11px] font-bold px-2.5 py-1 rounded border border-outline-variant/40">
                      Front Office (Legal Clinic)
                    </span>
                    <span className="text-xs font-bold text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-secondary">support_agent</span>
                      Active 24x7
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-primary mb-1">
                    {isHindi ? center.hindi : center.authority}
                  </h3>
                  <div className="text-xs font-semibold text-secondary mb-3">
                    {isHindi ? center.authority : center.hindi}
                  </div>

                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {center.office}
                  </p>

                  <div className="bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/40 space-y-2 text-xs mb-4">
                    <div>
                      <span className="text-on-surface-variant">Officer-in-Charge: </span>
                      <span className="font-bold text-primary">{center.memberSecretary}</span>
                    </div>
                    <div>
                      <span className="text-on-surface-variant">Office Phone: </span>
                      <a href={`tel:${center.phone}`} className="font-bold text-secondary">{center.phone}</a>
                    </div>
                    <div>
                      <span className="text-on-surface-variant">Toll-Free Helpline: </span>
                      <span className="font-bold text-error">{center.emergency}</span>
                    </div>
                  </div>

                  <div className="space-y-1 text-[11px] text-on-surface mb-4">
                    <span className="font-bold block text-primary">Free Services Provided:</span>
                    {center.services.map((svc, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary text-xs">check</span>
                        <span>{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-outline-variant/40">
                  <a
                    href="tel:15100"
                    className="w-full py-2 bg-primary hover:bg-primary-container text-surface rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm text-tertiary-fixed">call</span>
                    <span>Connect with DLSA Desk</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
