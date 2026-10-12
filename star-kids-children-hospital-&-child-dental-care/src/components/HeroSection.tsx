import React from 'react';
import { clinicData } from '../config/clinicData';
import { Calendar, ArrowDown, Star, CheckCircle2, Smile } from 'lucide-react';

interface HeroSectionProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#f8f9ff] pt-8 pb-16 lg:py-20 px-4 sm:px-6 lg:px-12"
      aria-label="Welcome and Introduction"
    >
      {/* Ambient pastel backdrop glow circles */}
      <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#76c9f2]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-[#fed669]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#95cbb3]/20 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        {/* Left Narrative Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fed669]/60 w-fit text-[#765c00] font-['Nunito_Sans',sans-serif] font-bold text-xs sm:text-sm tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#755b00]" />
            <span>CARE FOR LITTLE ONES</span>
          </div>

          {/* Main Display Heading */}
          <h1 className="font-['Nunito',sans-serif] font-extrabold text-3xl sm:text-5xl lg:text-[52px] text-[#051c36] leading-[1.15] tracking-tight">
            Big Care for <br className="hidden sm:inline" />
            <span className="text-[#006687] relative inline-block">
              Little Smiles.
              {/* Playful curved smile underline */}
              <svg
                className="absolute -bottom-2.5 left-0 w-full text-[#fed669] h-3 -z-10"
                preserveAspectRatio="none"
                viewBox="0 0 100 20"
                aria-hidden="true"
              >
                <path
                  d="M0 15 Q 50 0 100 15"
                  fill="transparent"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="6"
                />
              </svg>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-['Inter',sans-serif] text-base sm:text-lg text-[#3f484e] max-w-xl leading-relaxed">
            {clinicData.subtitle}
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="button"
              onClick={onBookClick}
              className="px-7 py-3.5 rounded-full font-['Nunito_Sans',sans-serif] font-bold text-base bg-[#fed669] hover:bg-[#ffdf90] text-[#765c00] shadow-[0_4px_18px_rgba(254,214,105,0.45)] hover:shadow-[0_6px_22px_rgba(254,214,105,0.6)] active:scale-95 transition-all flex items-center gap-2.5 group cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-[#765c00] transition-transform group-hover:scale-110" />
              <span>Book a Visit</span>
            </button>

            <button
              type="button"
              onClick={onExploreClick}
              className="px-6 py-3.5 rounded-full font-['Nunito_Sans',sans-serif] font-bold text-base bg-white hover:bg-[#eff3ff] text-[#051c36] border border-[#dde9ff] transition-all flex items-center gap-2 shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              <span>Explore Our Care</span>
              <ArrowDown className="w-4 h-4 text-[#006687]" />
            </button>
          </div>

          {/* Reassurance Micro-Copy */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#006687]">
            <CheckCircle2 className="w-4 h-4 text-[#346854] flex-shrink-0" />
            <span>Here for your child's next step toward a healthier smile.</span>
          </div>

          {/* Google Rating Badge */}
          <div className="mt-1 inline-flex items-center gap-3.5 p-3.5 bg-white rounded-2xl shadow-[0_4px_20px_rgba(118,201,242,0.18)] border border-[#eff3ff] w-fit">
            <div className="w-11 h-11 rounded-full bg-[#fed669]/60 flex items-center justify-center text-[#765c00] shrink-0 font-['Nunito',sans-serif] font-extrabold text-lg">
              ★
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-['Nunito',sans-serif] font-extrabold text-lg text-[#051c36] leading-none">
                  4.9
                </span>
                <div className="flex text-[#fed669] gap-0.5">
                  <Star className="w-4 h-4 fill-[#fed669]" />
                  <Star className="w-4 h-4 fill-[#fed669]" />
                  <Star className="w-4 h-4 fill-[#fed669]" />
                  <Star className="w-4 h-4 fill-[#fed669]" />
                  <Star className="w-4 h-4 fill-[#fed669]" />
                </div>
              </div>
              <span className="text-xs text-[#3f484e] font-medium mt-0.5">
                287 Google reviews · Verified Kudasan Clinic
              </span>
            </div>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
          {/* Floating Playful Star Character Mascot */}
          <div className="absolute -top-5 -right-2 z-20 animate-float bg-white p-3.5 rounded-full shadow-lg border border-[#eff3ff] flex items-center justify-center">
            <svg
              className="w-12 h-12 text-[#fed669]"
              fill="currentColor"
              viewBox="0 0 100 100"
              aria-label="Happy Star Mascot"
            >
              <polygon points="50,5 64,36 98,38 72,61 80,95 50,76 20,95 28,61 2,38 36,36" />
              <circle cx="40" cy="48" r="4.5" fill="#051c36" />
              <circle cx="60" cy="48" r="4.5" fill="#051c36" />
              <path
                d="M 40 60 Q 50 68 60 60"
                fill="transparent"
                stroke="#051c36"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Floating Gentle Badge */}
          <div className="absolute -bottom-4 -left-3 sm:-left-6 z-20 animate-float-delayed bg-white py-2.5 px-4 rounded-full shadow-md border border-[#dde9ff] flex items-center gap-2">
            <Smile className="w-5 h-5 text-[#006687]" />
            <span className="font-['Nunito_Sans',sans-serif] font-bold text-xs sm:text-sm text-[#051c36]">
              Friendly & Gentle
            </span>
          </div>

          {/* Main Photo Container with Warm Pediatric Interaction */}
          <div className="relative w-full max-w-md aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_16px_44px_rgba(0,102,135,0.14)] bg-[#eff3ff] border-4 border-white">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEZh8KHEW2hhrf42F_dpa5wiWNJ78sY6WRVv_OrczNdnKq9cedpfYh_yf3NHleuvKmHiQdUQk3uhhpGttA30Zn0rgzcmUBM3Iijoq3Ma1qvcIMiNFgoxp9ZafS2uYYJ0LrbztY57s61kVvw0n6Jsu43rms1ZgapyGOx6nkJsZ46Z7fZoPulq0kVPr0QLB70og9vzuL6l67ChWNqjjfhsoXVuYk0dAItibCex7k1ZyNB9rI7B3JxSf0"
              alt="Warm and reassuring pediatric healthcare scene at Star Kids Children Hospital Kudasan. A friendly smiling doctor gently interacting with a comfortable child and mother."
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
