import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

interface FlashcardProps {
  question: string;
  answer: string;
  icon: string;
  color: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer, icon, color }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 w-full h-64 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front */}
        <div className={`absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg border-2 border-white/20 ${color} text-white`}>
          <div className="text-6xl mb-4 animate-bounce">{icon}</div>
          <h3 className="text-xl font-bold leading-tight">{question}</h3>
          <div className="absolute bottom-4 text-xs font-bold opacity-70 uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
            Tap to Flip
          </div>
        </div>

        {/* Back */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg bg-white text-gray-800 border-2 border-gray-100`}>
          <div className="text-4xl mb-3">💡</div>
          <p className="text-lg font-bold leading-relaxed">{answer}</p>
          <div className="mt-4 text-xs text-brand-blue font-bold">
            Got it! 👍
          </div>
        </div>
      </div>
    </div>
  );
};

interface MythProps {
  id: number;
  question: string;
  answer: string;
  isCorrectTrue: boolean;
}

// FIX: Removed 'id' from destructuring as it was unused (TS6133)
const MythBuster: React.FC<MythProps> = ({ question, answer, isCorrectTrue }) => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<'true' | 'false' | null>(null);

  const handleSelect = (choice: 'true' | 'false') => {
    setSelected(choice);
  };

  const isCorrect = (selected === 'true' && isCorrectTrue) || (selected === 'false' && !isCorrectTrue);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
      <h3 className="font-bold text-gray-800 text-lg mb-4 leading-tight">{question}</h3>
      
      {!selected ? (
        <div className="flex gap-3">
          <button 
            onClick={() => handleSelect('true')}
            className="flex-1 py-3 bg-green-50 text-green-700 font-bold rounded-xl border border-green-100 hover:bg-green-100 active:scale-95 transition-all"
          >
            {t('hot_knowledge.myth_true')}
          </button>
          <button 
            onClick={() => handleSelect('false')}
            className="flex-1 py-3 bg-red-50 text-red-700 font-bold rounded-xl border border-red-100 hover:bg-red-100 active:scale-95 transition-all"
          >
            {t('hot_knowledge.myth_false')}
          </button>
        </div>
      ) : (
        <div className={`p-4 rounded-xl text-center animate-fade-in ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
           <div className="text-3xl mb-1">{isCorrect ? '🎉' : '😅'}</div>
           <div className="font-bold mb-1">{isCorrect ? 'Bingo!' : 'Oops!'}</div>
           <p className="text-sm opacity-90">{answer}</p>
        </div>
      )}
    </div>
  );
};

const HotKnowledge: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-24 min-h-screen bg-gray-50 font-sans">
      
      {/* Hero: Vibrant Gradient */}
      <div className="relative pt-32 pb-16 px-6 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-b-[3rem] shadow-2xl overflow-hidden mb-8">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-md rounded-full px-4 py-1 text-xs font-bold text-white mb-2 border border-white/30 shadow-sm">
            {t('hot_knowledge.hero_subtitle')}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-md">
            {t('hot_knowledge.hero_title')}
          </h1>
        </div>
      </div>

      <div className="px-4 space-y-10">

        {/* Section 1: 3D Flashcards Deck */}
        <section>
          <div className="flex items-center gap-2 mb-4 px-1">
             <span className="text-2xl animate-spin-slow">🃏</span>
             <div>
               <h2 className="text-xl font-bold text-gray-800 leading-none">{t('hot_knowledge.deck_title')}</h2>
               <p className="text-xs text-gray-500">{t('hot_knowledge.deck_desc')}</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <Flashcard 
               question={t('hot_knowledge.card_1_q')} 
               answer={t('hot_knowledge.card_1_a')}
               icon="👮"
               color="bg-gradient-to-br from-blue-500 to-blue-700"
             />
             <Flashcard 
               question={t('hot_knowledge.card_2_q')} 
               answer={t('hot_knowledge.card_2_a')}
               icon="✈️"
               color="bg-gradient-to-br from-teal-400 to-emerald-600"
             />
             <Flashcard 
               question={t('hot_knowledge.card_3_q')} 
               answer={t('hot_knowledge.card_3_a')}
               icon="💰"
               color="bg-gradient-to-br from-yellow-400 to-orange-500"
             />
             <Flashcard 
               question={t('hot_knowledge.card_4_q')} 
               answer={t('hot_knowledge.card_4_a')}
               icon="👔"
               color="bg-gradient-to-br from-purple-500 to-indigo-600"
             />
          </div>
        </section>

        {/* Section 2: Myth Buster Interactive */}
        <section>
          <div className="flex items-center gap-2 mb-4 px-1">
             <span className="text-2xl">🕵️‍♂️</span>
             <div>
               <h2 className="text-xl font-bold text-gray-800 leading-none">{t('hot_knowledge.myth_title')}</h2>
               <p className="text-xs text-gray-500">{t('hot_knowledge.myth_desc')}</p>
             </div>
          </div>

          <div>
             <MythBuster 
               id={1} 
               question={t('hot_knowledge.myth_1_q')}
               answer={t('hot_knowledge.myth_1_ans')}
               isCorrectTrue={true}
             />
             <MythBuster 
               id={2} 
               question={t('hot_knowledge.myth_2_q')}
               answer={t('hot_knowledge.myth_2_ans')}
               isCorrectTrue={false}
             />
             <MythBuster 
               id={3} 
               question={t('hot_knowledge.myth_3_q')}
               answer={t('hot_knowledge.myth_3_ans')}
               isCorrectTrue={true}
             />
          </div>
        </section>

        {/* Section 3: Trending Tags Cloud */}
        <section className="pb-8">
           <h2 className="text-xl font-bold text-gray-800 mb-4 px-1">
             🔥 {t('hot_knowledge.tags_title')}
           </h2>
           <div className="flex flex-wrap gap-2">
              {['#VisaFree', '#LostPassport', '#12308', '#SafetyFirst', '#TravelTips', '#ConsularProtection', '#MacauID'].map((tag, i) => (
                 <span 
                   key={i}
                   className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-transform hover:scale-105 cursor-default ${
                     i % 3 === 0 ? 'bg-pink-50 text-pink-600 border-pink-100' : 
                     i % 3 === 1 ? 'bg-blue-50 text-blue-600 border-blue-100' : 
                     'bg-purple-50 text-purple-600 border-purple-100'
                   }`}
                 >
                   {tag}
                 </span>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
};

export default HotKnowledge;