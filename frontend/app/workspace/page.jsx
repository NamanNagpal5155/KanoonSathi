'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function WorkspacePage() {
  const { language, isHindi, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [savedCourts, setSavedCourts] = useState([
    {
      id: 1,
      name: 'Patiala House District Courts Complex',
      hindiName: 'पटियाला हाउस जिला अदालत',
      jurisdiction: 'New Delhi District (South & New Delhi)',
      distance: '2.4 km from your geo-location',
      address: 'India Gate Circle, Purana Quila Road, New Delhi - 110001',
      activeCases: 2,
      nextHearing: 'Tomorrow • 10:30 AM (Court Room 14)',
      judge: 'Sh. Vikramajit Sen, DHJS (Commercial Court 02)',
      phone: '011-2338-6622',
      image: '/images/patiala_house_court.jpg'
    },
    {
      id: 2,
      name: 'High Court of Delhi',
      hindiName: 'दिल्ली उच्च न्यायालय',
      jurisdiction: 'Appellate & Original Jurisdiction, NCT of Delhi',
      distance: '3.8 km from your geo-location',
      address: 'Sher Shah Road, New Delhi - 110503',
      activeCases: 1,
      nextHearing: '18 Oct 2026 • 11:15 AM (Court 04)',
      judge: 'Hon\'ble Mr. Justice Manmohan & Justice Mini Pushkarna',
      phone: '011-2338-4101',
      image: '/images/delhi_high_court.jpg'
    },
    {
      id: 3,
      name: 'Tis Hazari District Courts Complex',
      hindiName: 'तीस हजारी जिला अदालत',
      jurisdiction: 'Central & West Districts',
      distance: '6.1 km from your geo-location',
      address: 'Mori Gate, Central Delhi - 110054',
      activeCases: 0,
      nextHearing: 'No active dockets scheduled',
      judge: 'Ld. Principal District & Sessions Judge',
      phone: '011-2395-0041',
      image: '/images/tis_hazari_court.jpg'
    }
  ]);

  return (
    <div className="flex-1 bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HERO COMMAND HEADER */}
        <section className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center space-x-1.5 bg-surface-container-highest px-3 py-1 rounded text-primary text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm text-secondary">security</span>
                  <span>DigiLocker Synced • Article 39A Protective Custody</span>
                </span>
                <span className="text-outline text-xs">•</span>
                <span className="text-xs text-on-surface-variant font-medium">Last Docket Sync: Today, 09:42 AM IST</span>
              </div>
              
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary tracking-tight mb-2">
                {t('workspaceGreeting')}
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                {t('workspaceSub')}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/find-court"
                className="bg-primary hover:bg-primary-container text-surface px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border border-secondary shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base text-tertiary-fixed">add_location_alt</span>
                <span>{t('bookmarkCourt')}</span>
              </Link>
              <Link
                href="/rti"
                className="bg-secondary hover:bg-secondary/90 text-on-secondary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base">edit_document</span>
                <span>{t('draftRti')}</span>
              </Link>
              <Link
                href="/cause-vault"
                className="bg-surface-container hover:bg-surface-container-high text-primary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border border-outline-variant transition-all"
              >
                <span className="material-symbols-outlined text-base text-secondary">folder</span>
                <span>{t('causeVault')}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* METRIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-on-surface-variant mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">{t('metricActions')}</span>
              <span className="material-symbols-outlined text-secondary">gavel</span>
            </div>
            <div className="font-serif text-3xl font-bold text-primary">03</div>
            <div className="text-[11px] text-secondary font-semibold mt-1">
              {isHindi ? '2 दीवानी वाद • 1 रिट याचिका' : '2 Civil Suits • 1 Writ Petition'}
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-on-surface-variant mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">{t('metricHearing')}</span>
              <span className="material-symbols-outlined text-secondary">calendar_clock</span>
            </div>
            <div className="font-serif text-2xl font-bold text-primary">
              {isHindi ? 'कल' : 'Tomorrow'}
            </div>
            <div className="text-[11px] text-error font-bold mt-1">
              {isHindi ? 'पूर्वाह्न 10:30 • पटियाला हाउस कोर्ट 14' : '10:30 AM • Patiala House Court 14'}
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-on-surface-variant mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">{t('metricSavedCourts')}</span>
              <span className="material-symbols-outlined text-secondary">account_balance</span>
            </div>
            <div className="font-serif text-3xl font-bold text-primary">03</div>
            <div className="text-[11px] text-tertiary-fixed-variant font-semibold mt-1">
              {isHindi ? 'NJDG सीधा अलर्ट सक्रिय' : 'NJDG Direct Push Enabled'}
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-on-surface-variant mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">{t('metricRti')}</span>
              <span className="material-symbols-outlined text-secondary">history_edu</span>
            </div>
            <div className="font-serif text-3xl font-bold text-primary">02</div>
            <div className="text-[11px] text-on-surface-variant font-semibold mt-1">
              {isHindi ? 'धारा 6(1) • पीआईओ उत्तर हेतु 14 दिन शेष' : 'Section 6(1) • 14 Days to PIO Reply'}
            </div>
          </div>
        </div>

        {/* SAVED COURTS DIRECTORY */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                {t('savedCourtsTitle')} ({savedCourts.length})
              </h2>
              <p className="text-xs text-on-surface-variant">
                {isHindi ? 'सुनवाई अलर्ट, वाद सूची और अधिवक्ता बार रूम हेतु सहेजे गए न्यायालय।' : 'Courts currently bookmarked for hearing alerts, cause lists, and advocate bar room coordinates.'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-primary text-surface'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {t('filterAll')}
              </button>
              <button
                onClick={() => setActiveTab('active')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'active'
                    ? 'bg-primary text-surface'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {t('filterActive')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {savedCourts.map((court) => (
              <div
                key={court.id}
                className="bg-surface-container-lowest border border-outline-variant/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Court Photograph Banner */}
                  <div className="relative h-36 w-full overflow-hidden bg-primary">
                    <img
                      src={court.image}
                      alt={court.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      {court.activeCases > 0 ? (
                        <span className="bg-secondary text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow">
                          {court.activeCases} Active Cases
                        </span>
                      ) : (
                        <span className="bg-primary/90 text-tertiary-fixed px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-secondary/40 backdrop-blur-md">
                          Monitored
                        </span>
                      )}
                      <span className="bg-black/60 text-white backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold">
                        {court.distance.split(' ')[0]} km
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-3 right-3 text-white">
                      <h3 className="font-serif font-bold text-sm leading-snug drop-shadow">
                        {court.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-xs font-semibold text-secondary mb-2">
                      {court.hindiName}
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                      {court.address}
                    </p>

                    <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant/40 space-y-2 mb-4 text-xs">
                      <div className="flex items-center gap-1.5 text-on-surface-variant font-medium">
                        <span className="material-symbols-outlined text-sm text-secondary">distance</span>
                        <span>{court.distance}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-primary font-semibold">
                        <span className="material-symbols-outlined text-sm text-secondary">event</span>
                        <span>{court.nextHearing}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-on-surface-variant text-[11px]">
                        <span className="material-symbols-outlined text-sm text-secondary">call</span>
                        <span>Registry: {court.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center gap-2 border-t border-outline-variant/40">
                  <Link
                    href="/find-court"
                    className="flex-1 text-center py-2 bg-primary hover:bg-primary-container text-surface rounded-lg text-xs font-bold transition-colors"
                  >
                    View Court Details
                  </Link>
                  <Link
                    href="/dossier"
                    className="px-3 py-2 bg-surface-container hover:bg-surface-container-high text-primary rounded-lg text-xs font-bold transition-colors"
                    title="View Linked Dossiers"
                  >
                    <span className="material-symbols-outlined text-base">folder_open</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACTIVE CASE DOCKETS TABLE */}
        <section className="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-outline-variant/60">
            <div>
              <h2 className="font-serif text-xl font-bold text-primary">
                Active Citizen Dockets & Proceedings
              </h2>
              <p className="text-xs text-on-surface-variant">
                Live case tracking synchronized with the National Judicial Data Grid (NJDG).
              </p>
            </div>
            <Link
              href="/dossier"
              className="text-xs text-secondary font-bold hover:underline flex items-center gap-1"
            >
              <span>Open Complete Case Brief</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-container text-on-surface-variant uppercase text-[10px] tracking-wider font-bold">
                <tr>
                  <th className="py-3 px-4 rounded-l-lg">Case CNR / Number</th>
                  <th className="py-3 px-4">Parties Involved</th>
                  <th className="py-3 px-4">Court Complex</th>
                  <th className="py-3 px-4">Stage of Proceeding</th>
                  <th className="py-3 px-4">Next Date</th>
                  <th className="py-3 px-4 text-right rounded-r-lg">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/40 text-on-surface">
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-primary">
                    DLND01-004821-2024<br />
                    <span className="text-[11px] text-on-surface-variant font-sans">CS (OS) 482/2024</span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold">
                    Sharma v. Goel & Ors.<br />
                    <span className="text-[11px] text-on-surface-variant font-normal">Civil Suit for Specific Performance</span>
                  </td>
                  <td className="py-3.5 px-4 text-on-surface-variant">
                    Patiala House Courts<br />
                    <span className="text-[11px]">Court Room 14</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-block bg-secondary/15 text-secondary px-2.5 py-1 rounded text-[11px] font-bold">
                      Cross-Examination of PW-1
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-error">
                    Tomorrow, 10:30 AM
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <Link href="/dossier" className="text-primary hover:text-secondary font-bold underline">
                      View Dossier
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-primary">
                    DLHC01-009182-2024<br />
                    <span className="text-[11px] text-on-surface-variant font-sans">W.P.(C) 918/2024</span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold">
                    Rajesh Sharma v. Govt of NCT Delhi<br />
                    <span className="text-[11px] text-on-surface-variant font-normal">RTI Non-Compliance Writ</span>
                  </td>
                  <td className="py-3.5 px-4 text-on-surface-variant">
                    High Court of Delhi<br />
                    <span className="text-[11px]">Court Room 04</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-block bg-tertiary-fixed-variant/20 text-tertiary-fixed-variant px-2.5 py-1 rounded text-[11px] font-bold">
                      Notice Issued to State
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-primary">
                    18 Oct 2026, 11:15 AM
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <Link href="/rti" className="text-primary hover:text-secondary font-bold underline">
                      View RTI Draft
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}
