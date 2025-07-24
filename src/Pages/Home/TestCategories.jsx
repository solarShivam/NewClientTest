// import React from "react";
// import {
//   Code,
//   Calculator,
//   Brain,
// } from "lucide-react";

// // Utility for class merging
// const cn = (...classes) => classes.filter(Boolean).join(" ");

// // Card Components
// const Card = React.forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("rounded-lg border bg-white text-gray-900 shadow-sm", className)}
//     {...props}
//   />
// ));
// Card.displayName = "Card";

// const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
//   <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
// ));
// CardHeader.displayName = "CardHeader";

// const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
//   <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
// ));
// CardTitle.displayName = "CardTitle";

// const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
//   <p ref={ref} className={cn("text-sm text-gray-600", className)} {...props} />
// ));
// CardDescription.displayName = "CardDescription";

// const CardContent = React.forwardRef(({ className, ...props }, ref) => (
//   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
// ));
// CardContent.displayName = "CardContent";

// // Basic Button Component
// const Button = React.forwardRef(({ className, ...props }, ref) => (
//   <button
//     ref={ref}
//     className={cn(
//       "inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
//       className
//     )}
//     {...props}
//   />
// ));
// Button.displayName = "Button";

// // Main Component
// const TestCategories = () => {
//   const categories = [
//     {
//       icon: Code,
//       title: "Programming & Development",
//       description: "Full-stack development, algorithms, data structures",
//       tests: "30+ Tests",
//       difficulty: "Beginner to Expert",
//       color: "from-blue-500 to-cyan-500",
//       popular: true,
//       skills: ["Java", "Python", "JavaScript", "React", "Node.js"],
//     },
//     {
//       icon: Brain,
//       title: "Artificial Intelligence",
//       description: "Machine Learning, Deep Learning, Neural Networks",
//       tests: "20+ Tests",
//       difficulty: "Intermediate to Expert",
//       color: "from-purple-500 to-pink-500",
//       popular: false,
//       skills: ["ML", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
//     },
//     {
//       icon: Calculator,
//       title: "Quantitative Aptitude",
//       description: "Mathematics, Statistics, Data Analysis, Probability",
//       tests: "25+ Tests",
//       difficulty: "Easy to Advanced",
//       color: "from-green-500 to-emerald-500",
//       popular: true,
//       skills: ["Statistics", "Probability", "Algebra", "Calculus", "Data Analysis"],
//     },
//   ];

//   return (
//     <section id="tests" className="py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
//             <Brain className="h-4 w-4" />
//             <span>Comprehensive Skill Assessment</span>
//           </div>
//           <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             Choose Your Assessment Path
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Explore our comprehensive range of skill assessments designed by industry experts 
//             to evaluate and validate your expertise across multiple domains.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {categories.map((category, index) => {
//             const Icon = category.icon;
//             return (
//               <Card
//                 key={index}
//                  className="group flex flex-col h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-opacity-50 relative"
//               >
//                 {category.popular && (
//                   <div className="absolute top-4 right-4 z-10">
//                     <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
//                       POPULAR
//                     </span>
//                   </div>
//                 )}

//                 <div className={`h-3 bg-gradient-to-r ${category.color}`} />

//                 <CardHeader className="pb-4 relative">
//                   <div className="flex items-center space-x-4 mb-4">
//                     <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                       <Icon className="h-7 w-7 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gray-800">
//                         {category.title}
//                       </CardTitle>
//                     </div>
//                   </div>
//                   <CardDescription>
//                     {category.description}
//                   </CardDescription>
//                 </CardHeader>

//                 <CardContent className="flex flex-col flex-grow justify-between space-y-6 pb-6">
//                   <div className="flex flex-wrap gap-2">
//                     {category.skills.slice(0, 3).map((skill, i) => (
//                       <span key={i} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-md">
//                         {skill}
//                       </span>
//                     ))}
//                     {category.skills.length > 3 && (
//                       <span className="bg-gray-100 text-gray-500 text-xs font-medium px-2 py-1 rounded-md">
//                         +{category.skills.length - 3} more
//                       </span>
//                     )}
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-gray-500">Tests:</span>
//                       <span className="font-semibold text-gray-900">{category.tests}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-500">Level:</span>
//                       <span className="font-semibold text-gray-900">{category.difficulty}</span>
//                     </div>
//                   </div>

