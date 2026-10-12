import React from 'react';
import { clinicData } from '../config/clinicData';
import { Phone, Calendar } from 'lucide-react';

interface QuickMobileBarProps {
  onBookClick: () => void;
}

export const QuickMobileBar: React.FC<QuickMobileBarProps> = ({ onBookClick }) => {
  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#dde9ff] px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <a
          href={clinicData.phoneLink}
          className="flex-1 py-3 px-4 rounded-full bg-[#eff3ff] hover:bg-[#dde9ff] text-[#006687] font-['Nunito_Sans',sans-serif] font-bold text-sm flex items-center justify-center gap-2 border border-[#dde9ff] transition-all shadow-sm"
        >
          <Phone className="w-4 h-4 text-[#006687]" />
          <span>Call Reception</span>
        </a>

        <button
          type="button"
          onClick={onBookClick}
          className="flex-1 py-3 px-4 rounded-full bg-[#fed669] hover:bg-[#ffdf90] text-[#765c00] font-['Nunito_Sans',sans-serif] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_2px_10px_rgba(254,214,105,0.4)] cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-[#765c00]" />
          <span>Book a Visit</span>
        </button>
      </div>
    </aside>
  );
};
