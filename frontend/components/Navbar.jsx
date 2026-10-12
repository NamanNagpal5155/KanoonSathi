'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: '/', label: t('navPortal') },
    { href: '/workspace', label: t('navWorkspace') },
    { href: '/cause-vault', label: t('navVault') },
    { href: '/find-court', label: t('navFindCourt') },
    { href: '/court-process', label: t('navProcess') },
    { href: '/situation-analysis', label: t('navTriage') },
    { href: '/dossier', label: t('navDossier') },
    { href: '/rti', label: t('navRti') },
    { href: '/nalsa-locator', label: t('navNalsa') },
    { href: '/verify', label: t('navVerify') }
  ];

  return (
    <header className="bg-surface dark:bg-primary border-b border-outline-variant sticky top-0 z-50 shadow-sm">
      {/* Sovereign Top Notification Strip */}
      <div className="bg-primary text-surface-bright py-1 px-4 border-b border-outline-variant/20 flex justify-between items-center text-xs">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-semibold text-[11px] tracking-wider text-surface">
            {t('topStrip')}
          </span>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <span className="text-tertiary-fixed font-medium text-[11px]">{t('nalsa247')}</span>
          <a
            className="hover:text-secondary-fixed transition-colors font-bold text-secondary-fixed flex items-center gap-1 text-[11px]"
            href="tel:15100"
          >
            <span className="material-symbols-outlined text-sm">phone_in_talk</span>
            {t('teleLaw')}
          </a>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Platform Name */}
          <Link href="/" className="flex items-center space-x-3 text-decoration-none group">
            <div className="w-10 h-10 rounded-full bg-primary-container text-surface flex items-center justify-center border border-secondary shadow-sm group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">balance</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-serif font-bold text-lg text-primary tracking-tight">{t('brandName')}</span>
                <span className="text-xs font-semibold text-secondary uppercase tracking-widest hidden sm:inline">{t('brandSub')}</span>
              </div>
              <span className="text-[10px] text-on-surface-variant font-medium">{t('tagline')}</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-primary text-surface shadow-sm font-bold'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons with Language Selector */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Interactive Bilingual Selector Button */}
            <button
              onClick={toggleLanguage}
              className="bg-surface-container-high hover:bg-surface-container-highest border border-secondary/50 hover:border-secondary text-primary px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-sm transition-all group"
              title="Switch language between English and Hindi / भाषा बदलें"
            >
              <span className="material-symbols-outlined text-[17px] text-secondary group-hover:rotate-45 transition-transform duration-300">language</span>
              <span className="text-primary font-bold">
                {language === 'en' ? 'हिन्दी' : 'English'}
              </span>
              <span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover:translate-x-0.5 transition-transform">swap_horiz</span>
            </button>

            <Link
              href="/legal-aid"
              className="hidden sm:flex bg-secondary hover:bg-secondary/90 text-on-secondary px-3 py-1.5 rounded-lg text-xs font-semibold items-center space-x-1.5 shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[15px]">volunteer_activism</span>
              <span>{t('freeAidBtn')}</span>
            </Link>

            <Link
              href="/verify"
              className="hidden sm:flex border border-outline-variant hover:border-primary text-primary px-3 py-1.5 rounded-lg text-xs font-semibold items-center space-x-1 transition-all"
            >
              <span className="material-symbols-outlined text-[15px]">verified_user</span>
              <span>{t('eKycBtn')}</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container"
                aria-label="Toggle Navigation Menu"
              >
                <span className="material-symbols-outlined text-2xl">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container border-t border-outline-variant px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between p-2.5 bg-surface-container-lowest rounded-xl border border-outline-variant/60">
            <span className="text-xs font-bold text-primary flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-secondary">language</span>
              <span>भाषा / Language</span>
              <span className="material-symbols-outlined text-sm text-outline">swap_horiz</span>
            </span>
            <div className="flex gap-1.5">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-xs font-bold flex items-center gap-1 ${
                  language === 'en' ? 'bg-primary text-surface' : 'bg-surface-container text-on-surface-variant'
                }`}
              >
                <span>English</span>
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-3 py-1 rounded text-xs font-bold flex items-center gap-1 ${
                  language === 'hi' ? 'bg-primary text-surface' : 'bg-surface-container text-on-surface-variant'
                }`}
              >
                <span>हिन्दी</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center space-x-2 ${
                    isActive
                      ? 'bg-primary text-surface font-bold'
                      : 'text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-outline-variant flex gap-2">
            <Link
              href="/legal-aid"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 bg-secondary text-on-secondary py-2 rounded-lg text-xs font-semibold text-center"
            >
              {t('freeAidBtn')}
            </Link>
            <a
              href="tel:15100"
              className="px-3 py-2 bg-primary text-surface rounded-lg text-xs font-bold flex items-center justify-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              15100
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
