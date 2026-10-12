import React from 'react';
import { careTeam } from '../config/clinicData';
import { Award, ShieldCheck } from 'lucide-react';

export const CareTeamSection: React.FC = () => {
  return (
    <section
      id="care-team"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#f8f9ff]"
      aria-label="Pediatric Care Team"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-[#c1e8ff] text-[#006687] font-['Nunito_Sans',sans-serif] font-bold text-xs uppercase tracking-wider">
            Professional Staff
          </span>
          <h2 className="font-['Nunito',sans-serif] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#051c36] tracking-tight">
            Meet the People Who Care
          </h2>
          <p className="font-['Inter',sans-serif] text-base text-[#3f484e]">
            Our dedicated pediatric care and child dental professionals serving Kudasan, Gandhinagar.
          </p>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          {careTeam.map((doc) => {
            const isPrimary = doc.badgeColor === 'primary';
            return (
              <div
                key={doc.name}
                className="bg-[#eff3ff] p-6 sm:p-8 rounded-3xl border border-[#dde9ff] shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left"
              >
                {/* Doctor Avatar */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden bg-white shrink-0 shadow-md border-3 border-white">
                  <img
                    src={doc.photoUrl}
                    alt={`${doc.name} - ${doc.qualifications}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className={`absolute bottom-0 right-0 p-1.5 rounded-full ${
                      isPrimary ? 'bg-[#006687] text-white' : 'bg-[#fed669] text-[#765c00]'
                    } shadow`}
                  >
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="flex flex-col gap-2">
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Nunito_Sans',sans-serif] font-bold w-fit self-center sm:self-start ${
                      isPrimary
                        ? 'bg-[#c1e8ff] text-[#006687]'
                        : 'bg-[#fed669]/60 text-[#765c00]'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{doc.roleBadge}</span>
                  </div>

                  <h3 className="font-['Nunito',sans-serif] font-bold text-xl text-[#051c36]">
                    {doc.name}
                  </h3>

                  <p className="font-['Nunito_Sans',sans-serif] text-xs sm:text-sm text-[#006687] font-semibold">
                    {doc.qualifications}
                  </p>

                  <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-[#3f484e] leading-relaxed mt-1">
                    {doc.focus}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency note */}
        <p className="text-center font-['Nunito_Sans',sans-serif] text-xs sm:text-sm text-[#3f484e] max-w-lg mx-auto">
          * Professional credentials and duty schedules are routinely verified directly by Star Kids clinic administration.
        </p>
      </div>
    </section>
  );
};
