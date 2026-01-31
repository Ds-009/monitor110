
import React, { useState } from 'react';
import { Lock, Mail, Radar, ArrowRight, XCircle } from 'lucide-react';

interface LoginProps {
  onLogin: (email: string) => void;
  onSwitchToSignup: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid institutional email');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsSubmitting(true);
    // Simulate API logic
    setTimeout(() => {
      onLogin(email);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-slate-50">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-[2rem] shadow-2xl shadow-indigo-100 p-10 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/5 blur-[60px] pointer-events-none rounded-full"></div>
        
        <div className="flex flex-col items-center mb-10 relative z-10 text-center">
          <div className="p-4 bg-indigo-600 rounded-2xl mb-6 shadow-xl shadow-indigo-200 rotate-3">
            <Radar size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">MONITOR110 2.0</h1>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.15em]">Terminal Access</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Institutional Email</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium"
                placeholder="analyst@firm.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Security Key</label>
              <button type="button" className="text-[10px] font-black text-indigo-600 hover:text-indigo-500 uppercase tracking-widest transition-colors">Recover</button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-3 bg-rose-50 border border-rose-100 p-4 rounded-2xl animate-in fade-in slide-in-from-top-1">
              <XCircle size={18} className="text-rose-500 shrink-0" />
              <p className="text-rose-900 text-xs font-bold">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 group disabled:opacity-70 uppercase tracking-widest text-xs"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                Initialize Login
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-slate-100 text-center relative z-10">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-tight">
            New Entity?{' '}
            <button 
              onClick={onSwitchToSignup} 
              className="text-indigo-600 hover:text-indigo-500 font-black underline underline-offset-4 decoration-indigo-600/20"
            >
              Request Access
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
