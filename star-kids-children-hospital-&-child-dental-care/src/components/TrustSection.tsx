import React from 'react';
import { clinicData } from '../config/clinicData';
import { Smile, MessageCircleHeart, Users, HeartHandshake, Star, ExternalLink } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const values = [
    {
      title: 'Welcoming Environment',
      description: 'A playful, cheerful waiting space and clinical rooms designed specifically to put little ones at ease.',
      icon: Smile,
      bgIcon: 'bg-[#c1e8ff]',
      iconColor: 'text-[#006687]',
    },
    {
      title: 'Respectful Communication',
      description: 'Listening with genuine care to both child concerns and parental observations without judgment.',
      icon: MessageCircleHeart,
      bgIcon: 'bg-[#b7efd5]',
      iconColor: 'text-[#346854]',
    },
    {
      title: 'Parent Involvement',
      description: 'Keeping you fully informed and engaged in every healthcare and dental decision for your little one.',
      icon: Users,
      bgIcon: 'bg-[#fed669]/60',
      iconColor: 'text-[#765c00]',
    },
    {
      title: 'Focus on Comfort',
      description: 'Unhurried examinations, gentle pacing, and empathetic professionals who respect your child\'s feelings.',
      icon: HeartHandshake,
      bgIcon: 'bg-[#76c9f2]/30',
      iconColor: 'text-[#006687]',
    },
  ];

  return (
    <section
      id="trust"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#eff3ff]"
      aria-label="Why Families Choose Us"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-[#fed669]/60 text-[#765c00] font-['Nunito_Sans',sans-serif] font-bold text-xs uppercase tracking-wider">
            Why Families Choose Us
          </span>
          <h2 className="font-['Nunito',sans-serif] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#051c36] tracking-tight">
            Thoughtful Pediatric Care You Can Trust
          </h2>
          <p className="font-['Inter',sans-serif] text-base text-[#3f484e]">
            We combine pediatric expertise with warmth and unhurried listening to ensure parents and children feel respected.
          </p>
        </div>

        {/* 4 Rounded Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="p-7 rounded-3xl bg-white shadow-sm border border-[#dde9ff] flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-2xl ${v.bgIcon} flex items-center justify-center ${v.iconColor} shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-['Nunito',sans-serif] font-bold text-lg text-[#051c36]">
                  {v.title}
                </h3>
                <p className="font-['Inter',sans-serif] text-sm text-[#3f484e] leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verified Google Profile Callout Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white shadow-[0_4px_24px_rgba(118,201,242,0.14)] border border-[#dde9ff] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#fed669]/60 flex items-center justify-center text-[#765c00] font-['Nunito',sans-serif] font-extrabold text-2xl shrink-0 shadow-sm">
              ★
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-['Nunito',sans-serif] font-extrabold text-xl sm:text-2xl text-[#051c36]">
                  4.9 out of 5
                </span>
                <span className="font-['Nunito_Sans',sans-serif] font-bold text-xs px-2.5 py-0.5 rounded-full bg-[#c1e8ff] text-[#006687]">
                  Verified Rating
                </span>
                <div className="flex text-[#fed669] gap-0.5">
                  <Star className="w-4 h-4 fill-[#fed669]" />
                  <Star className="w-4 h-4 fill-[#fed669]" />
                  <Star className="w-4 h-4 fill-[#fed669]" />
                  <Star className="w-4 h-4 fill-[#fed669]" />
                  <Star className="w-4 h-4 fill-[#fed669]" />
                </div>
              </div>
              <span className="text-xs sm:text-sm text-[#3f484e]">
                Based on 287 verified Google Business reviews from families across Gandhinagar and Kudasan.
              </span>
            </div>
          </div>

          <a
            href={clinicData.links.googleBusinessProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#f8f9ff] hover:bg-[#dde9ff] text-[#051c36] font-['Nunito_Sans',sans-serif] font-bold text-sm border border-[#dde9ff] transition-all shrink-0 flex items-center gap-2 shadow-sm hover:shadow"
          >
            <span>View Verified Google Profile</span>
            <ExternalLink className="w-4 h-4 text-[#006687]" />
          </a>
        </div>
      </div>
    </section>
  );
};
