import React from 'react';
import { MessageSquare, HelpCircle, CheckCheck, Sun, Heart, Sparkles } from 'lucide-react';

export const ChildFriendlyExperience: React.FC = () => {
  return (
    <section
      id="child-friendly"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#f8f9ff]"
      aria-label="Child-Friendly Visit Philosophy"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-[#fed669]/50 text-[#765c00] font-['Nunito_Sans',sans-serif] font-bold text-xs uppercase tracking-wider">
            Comfort-First Philosophy
          </span>
          <h2 className="font-['Nunito',sans-serif] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#051c36] tracking-tight">
            Little Steps. More Comfortable Visits.
          </h2>
          <p className="font-['Inter',sans-serif] text-base text-[#3f484e]">
            Medical visits don't need to be overwhelming. Here is how we partner with parents to keep little patients calm and comfortable.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Step 1 */}
          <div className="bg-[#e6eeff] p-7 sm:p-8 rounded-3xl flex flex-col gap-5 border border-[#dde9ff] hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-[#006687] text-white font-['Nunito',sans-serif] font-extrabold text-xl flex items-center justify-center shadow-md">
                1
              </div>
              <MessageSquare className="w-7 h-7 text-[#006687]" />
            </div>

            <h3 className="font-['Nunito',sans-serif] font-bold text-xl text-[#051c36]">
              Talk About the Visit
            </h3>

            <p className="font-['Inter',sans-serif] text-sm sm:text-base text-[#3f484e] leading-relaxed">
              Explain what to expect using calm, positive, and age-appropriate language before arriving. Avoid using scary words like "shots" or "pain."
            </p>

            <div className="mt-auto pt-3 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#006687]">
              <Sun className="w-4 h-4 text-[#755b00]" />
              <span>Tip: Read a storybook together</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#e6eeff] p-7 sm:p-8 rounded-3xl flex flex-col gap-5 border border-[#dde9ff] hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-[#755b00] text-white font-['Nunito',sans-serif] font-extrabold text-xl flex items-center justify-center shadow-md">
                2
              </div>
              <HelpCircle className="w-7 h-7 text-[#755b00]" />
            </div>

            <h3 className="font-['Nunito',sans-serif] font-bold text-xl text-[#051c36]">
              Bring Their Questions
            </h3>

            <p className="font-['Inter',sans-serif] text-sm sm:text-base text-[#3f484e] leading-relaxed">
              Share your child's curiosities or worries openly. Our doctors and dental team love answering curious questions and showing instruments gently.
            </p>

            <div className="mt-auto pt-3 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#755b00]">
              <Heart className="w-4 h-4 text-[#F49C91]" />
              <span>Tip: Bring their favorite small toy</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#e6eeff] p-7 sm:p-8 rounded-3xl flex flex-col gap-5 border border-[#dde9ff] hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-[#346854] text-white font-['Nunito',sans-serif] font-extrabold text-xl flex items-center justify-center shadow-md">
                3
              </div>
              <CheckCheck className="w-7 h-7 text-[#346854]" />
            </div>

            <h3 className="font-['Nunito',sans-serif] font-bold text-xl text-[#051c36]">
              One Step at a Time
            </h3>

            <p className="font-['Inter',sans-serif] text-sm sm:text-base text-[#3f484e] leading-relaxed">
              We follow the child's natural pace, allowing rest breaks whenever needed, and never rushing clinical procedures or examinations.
            </p>

            <div className="mt-auto pt-3 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#346854]">
              <Sparkles className="w-4 h-4 text-[#fed669]" />
              <span>Tip: Celebrate the effort together</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
