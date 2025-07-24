// // import React from 'react';
// // import {
// //   Award,
// //   Trophy,
// //   ExternalLink,
// //   ArrowRight,
// //   Shield,
// //   Users,
// //   TrendingUp,
// //   Globe,
// // } from 'lucide-react';

// // const Certificates = () => {
// //   const benefits = [
// //     {
// //       icon: <Shield className="w-8 h-8 text-yellow-400" />,
// //       title: 'Industry Recognition',
// //       description: 'Our certificates are recognized by top companies and hiring managers worldwide',
// //     },
// //     {
// //       icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
// //       title: 'Career Advancement',
// //       description: 'Boost your resume and increase your chances of landing your dream job',
// //     },
// //     {
// //       icon: <Users className="w-8 h-8 text-yellow-400" />,
// //       title: 'Skill Validation',
// //       description: 'Demonstrate your expertise with verified assessments from industry experts',
// //     },
// //     {
// //       icon: <Globe className="w-8 h-8 text-yellow-400" />,
// //       title: 'Global Standards',
// //       description: 'Certificates based on international standards and best practices',
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-black text-white">
// //       <div className="container mx-auto px-4 py-8">
// //         {/* Hero Section */}
// //         <div className="text-center mb-16">
// //           <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400/10 rounded-full border-2 border-yellow-400/20 mb-6">
// //             <Award className="w-10 h-10 text-yellow-400" />
// //           </div>
// //           <h1 className="text-5xl font-bold mb-4">
// //             Earn <span className="text-yellow-400">Industry-Recognized</span> Certificates
// //           </h1>
// //           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
// //             Validate your skills with certificates from leading industry partners. Boost your career prospects and stand out to employers.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4 justify-center my-8">
// //             <button className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-3 text-lg rounded-md flex items-center font-medium">
// //               <Trophy className="w-5 h-5 mr-2" />
// //               View My Certificates
// //               <ArrowRight className="w-5 h-5 ml-2" />
// //             </button>
// //             <button
// //               className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 text-lg rounded-md flex items-center font-medium"
// //               onClick={() => (window.location.href = '/programs')}
// //             >
// //               <ExternalLink className="w-5 h-5 mr-2" />
// //               Explore Programs
// //             </button>
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
// //             {[
// //               ['25K+', 'Certificates Issued'],
// //               ['500+', 'Partner Companies'],
// //               ['15+', 'Certification Programs'],
// //               ['95%', 'Employer Recognition'],
// //             ].map(([count, label], i) => (
// //               <div key={i}>
// //                 <div className="text-3xl font-bold text-yellow-400">{count}</div>
// //                 <div className="text-gray-300">{label}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

   
// //         {/* Benefits Section */}
        
// //         <div className="mb-16">
// //         <h2 className="text-3xl font-bold text-center mb-12">Why Our Certificates Matter</h2>
// //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {benefits.map((b, i) => (
// //             <div
// //                 key={i}
// //                 className="rounded-lg border border-[#FFD700]/20 bg-black/20 p-4 text-center group hover:scale-105 transition-all duration-300"
// //             >
// //                 <div className="flex justify-center mb-4">
// //                 <div className="w-16 h-16 border-[#FFD700]/10 rounded-full flex items-center justify-center transition-colors group-hover:border-[#FFD700]/20">
// //                     {b.icon}
// //                 </div>
// //                 </div>
// //                 <h3 className="text-lg text-[#FFD700] font-semibold mb-3">{b.title}</h3>
// //                 <p className="text-gray-300 text-sm">{b.description}</p>
// //             </div>
// //             ))}
// //         </div>
// //         </div>

// //         {/* Certificate Sample */}
// //         <div className="mb-16">
// //           <h2 className="text-3xl font-bold text-center mb-12">Certificate Sample</h2>
// //           <div className="flex justify-center">
// //             <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-2xl w-full">
// //               <div className="flex justify-between items-start mb-6">
// //                 <div className="text-blue-600 font-bold text-2xl">Galo Score</div>
// //                 <div className="font-bold text-xl">Certified</div>
// //               </div>
// //               <div className="text-center mb-6">
// //                 <p className="mb-2">This is to certify that</p>
// //                 <h2 className="text-3xl font-bold mb-4">[Student Name]</h2>
// //                 <p className="mb-2">has successfully completed</p>
// //                 <h3 className="text-xl font-semibold mb-2">Aptitude Test</h3>
// //                 <p className="mb-4">in association with Galo Score</p>
// //                 <p>Issued on [Date]</p>
// //               </div>
// //               <div className="flex justify-between">
// //                 <div className="text-xs">
// //                   <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center mb-2">QR Code</div>
// //                   Verify Online
// //                 </div>
// //                 <div className="text-right">
// //                   <div className="text-sm mb-2">Authorized Signature</div>
// //                   <div className="h-12 border-b-2 border-gray-400 w-32"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Steps */}
// //         <div className="text-center">
// //           <h2 className="text-3xl font-bold mb-12">How to Earn Your Certificate</h2>
// //           <div className="grid md:grid-cols-4 gap-8 mb-12">
// //             {['Choose Program', 'Complete Assessment', 'Meet Requirements', 'Receive Certificate'].map((step, i) => (
// //               <div key={i}>
// //                 <div className="group">
// //                     <div className="w-16 h-16 bg-[rgba(245,158,11,0.1)] rounded-full mx-auto border-2 border-[#F59E0B]/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#F59E0B] group-hover:scale-110">
// //                         <span className="text-2xl font-bold text-[#F59E0B] group-hover:text-black transition-colors duration-300">
// //                         {i + 1}
// //                         </span>
// //                     </div>
// //                 </div>

