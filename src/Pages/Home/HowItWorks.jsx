import React from "react";
import { Helmet } from "react-helmet-async";
import { UserPlus, BookOpen, Award, Briefcase } from "lucide-react";
import { useTheme } from "../../Components/Context/ThemeContext";

const HowItWorks = () => {
  const { isDark } = useTheme();

  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your free account and complete your profile to get started.",
      step: "01",
    },
    {
      icon: BookOpen,
      title: "Practice & Test",
      description: "Take practice tests to prepare, then attempt official assessments.",
      step: "02",
    },
    {
      icon: Award,
      title: "Get Certified",
      description: "Receive instant certificates based on your test performance.",
      step: "03",
    },
    {
      icon: Briefcase,
      title: "Connect with Employers",
      description: "Share your certificates and get noticed by top companies.",
      step: "04",
    },
  ];

  return (
    <>
      <Helmet>
        <title>How It Works | Skill Assessment Platform</title>
        <meta
          name="description"
          content="Learn how our 4-step process helps you build skills, earn certificates, and get connected with top employers."
        />
      </Helmet>

      <section
        className={`py-16 sm:py-20 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              How It Works
            </h2>
            <p
              className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Get started with our simple 4-step process to advance your career.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative h-full">
                <div
                  className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between rounded-xl border ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-white border-gray-200 text-gray-900"
                  }`}
                >
                  <div className="px-5 sm:px-6 py-6 text-center flex flex-col flex-grow">
                    <div className="relative mb-5 sm:mb-6">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 ${
                          isDark ? "bg-yellow-900" : "bg-yellow-100"
                        } rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400 transition-colors`}
                      >
                        <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-yellow-600 text-white text-xs sm:text-sm font-bold rounded-full flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>
                    <h3
                      className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      } flex-grow`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line (only visible on large screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-yellow-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;



