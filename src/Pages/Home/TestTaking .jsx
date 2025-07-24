// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Clock, ChevronLeft, ChevronRight, Flag, CheckCircle } from "lucide-react";

// const TestTaking = () => {
//   const { testId } = useParams();
//   const navigate = useNavigate();

//   const testQuestions = {
//     "quantitative-aptitude": {
//       title: "Quantitative Aptitude",
//       duration: 40,
//       questions: [
//         { id: 1, question: "If 20% of a number is 15, what is 35% of the same number?", options: ["26.25", "28.5", "30", "32.5"], correctAnswer: 0 },
//         { id: 2, question: "The area of a circle with radius 7 cm is:", options: ["154 cm²", "44 cm²", "22 cm²", "77 cm²"], correctAnswer: 0 },
//         { id: 3, question: "What is the compound interest on Rs. 2500 for 2 years at 4% per annum?", options: ["Rs. 204", "Rs. 200", "Rs. 208", "Rs. 210"], correctAnswer: 0 },
//         { id: 4, question: "If the ratio of boys to girls in a class is 3:2 and there are 30 students total, how many boys are there?", options: ["18", "12", "15", "20"], correctAnswer: 0 },
//         { id: 5, question: "What is 15% of 240?", options: ["36", "30", "42", "38"], correctAnswer: 0 }
//       ]
//     },
//     "aptitude-practice-set-1": {
//       title: "Aptitude Practice Set 1",
//       duration: 30,
//       questions: [
//         { id: 1, question: "If A is taller than B, and B is taller than C, who is the shortest?", options: ["A", "B", "C", "Cannot be determined"], correctAnswer: 2 },
//         { id: 2, question: "What comes next in the series: 2, 4, 8, 16, ?", options: ["24", "32", "28", "20"], correctAnswer: 1 },
//         { id: 3, question: "Choose the odd one out: Apple, Orange, Carrot, Banana", options: ["Apple", "Orange", "Carrot", "Banana"], correctAnswer: 2 }
//       ]
//     },
//     "programming-basics": {
//       title: "Programming Basics",
//       duration: 25,
//       questions: [
//         { id: 1, question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correctAnswer: 1 },
//         { id: 2, question: "Which data structure uses LIFO principle?", options: ["Queue", "Stack", "Array", "Linked List"], correctAnswer: 1 }
//       ]
//     }
//   };

