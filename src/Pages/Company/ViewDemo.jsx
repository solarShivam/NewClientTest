// import { useState } from "react";
// import { 
//   Code, 
//   BarChart3, 
//   Users, 
//   Trophy, 
//   ArrowLeft,
//   Play,
//   Filter,
//   Download,
//   Eye,
//   Star,
//   TrendingUp,
//   Target,
//   Clock,
//   Award,
//   CheckCircle
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Demo = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   const demoStats = {
//     totalCandidates: 25847,
//     testsCompleted: 48392,
//     avgScore: 78.5,
//     topPerformers: 3428
//   };

//   const recentTests = [
//     { candidate: "Rahul Sharma", test: "Programming Fundamentals", score: 92, date: "2024-01-20", status: "Excellent" },
//     { candidate: "Priya Patel", test: "Data Analysis", score: 89, date: "2024-01-19", status: "Good" },
//     { candidate: "Arjun Kumar", test: "Technical Aptitude", score: 94, date: "2024-01-18", status: "Excellent" },
//     { candidate: "Sneha Gupta", test: "English Proficiency", score: 87, date: "2024-01-17", status: "Good" },
//     { candidate: "Vikash Singh", test: "Logical Reasoning", score: 91, date: "2024-01-16", status: "Excellent" }
//   ];

//   const skillAnalytics = [
//     { skill: "Programming", avgScore: 84.2, candidates: 8934, trend: "+12%" },
//     { skill: "Data Analysis", avgScore: 79.6, candidates: 6421, trend: "+8%" },
//     { skill: "Aptitude", avgScore: 76.8, candidates: 15420, trend: "+5%" },
//     { skill: "English", avgScore: 82.1, candidates: 12847, trend: "+15%" },
//     { skill: "Quantitative", avgScore: 78.9, candidates: 9632, trend: "+7%" }
//   ];

//   const getScoreColor = (score) => {
//     if (score >= 90) return "text-green-400";
//     if (score >= 80) return "text-yellow-400";
//     if (score >= 70) return "text-orange-400";
//     return "text-red-400";
//   };

//   const getStatusColor = (status) => {
//     if (status === "Excellent") return "bg-green-500/20 text-green-400";
//     if (status === "Good") return "bg-yellow-500/20 text-yellow-400";
//     return "bg-orange-500/20 text-orange-400";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
    
//       {/* Header */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Play className="w-10 h-10 text-black" />
//             </div>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               <span className="text-white">Platform </span>
//               <span className="text-yellow-400">Demo</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//               Experience the power of our comprehensive hiring platform. Explore real candidate data, 
//               analytics, and features that will transform your recruitment process.
//             </p>
//           </div>

//           {/* Demo Navigation Tabs */}
//           <div className="flex justify-center mb-12">
//             <div className="flex bg-gray-800/50 rounded-lg p-2">
//               <button
//                 variant={activeTab === "dashboard" ? "default" : "ghost"}
//                 onClick={() => setActiveTab("dashboard")}
//                 className={activeTab === "dashboard" 
//                   ? "bg-yellow-500 text-black hover:bg-yellow-600" 
//                   : "text-gray-400 hover:text-white"}
//               >
//                 <BarChart3 className="w-4 h-4 mr-2" />
//                 Dashboard
//               </button>
//               <button
//                 variant={activeTab === "candidates" ? "default" : "ghost"}
//                 onClick={() => setActiveTab("candidates")}
//                 className={activeTab === "candidates" 
//                   ? "bg-yellow-500 text-black hover:bg-yellow-600" 
//                   : "text-gray-400 hover:text-white"}
//               >
//                 <Users className="w-4 h-4 mr-2" />
//                 Candidates
//               </button>
//               <button
//                 variant={activeTab === "analytics" ? "default" : "ghost"}
//                 onClick={() => setActiveTab("analytics")}
//                 className={activeTab === "analytics" 
//                   ? "bg-yellow-500 text-black hover:bg-yellow-600" 
//                   : "text-gray-400 hover:text-white"}
//               >
//                 <Trophy className="w-4 h-4 mr-2" />
//                 Analytics
//               </button>
//             </div>
//           </div>

//           {/* Dashboard Tab */}
//           {activeTab === "dashboard" && (
//             <div className="space-y-8">
//               {/* Stats Overview */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <div className="bg-gradient-to-b from-gray-900 to-black border-yellow-500/20 p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-400 text-sm">Total Candidates</p>
//                       <p className="text-2xl font-bold text-white">{demoStats.totalCandidates.toLocaleString()}</p>
//                     </div>
//                     <Users className="w-8 h-8 text-yellow-400" />
//                   </div>
//                 </div>
//                 <div className="bg-gradient-to-b from-gray-900 to-black border-yellow-500/20 p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-400 text-sm">Tests Completed</p>
//                       <p className="text-2xl font-bold text-white">{demoStats.testsCompleted.toLocaleString()}</p>
//                     </div>
//                     <CheckCircle className="w-8 h-8 text-green-400" />
//                   </div>
//                 </div>
//                 <div className="bg-gradient-to-b from-gray-900 to-black border-yellow-500/20 p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-400 text-sm">Average Score</p>
//                       <p className="text-2xl font-bold text-yellow-400">{demoStats.avgScore}%</p>
//                     </div>
//                     <Target className="w-8 h-8 text-yellow-400" />
//                   </div>
//                 </div>
//                 <div className="bg-gradient-to-b from-gray-900 to-black border-yellow-500/20 p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-400 text-sm">Top Performers</p>
//                       <p className="text-2xl font-bold text-white">{demoStats.topPerformers.toLocaleString()}</p>
//                     </div>
//                     <Award className="w-8 h-8 text-yellow-400" />
//                   </div>
//                 </div>
//               </div>

//               {/* Recent Tests */}
//               <div className="bg-gradient-to-b from-gray-900 to-black border-yellow-500/20 p-6">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-xl font-bold text-white">Recent Test Results</h3>
//                   <button variant="outline" className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black">
//                     <Eye className="w-4 h-4 mr-2" />
//                     View All
//                   </button>
//                 </div>
//                 <div className="space-y-4">
//                   {recentTests.map((test, index) => (
//                     <div key={index} className="flex items-center justify-between bg-gray-800/30 rounded-lg p-4">
//                       <div className="flex items-center space-x-4">
//                         <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
//                           <span className="text-sm font-bold text-yellow-400">{test.candidate.split(' ').map(n => n[0]).join('')}</span>
//                         </div>
//                         <div>
//                           <p className="text-white font-medium">{test.candidate}</p>
//                           <p className="text-gray-400 text-sm">{test.test}</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-4">
//                         <span className={getStatusColor(test.status)}>
//                           {test.status}
//                         </span>
//                         <div className="text-right">
//                           <p className={`font-bold ${getScoreColor(test.score)}`}>{test.score}%</p>
//                           <p className="text-gray-400 text-xs">{test.date}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Candidates Tab */}
//           {activeTab === "candidates" && (
//             <div className="space-y-8">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-2xl font-bold text-white">Sample Candidate Pool</h3>
//                 <div className="flex space-x-3">
//                   <button variant="outline" className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black">
//                     <Filter className="w-4 h-4 mr-2" />
//                     Filter
//                   </button>
//                   <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
//                     <Download className="w-4 h-4 mr-2" />
//                     Export
//                   </button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {recentTests.slice(0, 4).map((test, index) => (
//                   <div key={index} className="bg-gradient-to-b from-gray-900 to-black border-yellow-500/20 p-6">
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="flex items-center space-x-3">
//                         <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
//                           <span className="font-bold text-black">{test.candidate.split(' ').map(n => n[0]).join('')}</span>
//                         </div>
//                         <div>
//                           <h4 className="text-lg font-bold text-white">{test.candidate}</h4>
//                           <p className="text-gray-400 text-sm">Software Developer</p>
//                         </div>
//                       </div>
//                       <div className={`text-xl font-bold ${getScoreColor(test.score)}`}>
//                         {test.score}
//                       </div>
//                     </div>
//                     <div className="space-y-2 mb-4">
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Last Test:</span>
//                         <span className="text-white">{test.test}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Date:</span>
//                         <span className="text-white">{test.date}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Status:</span>
//                         <span className={getStatusColor(test.status)}>
//                           {test.status}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex space-x-2">
//                       <button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold flex-1">
//                         View Profile
//                       </button>
//                       <button size="sm" variant="outline" className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black">
//                         Contact
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Analytics Tab */}
//           {activeTab === "analytics" && (
//             <div className="space-y-8">
//               <h3 className="text-2xl font-bold text-white">Skill-wise Performance Analytics</h3>
              
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="bg-gradient-to-b from-gray-900 to-black border-yellow-500/20 p-6">
//                   <h4 className="text-xl font-bold text-white mb-6">Skill Performance Overview</h4>
//                   <div className="space-y-4">
//                     {skillAnalytics.map((skill, index) => (
//                       <div key={index} className="bg-gray-800/30 rounded-lg p-4">
//                         <div className="flex items-center justify-between mb-2">
//                           <span className="text-white font-medium">{skill.skill}</span>
//                           <div className="flex items-center space-x-2">
//                             <span className={getScoreColor(skill.avgScore)}>{skill.avgScore}%</span>
//                             <span className="text-green-400 text-sm">{skill.trend}</span>
//                           </div>
//                         </div>
//                         <div className="flex items-center justify-between text-sm text-gray-400">
//                           <span>{skill.candidates.toLocaleString()} candidates</span>
//                           <TrendingUp className="w-4 h-4 text-green-400" />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="bg-gradient-to-b from-gray-900 to-black border-yellow-500/20 p-6">
//                   <h4 className="text-xl font-bold text-white mb-6">Performance Distribution</h4>
//                   <div className="space-y-6">
//                     <div>
//                       <div className="flex justify-between mb-2">
//                         <span className="text-gray-400">Excellent (90-100%)</span>
//                         <span className="text-green-400">28%</span>
//                       </div>
//                       <div className="w-full bg-gray-700 rounded-full h-2">
//                         <div className="bg-green-400 h-2 rounded-full" style={{width: '28%'}}></div>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex justify-between mb-2">
//                         <span className="text-gray-400">Good (80-89%)</span>
//                         <span className="text-yellow-400">42%</span>
//                       </div>
//                       <div className="w-full bg-gray-700 rounded-full h-2">
//                         <div className="bg-yellow-400 h-2 rounded-full" style={{width: '42%'}}></div>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex justify-between mb-2">
//                         <span className="text-gray-400">Average (70-79%)</span>
//                         <span className="text-orange-400">22%</span>
//                       </div>
//                       <div className="w-full bg-gray-700 rounded-full h-2">
//                         <div className="bg-orange-400 h-2 rounded-full" style={{width: '22%'}}></div>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex justify-between mb-2">
//                         <span className="text-gray-400">Below Average (60-69%)</span>
//                         <span className="text-red-400">8%</span>
//                       </div>
//                       <div className="w-full bg-gray-700 rounded-full h-2">
//                         <div className="bg-red-400 h-2 rounded-full" style={{width: '8%'}}></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* CTA Section */}
//           <div className="text-center mt-16 p-8 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-lg border border-yellow-500/20">
//             <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
//             <p className="text-gray-300 mb-6">
//               This is just a preview of what our platform can do. Get full access to unlock all features.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-3">
//                 Start Free Trial
//               </button>
//               <Link to="/contact">
//                 <button variant="outline" className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold text-lg px-8 py-3">
//                   Schedule Demo Call
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Demo;


