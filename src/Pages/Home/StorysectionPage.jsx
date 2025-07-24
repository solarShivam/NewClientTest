// import * as React from "react";
// import { Star, Quote, Award, TrendingUp, Users } from "lucide-react";
// import InfiniteSuccessColumns from "./InfinteScroll";

// const SuccessStories = () => {
//   const stories = [
//     {
//       name: "Priya Sharma",
//       role: "Software Developer at TCS",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
//       score: "95%",
//       testType: "Programming Fundamentals",
//       story: "TestPortal helped me land my dream job at TCS. The practice questions were exactly like the real assessment, and the certificate gave me confidence during interviews.",
//       company: "Tata Consultancy Services",
//       salary: "₹8.5 LPA"
//     },
//     {
//       name: "Rahul Patel",
//       role: "Data Analyst at Infosys",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//       score: "92%",
//       testType: "Data Analytics",
//       story: "The unlimited practice feature was a game-changer. I improved my score from 60% to 92% and got selected in my first interview at Infosys.",
//       company: "Infosys Limited",
//       salary: "₹7.2 LPA"
//     },
//     {
//       name: "Sneha Gupta",
//       role: "UI/UX Designer at Wipro",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
//       score: "88%",
//       testType: "Design Thinking",
//       story: "TestPortal's industry-standard tests prepared me perfectly for the design challenges. The certificate was recognized by multiple companies.",
//       company: "Wipro Technologies",
//       salary: "₹6.8 LPA"
//     },
//     {
//       name: "Amit Kumar",
//       role: "DevOps Engineer at HCL",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//       score: "96%",
//       testType: "Cloud Computing",
//       story: "The detailed analytics helped me identify my weak areas. After focused practice, I scored 96% and got offers from 3 companies!",
//       company: "HCL Technologies",
//       salary: "₹9.1 LPA"
//     },
//     {
//       name: "Kavya Reddy",
//       role: "Business Analyst at Accenture",
//       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
//       score: "90%",
//       testType: "Business Analytics",
//       story: "The expert support team guided me throughout my preparation. The certification opened doors to top-tier consulting firms.",
//       company: "Accenture",
//       salary: "₹8.0 LPA"
//     },
//     {
//       name: "Arjun Singh",
//       role: "Cybersecurity Specialist at IBM",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
//       score: "94%",
//       testType: "Cybersecurity",
//       story: "TestPortal's comprehensive question bank covered all aspects of cybersecurity. The certificate was highly valued by IBM recruiters.",
//       company: "IBM India",
//       salary: "₹10.5 LPA"
//     }
//   ];

//   const stats = [
//     { icon: Users, label: "Students Placed", value: "15,000+" },
//     { icon: TrendingUp, label: "Average Salary Increase", value: "250%" },
//     { icon: Award, label: "Company Partners", value: "500+" },
//     { icon: Star, label: "Average Rating", value: "4.8/5" }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <section className="px-6 py-20 bg-gradient-to-b from-black to-gray-900">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             Success <span className="text-yellow-500">Stories</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
//             Real students, real results. See how TestPortal transformed careers and opened doors to dream jobs.
//           </p>
//         </div>
//       </section>

//       <section className="px-6 py-16 bg-gradient-to-r from-yellow-400 to-yellow-600 relative">
//         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'><path d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(0,0,0,0.1)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(#grid)' /></svg>`)}` }}></div>
//         <div className="max-w-7xl mx-auto relative">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-black">
//             {stats.map((stat, index) => (
//               <div key={index} className="flex flex-col items-center group">
//                 <div className="p-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <stat.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold mb-1">{stat.value}</div>
//                 <div className="text-lg font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="px-6 py-20 bg-gray-900">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               From Students to <span className="text-yellow-500">Professionals</span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Discover how our students achieved their career goals with TestPortal
//             </p>
//           </div>
//           <InfiniteSuccessColumns stories={stories} />
//         </div>
//       </section>

//       <section className="px-6 py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
//         <div className="max-w-4xl mx-auto text-center text-black">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready to Write Your Success Story?
//           </h2>
//           <p className="text-xl mb-8">
//             Join thousands of students who transformed their careers with TestPortal
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-black text-yellow-500 hover:bg-gray-900 text-lg px-12 py-6">
//               Start Your Journey
//             </button>
//             <button className="border-black text-black hover:bg-black hover:text-yellow-500 text-lg px-12 py-6">
//               View All Tests
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SuccessStories;

