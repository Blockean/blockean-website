'use client';
import React from 'react';
import { Shield, Zap, Users, ArrowRight } from 'lucide-react';

export default function About () {
  return (
    <section id="about" className="py-20  bg-neutral-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-neutral-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-neutral-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
      
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Your blockchain 
                <span className="bg-gradient-to-r from-purple-400  to-pink-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-500"> partner</span>
              </h2>
              <p className="text-xl text-gray-400">
                Tailored solutions for digital success
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: "Enhanced Security",
                  description: "Military-grade encryption and decentralized architecture"
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Optimized performance with cutting-edge technology"
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Dedicated professionals with years of blockchain experience"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 lg:p-12 space-y-8 border border-gray-700">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">Blockean</strong> is your dedicated partner in the world of blockchain technology, located in Pune. We leverage the power of web3 to create customized solutions that tackle your unique challenges.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                From enhancing security to exploring decentralized applications (dApps), our experienced team is committed to guiding you through your digital transformation journey.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                With services ranging from smart contract development to DeFi solutions and NFT platforms, we ensure that your business unlocks the full potential of blockchain technology.
              </p>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default About;