// //                 <h3 className="text-xl font-semibold">{step}</h3>
// //                 <p className="text-gray-300 text-sm mt-2">
// //                   {[ 
// //                     'Select a certification program that matches your career goals',
// //                     'Take comprehensive tests to demonstrate your skills',
// //                     'Achieve the minimum score and complete all requirements',
// //                     'Get your verified digital certificate instantly'
// //                   ][i]}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>

// //           <button className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-3 text-lg rounded-md font-medium flex items-center justify-center mx-auto">
// //             Start Your Certification Journey
// //             <ArrowRight className="w-5 h-5 ml-2" />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Certificates;


import React from 'react';
import {
  Award,
  Trophy,
  ExternalLink,
  ArrowRight,
  Shield,
  Users,
  TrendingUp,
  Globe,
} from 'lucide-react';
import { useTheme } from '../../Components/Context/ThemeContext';
import {  useNavigate } from 'react-router-dom';

const Certificates = () => {
  const { isDark } = useTheme();

  const navigate=useNavigate();

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: 'Industry Recognition',
      description: 'Our certificates are recognized by top companies and hiring managers worldwide',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      title: 'Career Advancement',
      description: 'Boost your resume and increase your chances of landing your dream job',
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: 'Skill Validation',
      description: 'Demonstrate your expertise with verified assessments from industry experts',
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-400" />,
      title: 'Global Standards',
      description: 'Certificates based on international standards and best practices',
    },
  ];

  const handleExplore = ()=>{
    navigate('/exploreprogram');
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-4 py-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400/10 rounded-full border-2 border-yellow-400/20 mb-6">
            <Award className="w-10 h-10 text-yellow-400" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Earn <span className="text-yellow-400">Industry-Recognized</span> Certificates
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Validate your skills with certificates from leading industry partners. Boost your career prospects and stand out to employers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center my-8">
            <button className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-3 text-lg rounded-md flex items-center font-medium">
              <Trophy className="w-5 h-5 mr-2" />
              View My Certificates
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 text-lg rounded-md flex items-center font-medium"
              onClick={handleExplore}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Explore Programs
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ['25K+', 'Certificates Issued'],
              ['500+', 'Partner Companies'],
              ['15+', 'Certification Programs'],
              ['95%', 'Employer Recognition'],
            ].map(([count, label], i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-yellow-400">{count}</div>
                <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Certificates Matter</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`rounded-lg border border-yellow-500/20 p-4 text-center group hover:scale-105 transition-all duration-300 ${
                  isDark ? 'bg-black/20' : 'bg-yellow-50'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center transition-colors group-hover:border-yellow-400">
                    {b.icon}
                  </div>
                </div>
                <h3 className="text-lg text-yellow-400 font-semibold mb-3">{b.title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{b.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Sample */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Certificate Sample</h2>
          <div className="flex justify-center">
            <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-2xl w-full">
              <div className="flex justify-between items-start mb-6">
                <div className="text-blue-600 font-bold text-2xl">Galo Score</div>
                <div className="font-bold text-xl">Certified</div>
              </div>
              <div className="text-center mb-6">
                <p className="mb-2">This is to certify that</p>
                <h2 className="text-3xl font-bold mb-4">[Student Name]</h2>
                <p className="mb-2">has successfully completed</p>
                <h3 className="text-xl font-semibold mb-2">Aptitude Test</h3>
                <p className="mb-4">in association with Galo Score</p>
                <p>Issued on [Date]</p>
              </div>
              <div className="flex justify-between">
                <div className="text-xs">
                  <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center mb-2">QR Code</div>
                  Verify Online
                </div>
                <div className="text-right">
                  <div className="text-sm mb-2">Authorized Signature</div>
                  <div className="h-12 border-b-2 border-gray-400 w-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">How to Earn Your Certificate</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {['Choose Program', 'Complete Assessment', 'Meet Requirements', 'Receive Certificate'].map((step, i) => (
              <div key={i}>
                <div className="group">
                  <div className="w-16 h-16 bg-[rgba(245,158,11,0.1)] rounded-full mx-auto border-2 border-yellow-400/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-yellow-400 group-hover:scale-110">
                    <span className="text-2xl font-bold text-yellow-400 group-hover:text-black transition-colors duration-300">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{step}</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm mt-2`}>
                  {[
                    'Select a certification program that matches your career goals',
                    'Take comprehensive tests to demonstrate your skills',
                    'Achieve the minimum score and complete all requirements',
                    'Get your verified digital certificate instantly',
                  ][i]}
                </p>
              </div>
            ))}
          </div>

          <button className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-3 text-lg rounded-md font-medium flex items-center justify-center mx-auto">
            Start Your Certification Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificates;

