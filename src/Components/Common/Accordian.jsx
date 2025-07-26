

import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const AccordionItem = ({ question, answer, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-lg border transition-all duration-300 cursor-pointer overflow-hidden ${
        isDark
          ? "border-yellow-500/30 bg-black/50 text-gray-300"
          : "border-gray-400 bg-white text-gray-800"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center p-4 sm:p-6">
        <h3 className={`text-base sm:text-lg md:text-xl font-semibold ${isDark ? "text-yellow-400" : "text-black"}`}>{question}</h3>
        <FaAngleUp
          className={`${isDark ? "text-yellow-400" : "text-black"} text-xl transform transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      <div
        className={`px-4 sm:px-6 pb-4 text-sm sm:text-base transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;

