import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="pb-24 min-h-screen bg-gray-50 font-sans">
      
      {/* Hero: Space/Connection Theme */}
      <div className="relative pt-32 pb-16 px-6 bg-brand-dark overflow-hidden rounded-b-[3rem] shadow-2xl mb-8">
        {/* Animated Background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-600/20 rounded-full blur-[80px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="relative z-10 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-4 py-1 text-xs font-bold text-blue-300 mb-4 border border-white/10 shadow-lg">
            {t('contact.hero_subtitle')}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-xl">
            {t('contact.hero_title')}
          </h1>
        </div>
      </div>

      <div className="px-4 space-y-8">
        
        {/* 1. Holographic ID Card (Office Info) */}
        <div className="perspective-1000">
           <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02] border border-gray-700/50">
              {/* Holographic Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-30 skew-x-12 animate-slide-in"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[180px]">
                 <div className="flex justify-between items-start">
                    <div>
                       <div className="text-2xl mb-2">🇲🇴</div>
                       <h2 className="font-bold text-lg leading-tight whitespace-pre-line text-gray-100">{t('contact.dept_name')}</h2>
                    </div>
                    <div className="text-4xl opacity-10 font-black tracking-tighter">DSI</div>
                 </div>

                 <div className="space-y-3 mt-6 text-sm">
                    <div className="flex items-start gap-3">
                       <span className="text-blue-400">📍</span>
                       <span className="text-gray-300 text-xs">{t('contact.dept_address')}</span>
                    </div>
                    <div className="flex items-start gap-3">
                       <span className="text-blue-400">🕒</span>
                       <span className="text-gray-300 text-xs">{t('contact.office_hours')}</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* 2. Speed Dial Action Grid */}
        <div className="grid grid-cols-2 gap-3">
           <a href="tel:+85328370777" className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 active:scale-95 transition-all group">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                 📞
              </div>
              <div className="text-center">
                 <div className="text-xs text-gray-400 font-bold uppercase">{t('contact.phone_label')}</div>
                 <div className="font-mono font-bold text-gray-800 text-sm mt-0.5">2837 0777</div>
              </div>
           </a>
           
           <div 
             onClick={() => handleCopy('info@dsi.gov.mo', 'email')}
             className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 active:scale-95 transition-all group cursor-pointer relative"
           >
              {copied === 'email' && <div className="absolute top-2 right-2 bg-black text-white text-[10px] px-2 py-0.5 rounded animate-fade-in">{t('contact.copy_success')}</div>}
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                 ✉️
              </div>
              <div className="text-center">
                 <div className="text-xs text-gray-400 font-bold uppercase">{t('contact.email_label')}</div>
                 <div className="font-mono font-bold text-gray-800 text-sm mt-0.5">info@dsi.gov.mo</div>
              </div>
           </div>

           <a href="tel:+861012308" className="col-span-2 bg-red-600 p-4 rounded-2xl shadow-lg shadow-red-200 flex items-center justify-between px-6 active:scale-[0.98] transition-all">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white animate-pulse">🆘</div>
                 <div>
                    <div className="text-red-100 text-xs font-bold uppercase tracking-wider">{t('contact.emergency_title')}</div>
                    <div className="text-white font-mono font-bold text-xl">+86 10 12308</div>
                 </div>
              </div>
              <div className="text-white opacity-80 text-2xl">&rarr;</div>
           </a>
        </div>

        {/* 3. Social Matrix */}
        <div>
           <h3 className="text-sm font-bold text-gray-400 mb-3 px-1 uppercase tracking-wider">{t('contact.social_title')}</h3>
           <div className="flex gap-3">
              <div className="flex-1 bg-green-50 rounded-xl p-4 border border-green-100 flex flex-col items-center gap-2 cursor-pointer hover:bg-green-100 transition-colors">
                 <div className="text-3xl text-green-600">💬</div>
                 <span className="text-xs font-bold text-green-800">{t('contact.social_wechat')}</span>
              </div>
              <a href="#" className="flex-1 bg-blue-50 rounded-xl p-4 border border-blue-100 flex flex-col items-center gap-2 hover:bg-blue-100 transition-colors">
                 <div className="text-3xl text-blue-600">🇫</div>
                 <span className="text-xs font-bold text-blue-800">{t('contact.social_facebook')}</span>
              </a>
           </div>
        </div>

        {/* 4. Chat UI Feedback Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
           <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-bold text-sm text-gray-700">{t('contact.feedback_title')}</span>
           </div>
           
           {!sent ? (
              <form onSubmit={handleSubmit} className="p-4 space-y-3">
                 <div className="bg-gray-50 rounded-xl p-3 flex items-start gap-2">
                    <span className="text-lg mt-0.5">👤</span>
                    <input 
                      type="text" 
                      required
                      placeholder={t('contact.form_name')}
                      className="bg-transparent w-full text-sm outline-none placeholder-gray-400"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                 </div>
                 <div className="bg-gray-50 rounded-xl p-3 flex items-start gap-2">
                    <span className="text-lg mt-0.5">📧</span>
                    <input 
                      type="email" 
                      required
                      placeholder={t('contact.form_email')}
                      className="bg-transparent w-full text-sm outline-none placeholder-gray-400"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                 </div>
                 <div className="bg-gray-50 rounded-xl p-3 flex items-start gap-2">
                    <span className="text-lg mt-0.5">✏️</span>
                    <textarea 
                      required
                      rows={3}
                      placeholder={t('contact.form_message')}
                      className="bg-transparent w-full text-sm outline-none placeholder-gray-400 resize-none"
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                    />
                 </div>
                 <button type="submit" className="w-full bg-brand-blue text-white py-3 rounded-xl font-bold shadow-md active:scale-[0.98] transition-transform">
                    {t('contact.form_submit')}
                 </button>
              </form>
           ) : (
              <div className="p-8 text-center animate-fade-in">
                 <div className="text-4xl mb-2">📨</div>
                 <p className="font-bold text-gray-800">{t('contact.success_message')}</p>
              </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default Contact;