//   const test = testQuestions[testId];
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(test ? test.duration * 60 : 0);
//   const [flagged, setFlagged] = useState(new Set());
//   const [showSubmitDialog, setShowSubmitDialog] = useState(false);

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (timeLeft === 0) {
//       handleSubmitTest();
//     }
//   }, [timeLeft]);

//   if (!test) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="p-8 bg-white shadow rounded-lg text-center">
//           <h1 className="text-2xl font-bold mb-4">Test Not Found</h1>
//           <button onClick={() => navigate("/practice")} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
//             Back to Practice Tests
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
//   };

//   const handleAnswerSelect = (index) => {
//     setAnswers({ ...answers, [currentQuestion]: index });
//   };

//   const handleFlag = () => {
//     const updated = new Set(flagged);
//     updated.has(currentQuestion) ? updated.delete(currentQuestion) : updated.add(currentQuestion);
//     setFlagged(updated);
//   };

//   const handleSubmitTest = () => {
//     let correct = 0;
//     test.questions.forEach((q, i) => {
//       if (answers[i] === q.correctAnswer) correct++;
//     });
//     const score = Math.round((correct / test.questions.length) * 100);
//     alert(`Test completed! Your score: ${score}% (${correct}/${test.questions.length})`);
//     navigate(`/practice/${testId}`);
//   };

//   const progress = ((currentQuestion + 1) / test.questions.length) * 100;
//   const answeredCount = Object.keys(answers).length;
//   const currentQ = test.questions[currentQuestion];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b shadow sticky top-0 z-10">
//         <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
//           <div>
//             <h1 className="text-xl font-bold">{test.title}</h1>
//             <p className="text-sm text-gray-600">Question {currentQuestion + 1} of {test.questions.length}</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2 text-lg font-mono">
//               <Clock className="h-5 w-5 text-red-500" />
//               <span className={timeLeft < 300 ? "text-red-500" : "text-gray-700"}>
//                 {formatTime(timeLeft)}
//               </span>
//             </div>
//             <button onClick={() => setShowSubmitDialog(true)} className="px-4 py-2 border border-green-500 text-green-600 rounded hover:bg-green-50 transition">
//               Submit Test
//             </button>
//           </div>
//         </div>
//         {/* Progress Bar */}
//         <div className="w-full h-2 bg-gray-200">
//           <div className="h-2 bg-blue-500 transition-all" style={{ width: `${progress}%` }}></div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
//         {/* Question Panel */}
//         <div className="lg:col-span-3 space-y-4">
//           <div className="bg-white rounded shadow p-6">
//             <div className="flex justify-between mb-4">
//               <h2 className="text-lg font-semibold">Question {currentQuestion + 1}</h2>
//               <button onClick={handleFlag} className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${flagged.has(currentQuestion) ? "bg-yellow-100 text-yellow-700" : "border border-gray-300 text-gray-700"}`}>
//                 <Flag className="h-4 w-4" /> {flagged.has(currentQuestion) ? "Flagged" : "Flag"}
//               </button>
//             </div>
//             <p className="mb-4 text-gray-800">{currentQ.question}</p>
//             <div className="space-y-2">
//               {currentQ.options.map((opt, idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => handleAnswerSelect(idx)}
//                   className={`p-3 rounded border cursor-pointer ${answers[currentQuestion] === idx ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:bg-gray-50"}`}
//                 >
//                   <span className="font-medium mr-2">{String.fromCharCode(65 + idx)}.</span>
//                   {opt}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-between">
//             <button onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)} disabled={currentQuestion === 0} className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50">
//               <ChevronLeft className="h-4 w-4 inline mr-1" /> Previous
//             </button>
//             <button onClick={() => currentQuestion < test.questions.length - 1 && setCurrentQuestion(currentQuestion + 1)} disabled={currentQuestion === test.questions.length - 1} className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50">
//               Next <ChevronRight className="h-4 w-4 inline ml-1" />
//             </button>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="bg-white rounded shadow p-4">
//           <h3 className="text-lg font-semibold mb-2">Question Palette</h3>
//           <p className="text-sm text-gray-600 mb-3">{answeredCount}/{test.questions.length} answered</p>
//           <div className="grid grid-cols-5 gap-2">
//             {test.questions.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentQuestion(idx)}
//                 className={`w-10 h-10 rounded text-sm font-medium ${idx === currentQuestion ? "bg-blue-500 text-white" : answers[idx] !== undefined ? "bg-green-100 text-green-700" : flagged.has(idx) ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"}`}
//               >
//                 {idx + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Submit Dialog */}
//       {showSubmitDialog && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded shadow p-6 max-w-sm w-full text-center">
//             <h2 className="text-lg font-semibold mb-4">Submit Test?</h2>
//             <p className="mb-4 text-gray-600">You have answered {answeredCount} out of {test.questions.length} questions. Are you sure you want to submit?</p>
//             <div className="flex gap-3">
//               <button onClick={() => setShowSubmitDialog(false)} className="flex-1 px-4 py-2 border rounded hover:bg-gray-100">Continue Test</button>
//               <button onClick={handleSubmitTest} className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Submit</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TestTaking;


import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Clock, ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { useTheme } from "../../Components/Context/ThemeContext";
import { Helmet } from "react-helmet-async";

const TestTaking = () => {
  const { isDark } = useTheme();
  const { testId } = useParams();
  const navigate = useNavigate();

  const testQuestions = {
    "quantitative-aptitude": {
      title: "Quantitative Aptitude",
      duration: 40,
      questions: [
        { id: 1, question: "If 20% of a number is 15, what is 35% of the same number?", options: ["26.25", "28.5", "30", "32.5"], correctAnswer: 0 },
        { id: 2, question: "The area of a circle with radius 7 cm is:", options: ["154 cm²", "44 cm²", "22 cm²", "77 cm²"], correctAnswer: 0 },
        { id: 3, question: "What is the compound interest on Rs. 2500 for 2 years at 4% per annum?", options: ["Rs. 204", "Rs. 200", "Rs. 208", "Rs. 210"], correctAnswer: 0 },
        { id: 4, question: "If the ratio of boys to girls in a class is 3:2 and there are 30 students total, how many boys are there?", options: ["18", "12", "15", "20"], correctAnswer: 0 },
        { id: 5, question: "What is 15% of 240?", options: ["36", "30", "42", "38"], correctAnswer: 0 }
      ]
    },
    "aptitude-practice-set-1": {
      title: "Aptitude Practice Set 1",
      duration: 30,
      questions: [
        { id: 1, question: "If A is taller than B, and B is taller than C, who is the shortest?", options: ["A", "B", "C", "Cannot be determined"], correctAnswer: 2 },
        { id: 2, question: "What comes next in the series: 2, 4, 8, 16, ?", options: ["24", "32", "28", "20"], correctAnswer: 1 },
        { id: 3, question: "Choose the odd one out: Apple, Orange, Carrot, Banana", options: ["Apple", "Orange", "Carrot", "Banana"], correctAnswer: 2 }
      ]
    },
    "programming-basics": {
      title: "Programming Basics",
      duration: 25,
      questions: [
        { id: 1, question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correctAnswer: 1 },
        { id: 2, question: "Which data structure uses LIFO principle?", options: ["Queue", "Stack", "Array", "Linked List"], correctAnswer: 1 }
      ]
    }
  };

  const test = testQuestions[testId];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(test ? test.duration * 60 : 0);
  const [flagged, setFlagged] = useState(new Set());
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleSubmitTest();
    }
  }, [timeLeft]);

  if (!test) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className="p-8 rounded-lg text-center border">
          <h1 className="text-2xl font-bold mb-4">Test Not Found</h1>
          <button
            onClick={() => navigate("/practice")}
            className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
          >
            Back to Practice Tests
          </button>
        </div>
      </div>
    );
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (index) => {
    setAnswers({ ...answers, [currentQuestion]: index });
  };

  const handleFlag = () => {
    const updated = new Set(flagged);
    updated.has(currentQuestion) ? updated.delete(currentQuestion) : updated.add(currentQuestion);
    setFlagged(updated);
  };

  const handleSubmitTest = () => {
    let correct = 0;
    test.questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
    });
    const score = Math.round((correct / test.questions.length) * 100);
    alert(`Test completed! Your score: ${score}% (${correct}/${test.questions.length})`);
    navigate(`/practice/${testId}`);
  };

  const progress = ((currentQuestion + 1) / test.questions.length) * 100;
  const answeredCount = Object.keys(answers).length;
  const currentQ = test.questions[currentQuestion];

  return (
    <div className={`${isDark ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      <Helmet>
        <title>{test.title} | Practice Test</title>
        <meta name="description" content={`Take the ${test.title} practice test now.`} />
      </Helmet>

      {/* Header */}
      <div className={`sticky top-0 z-10 ${isDark ? "bg-black border-b border-yellow-500" : "bg-white border-b"} shadow`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-xl font-bold">{test.title}</h1>
            <p className="text-sm opacity-80">Question {currentQuestion + 1} of {test.questions.length}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-lg font-mono">
              <Clock className="h-5 w-5 text-yellow-500" />
              <span className={timeLeft < 300 ? "text-yellow-500" : ""}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <button
              onClick={() => setShowSubmitDialog(true)}
              className="px-3 py-1 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-black transition text-sm"
            >
              Submit Test
            </button>
          </div>
        </div>
        <div className="w-full h-2 bg-gray-300 dark:bg-gray-700">
          <div className="h-2 bg-yellow-500 transition-all" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Question Panel */}
        <div className="lg:col-span-3 space-y-4">
          <div className={`rounded p-4 shadow ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
            <div className="flex justify-between mb-3">
              <h2 className="text-lg font-semibold">Question {currentQuestion + 1}</h2>
              <button
                onClick={handleFlag}
                className={`flex items-center gap-1 px-2 py-1 rounded text-xs border ${flagged.has(currentQuestion) ? "bg-yellow-500 text-black border-yellow-500" : "hover:bg-yellow-100"}`}
              >
                <Flag className="h-4 w-4" />
                {flagged.has(currentQuestion) ? "Flagged" : "Flag"}
              </button>
            </div>
            <p className="mb-3">{currentQ.question}</p>
            <div className="space-y-2">
              {currentQ.options.map((opt, idx) => (
                <div
                  key={idx}
                  onClick={() => handleAnswerSelect(idx)}
                  className={`cursor-pointer p-3 rounded border ${answers[currentQuestion] === idx ? "border-yellow-500 bg-yellow-100" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + idx)}.</span> {opt}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
              disabled={currentQuestion === 0}
              className="flex items-center gap-1 px-3 py-1 border rounded disabled:opacity-50 hover:bg-yellow-100"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <button
              onClick={() => currentQuestion < test.questions.length - 1 && setCurrentQuestion(currentQuestion + 1)}
              disabled={currentQuestion === test.questions.length - 1}
              className="flex items-center gap-1 px-3 py-1 border rounded disabled:opacity-50 hover:bg-yellow-100"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className={`rounded p-4 shadow ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
          <h3 className="text-lg font-semibold mb-2">Question Palette</h3>
          <p className="text-sm mb-3">{answeredCount}/{test.questions.length} answered</p>
          <div className="grid grid-cols-5 gap-2">
            {test.questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestion(idx)}
                className={`w-10 h-10 rounded text-sm font-medium
                  ${idx === currentQuestion ? "bg-yellow-500 text-black"
                    : answers[idx] !== undefined ? "bg-green-500 text-white"
                      : flagged.has(idx) ? "bg-yellow-300 text-black"
                        : "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Dialog */}
      {showSubmitDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`rounded shadow p-6 max-w-sm w-full text-center ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            <h2 className="text-lg font-semibold mb-3">Submit Test?</h2>
            <p className="mb-4 text-sm">You have answered {answeredCount} out of {test.questions.length} questions.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowSubmitDialog(false)}
                className="flex-1 px-4 py-2 border rounded hover:bg-yellow-100 dark:hover:bg-yellow-500 dark:hover:text-black"
              >
                Continue
              </button>
              <button
                onClick={handleSubmitTest}
                className="flex-1 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestTaking;
