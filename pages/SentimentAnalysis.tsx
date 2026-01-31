
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import { Info, AlertCircle, TrendingUp, HelpCircle } from 'lucide-react';
import Footer from '../components/Footer';

const data = [
  { name: 'Extreme Fear', value: 25, color: '#ef4444' },
  { name: 'Fear', value: 25, color: '#f97316' },
  { name: 'Greed', value: 25, color: '#84cc16' },
  { name: 'Extreme Greed', value: 25, color: '#10b981' },
];

const SentimentAnalysis: React.FC = () => {
  const currentVal = 72; // Out of 100, Greed area

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <main className="max-w-4xl mx-auto w-full px-4 py-12">
        <div className="text-center mb-12">
          <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-2 block">Behavioral Analysis Engine</span>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">Market Mood Index</h1>
          <p className="text-slate-500 text-sm max-w-lg mx-auto font-medium">
            Real-time calculation of market sentiment based on volatility, social momentum, and demand signals.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-2xl shadow-indigo-100/50 flex flex-col items-center">
          <div className="w-full max-w-md h-[300px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="100%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={100}
                  outerRadius={160}
                  paddingAngle={0}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} opacity={0.8} />
                  ))}
                  <Label 
                    value={currentVal.toString()} 
                    position="centerBottom" 
                    dy={-40}
                    style={{ fontSize: '48px', fontWeight: '900', fill: '#0f172a' }} 
                  />
                  <Label 
                    value="GREED" 
                    position="centerBottom" 
                    dy={-10}
                    style={{ fontSize: '14px', fontWeight: '800', fill: '#84cc16', textTransform: 'uppercase', letterSpacing: '2px' }} 
                  />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* The pointer */}
            <div 
                className="absolute left-1/2 bottom-0 w-1 h-32 bg-slate-900 origin-bottom transition-transform duration-1000 ease-out"
                style={{ transform: `translateX(-50%) rotate(${ (currentVal / 100 * 180) - 90 }deg)` }}
            >
                <div className="w-3 h-3 bg-slate-900 rounded-full absolute -top-1 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-8">
            {data.map(item => (
                <div key={item.name} className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-3 h-3 rounded-full mb-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">{item.name}</span>
                </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="text-amber-500" size={20} />
                    <h3 className="font-black text-slate-900 text-sm uppercase">Analysis Summary</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    The index is currently at <span className="text-lime-600 font-bold">72 (Greed)</span>. Historically, when the index hits this zone, we observe increased retail participation and overvaluation in mid-cap sectors. Monitor institutional outflow signals.
                </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="text-indigo-600" size={20} />
                    <h3 className="font-black text-slate-900 text-sm uppercase">Key Drivers</h3>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-slate-500 uppercase">Volatility (VIX)</span>
                        <span className="text-emerald-500">Low Risk</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-slate-500 uppercase">Social Momentum</span>
                        <span className="text-amber-500">High Euphoria</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-slate-500 uppercase">Safe Haven Demand</span>
                        <span className="text-rose-500">Decreasing</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-12 text-center">
            <button className="flex items-center gap-2 mx-auto text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition">
                <HelpCircle size={14} /> How is this index calculated?
            </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SentimentAnalysis;
