import React from 'react';
import { clinicData } from '../config/clinicData';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Building2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#f8f9ff]"
      aria-label="Location and Contact"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-[#c1e8ff] text-[#006687] font-['Nunito_Sans',sans-serif] font-bold text-xs uppercase tracking-wider">
            Kudasan, Gandhinagar
          </span>
          <h2 className="font-['Nunito',sans-serif] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#051c36] tracking-tight">
            Find Your Way to Star Kids
          </h2>
          <p className="font-['Inter',sans-serif] text-base text-[#3f484e]">
            Centrally situated in Sarthak Fortune Mall for convenient parking, elevator access, and family-friendly arrival.
          </p>
        </div>

        {/* Content Matrix: Info Card + Visual Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact & Directions Info Card */}
          <div className="lg:col-span-5 bg-[#eff3ff] p-7 sm:p-9 rounded-3xl border border-[#dde9ff] flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2.5 text-[#006687] font-['Nunito',sans-serif] font-bold text-xl sm:text-2xl">
                <Building2 className="w-7 h-7" />
                <span>Star Kids Hospital & Dental</span>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#c1e8ff] flex items-center justify-center text-[#006687] shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Nunito_Sans',sans-serif] font-bold text-sm text-[#051c36]">
                    Verified Clinic Address
                  </span>
                  <p className="font-['Inter',sans-serif] text-sm text-[#3f484e] mt-1 leading-relaxed">
                    {clinicData.address.full}
                  </p>
                  <span className="text-xs text-[#006687] font-semibold mt-1">
                    {clinicData.address.floor}
                  </span>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#fed669]/60 flex items-center justify-center text-[#765c00] shrink-0 mt-0.5 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Nunito_Sans',sans-serif] font-bold text-sm text-[#051c36]">
                    Direct Reception Telephone
                  </span>
                  <a
                    href={clinicData.phoneLink}
                    className="font-['Nunito',sans-serif] font-extrabold text-xl text-[#006687] hover:underline mt-0.5"
                  >
                    {clinicData.phoneDisplay}
                  </a>
                  <span className="text-xs text-[#3f484e]">
                    Daily OPD support and inquiries
                  </span>
                </div>
              </div>

              {/* Operating Timings */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#b7efd5] flex items-center justify-center text-[#346854] shrink-0 mt-0.5 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Nunito_Sans',sans-serif] font-bold text-sm text-[#051c36]">
                    Consultation Schedule
                  </span>
                  <span className="text-sm text-[#051c36] font-semibold mt-1">
                    {clinicData.timings.regular}
                  </span>
                  <span className="text-xs text-[#3f484e] mt-0.5">
                    {clinicData.timings.sunday}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#dde9ff]">
              <a
                href={clinicData.phoneLink}
                className="px-6 py-3.5 rounded-full bg-[#006687] hover:bg-[#004d67] text-white font-['Nunito_Sans',sans-serif] font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {clinicData.phoneDisplay}</span>
              </a>

              <a
                href={clinicData.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#eff3ff] text-[#051c36] font-['Nunito_Sans',sans-serif] font-bold text-sm sm:text-base border border-[#dde9ff] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#006687]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Visual Map Section with verified destination overlay */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl overflow-hidden shadow-md border border-[#dde9ff] min-h-[380px] relative group">
            <div
              className="w-full h-full min-h-[380px] bg-cover bg-center rounded-3xl relative transition-transform duration-700 group-hover:scale-105"
              data-location="Sarthak Fortune Mall, Kudasan, Gandhinagar, Gujarat"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgoJOma3wf4pLVnVIALNtuoppOqAeopa3OZX0sNMG8VDIyv1o0FETp7HGhlXLs3exNT3_4xM6xnDiOzVVNgly6usZhf7lcJDyWm48uAl5vGeNpC5fsPPMqEGwdaWm6aDM3BDrAvhRk06uB5UBi2pkidTDmZ-CitWg3xdexmyLgxaUHdKHFT1rvKFnzN_qVzhHKk2KMgKWO8IFxcuZ4vRWhBnDyHj1rhUPDZU4ar2PYnwYvMqPlFdXZ')`,
              }}
            >
              {/* Overlay Pin Ribbon */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg border border-[#eff3ff] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#006687] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Nunito_Sans',sans-serif] font-bold text-sm sm:text-base text-[#051c36]">
                      Star Kids Children Hospital & Dental
                    </span>
                    <span className="text-xs text-[#3f484e]">
                      Sarthak Fortune Mall · 2nd Floor (Elevator available)
                    </span>
                  </div>
                </div>

                <a
                  href={clinicData.links.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#c1e8ff] hover:bg-[#76c9f2] text-[#006687] font-['Nunito_Sans',sans-serif] font-bold text-xs sm:text-sm shrink-0 flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <span>Navigate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
