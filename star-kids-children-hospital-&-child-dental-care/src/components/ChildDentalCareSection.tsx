import React from 'react';
import { Sparkles, Search, Paintbrush, Shield, ArrowRight } from 'lucide-react';

interface ChildDentalCareSectionProps {
  onEnquireDental: () => void;
}

export const ChildDentalCareSection: React.FC<ChildDentalCareSectionProps> = ({ onEnquireDental }) => {
  return (
    <section
      id="child-dental"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#b7efd5]/30"
      aria-label="Child Dental Care Spotlight"
    >
      <div className="max-w-7xl mx-auto rounded-3xl sm:rounded-[2.5rem] bg-white p-7 sm:p-10 lg:p-14 shadow-[0_8px_36px_rgba(52,104,84,0.1)] border border-[#dde9ff] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Graphic & Smiling Tooth Mascot */}
        <div className="lg:col-span-5 flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-[#b7efd5]/25 border border-[#9cd2ba]/40 relative">
          {/* Playful Smiling Tooth SVG */}
          <div className="w-36 h-36 bg-white rounded-full shadow-md flex items-center justify-center relative my-3 border border-[#eff3ff] animate-pulse-subtle">
            <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
              {/* Tooth body */}
              <path
                d="M50 15 C30 15 20 30 20 50 C20 65 28 85 35 85 C42 85 45 75 50 75 C55 75 58 85 65 85 C72 85 80 65 80 50 C80 30 70 15 50 15 Z"
                fill="#c1e8ff"
              />
              {/* Friendly Eyes */}
              <circle cx="42" cy="45" r="3.5" fill="#006687" />
              <circle cx="58" cy="45" r="3.5" fill="#006687" />
              {/* Rosy blush cheeks */}
              <ellipse cx="36" cy="52" rx="4.5" ry="2.5" fill="#ffdad6" />
              <ellipse cx="64" cy="52" rx="4.5" ry="2.5" fill="#ffdad6" />
              {/* Cheerful wide smile */}
              <path
                d="M 42 55 Q 50 63 58 55"
                stroke="#006687"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Tooth sparkling star */}
              <polygon
                fill="#fed669"
                points="72,25 75,32 82,35 75,38 72,45 69,38 62,35 69,32"
              />
            </svg>
          </div>

          <span className="font-['Nunito',sans-serif] font-bold text-xl sm:text-2xl text-[#346854] mt-2">
            Gentle Child Dental Care
          </span>
          <span className="font-['Inter',sans-serif] text-xs sm:text-sm text-[#3f484e] max-w-xs mt-1">
            Specially adapted tools and playful chairside atmosphere designed for little mouths.
          </span>
        </div>

        {/* Right Content Details */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#b7efd5] text-[#002116] font-['Nunito_Sans',sans-serif] font-bold text-xs uppercase tracking-wider w-fit">
            <Sparkles className="w-3.5 h-3.5 text-[#346854]" />
            <span>Pediatric Dental Excellence</span>
          </div>

          <h2 className="font-['Nunito',sans-serif] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#051c36] tracking-tight leading-tight">
            Healthy Teeth, Happy Growing Years.
          </h2>

          <p className="font-['Inter',sans-serif] text-base text-[#3f484e] leading-relaxed">
            Build good oral health habits early and speak with an experienced pediatric dental professional about your child's individual needs. Early visits help prevent cavities and ensure proper jaw alignment.
          </p>

          {/* 3 Highlight Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
            {/* 1. Dental Check-ups */}
            <div className="p-4 bg-[#f8f9ff] rounded-2xl border border-[#dde9ff] flex flex-col gap-1.5">
              <div className="w-9 h-9 rounded-xl bg-[#c1e8ff] flex items-center justify-center text-[#006687] mb-1">
                <Search className="w-5 h-5" />
              </div>
              <span className="font-['Nunito_Sans',sans-serif] font-bold text-sm sm:text-base text-[#051c36]">
                Dental Check-ups
              </span>
              <span className="text-xs text-[#3f484e] leading-snug">
                Gentle mouth exams and developmental monitoring.
              </span>
            </div>

            {/* 2. Hygiene Guidance */}
            <div className="p-4 bg-[#f8f9ff] rounded-2xl border border-[#dde9ff] flex flex-col gap-1.5">
              <div className="w-9 h-9 rounded-xl bg-[#b7efd5] flex items-center justify-center text-[#346854] mb-1">
                <Paintbrush className="w-5 h-5" />
              </div>
              <span className="font-['Nunito_Sans',sans-serif] font-bold text-sm sm:text-base text-[#051c36]">
                Hygiene Guidance
              </span>
              <span className="text-xs text-[#3f484e] leading-snug">
                Fun brushing routines and dietary tips for parents.
              </span>
            </div>

            {/* 3. Preventive Care */}
            <div className="p-4 bg-[#f8f9ff] rounded-2xl border border-[#dde9ff] flex flex-col gap-1.5">
              <div className="w-9 h-9 rounded-xl bg-[#fed669]/60 flex items-center justify-center text-[#765c00] mb-1">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-['Nunito_Sans',sans-serif] font-bold text-sm sm:text-base text-[#051c36]">
                Preventive Care
              </span>
              <span className="text-xs text-[#3f484e] leading-snug">
                Fluoride varnish applications and pit fissure sealants.
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onEnquireDental}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#346854] hover:bg-[#225744] text-white font-['Nunito_Sans',sans-serif] font-bold text-base shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              <span>Enquire About Child Dental Care</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