// import { useState } from "react";
// import {
//   Code,
//   BarChart3,
//   Users,
//   Trophy,
//   ArrowLeft,
//   Play,
//   Filter,
//   Download,
//   Eye,
//   TrendingUp,
//   Target,
//   Award,
//   CheckCircle,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Demo = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   const demoStats = {
//     totalCandidates: 25847,
//     testsCompleted: 48392,
//     avgScore: 78.5,
//     topPerformers: 3428,
//   };

//   const recentTests = [
//     { candidate: "Rahul Sharma", test: "Programming Fundamentals", score: 92, date: "2024-01-20", status: "Excellent" },
//     { candidate: "Priya Patel", test: "Data Analysis", score: 89, date: "2024-01-19", status: "Good" },
//     { candidate: "Arjun Kumar", test: "Technical Aptitude", score: 94, date: "2024-01-18", status: "Excellent" },
//     { candidate: "Sneha Gupta", test: "English Proficiency", score: 87, date: "2024-01-17", status: "Good" },
//     { candidate: "Vikash Singh", test: "Logical Reasoning", score: 91, date: "2024-01-16", status: "Excellent" },
//   ];

//   const skillAnalytics = [
//     { skill: "Programming", avgScore: 84.2, candidates: 8934, trend: "+12%" },
//     { skill: "Data Analysis", avgScore: 79.6, candidates: 6421, trend: "+8%" },
//     { skill: "Aptitude", avgScore: 76.8, candidates: 15420, trend: "+5%" },
//     { skill: "English", avgScore: 82.1, candidates: 12847, trend: "+15%" },
//     { skill: "Quantitative", avgScore: 78.9, candidates: 9632, trend: "+7%" },
//   ];

