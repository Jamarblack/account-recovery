import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <div className="bg-[#0d131f] border border-slate-800/80 hover:border-blue-600/50 p-8 rounded-xl text-left transition-all group duration-300">
    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
    </div>
    <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function ServicesGrid(): React.ReactElement {
  const services = [
    { title: 'Hacked Accounts', description: 'Emergency response for compromised assets. Secure modern session termination.' },
    { title: 'Disabled Accounts', description: 'Automated workflow processing for profiles wrongly targeted for generic policy violations.' },
    { title: 'Locked Accounts', description: 'Bypass security lockdowns and verification loops through managed api verification.' },
    { title: 'Suspended Accounts', description: 'Comprehensive review and mediation templates for temporary administrative hold states.' },
    { title: '2FA Recovery', description: 'Regain structural account access if you lost your authenticator device seeds or backup codes.' },
    { title: 'Identity Verification', description: 'Secure handling of identifying documentation required for manual desk evaluations.' },
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto text-center">
      <p className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-3">Specialized Services</p>
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-16">Expert Solutions For Critical Blocks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
}