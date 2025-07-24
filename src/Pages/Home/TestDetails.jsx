// import React from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { ArrowRight, Clock, FileText, BarChart } from "lucide-react";


// const TestDetail = () => {
//   const { testId } = useParams();
//   const navigate=useNavigate();

//   const testData = {
//     "aptitude-practice-set-1": {
//       title: "Aptitude Practice Set 1",
//       category: "Aptitude",
//       questions: 20,
//       duration: "30 minutes",
//       difficulty: "Easy",
//       description: "Test your logical reasoning, numerical ability, and verbal skills with this comprehensive aptitude test.",
//       color: "bg-blue-500",
//       icon: "🧠",
//       topics: ["Logical Reasoning", "Numerical Ability", "Verbal Reasoning", "Data Interpretation"],
//       instructions: [
//         "Read each question carefully before answering",
//         "You cannot go back to previous questions once submitted",
//         "There is no negative marking for wrong answers",
//         "You must complete the test within the time limit",
//         "Ensure stable internet connection throughout the test"
//       ],
//       sampleQuestions: [
//         {
//           question: "If A is taller than B, and B is taller than C, who is the shortest?",
//           options: ["A", "B", "C", "Cannot be determined"],
//           answer: "C"
//         },
//         {
//           question: "What comes next in the series: 2, 4, 8, 16, ?",
//           options: ["24", "32", "28", "20"],
//           answer: "32"
//         }
//       ]
//     }
//   };

//   const test = testData[testId];

//   if (!test) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center text-center p-8">
//         <div>
//           <h1 className="text-2xl font-bold mb-4">Test Not Found</h1>
//           <p className="text-gray-600 mb-6">
//             The test you're looking for does not exist or the URL is invalid.
//           </p>
//           <Link
//             to="/practice"
//             className="inline-flex items-center gap-2 rounded-md text-sm font-medium px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition"
//           >
//             ← Back to Practice Tests
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case "Easy":
//         return "bg-green-100 text-green-800";
//       case "Medium":
//         return "bg-yellow-100 text-yellow-800";
//       case "Hard":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };


//   return (
//     <div className="min-h-screen bg-white text-black">

//       {/* Header */}
//       <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//         <div className="max-w-4xl mx-auto">
//           <Link to="/practice" className="text-blue-200 hover:text-white text-sm mb-4 inline-block">
//             ← Back to Practice Tests
//           </Link>
//           <div className="flex items-start gap-6">
//             <div className={`w-16 h-16 ${test.color} rounded-lg flex items-center justify-center text-3xl`}>
//               {test.icon}
//             </div>
//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-3">
//                 <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-white text-blue-800">
//                   {test.category}
//                 </div>
//                 <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getDifficultyColor(test.difficulty)}`}>
//                   {test.difficulty}
//                 </div>
//               </div>
//               <h1 className="text-3xl font-bold mb-2">{test.title}</h1>
//               <p className="text-blue-100">{test.description}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Content */}
//       <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Main */}
//         <div className="lg:col-span-2 space-y-8">
//           {/* Overview */}
//           <div className="rounded-lg border bg-white shadow-sm">
//             <div className="flex flex-col space-y-1.5 p-6 border-b">
//               <h3 className="text-2xl font-semibold flex items-center gap-2">
//                 <BarChart className="h-5 w-5" />
//                 Test Overview
//               </h3>
//             </div>
//             <div className="p-6 pt-0">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {[
//                   { icon: FileText, value: test.questions, label: "Questions", color: "text-blue-600", bg: "bg-blue-50" },
//                   { icon: Clock, value: test.duration, label: "Duration", color: "text-green-600", bg: "bg-green-50" },
//                   { icon: BarChart, value: test.difficulty, label: "Difficulty", color: "text-purple-600", bg: "bg-purple-50" }
//                 ].map((item, idx) => (
//                   <div key={idx} className={`text-center p-4 rounded-lg ${item.bg}`}>
//                     <item.icon className={`h-8 w-8 mx-auto mb-2 ${item.color}`} />
//                     <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
//                     <div className="text-sm text-gray-600">{item.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Topics */}
//           <div className="rounded-lg border bg-white shadow-sm">
//             <div className="flex flex-col space-y-1.5 p-6 border-b">
//               <h3 className="text-2xl font-semibold">Topics Covered</h3>
//             </div>
//             <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-3">
//               {test.topics.map((topic, idx) => (
//                 <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                   <span className="text-sm font-medium">{topic}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Sample Questions */}
//           <div className="rounded-lg border bg-white shadow-sm">
//             <div className="flex flex-col space-y-1.5 p-6 border-b">
//               <h3 className="text-2xl font-semibold">Sample Questions</h3>
//             </div>
//             <div className="p-6 pt-0 space-y-4">
//               {test.sampleQuestions.map((q, idx) => (
//                 <div key={idx} className="p-4 border rounded-lg bg-gray-50">
//                   <div className="font-medium mb-2">Q{idx + 1}. {q.question}</div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                     {q.options.map((opt, oIdx) => (
//                       <div key={oIdx} className="flex items-center gap-2 p-2 bg-white rounded border text-sm">
//                         <div className="w-6 h-6 border rounded-full flex items-center justify-center text-xs font-medium">
//                           {String.fromCharCode(65 + oIdx)}
//                         </div>
//                         {opt}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="space-y-6">
//           {/* Start Test */}
//           <div className="rounded-lg border bg-yellow-50 p-6">
//             <h3 className="text-center text-lg font-semibold mb-4">Ready to Start?</h3>
//             <button 
//              onClick={() => navigate(`/practice/${testId}/start`)}
//             className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium px-4 py-2 bg-yellow-500 text-black hover:bg-yellow-600 transition mb-2">
//               Start Practice Test <ArrowRight className="h-4 w-4" />
//             </button>
//             <p className="text-xs text-gray-600 text-center">
//               Make sure you have a stable internet connection and sufficient time before starting.
//             </p>
//           </div>

