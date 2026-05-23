import React, { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage(): React.ReactElement {
  const navigate = useNavigate();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted securely');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      
      {/* Main Container - Split Layout */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-800 rounded-2xl overflow-hidden bg-slate-950 shadow-2xl">
        
        {/* Left Panel - System Info */}
        <div className="p-12 flex flex-col justify-center border-r border-slate-800 hidden lg:flex relative">
          <div className="mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-slate-400 font-semibold tracking-wider text-xs uppercase">System Active</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">Data Resilience Index</h2>
          <p className="text-slate-400 mb-10 text-lg">Real-time recovery health analytics and protected session management.</p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800">
              <p className="text-slate-400 text-xs font-bold tracking-wider uppercase mb-2">Uptime</p>
              <p className="text-2xl font-semibold text-white">365d 12h</p>
            </div>
            
            <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800">
              <p className="text-slate-400 text-xs font-bold tracking-wider uppercase mb-2">Backups</p>
              <p className="text-2xl font-semibold text-white">12.4 PB</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="p-8 lg:p-16 flex flex-col justify-center bg-[#0d131f] relative">
          
          {/* Back Button -> Steps one page back in browser history */}
          <button 
            onClick={() => navigate(-1)} 
            className="absolute top-6 left-6 text-slate-500 hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span> Back
          </button>

          <div className="flex items-center gap-3 mb-12 mt-4">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
              R
            </div>
            <span className="text-xl font-semibold text-white tracking-wide">Recoverly</span>
          </div>

          <h1 className="text-3xl font-bold text-white mb-3">Access Your Dashboard</h1>
          <p className="text-slate-400 mb-10">Securely monitor recovery workflows and case progress.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold tracking-wide text-slate-400 uppercase mb-2">Email Address</label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full bg-slate-900/80 border border-slate-700/50 rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold tracking-wide text-slate-400 uppercase mb-2">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-slate-900/80 border border-slate-700/50 rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Remember Me</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-400 font-medium transition-colors">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-lg transition-all mt-6 cursor-pointer"
            >
              Secure Login
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-800/80 text-center">
            <p className="text-slate-400 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-500 hover:text-blue-400 font-semibold transition-colors">
                Create Account
              </Link>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}