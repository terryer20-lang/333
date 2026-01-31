import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const Challenge: React.FC = () => {
  const [totalPoints, setTotalPoints] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const savedPoints = localStorage.getItem('macau_consular_points');
    if (savedPoints) {
      setTotalPoints(parseInt(savedPoints, 10));
    } else {
      // Mock initial score if empty for display purposes
      setTotalPoints(150);
    }
  }, []);

  const mockLeaderboard = [
    { rank: 1, user: "陳**", score: 2850 },
    { rank: 2, user: "Li**", score: 2720 },
    { rank: 3, user: "Wong**", score: 2690 },
    { rank: 4, user: "張**", score: 2450 },
    { rank: 5, user: "User_882", score: 2300 },
    { rank: 6, user: "Ho**", score: 2150 },
    { rank: 7, user: "劉**", score: 1980 },
    { rank: 8, user: "Maca**", score: 1850 },
    { rank: 9, user: "Sou**", score: 1700 },
    { rank: 10, user: "User_103", score: 1650 },
  ];

  return (
    <div className="pb-24 min-h-screen bg-gray-50">
      <div className="px-6 pt-32 pb-10 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-b-[2.5rem] shadow-xl mb-8 relative overflow-hidden">
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="text-left flex-1">
            <h1 className="text-3xl font-bold leading-tight mb-1">{t('menu.star-challenge')}</h1>
          </div>
          <div className="text-7xl shrink-0">⭐</div>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* User Score Card */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-100 mb-6 flex items-center justify-between">
          <div>
             <div className="text-gray-500 text-sm font-medium">{t('challenge.my_score')}</div>
             <div className="text-xs text-gray-400 mt-1">本週排名: 124</div>
          </div>
          <div className="text-3xl font-bold text-yellow-600">{totalPoints}</div>
        </div>
        
        {/* Leaderboard */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-50 to-white p-4 border-b border-gray-100">
             <h3 className="font-bold text-gray-800 flex items-center gap-2 text-lg">
                <span>🏆</span> {t('challenge.leaderboard_title')}
             </h3>
          </div>
          
          <div className="divide-y divide-gray-50">
            {mockLeaderboard.map((item) => (
              <div key={item.rank} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold italic text-sm
                    ${item.rank === 1 ? 'bg-yellow-100 text-yellow-600' : 
                      item.rank === 2 ? 'bg-gray-100 text-gray-600' : 
                      item.rank === 3 ? 'bg-orange-100 text-orange-600' : 'text-gray-400'}`}>
                    {item.rank}
                  </div>
                  <span className="text-sm font-bold text-gray-700">{item.user}</span>
                </div>
                <span className="text-sm font-bold text-brand-green bg-green-50 px-2 py-0.5 rounded">
                  {item.score} {t('challenge.score_suffix')}
                </span>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-gray-50 text-center text-xs text-gray-400">
             排行榜每週一 00:00 更新
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;