import React from 'react';
import { useLanguage } from '../LanguageContext';

const Resources: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-24 min-h-screen bg-gray-50 font-sans">
      
      {/* Hero: Digital Backpack Theme */}
      <div className="relative pt-32 pb-12 px-6 bg-gray-900 overflow-hidden rounded-b-[3rem] shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/20 rounded-full blur-[80px] -mr-20 -mt-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] -ml-20 -mb-20"></div>
        
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
            {t('resources.hero_title')}
          </h1>
          <div className="h-1.5 w-20 bg-brand-green rounded-full mt-4 mx-auto md:mx-0"></div>
        </div>
      </div>

      <div className="px-4 mt-8 space-y-10">

        {/* Section 1: Bento Grid - Must-Have Guides */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 px-1">
            <span>📦</span> {t('resources.section_guide')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            
            {/* Main Item - Large */}
            <div className="col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 text-white relative overflow-hidden group shadow-lg min-h-[180px] flex flex-col justify-between cursor-pointer hover:scale-[1.01] transition-transform">
               <div className="absolute right-0 bottom-0 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">📖</div>
               <div>
                  <div className="bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded inline-block mb-2">PDF</div>
                  <h3 className="text-2xl font-bold leading-tight">{t('resources.guide_1_t')}</h3>
                  <p className="text-sm text-gray-400 mt-1">{t('resources.guide_1_d')}</p>
               </div>
               <div className="flex items-center gap-2 mt-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-brand-red transition-colors">
                     <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </div>
                  <span className="text-xs font-bold">{t('resources.download_btn')}</span>
               </div>
            </div>

            {/* Side Item 1 - Emergency Card */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="absolute -right-2 -top-2 w-16 h-16 bg-yellow-50 rounded-full z-0"></div>
               <div className="relative z-10">
                  <div className="text-3xl mb-2">📇</div>
                  <h3 className="font-bold text-gray-800 text-sm leading-tight">{t('resources.guide_2_t')}</h3>
                  <p className="text-[10px] text-gray-400 mt-1">{t('resources.guide_2_d')}</p>
               </div>
            </div>

            {/* Side Item 2 - Flowchart */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="absolute -right-2 -top-2 w-16 h-16 bg-blue-50 rounded-full z-0"></div>
               <div className="relative z-10">
                  <div className="text-3xl mb-2">🗺️</div>
                  <h3 className="font-bold text-gray-800 text-sm leading-tight">{t('resources.guide_3_t')}</h3>
                  <p className="text-[10px] text-gray-400 mt-1">{t('resources.guide_3_d')}</p>
               </div>
            </div>
          </div>
        </section>

        {/* Section 2: Visual Learning - Horizontal Scroll */}
        <section>
          <div className="flex justify-between items-center mb-4 px-1">
             <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
               <span>🖼️</span> {t('resources.section_visuals')}
             </h2>
             <span className="text-xs text-gray-400">&rarr;</span>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x">
             {[1, 2, 3].map((i) => (
               <div key={i} className="snap-center shrink-0 w-64 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                  <div className={`h-32 w-full ${i === 1 ? 'bg-orange-100' : i === 2 ? 'bg-red-100' : 'bg-blue-100'} relative flex items-center justify-center`}>
                     <span className="text-4xl group-hover:scale-110 transition-transform duration-500">
                        {i === 1 ? '🛂' : i === 2 ? '📵' : '📞'}
                     </span>
                     {/* Glass Overlay Tag */}
                     <div className="absolute bottom-2 right-2 bg-white/30 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-gray-700">
                        #INFOGRAPHIC
                     </div>
                  </div>
                  <div className="p-4">
                     <h3 className="font-bold text-gray-800 text-sm">{t(`resources.visual_${i}`)}</h3>
                     <div className="mt-3 flex items-center gap-1 text-[10px] text-brand-blue font-bold uppercase tracking-wider">
                        View Post <span>&rarr;</span>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* Section 4: External Portals - Pill Buttons */}
        <section className="pb-8">
           <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 px-1">
             <span>🔗</span> {t('resources.section_links')}
           </h2>
           <div className="flex flex-wrap gap-2">
              <a href="https://cs.mfa.gov.cn" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white px-4 py-3 rounded-full border border-gray-200 shadow-sm hover:border-brand-blue hover:text-brand-blue transition-colors">
                 <span className="text-lg">🇨🇳</span>
                 <span className="text-xs font-bold">{t('resources.link_mfa')}</span>
                 <span className="text-gray-300 text-xs">↗</span>
              </a>
              <a href="https://www.dsi.gov.mo" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white px-4 py-3 rounded-full border border-gray-200 shadow-sm hover:border-brand-green hover:text-brand-green transition-colors">
                 <span className="text-lg">🆔</span>
                 <span className="text-xs font-bold">{t('resources.link_macau')}</span>
                 <span className="text-gray-300 text-xs">↗</span>
              </a>
              <a href="https://www.macaotourism.gov.mo" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white px-4 py-3 rounded-full border border-gray-200 shadow-sm hover:border-orange-500 hover:text-orange-500 transition-colors">
                 <span className="text-lg">🏖️</span>
                 <span className="text-xs font-bold">{t('resources.link_tourism')}</span>
                 <span className="text-gray-300 text-xs">↗</span>
              </a>
           </div>
        </section>

      </div>
    </div>
  );
};

export default Resources;