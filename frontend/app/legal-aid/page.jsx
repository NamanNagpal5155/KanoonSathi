'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function LegalAidPage() {
  const { language, isHindi, t } = useLanguage();
  const [filterType, setFilterType] = useState('all');

  const clinics = [
    {
      id: 1,
      name: 'Delhi Bar Association Legal Aid Clinic',
      hindi: 'दिल्ली बार एसोसिएशन निःशुल्क विधिक सहायता केंद्र',
      type: 'general',
      typeLabel: 'General Litigation',
      address: 'Hall No. 2, Tis Hazari Court Complex, Delhi - 110054',
      timings: '02:00 PM - 05:00 PM (Daily)',
      paralegal: 'Adv. Suresh Narain (PLV Empaneled)',
      phone: '011-2395-8812',
      badge: 'Free Consultation'
    },
    {
      id: 2,
      name: 'Women & Child Legal Defense Clinic (One Stop Centre)',
      hindi: 'महिला एवं बाल विधिक संरक्षण केंद्र',
      type: 'women',
      typeLabel: 'Women & Domestic Violence',
      address: 'Deen Dayal Upadhyay Hospital Complex, Hari Nagar, New Delhi',
      timings: 'Open 24 Hours Emergency Desk',
      paralegal: 'Smt. Kavita Mehra (Counselor & Legal Advocate)',
      phone: '181 / 011-2512-0044',
      badge: '24x7 Emergency'
    },
    {
      id: 3,
      name: 'Labour & Industrial Workers Free Legal Cell',
      hindi: 'श्रमिक एवं कामगार विधिक सहायता प्रकोष्ठ',
      type: 'labour',
      typeLabel: 'Labour Rights & Wages',
      address: 'Pusa Road Industrial Area, Karampura, New Delhi - 110015',
      timings: '10:00 AM - 04:00 PM (Mon-Fri)',
      paralegal: 'Sh. Ram Avtar Verma (Trade Union Legal Advisor)',
      phone: '011-2541-9921',
      badge: 'Free Court Representation'
    },
    {
      id: 4,
      name: 'Senior Citizen Legal Redressal Clinic',
      hindi: 'वरिष्ठ नागरिक विधिक समाधान केंद्र',
      type: 'senior',
      typeLabel: 'Senior Citizens (Maintenance Act)',
      address: 'Near Sub-Divisional Magistrate Office, Vasant Vihar, New Delhi',
      timings: '11:00 AM - 03:00 PM (Mon-Sat)',
      paralegal: 'Adv. Meenakshi Sundaram',
      phone: '011-2615-3341',
      badge: 'Home Visit Available'
    }
  ];

  const filteredClinics = filterType === 'all'
    ? clinics
    : clinics.filter(c => c.type === filterType);

  return (
    <div className="flex-1 bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HERO BANNER */}
        <section className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
            <div>
              <div className="flex items-center space-x-2 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">health_and_safety</span>
                <span>{isHindi ? 'निःशुल्क सामुदायिक विधिक सहायता केंद्र' : 'Pro Bono Community Legal Aid Clinics'}</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary tracking-tight mb-2">
                {isHindi ? 'निःशुल्क कानूनी सहायता एवं परामर्शदाता' : 'Find Free Legal Help & Counsel'}
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                {isHindi ? 'राष्ट्रीय राजधानी क्षेत्र के पैरालीगल स्वयंसेवकों, लॉ स्कूल क्लिनिकों और अधिकृत विवाद समाधान केंद्रों से सीधे जुड़ें।' : 'Connect with community paralegals, pro bono law school clinics, and authorized dispute redressal centers across the National Capital Territory. No advocate consultation fees.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:15100"
                className="bg-secondary hover:bg-secondary/90 text-on-secondary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base">phone_in_talk</span>
                <span>{isHindi ? 'टेली-लॉ हेल्पलाइन: 15100' : 'Tele-Law Hotline: 15100'}</span>
              </a>
              <Link
                href="/nalsa-locator"
                className="bg-primary hover:bg-primary-container text-surface px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border border-secondary shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-sm text-tertiary-fixed">balance</span>
                <span>{isHindi ? 'नालसा सरकारी सहायता' : 'NALSA Government Aid'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CATEGORY SELECTOR */}
        <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All Free Clinics' },
              { id: 'women', label: 'Women & Domestic Violence' },
              { id: 'labour', label: 'Industrial & Wage Disputes' },
              { id: 'senior', label: 'Senior Citizens Welfare' },
              { id: 'general', label: 'General Litigation' }
            ].map(type => (
              <button
                key={type.id}
                onClick={() => setFilterType(type.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  filterType === type.id
                    ? 'bg-primary text-surface shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* CLINIC CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredClinics.map(clinic => (
            <div
              key={clinic.id}
              className="bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-surface-container text-secondary text-[11px] font-bold px-2.5 py-1 rounded border border-outline-variant/40">
                    {clinic.typeLabel}
                  </span>
                  <span className="bg-secondary/15 text-secondary px-2.5 py-0.5 rounded text-[11px] font-bold">
                    {clinic.badge}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-primary mb-1">
                  {clinic.name}
                </h3>
                <div className="text-xs font-semibold text-secondary mb-3">
                  {clinic.hindi}
                </div>

                <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                  {clinic.address}
                </p>

                <div className="bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/40 space-y-2 text-xs mb-4">
                  <div>
                    <span className="text-on-surface-variant">Attending Counsel / PLV: </span>
                    <span className="font-bold text-primary">{clinic.paralegal}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant">Clinic Timings: </span>
                    <span className="font-semibold text-primary">{clinic.timings}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant">Direct Desk Contact: </span>
                    <a href={`tel:${clinic.phone}`} className="font-bold text-secondary">{clinic.phone}</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/40">
                <a
                  href={`tel:${clinic.phone}`}
                  className="flex-1 py-2 bg-primary hover:bg-primary-container text-surface rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm text-tertiary-fixed">call</span>
                  <span>Call Legal Aid Desk</span>
                </a>
                <Link
                  href="/situation-analysis"
                  className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-primary rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm text-secondary">assignment</span>
                  <span>Triage First</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
