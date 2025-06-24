// // // // import React from 'react'
//  "use client";


// import { useState } from "react";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "About", href: "#" },
//     { name: "Services", href: "#" },
//   ];

//   return (
//     <nav className="fixed inset-x-0 top-0 z-50 bg-black backdrop-blur-md border-b-[0.5px] text-white border-gray-600">
//       <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
        
//           <span className="text-4xl font-extrabold tracking-wider font-serif ">
//             Omkar Web
//           </span>
//         </div>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-8">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 className="text-white text-xl hover:text-white transition-colors"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2 rounded-md text-white hover:bg-gray-100 focus:outline-none"
//           onClick={() => setOpen(!open)}
//           aria-label={open ? "Close menu" : "Open menu"}
//         >
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-gray-900 text-center backdrop-blur-md border-t border-gray-200">
//           <ul className="flex flex-col space-y-4 p-5">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   className="block text-white hover:text-white transition-colors"
//                   onClick={() => setOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
  ];

  return (
    <nav 
      className={`fixed inset-x-0 top-0 z-50  border-b-[0.5px] text-white border-gray-600 transition-all duration-300 ${
         "bg-black py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image 
            src="/blockean.svg" 
            alt="Blockean Logo" 
            width={70} 
            height={70} 
            className="w-12 h-12 md:w-14 md:h-14"
          />
          <span className="text-3xl md:text-4xl font-extrabold tracking-wider font-serif">
            BLOCKEAN
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white text-lg hover:text-gray-300 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:bg-gray-800 transition-all duration-200 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X size={28} className="transition-transform duration-300 rotate-90" />
          ) : (
            <Menu size={28} className="transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-700">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-4 px-6 text-xl text-white hover:bg-gray-800 transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}