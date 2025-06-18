'use client'

import React from 'react';
import Image from 'next/image';
// import GradientButton from './GradientButton';

export default function Hero ()  {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
        <Image src='/blockeanmain.png' alt='Blockean Background' fill className='object-cover mt-20 object-center absolute inset-0 z-0' />
        <div className="absolute inset-0 bg-black/50 z-0 w-full h-screen" />
      <div className="max-w-6xl mx-auto text-center z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="inline-block animate-fade-in-up animation-delay-100 font-serif">
                EMPOWER YOUR
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r font-serif from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-500 text-glow">
                BUSINESS
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-700">
            Unlock the power of blockchain technology and transform your business 
            with cutting-edge solutions that drive innovation and growth.
          </p>
          
          <div className="pt-8 ">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg shadow-2xl shadow-purple-500/30 px-6 py-4 hover:bg-white/10 border rounded-full border-white"
            >
              VIEW SERVICES
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced floating elements with network theme */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float animation-delay-1000 shadow-lg shadow-purple-400/50" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float animation-delay-1500 shadow-lg shadow-pink-400/50" />
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-blue-400 rounded-full animate-float animation-delay-2000 shadow-lg shadow-blue-400/50" />
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-float animation-delay-2500 shadow-lg shadow-purple-300/50" />
    </section>
  );
};

