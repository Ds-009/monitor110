
import React from 'react';
import { Filter, Download } from 'lucide-react';
import Footer from '../components/Footer';

const stocks = [
  { ticker: 'RELIANCE', name: 'Reliance Industries', price: '2,984.50', chg: '+2.45', vol: '12.4M', cap: '18.4T' },
  { ticker: 'TCS', name: 'Tata Consultancy Services', price: '4,120.35', chg: '+1.20', vol: '2.1M', cap: '14.8T' },
  { ticker: 'HDFCBANK', name: 'HDFC Bank Ltd', price: '1,642.10', chg: '+1.80', vol: '24.2M', cap: '12.1T' },
  { ticker: 'INFY', name: 'Infosys Ltd', price: '1,890.45', chg: '-2.15', vol: '8.5M', cap: '7.8T' },
  { ticker: 'ICICIBANK', name: 'ICICI Bank Ltd', price: '1,124.90', chg: '-0.45', vol: '15.6M', cap: '8.2T' },
  { ticker: 'BHARTIARTL', name: 'Bharti Airtel Ltd', price: '1,452.30', chg: '+0.85', vol: '5.2M', cap: '7.1T' },
  { ticker: 'ITC', name: 'ITC Ltd', price: '425.15', chg: '+1.10', vol: '32.1M', cap: '5.4T' },
  { ticker: 'SBIN', name: 'State Bank of India', price: '784.50', chg: '-1.30', vol: '18.9M', cap: '6.9T' },
];

const FullScreener: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <main className="max-w-7xl mx-auto w-full px-4 py-12">
        
        {/* Header Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-2 block">Global Signals Engine</span>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">Market Screener</h1>
            <p className="text-slate-500 text-sm font-medium">Monitoring 5,000+ instruments across 42 global exchanges.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-2xl text-xs font-bold text-slate-600 hover:shadow-md transition">
              <Filter size={16} className="text-indigo-600" /> Filters
            </button>
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-2xl text-xs font-bold text-slate-600 hover:shadow-md transition">
              <Download size={16} className="text-indigo-600" /> Data Export
            </button>
            <button className="flex items-center gap-2 bg-indigo-600 px-6 py-2.5 rounded-2xl text-xs font-black text-white hover:bg-indigo-700 transition shadow-xl shadow-indigo-100 uppercase tracking-widest">
               Execute Query
            </button>
          </div>
        </div>

        {/* Table View */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Ticker Entity</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Price</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Day Delta</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Volume</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Valuation</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Operations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {stocks.map((s) => (
                  <tr key={s.ticker} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{s.ticker}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{s.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 font-bold text-sm text-slate-700">{s.price}</td>
                    <td className={`px-8 py-5 font-black text-sm ${s.chg.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {s.chg}%
                    </td>
                    <td className="px-8 py-5 text-sm font-semibold text-slate-500">{s.vol}</td>
                    <td className="px-8 py-5 text-sm font-semibold text-slate-500">{s.cap}</td>
                    <td className="px-8 py-5 text-right">
                      <button className="bg-slate-50 group-hover:bg-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 border border-transparent hover:border-indigo-100 transition-all">Analyze Signal →</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default FullScreener;
