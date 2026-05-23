import React from 'react';

export default function HeroSection(): React.ReactElement {
  return (
    <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-24 lg:mb-40 pt-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Recover Access To Your <span className="text-blue-500">Social Accounts</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Guided recovery workflows and secure case processing for hacked, locked, disabled, and suspended accounts. Reclaim your digital identity with military-grade security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
              Start Recovery
            </button>
            <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/5 transition-all">
              Track Recovery
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="glass-panel p-8 rounded-xl relative z-10 border-white/10">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-[10px] tracking-wider font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">LIVE MONITORING</span>
            </div>
            
            {/* System Status Dashboard Mock visualization */}
            <div className="w-full h-[240px] bg-slate-950 rounded-xl border border-white/5 p-6 flex flex-col justify-between font-mono text-xs text-slate-500">
              <div className="space-y-2">
                <p className="text-blue-500">$ analyzing security clusters...</p>
                <p className="text-emerald-500">ok: system processing active core</p>
              </div>
              <div className="h-20 bg-slate-900/50 rounded border border-white/5 flex items-center justify-center">
                <span className="text-slate-600 tracking-widest animate-pulse">[ VISUAL ANALYTICS INTERFACE ]</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#1a2123] p-4 rounded-lg border border-white/5">
                <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-wider font-bold">Active Scans</p>
                <p className="text-xl font-bold text-blue-500">1,204/s</p>
              </div>
              <div className="bg-[#1a2123] p-4 rounded-lg border border-white/5">
                <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-wider font-bold">Success Rate</p>
                <p className="text-xl font-bold text-purple-400">99.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}