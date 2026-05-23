import React from 'react';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import PlatformGrid from '../components/PlatformGrid';
import ServicesGrid from '../components/ServicesGrid';
import LiveLogs from '../components/LiveLogs';

export default function LandingPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#070B14] text-slate-200 relative">
      {/* Structural backgrounds from your schema */}
      <div className="fixed inset-0 grid-bg z-[-1] pointer-events-none opacity-50"></div>
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] z-[-1]"></div>
      
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <PlatformGrid />
        <ServicesGrid />
        <LiveLogs />
      </main>
    </div>
  );
}