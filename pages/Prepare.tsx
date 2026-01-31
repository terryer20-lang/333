import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Prepare: React.FC = () => {
  const { t } = useLanguage();
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const checklist = [
    { id: 1, icon: '🛂', title: t('prepare.check_1_t'), desc: t('prepare.check_1_d') },
    { id: 2, icon: '🎫', title: t('prepare.check_2_t'), desc: t('prepare.check_2_d') },
    { id: 3, icon: '🏥', title: t('prepare.check_3_t'), desc: t('prepare.check_3_d') },
    { id: 4, icon: '📡', title: t('prepare.check_4_t'), desc: t('prepare.check_4_d') },
    { id: 5, icon: '👨‍👩‍👧', title: t('prepare.check_5_t'), desc: t('prepare.check_5_d') },
  ];

  const toggleCheck = (id: number) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (completedCount / checklist.length) * 100;

  return (
    <div className="pb-24 min-h-screen bg-gray-50">
      
      {/* Hero Section - Travel Theme */}
      <div className="relative bg-gradient-to-br from-blue-400 to-brand-blue text-white rounded-b-[2.5rem] shadow-lg overflow-hidden pb-20">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           {/* Abstract Map Pattern */}
           <svg width="100%" height="100%">
             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
             </pattern>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
        
        <div className="relative z-10 px-6 pt-32 flex items-center justify-between gap-4">
          <div className="text-left flex-1">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold mb-3 border border-white/30">
              {t('prepare.hero_title')}
            </div>
            <h1 className="text-2xl font-bold mb-2 leading-tight">
               {t('prepare.hero_desc').split('。')[0]}
            </h1>
            <p className="text-sm opacity-80 max-w-sm">
               {t('prepare.hero_desc').split('。')[1]}
            </p>
          </div>
          <div className="text-7xl shrink-0">✈️</div>
        </div>
      </div>

      {/* Floating Progress Card - Extracted to avoid clipping */}
      <div className="px-4 -mt-12 relative z-20">
         <div className="bg-white rounded-xl shadow-xl p-4 flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0">
               <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                 <path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                 <path className="text-brand-green transition-all duration-1000 ease-out" strokeDasharray={`${progress}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center font-bold text-brand-green">
                 {Math.round(progress)}%
               </div>
            </div>
            <div>
               <h3 className="font-bold text-gray-800 text-sm">{t('prepare.progress_title')}</h3>
               <p className="text-xs text-gray-500 mt-1">{completedCount}/{checklist.length} 完成度</p>
            </div>
         </div>
      </div>

      <div className="px-4 space-y-6 mt-8">
        
        {/* Checklist Section */}
        <div>
           <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2 px-1">
             <span>📝</span> {t('prepare.check_title')}
           </h2>
           <div className="space-y-3">
             {checklist.map((item) => (
               <div 
                 key={item.id}
                 onClick={() => toggleCheck(item.id)}
                 className={`group p-4 rounded-xl border-2 transition-all cursor-pointer relative overflow-hidden ${checkedItems[item.id] ? 'bg-green-50 border-green-400' : 'bg-white border-gray-100 shadow-sm hover:border-blue-200'}`}
               >
                 <div className="flex items-start gap-4 relative z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 transition-colors ${checkedItems[item.id] ? 'bg-green-200' : 'bg-gray-100 group-hover:bg-blue-50'}`}>
                       {checkedItems[item.id] ? '✅' : item.icon}
                    </div>
                    <div>
                       <h3 className={`font-bold text-sm transition-colors ${checkedItems[item.id] ? 'text-green-800' : 'text-gray-800'}`}>
                         {item.title}
                       </h3>
                       <p className={`text-xs mt-1 leading-relaxed transition-colors ${checkedItems[item.id] ? 'text-green-700' : 'text-gray-500'}`}>
                         {item.desc}
                       </p>
                    </div>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Safety Alert Levels - Visualized */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
           <h2 className="font-bold text-gray-800 mb-4 text-sm flex items-center justify-between">
             <span>🚦 {t('prepare.alerts_title')}</span>
           </h2>
           <div className="grid grid-cols-3 gap-2">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-center flex flex-col items-center justify-center h-20">
                 <div className="w-3 h-3 rounded-full bg-yellow-400 mb-2 animate-pulse"></div>
                 <span className="text-[10px] font-bold text-yellow-700 leading-tight">{t('prepare.alert_1')}</span>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 text-center flex flex-col items-center justify-center h-20">
                 <div className="w-3 h-3 rounded-full bg-orange-500 mb-2 animate-pulse"></div>
                 <span className="text-[10px] font-bold text-orange-700 leading-tight">{t('prepare.alert_2')}</span>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-2 text-center flex flex-col items-center justify-center h-20">
                 <div className="w-3 h-3 rounded-full bg-red-600 mb-2 animate-pulse"></div>
                 <span className="text-[10px] font-bold text-red-800 leading-tight">{t('prepare.alert_3')}</span>
              </div>
           </div>
        </div>

        {/* Luggage / Customs - Do's and Don'ts */}
        <div>
           <h2 className="font-bold text-gray-800 mb-3 px-1">{t('prepare.luggage_title')}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 relative overflow-hidden">
                 <div className="absolute -right-2 -top-2 text-6xl opacity-10">💊</div>
                 <h3 className="font-bold text-emerald-800 text-sm mb-1">{t('prepare.luggage_ok')}</h3>
                 <p className="text-xs text-emerald-700 leading-relaxed opacity-90">{t('prepare.luggage_ok_desc')}</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-4 border border-rose-100 relative overflow-hidden">
                 <div className="absolute -right-2 -top-2 text-6xl opacity-10">🚫</div>
                 <h3 className="font-bold text-rose-800 text-sm mb-1">{t('prepare.luggage_no')}</h3>
                 <p className="text-xs text-rose-700 leading-relaxed opacity-90">{t('prepare.luggage_no_desc')}</p>
              </div>
           </div>
        </div>

        {/* Fraud Alert - Glitch Style Warning */}
        <div className="bg-gray-900 rounded-xl p-1 relative overflow-hidden group">
           {/* Animated border gradient */}
           <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
           <div className="bg-gray-900 rounded-lg p-5 relative z-10 h-full">
              <div className="flex items-center gap-3 mb-2">
                 <span className="text-2xl animate-bounce">📵</span>
                 <div>
                    <h2 className="text-white font-bold text-sm uppercase tracking-wider">{t('prepare.fraud_title')}</h2>
                    <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded font-bold">{t('prepare.fraud_alert')}</span>
                 </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mt-2 border-l-2 border-red-500 pl-3">
                 {t('prepare.fraud_desc')}
              </p>
           </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
           <a 
             href="https://www.fmprc.gov.cn/mfa_eng/" 
             target="_blank" 
             rel="noreferrer"
             className="block w-full text-center bg-gray-200 text-gray-600 py-3 rounded-xl font-bold text-sm hover:bg-gray-300 transition-colors"
           >
             點擊下載”中國領事”APP
           </a>
        </div>

      </div>
    </div>
  );
};

export default Prepare;