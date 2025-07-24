
import React from 'react';
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-16 h-16">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-6 bg-gray-500 rounded-full origin-center"
            style={{
              transform: `rotate(${i * 30}deg) translate(0, -120%)`,
              opacity: `${(i + 1) / 12}`,
              animation: 'spinnerFade 1.2s linear infinite',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
