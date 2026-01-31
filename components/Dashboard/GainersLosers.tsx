
import React from 'react';
import { ArrowUpRight, ArrowDownRight, Zap } from 'lucide-react';

const gainers = [
  { symbol: 'NSE: RELIANCE', price: '2,984.50', change: '+2.45%' },
  { symbol: 'NSE: ADANIENT', price: '3,212.10', change: '+1.98%' },
  { symbol: 'NSE: HDFCBANK', price: '1,642.35', change: '+1.20%' },
];

const losers = [
  { symbol: 'NSE: ZOMATO', price: '254.10', change: '-4.12%' },
  { symbol: 'NSE: PAYTM', price: '685.00', change: '-3.80%' },
  { symbol: 'NSE: INFY', price: '1,890.45', change: '-2.15%' },
];

const GainersLosers: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden h-full shadow-sm">
      <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Momentum Tracking</h3>
        <Zap size={14} className="text-amber-500 animate-pulse" />
      </div>
      <div className="p-6 grid grid-cols-1 gap-8">
        {/* Gainers */}
        <div>
          <h4 className="text-[10px] font-black text-emerald-600 uppercase mb-4 tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span> Top Gainers
          </h4>
          <div className="space-y-2">
            {gainers.map(item => (
              <div key={item.symbol} className="flex items-center justify-between p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-100 transition-all hover:scale-[1.02] cursor-pointer">
                <span className="font-black text-[11px] text-slate-900 tracking-tight">{item.symbol}</span>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-700">{item.price}</p>
                  <p className="text-[10px] text-emerald-600 flex items-center justify-end font-black">
                    <ArrowUpRight size={10} /> {item.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Losers */}
        <div>
          <h4 className="text-[10px] font-black text-rose-500 uppercase mb-4 tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span> Top Losers
          </h4>
          <div className="space-y-2">
            {losers.map(item => (
              <div key={item.symbol} className="flex items-center justify-between p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-100 transition-all hover:scale-[1.02] cursor-pointer">
                <span className="font-black text-[11px] text-slate-900 tracking-tight">{item.symbol}</span>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-700">{item.price}</p>
                  <p className="text-[10px] text-rose-500 flex items-center justify-end font-black">
                    <ArrowDownRight size={10} /> {item.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GainersLosers;
