import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Emergency: React.FC = () => {
  const [locationStatus, setLocationStatus] = useState<string>('');
  const { t } = useLanguage();

  const toDMS = (coordinate: number, isLat: boolean) => {
    const absolute = Math.abs(coordinate);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = ((minutesNotTruncated - minutes) * 60).toFixed(1);
    
    let direction = "";
    if (isLat) {
      direction = coordinate >= 0 ? "N" : "S";
    } else {
      direction = coordinate >= 0 ? "E" : "W";
    }

    return `${degrees}°${minutes}'${seconds}"${direction}`;
  };

  const handleGetLocation = () => {
    setLocationStatus(t('emergency.locating'));
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const latDMS = toDMS(latitude, true);
          const longDMS = toDMS(longitude, false);
          
          setLocationStatus(`${t('emergency.location_found')}: ${latDMS} ${longDMS}`);
          
          // Redirect to Google Maps searching for nearest Chinese Consulate
          setTimeout(() => {
             window.location.href = `https://www.google.com/maps/search/Chinese+Consulate/@${latitude},${longitude},12z`;
          }, 1500);
        },
        (error) => {
          setLocationStatus(`${t('emergency.location_error')}: ${error.message}`);
        }
      );
    } else {
      setLocationStatus('Geolocation unsupported');
    }
  };

  const hotlines = [
    { name: t('emergency.hotline_commissioner'), number: '+853 66888353', color: 'bg-blue-600', icon: '🏢' },
    { name: t('emergency.hotline_psp'), number: '+853 28573333', color: 'bg-blue-800', icon: '👮' },
    { name: t('emergency.hotline_tourism'), number: '+853 28333000', color: 'bg-orange-500', icon: '🏖️' }
  ];

  return (
    <div className="pb-24 min-h-screen bg-gray-900 text-white overflow-hidden">
      
      {/* Header Alert Style */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 px-6 pt-32 pb-10 rounded-b-[2.5rem] shadow-2xl relative mb-8">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <div className="relative z-10 flex items-center justify-between gap-4">
            <div className="text-left flex-1">
              <h1 className="text-2xl font-black tracking-widest uppercase mb-1">{t('emergency.page_title')}</h1>
              <p className="text-red-100 text-sm font-medium tracking-wide">{t('emergency.page_subtitle')}</p>
            </div>
            <div className="text-7xl shrink-0">🚨</div>
         </div>
      </div>

      <div className="px-4 -mt-8 relative z-20 space-y-6">
        
        {/* Main 12308 Card */}
        <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-xl border-t-8 border-brand-red">
           <div className="flex justify-between items-start mb-4">
              <div className="max-w-[80%]">
                 <h2 className="text-lg font-bold text-brand-red leading-tight">{t('emergency.main_hotline_label')}</h2>
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">{t('emergency.main_hotline_desc')}</p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-xl animate-pulse shrink-0">📞</div>
           </div>
           
           <div className="text-4xl font-black text-center font-mono tracking-tight my-4 text-gray-900 select-all">
             +86 10 12308
           </div>

           <a 
             href="tel:+861012308"
             className="block w-full bg-brand-red text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
           >
             <span>{t('emergency.call_action')}</span>
           </a>
        </div>

        {/* Local Hotlines Bento Grid - Full Block Clickable */}
        <div>
           <h3 className="text-sm font-bold text-gray-400 mb-3 px-1 uppercase tracking-wider">{t('emergency.local_hotlines_title')}</h3>
           <div className="grid grid-cols-1 gap-3">
              {hotlines.map((h, i) => (
                <a 
                  key={i} 
                  href={`tel:${h.number.replace(/\s/g, '')}`} 
                  className="flex bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-md active:bg-gray-700 active:scale-[0.99] transition-all group"
                >
                   <div className={`w-16 flex items-center justify-center text-2xl ${h.color} group-hover:brightness-110`}>
                      {h.icon}
                   </div>
                   <div className="flex-1 p-3 flex justify-between items-center">
                      <div className="min-w-0 pr-2">
                         <div className="text-xs text-gray-300 mb-0.5 font-bold leading-tight">{h.name}</div>
                         <div className="font-mono text-lg font-bold text-white">{h.number}</div>
                      </div>
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors shrink-0">
                         📞
                      </div>
                   </div>
                </a>
              ))}
           </div>
        </div>

        {/* Safety Kit - App Downloads */}
        <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
           <h3 className="font-bold text-white mb-4 flex items-center gap-2">
             <span>🧰</span> {t('emergency.safety_kit_title')}
           </h3>
           <div className="grid grid-cols-2 gap-3">
              <a href="https://www.cs.mfa.gov.cn" target="_blank" rel="noreferrer" className="bg-gray-700 p-3 rounded-xl flex flex-col items-center text-center hover:bg-gray-600 transition-colors">
                 <div className="text-3xl mb-2">🇨🇳</div>
                 <div className="font-bold text-sm text-white leading-tight">{t('emergency.kit_app_title')}</div>
                 <div className="text-[10px] text-gray-400 mt-1">{t('emergency.kit_app_desc')}</div>
              </a>
              <a href="https://www.gov.mo/en/services/ps-1047/" target="_blank" rel="noreferrer" className="bg-gray-700 p-3 rounded-xl flex flex-col items-center text-center hover:bg-gray-600 transition-colors">
                 <div className="text-3xl mb-2">🇲🇴</div>
                 <div className="font-bold text-sm text-white leading-tight">{t('emergency.kit_macau_title')}</div>
                 <div className="text-[10px] text-gray-400 mt-1">{t('emergency.kit_macau_desc')}</div>
              </a>
           </div>
        </div>

        {/* Lost Passport - Horizontal Steps */}
        <div>
           <h3 className="text-sm font-bold text-gray-400 mb-3 px-1 uppercase tracking-wider">{t('emergency.lost_passport_title')}</h3>
           <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar snap-x">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="snap-start shrink-0 w-36 bg-gray-800 rounded-xl p-4 border border-gray-700 flex flex-col relative">
                   <div className="absolute top-2 right-2 text-4xl text-gray-700 font-black opacity-30">{step}</div>
                   <div className="mb-2 text-2xl">
                      {step === 1 ? '👮' : step === 2 ? '📱' : step === 3 ? '🏛️' : '🛂'}
                   </div>
                   <div className="font-bold text-sm text-white mb-1">{t(`emergency.step_${step}_t`)}</div>
                   <div className="text-[10px] text-gray-400 leading-tight">{t(`emergency.step_${step}_d`)}</div>
                </div>
              ))}
           </div>
        </div>

        {/* Geolocation Button */}
        <button 
          onClick={handleGetLocation}
          className="w-full py-4 rounded-xl border border-dashed border-gray-500 text-gray-400 font-bold hover:bg-gray-800 hover:text-white transition-all flex items-center justify-center gap-2"
        >
          {locationStatus ? (
             <span className="text-green-400 font-mono text-xs">{locationStatus}</span>
          ) : (
             <span>{t('emergency.location_btn')}</span>
          )}
        </button>

      </div>
    </div>
  );
};

export default Emergency;