import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';
import { useLanguage } from '../LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-x-hidden font-sans pb-[env(safe-area-inset-bottom)]">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 flex items-center justify-between
          ${isHome && !scrolled ? 'bg-gradient-to-b from-black/60 to-transparent pt-6 pb-4' : 'bg-brand-red shadow-md py-3'}
        `}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group z-50 relative">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors shrink-0">
             <span className="font-serif font-bold text-white text-base md:text-lg">EQ</span>
          </div>
          <span className={`font-bold text-white text-base md:text-lg tracking-wide whitespace-nowrap ${isHome && !scrolled ? 'text-shadow-sm' : ''}`}>
            {t('app.title')}
          </span>
        </Link>
        
        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3 z-50 relative">
          
          {/* Menu Button */}
          <button 
            onClick={toggleMenu}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur border border-white/30 flex flex-col items-center justify-center gap-1.5 hover:bg-white/20 transition-colors focus:outline-none active:scale-95 touch-manipulation"
            aria-label="Menu"
          >
            <div className="w-4 md:w-5 h-0.5 bg-white rounded-full"></div>
            <div className="w-4 md:w-5 h-0.5 bg-white rounded-full"></div>
            <div className="w-4 md:w-5 h-0.5 bg-white rounded-full"></div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[100vw]">
        {children}
      </main>

      {/* Sidebar Overlay Menu - Responsive Width */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 h-[100dvh] w-[75vw] max-w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-5 md:p-6 flex justify-between items-center bg-brand-red text-white pt-safe-top">
            <span className="font-bold text-lg md:text-xl tracking-wider">{t('menu.title')}</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl opacity-70 hover:opacity-100 w-8 h-8 flex items-center justify-center active:scale-90">&times;</button>
          </div>
          <div className="overflow-y-auto flex-1 py-2 overscroll-contain">
            {MENU_ITEMS.map((item) => (
              <Link 
                key={item.id} 
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-6 md:px-8 py-3.5 md:py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors group ${location.pathname === item.path ? 'bg-red-50' : ''}`}
              >
                <span className="mr-4 text-lg md:text-xl w-6 text-center group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                <span className={`text-sm md:text-base font-medium ${location.pathname === item.path ? 'text-brand-red' : 'text-gray-700'}`}>
                  {t(`menu.${item.id}`)}
                </span>
              </Link>
            ))}
          </div>
          <div className="p-4 md:p-6 bg-gray-50 text-center text-xs text-gray-400 pb-safe-bottom">
            {t('app.copyright')}
          </div>
        </div>
      </div>

      {/* Floating SOS Button - Safe Area Aware */}
      <Link 
        to="/emergency"
        className="fixed bottom-6 right-5 md:bottom-8 md:right-6 bg-brand-red text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl shadow-red-900/30 flex flex-col items-center justify-center z-40 hover:scale-105 transition-transform border-4 border-white/90 animate-pulse mb-[env(safe-area-inset-bottom)]"
        aria-label="Emergency SOS"
      >
        <span className="text-xl md:text-2xl">🆘</span>
      </Link>
    </div>
  );
};

export default Layout;