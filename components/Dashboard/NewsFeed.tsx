
import React from 'react';
import { Newspaper, Clock, TrendingUp, TrendingDown } from 'lucide-react';
import { NewsItem } from '../../types';

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Fed Maintains Rates: Impact on Emerging Markets Analyzed',
    source: 'Financial Times',
    time: '2h ago',
    impact: 'up',
    summary: 'Central bank signals caution, leading to moderate optimism in Asian indices.'
  },
  {
    id: '2',
    title: 'Semiconductor Supply Chain Disruptions Intensify',
    source: 'Reuters',
    time: '4h ago',
    impact: 'down',
    summary: 'New logistics bottlenecks in Southeast Asia affecting tech stocks negatively.'
  },
  {
    id: '3',
    title: 'EV Sector Sees Surge in Social Sentiment',
    source: 'Monitor110 Signals',
    time: '5h ago',
    impact: 'up',
    summary: 'Aggregation of forum data shows 35% increase in positive mention of battery tech.'
  }
];

const NewsFeed: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden h-full flex flex-col shadow-sm">
      <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
        <Newspaper size={16} className="text-indigo-600" />
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Intelligence Stream</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {mockNews.map(item => (
          <div key={item.id} className="group cursor-pointer">
            <div className="flex justify-between items-start gap-4 mb-2">
              <h4 className="text-sm font-black text-slate-900 group-hover:text-indigo-600 transition line-clamp-2 leading-snug">{item.title}</h4>
              <div className={`shrink-0 p-1 rounded-lg ${item.impact === 'up' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-500 border border-rose-100'}`}>
                {item.impact === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              </div>
            </div>
            <p className="text-xs text-slate-500 mb-3 line-clamp-2 leading-relaxed">{item.summary}</p>
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-tight text-slate-400">
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-slate-300" /> {item.time}</span>
              <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600">{item.source}</span>
            </div>
            <div className="mt-6 border-b border-slate-50"></div>
          </div>
        ))}
      </div>
      <button className="p-4 text-xs font-black text-indigo-600 hover:bg-slate-50 transition border-t border-slate-50 uppercase tracking-widest">
        Load All Signals
      </button>
    </div>
  );
};

export default NewsFeed;
