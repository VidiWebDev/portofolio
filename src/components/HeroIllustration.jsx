import React from 'react';

const HeroIllustration = ({ isHovering, className }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {/* Monitor Base */}
      <svg
        viewBox="0 0 500 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto transition-all duration-500 ${isHovering ? 'scale-105' : 'scale-100'}`}
      >
        {/* Monitor Frame */}
        <rect x="50" y="20" width="400" height="250" rx="20" fill="#1A1A1A" stroke="#FF6B00" strokeWidth="4" />
        <rect x="65" y="35" width="370" height="220" rx="10" fill="#0A0A00" />
        
        {/* Code Icon inside Monitor */}
        <path d="M180 120L140 160L180 200" stroke="#FF6B00" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M220 120L260 160L220 200" stroke="#FF6B00" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M190 210L230 110" stroke="#F97316" strokeWidth="8" strokeLinecap="round" />

        {/* Monitor Stand */}
        <rect x="225" y="270" width="50" height="60" fill="#1A1A1A" />
        <ellipse cx="250" cy="330" rx="80" ry="15" fill="#333" />

        {/* Mobile Phone */}
        <rect x="350" y="150" width="100" height="180" rx="15" fill="#1A1A1A" stroke="#FF6B00" strokeWidth="3" className={`transition-all duration-500 ${isHovering ? 'translate-y-[-10px]' : ''}`} />
        <rect x="365" y="165" width="70" height="150" rx="5" fill="#0A0A00" />
        
        {/* Decorative Gear */}
        <circle cx="100" cy="80" r="30" stroke="#FF6B00" strokeWidth="4" fill="none" className="animate-spin-slow" />
        <circle cx="100" cy="80" r="10" fill="#FF6B00" />
      </svg>
    </div>
  );
};

export default HeroIllustration;
