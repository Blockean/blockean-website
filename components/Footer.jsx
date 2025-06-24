'use client';

import React from 'react';
import { Zap, Github, Linkedin, Twitter, Mail,Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer ()  {
  const currentYear = new Date().getFullYear();

  const socialLinks = [

    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:onamshettys@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-black border p-2 rounded-lg">
                {/* <Zap className="h-6 w-6 text-white" /> */}
                <Image src="/blockean.png" alt="Blockean Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
              </div>
              <span className="text-xl font-bold text-white">Blockean</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your Trusted Partner In Blockchain Technology, Delivering Innovative Solutions That Transform Businesses And Unlock The Potential Of Decentralized Systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p>📧 support@blockean.in</p>
              <p>📱 +91 8999804292</p>
              <p>📍 Pune, Maharashtra, India</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 border border-gray-800 hover:border-transparent"
                >
                  <social.icon className="h-5 w-5 text-gray-400 hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Blockean. All Rights Reserved
            </p>
      </div>
      </div>
    </footer>
 );
};
