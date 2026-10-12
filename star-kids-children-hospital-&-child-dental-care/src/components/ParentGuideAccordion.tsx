import React, { useState } from 'react';
import { parentFaqItems, clinicData } from '../config/clinicData';
import { ChevronDown, Info } from 'lucide-react';

export const ParentGuideAccordion: React.FC = () => {
  // First item open by default like the approved Stitch mockup
  const [openIds, setOpenIds] = useState<string[]>(['faq-dental-prep']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="parent-guide"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#f8f9ff]"
      aria-label="Parent Guide and FAQs"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-[#c1e8ff] text-[#006687] font-['Nunito_Sans',sans-serif] font-bold text-xs uppercase tracking-wider">
            Practical Guidance
          </span>
          <h2 className="font-['Nunito',sans-serif] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#051c36] tracking-tight">
            Helpful Information for Parents
          </h2>
          <p className="font-['Inter',sans-serif] text-base text-[#3f484e] max-w-xl">
            Common questions about preparing for children's clinic and dental visits in Gandhinagar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3.5" role="region" aria-label="Frequently Asked Questions">
          {parentFaqItems.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const buttonId = `faq-btn-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="bg-[#eff3ff] rounded-2xl sm:rounded-3xl border border-[#dde9ff] overflow-hidden transition-all duration-200 hover:border-[#c1e8ff]"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-['Nunito',sans-serif] font-bold text-base sm:text-lg text-[#051c36] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006687] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#006687] shadow-sm transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#c1e8ff]' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-6 pb-6 pt-1 font-['Inter',sans-serif] text-sm sm:text-base text-[#3f484e] leading-relaxed border-t border-[#dde9ff]/50 animate-fadeIn"
                  >
                    {faq.id === 'faq-request-appointment' ? (
                      <p>
                        You can easily submit our online appointment request form below, or call the Kudasan clinic directly at{' '}
                        <a
                          href={clinicData.phoneLink}
                          className="font-bold text-[#006687] hover:underline"
                        >
                          {clinicData.phoneDisplay}
                        </a>
                        . Our reception team will coordinate with your schedule and confirm an available slot.
                      </p>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Disclaimer / General guidance notice */}
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#dde9ff]/50 border border-[#c1e8ff] text-xs sm:text-sm text-[#004d67]">
          <Info className="w-5 h-5 text-[#006687] flex-shrink-0 mt-0.5" />
          <p>
            <strong>Note for Parents:</strong> The information provided above offers general educational guidance. Individual clinical questions and health concerns should always be discussed directly with an appropriate healthcare professional.
          </p>
        </div>
      </div>
    </section>
  );
};
