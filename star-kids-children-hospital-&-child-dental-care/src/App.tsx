/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { CareCategorySection } from './components/CareCategorySection';
import { ChildFriendlyExperience } from './components/ChildFriendlyExperience';
import { ChildDentalCareSection } from './components/ChildDentalCareSection';
import { ParentGuideAccordion } from './components/ParentGuideAccordion';
import { TrustSection } from './components/TrustSection';
import { CareTeamSection } from './components/CareTeamSection';
import { AppointmentForm } from './components/AppointmentForm';
import { LocationSection } from './components/LocationSection';
import { SiteFooter } from './components/SiteFooter';
import { PolicyModal } from './components/PolicyModal';
import { QuickMobileBar } from './components/QuickMobileBar';

export default function App() {
  const [modalPolicy, setModalPolicy] = useState<'privacy' | 'terms' | null>(null);
  const [initialCareCategory, setInitialCareCategory] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookVisit = () => {
    scrollToSection('appointment-section');
  };

  const handleEnquireDental = () => {
    setInitialCareCategory('dental');
    scrollToSection('appointment-section');
    // Also trigger select update if already rendered
    const select = document.getElementById('care-type') as HTMLSelectElement | null;
    if (select) {
      select.value = 'dental';
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#051c36] selection:bg-[#76c9f2]/30 selection:text-[#006687] pb-16 md:pb-0">
      {/* 1. Header and navigation */}
      <SiteHeader onOpenBooking={handleBookVisit} />

      {/* Main Content Sections in Required Sequential Order */}
      <main className="w-full pt-20 md:pt-24 flex-1">
        {/* 2. Hero section: "Big Care for Little Smiles." */}
        <HeroSection
          onBookClick={handleBookVisit}
          onExploreClick={() => scrollToSection('care-categories')}
        />

        {/* 3. Children's healthcare, child dental care, and preventive care categories */}
        <CareCategorySection />

        {/* 4. Child-friendly visit preparation */}
        <ChildFriendlyExperience />

        {/* 5. Child dental care spotlight */}
        <ChildDentalCareSection onEnquireDental={handleEnquireDental} />

        {/* 6. Parent information accordion */}
        <ParentGuideAccordion />

        {/* 7. Trust and reassurance section */}
        <TrustSection />

        {/* 8. Verified care team section */}
        <CareTeamSection />

        {/* 9. Appointment request form */}
        <AppointmentForm
          initialCareType={initialCareCategory}
          onOpenPrivacyPolicy={() => setModalPolicy('privacy')}
        />

        {/* 10. Location and contact */}
        <LocationSection />
      </main>

      {/* 11. Footer */}
      <SiteFooter
        onOpenPrivacy={() => setModalPolicy('privacy')}
        onOpenTerms={() => setModalPolicy('terms')}
        onNavigateSection={scrollToSection}
      />

      {/* Persistent Mobile Bottom Action Bar */}
      <QuickMobileBar onBookClick={handleBookVisit} />

      {/* Accessible Policy & Terms Modal */}
      <PolicyModal
        type={modalPolicy}
        onClose={() => setModalPolicy(null)}
      />
    </div>
  );
}