import * as React from "react";
import { Star, Quote, Award, TrendingUp, Users } from "lucide-react";
import InfiniteSuccessColumns from "./InfinteScroll";
import { useTheme } from "../../Components/Context/ThemeContext";

const SuccessStories = () => {
  const { isDark } = useTheme();
  const stories = [
    {
      name: "Priya Sharma",
      role: "Software Developer at TCS",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      score: "95%",
      testType: "Programming Fundamentals",
      story: "TestPortal helped me land my dream job at TCS. The practice questions were exactly like the real assessment, and the certificate gave me confidence during interviews.",
      company: "Tata Consultancy Services",
      salary: "₹8.5 LPA"
    },
    {
      name: "Rahul Patel",
      role: "Data Analyst at Infosys",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      score: "92%",
      testType: "Data Analytics",
      story: "The unlimited practice feature was a game-changer. I improved my score from 60% to 92% and got selected in my first interview at Infosys.",
      company: "Infosys Limited",
      salary: "₹7.2 LPA"
    },
    {
      name: "Sneha Gupta",
      role: "UI/UX Designer at Wipro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      score: "88%",
      testType: "Design Thinking",
      story: "TestPortal's industry-standard tests prepared me perfectly for the design challenges. The certificate was recognized by multiple companies.",
      company: "Wipro Technologies",
      salary: "₹6.8 LPA"
    },
    {
      name: "Amit Kumar",
      role: "DevOps Engineer at HCL",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      score: "96%",
      testType: "Cloud Computing",
      story: "The detailed analytics helped me identify my weak areas. After focused practice, I scored 96% and got offers from 3 companies!",
      company: "HCL Technologies",
      salary: "₹9.1 LPA"
    },
    {
      name: "Kavya Reddy",
      role: "Business Analyst at Accenture",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      score: "90%",
      testType: "Business Analytics",
      story: "The expert support team guided me throughout my preparation. The certification opened doors to top-tier consulting firms.",
      company: "Accenture",
      salary: "₹8.0 LPA"
    },
    {
      name: "Arjun Singh",
      role: "Cybersecurity Specialist at IBM",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      score: "94%",
      testType: "Cybersecurity",
      story: "TestPortal's comprehensive question bank covered all aspects of cybersecurity. The certificate was highly valued by IBM recruiters.",
      company: "IBM India",
      salary: "₹10.5 LPA"
    }
  ];

  const stats = [
    { icon: Users, label: "Students Placed", value: "15,000+" },
    { icon: TrendingUp, label: "Average Salary Increase", value: "250%" },
    { icon: Award, label: "Company Partners", value: "500+" },
    { icon: Star, label: "Average Rating", value: "4.8/5" }
  ];

  return (
   <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Section 1: Heading */}
      <section className={`${isDark ? "bg-gradient-to-b from-black to-gray-900" : "bg-gradient-to-b from-yellow-50 to-white"} px-6 py-20`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success <span className="text-yellow-500">Stories</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Real students, real results. See how TestPortal transformed careers and opened doors to dream jobs.
          </p>
        </div>
      </section>

      {/* Section 2: Stats */}
      <section className="px-6 py-16 bg-gradient-to-r from-yellow-400 to-yellow-600 relative">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'><path d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(0,0,0,0.1)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(#grid)' /></svg>`)}` }}
        ></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-black">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="p-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Testimonials */}
      <section className={`${isDark ? "bg-gray-900" : "bg-yellow-50"} px-6 py-20`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From Students to <span className="text-yellow-500">Professionals</span>
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Discover how our students achieved their career goals with TestPortal
            </p>
          </div>
          <InfiniteSuccessColumns stories={stories} />
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="px-6 py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students who transformed their careers with TestPortal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-yellow-500 hover:bg-gray-900 text-lg px-12 py-6 transition-colors duration-300">
              Start Your Journey
            </button>
            <button className="border-black text-black hover:bg-black hover:text-yellow-500 text-lg px-12 py-6 transition-colors duration-300">
              View All Tests
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;









