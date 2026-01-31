
import React, { useEffect, useRef, useState } from 'react';
import { 
  RefreshCw, Globe, Briefcase, Bookmark, ChevronDown, 
  Lock, TrendingUp, TrendingDown, Info, ShieldAlert, 
  BarChart3, Target, Gauge, Zap, Share2
} from 'lucide-react';
import Footer from '../components/Footer';

interface ProductViewProps {
  productName: string;
}

const ProductView: React.FC<ProductViewProps> = ({ productName }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('Overview');
  const [timeframe, setTimeframe] = useState('1D');

  // Mapping internal names to Indian Market Symbols
  const getSymbol = (name: string) => {
    switch (name.toLowerCase()) {
      case 'gold': return 'MCX:GOLD1!';
      case 'silver': return 'MCX:SILVER1!';
      case 'indices': return 'NSE:NIFTY';
      case 'stocks': return 'NSE:RELIANCE';
      case 'mutual funds': return 'NSE:NIFTYBEES';
      case 'etfs': return 'NSE:GOLDBEES';
      default: return 'NSE:NIFTY';
    }
  };

  const getTicker = (name: string) => {
    switch (name.toLowerCase()) {
      case 'gold': return 'GOLD-INDIA';
      case 'silver': return 'SILVER-INDIA';
      case 'indices': return 'NIFTY50';
      case 'stocks': return 'RELIANCE';
      case 'mutual funds': return 'NIFTYBEES';
      case 'etfs': return 'GOLDBEES';
      default: return 'NSE';
    }
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    chartContainerRef.current.innerHTML = '';
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": getSymbol(productName),
      "interval": timeframe === '1D' ? '5' : '60',
      "timezone": "Asia/Kolkata",
      "theme": "light",
      "style": "3", // Area chart
      "locale": "en",
      "enable_publishing": false,
      "hide_top_toolbar": false,
      "hide_legend": true,
      "save_image": false,
      "container_id": "tv_chart_container",
      "support_host": "https://www.tradingview.com"
    });
    
    chartContainerRef.current.appendChild(script);
  }, [productName, timeframe, activeTab]);

  return (
    <div className="flex-1 flex flex-col bg-white">
      <main className="max-w-7xl mx-auto w-full px-4 py-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar: Scorecard and Summary */}
          <div className="lg:w-[320px] shrink-0 space-y-6">
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 leading-tight">
                    {productName} {productName.toLowerCase() === 'gold' || productName.toLowerCase() === 'silver' ? 'Spot' : ''}
                  </h1>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{getTicker(productName)}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-slate-400 hover:text-indigo-600 transition border border-slate-100 rounded-lg">
                    <Bookmark size={18} />
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-slate-900 tracking-tighter">₹2,491.50</span>
                  <span className="text-sm font-bold text-rose-500 flex items-center">
                    <TrendingDown size={14} /> 9.99% (-15.12)
                  </span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Tracking Live {productName} Data</p>
              </div>

              <button className="w-full bg-[#1b212d] hover:bg-slate-800 text-white font-black py-4 rounded-xl transition shadow-xl text-xs uppercase tracking-[0.2em] mb-4">
                Place Order
              </button>
            </div>

            {/* Scorecard Component */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-tighter">Scorecard</h3>
                <Info size={14} className="text-slate-400" />
              </div>
              
              <div className="divide-y divide-slate-100">
                {[
                  { label: 'Performance', status: 'Avg', desc: 'Return has been average, nothing exciting vs others', color: 'amber' },
                  { label: 'Valuation', status: 'High', desc: 'Current valuation is higher than historical averages', color: 'rose' },
                  { label: 'Growth', status: 'Low', desc: 'Aggregated growth signals show stagnant momentum', color: 'rose' },
                  { label: 'Profitability', status: 'High', desc: 'Strong margins sustained over last 3 years', color: 'emerald' },
                  { label: 'Entry Point', status: 'Avg', desc: 'Stock is not yet in overbought territory', color: 'amber' },
                  { label: 'Red Flags', status: 'None', desc: 'No ASM/GSM or promoter pledging concerns', color: 'emerald' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 group hover:bg-slate-50 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-slate-700">{item.label}</span>
                      <span className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter bg-${item.color}-50 text-${item.color}-600 border border-${item.color}-100`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-medium group-hover:text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content: Chart and Tabs */}
          <div className="flex-1 min-w-0">
            
            {/* Nav Tabs and Meta */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 mb-6 gap-4">
              <div className="flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide w-full sm:w-auto">
                {['Overview', 'Sentiment', 'Forecast', 'Financials', 'Events', 'News'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-xs font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-t-full"></div>}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4 pb-4 sm:pb-0 px-4 shrink-0">
                <span className="text-xs font-bold text-slate-400">936 Analysts watching</span>
                <button className="p-2 text-slate-400 hover:text-indigo-600 transition">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {activeTab === 'Overview' ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Session High</p>
                    <p className="text-lg font-black text-slate-900 tracking-tight">₹151.38</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Session Low</p>
                    <p className="text-lg font-black text-slate-900 tracking-tight">₹132.00</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Return YTD</p>
                    <p className="text-lg font-black text-rose-500 tracking-tight">▼ 9.99%</p>
                  </div>
                  <div className="p-4 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-100 flex items-center justify-center">
                    <div className="flex gap-1.5 overflow-x-auto no-scrollbar p-0.5">
                      {['1D', '1W', '1M', '1Y', 'SIP'].map(t => (
                        <button 
                          key={t}
                          onClick={() => setTimeframe(t)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${timeframe === t ? 'bg-white text-indigo-600 scale-105' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Interactive Chart (Flowchart replacement) */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-50/50 bg-slate-50 relative">
                   <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
                     <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                     <span className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">Live Flow Stream</span>
                   </div>
                  <div className="h-[500px]" ref={chartContainerRef}>
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <RefreshCw className="animate-spin text-indigo-500 mx-auto mb-4" size={32} />
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Hydrating Live Feed...</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insights Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* AI Forecast */}
                  <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-indigo-200 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors"><Target size={18}/></div>
                      <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Price Forecast</h4>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between items-end mb-2">
                         <span className="text-[10px] font-bold text-slate-400">Next Target</span>
                         <span className="text-lg font-black text-emerald-600">₹2,640.00</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-emerald-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-relaxed font-medium">85% of institutional indicators suggest a bullish crossover in the current frame.</p>
                  </div>

                  {/* Risk Analysis */}
                  <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-rose-200 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-rose-50 text-rose-600 rounded-lg group-hover:bg-rose-500 group-hover:text-white transition-colors"><Gauge size={18}/></div>
                      <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Risk Analysis</h4>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                       <div className="flex-1">
                         <p className="text-xl font-black text-slate-900 tracking-tighter">MODERATE</p>
                         <p className="text-[10px] font-bold text-slate-400">Risk/Reward: 1:2.4</p>
                       </div>
                       <ShieldAlert className="text-amber-500" size={32} />
                    </div>
                    <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Primary exposure in USD/INR volatility affecting the gold spot valuation.</p>
                  </div>

                  {/* Entry Signal */}
                  <div className="p-6 bg-[#1b212d] rounded-2xl shadow-xl shadow-slate-200 text-white group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white/10 text-emerald-400 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors"><Zap size={18}/></div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-300">Optimal Entry</h4>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-black text-emerald-400">BUY</span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-tighter">BELOW ₹2,420</span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-medium mb-4">Sentiment score: 72/100 (Greed Phase). Momentum is consolidating for break.</p>
                    <button className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-[9px] font-black uppercase tracking-widest transition-all">Set Entry Alert</button>
                  </div>

                </div>

                {/* Yearly Analysis Summary */}
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <BarChart3 size={16} className="text-indigo-600" /> Yearly Growth Trajectory
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Over the last 12 months, {productName} has demonstrated a resilience coefficient of 0.82 against global equity drawdowns. 
                      Institutional accumulation has increased by 14% since Q3, primarily driven by hedging strategies in emerging markets.
                    </p>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase">
                          <span>Institutional Interest</span>
                          <span className="text-emerald-500">Strong Buy</span>
                       </div>
                       <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase">
                          <span>Retail Sentiment</span>
                          <span className="text-amber-500">Neutral</span>
                       </div>
                       <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase">
                          <span>Supply Cycle</span>
                          <span className="text-rose-500">Tight</span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Similar Stocks / Alternatives */}
                <div className="pt-4 pb-12">
                  <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6">Similar High-Liquidity Entities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['GOLDBEES', 'SILVERBEES', 'MCX-GOLD-MAR', 'AXIS-GOLD'].map(s => (
                      <div key={s} className="p-4 border border-slate-100 rounded-xl hover:shadow-lg hover:border-indigo-100 transition-all cursor-pointer group bg-white">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{s}</span>
                          <TrendingUp size={12} className="text-emerald-500" />
                        </div>
                        <div className="flex justify-between items-end">
                           <p className="text-sm font-bold text-slate-700">₹{(Math.random() * 100 + 40).toFixed(2)}</p>
                           <p className="text-[9px] font-black text-emerald-500">+1.24%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <Lock size={40} className="text-slate-300 mb-6" />
                <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2">Advanced Analytics Module</h3>
                <p className="text-xs text-slate-400 max-w-xs font-medium uppercase tracking-widest leading-loose">
                  Real-time {activeTab} data streams are being computed. Please upgrade your seat to Access Level-4 for full terminal visibility.
                </p>
              </div>
            )}

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default ProductView;
