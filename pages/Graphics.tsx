import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

type Category = 'all' | 'passport' | 'safety' | 'fraud' | 'emergency';

interface GraphicItem {
  id: number;
  category: Omit<Category, 'all'>;
  titleKey: string;
  descKey: string;
  type: 'flow' | 'chat' | 'wallpaper' | 'list' | 'info' | 'card';
  height: string; // Tailwind class for simulated height diversity
  color: string;
}

const Graphics: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const items: GraphicItem[] = [
    { id: 1, category: 'passport', titleKey: 'item_1_title', descKey: 'item_1_desc', type: 'flow', height: 'h-80', color: 'bg-blue-50' },
    { id: 2, category: 'fraud', titleKey: 'item_2_title', descKey: 'item_2_desc', type: 'chat', height: 'h-96', color: 'bg-gray-100' },
    { id: 3, category: 'emergency', titleKey: 'item_3_title', descKey: 'item_3_desc', type: 'wallpaper', height: 'h-64', color: 'bg-red-500' },
    { id: 4, category: 'safety', titleKey: 'item_4_title', descKey: 'item_4_desc', type: 'list', height: 'h-72', color: 'bg-emerald-50' },
    { id: 5, category: 'passport', titleKey: 'item_5_title', descKey: 'item_5_desc', type: 'info', height: 'h-80', color: 'bg-indigo-50' },
    { id: 6, category: 'safety', titleKey: 'item_6_title', descKey: 'item_6_desc', type: 'card', height: 'h-64', color: 'bg-yellow-50' },
  ];

  const filteredItems = activeFilter === 'all' ? items : items.filter(i => i.category === activeFilter);

  return (
    <div className="pb-24 min-h-screen bg-gray-50 font-sans">
      
      {/* Hero: Abstract Art Style */}
      <div className="relative pt-32 pb-12 px-6 bg-gray-900 overflow-hidden rounded-b-[3rem] shadow-2xl mb-6">
        {/* Animated Shapes */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-brand-red rounded-full mix-blend-screen filter blur-[60px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-brand-blue rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-green rounded-full mix-blend-screen filter blur-[90px] opacity-20"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            {t('graphics.hero_title')}
          </h1>
        </div>
      </div>

      {/* Sticky Filter Bar - Glassmorphism */}
      <div className="sticky top-[60px] z-30 py-3 px-4 -mt-4 mb-4">
         <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mask-gradient-r">
            {['all', 'passport', 'safety', 'fraud', 'emergency'].map((cat) => (
               <button
                  key={cat}
                  onClick={() => setActiveFilter(cat as Category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap backdrop-blur-md shadow-sm border transition-all duration-300 ${
                     activeFilter === cat 
                     ? 'bg-gray-900 text-white border-gray-900 scale-105 shadow-lg' 
                     : 'bg-white/80 text-gray-600 border-white/50 hover:bg-white'
                  }`}
               >
                  {t(`graphics.filter_${cat}`)}
               </button>
            ))}
         </div>
      </div>

      {/* Masonry Layout */}
      <div className="px-4 columns-2 md:columns-3 gap-4 space-y-4">
        {filteredItems.map((item) => (
          <div 
             key={item.id} 
             className={`break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-100 group relative`}
          >
             {/* Content Visualization based on Type */}
             <div className={`${item.color} ${item.height} relative p-4 flex flex-col`}>
                
                {/* 1. Flowchart Visualization */}
                {item.type === 'flow' && (
                   <div className="flex-1 flex flex-col items-center justify-center gap-2 opacity-80">
                      <div className="w-12 h-12 rounded-lg border-2 border-dashed border-blue-400 flex items-center justify-center text-xl bg-white">👮</div>
                      <div className="w-0.5 h-4 bg-blue-300"></div>
                      <div className="w-12 h-12 rounded-lg border-2 border-blue-400 flex items-center justify-center text-xl bg-white shadow-md">📱</div>
                      <div className="w-0.5 h-4 bg-blue-300"></div>
                      <div className="w-12 h-12 rounded-lg border-2 border-dashed border-blue-400 flex items-center justify-center text-xl bg-white">🛂</div>
                   </div>
                )}

                {/* 2. Chat Visualization (Fraud) */}
                {item.type === 'chat' && (
                   <div className="flex-1 flex flex-col justify-end gap-2 text-[10px] pb-2">
                      <div className="bg-white p-2 rounded-tl-xl rounded-tr-xl rounded-br-xl shadow-sm self-start max-w-[90%]">
                         Your account is unsafe. Transfer money now! ⚠️
                      </div>
                      <div className="bg-brand-red text-white p-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-sm self-end font-bold">
                         NO! It's a scam! 🛑
                      </div>
                   </div>
                )}

                {/* 3. Wallpaper Visualization */}
                {item.type === 'wallpaper' && (
                   <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 flex flex-col items-center justify-center text-white">
                      <div className="text-4xl mb-2">🆘</div>
                      <div className="font-mono text-3xl font-bold tracking-widest">+86 10</div>
                      <div className="font-mono text-5xl font-black tracking-tighter">12308</div>
                   </div>
                )}

                {/* 4. List Visualization */}
                {item.type === 'list' && (
                   <div className="flex-1 flex flex-col justify-center gap-2">
                      {[1, 2, 3].map(i => (
                         <div key={i} className="flex items-center gap-2 bg-white/60 p-2 rounded-lg">
                            <div className="w-4 h-4 rounded-full bg-red-400 flex items-center justify-center text-white text-[10px]">✕</div>
                            <div className="h-2 bg-gray-300 rounded-full w-2/3"></div>
                         </div>
                      ))}
                   </div>
                )}

                {/* 5. Info Card */}
                {item.type === 'info' && (
                   <div className="flex-1 flex flex-col items-center justify-center relative">
                      <div className="absolute inset-0 border-4 border-indigo-200 rounded-xl"></div>
                      <div className="w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center text-4xl mb-2">⚖️</div>
                      <div className="text-center font-bold text-indigo-900 text-xs uppercase tracking-widest">Consular<br/>Rights</div>
                   </div>
                )}

                {/* 6. Simple Card */}
                {item.type === 'card' && (
                   <div className="flex-1 flex items-center justify-center">
                      <div className="text-6xl animate-bounce">💸</div>
                   </div>
                )}

                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                   <button className="bg-white text-gray-900 py-2 rounded-full font-bold text-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {t('graphics.view_btn')}
                   </button>
                </div>
             </div>

             {/* Card Footer */}
             <div className="p-3 bg-white">
                <div className="flex justify-between items-start mb-1">
                   <span className="inline-block px-1.5 py-0.5 rounded bg-gray-100 text-[10px] font-bold text-gray-500 uppercase">#{item.category}</span>
                   <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                   </button>
                </div>
                <h3 className="font-bold text-gray-800 text-sm leading-snug mb-1">{t(`graphics.${item.titleKey}`)}</h3>
                <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed">{t(`graphics.${item.descKey}`)}</p>
             </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Graphics;