//   const getScoreColor = (score) => {
//     if (score >= 90) return "text-green-400";
//     if (score >= 80) return "text-yellow-400";
//     if (score >= 70) return "text-orange-400";
//     return "text-red-400";
//   };

//   const getStatusColor = (status) => {
//     if (status === "Excellent") return "bg-green-500/20 text-green-400";
//     if (status === "Good") return "bg-yellow-500/20 text-yellow-400";
//     return "bg-orange-500/20 text-orange-400";
//   };

//   const buttonBase = "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-colors px-4 py-2";

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
//       <div className="text-center mb-12">
//         <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
//           <Play className="w-10 h-10 text-black" />
//         </div>
//         <h1 className="text-5xl md:text-6xl font-bold mb-6">
//           <span className="text-white">Platform </span>
//           <span className="text-yellow-400">Demo</span>
//         </h1>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//           Experience the power of our comprehensive hiring platform. Explore real candidate data,
//           analytics, and features that will transform your recruitment process.
//         </p>
//       </div>

//       {/* Tabs */}
//       <div className="flex justify-center mb-12">
//         <div className="flex bg-gray-800/50 rounded-lg p-2">
//           {[
//             { key: "dashboard", label: "Dashboard", icon: <BarChart3 className="w-4 h-4 mr-2" /> },
//             { key: "candidates", label: "Candidates", icon: <Users className="w-4 h-4 mr-2" /> },
//             { key: "analytics", label: "Analytics", icon: <Trophy className="w-4 h-4 mr-2" /> },
//           ].map((tab) => (
//             <button
//               key={tab.key}
//               onClick={() => setActiveTab(tab.key)}
//               className={`${buttonBase} ${activeTab === tab.key ? "bg-yellow-500 text-black hover:bg-yellow-600" : "text-gray-400 hover:text-white"}`}
//             >
//               {tab.icon} {tab.label}
//             </button>
//           ))}
//         </div>
//       </div>



