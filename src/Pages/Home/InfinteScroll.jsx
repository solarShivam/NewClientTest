// import React, { useEffect, useRef, useState } from "react";
// import { Star, Quote } from "lucide-react";
// import { useTheme } from "../../Components/Context/ThemeContext";
// const COLUMN_COUNT = 3;
// const SCROLL_SPEED = 1;
// const SCROLL_INTERVAL = 40;

// const InfiniteSuccessColumns = ({ stories }) => {
//   const { isDark } = useTheme();
//   const [pausedCols, setPausedCols] = useState(Array(COLUMN_COUNT).fill(false));
//   const containerRefs = useRef([]);

//   if (containerRefs.current.length !== COLUMN_COUNT) {
//     containerRefs.current = Array(COLUMN_COUNT)
//       .fill()
//       .map((_, i) => containerRefs.current[i] || React.createRef());
//   }

//   const columns = Array.from({ length: COLUMN_COUNT }, () => []);
//   stories.forEach((t, i) => columns[i % COLUMN_COUNT].push(t));

//   useEffect(() => {
//     const intervals = containerRefs.current.map((ref, colIdx) =>
//       setInterval(() => {
//         const el = ref.current;
//         if (!el || pausedCols[colIdx]) return;
//         el.scrollTop += SCROLL_SPEED;
//         if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
//           el.scrollTop = 0;
//         }
//       }, SCROLL_INTERVAL)
//     );

//     return () => intervals.forEach(clearInterval);
//   }, [pausedCols]);

//   const handleClick = (colIdx) => {
//     const next = [...pausedCols];
//     next[colIdx] = true;
//     setPausedCols(next);
//   };

//   const handleMouseLeave = (colIdx) => {
//     const next = [...pausedCols];
//     next[colIdx] = false;
//     setPausedCols(next);
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {columns.map((colData, colIdx) => (
//         <div key={colIdx} className="flex-1">
//           <div
//             ref={containerRefs.current[colIdx]}
//             className="h-[550px] overflow-y-auto hide-scrollbar"
//             onMouseLeave={() => handleMouseLeave(colIdx)}
//           >
//             {colData.concat(colData).map((story, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => handleClick(colIdx)}
//                 className="rounded-lg border border-yellow-500/20 bg-black text-white shadow-sm hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105 mb-6 p-6 cursor-pointer"
//               >
//                 <div className="flex flex-col space-y-1.5 text-center mb-4">
//                   <div className="relative mx-auto">
//                     <img
//                       src={story.image}
//                       alt={story.name}
//                       className="w-20 h-20 rounded-full object-cover border-2 border-yellow-500"
//                     />
//                     <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
//                       {story.score}
//                     </div>
//                   </div>
//                   <h3 className="text-white text-lg font-semibold leading-none tracking-tight mt-3">
//                     {story.name}
//                   </h3>
//                   <p className="text-yellow-500 text-sm font-semibold">{story.role}</p>
//                   <div className="text-sm text-gray-400">
//                     {story.company} • {story.salary}
//                   </div>
//                 </div>

//                 <div className="mb-2">
//                   <div className="flex items-center justify-between text-sm text-gray-400 mb-1">
//                     <span>Test Type:</span>
//                     <span className="text-yellow-500">{story.testType}</span>
//                   </div>
//                   <div className="flex items-center justify-center mb-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="relative">
//                   <Quote className="absolute top-0 left-0 h-6 w-6 text-yellow-500 opacity-50" />
//                   <p className="text-gray-300 text-sm leading-relaxed pl-8 italic">
//                     {story.story}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}

//       <style jsx>{`
//         .hide-scrollbar {
//           scrollbar-width: none;
//           -ms-overflow-style: none;
//         }
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default InfiniteSuccessColumns;


import React, { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useTheme } from "../../Components/Context/ThemeContext";

const COLUMN_COUNT = 3;
const SCROLL_SPEED = 1;
const SCROLL_INTERVAL = 40;

const InfiniteSuccessColumns = ({ stories }) => {
  const { isDark } = useTheme();
  const [pausedCols, setPausedCols] = useState(Array(COLUMN_COUNT).fill(false));
  const containerRefs = useRef([]);

  if (containerRefs.current.length !== COLUMN_COUNT) {
    containerRefs.current = Array(COLUMN_COUNT)
      .fill()
      .map((_, i) => containerRefs.current[i] || React.createRef());
  }

  const columns = Array.from({ length: COLUMN_COUNT }, () => []);
  stories.forEach((t, i) => columns[i % COLUMN_COUNT].push(t));

  useEffect(() => {
    const intervals = containerRefs.current.map((ref, colIdx) =>
      setInterval(() => {
        const el = ref.current;
        if (!el || pausedCols[colIdx]) return;
        el.scrollTop += SCROLL_SPEED;
        if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
          el.scrollTop = 0;
        }
      }, SCROLL_INTERVAL)
    );

    return () => intervals.forEach(clearInterval);
  }, [pausedCols]);

  const handleClick = (colIdx) => {
    const next = [...pausedCols];
    next[colIdx] = true;
    setPausedCols(next);
  };

  const handleMouseLeave = (colIdx) => {
    const next = [...pausedCols];
    next[colIdx] = false;
    setPausedCols(next);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {columns.map((colData, colIdx) => (
        <div key={colIdx} className="flex-1">
          <div
            ref={containerRefs.current[colIdx]}
            className="h-[550px] overflow-y-auto hide-scrollbar"
            onMouseLeave={() => handleMouseLeave(colIdx)}
          >
            {colData.concat(colData).map((story, idx) => (
              <div
                key={idx}
                onClick={() => handleClick(colIdx)}
                className={`rounded-lg border transition-all duration-300 transform hover:scale-105 mb-6 p-6 cursor-pointer shadow-sm
                  ${isDark
                    ? 'bg-black text-white border-yellow-500/20 hover:border-yellow-500/50'
                    : 'bg-white text-gray-800 border-gray-500 hover:border-yellow-500/30'}`}
              >
                <div className="flex flex-col space-y-1.5 text-center mb-4">
                  <div className="relative mx-auto">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-yellow-500"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      {story.score}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold leading-none tracking-tight mt-3">
                    {story.name}
                  </h3>
                  <p className={`${isDark ? "text-yellow-500" : "text-black"} text-sm font-semibold`}>{story.role}</p>
                  <div className="text-sm text-gray-400">
                    {story.company} • {story.salary}
                  </div>
                </div>

                <div className="mb-2">
                  <div className={`flex items-center justify-between text-sm ${isDark? "text-gray-400" : "text-black"} mb-1`}>
                    <span>Test Type:</span>
                    <span className={`${isDark ? " text-yellow-500" : "text-black"}`}>{story.testType}</span>
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className={`absolute top-0 left-0 h-6 w-6 ${isDark ? "text-yellow-500" : "text-black"} opacity-50`} />
                  <p className={`text-sm leading-relaxed pl-8 italic ${isDark ? "text-gray-300 " : "text-black "}`}>
                    {story.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default InfiniteSuccessColumns;
