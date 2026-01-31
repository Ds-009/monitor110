
import React from 'react';
import { Radar, Mail, Globe, HelpCircle, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 mt-auto px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Desc */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-1.5 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-100">
              <Radar size={24} className="text-white" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">MONITOR110 2.0</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-md font-medium">
            A specialized real-time signal monitoring layer for high-frequency financial intelligence. 
            We synthesize massive volumes of unstructured web data into actionable investment sentiment 
            long before it reaches traditional terminal networks.
          </p>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
            Help & Support
          </h4>
          <ul className="space-y-4 text-sm text-slate-500 font-semibold">
            <li><button className="hover:text-indigo-600 transition flex items-center gap-2"><HelpCircle size={14} /> Documentation</button></li>
            <li><button className="hover:text-indigo-600 transition flex items-center gap-2"><Shield size={14} /> Security Hub</button></li>
            <li><button className="hover:text-indigo-600 transition">API Governance</button></li>
            <li><button className="hover:text-indigo-600 transition">System Status</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-slate-500 font-semibold">
            <li className="flex items-center gap-3"><Globe size={16} className="text-indigo-600" /> Global: +1 (800) MONITOR</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-indigo-600" /> core@monitor110.com</li>
            <li className="bg-slate-50 p-3 rounded-xl border border-slate-100 mt-2 text-[11px] font-bold uppercase tracking-tighter text-slate-400">
                24/7 Institutional Desk Active
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">© 2024 MONITOR110 2.0 GLOBAL SYSTEMS</p>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <button className="hover:text-indigo-600 transition">Privacy Governance</button>
          <button className="hover:text-indigo-600 transition">TOS</button>
          <button className="hover:text-indigo-600 transition">Compliance</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
