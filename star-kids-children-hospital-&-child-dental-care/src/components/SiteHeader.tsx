import React, { useState, useEffect } from 'react';
import { clinicData } from '../config/clinicData';
import { SiteLogo } from './SiteLogo';
import { Phone, Calendar, MapPin, Clock, Star, Menu, X, ChevronRight } from 'lucide-react';

interface SiteHeaderProps {
  onOpenBooking: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'care-categories', 'child-friendly', 'child-dental', 'parent-guide', 'trust', 'care-team', 'appointment-section', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#trust', id: 'trust' },
    { label: "Children's Care", href: '#care-categories', id: 'care-categories' },
    { label: 'Child Dental Care', href: '#child-dental', id: 'child-dental' },
    { label: 'Parent Guide', href: '#parent-guide', id: 'parent-guide' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Info Bar (Desktop/Tablet) */}
      <div className="hidden md:flex w-full bg-[#eff3ff] px-6 lg:px-12 py-2 items-center justify-between text-[#3f484e] text-xs font-semibold border-b border-[#dde9ff]">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 hover:text-[#006687] transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#006687]" />
            <span>Kudasan, Gandhinagar, Gujarat</span>
          </span>
          <span className="h-3 w-px bg-[#bfc8ce]" />
          <span className="flex items-center gap-1.5 text-[#346854]">
            <Clock className="w-3.5 h-3.5" />
            <span>{clinicData.timings.display}</span>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={clinicData.links.googleBusinessProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#755b00] hover:text-[#584400] transition-colors font-bold"
            title="View 287 Google Business Reviews"
          >
            <Star className="w-3.5 h-3.5 fill-[#fed669] text-[#fed669]" />
            <span>{clinicData.googleRating.label}</span>
          </a>
          <span className="h-3 w-px bg-[#bfc8ce]" />
          <a
            href={clinicData.phoneLink}
            className="flex items-center gap-1.5 text-[#006687] hover:text-[#004d67] transition-colors font-bold"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{clinicData.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full px-4 sm:px-6 lg:px-12 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,102,135,0.08)] py-3'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-[#eff3ff]'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo link */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006687] rounded-xl p-1 -m-1"
            aria-label="Star Kids Children Hospital & Child Dental Care Homepage"
          >
            <SiteLogo />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-1 p-1 bg-[#f8f9ff] border border-[#dde9ff] rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2 text-sm font-bold rounded-full transition-all duration-150 ${
                    isActive
                      ? 'bg-[#dde9ff] text-[#051c36] shadow-[0_2px_8px_rgba(118,201,242,0.2)]'
                      : 'text-[#3f484e] hover:text-[#051c36] hover:bg-white/80'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Call Clinic CTA */}
            <a
              href={clinicData.phoneLink}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold text-[#006687] bg-[#c1e8ff] hover:bg-[#76c9f2] hover:text-[#005470] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006687]"
              title={`Call reception at ${clinicData.phoneDisplay}`}
            >
              <Phone className="w-4 h-4" />
              <span>Call Clinic</span>
            </a>

            {/* Book a Visit Button */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-[#765c00] bg-[#fed669] hover:bg-[#ffdf90] active:scale-95 transition-all shadow-[0_4px_16px_rgba(254,214,105,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#755b00]"
            >
              <Calendar className="w-4 h-4 text-[#765c00]" />
              <span>Book a Visit</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-full text-[#051c36] hover:bg-[#eff3ff] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006687]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-navigation"
        className={`xl:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#f8f9ff] shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#dde9ff]">
              <SiteLogo showSubtitle={true} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-[#3f484e] hover:bg-[#dde9ff] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav list */}
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation Links">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-base transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#c1e8ff] text-[#006687]'
                      : 'text-[#051c36] hover:bg-[#eff3ff]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Bottom Actions */}
          <div className="pt-6 border-t border-[#dde9ff] flex flex-col gap-3">
            <div className="bg-[#eff3ff] p-3.5 rounded-2xl text-xs text-[#3f484e] flex flex-col gap-1">
              <span className="font-bold text-[#051c36] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#006687]" />
                Kudasan, Gandhinagar
              </span>
              <span>{clinicData.timings.display}</span>
              <span className="text-[#755b00] font-semibold flex items-center gap-1 mt-0.5">
                <Star className="w-3.5 h-3.5 fill-[#fed669] text-[#fed669]" />
                {clinicData.googleRating.label}
              </span>
            </div>

            <a
              href={clinicData.phoneLink}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#006687] text-white font-bold text-sm shadow-sm hover:bg-[#004d67] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Reception ({clinicData.phoneDisplay})</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#fed669] text-[#765c00] font-bold text-sm shadow-md hover:bg-[#ffdf90] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
