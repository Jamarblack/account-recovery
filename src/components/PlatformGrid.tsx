import React from 'react';

export default function PlatformGrid(): React.ReactElement {
  const stats = [
    { label: 'Cases Processed', value: '10,000+' },
    { label: '& Confidential', value: 'Secure' },
    { label: 'Recovery Monitoring', value: '24/7' },
    { label: 'Case Processing', value: 'Fast' },
  ];

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-xl flex items-center gap-4 hover:border-blue-500/40 transition-colors">
            <div className="w-10 h-10 rounded bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 font-bold">✓</div>
            <div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}