
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Positive', value: 45, color: '#10b981' }, // emerald-500
  { name: 'Neutral', value: 30, color: '#94a3b8' }, // slate-400
  { name: 'Negative', value: 25, color: '#f43f5e' }, // rose-500
];

const SentimentWidget: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">Sentiment Intelligence</h3>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-36 h-36">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={65}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 space-y-4 w-full">
          {data.map(item => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm font-semibold text-slate-600">{item.name}</span>
              </div>
              <span className="text-sm font-black text-slate-900">{item.value}%</span>
            </div>
          ))}
          <div className="pt-3 mt-3 border-t border-slate-100">
            <p className="text-[10px] text-slate-400 font-medium leading-tight">Processed from 12.4k source signals in the last 60m.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentWidget;