//                   <div className="mt-auto flex space-x-2">
//                     <Button className={`flex-1 bg-gradient-to-r ${category.color} hover:shadow-lg transition-all duration-300 text-white border-0`}>
//                       Start Test
//                     </Button>
//                     <Button className="flex-1 text-gray-600 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
//                       Practice
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         <div className="text-center mt-16">
//           <div className="bg-gradient-to-r from-yellow-400 to-white rounded-2xl p-8 text-gray-800">
//             <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
//             <p className=" mb-6">
//               We're constantly adding new assessments. Request a custom test for your specific needs.
//             </p>
//             <Button className="bg-white  border border-gray-200 hover:bg-blue-50 px-6 py-3 rounded-md font-medium">
//               Request Custom Assessment
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestCategories;

import React from "react";
import { Code, Calculator, Brain } from "lucide-react";
import { useTheme } from "../../Components/Context/ThemeContext";

const TestCategories = () => {
  const { isDark } = useTheme();

  const categories = [
    {
      icon: Code,
      title: "Programming & Development",
      description: "Full-stack development, algorithms, data structures",
      tests: "30+ Tests",
      difficulty: "Beginner to Expert",
      color: "from-blue-500 to-cyan-500",
      popular: true,
      skills: ["Java", "Python", "JavaScript", "React", "Node.js"],
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Machine Learning, Deep Learning, Neural Networks",
      tests: "20+ Tests",
      difficulty: "Intermediate to Expert",
      color: "from-purple-500 to-pink-500",
      popular: false,
      skills: ["ML", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    },
    {
      icon: Calculator,
      title: "Quantitative Aptitude",
      description: "Mathematics, Statistics, Data Analysis, Probability",
      tests: "25+ Tests",
      difficulty: "Easy to Advanced",
      color: "from-green-500 to-emerald-500",
      popular: true,
      skills: ["Statistics", "Probability", "Algebra", "Calculus", "Data Analysis"],
    },
  ];

  return (
    <section
      id="tests"
      className={`py-24 ${
        isDark ? "bg-gray-900 text-white" : "bg-gradient-to-b from-gray-50 to-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center space-x-2 ${
              isDark ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-800"
            } rounded-full px-4 py-2 text-sm font-medium mb-4`}
          >
            <Brain className="h-4 w-4" />
            <span>Comprehensive Skill Assessment</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your Assessment Path
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Explore our comprehensive range of skill assessments designed by industry experts 
            to evaluate and validate your expertise across multiple domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className={`group flex flex-col h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 rounded-lg ${
                  isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                } relative`}
              >
                {category.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className={`h-3 bg-gradient-to-r ${category.color}`} />

                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-bold ${
                          isDark ? "text-white group-hover:text-gray-100" : "text-gray-900 group-hover:text-gray-800"
                        }`}
                      >
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <p className={isDark ? "text-gray-300 text-sm" : "text-gray-600 text-sm"}>
                    {category.description}
                  </p>
                </div>

                <div className="p-6 pt-0 flex flex-col flex-grow justify-between space-y-6 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium px-2 py-1 rounded-md ${
                          isDark ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                    {category.skills.length > 3 && (
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-md ${
                          isDark ? "bg-gray-700 text-gray-400" : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        +{category.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className={isDark ? "text-gray-400" : "text-gray-500"}>Tests:</span>
                      <span className={isDark ? "text-white font-semibold" : "text-gray-900 font-semibold"}>
                        {category.tests}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDark ? "text-gray-400" : "text-gray-500"}>Level:</span>
                      <span className={isDark ? "text-white font-semibold" : "text-gray-900 font-semibold"}>
                        {category.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto flex space-x-2">
                    <button
                      className={`flex-1 text-white border-0 text-sm font-medium px-4 py-2 rounded-md transition-all duration-300 bg-gradient-to-r ${category.color} hover:shadow-lg`}
                    >
                      Start Test
                    </button>
                    <button
                      className={`flex-1 text-sm font-medium px-4 py-2 rounded-md transition-all duration-300 ${
                        isDark
                          ? "text-gray-100 border border-gray-600 hover:bg-gray-700"
                          : "text-gray-600 border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                      }`}
                    >
                      Practice
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div
            className={`rounded-2xl p-8 ${
              isDark
                ? "bg-gradient-to-r from-yellow-800 via-yellow-700 to-yellow-600 text-white"
                : "bg-gradient-to-r from-yellow-400 to-white text-gray-800"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
            <p className="mb-6">
              We're constantly adding new assessments. Request a custom test for your specific needs.
            </p>
            <button
              className={`px-6 py-3 rounded-md font-medium border ${
                isDark
                  ? "bg-black text-white border-gray-700 hover:bg-gray-800"
                  : "bg-white border-gray-200 hover:bg-blue-50"
              }`}
            >
              Request Custom Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestCategories;



