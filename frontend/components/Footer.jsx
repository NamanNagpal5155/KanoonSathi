'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-surface border-t-2 border-secondary/40 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-primary-container text-tertiary-fixed border border-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">balance</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-surface tracking-wide">{t('brandName')}</h3>
                <p className="text-[10px] text-tertiary-fixed tracking-widest uppercase">{t('brandSub')} Sovereign Portal</p>
              </div>
            </div>
            <p className="text-xs text-on-primary-container leading-relaxed">
              {t('footerDesc')}
            </p>
            <div className="flex items-center space-x-2 text-xs text-tertiary-fixed font-semibold">
              <span className="material-symbols-outlined text-sm">support_agent</span>
              <span>24x7 Citizen Helpline: 15100</span>
            </div>
          </div>

          {/* Litigant Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-tertiary-fixed mb-4">
              {t('litigantTools')}
            </h4>
            <ul className="space-y-2 text-xs text-surface-dim">
              <li><Link href="/workspace" className="hover:text-surface transition-colors">{t('navWorkspace')}</Link></li>
              <li><Link href="/cause-vault" className="hover:text-surface transition-colors">{t('navVault')}</Link></li>
              <li><Link href="/find-court" className="hover:text-surface transition-colors">{t('navFindCourt')}</Link></li>
              <li><Link href="/court-process" className="hover:text-surface transition-colors">{t('navProcess')}</Link></li>
              <li><Link href="/dossier" className="hover:text-surface transition-colors">{t('navDossier')}</Link></li>
            </ul>
          </div>

          {/* Legal Aid & RTI */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-tertiary-fixed mb-4">
              {t('legalAidRti')}
            </h4>
            <ul className="space-y-2 text-xs text-surface-dim">
              <li><Link href="/nalsa-locator" className="hover:text-surface transition-colors">{t('navNalsa')}</Link></li>
              <li><Link href="/legal-aid" className="hover:text-surface transition-colors">{t('freeAidBtn')}</Link></li>
              <li><Link href="/rti" className="hover:text-surface transition-colors">{t('navRti')}</Link></li>
              <li><Link href="/situation-analysis" className="hover:text-surface transition-colors">{t('navTriage')}</Link></li>
              <li><Link href="/verify" className="hover:text-surface transition-colors">{t('navVerify')}</Link></li>
              <li><Link href="/mobile-suite" className="hover:text-surface transition-colors">Mobile Legal Suite</Link></li>
            </ul>
          </div>

          {/* Statutory Mandate */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-tertiary-fixed mb-4">
              {t('constitutionalMandate')}
            </h4>
            <div className="bg-primary-container p-4 rounded-xl border border-outline-variant/30 text-xs text-surface-dim space-y-2">
              <p className="italic leading-relaxed">
                {t('footerQuote')}
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-outline-variant/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-on-primary-container gap-4">
          <p>© 2026 {t('brandName')} • Department of Justice & NALSA Compliant Architecture.</p>
          <div className="flex space-x-6">
            <Link href="/verify" className="hover:text-surface transition-colors">Security & Privacy</Link>
            <Link href="/court-process" className="hover:text-surface transition-colors">Legal Terms</Link>
            <a href="tel:15100" className="hover:text-surface transition-colors text-tertiary-fixed font-bold">Helpline 15100</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
