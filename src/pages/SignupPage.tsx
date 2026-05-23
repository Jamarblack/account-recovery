import React, { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupPage(): React.ReactElement {
  const navigate = useNavigate();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Secure account creation initiated');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      
      {/* Main Container - Split Layout */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-800 rounded-2xl overflow-hidden bg-slate-950 shadow-2xl">
        
        {/* Left Panel - Visuals & Features */}
        <div className="p-12 flex flex-col justify-center border-r border-slate-800 hidden lg:flex relative overflow-hidden bg-[#0a0f18]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-transparent pointer-events-none"></div>

          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-2 bg-slate-900/80 border border-slate-800 w-max px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-slate-400 font-bold tracking-wider text-[10px] uppercase">System Status: Operational</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Digital Resilience Reimagined</h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed">Real-time threat monitoring and autonomous data recovery protocols designed for enterprise-grade security.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800/80">
                <div className="w-8 h-8 rounded bg-blue-600/10 flex items-center justify-center text-blue-500 font-bold mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                </div>
                <p className="text-3xl font-bold text-white mb-1">99.9%</p>
                <p className="text-slate-500 text-[10px] font-bold tracking-wider uppercase">Recovery Rate</p>
              </div>
              
              <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800/80">
                <div className="w-8 h-8 rounded bg-blue-600/10 flex items-center justify-center text-blue-500 font-bold mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <p className="text-3xl font-bold text-white mb-1">256-bit</p>
                <p className="text-slate-500 text-[10px] font-bold tracking-wider uppercase">Encryption</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Sign Up Form */}
        <div className="p-8 lg:p-14 flex flex-col justify-center bg-[#0d131f] relative">
          
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)} 
            className="absolute top-6 left-6 text-slate-500 hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span> Back
          </button>

          <h1 className="text-3xl font-bold text-white mb-3 mt-4">Create Your Secure Recovery Account</h1>
          <p className="text-slate-400 mb-10">Set up your secure workspace to begin the guided recovery process.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold tracking-wide text-slate-400 uppercase mb-2">Full Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full bg-slate-900/80 border border-slate-700/50 rounded-lg px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-wide text-slate-400 uppercase mb-2">Email Address</label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full bg-slate-900/80 border border-slate-700/50 rounded-lg px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] font-bold tracking-wide text-slate-400 uppercase mb-2">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-900/80 border border-slate-700/50 rounded-lg px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-wide text-slate-400 uppercase mb-2">Confirm Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-900/80 border border-slate-700/50 rounded-lg px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="pt-2 space-y-5">
              <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Enable Recovery Notifications</span>
                  <span className="text-xs text-slate-500">Real-time alerts for system events</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="terms" 
                  required
                  className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-950 cursor-pointer" 
                />
                <label htmlFor="terms" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
                  I agree to the <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">Privacy Policy</a> and <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">Terms of Service</a> for data handling and recovery protocols.
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-lg transition-all mt-4 shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer"
            >
              Create Secure Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500 hover:text-blue-400 font-semibold transition-colors">
                Login
              </Link>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}