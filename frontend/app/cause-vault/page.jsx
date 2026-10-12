'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function CauseVaultPage() {
  const { language, isHindi, t } = useLanguage();
  const [filterCategory, setFilterCategory] = useState('all');

  const files = [
    {
      id: 1,
      name: 'Plaint & Statement of Truth - CS (OS) 482/2024.pdf',
      category: 'pleadings',
      caseNo: 'CS (OS) 482/2024 (Sharma v. Goel)',
      court: 'Patiala House District Courts Complex',
      date: '12 Sep 2026',
      size: '2.4 MB',
      hash: 'SHA256: 8f2a3d...cabe9',
      status: 'Certified Copy'
    },
    {
      id: 2,
      name: 'Registered Vakalatnama & Bar Endorsement.pdf',
      category: 'vakalatnama',
      caseNo: 'CS (OS) 482/2024 (Sharma v. Goel)',
      court: 'Patiala House District Courts Complex',
      date: '14 Sep 2026',
      size: '840 KB',
      hash: 'SHA256: 19bc01...88ef1',
      status: 'e-Signed'
    },
    {
      id: 3,
      name: 'Judicial Order Sheet - Injunction Hearing.pdf',
      category: 'orders',
      caseNo: 'CS (OS) 482/2024 (Sharma v. Goel)',
      court: 'Court Room 14, PHC New Delhi',
      date: '28 Sep 2026',
      size: '1.1 MB',
      hash: 'SHA256: 4fa992...331ac',
      status: 'Certified Order'
    },
    {
      id: 4,
      name: 'Statutory Notice under Section 80 CPC.pdf',
      category: 'notices',
      caseNo: 'Pre-Litigation Record',
      court: 'Registry of Delhi Development Authority',
      date: '02 Aug 2026',
      size: '620 KB',
      hash: 'SHA256: ee8192...992cb',
      status: 'RPAD Delivered'
    },
    {
      id: 5,
      name: 'RTI Section 6(1) Application & Fee Receipt.pdf',
      category: 'rti',
      caseNo: 'RTI/MCD/2026/081',
      court: 'Public Information Officer, MCD South',
      date: '15 Aug 2026',
      size: '410 KB',
      hash: 'SHA256: 77a019...120dc',
      status: 'Under Review'
    }
  ];

  const filteredFiles = filterCategory === 'all'
    ? files
    : files.filter(f => f.category === filterCategory);

  return (
    <div className="flex-1 bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HERO BANNER */}
        <section className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
            <div>
              <div className="flex items-center space-x-2 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span>{isHindi ? '256-बिट क्रिप्टोग्राफिक वाद लॉकर • डिजिलॉकर एकीकृत' : '256-Bit Cryptographic Case Locker • DigiLocker Integrated'}</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary tracking-tight mb-2">
                {isHindi ? 'कॉज़ वॉल्ट (कारण संचय)' : 'Cause Vault (कारण संचय)'}
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                {isHindi ? 'समन, हलफनामे, वकालतनामा, आदेश पत्र और साक्ष्य प्रलेखों के प्रमाणीकरण और सुरक्षित संग्रहण हेतु नागरिक भंडार।' : 'Secure citizen repository for authenticating and archiving court summons, affidavits, vakalatnamas, certified order sheets, and evidentiary exhibits under Article 39A.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/workspace"
                className="bg-primary hover:bg-primary-container text-surface px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border border-secondary shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-sm text-tertiary-fixed">dashboard</span>
                <span>{isHindi ? 'नागरिक कार्यस्थल' : 'Citizen Workspace'}</span>
              </Link>
              <Link
                href="/dossier"
                className="bg-secondary hover:bg-secondary/90 text-on-secondary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-sm">folder_open</span>
                <span>{isHindi ? 'शर्मा बनाम गोयल डोजियर' : 'Sharma v. Goel Dossier'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* VAULT SECURITY STATUS STRIP */}
        <div className="bg-primary text-surface p-4 rounded-xl border border-secondary/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs">
            <div className="w-8 h-8 rounded-full bg-secondary/30 text-tertiary-fixed flex items-center justify-center border border-secondary">
              <span className="material-symbols-outlined text-base">verified_user</span>
            </div>
            <div>
              <div className="font-bold text-tertiary-fixed">Vault Custody: Adv. Rajesh Sharma (Bar Council ID: DL-8849)</div>
              <div className="text-[11px] text-surface-dim">All records cryptographically signed with SHA-256 digital seals.</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="bg-surface/10 px-3 py-1 rounded text-tertiary-fixed font-mono border border-surface/20">
              Storage: 4.8 MB / 100 GB
            </span>
          </div>
        </div>

        {/* CONTROLS & FILTER */}
        <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
              {[
                { id: 'all', label: 'All Documents (5)' },
                { id: 'pleadings', label: 'Pleadings & Plaints' },
                { id: 'vakalatnama', label: 'Vakalatnamas' },
                { id: 'orders', label: 'Order Sheets' },
                { id: 'notices', label: 'Statutory Notices' },
                { id: 'rti', label: 'RTI Applications' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    filterCategory === cat.id
                      ? 'bg-primary text-surface shadow-sm'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => alert('Uploading legal record with SHA-256 timestamp encryption...')}
              className="w-full sm:w-auto px-4 py-2 bg-secondary text-on-secondary rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">upload_file</span>
              <span>Upload Certified Record</span>
            </button>

          </div>
        </div>

        {/* VAULT RECORDS TABLE */}
        <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-6 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-container text-on-surface-variant uppercase text-[10px] tracking-wider font-bold">
                <tr>
                  <th className="py-3 px-4 rounded-l-lg">Document Name</th>
                  <th className="py-3 px-4">Associated Cause / Case</th>
                  <th className="py-3 px-4">Court / Authority</th>
                  <th className="py-3 px-4">Archived Date</th>
                  <th className="py-3 px-4">Integrity Status</th>
                  <th className="py-3 px-4 text-right rounded-r-lg">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/40 text-on-surface">
                {filteredFiles.map(file => (
                  <tr key={file.id} className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <span className="material-symbols-outlined text-secondary text-2xl">picture_as_pdf</span>
                        <div>
                          <div className="font-bold text-primary">{file.name}</div>
                          <div className="text-[11px] text-on-surface-variant font-mono">{file.hash} • {file.size}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold text-primary">
                      {file.caseNo}
                    </td>
                    <td className="py-4 px-4 text-on-surface-variant">
                      {file.court}
                    </td>
                    <td className="py-4 px-4 font-medium">
                      {file.date}
                    </td>
                    <td className="py-4 px-4">
                      <span className="bg-secondary/15 text-secondary px-2.5 py-1 rounded-full text-[11px] font-bold">
                        {file.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right space-x-3">
                      <Link href="/dossier" className="text-primary hover:text-secondary font-bold underline">
                        View
                      </Link>
                      <button onClick={() => alert(`Downloading verified copy of ${file.name}`)} className="text-secondary hover:underline font-bold">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
