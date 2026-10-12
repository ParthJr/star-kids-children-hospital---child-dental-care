import React, { useEffect } from 'react';
import { clinicData } from '../config/clinicData';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-[#dde9ff] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#eff3ff] bg-[#f8f9ff]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#c1e8ff] flex items-center justify-center text-[#006687]">
              {type === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h2 id="policy-modal-title" className="font-['Nunito',sans-serif] font-bold text-xl text-[#051c36]">
                {type === 'privacy' ? 'Patient Privacy Notice' : 'Terms of Use'}
              </h2>
              <span className="text-xs text-[#3f484e]">Star Kids Children Hospital & Child Dental Care</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#3f484e] hover:bg-[#dde9ff] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006687]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto font-['Inter',sans-serif] text-sm text-[#3f484e] leading-relaxed flex flex-col gap-4">
          {type === 'privacy' ? (
            <>
              <p>
                At <strong>{clinicData.name}</strong>, we take the confidentiality and privacy of our young patients and their families with the highest seriousness.
              </p>
              <h3 className="font-['Nunito',sans-serif] font-bold text-base text-[#051c36]">
                1. Data Collection & Use
              </h3>
              <p>
                We only collect basic contact information (Parent's name, phone number, optional child's first name, and visit preferences) necessary to coordinate and confirm clinical appointments. We strictly do not collect sensitive clinical history, child dates of birth, or identification numbers through public web forms.
              </p>
              <h3 className="font-['Nunito',sans-serif] font-bold text-base text-[#051c36]">
                2. Parental Consent & Communication
              </h3>
              <p>
                By requesting an appointment, you agree to be contacted by our Kudasan clinic reception team via telephone call or message regarding your visit scheduling.
              </p>
              <h3 className="font-['Nunito',sans-serif] font-bold text-base text-[#051c36]">
                3. Confidentiality
              </h3>
              <p>
                Your contact details are strictly confidential. We do not sell, rent, or share personal information with third-party marketers or advertisers.
              </p>
              <h3 className="font-['Nunito',sans-serif] font-bold text-base text-[#051c36]">
                4. Contacting Us
              </h3>
              <p>
                For questions regarding patient records or privacy practices, you can visit us at {clinicData.address.full} or call {clinicData.phoneDisplay}.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>{clinicData.name}</strong>. By accessing this website or using our visit request features, you acknowledge and agree to the following terms:
              </p>
              <h3 className="font-['Nunito',sans-serif] font-bold text-base text-[#051c36]">
                1. Informational Purposes Only
              </h3>
              <p>
                The information provided on this website is for general educational and informational guidance regarding pediatric care and child oral health. It does not constitute individual medical diagnosis, prognosis, or customized treatment plans.
              </p>
              <h3 className="font-['Nunito',sans-serif] font-bold text-base text-[#051c36]">
                2. Appointment Requests
              </h3>
              <p>
                Submitting an online appointment enquiry form represents a request for scheduling, not a guaranteed or finalized medical booking. Appointments become confirmed only after direct telephone or written coordination with our clinic front desk.
              </p>
              <h3 className="font-['Nunito',sans-serif] font-bold text-base text-[#051c36]">
                3. Medical Emergencies
              </h3>
              <p>
                In the event of acute pediatric medical emergencies or urgent clinical crises outside of standard daytime consultation hours, please call our emergency contact or proceed immediately to the nearest emergency trauma center.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#f8f9ff] border-t border-[#eff3ff] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#006687] text-white font-['Nunito_Sans',sans-serif] font-bold text-sm hover:bg-[#004d67] transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
