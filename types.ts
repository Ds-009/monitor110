
export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  sentiment: 'positive' | 'negative' | 'neutral';
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  time: string;
  impact: 'up' | 'down';
  summary: string;
}

export interface User {
  name: string;
  email: string;
  phone: string;
}

export enum Page {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  DASHBOARD = 'DASHBOARD',
  SCREENER = 'SCREENER',
  SENTIMENT_ANALYSIS = 'SENTIMENT_ANALYSIS',
  PRODUCT_VIEW = 'PRODUCT_VIEW'
}
