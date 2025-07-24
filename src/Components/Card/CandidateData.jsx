// import { Helmet } from "react-helmet-async";
// import { useTheme } from "../../Components/Context/ThemeContext";

// const Card = ({ title, icon: Icon, value, percentage }) => {
//   const { isDark } = useTheme();

//   return (
//     <>
//       <Helmet>
//         <title>{title} | Dashboard</title>
//       </Helmet>

//       <div
//         className={`flex flex-col gap-y-4 rounded-lg border p-4 transition-colors ${
//           isDark
//             ? "border-slate-700 bg-slate-900"
//             : "border-slate-300 bg-white"
//         }`}
//       >
//         {/* Card Header */}
//         <div className="flex items-center gap-x-2">
//           <div
//             className={`w-fit rounded-lg p-2 transition-colors ${
//               isDark ? "bg-blue-600/20 text-blue-600" : "bg-blue-500/20 text-blue-500"
//             }`}
//           >
//             <Icon size={26} />
//           </div>
//           <p
//             className={`font-medium transition-colors ${
//               isDark ? "text-slate-50" : "text-slate-900"
//             }`}
//           >
//             {title}
//           </p>
//         </div>

//         {/* Card Body */}
//         <div
//           className={`flex flex-col gap-y-2 rounded-lg p-4 transition-colors ${
//             isDark ? "bg-slate-950" : "bg-slate-100"
//           }`}
//         >
//           <p
//             className={`text-3xl font-bold transition-colors ${
//               isDark ? "text-slate-50" : "text-slate-900"
//             }`}
//           >
//             {value}
//           </p>
//           <span
//             className={`flex w-fit items-center gap-x-2 rounded-full border px-2 py-1 font-medium transition-colors ${
//               isDark
//                 ? "border-blue-600 text-blue-600"
//                 : "border-blue-500 text-blue-500"
//             }`}
//           >
//             <Icon size={18} />
//             {percentage}
//           </span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

import { Helmet } from "react-helmet-async";
import { useTheme } from "../../Components/Context/ThemeContext";
import { TrendingUp } from "lucide-react";

const Card = ({ title, icon: Icon, value, percentage }) => {
  const { isDark } = useTheme();

  return (
    <>
      <Helmet>
        <title>{title} | Dashboard</title>
      </Helmet>

      <div
        className={`flex flex-col gap-y-4 rounded-lg border p-4 transition-colors ${
          isDark
            ? "border-slate-700 bg-slate-900"
            : "border-slate-300 bg-white"
        }`}
      >
        {/* Card Header */}
        <div className="flex items-center gap-x-2">
          <div
            className={`w-fit rounded-lg p-2 transition-colors ${
              isDark ? "bg-blue-600/20 text-blue-600" : "bg-blue-500/20 text-blue-500"
            }`}
          >
            <Icon size={26} />
          </div>
          <p
            className={`font-medium transition-colors ${
              isDark ? "text-slate-50" : "text-slate-900"
            }`}
          >
            {title}
          </p>
        </div>

        {/* Card Body */}
        <div
          className={`flex flex-col gap-y-2 rounded-lg p-4 transition-colors ${
            isDark ? "bg-slate-950" : "bg-slate-100"
          }`}
        >
          <p
            className={`text-3xl font-bold transition-colors ${
              isDark ? "text-slate-50" : "text-slate-900"
            }`}
          >
            {value}
          </p>

          {percentage && (
            <span
              className={`flex w-fit items-center gap-x-2 rounded-full border px-2 py-1 font-medium transition-colors ${
                isDark
                  ? "border-blue-600 text-blue-600"
                  : "border-blue-500 text-blue-500"
              }`}
            >
              <TrendingUp size={18} />
              {percentage}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;


