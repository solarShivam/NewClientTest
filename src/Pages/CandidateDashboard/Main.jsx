
// import React, { useEffect, useState } from "react";
// import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,Legend,AreaChart,Area,CartesianGrid,LineChart,Line,} from "recharts";
// import Card from "../../Components/Card/StudentCard";
// import { Helmet } from "react-helmet-async";
// import { useTheme } from "../../Components/Context/ThemeContext"; 

// // Custom Tooltip component for Recharts
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         style={{
//           backgroundColor: "rgba(0, 0, 0, 0.8)",
//           padding: "10px 15px",
//           borderRadius: "8px",
//           color: "white",
//           fontSize: "14px",
//           boxShadow: "0 0 10px rgba(0,0,0,0.5)",
//           minWidth: 120,
//         }}
//       >
//         <p style={{ marginBottom: 6, fontWeight: "bold" }}>{label}</p>
//         {payload.map((entry) => (
//           <p
//             key={entry.dataKey}
//             style={{
//               color: entry.color,
//               margin: 0,
//               fontWeight: "600",
//               fontSize: "13px",
//             }}
//           >
//               <span
//                 style={{
//                 display: "inline-block",
//                 width: 12,
//                 height: 12,
//                 backgroundColor: entry.color,
//                 marginRight: 8,
//                 borderRadius: 2, // slightly rounded square
//                 }}
//             />
//             {entry.name}: {entry.value}
//           </p>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// export default function StudentDashboard() {
//   const [tests, setTests] = useState([]);
//   const [selectedTest, setSelectedTest] = useState(null);
//   const { isDark} = useTheme();
  

//   useEffect(() => {
//     const sample = [
//       {
//         id: 1,
//         name: "Math Test 1",
//         date: "2025-06-01",
//         score: 80,
//         total: 100,
//         topicPerformance: [
//           {
//             topic: "Algebra",
//             totalQuestions: 10,
//             attempted: 9,
//             correct: 7,
//             wrong: 2,
//             level: "Good",
//           },
//           {
//             topic: "Geometry",
//             totalQuestions: 10,
//             attempted: 8,
//             correct: 5,
//             wrong: 3,
//             level: "Moderate",
//           },
//           {
//             topic: "Calculus",
//             totalQuestions: 10,
//             attempted: 4,
//             correct: 1,
//             wrong: 3,
//             level: "Low",
//           },
//         ],
//       },
//       {
//         id: 2,
//         name: "Science Test 1",
//         date: "2025-06-05",
//         score: 65,
//         total: 100,
//         topicPerformance: [
//           {
//             topic: "Physics",
//             totalQuestions: 10,
//             attempted: 9,
//             correct: 6,
//             wrong: 3,
//             level: "Moderate",
//           },
//           {
//             topic: "Chemistry",
//             totalQuestions: 10,
//             attempted: 10,
//             correct: 8,
//             wrong: 2,
//             level: "Good",
//           },
//           {
//             topic: "Biology",
//             totalQuestions: 10,
//             attempted: 7,
//             correct: 3,
//             wrong: 4,
//             level: "Low",
//           },
//         ],
//       },
//     ];
//     setTests(sample);
//     setSelectedTest(sample[0]);
//   }, []);

//   const scoreProgress = tests.map((test) => ({
//     name: test.name,
//     score: test.score,
//     total: test.total,
//   }));

//   // Custom Tooltip with dynamic background based on theme
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div
//           style={{
//             backgroundColor: isDark
//               ? "rgba(55, 65, 81, 0.9)" // dark gray bg
//               : "rgba(0, 0, 0, 0.8)",   // dark bg for light mode tooltip
//             padding: "10px 15px",
//             borderRadius: "8px",
//             color: isDark ? "white" : "white",
//             fontSize: "14px",
//             boxShadow: isDark
//               ? "0 0 10px rgba(255,255,255,0.1)"
//               : "0 0 10px rgba(0,0,0,0.5)",
//             minWidth: 120,
//           }}
//         >
//           <p style={{ marginBottom: 6, fontWeight: "bold" }}>{label}</p>
//           {payload.map((entry) => (
//             <p
//               key={entry.dataKey}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 margin: 0,
//                 fontWeight: "600",
//                 fontSize: "13px",
//                 color: entry.color,
//               }}
//             >
//               <span
//                 style={{
//                   display: "inline-block",
//                   width: 12,
//                   height: 12,
//                   backgroundColor: entry.color,
//                   marginRight: 8,
//                   borderRadius: 2,
//                 }}
//               />
//               {entry.name}: {entry.value}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };


//   return (
//     <div className={`p-6 space-y-8 ${isDark ? "bg-gray-900" : "bg-white"}`}>
//       <Helmet>
//         <title>Student Dashboard | Your App Name</title>
//         <meta
//           name="description"
//           content="Student dashboard showing test progress and performance charts."
//         />
//       </Helmet>

//       <h1 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>
//         Student Dashboard
//       </h1>

//       {/* Test Cards */}
//       <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {tests.map((test) => (
//           <Card
//             key={test.id}
//          className={`cursor-pointer transition-shadow duration-300 
//               dark:bg-gray-800 bg-white 
//               shadow-md hover:shadow-xl 
//               hover:ring-2 hover:ring-blue-500 dark:hover:ring-yellow-400 
//               ${selectedTest?.id === test.id ? "ring-2 ring-blue-500 dark:ring-yellow-400" : ""}`}
//             onClick={() => setSelectedTest(test)}
//           >
//             <h2 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
//               {test.name}
//             </h2>
//             <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
//               {test.date}
//             </p>
//             <p className={`mt-2 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
//               Score: {test.score}/{test.total}
//             </p>
//           </Card>
//         ))}
//       </section>

//       {/* Score Progress Area Chart */}
//       {tests.length > 0 && (
//         <section className="mt-10 space-y-4">
//           <h2 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
//             Overall Score Progress
//           </h2>
//           <Card className="w-full h-72">
//             <ResponsiveContainer>
//               <AreaChart
//                 data={scoreProgress}
//                 margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
//               >
//                 <defs>
//                   <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8} />
//                     <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#ccc"} />
//                 <XAxis dataKey="name" stroke={isDark ? "white" : "black"} />
//                 <YAxis stroke={isDark ? "white" : "black"} />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend
//                   wrapperStyle={{
//                     color: isDark ? "white" : "black",
//                   }}
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="score"
//                   stroke="#4F46E5"
//                   fill="url(#colorScore)"
//                   name="Score"
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </Card>
//         </section>
//       )}

//       {/* Selected Test Detail */}
//       {selectedTest && (
//         <section className="mt-10 space-y-6">
//           <h2 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
//             {selectedTest.name} - Topic Performance
//           </h2>

//           <Card className="w-full h-72">
//             <ResponsiveContainer>
//               <BarChart
//                 data={selectedTest.topicPerformance}
//                 margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
//               >
//                 <XAxis dataKey="topic" stroke={isDark ? "white" : "black"} />
//                 <YAxis stroke={isDark ? "white" : "black"} />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend
//                   wrapperStyle={{
//                     color: isDark ? "white" : "black",
//                   }}
//                 />
//                 <Bar dataKey="correct" name="Correct" fill="#22c55e" />
//                 <Bar dataKey="wrong" name="Wrong" fill="#ef4444" />
//               </BarChart>
//             </ResponsiveContainer>
//           </Card>

//           <Card className="w-full h-80">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={selectedTest.topicPerformance}
//                 margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#ccc"} />
//                 <XAxis dataKey="topic" stroke={isDark ? "white" : "black"} />
//                 <YAxis stroke={isDark ? "white" : "black"} />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend
//                   wrapperStyle={{
//                     color: isDark ? "white" : "black",
//                   }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="totalQuestions"
//                   stroke="#6366f1"
//                   name="Total Questions"
//                   strokeWidth={2}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="attempted"
//                   stroke="#3b82f6"
//                   name="Attempted"
//                   strokeWidth={2}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="correct"
//                   stroke="#22c55e"
//                   name="Correct"
//                   strokeWidth={2}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="wrong"
//                   stroke="#ef4444"
//                   name="Wrong"
//                   strokeWidth={2}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </Card>
//         </section>
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import Card from "../../Components/Card/StudentCard";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../Components/Context/ThemeContext";


export default function StudentDashboard() {
  const [tests, setTests] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  const { isDark } = useTheme();
  const [practiceProgress, setPracticeProgress] = useState([]);
  const [practiceView, setPracticeView] = useState("Week");

useEffect(() => {
  const dailyData = [
    { date: "2025-06-01", questionsAttempted: 15, correct: 10 },
    { date: "2025-06-02", questionsAttempted: 12, correct: 9 },
    { date: "2025-06-03", questionsAttempted: 18, correct: 13 },
    { date: "2025-08-04", questionsAttempted: 10, correct: 6 },
    { date: "2025-06-05", questionsAttempted: 20, correct: 15 },
    { date: "2025-06-06", questionsAttempted: 16, correct: 12 },
    { date: "2025-06-07", questionsAttempted: 14, correct: 11 },
    { date: "2025-06-08", questionsAttempted: 13, correct: 10 },
    { date: "2025-06-09", questionsAttempted: 17, correct: 14 },
    { date: "2025-06-10", questionsAttempted: 11, correct: 8 },
  ];
  setPracticeProgress(dailyData);
}, []);

const filteredPracticeData =
  practiceView === "Week" ? practiceProgress.slice(-7) : practiceProgress;

  useEffect(() => {
    const sample = [
      {
        id: 1,
        name: "Math Test 1",
        date: "2025-06-01",
        score: 80,
        total: 100,
        topicPerformance: [
          { topic: "Algebra", totalQuestions: 10, attempted: 9, correct: 7, wrong: 2, level: "Good" },
          { topic: "Geometry", totalQuestions: 10, attempted: 8, correct: 5, wrong: 3, level: "Moderate" },
          { topic: "Calculus", totalQuestions: 10, attempted: 4, correct: 1, wrong: 3, level: "Low" },
        ],
      },
      {
        id: 2,
        name: "Science Test 1",
        date: "2025-06-05",
        score: 65,
        total: 100,
        topicPerformance: [
          { topic: "Physics", totalQuestions: 10, attempted: 9, correct: 6, wrong: 3, level: "Moderate" },
          { topic: "Chemistry", totalQuestions: 10, attempted: 10, correct: 8, wrong: 2, level: "Good" },
          { topic: "Biology", totalQuestions: 10, attempted: 7, correct: 3, wrong: 4, level: "Low" },
        ],
      },
    ];
    setTests(sample);
    setSelectedTest(sample[0]);
  }, []);

  const scoreProgress = tests.map((test) => ({
    name: test.name,
    score: test.score,
    total: test.total,
  }));

  const neumorphicStyle = isDark
    ? "bg-[#1f1f1f] shadow-[8px_8px_16px_#121212,-8px_-8px_16px_#2c2c2c]"
    : "bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]";

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: isDark ? "rgba(55, 65, 81, 0.9)" : "rgba(0, 0, 0, 0.8)",
            padding: "10px 15px",
            borderRadius: "8px",
            color: "white",
            fontSize: "14px",
            boxShadow: isDark
              ? "0 0 10px rgba(255,255,255,0.1)"
              : "0 0 10px rgba(0,0,0,0.5)",
            minWidth: 120,
          }}
        >
          <p style={{ marginBottom: 6, fontWeight: "bold" }}>{label}</p>
          {payload.map((entry) => (
            <p
              key={entry.dataKey}
              style={{
                display: "flex",
                alignItems: "center",
                margin: 0,
                fontWeight: "600",
                fontSize: "13px",
                color: entry.color,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  backgroundColor: entry.color,
                  marginRight: 8,
                  borderRadius: 2,
                }}
              />
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`p-6 space-y-8 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <Helmet>
        <title>Student Dashboard | GaloScore</title>
        <meta
          name="description"
          content="Student dashboard showing test progress and performance charts."
        />
      </Helmet>

      {/* Test Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test) => (
          <Card
            key={test.id}
            className={`cursor-pointer p-4 rounded-2xl transition duration-300 
              ${neumorphicStyle} 
              ${selectedTest?.id === test.id
                ? "ring-2 ring-blue-500 dark:ring-yellow-400"
                : "hover:ring-2 hover:ring-blue-500 dark:hover:ring-yellow-400"
              }`}
            onClick={() => setSelectedTest(test)}
          >
            <h2 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
              {test.name}
            </h2>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              {test.date}
            </p>
            <p className={`mt-2 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
              Score: {test.score}/{test.total}
            </p>
          </Card>
        ))}
      </section>

      {/* Score Progress Area Chart */}
      {tests.length > 0 && (
        <section className="mt-10 space-y-4">
          <h2 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
            Overall Score Progress
          </h2>
          <Card className={`w-full h-72 rounded-2xl p-4 ${neumorphicStyle}`}>
            <ResponsiveContainer>
              <AreaChart data={scoreProgress} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#ccc"} />
                <XAxis dataKey="name" stroke={isDark ? "white" : "black"} />
                <YAxis stroke={isDark ? "white" : "black"} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ color: isDark ? "white" : "black" }} />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#4F46E5"
                  fill="url(#colorScore)"
                  name="Score"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </section>
      )}

      {/* Selected Test Detail */}
      {selectedTest && (
        <section className="mt-10 space-y-6">
          <h2 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
            {selectedTest.name} - Topic Performance
          </h2>

          <Card className={`w-full h-72 rounded-2xl p-4 ${neumorphicStyle}`}>
            <ResponsiveContainer>
              <BarChart data={selectedTest.topicPerformance} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                <XAxis dataKey="topic" stroke={isDark ? "white" : "black"} />
                <YAxis stroke={isDark ? "white" : "black"} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ color: isDark ? "white" : "black" }} />
                <Bar dataKey="correct" name="Correct" fill="#22c55e" />
                <Bar dataKey="wrong" name="Wrong" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className={`w-full h-80 rounded-2xl p-4 ${neumorphicStyle}`}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={selectedTest.topicPerformance} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#ccc"} />
                <XAxis dataKey="topic" stroke={isDark ? "white" : "black"} />
                <YAxis stroke={isDark ? "white" : "black"} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ color: isDark ? "white" : "black" }} />
                <Line type="monotone" dataKey="totalQuestions" stroke="#6366f1" name="Total Questions" strokeWidth={2} />
                <Line type="monotone" dataKey="attempted" stroke="#3b82f6" name="Attempted" strokeWidth={2} />
                <Line type="monotone" dataKey="correct" stroke="#22c55e" name="Correct" strokeWidth={2} />
                <Line type="monotone" dataKey="wrong" stroke="#ef4444" name="Wrong" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </section>
      )}

 {practiceProgress.length > 0 && (
  <section className="mt-10 space-y-4">
    <div className="flex items-center justify-between">
      <h2 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
        Daily Practice Progress
      </h2>
      <div className="flex space-x-2">
        {["Week", "Month"].map((type) => (
          <button
            key={type}
            onClick={() => setPracticeView(type)}
            className={`px-4 py-1 rounded-full border transition-all duration-200 
              ${practiceView === type
                ? "bg-yellow-400 text-black border-yellow-500"
                : "bg-transparent text-gray-600 border-gray-400 hover:bg-gray-200"
              }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>

    <Card className={`w-full h-72 rounded-2xl p-4 ${neumorphicStyle}`}>
      <ResponsiveContainer>
        <LineChart data={filteredPracticeData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#ccc"} />
          <XAxis dataKey="date" stroke={isDark ? "white" : "black"} />
          <YAxis stroke={isDark ? "white" : "black"} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: isDark ? "white" : "black" }} />
          <Line type="monotone" dataKey="questionsAttempted" stroke="#f59e0b" name="Attempted" strokeWidth={2} />
          <Line type="monotone" dataKey="correct" stroke="#10b981" name="Correct" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  </section>
)}


    </div>
  );
}



