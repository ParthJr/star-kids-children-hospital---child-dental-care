import React from 'react';

interface SiteLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const SiteLogo: React.FC<SiteLogoProps> = ({ className = '', showSubtitle = true }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Friendly Playful Star Icon */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#fed669] to-[#ffd76a] rounded-2xl shadow-sm border border-[#e9c258]/30">
        <svg
          viewBox="0 0 100 100"
          className="w-7 h-7 text-[#765c00]"
          fill="currentColor"
        >
          {/* Star polygon with softened tips */}
          <polygon points="50,6 63,35 96,38 71,62 78,95 50,78 22,95 29,62 4,38 37,35" />
          {/* Friendly happy eye dots */}
          <circle cx="41" cy="48" r="4.5" fill="#051c36" />
          <circle cx="59" cy="48" r="4.5" fill="#051c36" />
          {/* Cheerful curve smile */}
          <path
            d="M 40 59 Q 50 69 60 59"
            fill="transparent"
            stroke="#051c36"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
        {/* Little sparkling pulse */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#76c9f2] rounded-full border-2 border-white" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-['Nunito',sans-serif] font-extrabold text-xl sm:text-2xl tracking-tight text-[#051c36]">
            Star Kids
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#006687]" />
        </div>
        {showSubtitle && (
          <span className="font-['Nunito_Sans',sans-serif] font-bold text-[11px] sm:text-xs text-[#006687] tracking-wider uppercase leading-snug">
            Hospital & Child Dental Care
          </span>
        )}
      </div>
    </div>
  );
};
