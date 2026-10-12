import React from 'react';
import { Stethoscope, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export const CareCategorySection: React.FC = () => {
  const categories = [
    {
      id: 'pediatric',
      title: "Children's Healthcare",
      description:
        "Comprehensive pediatric OPD consultations, routine health assessments, and supportive advice to help parents care for growing kids with confidence.",
      linkText: "Learn visit preparation",
      targetId: '#child-friendly',
      icon: Stethoscope,
      bgIcon: 'bg-[#c1e8ff]',
      iconColor: 'text-[#006687]',
    },
    {
      id: 'dental',
      title: "Child Dental Care",
      description:
        "Learn about children's oral health, gentle cavity prevention, pediatric dental check-ups, and building healthy daily brushing habits from infancy.",
      linkText: "Explore pediatric dental",
      targetId: '#child-dental',
      icon: Sparkles,
      bgIcon: 'bg-[#fed669]/70',
      iconColor: 'text-[#765c00]',
    },
    {
      id: 'preventive',
      title: "Preventive Check-ups",
      description:
        "Understand the role of periodic physical milestones, age-appropriate vaccinations, dietary guidance, and preventive oral wellness reviews.",
      linkText: "Read milestone guide",
      targetId: '#parent-guide',
      icon: ShieldCheck,
      bgIcon: 'bg-[#b7efd5]',
      iconColor: 'text-[#346854]',
    },
  ];

  const handleScrollTo = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="care-categories"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#eff3ff]"
      aria-label="Care Categories"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-[#c1e8ff] text-[#006687] font-['Nunito_Sans',sans-serif] font-bold text-xs uppercase tracking-wider">
            Compassionate Offerings
          </span>
          <h2 className="font-['Nunito',sans-serif] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#051c36] tracking-tight">
            Growing Up Healthy Starts Here
          </h2>
          <p className="font-['Inter',sans-serif] text-base text-[#3f484e]">
            Explore care information and discover how to prepare for your child's visit at our specialized Gandhinagar center.
          </p>
        </div>

        {/* 3 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white p-7 sm:p-8 rounded-3xl shadow-[0_4px_24px_rgba(118,201,242,0.14)] hover:shadow-[0_12px_32px_rgba(118,201,242,0.22)] border border-[#dde9ff] flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex flex-col gap-5">
                  <div className={`w-16 h-16 rounded-2xl ${card.bgIcon} flex items-center justify-center ${card.iconColor} shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="font-['Nunito',sans-serif] font-bold text-xl sm:text-2xl text-[#051c36]">
                    {card.title}
                  </h3>

                  <p className="font-['Inter',sans-serif] text-sm sm:text-base text-[#3f484e] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#eff3ff]">
                  <button
                    type="button"
                    onClick={() => handleScrollTo(card.targetId)}
                    className="inline-flex items-center text-[#006687] hover:text-[#004d67] font-['Nunito_Sans',sans-serif] font-bold text-sm sm:text-base gap-1.5 group-hover:gap-2.5 transition-all cursor-pointer"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-4 h-4 text-[#006687]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
