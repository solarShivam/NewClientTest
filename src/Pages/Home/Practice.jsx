// import React, { useState } from "react";
// import {
//   Play, Clock, CheckCircle, XCircle, RotateCcw,
//   Brain
// } from "lucide-react";
// import { useTheme } from "../../Components/Context/ThemeContext";

// const Practice = () => {
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [showResult, setShowResult] = useState(false);
  
//   const { isDark } = useTheme();

//   const practiceTests = [
//     {
//       id: 1,
//       title: "Aptitude Practice Set 1",
//       questions: 20,
//       duration: "30 minutes",
//       difficulty: "Easy",
//       category: "Aptitude",
//       icon: Brain,
//       color: "from-blue-500 to-blue-600",
//     },
//   ];

//   const sampleQuestion = {
//     question: "What is the next number in the sequence: 2, 4, 8, 16, ?",
//     options: ["24", "28", "32", "64"],
//     correct: "32",
//     explanation: "This is a geometric sequence where each number is multiplied by 2.",
//   };

//   return (
//     <div className={`min-h-screen ${isDark ? "bg-gradient-to-b from-black via-gray-900 to-black text-white" : "bg-gradient-to-b from-white via-gray-100 to-white text-black"}`}>
//       {/* Header */}
//       <section className="py-16 px-4 text-center">
//         <h1 className="text-5xl font-bold mb-6">
//           <span>Practice </span>
//           <span className="text-yellow-400">Tests</span>
//         </h1>
//         <p className={`text-xl max-w-3xl mx-auto mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
//           Sharpen your skills with our practice tests. Get familiar with question patterns and improve your performance.
//         </p>
//       </section>

//       {/* Practice Tests */}
//       <section className="py-12 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {practiceTests.map((test) => {
//             const Icon = test.icon;
//             return (
//               <div
//                 key={test.id}
//                 className={`rounded-lg border shadow-sm transition-all group p-6 ${isDark ? "bg-gradient-to-b from-gray-900 to-black border-yellow-500/20 hover:border-yellow-500/50" : "bg-white border-gray-200 hover:border-yellow-500"}`}
//               >
//                 <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${test.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
//                   <Icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>{test.title}</h3>
//                 <span className="inline-flex items-center rounded-full border border-yellow-500/50 text-yellow-400 px-2.5 py-0.5 text-xs font-semibold mb-4">{test.category}</span>
//                 <div className={`space-y-2 mb-4 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
//                   <div className="flex justify-between"><span>Questions:</span><span>{test.questions}</span></div>
//                   <div className="flex justify-between"><span>Duration:</span><span>{test.duration}</span></div>
//                   <div className="flex justify-between"><span>Difficulty:</span><span className="text-yellow-400">{test.difficulty}</span></div>
//                 </div>
//                 <button className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full">
//                   <Play className="w-4 h-4 mr-2" />
//                   Start Practice
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//         {/* Sample Question */}
//         <div className={`rounded-lg border max-w-4xl mx-auto shadow-sm p-8 ${isDark ? "bg-gradient-to-b from-gray-900 to-black border-yellow-500/20" : "bg-white border-gray-200"}`}>
//           <h2 className="text-2xl font-bold text-center mb-6">Sample Practice Question</h2>
//           <div className="mb-6">
//             <div className="flex justify-between items-center mb-4 text-gray-400">
//               <span>Question 1 of 20</span>
//               <div className="flex items-center">
//                 <Clock className="w-4 h-4 mr-1" />
//                 <span>29:45</span>
//               </div>
//             </div>
//             <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-700 mb-4">
//               <div className="h-full bg-yellow-500 transition-all" style={{ width: "5%" }} />
//             </div>
//           </div>

//           <h3 className="text-xl mb-6">{sampleQuestion.question}</h3>
//           <div className="space-y-3 mb-8">
//             {sampleQuestion.options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedAnswer(option)}
//                 className={`w-full p-4 text-left rounded-lg border transition-all ${
//                   selectedAnswer === option
//                     ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
//                     : isDark
//                       ? "border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500"
//                       : "border-gray-300 bg-gray-100 text-gray-800 hover:border-gray-400"
//                 }`}
//               >
//                 <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
//                 {option}
//               </button>
//             ))}
//           </div>

