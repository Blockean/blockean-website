

'use client';
import React, { useRef } from "react";
import { 
  Code, 
  Coins, 
  Palette, 
  Shield, 
  Database, 
  Smartphone 
} from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { motion, useInView } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Smart Contracts",
      description: "Automated, secure, and transparent contract execution on blockchain networks.",
      features: ["Solidity Development", "Contract Auditing", "Gas Optimization"],
    },
    {
      icon: Coins,
      title: "DeFi Solutions",
      description: "Comprehensive decentralized finance platforms for modern financial needs.",
      features: ["Lending Protocols", "DEX Development", "Yield Farming"],
    },
    {
      icon: Palette,
      title: "NFT Platforms",
      description: "Create, mint, and trade unique digital assets with custom marketplaces.",
      features: ["NFT Minting", "Marketplace Development", "Metadata Management"],
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Advanced security audits and vulnerability assessments for your blockchain projects.",
      features: ["Security Audits", "Penetration Testing", "Risk Assessment"],
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Blockchain data analysis and insights for informed decision making.",
      features: ["On-chain Analytics", "Transaction Monitoring", "Performance Metrics"],
    },
    {
      icon: Smartphone,
      title: "dApp Development",
      description: "Full-stack decentralized application development with modern UI/UX.",
      features: ["Frontend Development", "Backend Integration", "User Experience"],
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  // Ref for section
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Comprehensive Blockchain Solutions Tailored To Transform Your
            Business And Unlock New Possibilities In The Digital Economy.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 relative"
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                transition: { 
                  duration: 0.3,
                  ease: "easeOut" 
                } 
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                variants={scaleIn}
              >
                <service.icon className="h-8 w-8 text-white" />
              </motion.div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feat, fi) => (
                    <motion.li
                      key={fi}
                      className="flex items-center text-sm text-gray-500"
                      variants={fadeIn}
                      initial="hidden"
                      animate={isInView ? "show" : "hidden"}
                      transition={{ delay: 0.1 * (fi + 1) }}
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mr-3" />
                      {feat}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-500 hover:to-pink-400 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(192, 132, 252, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.button>
        </motion.div>

        {/* Marquee of Service Icons */}
        <motion.div 
          className="relative z-10 overflow-visible w-full mt-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <Marquee>
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="flex items-center space-x-3 border border-gray-700 bg-gray-700 rounded-2xl px-6 py-10 min-w-[180px] mx-4"
                >
                  <Icon className="h-6 w-6 text-purple-500" />
                  <span className="text-white font-medium">{svc.title}</span>
                </div>
              );
            })}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}