//           {/* Instructions */}
//           <div className="rounded-lg border bg-white shadow-sm p-6">
//             <h3 className="text-lg font-semibold mb-3">Instructions</h3>
//             <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
//               {test.instructions.map((ins, idx) => (
//                 <li key={idx}>{ins}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Related Tests */}
//           <div className="rounded-lg border bg-white shadow-sm p-6">
//             <h3 className="text-lg font-semibold mb-3">More Practice Tests</h3>
//             <div className="space-y-2">
//               <Link to="/practice/programming-basics" className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition">
//                 <div className="font-medium text-sm">Programming Basics</div>
//                 <div className="text-xs text-gray-600">15 questions • 25 min</div>
//               </Link>
//               <Link to="/practice/quantitative-aptitude" className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition">
//                 <div className="font-medium text-sm">Quantitative Aptitude</div>
//                 <div className="text-xs text-gray-600">25 questions • 40 min</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestDetail;


import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowRight, Clock, FileText, BarChart } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../Components/Context/ThemeContext";

const TestDetail = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const testData = {
    "aptitude-practice-set-1": {
      title: "Aptitude Practice Set 1",
      category: "Aptitude",
      questions: 20,
      duration: "30 minutes",
      difficulty: "Easy",
      description: "Test your logical reasoning, numerical ability, and verbal skills with this comprehensive aptitude test.",
      color: "bg-yellow-500",
      icon: "🧠",
      topics: ["Logical Reasoning", "Numerical Ability", "Verbal Reasoning", "Data Interpretation"],
      instructions: [
        "Read each question carefully before answering",
        "You cannot go back to previous questions once submitted",
        "There is no negative marking for wrong answers",
        "You must complete the test within the time limit",
        "Ensure stable internet connection throughout the test"
      ],
      sampleQuestions: [
        {
          question: "If A is taller than B, and B is taller than C, who is the shortest?",
          options: ["A", "B", "C", "Cannot be determined"],
          answer: "C"
        },
        {
          question: "What comes next in the series: 2, 4, 8, 16, ?",
          options: ["24", "32", "28", "20"],
          answer: "32"
        }
      ]
    }
  };

  const test = testData[testId];

  if (!test) {
    return (
      <div className={`min-h-screen flex items-center justify-center text-center p-8 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
        <div>
          <h1 className="text-2xl font-bold mb-4">Test Not Found</h1>
          <p className="text-gray-500 dark:text-gray-300 mb-6">
            The test you're looking for does not exist or the URL is invalid.
          </p>
          <Link
            to="/practice"
            className="inline-flex items-center gap-2 rounded px-4 py-2 bg-yellow-500 text-black hover:bg-yellow-600 transition"
          >
            ← Back to Practice Tests
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-800 dark:text-white";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-black";
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-800 dark:text-white";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white";
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Helmet>
        <title>{test.title} | Practice Test Details</title>
        <meta name="description" content={`Prepare for ${test.title} - ${test.description}`} />
      </Helmet>

      {/* Header */}
      <section className={`py-12 px-4 ${isDark ? "bg-yellow-500 text-black" : "bg-yellow-500 text-white"}`}>
        <div className="max-w-4xl mx-auto">
          <Link
            to="/practice"
            className="text-black hover:underline text-sm mb-4 inline-block"
          >
            ← Back to Practice Tests
          </Link>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className={`w-16 h-16 ${test.color} rounded-lg flex items-center justify-center text-3xl`}>
              {test.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <div className="inline-flex items-center rounded-full px-2.5 py-0.2 md:px-4 md:py-2 text-xs md:text-sm font-semibold bg-black text-yellow-500">
                  {test.category}
                </div>
                <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold ${getDifficultyColor(test.difficulty)}`}>
                  {test.difficulty}
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-1">{test.title}</h1>
              <p className="opacity-80">{test.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <div className={`rounded-lg border ${isDark ? "bg-gray-900 border-gray-700" : "bg-gray-50"} shadow-sm`}>
            <div className="p-6 border-b border-gray-300 dark:border-gray-700">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <BarChart className="h-5 w-5 md:h-8 md:w-8" /> Test Overview
              </h3>
            </div>
            {/* <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: FileText, value: test.questions, label: "Questions" },
                { icon: Clock, value: test.duration, label: "Duration" },
                { icon: BarChart, value: test.difficulty, label: "Difficulty" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`text-center p-4 rounded-lg ${isDark ? "bg-black text-yellow-500 border border-yellow-500" : "bg-yellow-100 text-black"}`}
                >
                  <item.icon className="h-8 w-8 mx-auto mb-1" />
                  <div className="text-xl font-bold">{item.value}</div>
                  <div className="text-sm">{item.label}</div>
                </div>
              ))}
            </div> */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 ">
  {[
    { icon: FileText, value: test.questions, label: "Questions" },
    { icon: Clock, value: test.duration, label: "Duration" },
    { icon: BarChart, value: test.difficulty, label: "Difficulty" }
  ].map((item, idx) => (
    <div
      key={idx}
      className={`text-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-400
      ${isDark 
        ? "bg-black text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-black" 
        : "bg-yellow-100 text-black hover:bg-yellow-200"
      }`}
    >
      <item.icon className="h-8 w-8 mx-auto mb-2" />
      <div className="text-xl font-bold">{item.value}</div>
      <div className="text-sm">{item.label}</div>
    </div>
  ))}
</div>

          </div>

          {/* Topics */}
          <div className={`rounded-lg border ${isDark ? "bg-gray-900 border-gray-700" : "bg-gray-50"} shadow-sm`}>
            <div className="p-6 border-b border-gray-300 dark:border-gray-700">
              <h3 className="text-2xl font-semibold">Topics Covered</h3>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {test.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 p-3 rounded ${isDark ? "bg-black border border-yellow-500" : "bg-yellow-50"}`}
                >
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Questions */}
          <div className={`rounded-lg border ${isDark ? "bg-gray-900 border-gray-700" : "bg-gray-50"} shadow-sm`}>
            <div className="p-6 border-b border-gray-300 dark:border-gray-700">
              <h3 className="text-2xl font-semibold">Sample Questions</h3>
            </div>
            <div className="p-6 space-y-4">
              {test.sampleQuestions.map((q, idx) => (
                <div key={idx} className={`p-4 rounded ${isDark ? "bg-black border border-yellow-500" : "bg-white border border-yellow-300"}`}>
                  <div className="font-medium mb-2">Q{idx + 1}. {q.question}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, oIdx) => (
                      <div key={oIdx} className={`flex items-center gap-2 p-2 rounded ${isDark ? "bg-gray-800" : "bg-yellow-50"}`}>
                        <div className="w-6 h-6 border border-yellow-500 rounded-full flex items-center justify-center text-xs font-medium">
                          {String.fromCharCode(65 + oIdx)}
                        </div>
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Start Test */}
          <div className={`rounded-lg p-6 ${isDark ? "bg-black border border-yellow-500" : "bg-yellow-50 border border-yellow-200"}`}>
            <h3 className="text-lg font-semibold mb-3 text-center">Ready to Start?</h3>
            <button
              onClick={() => navigate(`/practice/${testId}/start`)}
              className="w-full flex items-center justify-center gap-2 rounded px-4 py-2 bg-yellow-500 text-black hover:bg-yellow-600 transition mb-2"
            >
              Start Practice Test <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-center">Ensure stable internet and sufficient time before starting.</p>
          </div>

          {/* Instructions */}
          <div className={`rounded-lg p-6 ${isDark ? "bg-gray-900 border border-gray-700" : "bg-gray-50 border"}`}>
            <h3 className="text-lg font-semibold mb-3">Instructions</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {test.instructions.map((ins, idx) => (
                <li key={idx}>{ins}</li>
              ))}
            </ul>
          </div>

          {/* Related Tests */}
          <div className={`rounded-lg p-6 ${isDark ? "bg-gray-900 border border-gray-700" : "bg-gray-50 border"}`}>
            <h3 className="text-lg font-semibold mb-3">More Practice Tests</h3>
            <div className="space-y-2">
              <Link
                to="/practice/programming-basics"
                className={`block p-3 rounded ${isDark ? "bg-black border border-yellow-500 hover:bg-yellow-500 hover:text-black" : "bg-yellow-50 hover:bg-yellow-100"}`}
              >
                <div className="font-medium text-sm">Programming Basics</div>
                <div className="text-xs">15 questions • 25 min</div>
              </Link>
              <Link
                to="/practice/quantitative-aptitude"
                className={`block p-3 rounded ${isDark ? "bg-black border border-yellow-500 hover:bg-yellow-500 hover:text-black" : "bg-yellow-50 hover:bg-yellow-100"}`}
              >
                <div className="font-medium text-sm">Quantitative Aptitude</div>
                <div className="text-xs">25 questions • 40 min</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetail;
