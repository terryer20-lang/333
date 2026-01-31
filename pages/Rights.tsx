import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Rights: React.FC = () => {
  const { t } = useLanguage();
  const [activeIdentity, setActiveIdentity] = useState<'perm' | 'non_perm'>('perm');

  return (
    <div className="pb-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="px-6 pt-32 pb-10 bg-gradient-to-br from-brand-blue to-blue-800 text-white rounded-b-[2.5rem] shadow-xl mb-8 relative overflow-hidden">
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="text-left flex-1">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
              {t('rights.hero_title')}
            </h1>
            <p className="text-white/90 text-xs md:text-sm leading-relaxed max-w-xl">
              {t('rights.hero_desc')}
            </p>
          </div>
          <div className="text-8xl opacity-20 transform rotate-12 shrink-0">⚖️</div>
        </div>
      </div>

      <div className="px-4 space-y-8">
        
        {/* Identity Cards Section - Simulated ID Cards */}
        <div className="animate-fade-in">
          <h2 className="text-lg font-bold text-gray-800 mb-4 px-1 flex items-center gap-2">
            <span>🆔</span> {t('rights.residents_title')}
          </h2>
          
          <div className="flex gap-2 mb-4">
             <button 
               onClick={() => setActiveIdentity('perm')}
               className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activeIdentity === 'perm' ? 'bg-brand-blue text-white shadow-lg' : 'bg-white text-gray-500 border border-gray-200'}`}
             >
               {t('rights.perm_title')}
             </button>
             <button 
               onClick={() => setActiveIdentity('non_perm')}
               className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activeIdentity === 'non_perm' ? 'bg-gray-600 text-white shadow-lg' : 'bg-white text-gray-500 border border-gray-200'}`}
             >
               {t('rights.non_perm_title')}
             </button>
          </div>

          <div className="relative h-48 w-full perspective-1000">
             <div className={`absolute inset-0 w-full h-full transition-all duration-500 ${activeIdentity === 'perm' ? 'opacity-100 rotate-x-0' : 'opacity-0 rotate-x-90'}`}>
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-xl p-5 text-white h-full relative overflow-hidden border border-white/20">
                    <div className="absolute -right-4 -bottom-4 text-8xl opacity-20">🎫</div>
                    <div className="flex items-start justify-between">
                       <div></div>
                       <span className="font-mono opacity-50 text-xs">BIR-P</span>
                    </div>
                    <div className="mt-4">
                       <h3 className="text-xl font-bold mb-1">{t('rights.perm_title')}</h3>
                       <p className="text-sm opacity-90 leading-relaxed">{t('rights.perm_desc')}</p>
                    </div>
                </div>
             </div>

             <div className={`absolute inset-0 w-full h-full transition-all duration-500 ${activeIdentity === 'non_perm' ? 'opacity-100 rotate-x-0' : 'opacity-0 -rotate-x-90'}`}>
                <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl shadow-xl p-5 text-white h-full relative overflow-hidden border border-white/20">
                    <div className="absolute -right-4 -bottom-4 text-8xl opacity-20">🎫</div>
                     <div className="flex items-start justify-between">
                       <div></div>
                       <span className="font-mono opacity-50 text-xs">BIR-NP</span>
                    </div>
                    <div className="mt-4">
                       <h3 className="text-xl font-bold mb-1">{t('rights.non_perm_title')}</h3>
                       <p className="text-sm opacity-90 leading-relaxed">{t('rights.non_perm_desc')}</p>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Core Rights - Block Style Re-layout */}
        <div className="border-[3px] border-blue-200 rounded-xl bg-white shadow-sm overflow-hidden">
           {/* Header */}
           <div className="px-5 py-3 border-b border-blue-100 bg-blue-50/30">
              <h2 className="text-xl font-bold text-gray-800 leading-tight">{t('rights.core_title')}</h2>
              <p className="text-xs font-bold text-brand-blue mt-0.5">{t('rights.core_subtitle')}</p>
           </div>

           <div className="p-4 space-y-4 bg-white/50">
              {/* Row 1: Freedom (Full Width) */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all">
                 <div className="w-12 h-12 bg-orange-100/50 rounded-full flex items-center justify-center text-2xl shrink-0">
                    🔐
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-800 text-base">{t('rights.rights_list.freedom.t')}</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{t('rights.rights_list.freedom.d')}</p>
                 </div>
              </div>

              {/* Row 2: Speech & Movement (Half Width on tablet, stacked on mobile) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Speech */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                     <div className="text-3xl mb-3 text-pink-500">📢</div>
                     <h3 className="font-bold text-gray-800 text-sm mb-1">{t('rights.rights_list.speech.t')}</h3>
                     <p className="text-xs text-gray-500 leading-relaxed">{t('rights.rights_list.speech.d')}</p>
                  </div>

                  {/* Movement */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                     <div className="text-3xl mb-3 text-blue-500">✈️</div>
                     <h3 className="font-bold text-gray-800 text-sm mb-1">{t('rights.rights_list.movement.t')}</h3>
                     <p className="text-xs text-gray-500 leading-relaxed">{t('rights.rights_list.movement.d')}</p>
                  </div>
              </div>

              {/* Row 3: Remaining Items (Full width on mobile to show text, 3 cols on desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {/* Judicial */}
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="text-3xl mb-3 text-blue-600">⚖️</div>
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{t('rights.rights_list.judicial.t')}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{t('rights.rights_list.judicial.d')}</p>
                 </div>
                 
                 {/* Faith */}
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="text-3xl mb-3 text-purple-600">🕍</div>
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{t('rights.rights_list.faith.t')}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{t('rights.rights_list.faith.d')}</p>
                 </div>
                 
                 {/* Welfare */}
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="text-3xl mb-3 text-orange-600">👶</div>
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{t('rights.rights_list.welfare.t')}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{t('rights.rights_list.welfare.d')}</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Overseas Identity Transformation - Expanded */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full filter blur-[80px] opacity-20 -mr-20 -mt-20"></div>
           
           <div className="relative z-10">
              <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
                🌍 {t('rights.overseas_title')}
              </h2>
              <p className="text-xs text-gray-400 mb-6 uppercase tracking-wider">{t('rights.overseas_subtitle')}</p>

              <div className="space-y-4">
                 {/* Item 1: Citizen Definition */}
                 <div className="flex gap-4 items-start border-l-2 border-brand-red/50 pl-4">
                    <div>
                       <h3 className="font-bold text-red-100 text-sm mb-1">{t('rights.citizen_def')}</h3>
                       <p className="text-xs text-gray-300 leading-relaxed">{t('rights.citizen_desc')}</p>
                    </div>
                 </div>

                 {/* Item 2: Consular Right */}
                 <div className="flex gap-4 items-start border-l-2 border-brand-blue/50 pl-4">
                    <div>
                       <h3 className="font-bold text-blue-100 text-sm mb-1">{t('rights.consular_right')}</h3>
                       <p className="text-xs text-gray-300 leading-relaxed">{t('rights.consular_desc')}</p>
                    </div>
                 </div>

                 {/* Item 3: Nationality Selection */}
                 <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/10">
                    <h3 className="font-bold text-sm mb-1 text-yellow-100">🇨🇳 {t('rights.nationality_select')}</h3>
                    <p className="text-xs text-gray-300 mb-2">{t('rights.nationality_desc')}</p>
                 </div>

                 {/* Item 4: Travel Convenience */}
                 <div className="bg-white/5 backdrop-blur rounded-lg p-3 border border-white/5">
                    <h3 className="font-bold text-sm mb-1 text-green-100">🛂 {t('rights.passport_convenience')}</h3>
                    <p className="text-xs text-gray-400">{t('rights.passport_desc')}</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Duty & Responsibility */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 text-9xl opacity-5 -mt-4 -mr-4">⚖️</div>
           
           <h2 className="text-lg font-bold text-gray-800 relative z-10">{t('rights.duty_title')}</h2>
           <p className="text-xs text-gray-500 mb-6 relative z-10">{t('rights.duty_subtitle')}</p>

           <div className="flex flex-col md:flex-row gap-4 relative z-10">
              <div className="flex-1 bg-gray-50 p-4 rounded-xl border-l-4 border-gray-400">
                 <div className="flex items-center gap-2 mb-2">
                    <div className="text-xl">📜</div>
                    <h3 className="font-bold text-sm text-gray-800">{t('rights.duty_1')}</h3>
                 </div>
                 <p className="text-xs text-gray-500">{t('rights.duty_1_desc')}</p>
              </div>
              <div className="flex-1 bg-gray-50 p-4 rounded-xl border-l-4 border-gray-400">
                 <div className="flex items-center gap-2 mb-2">
                     <div className="text-xl">🤝</div>
                     <h3 className="font-bold text-sm text-gray-800">{t('rights.duty_2')}</h3>
                 </div>
                 <p className="text-xs text-gray-500">{t('rights.duty_2_desc')}</p>
              </div>
           </div>
        </div>

        {/* Tips Footer - Sticky Note Style */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 relative shadow-sm">
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-200/50 backdrop-blur rounded-sm"></div>
           <h2 className="font-bold text-yellow-800 text-sm mb-3 flex items-center gap-2 border-b border-yellow-200 pb-2">
             📌 {t('rights.tips_title')}
           </h2>
           
           <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-lg mt-0.5">🛂</div>
                <div>
                   <h3 className="font-bold text-yellow-900 text-xs mb-0.5">{t('rights.tips_passport')}</h3>
                   <p className="text-xs text-yellow-700/80 leading-relaxed">{t('rights.tips_passport_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-lg mt-0.5">📱</div>
                <div>
                   <h3 className="font-bold text-yellow-900 text-xs mb-0.5">{t('rights.tips_app')}</h3>
                   <p className="text-xs text-yellow-700/80 leading-relaxed">{t('rights.tips_app_desc')}</p>
                </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Rights;