import React, { useState } from "react";
import {
  Play, CheckCircle, XCircle, RotateCcw, Brain, Calculator, Code,
  PlayCircle, Clock, Target, BookOpen, ArrowRight, Trophy, Zap,
} from "lucide-react";
import { useTheme } from "../../Components/Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Practice = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showTests, setShowTests] = useState(false);
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const practiceTests = [
    { id: 1, title: "Aptitude Practice Set 1", questions: 20, duration: "30 minutes", difficulty: "Easy", category: "Aptitude", icon: Brain, color: "from-blue-500 to-blue-600" },
    { id: 2, title: "Programming Basics", questions: 15, duration: "25 minutes", difficulty: "Medium", category: "Programming", icon: Code, color: "from-green-500 to-green-600" },
    { id: 3, title: "Quantitative Aptitude", questions: 25, duration: "40 minutes", difficulty: "Medium", category: "Mathematics", icon: Calculator, color: "from-purple-500 to-purple-600" },
  ];

  const sampleQuestions = [
    { question: "What is the next number in the sequence: 2, 4, 8, 16, ?", options: ["24", "28", "32", "64"], correct: "32", explanation: "This is a geometric sequence where each number is multiplied by 2." },
    { question: "If 5x = 20, what is the value of x?", options: ["2", "3", "4", "5"], correct: "4", explanation: "Divide both sides by 5: x = 20 / 5 = 4." },
    { question: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Rome"], correct: "Paris", explanation: "Paris is the capital city of France." },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], correct: "Mars", explanation: "Mars is called the Red Planet due to its reddish appearance." },
  ];

  const currentQuestion = sampleQuestions[currentQuestionIndex];
  const totalQuestions = sampleQuestions.length;
  const selectedAnswer = selectedAnswers[currentQuestionIndex] || "";

  const handleAnswerSelect = (option) => setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
  const handleReset = () => { setSelectedAnswers({}); setShowResult(false); setCurrentQuestionIndex(0); };

  const benefits = [
    { icon: <Target className="w-12 h-12 text-[#FFD700]" />, title: "Targeted Practice", description: "Practice specific skills with our curated question banks designed by industry experts" },
    { icon: <Brain className="w-12 h-12 text-[#FFD700]" />, title: "Adaptive Learning", description: "Our AI adapts to your learning pace and focuses on areas that need improvement" },
    { icon: <Trophy className="w-12 h-12 text-[#FFD700]" />, title: "Performance Analytics", description: "Track your progress with detailed analytics and performance insights" },
    { icon: <Zap className="w-12 h-12 text-[#FFD700]" />, title: "Instant Feedback", description: "Get immediate explanations and feedback to accelerate your learning" },
  ];

  return (
    <div className={`min-h-screen ${isDark
      ? "bg-gradient-to-b from-black via-gray-900 to-black text-white"
      : "bg-gradient-to-b from-[#FFFBEA] via-[#FFFDF5] to-white text-black"}`}>
      <div className="container mx-auto px-4 py-8">
        {/* heading section  */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className={`inline-flex items-center justify-center w-24 h-24 ${isDark ? "bg-[#231F09] border-[#4F4407]" : "bg-[#FFF5CC] border-[#FFD700]"} rounded-full border-2 mb-6`}>
              <Brain className={`w-12 h-12 ${isDark ? "text-[#FFD700]" : "text-[#A67C00]"}`} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">
              Master Your Skills with <span className="text-[#FFD700] stroke-black stroke-2" style={{ WebkitTextStroke: '2px #000' }}>Practice Tests</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Prepare for your dream job with our comprehensive practice tests. Build confidence, identify knowledge gaps, and track your progress with real-time analytics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button onClick={() => setShowTests(true)} className="inline-flex items-center justify-center gap-2 rounded-md md:text-xl text-lg font-semibold bg-[#FFD700] text-[#0A0A0A] px-10 py-2 md:px-16 md:py-4">
              <PlayCircle className="w-5 h-5" /> Start Practicing Now <ArrowRight className="md:w-7 md:h-7 w-4 h-4" />
            </button>
            <button className={`${isDark ? "" : "text-black"} inline-flex items-center justify-center gap-2 rounded-md md:text-xl text-lg font-medium border border-[#4F4407] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0A0A0A] md:px-16 md:py-4 px-10 py-2`}>
              <BookOpen className="w-7 h-7" /> Browse Test Library
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[{ label: "Practice Tests", value: "45+" }, { label: "Students Practiced", value: "50K+" }, { label: "Skill Categories", value: "15+" }, { label: "Success Rate", value: "92%" }].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`text-5xl font-bold ${isDark ? "text-[#FFD700] " : " text-[#222222]" } mb-2`} >{item.value}</div>
                <div className="text-gray-600 dark:text-gray-300 text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
         
         {/* why choose section  */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">Why Choose Our Practice Platform?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className={`${isDark ? "bg-[#232323] border-[#4F4407]" : "bg-gray-200 border-gray-400"} border rounded-lg shadow-sm text-center p-8`}>
                <div className="flex justify-center mb-4">{b.icon}</div>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-black"}`}>{b.title}</h3>
                <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>{b.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Tests card*/}
        <section className="py-12 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {practiceTests.map((test) => {
              const Icon = test.icon;
              return (
                <div
                  key={test.id}
                  className={`rounded-lg border shadow-lg transition-all group p-8 ${isDark ? "bg-gradient-to-b from-gray-900 to-black border-yellow-500/20 hover:border-yellow-500/50" : "bg-white border-gray-400 hover:border-yellow-500"}`}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${test.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>{test.title}</h3>
                  <span className={`inline-flex items-center rounded-full border ${isDark ? "border-yellow-500/50 text-yellow-400 " : "text-black border-gray-400" } px-3 py-1 text-sm font-semibold mb-4`}>{test.category}</span>
                  <div className={`space-y-3 mb-4 text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    <div className="flex justify-between"><span>Questions:</span><span>{test.questions}</span></div>
                    <div className="flex justify-between"><span>Duration:</span><span>{test.duration}</span></div>
                    <div className="flex justify-between"><span>Difficulty:</span><span className={`${isDark ? " text-yellow-400 " : "text-black"}`}>{test.difficulty}</span></div>
                  </div>
                  
                      <button  data-login-modal
                      onClick={() => navigate(`/practice/${test.title.toLowerCase().replace(/\s+/g, "-")}`)}
                      className="inline-flex items-center justify-center px-7 py-2 rounded-md text-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full">
                    <Play className="w-6 h-6 mr-2" />
                    Start Practice
                  </button>
                </div>
              );
            })}
          </div>
        </section>
        
         {/* practice test show question demo */}
        <section className="py-8 px-4 max-w-5xl mx-auto">
          <div className={`rounded-lg border shadow-sm p-8 ${isDark ? "bg-gradient-to-b from-gray-900 to-black border-yellow-500/20" : "bg-white border-gray-200"}`}>
            <div className="flex justify-between items-center mb-4 text-gray-400">
              <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2" /><span>29:45</span>
              </div>
            </div>

            {/* Progress */}
            <div className="relative h-5 w-full overflow-hidden rounded-full bg-gray-700 mb-6">
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
                className="inline-flex items-center justify-center px-6 py-2 rounded-md text-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                {showResult ? 'Hide Answer' : 'Check Answer'}
              </button>
              <button
                onClick={handleReset}
                className={`inline-flex items-center justify-center px-6 py-2 rounded-md text-lg border ${isDark ? " border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black " : "border-gray-400 bg-gray-200"}`}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset All
              </button>

              {/* Only show if not first question */}
              {currentQuestionIndex > 0 && (
                <button
                  onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                  className={`px-6 py-2 text-lg border rounded-md ${
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
        
        {/* how it work section  */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {["Choose Your Test", "Take the Test", "Analyze Results"].map((title, i) => (
              <div key={i} className="space-y-4">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto border-2 ${isDark ? "bg-[#231F09] border-[#4F4407]" : "bg-gray-200 border-gray-400"}`}>
                  <span className={`text-3xl font-bold ${ isDark ? "text-[#FFD700]" : ""}`}>{i + 1}</span>
                </div>
                <h3 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-black"}`}>{title}</h3>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-lg`}>{["Select from our library", "Answer questions", "Review feedback"][i]}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowTests(true)}
            className="inline-flex items-center justify-center gap-2 rounded-md md:text-xl text-lg font-semibold bg-[#FFD700] text-[#0A0A0A] hover:bg-[#E6C200] md:px-16 md:py-4 px-10 py-2"
          >
            Get Started Today
            <ArrowRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
