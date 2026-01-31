
import React, { useState } from 'react';
import { Search, ChevronDown, LogOut, Info, PhoneCall, Radar, Activity } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  onProductSelect: (product: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout, onNavigate, onProductSelect }) => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        
        {/* Logo */}
        <div 
          onClick={() => onNavigate(Page.DASHBOARD)}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="p-1.5 bg-indigo-600 rounded-lg group-hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
            <Radar size={24} className="text-white" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-black text-slate-900 tracking-tighter">MONITOR110 2.0</span>
            <span className="text-[10px] font-bold text-indigo-600 tracking-[0.2em] uppercase">Intelligence</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search stocks, sentiment, global signals..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition text-sm"
            />
          </div>
        </div>

        {/* Links & Menus */}
        <div className="flex items-center gap-6">
          
          <button 
            onClick={() => onNavigate(Page.SENTIMENT_ANALYSIS)}
            className="hidden lg:flex items-center gap-2 text-slate-600 font-semibold hover:text-indigo-600 transition text-sm"
          >
            <Activity size={16} className="text-indigo-500" />
            Market Sentiment
          </button>

          {/* Products Dropdown */}
          <div className="relative">
            <button 
              onMouseEnter={() => setShowProductMenu(true)}
              onMouseLeave={() => setShowProductMenu(false)}
              className="flex items-center gap-1 text-slate-600 font-semibold hover:text-indigo-600 transition py-2 text-sm"
            >
              Products <ChevronDown size={14} />
            </button>
            {showProductMenu && (
              <div 
                onMouseEnter={() => setShowProductMenu(true)}
                onMouseLeave={() => setShowProductMenu(false)}
                className="absolute top-full left-0 mt-0 w-48 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden py-1 animate-in fade-in slide-in-from-top-2"
              >
                {['Gold', 'Silver', 'Mutual Funds', 'Indices', 'Stocks', 'ETFs'].map(p => (
                  <button 
                    key={p} 
                    onClick={() => {
                        onProductSelect(p);
                        setShowProductMenu(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Account Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowAccountMenu(!showAccountMenu)}
              className="flex items-center gap-2 bg-slate-50 hover:bg-white px-3 py-1.5 rounded-full border border-slate-200 transition-all hover:shadow-md"
            >
              <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white">FE</div>
              <span className="hidden sm:block text-xs font-bold text-slate-700 uppercase tracking-wider">Account</span>
              <ChevronDown size={14} className="text-slate-400" />
            </button>

            {showAccountMenu && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 z-[60] animate-in zoom-in-95 duration-100">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition">
                  <Info size={16} className="text-slate-400" /> About Us
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition">
                  <PhoneCall size={16} className="text-slate-400" /> Contact Us
                </button>
                <div className="my-1 border-t border-slate-100"></div>
                <button 
                  onClick={onLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition"
                >
                  <LogOut size={16} /> Logout Session
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
