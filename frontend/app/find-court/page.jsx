'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function FindCourtPage() {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedCourtId, setSelectedCourtId] = useState(1);
  const [viewMode, setViewMode] = useState('split'); // 'split', 'map', 'grid'
  const [activeRadius, setActiveRadius] = useState(15);
  const [mapType, setMapType] = useState('interactive'); // 'interactive' or 'satellite'

  const courts = [
    {
      id: 1,
      tier: 'district',
      tierLabel: 'District & Sessions Court',
      name: 'Patiala House District Courts Complex',
      hindiName: 'पटियाला हाउस जिला अदालत परिसर',
      address: 'India Gate Circle, Purana Quila Road, New Delhi - 110001',
      jurisdiction: 'New Delhi District (South & New Delhi)',
      distance: 2.4,
      distanceText: '2.4 km',
      courtsCount: '34 Court Rooms',
      efilingCounter: 'Gate No. 2 (Counter 1-4)',
      helpline: '011-2338-6622',
      timings: '10:00 AM - 05:00 PM (Mon-Sat)',
      image: '/images/patiala_house_court.jpg',
      coords: { lat: 28.6148, lng: 77.2388 },
      mapPos: { x: 50, y: 52 },
      directionsUrl: 'https://maps.google.com/?q=Patiala+House+Court+New+Delhi'
    },
    {
      id: 2,
      tier: 'high',
      tierLabel: 'High Court',
      name: 'High Court of Delhi',
      hindiName: 'दिल्ली उच्च न्यायालय',
      address: 'Sher Shah Road, New Delhi - 110503',
      jurisdiction: 'NCT of Delhi (Appellate, Writ & Original)',
      distance: 3.8,
      distanceText: '3.8 km',
      courtsCount: '48 Benches',
      efilingCounter: 'Block-A e-Filing Registry',
      helpline: '011-2338-4101',
      timings: '10:30 AM - 04:30 PM (Mon-Fri)',
      image: '/images/delhi_high_court.jpg',
      coords: { lat: 28.6083, lng: 77.2407 },
      mapPos: { x: 54, y: 64 },
      directionsUrl: 'https://maps.google.com/?q=Delhi+High+Court'
    },
    {
      id: 3,
      tier: 'supreme',
      tierLabel: 'Apex Court of India',
      name: 'Supreme Court of India',
      hindiName: 'भारत का सर्वोच्च न्यायालय',
      address: 'Tilak Marg, Mandi House, New Delhi - 110001',
      jurisdiction: 'All India Constitutional & Appellate',
      distance: 2.9,
      distanceText: '2.9 km',
      courtsCount: '17 Court Rooms',
      efilingCounter: 'New Additional Building Complex',
      helpline: '011-2338-8922',
      timings: '10:30 AM - 04:00 PM (Mon-Fri)',
      image: '/images/supreme_court.jpg',
      coords: { lat: 28.6225, lng: 77.2393 },
      mapPos: { x: 52, y: 38 },
      directionsUrl: 'https://maps.google.com/?q=Supreme+Court+of+India'
    },
    {
      id: 4,
      tier: 'district',
      tierLabel: 'District & Sessions Court',
      name: 'Tis Hazari District Courts Complex',
      hindiName: 'तीस हजारी जिला अदालत परिसर',
      address: 'Mori Gate, Central Delhi - 110054',
      jurisdiction: 'Central & West Districts',
      distance: 6.1,
      distanceText: '6.1 km',
      courtsCount: '80+ Court Rooms',
      efilingCounter: 'Central Registry Room 102',
      helpline: '011-2395-0041',
      timings: '10:00 AM - 05:00 PM (Mon-Sat)',
      image: '/images/tis_hazari_court.jpg',
      coords: { lat: 28.6672, lng: 77.2155 },
      mapPos: { x: 34, y: 18 },
      directionsUrl: 'https://maps.google.com/?q=Tis+Hazari+Court'
    },
    {
      id: 5,
      tier: 'district',
      tierLabel: 'District Court Complex',
      name: 'Saket District Courts Complex',
      hindiName: 'साकेत जिला अदालत परिसर',
      address: 'Press Enclave Road, Saket, New Delhi - 110017',
      jurisdiction: 'South & South-East Districts',
      distance: 11.5,
      distanceText: '11.5 km',
      courtsCount: '52 Court Rooms',
      efilingCounter: 'Ground Floor Administrative Block',
      helpline: '011-2956-2001',
      timings: '10:00 AM - 05:00 PM (Mon-Sat)',
      image: '/images/patiala_house_court.jpg',
      coords: { lat: 28.5245, lng: 77.2185 },
      mapPos: { x: 42, y: 88 },
      directionsUrl: 'https://maps.google.com/?q=Saket+District+Court'
    },
    {
      id: 6,
      tier: 'tribunal',
      tierLabel: 'Tribunal & Authority',
      name: 'National Green Tribunal (NGT) Principal Bench',
      hindiName: 'राष्ट्रीय हरित अधिकरण (प्रिंसिपल बेंच)',
      address: 'Faridkot House, Copernicus Marg, New Delhi - 110001',
      jurisdiction: 'Environmental & Ecological Disputes (National)',
      distance: 2.1,
      distanceText: '2.1 km',
      courtsCount: '04 Benches',
      efilingCounter: 'Registry Counter 1',
      helpline: '011-2304-3500',
      timings: '10:00 AM - 05:00 PM (Mon-Fri)',
      image: '/images/delhi_high_court.jpg',
      coords: { lat: 28.6202, lng: 77.2356 },
      mapPos: { x: 46, y: 44 },
      directionsUrl: 'https://maps.google.com/?q=National+Green+Tribunal'
    }
  ];

  const filteredCourts = courts.filter(court => {
    const matchesSearch = court.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          court.hindiName.includes(searchTerm) ||
                          court.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          court.jurisdiction.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = selectedTier === 'all' || court.tier === selectedTier;
    const matchesRadius = court.distance <= activeRadius;
    return matchesSearch && matchesTier && matchesRadius;
  });

  const selectedCourt = courts.find(c => c.id === selectedCourtId) || courts[0];

  return (
    <div className="flex-1 bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* BANNER */}
        <section className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
            <div>
              <div className="flex items-center space-x-2 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">map</span>
                <span>{language === 'hi' ? 'इंटरैक्टिव न्यायिक जीआईएस मानचित्र एवं निर्देशिका' : 'Interactive Judicial GIS Map & Court Directory'}</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary tracking-tight mb-2">
                {t('findCourtTitle')}
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                {t('findCourtSub')}
              </p>
            </div>

            {/* View Mode Controls */}
            <div className="flex items-center bg-surface-container p-1.5 rounded-xl border border-outline-variant">
              <button
                onClick={() => setViewMode('split')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'split' ? 'bg-primary text-surface shadow-sm' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-sm">view_sidebar</span>
                <span>{t('splitView')}</span>
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'map' ? 'bg-primary text-surface shadow-sm' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-sm">map</span>
                <span>{t('fullMapView')}</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid' ? 'bg-primary text-surface shadow-sm' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-sm">grid_view</span>
                <span>{t('galleryView')}</span>
              </button>
            </div>
          </div>
        </section>

        {/* SEARCH, FILTER & RADIUS CONTROLS */}
        <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                <span className="material-symbols-outlined text-lg">search</span>
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-xs text-on-surface focus:outline-none focus:border-primary font-medium"
              />
            </div>

            {/* Tier Filters */}
            <div className="md:col-span-6 flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              {[
                { id: 'all', label: t('allJurisdictions') },
                { id: 'supreme', label: t('apexCourt') },
                { id: 'high', label: t('highCourts') },
                { id: 'district', label: t('districtCourts') },
                { id: 'tribunal', label: t('tribunals') }
              ].map(tier => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    selectedTier === tier.id
                      ? 'bg-primary text-surface shadow-sm'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>

          </div>

          {/* Proximity Slider & Live Counts */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-outline-variant/40 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-bold text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-secondary">radar</span>
                {t('searchRadius')}
              </span>
              <input
                type="range"
                min="3"
                max="25"
                value={activeRadius}
                onChange={(e) => setActiveRadius(Number(e.target.value))}
                className="accent-secondary cursor-pointer w-32"
              />
              <span className="bg-secondary/15 text-secondary px-2.5 py-0.5 rounded font-bold">
                {t('within')} {activeRadius} km
              </span>
            </div>

            <div className="text-on-surface-variant">
              {language === 'hi' ? 'दायरे में कुल ' : 'Showing '}
              <strong>{filteredCourts.length}</strong>
              {language === 'hi' ? ' न्यायिक परिसर उपलब्ध हैं' : ' judicial complexes in range'}
            </div>
          </div>
        </div>

        {/* MAP COMPONENT */}
        {(viewMode === 'split' || viewMode === 'map') && (
          <div className={`grid gap-8 ${viewMode === 'map' ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-12'}`}>
            
            {/* MAP CANVAS CONTAINER */}
            <div className={`${viewMode === 'map' ? 'w-full' : 'lg:col-span-7'} space-y-4`}>
              <div className="bg-[#121d33] rounded-2xl border-2 border-secondary/40 shadow-xl overflow-hidden relative">
                
                {/* Map Control Overlay Header */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                  <div className="bg-primary/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-secondary/40 text-surface text-xs font-bold flex items-center gap-2 shadow-lg pointer-events-auto">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
                    <span>{language === 'hi' ? 'राष्ट्रीय राजधानी क्षेत्र न्यायिक जीआईएस ग्रिड' : 'National Capital Territory Judicial GIS Grid'}</span>
                  </div>

                  <div className="flex gap-2 pointer-events-auto">
                    <button
                      onClick={() => setMapType(mapType === 'interactive' ? 'satellite' : 'interactive')}
                      className="px-3 py-1.5 bg-primary/90 text-tertiary-fixed rounded-xl text-xs font-bold border border-secondary/40 hover:bg-primary shadow-lg transition-all"
                    >
                      {mapType === 'interactive' ? t('satelliteView') : t('vectorView')}
                    </button>
                    <button
                      onClick={() => alert(language === 'hi' ? 'जीपीएस स्थान नई दिल्ली केंद्रीय जिले पर केंद्रित हुआ।' : 'GPS location re-centered on New Delhi Central District.')}
                      className="p-1.5 bg-primary/90 text-surface rounded-xl border border-secondary/40 hover:bg-primary shadow-lg"
                      title="Center on my location"
                    >
                      <span className="material-symbols-outlined text-lg">my_location</span>
                    </button>
                  </div>
                </div>

                {/* INTERACTIVE STYLIZED MAP CANVAS */}
                <div className="w-full h-[480px] relative bg-[#09152b] overflow-hidden select-none">
                  
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'linear-gradient(#ffdf9b 1px, transparent 1px), linear-gradient(90deg, #ffdf9b 1px, transparent 1px)',
                      backgroundSize: '40px 40px'
                    }}
                  />

                  {/* Yamuna River & Delhi Corridors */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 680 0 Q 640 180 610 260 T 630 480" fill="none" stroke="#2b5c8f" strokeWidth="22" strokeLinecap="round" />
                    <circle cx="50%" cy="50%" r="160" fill="none" stroke="#e2c381" strokeWidth="1.5" strokeDasharray="6 6" />
                    <circle cx="50%" cy="50%" r="240" fill="none" stroke="#e2c381" strokeWidth="1" strokeDasharray="4 8" />
                  </svg>

                  {/* Citizen Current Geo-Location Pin */}
                  <div className="absolute left-[48%] top-[56%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <span className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white shadow-lg animate-pulse"></span>
                    <span className="mt-1 px-2 py-0.5 rounded bg-black/80 text-[10px] text-white font-mono whitespace-nowrap">
                      {language === 'hi' ? 'आप यहाँ हैं (कनॉट प्लेस)' : 'You are here (Connaught Place)'}
                    </span>
                  </div>

                  {/* Radius Circle Indicator */}
                  <div
                    className="absolute left-[48%] top-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/40 bg-secondary/5 pointer-events-none transition-all duration-300"
                    style={{
                      width: `${activeRadius * 24}px`,
                      height: `${activeRadius * 24}px`
                    }}
                  />

                  {/* COURT PINS ON MAP */}
                  {filteredCourts.map(court => {
                    const isSelected = court.id === selectedCourtId;
                    const displayName = language === 'hi' ? court.hindiName.split(' ')[0] : court.name.split(' ')[0];
                    return (
                      <div
                        key={court.id}
                        onClick={() => setSelectedCourtId(court.id)}
                        className="absolute cursor-pointer transition-all duration-200 z-20 group"
                        style={{
                          left: `${court.mapPos.x}%`,
                          top: `${court.mapPos.y}%`,
                          transform: 'translate(-50%, -100%)'
                        }}
                      >
                        <div className={`px-2.5 py-1 rounded-full shadow-xl flex items-center gap-1.5 transition-transform duration-200 border ${
                          isSelected
                            ? 'bg-secondary text-white border-white scale-110 z-30 ring-4 ring-secondary/40'
                            : 'bg-primary/95 text-tertiary-fixed border-secondary/60 hover:scale-105'
                        }`}>
                          <span className="material-symbols-outlined text-[15px]">
                            {court.tier === 'supreme' ? 'assured_workload' : 'account_balance'}
                          </span>
                          <span className="text-[11px] font-bold whitespace-nowrap hidden sm:inline">
                            {displayName}
                          </span>
                        </div>

                        <div className={`w-0.5 h-3 mx-auto transition-colors ${
                          isSelected ? 'bg-white' : 'bg-secondary'
                        }`} />

                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none bg-black/90 text-white text-[10px] p-2 rounded-lg whitespace-nowrap shadow-xl z-40">
                          <div className="font-bold">{language === 'hi' ? court.hindiName : court.name}</div>
                          <div className="text-secondary">{court.distanceText} {language === 'hi' ? 'दूर' : 'away'}</div>
                        </div>
                      </div>
                    );
                  })}

                  {/* MAP BOTTOM BAR DETAILS */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 bg-primary/95 backdrop-blur-md p-3 rounded-xl border border-secondary/40 text-surface flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3">
                      <img
                        src={selectedCourt.image}
                        alt={selectedCourt.name}
                        className="w-12 h-10 object-cover rounded-lg border border-secondary/40"
                      />
                      <div>
                        <div className="font-serif font-bold text-sm text-tertiary-fixed">
                          {language === 'hi' ? selectedCourt.hindiName : selectedCourt.name}
                        </div>
                        <div className="text-[11px] text-surface-dim">{selectedCourt.address}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="bg-secondary/20 text-secondary px-2.5 py-1 rounded font-bold text-xs border border-secondary/40">
                        {selectedCourt.distanceText}
                      </span>
                      <a
                        href={selectedCourt.directionsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 bg-secondary text-on-secondary rounded-lg font-bold flex items-center gap-1 hover:bg-secondary/90 transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">directions</span>
                        <span>{language === 'hi' ? 'नेविगेट' : 'Navigate'}</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* SELECTED COURT DETAIL SPOTLIGHT CARD */}
            {viewMode === 'split' && (
              <div className="lg:col-span-5 bg-surface-container-lowest border-2 border-secondary/40 rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between">
                <div>
                  
                  <div className="relative h-56 w-full overflow-hidden bg-primary">
                    <img
                      src={selectedCourt.image}
                      alt={selectedCourt.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="bg-primary/90 text-tertiary-fixed border border-secondary/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        {language === 'hi' && selectedCourt.tier === 'supreme' ? 'भारत का सर्वोच्च न्यायालय' : selectedCourt.tierLabel}
                      </span>
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">near_me</span>
                        {selectedCourt.distanceText}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h2 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-white drop-shadow">
                        {language === 'hi' ? selectedCourt.hindiName : selectedCourt.name}
                      </h2>
                      <div className="text-xs font-semibold text-tertiary-fixed drop-shadow mt-0.5">
                        {language === 'hi' ? selectedCourt.name : selectedCourt.hindiName}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-2.5 text-xs text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-base">location_on</span>
                      <span className="leading-relaxed font-medium">{selectedCourt.address}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/40">
                      <div>
                        <span className="text-on-surface-variant block text-[11px]">{t('benchesCount')}:</span>
                        <span className="font-bold text-primary">{selectedCourt.courtsCount}</span>
                      </div>
                      <div>
                        <span className="text-on-surface-variant block text-[11px]">{t('efiling')}:</span>
                        <span className="font-bold text-primary">{selectedCourt.efilingCounter}</span>
                      </div>
                      <div className="col-span-2 pt-1 border-t border-outline-variant/30">
                        <span className="text-on-surface-variant block text-[11px]">{t('jurisdiction')}:</span>
                        <span className="font-semibold text-primary">{selectedCourt.jurisdiction}</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container">
                        <span className="text-on-surface-variant">{t('registryPhone')}:</span>
                        <a href={`tel:${selectedCourt.helpline}`} className="font-bold text-secondary">
                          {selectedCourt.helpline}
                        </a>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container">
                        <span className="text-on-surface-variant">{t('sittingHours')}:</span>
                        <span className="font-medium text-primary">{selectedCourt.timings}</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="p-6 pt-0 flex gap-3">
                  <a
                    href={selectedCourt.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 bg-secondary hover:bg-secondary/90 text-on-secondary rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <span className="material-symbols-outlined text-base">directions</span>
                    <span>{t('navigate')}</span>
                  </a>
                  <Link
                    href="/workspace"
                    className="px-4 py-3 bg-primary hover:bg-primary-container text-surface rounded-xl text-xs font-bold flex items-center justify-center border border-secondary shadow-sm transition-all"
                    title="Bookmark Court to Workspace"
                  >
                    <span className="material-symbols-outlined text-lg text-tertiary-fixed">bookmark_add</span>
                  </Link>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ALL COURTS DIRECTORY */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                {language === 'hi' ? 'भारतीय न्यायालय परिसर निर्देशिका' : 'Indian Court Complexes Directory'} ({filteredCourts.length})
              </h2>
              <p className="text-xs text-on-surface-variant">
                {language === 'hi' ? 'किसी भी न्यायालय को चुनें और मानचित्र पर उसका स्थान व विवरण देखें।' : 'Select any court to spotlight on the interactive map or inspect registry coordinates.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourts.map(court => {
              const isSelected = court.id === selectedCourtId;
              const title = language === 'hi' ? court.hindiName : court.name;
              const subTitle = language === 'hi' ? court.name : court.hindiName;
              return (
                <div
                  key={court.id}
                  onClick={() => { setSelectedCourtId(court.id); if (viewMode === 'grid') setViewMode('split'); }}
                  className={`bg-surface-container-lowest border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isSelected ? 'border-2 border-secondary ring-2 ring-secondary/20' : 'border-outline-variant/70'
                  }`}
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-primary">
                      <img
                        src={court.image}
                        alt={court.name}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="bg-primary/90 text-tertiary-fixed border border-secondary/40 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                          {language === 'hi' && court.tier === 'supreme' ? 'सर्वोच्च न्यायालय' : court.tierLabel}
                        </span>
                        <span className="bg-secondary text-white px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">location_on</span>
                          {court.distanceText}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="font-serif font-bold text-base leading-snug drop-shadow">
                          {title}
                        </h3>
                        <div className="text-[11px] font-semibold text-tertiary-fixed drop-shadow">
                          {subTitle}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                        {court.address}
                      </p>

                      <div className="space-y-1.5 bg-surface-container-low p-3 rounded-xl border border-outline-variant/40 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-on-surface-variant">{t('benchesCount')}:</span>
                          <span className="font-bold text-primary">{court.courtsCount}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-on-surface-variant">{t('efiling')}:</span>
                          <span className="font-semibold text-primary">{court.efilingCounter}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-on-surface-variant">{t('registryPhone')}:</span>
                          <a href={`tel:${court.helpline}`} className="font-bold text-secondary">
                            {court.helpline}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center gap-2">
                    <a
                      href={court.directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2 bg-secondary text-on-secondary rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 hover:bg-secondary/90 transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">directions</span>
                      <span>{language === 'hi' ? 'दिशा-निर्देश' : 'Directions'}</span>
                    </a>
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedCourtId(court.id); setViewMode('split'); }}
                      className="px-3 py-2 bg-primary text-surface rounded-lg text-xs font-bold hover:bg-primary-container transition-colors"
                      title="Focus on Map"
                    >
                      <span className="material-symbols-outlined text-base text-tertiary-fixed">center_focus_strong</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