//       {/* Content */}
//       {activeTab === "dashboard" && (
//         <div className="space-y-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[{
//               title: "Total Candidates",
//               value: demoStats.totalCandidates,
//               icon: <Users className="w-8 h-8 text-yellow-400" />
//             }, {
//               title: "Tests Completed",
//               value: demoStats.testsCompleted,
//               icon: <CheckCircle className="w-8 h-8 text-green-400" />
//             }, {
//               title: "Average Score",
//               value: `${demoStats.avgScore}%`,
//               icon: <Target className="w-8 h-8 text-yellow-400" />
//             }, {
//               title: "Top Performers",
//               value: demoStats.topPerformers,
//               icon: <Award className="w-8 h-8 text-yellow-400" />
//             }].map((stat, idx) => (
//               <div key={idx} className="rounded-lg border border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-400 text-sm">{stat.title}</p>
//                     <p className="text-2xl font-bold text-white">{typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}</p>
//                   </div>
//                   {stat.icon}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* CTA */}
//       <div className="text-center mt-16 p-8 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-lg border border-yellow-500/20">
//         <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
//         <p className="text-gray-300 mb-6">
//           This is just a preview of what our platform can do. Get full access to unlock all features.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className={`${buttonBase} bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-3`}>
//             Start Free Trial
//           </button>
//           <Link to="/contact">
//             <button className={`${buttonBase} border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black text-lg px-8 py-3`}>
//               Schedule Demo Call
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Demo;


