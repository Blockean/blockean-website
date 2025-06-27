// 'use client';

// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// export default function Contact () {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);


//   async function handleSubmit(e) {
//         e.preventDefault();
//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify({
//                 access_key: "58c1b089-d370-485d-920c-cc84cba4e0e3",
//                 name: e.target.name.value,
//                 email: e.target.email.value,
//                 message: e.target.message.value,
//             }),
//         });
//         const result = await response.json();
//         if (result.success) {
//             console.log(result);
//         }
//     }

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate form submission
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: '', email: '', company: '', message: '' });
//     }, 3000);
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Email Us",
//       info: "support@blockean.in",
//       action: ["mailto:onamshettys@gmail.com","mailto:support@blockean.in"]
    
//     },
//     {
//       icon: Phone,
//       title: "Call Us",
//       info: "+91-8999804292",
//       action: "tel:+918999804292"
//     },
//     {
//       icon: MapPin,
//       title: "Visit Us",
//       info: "Pune, Maharashtra, India",
//       action: "#"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             Get In <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Touch</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Ready to transform your business with blockchain technology? Let's discuss your project and explore the possibilities together.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16">
          
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
//               <p className="text-gray-400 text-lg leading-relaxed mb-8">
//                 Whether you're looking to develop smart contracts, create DeFi solutions, or explore NFT platforms, our team is here to help you navigate the blockchain landscape.
//               </p>
//             </div>

//             {/* Contact Cards */}
//             <div className="space-y-6">
//               {contactInfo.map((contact, index) => (
//                 <a
//                   key={index}
//                   href={contact.action}
//                   className="group flex items-center space-x-4 p-6 bg-black rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-800 hover:border-cyan-500/50"
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                     <contact.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-semibold text-lg">{contact.title}</h4>
//                     <p className="text-gray-400">{contact.info}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-black rounded-2xl p-8 border border-gray-800">
//             {!isSubmitted ? (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                       Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
//                       placeholder="Your name"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Your company (optional)"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     rows={5}
//                     className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
//                     placeholder="Tell us about your project..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="group w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-500  hover:to-pink-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 flex items-center justify-center space-x-2"
//                 >
//                   <span>Send Message</span>
//                   <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </form>
//             ) : (
//               <div className="text-center py-12">
//                 <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
//                 <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
//                 <p className="text-gray-400">Thank you for reaching out. We'll get back to you soon.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Single, unified submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '58c1b089-d370-485d-920c-cc84cba4e0e3',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          subject: 'New contact request from your website',
          // optional: you can add `redirect` to go to a thank-you page
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // clear the form after showing success
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', company: '', message: '' });
        }, 3000);
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      setError('Oops! Something went wrong. Please try again.');
    }
  }

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'support@blockean.in',
      action: 'mailto:support@blockean.in'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91-8999804292',
      action: 'tel:+918999804292'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Pune, Maharashtra, India',
      action: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business with blockchain technology? Let's discuss your project and explore the possibilities together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Whether you're looking to develop smart contracts, create DeFi solutions, or explore NFT platforms, our team is here to help you navigate the blockchain landscape.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.action}
                  className="group flex items-center space-x-4 p-6 bg-black rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-800 hover:border-cyan-500/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{contact.title}</h4>
                    <p className="text-gray-400">{contact.info}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