//           <div className="flex gap-4 mb-6">
//             <button
//               onClick={() => setShowResult(!showResult)}
//               disabled={!selectedAnswer}
//               className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
//             >
//               {showResult ? 'Hide Answer' : 'Check Answer'}
//             </button>
//             <button
//               onClick={() => {
//                 setSelectedAnswer("");
//                 setShowResult(false);
//               }}
//               className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black"
//             >
//               <RotateCcw className="w-4 h-4 mr-2" />
//               Reset
//             </button>
//           </div>

//           {showResult && (
//             <div className={`p-4 rounded-lg border ${isDark ? "bg-gray-800/50 border-gray-600" : "bg-gray-100 border-gray-300"}`}>
//               <div className="flex items-center mb-2">
//                 {selectedAnswer === sampleQuestion.correct ? (
//                   <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
//                 ) : (
//                   <XCircle className="w-5 h-5 text-red-400 mr-2" />
//                 )}
//                 <span className={selectedAnswer === sampleQuestion.correct ? "text-green-400" : "text-red-400"}>
//                   {selectedAnswer === sampleQuestion.correct ? "Correct!" : "Incorrect"}
//                 </span>
//               </div>
//               <p className={isDark ? "text-gray-300" : "text-gray-700"}>
//                 <strong>Correct Answer:</strong> {sampleQuestion.correct}
//               </p>
//               <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
//                 <strong>Explanation:</strong> {sampleQuestion.explanation}
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Practice;


import React, { useState } from "react";
import {
  Play, Clock, CheckCircle, XCircle, RotateCcw, Brain,Calculator,Code, 
} from "lucide-react";
import { useTheme } from "../../Components/Context/ThemeContext";
import { useNavigate } from "react-router-dom";


