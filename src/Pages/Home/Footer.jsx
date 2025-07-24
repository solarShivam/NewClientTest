// import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <BookOpen className="h-8 w-8 text-blue-400" />
//               <span className="text-2xl font-bold">TestPortal</span>
//             </div>
//             <p className="text-gray-300 text-sm">
//               Empowering careers through comprehensive skill assessment and certification platform.
//             </p>
//             <div className="flex space-x-4">
//               <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
//               <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
//               <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
//               <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-3 text-sm">
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Test Categories</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Practice Tests</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Certification</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">For Employers</a></li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Support</h3>
//             <ul className="space-y-3 text-sm">
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Help Center</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">FAQ</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact Support</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <div className="space-y-4 text-sm">
//               <div className="flex items-start space-x-3">
//                 <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
//                 <span className="text-gray-300 break-words">support@testportal.com</span>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
//                 <span className="text-gray-300 break-words">+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
//                 <span className="text-gray-300 break-words">New York, NY 10001</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
//           <p className="text-gray-400 leading-relaxed px-2">
//             © 2024 TestPortal. All rights reserved. | Designed for career advancement and skill validation.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import {
//   BookOpen,
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram
// } from "lucide-react";

// const Footer = () => {
 
//   return (
//     <footer className="bg-black text-white dark:bg-white dark:text-black transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <BookOpen className="h-8 w-8 text-yellow-400 dark:text-yellow-500" />
//               <span className="text-2xl font-bold text-yellow-400 dark:text-yellow-500">TestPortal</span>
//             </div>
//             <p className="text-sm text-gray-300 dark:text-gray-700">
//               Empowering careers through comprehensive skill assessment and certification platform.
//             </p>
//             <div className="flex space-x-4">
//               {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
//                 <Icon
//                   key={i}
//                   className="h-5 w-5 text-gray-400 hover:text-yellow-400 dark:hover:text-yellow-500 cursor-pointer transition-colors duration-200"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-yellow-400 dark:text-yellow-500">Quick Links</h3>
//             <ul className="space-y-3 text-sm">
//               {["About Us", "Test Categories", "Practice Tests", "Certification", "For Employers"].map((item, i) => (
//                 <li key={i}>
//                   <a href="#" className="text-gray-300 dark:text-gray-700 hover:text-yellow-400 dark:hover:text-yellow-500 transition-colors duration-200">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Support */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-yellow-400 dark:text-yellow-500">Support</h3>
//             <ul className="space-y-3 text-sm">
//               {["Help Center", "FAQ", "Contact Support", "Terms of Service", "Privacy Policy"].map((item, i) => (
//                 <li key={i}>
//                   <a href="#" className="text-gray-300 dark:text-gray-700 hover:text-yellow-400 dark:hover:text-yellow-500 transition-colors duration-200">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-yellow-400 dark:text-yellow-500">Contact Us</h3>
//             <div className="space-y-4 text-sm">
//               <div className="flex items-start space-x-3">
//                 <Mail className="h-5 w-5 text-yellow-400 dark:text-yellow-500 mt-0.5" />
//                 <span className="text-gray-300 dark:text-gray-700 break-words">support@testportal.com</span>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <Phone className="h-5 w-5 text-yellow-400 dark:text-yellow-500 mt-0.5" />
//                 <span className="text-gray-300 dark:text-gray-700 break-words">+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <MapPin className="h-5 w-5 text-yellow-400 dark:text-yellow-500 mt-0.5" />
//                 <span className="text-gray-300 dark:text-gray-700 break-words">New York, NY 10001</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 dark:border-gray-300 mt-10 pt-6 text-center text-sm">
//           <p className="text-gray-400 dark:text-gray-600 leading-relaxed px-2">
//             © 2024 TestPortal. All rights reserved. | Designed for career advancement and skill validation.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import { useTheme } from "../../Components/Context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();
  console.log("Footer Theme Mode:", isDark ? "dark" : "light");

  return (
    <footer
      className={`transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className={`h-8 w-8 ${isDark ? "text-yellow-400" : "text-yellow-500"}`} />
              <span className={`text-2xl font-bold ${isDark ? "text-yellow-400" : "text-yellow-500"}`}>
                Galo Score
              </span>
            </div>
            <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Empowering careers through comprehensive skill assessment and certification platform.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Icon
                  key={i}
                  className={`h-5 w-5 cursor-pointer transition-colors duration-200 ${
                    isDark
                      ? "text-gray-400 hover:text-yellow-400"
                      : "text-gray-600 hover:text-yellow-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-yellow-400" : "text-yellow-500"}`}>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["About Us", "Test Categories", "Practice Tests", "Certification", "For Employers"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className={`transition-colors duration-200 ${
                        isDark
                          ? "text-gray-300 hover:text-yellow-400"
                          : "text-gray-700 hover:text-yellow-500"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-yellow-400" : "text-yellow-500"}`}>
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              {["Help Center", "FAQ", "Contact Support", "Terms of Service", "Privacy Policy"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className={`transition-colors duration-200 ${
                        isDark
                          ? "text-gray-300 hover:text-yellow-400"
                          : "text-gray-700 hover:text-yellow-500"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-yellow-400" : "text-yellow-500"}`}>
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <Mail className={`h-5 w-5 mt-0.5 ${isDark ? "text-yellow-400" : "text-yellow-500"}`} />
                <span className={`${isDark ? "text-gray-300" : "text-gray-700"} break-words`}>
                  support@testportal.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className={`h-5 w-5 mt-0.5 ${isDark ? "text-yellow-400" : "text-yellow-500"}`} />
                <span className={`${isDark ? "text-gray-300" : "text-gray-700"} break-words`}>
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className={`h-5 w-5 mt-0.5 ${isDark ? "text-yellow-400" : "text-yellow-500"}`} />
                <span className={`${isDark ? "text-gray-300" : "text-gray-700"} break-words`}>
                  New Delhi,  201007
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-10 pt-6 text-center text-sm border-t ${
            isDark ? "border-gray-700 text-gray-400" : "border-gray-300 text-gray-600"
          }`}
        >
          <p className="leading-relaxed px-2">
            © 2025 Galo Score. All rights reserved. | Designed for career advancement and skill validation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



   

              

         


// import React from "react";
// import { ArrowRight, Play, Star, Trophy, Users, Zap } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="bg-black min-h-screen flex items-center relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-52 h-52 bg-yellow-300 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 py-20 relative">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="text-center lg:text-left">
//             <div className="inline-flex items-center bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-8 border border-white/20">
//               <Trophy className="h-5 w-5 text-yellow-400 mr-2" />
//               <span className="text-white font-medium">🎯 #1 Career Testing Platform</span>
//             </div>

//             <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
//               Unlock Your
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 block">
//                 Dream Career
//               </span>
//             </h1>

//             <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
//               Master professional assessments with AI-powered practice tests. Join 100,000+ students who've accelerated their careers through our comprehensive testing platform.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 mb-12">
//               <button className="inline-flex items-center justify-center rounded-full font-bold transition-colors bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-10 py-4 text-lg shadow-2xl hover:shadow-yellow-500/25">
//                 <Play className="mr-3 h-6 w-6" />
//                 Start Free Assessment
//               </button>
//               <button className="inline-flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-lg px-10 py-4 text-lg">
//                 Watch Demo
//                 <ArrowRight className="ml-3 h-5 w-5" />
//               </button>
//             </div>

//             <div className="grid grid-cols-3 gap-8 text-center">
//               <div>
//                 <div className="text-4xl font-bold text-white mb-2">100K+</div>
//                 <div className="text-gray-400">Active Users</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-white mb-2">98%</div>
//                 <div className="text-gray-400">Success Rate</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-white mb-2">1000+</div>
//                 <div className="text-gray-400">Companies</div>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="rounded-lg border bg-white/10 text-white shadow-sm backdrop-blur-xl border-white/20 p-8">
//               <div className="flex items-center mb-6">
//                 <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg mr-4">
//                   <Zap className="h-6 w-6 text-black" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg text-white">AI-Powered Assessment</h3>
//                   <p className="text-gray-300">Personalized for your career</p>
//                 </div>
//               </div>

//               <div className="p-6 pt-0 space-y-4 mb-6">
//                 {[{
//                   label: "Cognitive Skills",
//                   value: 85,
//                   color: "from-green-400 to-blue-500",
//                   width: "w-16",
//                   text: "text-green-400"
//                 }, {
//                   label: "Technical Knowledge",
//                   value: 78,
//                   color: "from-yellow-400 to-orange-500",
//                   width: "w-14",
//                   text: "text-yellow-400"
//                 }, {
//                   label: "Communication",
//                   value: 92,
//                   color: "from-purple-400 to-pink-500",
//                   width: "w-18",
//                   text: "text-purple-400"
//                 }].map((item, i) => (
//                   <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
//                     <span className="text-white">{item.label}</span>
//                     <div className="flex items-center">
//                       <div className="w-20 h-2 bg-gray-600 rounded-full mr-3">
//                         <div className={`h-2 ${item.width} bg-gradient-to-r ${item.color} rounded-full`} />
//                       </div>
//                       <span className={`${item.text} font-medium`}>{item.value}%</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 rounded-lg inline-flex items-center justify-center">
//                 Continue Assessment
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
//             </div>

//             {/* Floating Icons */}
//             <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-yellow-300 p-4 rounded-full shadow-xl">
//               <Star className="h-6 w-6 text-white" />
//             </div>
//             <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-yellow-300 p-4 rounded-full shadow-xl">
//               <Users className="h-6 w-6 text-white" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;