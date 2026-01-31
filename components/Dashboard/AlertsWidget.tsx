
import React from 'react';
import { AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

const AlertsWidget: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Risk & AI Signals</h3>
        <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">
            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.5)]"></span>
            <span className="text-[10px] text-slate-600 font-black uppercase tracking-tighter">Live Monitor</span>
        </div>
      </div>
      
      <div className="space-y-3 flex-1">
        <div className="flex items-start gap-3 p-3 bg-rose-50 border border-rose-100 rounded-xl">
          <AlertTriangle className="text-rose-500 shrink-0" size={18} />
          <div>
            <p className="text-xs font-black text-rose-900 leading-tight">Sector Volatility Warning</p>
            <p className="text-[10px] text-rose-700/80 mt-0.5">Sudden spike in negative sentiment across Tech Indices.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-indigo-50 border border-indigo-100 rounded-xl">
          <Zap className="text-indigo-600 shrink-0" size={18} />
          <div>
            <p className="text-xs font-black text-indigo-900 leading-tight">Arbitrage Signal</p>
            <p className="text-[10px] text-indigo-700/80 mt-0.5">High probability buy detected in Renewable Energy ETFs.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl opacity-60">
          <ShieldCheck className="text-slate-400 shrink-0" size={18} />
          <div>
            <p className="text-xs font-bold text-slate-600 leading-tight">Scanning Engines Active</p>
            <p className="text-[10px] text-slate-500 mt-0.5">System status: Green. Latency: 14ms.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-100 flex justify-center">
        <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition">View AI Log Insights →</button>
      </div>
    </div>
  );
};

export default AlertsWidget;