const Practice = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate=useNavigate();

  const { isDark } = useTheme();
  const practiceTests = [
    {
      id: 1,
      title: "Aptitude Practice Set 1",
      questions: 20,
      duration: "30 minutes",
      difficulty: "Easy",
      category: "Aptitude",
      icon: Brain,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Programming Basics",
      questions: 15,
      duration: "25 minutes", 
      difficulty: "Medium",
      category: "Programming",
      icon: Code,
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Quantitative Aptitude",
      questions: 25,
      duration: "40 minutes",
      difficulty: "Medium",
      category: "Mathematics",
      icon: Calculator,
      color: "from-purple-500 to-purple-600"
    }
    
  ];
  const sampleQuestions = [
    {
      question: "What is the next number in the sequence: 2, 4, 8, 16, ?",
      options: ["24", "28", "32", "64"],
      correct: "32",
      explanation: "This is a geometric sequence where each number is multiplied by 2.",
    },
    {
      question: "If 5x = 20, what is the value of x?",
      options: ["2", "3", "4", "5"],
      correct: "4",
      explanation: "Divide both sides by 5: x = 20 / 5 = 4.",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      correct: "Paris",
      explanation: "Paris is the capital city of France.",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      correct: "Mars",
      explanation: "Mars is called the Red Planet due to its reddish appearance.",
    },
  ];

  const currentQuestion = sampleQuestions[currentQuestionIndex];
  const totalQuestions = sampleQuestions.length;
  const selectedAnswer = selectedAnswers[currentQuestionIndex] || "";

  const handleAnswerSelect = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResult(false);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-gradient-to-b from-black via-gray-900 to-black text-white" : "bg-gradient-to-b from-white via-gray-100 to-white text-black"}`}>
      <section className="py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span>Practice </span><span className="text-yellow-400">Tests</span>
        </h1>
        <p className={`text-xl max-w-3xl mx-auto mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          Sharpen your skills with our practice tests. Get familiar with question patterns and improve your performance.
        </p>
      </section>

        {/* Practice Tests */}
       <section className="py-12 px-4">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
           {practiceTests.map((test) => {
             const Icon = test.icon;
             return (
               <div
                 key={test.id}
                 className={`rounded-lg border shadow-sm transition-all group p-6 ${isDark ? "bg-gradient-to-b from-gray-900 to-black border-yellow-500/20 hover:border-yellow-500/50" : "bg-white border-gray-200 hover:border-yellow-500"}`}
               >
                 <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${test.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                   <Icon className="w-6 h-6 text-white" />
                 </div>
                 <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>{test.title}</h3>
                 <span className="inline-flex items-center rounded-full border border-yellow-500/50 text-yellow-400 px-2.5 py-0.5 text-xs font-semibold mb-4">{test.category}</span>
                 <div className={`space-y-2 mb-4 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                   <div className="flex justify-between"><span>Questions:</span><span>{test.questions}</span></div>
                   <div className="flex justify-between"><span>Duration:</span><span>{test.duration}</span></div>
                   <div className="flex justify-between"><span>Difficulty:</span><span className="text-yellow-400">{test.difficulty}</span></div>
                 </div>
                 {/* <button data-login-modal className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full">
                   <Play className="w-4 h-4 mr-2" />
                   Start Practice
                 </button> */}

                    <button  data-login-modal
                     onClick={() => navigate(`/practice/${test.title.toLowerCase().replace(/\s+/g, "-")}`)}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full">
                   <Play className="w-4 h-4 mr-2" />
                   Start Practice
                 </button>
               </div>
             );
           })}
         </div>
        </section>

      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className={`rounded-lg border shadow-sm p-8 ${isDark ? "bg-gradient-to-b from-gray-900 to-black border-yellow-500/20" : "bg-white border-gray-200"}`}>
          <div className="flex justify-between items-center mb-4 text-gray-400">
            <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" /><span>29:45</span>
            </div>
          </div>

          {/* Progress */}
          <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-700 mb-6">
            <div className="h-full bg-yellow-500 transition-all" style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }} />
          </div>

          <h3 className="text-xl mb-6">{currentQuestion.question}</h3>
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full p-4 text-left rounded-lg border transition-all ${
                  selectedAnswer === option
                    ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                    : isDark
                      ? "border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500"
                      : "border-gray-300 bg-gray-100 text-gray-800 hover:border-gray-400"
                }`}
              >
                <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
  <button
    onClick={() => setShowResult(!showResult)}
    disabled={!selectedAnswer}
    className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
  >
    {showResult ? 'Hide Answer' : 'Check Answer'}
  </button>
  <button
    onClick={handleReset}
    className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black"
  >
    <RotateCcw className="w-4 h-4 mr-2" />
    Reset All
  </button>

  {/* Only show if not first question */}
  {currentQuestionIndex > 0 && (
    <button
      onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
      className={`px-4 py-2 text-sm border rounded-md ${
        isDark
          ? "border-gray-500 text-white hover:bg-gray-700"
          : "border-gray-400 text-black hover:bg-gray-200"
      }`}
    >
      Previous
    </button>
  )}

  {/* Only show if not last question */}
  {currentQuestionIndex < totalQuestions - 1 && (
    <button
      onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
      className={`px-4 py-2 text-sm border rounded-md ${
        isDark
          ? "border-gray-500 text-white hover:bg-gray-700"
          : "border-gray-400 text-black hover:bg-gray-200"
      }`}
    >
      Next
    </button>
  )}
</div>


          {showResult && (
            <div className={`p-4 rounded-lg border ${isDark ? "bg-gray-800/50 border-gray-600" : "bg-gray-100 border-gray-300"}`}>
              <div className="flex items-center mb-2">
                {selectedAnswer === currentQuestion.correct ? (
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400 mr-2" />
                )}
                <span className={selectedAnswer === currentQuestion.correct ? "text-green-400" : "text-red-400"}>
                  {selectedAnswer === currentQuestion.correct ? "Correct!" : "Incorrect"}
                </span>
              </div>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                <strong>Correct Answer:</strong> {currentQuestion.correct}
              </p>
              <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                <strong>Explanation:</strong> {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Practice;
