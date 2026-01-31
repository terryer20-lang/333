import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

type EventCategory = 'all' | 'seminar' | 'online' | 'popup';

interface ConsularEvent {
  id: number;
  title: string;
  category: Omit<EventCategory, 'all'>;
  date: {
    month: string;
    day: string;
    full: string; // Added full string for list view
  };
  time: string;
  location: string;
  status: 'hot' | 'new' | 'full';
  color: string;
  categoryLabelKey: string;
}

const Events: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<EventCategory>('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mockEvents: ConsularEvent[] = [
    {
      id: 1,
      title: "Consular Protection Campus Tour @UM",
      category: "popup",
      date: { month: "MAR", day: "15", full: "2026-03-15" },
      time: "14:00 - 17:00",
      location: "University of Macau, E4",
      status: "hot",
      color: "bg-pink-100 text-pink-700 border-pink-200",
      categoryLabelKey: "tab_popup"
    },
    {
      id: 2,
      title: "Anti-Fraud Online Webinar",
      category: "online",
      date: { month: "MAR", day: "22", full: "2026-03-22" },
      time: "20:00 - 21:30",
      location: "Zoom Live",
      status: "new",
      color: "bg-blue-100 text-blue-700 border-blue-200",
      categoryLabelKey: "tab_online"
    },
    {
      id: 3,
      title: "Summer Exchange Safety Briefing",
      category: "seminar",
      date: { month: "APR", day: "05", full: "2026-04-05" },
      time: "10:30 - 12:00",
      location: "Macau Science Center",
      status: "full",
      color: "bg-purple-100 text-purple-700 border-purple-200",
      categoryLabelKey: "tab_seminar"
    },
    {
      id: 4,
      title: "Travel Docs Q&A Pop-up",
      category: "popup",
      date: { month: "APR", day: "12", full: "2026-04-12" },
      time: "11:00 - 18:00",
      location: "Senado Square",
      status: "new",
      color: "bg-orange-100 text-orange-700 border-orange-200",
      categoryLabelKey: "tab_popup"
    }
  ];

  const filteredEvents = activeTab === 'all' 
    ? mockEvents 
    : mockEvents.filter(e => e.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      
      {/* Immersive Hero Section - Updated Title & Removed Countdown */}
      <div className="relative pt-24 pb-8 px-6 overflow-hidden bg-gray-900 text-white rounded-b-[3rem] shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full filter blur-[80px] opacity-30 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red rounded-full filter blur-[80px] opacity-30 -ml-20 -mb-20"></div>
        
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black italic mb-2 leading-tight drop-shadow-lg">
            {t('events.hero_title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500 text-5xl md:text-6xl mt-1">2026</span>
          </h1>
          <div className="h-2 w-24 bg-brand-red rounded-full mt-4 mx-auto md:mx-0"></div>
        </div>
      </div>

      {/* Floating Category Filter */}
      <div className="sticky top-[60px] z-30 py-4 overflow-x-auto no-scrollbar pl-4 bg-gray-50/95 backdrop-blur-sm mask-gradient-r">
        <div className="flex gap-3 pr-4">
          {['all', 'seminar', 'online', 'popup'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as EventCategory)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 shadow-sm border ${
                activeTab === tab 
                  ? 'bg-gray-900 text-white border-gray-900 scale-105' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
              }`}
            >
              {t(`events.tab_${tab}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Events Feed - Block List Style */}
      <div className="px-4 space-y-4 mt-2">
        {filteredEvents.map((event, index) => (
          <div 
            key={event.id}
            className={`group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-md ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="p-5">
              
              {/* Header: Category & Status */}
              <div className="flex justify-between items-center mb-3">
                 <div className={`px-3 py-1 rounded-full text-xs font-bold border ${event.color}`}>
                    {t(`events.${event.categoryLabelKey}`)}
                 </div>
                 {event.status === 'hot' && <div className="text-xs font-bold text-red-500 flex items-center gap-1">🔥 {t('events.status_hot')}</div>}
                 {event.status === 'new' && <div className="text-xs font-bold text-blue-500 flex items-center gap-1">🆕 {t('events.status_new')}</div>}
                 {event.status === 'full' && <div className="text-xs font-bold text-gray-400">{t('events.btn_full')}</div>}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 leading-tight mb-4">
                {event.title}
              </h3>

              {/* Details Block */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-3 mb-1">
                 <div className="flex items-start gap-3">
                    <div className="w-5 text-center text-lg leading-none">📅</div>
                    <div>
                       <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{t('events.date')}</div>
                       <div className="text-sm font-medium text-gray-800">{event.date.full}</div>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="w-5 text-center text-lg leading-none">🕒</div>
                    <div>
                       <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{t('events.time')}</div>
                       <div className="text-sm font-medium text-gray-800">{event.time}</div>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="w-5 text-center text-lg leading-none">📍</div>
                    <div>
                       <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{t('events.location')}</div>
                       <div className="text-sm font-medium text-gray-800">{event.location}</div>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button (Calendar Sync) */}
      <button className="fixed bottom-24 right-5 w-12 h-12 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center text-xl z-20 hover:scale-110 transition-transform text-brand-blue">
        📅
      </button>

    </div>
  );
};

export default Events;