import React from "react";

export default function Stepper({
  steps,
  currentStep,
  completedSteps,
  className = ""
}) {
  return (
    <div className={`w-full py-6 ${className}`}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(index);
          const isCurrent = currentStep === index;
          const isUpcoming = index > currentStep;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center space-y-2 min-w-[60px]">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300
                    ${
                      isCompleted
                        ? "border-green-500 bg-green-500 text-white shadow"
                        : isCurrent
                        ? "border-blue-500 bg-blue-500 text-white shadow animate-pulse"
                        : "border-gray-300 bg-white text-gray-400"
                    }`}
                >
                  {isCompleted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div className="text-center">
                  <div
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isCompleted
                        ? "text-green-600"
                        : isCurrent
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </div>
                  {step.description && (
                    <div className="text-xs text-gray-400 mt-1">
                      {step.description}
                    </div>
                  )}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-1 md:mx-2 transition-all duration-500 ${
                    completedSteps.includes(index) && completedSteps.includes(index + 1)
                      ? "bg-green-500"
                      : completedSteps.includes(index) && currentStep === index + 1
                      ? "bg-gradient-to-r from-green-500 to-blue-500"
                      : currentStep === index
                      ? "bg-gradient-to-r from-blue-500 to-gray-300"
                      : "bg-gray-300"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}



