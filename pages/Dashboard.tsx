
import React from 'react';
import SentimentWidget from '../components/Dashboard/SentimentWidget';
import TrendIndicator from '../components/Dashboard/TrendIndicator';
import AlertsWidget from '../components/Dashboard/AlertsWidget';
import MarketScreener from '../components/Dashboard/MarketScreener';
import GainersLosers from '../components/Dashboard/GainersLosers';
import NewsFeed from '../components/Dashboard/NewsFeed';
import Footer from '../components/Footer';

interface DashboardProps {
  onSeeAll: () => void;
  onAnalyzeSentiment: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSeeAll, onAnalyzeSentiment }) => {
  return (
    <div className="flex-1 flex flex-col">
      <main className="max-w-7xl mx-auto w-full px-4 py-8 space-y-8">
        
        {/* Top Row: Sentiment, Trend, Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div onClick={onAnalyzeSentiment} className="cursor-pointer">
            <SentimentWidget />
          </div>
          <TrendIndicator />
          <AlertsWidget />
        </div>

        {/* Middle Row: Market Screener Summary */}
        <MarketScreener onSeeAll={onSeeAll} />

        {/* Bottom Row: Movers and News */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <GainersLosers />
          </div>
          <div className="lg:col-span-2">
            <NewsFeed />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
