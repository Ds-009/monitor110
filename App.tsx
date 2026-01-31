
import React, { useState, useEffect, useRef } from 'react';
import { Page, User } from './types';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './pages/Dashboard';
import FullScreener from './pages/FullScreener';
import SentimentAnalysis from './pages/SentimentAnalysis';
import ProductView from './pages/ProductView';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LOGIN);
  const [user, setUser] = useState<User | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string>('Gold');
  const tickerRef = useRef<HTMLDivElement>(null);

  const handleLogin = (email: string) => {
    setUser({ name: 'Financial Expert', email, phone: '1234567890' });
    setCurrentPage(Page.DASHBOARD);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage(Page.LOGIN);
  };

  const navigateToProduct = (product: string) => {
    setSelectedProduct(product);
    setCurrentPage(Page.PRODUCT_VIEW);
  };

  useEffect(() => {
    if (currentPage !== Page.LOGIN && currentPage !== Page.SIGNUP && tickerRef.current) {
      tickerRef.current.innerHTML = '';
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
          {"proName": "NSE:NIFTY", "title": "NIFTY 50"},
          {"proName": "NSE:BANKNIFTY", "title": "BANK NIFTY"},
          {"proName": "MCX:GOLD1!", "title": "GOLD MCX"},
          {"proName": "MCX:SILVER1!", "title": "SILVER MCX"},
          {"proName": "NSE:RELIANCE", "title": "RELIANCE"},
          {"proName": "NSE:HDFCBANK", "title": "HDFC BANK"}
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "en"
      });
      tickerRef.current.appendChild(script);
    }
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case Page.LOGIN:
        return <Login onLogin={handleLogin} onSwitchToSignup={() => setCurrentPage(Page.SIGNUP)} />;
      case Page.SIGNUP:
        return <Signup onSignup={handleLogin} onSwitchToLogin={() => setCurrentPage(Page.LOGIN)} />;
      default:
        return (
          <div className="flex flex-col min-h-screen">
            <div ref={tickerRef} className="h-[40px] w-full bg-white border-b border-slate-100 overflow-hidden"></div>
            <Navbar 
              onLogout={handleLogout} 
              onNavigate={(page) => setCurrentPage(page)} 
              onProductSelect={navigateToProduct}
            />
            {currentPage === Page.DASHBOARD && <Dashboard onSeeAll={() => setCurrentPage(Page.SCREENER)} onAnalyzeSentiment={() => setCurrentPage(Page.SENTIMENT_ANALYSIS)} />}
            {currentPage === Page.SCREENER && <FullScreener />}
            {currentPage === Page.SENTIMENT_ANALYSIS && <SentimentAnalysis />}
            {currentPage === Page.PRODUCT_VIEW && <ProductView productName={selectedProduct} />}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {renderContent()}
    </div>
  );
};

export default App;
