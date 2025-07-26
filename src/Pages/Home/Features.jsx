
import React from "react";
import {
  Zap,
  Brain,
  TimerReset,
  Trophy,
  FileBarChart,
  Smartphone,
  BookOpenCheck
} from "lucide-react";
import { useTheme } from "../../Components/Context/ThemeContext";

const Features = () => {
  const { isDark } = useTheme();

  const features = [
    {
      icon: TimerReset,
      title: "Instant Results",
      description:
        "Get your score and detailed performance analysis immediately after finishing a test. See strengths, weaknesses, time spent, and topic-wise breakdown to improve faster.",
      gradientFrom: "from-purple-500",
      gradientTo: "to-indigo-600",
      borderColor: "border-purple-200"
    },
    {
      icon: Trophy,
      title: "Leaderboards",
      description:
        "Compete with peers across the country and see where you stand in real-time. Gain motivation by tracking your rank among top performers, filter by region or skill, and climb your way to the top.",
      gradientFrom: "from-emerald-500",
      gradientTo: "to-teal-600",
      borderColor: "border-emerald-200"
    },
    {
      icon: FileBarChart,
      title: "Detailed Reports",
      description:
        "Receive in-depth analytics after every test—identify strong areas, weak topics, time management patterns, and get AI-generated improvement suggestions tailored to your performance history.",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-600",
      borderColor: "border-blue-200"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description:
        "Access full test functionality on any device—whether you're using a phone, tablet, or laptop. With a fully responsive interface and offline mode support, you can practice seamlessly, even on the go.",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-600",
      borderColor: "border-orange-200"
    },
    {
      icon: BookOpenCheck,
      title: "Subject-wise Practice",
      description:
        "Master each subject at your own pace by selecting focused practice sets from Math, Science, English, and more. Get chapter-level questions, smart difficulty adaptation, and instant feedback tailored to each topic.",
      gradientFrom: "from-indigo-500",
      gradientTo: "to-purple-600",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <section
      className={`py-32 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
          : "bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-900"
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-3 text-sm font-medium mb-6 shadow-lg">
            <Zap className="h-5 w-5 animate-pulse" />
            <span>Revolutionary Technology Stack</span>
            <Brain className="h-5 w-5" />
          </div>
          <h2 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
            Beyond Traditional
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Assessment Platforms
            </span>
          </h2>
          <p
            className={`text-4xl max-w-4xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Powered by innovation and engineered for the future workplace.
            Experience assessment technology that outpaces traditional platforms.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-lg border-2 ${
                  feature.borderColor
                } hover:border-transparent ${
                  isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } shadow-sm hover:shadow-3xl transition-all duration-700 hover:-translate-y-4`}
              >
                {/* Glow BG */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                />
                <div
                  className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} rounded-full opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-700`}
                />

                <div className="relative z-10 flex flex-col space-y-4 p-8 pb-0">
                  <div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold leading-snug">{feature.title}</h3>
                </div>

                <div className="relative z-10 p-8 pt-4">
                  <p
                    className={`text-xl leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                />
                <div
                  className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;



