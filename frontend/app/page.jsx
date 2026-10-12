'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function SovereignPortalPage() {
  const router = useRouter();
  const { language, t } = useLanguage();
  const [activeFlow, setActiveFlow] = useState('login'); // 'login', 'signup', 'otp', 'forgot'
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState('Sovereign@2025');
  const [notification, setNotification] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpValues, setOtpValues] = useState(['4', '8', '2', '9', '1', '7']);

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 4000);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    showToast(language === 'hi' ? 'राष्ट्रीय न्यायिक डेटा ग्रिड के साथ क्रेडेंशियल सत्यापित किए जा रहे हैं...' : 'Verifying credentials with National Judicial Data Grid...');
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(language === 'hi' ? 'प्रवेश स्वीकृत! नागरिक कार्यस्थल की ओर निर्देशित किया जा रहा है...' : 'Access Granted! Redirecting to Citizen Workspace...');
      setTimeout(() => {
        router.push('/workspace');
      }, 1000);
    }, 1200);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    showToast(language === 'hi' ? 'खाता बनाया गया! +91 9876543210 पर 6-अंकीय सत्यापन कोड भेजा गया।' : 'Account created! Dispatched 6-digit verification code to +91 9876543210.');
    setActiveFlow('otp');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    showToast(language === 'hi' ? 'पहचान सत्यापित! नागरिक कार्यस्थल में प्रवेश कर रहे हैं...' : 'Identity verified via Digilocker e-KYC. Entering Citizen Workspace...');
    setTimeout(() => {
      router.push('/workspace');
    }, 1200);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    showToast(language === 'hi' ? 'पासवर्ड रीसेट लिंक एसएमएस और ईमेल द्वारा प्रेषित किया गया।' : 'Password recovery link dispatched via SMS & Email.');
    setActiveFlow('otp');
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-surface relative">
      
      {/* FLOW CONTROLLER BAR */}
      <div className="bg-surface-container-high border-b border-outline-variant px-4 py-2.5 z-40 sticky top-0 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-serif font-bold text-sm text-primary">
              {language === 'hi' ? 'सार्वभौम प्रमाणीकरण कक्ष' : 'Sovereign Authentication Suite'}
            </span>
            <span className="text-xs text-on-surface-variant hidden md:inline">
              • {language === 'hi' ? 'प्रमाणीकरण स्थिति चुनें:' : 'Select authentication state:'}
            </span>
          </div>

          {/* State Tabs */}
          <div className="flex items-center bg-surface-container-lowest p-1 rounded-xl border border-outline-variant shadow-inner overflow-x-auto max-w-full">
            {[
              { id: 'login', icon: 'lock', label: t('tabLogin') },
              { id: 'signup', icon: 'person_add', label: t('tabSignup') },
              { id: 'otp', icon: 'verified_user', label: t('tabOtp') },
              { id: 'forgot', icon: 'lock_reset', label: t('tabForgot') }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFlow(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center space-x-1.5 whitespace-nowrap ${
                  activeFlow === tab.id
                    ? 'bg-primary text-surface shadow-sm'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[15px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <Link
              href="/workspace"
              className="text-xs bg-primary text-surface px-3 py-1.5 rounded-lg font-semibold flex items-center space-x-1 hover:bg-primary-container transition-colors"
            >
              <span>{language === 'hi' ? 'सीधे कार्यस्थल पर जाएं' : 'Skip to Workspace'}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="bg-primary text-surface px-5 py-3.5 rounded-xl shadow-2xl border border-secondary flex items-center space-x-3">
            <span className="material-symbols-outlined text-secondary text-xl">info</span>
            <span className="text-xs font-medium">{notification}</span>
          </div>
        </div>
      )}

      {/* MAIN CONTENT SPLIT VIEW */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* LEFT COLUMN: AUTHENTICATION FORMS */}
        <section className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-14 flex flex-col justify-between overflow-y-auto bg-surface">
          <div>
            
            {/* National Seal Banner */}
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-outline-variant">
              <div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center bg-surface-container-low text-secondary p-1">
                <span className="material-symbols-outlined text-[28px]">account_balance</span>
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-primary tracking-wide">
                  {t('brandName')} | {t('brandSub')}
                </div>
                <div className="text-[11px] text-secondary font-bold tracking-widest uppercase">
                  {language === 'hi' ? 'सर्वोच्च विधिक अधिकार एवं केस वॉल्ट • न्याय विभाग' : 'Supreme Law & Citizen Case Vault • Dept of Justice'}
                </div>
              </div>
            </div>

            {/* FLOW 1: LOGIN */}
            {activeFlow === 'login' && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-2">
                    {t('authTitle')}
                  </h1>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    {t('authSub')}
                  </p>
                </div>

                <form className="space-y-4 max-w-lg" onSubmit={handleLoginSubmit}>
                  <div>
                    <label className="block text-xs font-bold text-primary mb-1">
                      {t('loginIdentifier')}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                        <span className="material-symbols-outlined text-[18px]">badge</span>
                      </span>
                      <input
                        type="text"
                        defaultValue="rajesh.sharma@delhibar.org"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                        placeholder={t('loginIdentifierPlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-bold text-primary">{t('password')}</label>
                      <button
                        type="button"
                        onClick={() => setActiveFlow('forgot')}
                        className="text-[11px] text-secondary font-semibold hover:underline"
                      >
                        {t('forgotPassword')}
                      </button>
                    </div>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                        <span className="material-symbols-outlined text-[18px]">lock</span>
                      </span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        required
                        className="w-full pl-10 pr-10 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                        placeholder={t('password')}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-outline hover:text-primary"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {showPassword ? 'visibility_off' : 'visibility'}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded border-outline text-primary w-4 h-4" />
                      <span className="text-xs text-on-surface-variant">{t('rememberDevice')}</span>
                    </label>
                    <span className="text-[11px] text-secondary font-semibold flex items-center">
                      <span className="material-symbols-outlined text-[14px] mr-1">encrypted</span>
                      TLS 1.3 Privilege
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-container text-surface py-3 px-6 rounded-lg font-bold text-xs flex items-center justify-center space-x-2 border border-secondary shadow-sm transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                      {isSubmitting ? 'hourglass_top' : 'verified_user'}
                    </span>
                    <span>{isSubmitting ? t('verifyingBtn') : t('loginBtn')}</span>
                  </button>

                  <div className="relative my-4 text-center">
                    <div className="border-t border-outline-variant absolute inset-x-0 top-1/2"></div>
                    <span className="relative bg-surface px-3 text-[11px] text-on-surface-variant">
                      {language === 'hi' ? 'या प्रमाणित पहचान से लॉगिन करें' : 'or authenticate via verified identity'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/verify"
                      className="border border-outline-variant hover:border-primary p-2.5 rounded-lg flex items-center justify-center space-x-2 text-xs font-semibold text-primary bg-surface-container-lowest hover:bg-surface-container transition-all"
                    >
                      <span className="material-symbols-outlined text-sm text-secondary">fingerprint</span>
                      <span>{t('digilockerKyc')}</span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => setActiveFlow('otp')}
                      className="border border-outline-variant hover:border-primary p-2.5 rounded-lg flex items-center justify-center space-x-2 text-xs font-semibold text-primary bg-surface-container-lowest hover:bg-surface-container transition-all"
                    >
                      <span className="material-symbols-outlined text-sm text-secondary">sms</span>
                      <span>{t('aadhaarOtp')}</span>
                    </button>
                  </div>

                  <div className="pt-2 text-center text-xs text-on-surface-variant">
                    {t('noAccount')}{' '}
                    <button
                      type="button"
                      onClick={() => setActiveFlow('signup')}
                      className="text-secondary font-bold hover:underline"
                    >
                      {t('signUpHere')}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* FLOW 2: SIGN UP */}
            {activeFlow === 'signup' && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-2">
                    {language === 'hi' ? 'नया नागरिक खाता बनाएं' : 'Create your KanoonSaathi account'}
                  </h1>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    {language === 'hi' ? 'अपने कानूनी नोटिस, आरटीआई मसौदे और न्यायालय के मामलों को एक सुरक्षित तिजोरी में सुरक्षित रखें।' : 'Save your legal notices, RTI drafts, case timelines, and court bookmarks in one secure civic vault.'}
                  </p>
                </div>

                <form className="space-y-4 max-w-lg" onSubmit={handleSignupSubmit}>
                  <div>
                    <label className="block text-xs font-bold text-primary mb-1">
                      {language === 'hi' ? 'पूरा कानूनी नाम (आधार के अनुसार)' : 'Full Legal Name (as on Aadhaar / PAN)'}
                    </label>
                    <input
                      type="text"
                      defaultValue="Advocate Rajesh Sharma"
                      required
                      className="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs text-on-surface focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-primary mb-1">{language === 'hi' ? 'ईमेल पता' : 'Email Address'}</label>
                      <input
                        type="email"
                        defaultValue="rajesh.sharma@delhibar.org"
                        required
                        className="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs text-on-surface focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-primary mb-1">{language === 'hi' ? '10-अंकीय मोबाइल नंबर' : '10-Digit Mobile Number'}</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 bg-surface-container border border-r-0 border-outline-variant rounded-l-lg text-xs font-bold text-on-surface-variant">
                          +91
                        </span>
                        <input
                          type="tel"
                          defaultValue="9876543210"
                          maxLength={10}
                          required
                          className="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-r-lg text-xs text-on-surface focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-primary mb-1">{language === 'hi' ? 'न्याय प्रणाली में भूमिका' : 'Role in Justice System'}</label>
                    <select className="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs text-on-surface font-semibold focus:outline-none focus:border-primary">
                      <option>{language === 'hi' ? 'नागरिक / विधिक सहायता की खोज में वादी' : 'Litigant / Citizen seeking legal help'}</option>
                      <option>{language === 'hi' ? 'नालसा पैनल में अधिवक्ता' : 'Empaneled Legal Aid Advocate (DLSA/SLSA)'}</option>
                      <option>{language === 'hi' ? 'पैरा-लीगल स्वयंसेवक (PLV)' : 'Para-Legal Volunteer (PLV) / Community Worker'}</option>
                      <option>{language === 'hi' ? 'विधि छात्र / विधिक क्लिनिक' : 'Law Student / Pro Bono Legal Clinic'}</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-container text-surface py-3 px-6 rounded-lg font-bold text-xs flex items-center justify-center space-x-2 border border-secondary shadow-sm transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">person_add</span>
                    <span>{language === 'hi' ? 'नागरिक क्रेडेंशियल बनाएं' : 'Generate Sovereign Citizen Credentials'}</span>
                  </button>

                  <div className="text-center text-xs text-on-surface-variant">
                    {t('alreadyRegistered')}{' '}
                    <button
                      type="button"
                      onClick={() => setActiveFlow('login')}
                      className="text-secondary font-bold hover:underline"
                    >
                      {t('loginToVault')}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* FLOW 3: OTP VERIFICATION */}
            {activeFlow === 'otp' && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-2">
                    {language === 'hi' ? 'द्वि-चरणीय सुरक्षा सत्यापन' : 'Two-Factor Sovereign Verification'}
                  </h1>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    {language === 'hi' ? 'मोबाइल नंबर ••••••3210 पर प्रेषित 6-अंकीय ओटीपी पिन दर्ज करें।' : 'Enter the 6-digit cryptographic security code sent to mobile number ending in ••••••3210.'}
                  </p>
                </div>

                <form className="space-y-6 max-w-lg" onSubmit={handleOtpSubmit}>
                  <div>
                    <label className="block text-xs font-bold text-primary mb-2">
                      {language === 'hi' ? '6-अंकीय सुरक्षा पिन' : '6-Digit Security PIN'}
                    </label>
                    <div className="flex gap-2 justify-between">
                      {otpValues.map((digit, idx) => (
                        <input
                          key={idx}
                          id={`otp-input-${idx}`}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(idx, e.target.value)}
                          className="w-12 h-14 text-center text-lg font-bold bg-surface-container-lowest border-2 border-outline-variant focus:border-primary rounded-lg text-primary focus:outline-none shadow-sm"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-surface-container rounded-lg border border-outline-variant/40 flex items-center justify-between text-xs">
                    <span className="text-on-surface-variant">{language === 'hi' ? 'कोड की वैधता: 04:32' : 'Code expires in 04:32'}</span>
                    <button
                      type="button"
                      onClick={() => showToast(language === 'hi' ? 'नया ओटीपी कोड भेजा गया।' : 'New OTP dispatched via SMS.')}
                      className="text-secondary font-bold hover:underline"
                    >
                      {language === 'hi' ? 'पुनः कोड भेजें' : 'Resend Code'}
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-container text-surface py-3 px-6 rounded-lg font-bold text-xs flex items-center justify-center space-x-2 border border-secondary shadow-sm transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">verified</span>
                    <span>{language === 'hi' ? 'पहचान सत्यापित करें एवं कार्यस्थल में प्रवेश करें' : 'Verify Identity & Enter Workspace'}</span>
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setActiveFlow('login')}
                      className="text-xs text-on-surface-variant hover:text-primary underline"
                    >
                      ← {language === 'hi' ? 'लॉगिन पृष्ठ पर वापस' : 'Back to Login'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* FLOW 4: RESET PASSWORD */}
            {activeFlow === 'forgot' && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-2">
                    {language === 'hi' ? 'सुरक्षा पासवर्ड रीसेट करें' : 'Reset Security Credential'}
                  </h1>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    {language === 'hi' ? 'पासवर्ड रीसेट लिंक प्राप्त करने के लिए अपना पंजीकृत पहचानकर्ता दर्ज करें।' : 'Enter your registered email address or Aadhaar-linked mobile number to receive a cryptographic password reset token.'}
                  </p>
                </div>

                <form className="space-y-4 max-w-lg" onSubmit={handleForgotSubmit}>
                  <div>
                    <label className="block text-xs font-bold text-primary mb-1">
                      {t('loginIdentifier')}
                    </label>
                    <input
                      type="text"
                      defaultValue="rajesh.sharma@delhibar.org"
                      required
                      className="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs text-on-surface focus:outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-container text-surface py-3 px-6 rounded-lg font-bold text-xs flex items-center justify-center space-x-2 border border-secondary shadow-sm transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">send</span>
                    <span>{language === 'hi' ? 'रीसेट लिंक भेजें' : 'Send Verification Reset Link'}</span>
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setActiveFlow('login')}
                      className="text-xs text-secondary font-bold hover:underline"
                    >
                      ← {language === 'hi' ? 'लॉगिन स्क्रीन पर वापस' : 'Back to Login Screen'}
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>

          {/* Quick Platform Exploration Links */}
          <div className="mt-8 pt-6 border-t border-outline-variant/40">
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
              {language === 'hi' ? 'सीधे नागरिक उपकरण' : 'Direct Citizen Access'}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link href="/workspace" className="p-2 bg-surface-container-lowest rounded-lg border border-outline-variant text-xs font-semibold text-primary hover:bg-surface-container transition-all flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-secondary">dashboard</span>
                <span>{t('navWorkspace')}</span>
              </Link>
              <Link href="/find-court" className="p-2 bg-surface-container-lowest rounded-lg border border-outline-variant text-xs font-semibold text-primary hover:bg-surface-container transition-all flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-secondary">location_on</span>
                <span>{t('navFindCourt')}</span>
              </Link>
              <Link href="/rti" className="p-2 bg-surface-container-lowest rounded-lg border border-outline-variant text-xs font-semibold text-primary hover:bg-surface-container transition-all flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-secondary">edit_document</span>
                <span>{t('navRti')}</span>
              </Link>
              <Link href="/court-process" className="p-2 bg-surface-container-lowest rounded-lg border border-outline-variant text-xs font-semibold text-primary hover:bg-surface-container transition-all flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-secondary">account_tree</span>
                <span>{t('navProcess')}</span>
              </Link>
              <Link href="/nalsa-locator" className="p-2 bg-surface-container-lowest rounded-lg border border-outline-variant text-xs font-semibold text-primary hover:bg-surface-container transition-all flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-secondary">balance</span>
                <span>{t('navNalsa')}</span>
              </Link>
              <Link href="/cause-vault" className="p-2 bg-surface-container-lowest rounded-lg border border-outline-variant text-xs font-semibold text-primary hover:bg-surface-container transition-all flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-secondary">folder_managed</span>
                <span>{t('navVault')}</span>
              </Link>
            </div>
          </div>

        </section>

        {/* RIGHT COLUMN: SOVEREIGN CONSTITUTIONAL EDITORIAL CANVAS */}
        <section className="w-full lg:w-1/2 bg-primary p-8 sm:p-12 lg:p-16 text-surface relative flex flex-col justify-between overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/80 via-primary to-[#010917] pointer-events-none"></div>

          <div className="relative z-10 flex items-center justify-between border-b border-tertiary-fixed-dim/20 pb-4">
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-tertiary-fixed text-lg">assured_workload</span>
              <span className="text-xs font-bold text-tertiary-fixed tracking-wider uppercase">
                {language === 'hi' ? 'संवैधानिक न्याय अवसंरचना' : 'Sovereign Jurisprudence Infrastructure'}
              </span>
            </div>
            <span className="bg-surface/10 px-2.5 py-1 rounded text-[11px] font-mono border border-surface/20 text-surface">
              BNS / IPC 2026
            </span>
          </div>

          <div className="relative z-10 my-auto py-8">
            <div className="p-8 rounded-2xl bg-primary-container/70 backdrop-blur-md border border-secondary/40 shadow-2xl">
              <div className="flex items-center space-x-2 text-tertiary-fixed mb-3">
                <span className="material-symbols-outlined text-2xl">format_quote</span>
                <span className="text-xs font-bold tracking-wider uppercase">
                  {language === 'hi' ? 'भारत का संविधान • अनुच्छेद 39A' : 'Constitution of India • Article 39A'}
                </span>
              </div>
              <blockquote className="font-serif text-xl sm:text-2xl text-surface leading-snug mb-4 italic">
                {t('articleQuote')}
              </blockquote>
              <p className="text-xs sm:text-sm text-surface-variant font-light leading-relaxed mb-6">
                {t('quoteSub')}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-outline-variant/30 text-xs">
                <span className="inline-flex items-center text-tertiary-fixed font-semibold">
                  <span className="material-symbols-outlined text-base mr-1.5">verified</span>
                  {language === 'hi' ? 'बार काउंसिल प्रमाणित' : 'Bar Council Compliant'}
                </span>
                <span className="inline-flex items-center text-surface-variant">
                  <span className="material-symbols-outlined text-base mr-1.5">lock_clock</span>
                  {language === 'hi' ? '256-बिट सुरक्षित वॉल्ट' : '256-Bit Cryptographic Vault'}
                </span>
                <span className="inline-flex items-center text-surface-variant">
                  <span className="material-symbols-outlined text-base mr-1.5">dialpad</span>
                  {language === 'hi' ? 'टेली-लॉ 15100 सीधा लिंक' : 'Tele-Law 15100 Direct Link'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-surface/5 p-4 rounded-xl border border-surface/10 text-center">
                <div className="font-serif text-xl font-bold text-tertiary-fixed">18,240+</div>
                <div className="text-[10px] text-surface-variant mt-1 uppercase tracking-wider">{t('statLitigants')}</div>
              </div>
              <div className="bg-surface/5 p-4 rounded-xl border border-surface/10 text-center">
                <div className="font-serif text-xl font-bold text-tertiary-fixed">940+</div>
                <div className="text-[10px] text-surface-variant mt-1 uppercase tracking-wider">{t('statCourts')}</div>
              </div>
              <div className="bg-surface/5 p-4 rounded-xl border border-surface/10 text-center">
                <div className="font-serif text-xl font-bold text-tertiary-fixed">100%</div>
                <div className="text-[10px] text-surface-variant mt-1 uppercase tracking-wider">{t('statFreeAccess')}</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-surface-variant border-t border-surface/10 pt-4">
            <span>{t('brandName')} | {language === 'hi' ? 'हर भारतीय के लिए न्याय' : 'Justice For Every Citizen'}</span>
            <Link href="/workspace" className="flex items-center space-x-1 text-tertiary-fixed hover:underline font-semibold">
              <span>{language === 'hi' ? 'नागरिक कार्यस्थल में प्रवेश करें' : 'Enter Workspace Dashboard'}</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </Link>
          </div>

        </section>

      </div>
    </div>
  );
}
