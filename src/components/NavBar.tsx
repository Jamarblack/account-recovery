import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar(): React.ReactElement {
  // Initialize the navigation hook
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#070B14]/60 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="flex justify-between items-center px-6 md:px-12 h-20 max-w-7xl mx-auto">
        
        {/* Clicking the logo links back to the landing page */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">R</div>
          <span className="text-xl font-bold tracking-tight text-white">Recoverly</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a className="text-slate-400 hover:text-blue-500 transition-colors duration-300 text-sm" href="#services">Services</a>
          <a className="text-slate-400 hover:text-blue-500 transition-colors duration-300 text-sm" href="#dashboard">Tracking</a>
          <a className="text-slate-400 hover:text-blue-500 transition-colors duration-300 text-sm" href="#faq">FAQ</a>
        </div>

        {/* This button now directly targets the /login path */}
        <button 
          onClick={() => navigate('/login')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-6 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all cursor-pointer"
        >
          Start Recovery
        </button>

      </div>
    </nav>
  );
}