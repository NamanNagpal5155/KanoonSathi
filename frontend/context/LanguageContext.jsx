'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Top strip & Brand
    topStrip: 'RIGHT TO JUSTICE FOR EVERY CITIZEN • ARTICLE 39A CONSTITUTION OF INDIA',
    nalsa247: 'NALSA e-Service 24x7',
    teleLaw: 'Tele-Law: 15100',
    brandName: 'कानूनसाथी',
    brandSub: 'KanoonSaathi',
    tagline: 'Sovereign Citizen Legal Aid Platform',
    freeAidBtn: 'Free Aid',
    eKycBtn: 'e-KYC',
    changeLang: 'हिन्दी',

    // Nav Links
    navPortal: 'Sovereign Portal',
    navWorkspace: 'Workspace',
    navVault: 'Cause Vault',
    navFindCourt: 'Find a Court',
    navProcess: 'Court Process',
    navTriage: 'Legal Triage',
    navDossier: 'Case Dossier',
    navRti: 'RTI Crafter',
    navNalsa: 'NALSA Aid',
    navVerify: 'Citizen Verify',

    // Portal / Auth
    authTitle: 'Welcome back to KanoonSaathi',
    authSub: 'Continue your journey toward understanding your legal rights and managing your case vault. Encrypted and certified under Article 39A.',
    tabLogin: '1. Login Flow',
    tabSignup: '2. Citizen Sign Up',
    tabOtp: '3. OTP Verification',
    tabForgot: '4. Reset Password',
    loginIdentifier: 'Email or 10-Digit Mobile Number',
    loginIdentifierPlaceholder: 'e.g. advocate.verma@nic.in or 9876543210',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    rememberDevice: 'Remember device for 30 days',
    loginBtn: 'Login to Sovereign Vault',
    verifyingBtn: 'Verifying with Sovereign Vault...',
    digilockerKyc: 'Digilocker e-KYC',
    aadhaarOtp: 'Aadhaar OTP',
    noAccount: "Don't have a verified citizen account?",
    signUpHere: 'Sign Up Here',
    alreadyRegistered: 'Already registered?',
    loginToVault: 'Login to Vault',

    // Quote & Stats
    articleQuote: '“Understanding your rights under Article 39A is the first step toward protecting them.”',
    quoteSub: 'KanoonSaathi guarantees equal justice and free legal aid for every citizen through automated notices, RTI generation, and direct DLSA advocate connectivity.',
    statLitigants: 'Litigants Aided',
    statCourts: 'Courts Mapped',
    statFreeAccess: 'Free Access',

    // Find Court
    findCourtTitle: 'Find a Court Near You',
    findCourtSub: 'Explore judicial complexes across the National Capital Territory with real-time GPS proximity, verified photographs, sitting benches, e-filing counters, and direct route navigation.',
    searchPlaceholder: 'Search by court name, district, pin code, or jurisdiction...',
    allJurisdictions: 'All Jurisdictions',
    apexCourt: 'Apex Court',
    highCourts: 'High Courts',
    districtCourts: 'District Courts',
    tribunals: 'Tribunals',
    searchRadius: 'Search Proximity Radius:',
    within: 'within',
    splitView: 'Map + List',
    fullMapView: 'Full Map',
    galleryView: 'Gallery',
    navigate: 'Get Directions via Google Maps',
    benchesCount: 'Benches / Halls',
    efiling: 'e-Filing Counter',
    jurisdiction: 'Jurisdiction',
    sittingHours: 'Sitting Hours',
    registryPhone: 'Registry Phone',
    satelliteView: '🛰️ Satellite View',
    vectorView: '🗺️ Vector Map',
    activeCasesLabel: 'Active Cases',
    monitoredLabel: 'Monitored',

    // Workspace
    workspaceGreeting: 'सुप्रभात, Adv. Rajesh Sharma',
    workspaceSub: 'Central repository for your personal litigation proceedings, statutory notices under RPAD dispatch, and saved judicial court complexes across the National Capital Territory.',
    bookmarkCourt: 'Bookmark New Court',
    draftRti: 'Draft RTI Petition',
    causeVault: 'Cause Vault',
    savedCourtsTitle: 'Your Saved Judicial Complexes',
    activeDocketsTitle: 'Active Citizen Dockets & Proceedings',
    metricActions: 'Active Legal Actions',
    metricHearing: 'Next Court Hearing',
    metricSavedCourts: 'Saved Court Complexes',
    metricRti: 'RTI Filings Active',
    filterAll: 'All Complexes',
    filterActive: 'With Active Hearings',
    viewCourtDetails: 'View Court Details',

    // Court Process
    processTitle: 'Step-by-Step Judicial Procedures',
    processSub: 'Interactive roadmap through India’s civil dispute trials and criminal justice mechanisms under the Civil Procedure Code (CPC) and Bharatiya Nagarik Suraksha Sanhita (BNSS).',
    civilTrack: 'Civil Litigation Track (CPC 1908)',
    criminalTrack: 'Criminal Proceedings Track (BNSS 2023)',
    stageTimeline: 'Timeline',
    statutorySection: 'Governing Provision',
    requiredDocs: 'Mandatory Filings & Documents',

    // Situation Analysis / Triage
    triageTitle: 'Legal Situation Analysis & Triage',
    triageSub: 'AI-guided constitutional triage mapping your grievance to relevant sections of the Bharatiya Nyaya Sanhita (BNS), limitation periods, and the appropriate court of first instance.',
    disputeCategory: 'Dispute Category',
    describeGrievance: 'Describe your facts and grievance in detail:',
    urgencyLevel: 'Severity & Urgency Level',
    urgencyNormal: 'Normal (Standard limitation)',
    urgencyUrgent: 'Urgent (Threat of dispossession / Arrest)',
    urgencyEmergency: 'Emergency (Habeas Corpus / Interim Injunction)',
    runAnalysis: 'Generate Legal Analysis & Action Plan',
    analysisResult: 'Statutory Assessment & Next Actions',

    // RTI Crafter
    rtiTitle: 'Statutory Right to Information (RTI) Crafter',
    rtiSub: 'Draft legally airtight Section 6(1) RTI applications for Central & State Public Authorities. Pre-formatted to prevent Section 8 exemptions and ensure 30-day compliance.',
    selectDept: 'Target Public Authority / Department',
    applicantNameLabel: 'Applicant Full Name',
    applicantAddrLabel: 'Postal Address for Certified Reply',
    bplCheckbox: 'Applicant falls Below Poverty Line (BPL - Fee Exempted)',
    specificQuestions: 'Information Requested (Numbered Specific Queries):',
    addQueryBtn: '+ Add Specific Question',
    generateRtiBtn: 'Generate Form-A RTI Petition',
    downloadPdf: 'Download Printable Form-A',

    // Footer
    footerDesc: 'Equitable and accessible constitutional justice for every Indian citizen under Article 39A. Integrated with the National Judicial Data Grid (NJDG) and NALSA Tele-Law services.',
    litigantTools: 'Litigant Tools',
    legalAidRti: 'Legal Aid & RTI',
    constitutionalMandate: 'Constitutional Mandate',
    footerQuote: '“The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity...” — Article 39A, Constitution of India'
  },
  hi: {
    // Top strip & Brand
    topStrip: 'प्रत्येक नागरिक के लिए न्याय का अधिकार • भारतीय संविधान का अनुच्छेद 39A',
    nalsa247: 'नालसा ई-सेवा 24x7',
    teleLaw: 'टेली-लॉ हेल्पलाइन: 15100',
    brandName: 'कानूनसाथी',
    brandSub: 'KanoonSaathi',
    tagline: 'सार्वभौम नागरिक विधिक सहायता मंच',
    freeAidBtn: 'मुफ़्त सहायता',
    eKycBtn: 'ई-केवाईसी',
    changeLang: 'English',

    // Nav Links
    navPortal: 'सार्वभौम पोर्टल',
    navWorkspace: 'कार्यस्थल',
    navVault: 'कॉज़ वॉल्ट',
    navFindCourt: 'न्यायालय खोजें',
    navProcess: 'अदालत प्रक्रिया',
    navTriage: 'विधिक विश्लेषण',
    navDossier: 'केस डोजियर',
    navRti: 'आरटीआई प्रारूपक',
    navNalsa: 'नालसा सहायता',
    navVerify: 'नागरिक सत्यापन',

    // Portal / Auth
    authTitle: 'कानूनसाथी में आपका पुनः स्वागत है',
    authSub: 'अपने विधिक अधिकारों को समझने और अपने केस वॉल्ट को प्रबंधित करने की यात्रा जारी रखें। अनुच्छेद 39A के तहत सुरक्षित और प्रमाणित।',
    tabLogin: '1. लॉगिन प्रक्रिया',
    tabSignup: '2. नागरिक पंजीकरण',
    tabOtp: '3. ओटीपी सत्यापन',
    tabForgot: '4. पासवर्ड रीसेट',
    loginIdentifier: 'ईमेल या 10-अंकीय मोबाइल नंबर',
    loginIdentifierPlaceholder: 'उदा. advocate.verma@nic.in या 9876543210',
    password: 'पासवर्ड',
    forgotPassword: 'पासवर्ड भूल गए?',
    rememberDevice: 'इस उपकरण को 30 दिनों तक याद रखें',
    loginBtn: 'सार्वभौम वॉल्ट में लॉगिन करें',
    verifyingBtn: 'सत्यापन किया जा रहा है...',
    digilockerKyc: 'डिजिलॉकर ई-केवाईसी',
    aadhaarOtp: 'आधार ओटीपी',
    noAccount: 'क्या आपके पास सत्यापित नागरिक खाता नहीं है?',
    signUpHere: 'यहाँ पंजीकरण करें',
    alreadyRegistered: 'पहले से पंजीकृत हैं?',
    loginToVault: 'वॉल्ट में लॉगिन करें',

    // Quote & Stats
    articleQuote: '“अनुच्छेद 39A के अंतर्गत अपने अधिकारों को समझना उनकी सुरक्षा का पहला कदम है।”',
    quoteSub: 'कानूनसाथी स्वचालित नोटिस, आरटीआई जनरेशन और सीधे डीएलएसए अधिवक्ताओं से संपर्क के माध्यम से हर नागरिक को समान न्याय और मुफ्त विधिक सहायता की गारंटी देता है।',
    statLitigants: 'सहायता प्राप्त नागरिक',
    statCourts: 'संबद्ध न्यायालय',
    statFreeAccess: 'पूर्णतः निःशुल्क',

    // Find Court
    findCourtTitle: 'अपने नजदीकी न्यायालय को खोजें',
    findCourtSub: 'राष्ट्रीय राजधानी क्षेत्र के न्यायालय परिसरों को वास्तविक जीपीएस दूरी, प्रमाणित तस्वीरों, न्यायिक पीठों, ई-फाइलिंग काउंटरों और सीधे नेविगेशन के साथ खोजें।',
    searchPlaceholder: 'न्यायालय का नाम, जिला, पिन कोड या अधिकार क्षेत्र से खोजें...',
    allJurisdictions: 'सभी क्षेत्राधिकार',
    apexCourt: 'सर्वोच्च न्यायालय',
    highCourts: 'उच्च न्यायालय',
    districtCourts: 'जिला न्यायालय',
    tribunals: 'अधिकरण (ट्रिब्यूनल)',
    searchRadius: 'खोज का दायरा (त्रिज्या):',
    within: 'दायरे में',
    splitView: 'मानचित्र + सूची',
    fullMapView: 'पूर्ण मानचित्र',
    galleryView: 'गैलरी दृश्य',
    navigate: 'गूगल मैप्स से दिशा-निर्देश प्राप्त करें',
    benchesCount: 'न्यायालय कक्ष / पीठें',
    efiling: 'ई-फाइलिंग काउंटर',
    jurisdiction: 'अधिकार क्षेत्र',
    sittingHours: 'बैठने का समय',
    registryPhone: 'रजिस्ट्री फोन',
    satelliteView: '🛰️ सैटेलाइट दृश्य',
    vectorView: '🗺️ वेक्टर मानचित्र',
    activeCasesLabel: 'सक्रिय मामले',
    monitoredLabel: 'निगरानी में',

    // Workspace
    workspaceGreeting: 'सुप्रभात, अधिवक्ता राजेश शर्मा',
    workspaceSub: 'आपकी व्यक्तिगत मुकदमों की कार्यवाही, आरपीएडी प्रेषण नोटिस और सहेजे गए न्यायिक परिसरों का केंद्रीय भंडार।',
    bookmarkCourt: 'नया न्यायालय सहेजें',
    draftRti: 'आरटीआई आवेदन बनाएं',
    causeVault: 'कॉज़ वॉल्ट',
    savedCourtsTitle: 'आपके सहेजे गए न्यायिक परिसर',
    activeDocketsTitle: 'सक्रिय वाद और कार्यवाहियाँ',
    metricActions: 'सक्रिय विधिक कार्रवाइयाँ',
    metricHearing: 'अगली अदालती सुनवाई',
    metricSavedCourts: 'सहेजे गए अदालत परिसर',
    metricRti: 'सक्रिय आरटीआई आवेदन',
    filterAll: 'सभी न्यायालय परिसर',
    filterActive: 'सक्रिय सुनवाई वाले न्यायालय',
    viewCourtDetails: 'न्यायालय विवरण देखें',

    // Court Process
    processTitle: 'चरणबद्ध न्यायिक प्रक्रियाएँ',
    processSub: 'सिविल प्रक्रिया संहिता (CPC) और भारतीय नागरिक सुरक्षा संहिता (BNSS) के तहत भारत की दीवानी और आपराधिक न्याय प्रणाली का संपूर्ण मार्गदर्शक।',
    civilTrack: 'दीवानी वाद प्रक्रिया (CPC 1908)',
    criminalTrack: 'आपराधिक प्रक्रिया (BNSS 2023)',
    stageTimeline: 'समय सीमा',
    statutorySection: 'कानूनी प्रावधान / धारा',
    requiredDocs: 'अनिवार्य दस्तावेज और औपचारिकताएं',

    // Situation Analysis / Triage
    triageTitle: 'विधिक स्थिति विश्लेषण एवं मार्गदर्शन',
    triageSub: 'एआई-संचालित संवैधानिक विश्लेषण जो आपकी शिकायत को भारतीय न्याय संहिता (BNS), परिसीमा काल और उचित अधिकार क्षेत्र वाले न्यायालय से जोड़ता है।',
    disputeCategory: 'विवाद की श्रेणी',
    describeGrievance: 'अपनी शिकायत और तथ्यों का विस्तार से विवरण दें:',
    urgencyLevel: 'गंभीरता एवं तत्कालिकता का स्तर',
    urgencyNormal: 'सामान्य (सामान्य परिसीमा)',
    urgencyUrgent: 'अति आवश्यक (कब्ज़ा छीनने / गिरफ़्तारी का भय)',
    urgencyEmergency: 'आपातकालीन (बंदी प्रत्यक्षीकरण / अंतरिम स्थगन)',
    runAnalysis: 'विधिक विश्लेषण एवं कार्य योजना तैयार करें',
    analysisResult: 'कानूनी मूल्यांकन एवं आगामी कदम',

    // RTI Crafter
    rtiTitle: 'सूचना का अधिकार (RTI) प्रारूपक',
    rtiSub: 'केंद्रीय और राज्य लोक प्राधिकरणों के लिए धारा 6(1) के तहत विधिक रूप से सशक्त आरटीआई आवेदन तैयार करें। धारा 8 की छूट से बचाव और 30 दिनों में उत्तर सुनिश्चित।',
    selectDept: 'लक्षित लोक प्राधिकरण / विभाग',
    applicantNameLabel: 'आवेदक का पूरा नाम',
    applicantAddrLabel: 'प्रमाणित उत्तर प्राप्त करने का डाक पता',
    bplCheckbox: 'आवेदक गरीबी रेखा से नीचे (BPL) है - शुल्क मुक्त',
    specificQuestions: 'वांछित सूचना (क्रमांकवार विशिष्ट प्रश्न):',
    addQueryBtn: '+ नया प्रश्न जोड़ें',
    generateRtiBtn: 'फॉर्म-ए आरटीआई आवेदन तैयार करें',
    downloadPdf: 'प्रिंट योग्य फॉर्म-ए डाउनलोड करें',

    // Footer
    footerDesc: 'अनुच्छेद 39A के तहत प्रत्येक भारतीय नागरिक के लिए समतामूलक और सुलभ संवैधानिक न्याय। राष्ट्रीय न्यायिक डेटा ग्रिड (NJDG) और नालसा टेली-लॉ से एकीकृत।',
    litigantTools: 'वादी उपकरण',
    legalAidRti: 'विधिक सहायता एवं आरटीआई',
    constitutionalMandate: 'संवैधानिक जनादेश',
    footerQuote: '“राज्य यह सुनिश्चित करेगा कि विधिक प्रणाली का संचालन समान अवसर के आधार पर न्याय को बढ़ावा दे...” — अनुच्छेद 39A, भारत का संविधान'
  }
};

const LanguageContext = createContext({
  language: 'en',
  isHindi: false,
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => key
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('kanoonsaathi_lang');
    if (saved === 'hi' || saved === 'en') {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('kanoonsaathi_lang', lang);
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'hi' : 'en';
    handleSetLanguage(next);
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  const isHindi = language === 'hi';

  return (
    <LanguageContext.Provider value={{ language, isHindi, setLanguage: handleSetLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
