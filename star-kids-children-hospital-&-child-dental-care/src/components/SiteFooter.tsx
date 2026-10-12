import React from 'react';
import { clinicData } from '../config/clinicData';
import { SiteLogo } from './SiteLogo';
import { MapPin, Phone, Star, AlertTriangle, ArrowUpRight } from 'lucide-react';

interface SiteFooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onNavigateSection: (id: string) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onNavigateSection,
}) => {
  return (
    <footer className="w-full bg-[#eff3ff] text-[#051c36] border-t border-[#dde9ff]" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {/* Column 1: Brand & Ratings */}
        <div className="flex flex-col gap-5">
          <SiteLogo showSubtitle={true} />

          <p className="font-['Inter',sans-serif] text-sm text-[#3f484e] leading-relaxed">
            Little Smiles. Brighter Tomorrows. Dedicated pediatric medicine and playful, gentle child dental care in Kudasan, Gandhinagar.
          </p>

          <a
            href={clinicData.links.googleBusinessProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 bg-white rounded-2xl shadow-sm border border-[#dde9ff] hover:border-[#c1e8ff] transition-colors w-fit group"
          >
            <div className="flex text-[#fed669]">
              <Star className="w-4 h-4 fill-[#fed669]" />
              <Star className="w-4 h-4 fill-[#fed669]" />
              <Star className="w-4 h-4 fill-[#fed669]" />
              <Star className="w-4 h-4 fill-[#fed669]" />
              <Star className="w-4 h-4 fill-[#fed669]" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Nunito_Sans',sans-serif] font-bold text-xs text-[#051c36] flex items-center gap-1">
                <span>4.9 ★ Verified</span>
                <ArrowUpRight className="w-3 h-3 text-[#006687] opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-[11px] text-[#3f484e]">287 Google reviews</span>
            </div>
          </a>
        </div>

        {/* Column 2: Specialties */}
        <div className="flex flex-col gap-4">
          <h3 className="font-['Nunito',sans-serif] font-bold text-lg text-[#006687]">
            Specialties
          </h3>
          <ul className="flex flex-col gap-2.5 font-['Inter',sans-serif] text-sm text-[#3f484e]">
            <li>
              <button
                type="button"
                onClick={() => onNavigateSection('care-categories')}
                className="hover:text-[#006687] transition-colors text-left cursor-pointer"
              >
                Pediatric OPD & Vaccinations
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigateSection('child-dental')}
                className="hover:text-[#006687] transition-colors text-left cursor-pointer"
              >
                Pediatric Dental Cleaning
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigateSection('child-dental')}
                className="hover:text-[#006687] transition-colors text-left cursor-pointer"
              >
                Painless Cavity Management
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigateSection('care-categories')}
                className="hover:text-[#006687] transition-colors text-left cursor-pointer"
              >
                Growth & Nutrition Triage
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigateSection('child-dental')}
                className="hover:text-[#006687] transition-colors text-left cursor-pointer"
              >
                Habit Breaking Appliances
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigateSection('parent-guide')}
                className="hover:text-[#006687] transition-colors text-left cursor-pointer"
              >
                Child Dental Anxiety Support
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-['Nunito',sans-serif] font-bold text-lg text-[#006687]">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5 font-['Inter',sans-serif] text-sm text-[#3f484e]">
            <li>
              <button
                type="button"
                onClick={() => onNavigateSection('trust')}
                className="hover:text-[#006687] transition-colors text-left cursor-pointer"
              >
                About Star Kids
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigateSection('parent-guide')}
                className="hover:text-[#006687] transition-colors text-left cursor-pointer"
              >
                Parent Guide & Resources
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigateSection('appointment-section')}
                className="hover:text-[#006687] transition-colors text-left cursor-pointer"
              >
                Book Pediatric Appointment
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigateSection('contact')}
                className="hover:text-[#006687] transition-colors text-left cursor-pointer"
              >
                Find Our Clinic
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="hover:text-[#006687] transition-colors text-left cursor-pointer underline-offset-2 hover:underline"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={onOpenTerms}
                className="hover:text-[#006687] transition-colors text-left cursor-pointer underline-offset-2 hover:underline"
              >
                Terms of Use
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Visit & Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="font-['Nunito',sans-serif] font-bold text-lg text-[#006687]">
            Visit & Contact
          </h3>

          <div className="flex items-start gap-3 font-['Inter',sans-serif] text-sm text-[#3f484e]">
            <MapPin className="w-5 h-5 text-[#006687] shrink-0 mt-0.5" />
            <p className="leading-relaxed">{clinicData.address.full}</p>
          </div>

          <div className="flex items-center gap-3 font-['Inter',sans-serif] text-sm text-[#3f484e]">
            <Phone className="w-5 h-5 text-[#006687] shrink-0" />
            <a
              href={clinicData.phoneLink}
              className="font-['Nunito_Sans',sans-serif] font-bold text-base text-[#051c36] hover:text-[#006687] transition-colors"
            >
              {clinicData.phoneDisplay}
            </a>
          </div>

          {/* Urgent disclaimer */}
          <div className="p-3.5 rounded-2xl bg-[#ffdad6]/60 border border-[#ba1a1a]/20 text-[#93000a] text-xs flex items-start gap-2.5 mt-2">
            <AlertTriangle className="w-4 h-4 text-[#ba1a1a] shrink-0 mt-0.5" />
            <span className="leading-snug">
              Urgent pediatric triage available during OPD hours. For nighttime crises, call emergency helpline.
            </span>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-5 border-t border-[#dde9ff] bg-[#dde9ff]/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3f484e]">
          <p>© 2025 {clinicData.name}. All rights reserved.</p>
          <p className="text-[#006687] font-bold tracking-wide">
            {clinicData.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};
