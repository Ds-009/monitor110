
import React, { useState } from 'react';
import { User, Phone, Mail, Lock, Radar, CheckCircle2, XCircle } from 'lucide-react';

interface SignupProps {
  onSignup: (email: string) => void;
  onSwitchToLogin: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = "Valid email required";
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) newErrors.phone = "10-digit phone required";
    if (formData.password.length < 8) newErrors.password = "Min 8 characters required";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      onSignup(formData.email);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-slate-50">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-[2rem] shadow-2xl shadow-indigo-100 p-10 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-indigo-500/5 blur-[80px] pointer-events-none rounded-full"></div>

        <div className="flex flex-col items-center mb-8 relative z-10">
          <div className="p-4 bg-indigo-600 rounded-2xl mb-4 shadow-xl shadow-indigo-200">
            <Radar size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter mb-1">MONITOR110 2.0</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Institutional Onboarding</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          {[
            { id: 'name', label: 'Identity', icon: User, placeholder: 'Legal Full Name', type: 'text' },
            { id: 'email', label: 'Audit Email', icon: Mail, placeholder: 'name@firm.com', type: 'email' },
            { id: 'phone', label: 'Comms Link', icon: Phone, placeholder: 'Direct Phone (10-digit)', type: 'tel' },
            { id: 'password', label: 'Access Code', icon: Lock, placeholder: 'Alpha-Numeric (Min 8)', type: 'password' },
          ].map(field => (
            <div key={field.id} className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{field.label}</label>
              <div className="relative group">
                <field.icon className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors[field.id] ? 'text-rose-400' : 'text-slate-300 group-focus-within:text-indigo-600'}`} size={18} />
                <input
                  type={field.type}
                  name={field.id}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  className={`w-full bg-slate-50 border ${errors[field.id] ? 'border-rose-300 focus:ring-rose-500/10' : 'border-slate-200 focus:ring-indigo-500/10'} rounded-2xl py-3.5 pl-12 pr-4 text-slate-900 focus:outline-none focus:ring-4 focus:border-indigo-500 transition-all font-medium placeholder:text-slate-300`}
                  placeholder={field.placeholder}
                />
              </div>
              {errors[field.id] && <p className="text-[10px] font-bold text-rose-500 ml-1 uppercase">{errors[field.id]}</p>}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-100 flex items-center justify-center gap-2 uppercase tracking-widest text-xs mt-6"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>Establish Connection <CheckCircle2 size={18} /></>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center relative z-10">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-tight">
            Existing Node?{' '}
            <button onClick={onSwitchToLogin} className="text-indigo-600 font-black underline underline-offset-4">Authenticate</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
