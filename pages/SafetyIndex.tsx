import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SAFETY_QUESTIONS } from '../constants';
import { useLanguage } from '../LanguageContext';

const SafetyIndex: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const toggleAnswer = (id: number) => {
    setAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const calculateData = () => {
    const categories = {
      health: 0,
      crime: 0,
      political: 0
    };
    
    // Normalize simple counts for the demo chart
    Object.entries(answers).forEach(([key, val]) => {
      if (val) {
        const q = SAFETY_QUESTIONS.find(sq => sq.id === Number(key));
        if (q && (q.category === 'health' || q.category === 'crime' || q.category === 'political')) {
           categories[q.category] += 30; // Mock score weight
        }
      }
    });

    return [
      { subject: t('safety.subjects.health'), A: categories.health + 20, fullMark: 100 },
      { subject: t('safety.subjects.crime'), A: categories.crime + 20, fullMark: 100 },
      { subject: t('safety.subjects.political'), A: categories.political + 20, fullMark: 100 },
      { subject: t('safety.subjects.contact'), A: 80, fullMark: 100 },
      { subject: t('safety.subjects.docs'), A: answers[4] ? 90 : 20, fullMark: 100 },
    ];
  };

  const score = Object.values(answers).filter(Boolean).length * 20;

  return (
    <div className="pb-24 min-h-screen bg-gray-50">
      <div className="px-6 pt-32 pb-10 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-b-[2.5rem] shadow-xl mb-8 relative overflow-hidden">
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="text-left flex-1">
            <h1 className="text-3xl font-bold leading-tight mb-1">海外旅行安全指數小測試</h1>
          </div>
          <div className="text-7xl shrink-0">📊</div>
        </div>
      </div>

      <div className="px-4">
        {!submitted ? (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg text-blue-800 text-sm">
              {t('safety.intro')}
            </div>
            {SAFETY_QUESTIONS.map(q => (
              <div key={q.id} className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id={`q-${q.id}`}
                  checked={!!answers[q.id]}
                  onChange={() => toggleAnswer(q.id)}
                  className="mt-1 w-5 h-5 text-brand-green rounded focus:ring-brand-green"
                />
                <label htmlFor={`q-${q.id}`} className="text-gray-700 text-sm font-medium leading-relaxed">
                  {t(`data.safety_questions.${q.id}`)}
                </label>
              </div>
            ))}
            <button 
              onClick={() => setSubmitted(true)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold shadow-lg mt-6 active:scale-95 transition-transform"
            >
              {t('safety.generate_btn')}
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
            <h2 className="text-center text-xl font-bold text-gray-800 mb-2">{t('safety.result_title')}</h2>
            <div className={`text-center text-5xl font-bold mb-6 ${score > 60 ? 'text-green-500' : 'text-orange-500'}`}>
              {score}
            </div>

            <div className="h-64 w-full -ml-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={calculateData()}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                  <Radar
                    name="Safety"
                    dataKey="A"
                    stroke="#4CAF50"
                    fill="#4CAF50"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 space-y-3">
              <h3 className="font-bold text-gray-800">{t('safety.suggestions.title')}</h3>
              {!answers[4] && (
                 <div className="p-3 bg-red-50 text-red-700 text-sm rounded border border-red-100">
                   {t('safety.suggestions.passport')}
                 </div>
              )}
              {!answers[1] && (
                 <div className="p-3 bg-red-50 text-red-700 text-sm rounded border border-red-100">
                   {t('safety.suggestions.insurance')}
                 </div>
              )}
              {Object.values(answers).every(Boolean) && (
                <div className="p-3 bg-green-50 text-green-700 text-sm rounded border border-green-100">
                  {t('safety.suggestions.success')}
                </div>
              )}
            </div>
            
            <button 
              onClick={() => { setSubmitted(false); setAnswers({}); }}
              className="w-full border border-gray-300 text-gray-600 py-3 rounded-lg font-medium mt-8"
            >
              {t('safety.retake_btn')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SafetyIndex;