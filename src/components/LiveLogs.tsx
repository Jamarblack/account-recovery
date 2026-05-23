import React from 'react';

export default function LiveLogs(): React.ReactElement {
  return (
    <section id="dashboard" className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
      <div className="glass-panel overflow-hidden rounded-2xl p-1 md:p-2 border-white/10">
        <div className="bg-[#090f12] rounded-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 text-left">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold tracking-wider text-blue-500 uppercase">Recovery Dashboard</span>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-slate-400 text-[10px] font-bold tracking-wider mb-1 uppercase">Case Status</p>
                <p className="text-blue-500 font-bold text-sm">APPEAL PROCESSING</p>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[85%] shadow-[0_0_10px_rgba(37,99,235,0.6)]"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Case ID</p>
                  <p className="text-white font-mono">#REC-8821</p>
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Progress</p>
                  <p className="text-white">85%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 p-8 bg-[#161d1f]/40 text-left">
            <h3 className="text-xl font-bold mb-6 text-white">Live System Logs</h3>
            <div className="font-mono text-xs space-y-2 text-slate-400">
              <p className="text-blue-400">[08:42:12] Initializing secure handshake with API...</p>
              <p>[08:42:15] Validating identity token via encrypted channel</p>
              <p className="text-blue-500">[08:42:18] Authentication successful. Accessing server cluster #9</p>
              <p>[08:42:22] Mapping account structure... done.</p>
              <p className="text-purple-400">[08:42:30] Injecting recovery payload... status: 200 OK</p>
              <p className="text-blue-400 animate-pulse">_ system scanning in progress...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}