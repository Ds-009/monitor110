
import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip } from 'recharts';

const trendData = [
  { time: '10:00', val: 100 },
  { time: '11:00', val: 105 },
  { time: '12:00', val: 102 },
  { time: '13:00', val: 110 },
  { time: '14:00', val: 108 },
  { time: '15:00', val: 115 },
  { time: '16:00', val: 120 },
];

const TrendIndicator: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Aggregate Market Trend</h3>
        <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">+2.4%</span>
      </div>
      <div className="h-32 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData}>
            <XAxis dataKey="time" hide />
            <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ color: '#4f46e5', fontWeight: 'bold' }}
            />
            <Line 
              type="monotone" 
              dataKey="val" 
              stroke="#4f46e5" 
              strokeWidth={4} 
              dot={false} 
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
        <div className="flex flex-col">
            <span>Entry</span>
            <span className="text-slate-900 text-xs">25,318.55</span>
        </div>
        <div className="flex flex-col text-right">
            <span>Projected Peak</span>
            <span className="text-slate-900 text-xs">25,894.25</span>
        </div>
      </div>
    </div>
  );
};

export default TrendIndicator;
