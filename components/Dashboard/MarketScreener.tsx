
import React from 'react';
import { TrendingUp, TrendingDown, ExternalLink, Activity } from 'lucide-react';
import { Stock } from '../../types';

interface MarketScreenerProps {
  onSeeAll: () => void;
}

const mockStocks: Stock[] = [
  { symbol: 'NSE: NIFTY 50', name: 'India Benchmark', price: 25318.55, change: -98.25, changePercent: -0.39, sentiment: 'negative' },
  { symbol: 'NSE: BANKNIFTY', name: 'Banking Sector', price: 52494.25, change: -126.80, changePercent: -0.49, sentiment: 'negative' },
  { symbol: 'MCX: GOLD', name: 'Commodities Spot', price: 74497.27, change: 471.30, changePercent: 0.63, sentiment: 'positive' },
  { symbol: 'NSE: RELIANCE', name: 'Reliance Ind.', price: 2984.80, change: 12.35, changePercent: 0.41, sentiment: 'positive' },
  { symbol: 'NSE: TCS', name: 'IT Services', price: 4126.90, change: -22.45, changePercent: -0.54, sentiment: 'negative' },
  { symbol: 'NSE: HDFCBANK', name: 'Fin. Services', price: 1647.60, change: 8.10, changePercent: 0.49, sentiment: 'positive' },
];

const MarketScreener: React.FC<MarketScreenerProps> = ({ onSeeAll }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h3 className="font-black text-slate-900 tracking-tighter text-xl">Indian Market Pulse</h3>
          <span className="hidden sm:flex items-center gap-1.5 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-indigo-100">
            <Activity size={12} className="animate-pulse" /> Live NSE Data
          </span>
        </div>
        <button 
          onClick={onSeeAll}
          className="flex items-center gap-1.5 bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-2 rounded-full font-bold text-xs transition shadow-lg shadow-indigo-100"
        >
          Detailed Screener <ExternalLink size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y divide-slate-100 md:divide-y-0 md:divide-x divide-slate-100">
        {mockStocks.map((stock, i) => (
          <div key={stock.symbol} className={`p-6 hover:bg-slate-50 transition-colors cursor-pointer group ${i >= 3 ? 'md:border-t border-slate-100' : ''}`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">{stock.symbol}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase">{stock.name}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900">{stock.price.toLocaleString()}</p>
                <p className={`text-[10px] font-black flex items-center justify-end gap-1 ${stock.change >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {stock.change >= 0 ? <TrendingUp size={10}/> : <TrendingDown size={10}/>}
                  {Math.abs(stock.changePercent)}%
                </p>
              </div>
            </div>
            {/* Sparkline placeholder */}
            <div className="mt-4 h-10 w-full overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 100 20" className="w-full h-full stroke-current">
                <path 
                  d={stock.change >= 0 ? "M0 15 L20 12 L40 18 L60 8 L80 12 L100 2" : "M0 5 L20 18 L40 12 L60 15 L80 8 L100 18"}
                  fill="none" 
                  strokeWidth="3"
                  className={stock.change >= 0 ? 'text-emerald-500' : 'text-rose-500'}
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketScreener;