import { useState } from "react";
import { Code, BarChart3, Users, Trophy, ArrowLeft, Play, Filter, Download, Eye, Star, TrendingUp, Target, Clock, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Demo = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const demoStats = {
    totalCandidates: 25847,
    testsCompleted: 48392,
    avgScore: 78.5,
    topPerformers: 3428
  };

  const recentTests = [
    { candidate: "Rahul Sharma", test: "Programming Fundamentals", score: 92, date: "2024-01-20", status: "Excellent" },
    { candidate: "Priya Patel", test: "Data Analysis", score: 89, date: "2024-01-19", status: "Good" },
    { candidate: "Arjun Kumar", test: "Technical Aptitude", score: 94, date: "2024-01-18", status: "Excellent" },
    { candidate: "Sneha Gupta", test: "English Proficiency", score: 87, date: "2024-01-17", status: "Good" },
    { candidate: "Vikash Singh", test: "Logical Reasoning", score: 91, date: "2024-01-16", status: "Excellent" }
  ];

  const skillAnalytics = [
    { skill: "Programming", avgScore: 84.2, candidates: 8934, trend: "+12%" },
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-400";
    if (score >= 80) return "text-yellow-400";
    if (score >= 70) return "text-orange-400";
    return "text-red-400";
  };

  const getStatusColor = (status) => {
    if (status === "Excellent") return "bg-green-500/20 text-green-400";
    if (status === "Good") return "bg-yellow-500/20 text-yellow-400";
    return "bg-orange-500/20 text-orange-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-4 sm:px-6 lg:px-8">
      <section className="py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Platform </span>
            <span className="text-yellow-400">Demo</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the power of our comprehensive hiring platform. Explore real candidate data,
            analytics, and features that will transform your recruitment process.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-gray-800/50 rounded-lg p-2">
            {[
              { key: "dashboard", icon: BarChart3, label: "Dashboard" },
              { key: "candidates", icon: Users, label: "Candidates" },
              { key: "analytics", icon: Trophy, label: "Analytics" }
            ].map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`inline-flex items-center px-4 py-2 rounded-md font-medium text-sm transition ${
                  activeTab === key
                    ? "bg-yellow-500 text-black hover:bg-yellow-600"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "dashboard" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Total Candidates", value: demoStats.totalCandidates, icon: <Users className="w-8 h-8 text-yellow-400" /> },
                { label: "Tests Completed", value: demoStats.testsCompleted, icon: <CheckCircle className="w-8 h-8 text-green-400" /> },
                { label: "Average Score", value: `${demoStats.avgScore}%`, icon: <Target className="w-8 h-8 text-yellow-400" /> },
                { label: "Top Performers", value: demoStats.topPerformers, icon: <Award className="w-8 h-8 text-yellow-400" /> }
              ].map((stat, idx) => (
                <div key={idx} className="rounded-lg border border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}</p>
                    </div>
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black p-6">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <h3 className="text-xl font-bold text-white">Recent Test Results</h3>
                <button className="inline-flex items-center border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-md text-sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={index} className="flex flex-wrap sm:flex-nowrap items-center justify-between bg-gray-800/30 rounded-lg p-4 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-yellow-400">{test.candidate.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{test.candidate}</p>
                        <p className="text-gray-400 text-sm">{test.test}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-right sm:text-left">
                      <div className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${getStatusColor(test.status)}`}>{test.status}</div>
                      <div>
                        <p className={`font-bold ${getScoreColor(test.score)}`}>{test.score}%</p>
                        <p className="text-gray-400 text-xs">{test.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        /* Updated Candidates and Analytics Tabs - Fully Responsive */

{/* Candidates Tab */}
{activeTab === "candidates" && (
  <div className="space-y-8">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h3 className="text-2xl font-bold text-white">Sample Candidate Pool</h3>
      <div className="flex flex-col sm:flex-row gap-2">
        <button className="border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-md flex items-center justify-center text-sm font-medium">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-md flex items-center justify-center text-sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {recentTests.slice(0, 4).map((test, index) => (
        <div key={index} className="bg-gradient-to-b from-gray-900 to-black border border-yellow-500/20 p-6 rounded-lg">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-black">{test.candidate.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{test.candidate}</h4>
                <p className="text-gray-400 text-sm">Software Developer</p>
              </div>
            </div>
            <div className={`text-xl font-bold ${getScoreColor(test.score)}`}>{test.score}</div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Last Test:</span>
              <span className="text-white">{test.test}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Date:</span>
              <span className="text-white">{test.date}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Status:</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(test.status)}`}>{test.status}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-md flex-1 text-sm">View Profile</button>
            <button className="border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-md flex-1 text-sm">Contact</button>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

{/* Analytics Tab */}
{activeTab === "analytics" && (
  <div className="space-y-8">
    <h3 className="text-2xl font-bold text-white">Skill-wise Performance Analytics</h3>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-gradient-to-b from-gray-900 to-black border border-yellow-500/20 p-6 rounded-lg">
        <h4 className="text-xl font-bold text-white mb-6">Skill Performance Overview</h4>
        <div className="space-y-4">
          {skillAnalytics.map((skill, index) => (
            <div key={index} className="bg-gray-800/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">{skill.skill}</span>
                <div className="flex items-center space-x-2">
                  <span className={getScoreColor(skill.avgScore)}>{skill.avgScore}%</span>
                  <span className="text-green-400 text-sm">{skill.trend}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{skill.candidates.toLocaleString()} candidates</span>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-black border border-yellow-500/20 p-6 rounded-lg">
        <h4 className="text-xl font-bold text-white mb-6">Performance Distribution</h4>
        <div className="space-y-6">
          {[{ label: "Excellent (90-100%)", value: "28%", color: "bg-green-400", text: "text-green-400" },
            { label: "Good (80-89%)", value: "42%", color: "bg-yellow-400", text: "text-yellow-400" },
            { label: "Average (70-79%)", value: "22%", color: "bg-orange-400", text: "text-orange-400" },
            { label: "Below Average (60-69%)", value: "8%", color: "bg-red-400", text: "text-red-400" }].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-gray-400">{item.label}</span>
                <span className={item.text}>{item.value}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className={`${item.color} h-2 rounded-full`} style={{ width: item.value }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)}

<div className="text-center mt-16 p-6 sm:p-8 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-lg border border-yellow-500/20">
  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
  <p className="text-gray-300 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
    This is just a preview of what our platform can do. Get full access to unlock all features.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch">
    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-base sm:text-lg px-6 py-3 rounded-md w-full sm:w-auto">
      Start Free Trial
    </button>
    <Link to="/contact" className="w-full sm:w-auto">
      <button className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold text-base sm:text-lg px-6 py-3 rounded-md w-full">
        Schedule Demo Call
      </button>
    </Link>
  </div>
</div>


      </section>
    </div>
  );
};

export default Demo;


