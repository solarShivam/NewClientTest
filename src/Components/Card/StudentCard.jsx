// src/components/ui/Card.jsx
import React from "react";

const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 text-black dark:text-white rounded-2xl p-4 shadow-md transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
