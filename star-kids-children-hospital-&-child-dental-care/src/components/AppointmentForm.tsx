import React, { useState } from 'react';
import { clinicData } from '../config/clinicData';
import { submitAppointmentEnquiry, validateIndianPhoneNumber } from '../services/appointmentService';
import { Calendar, Phone, CheckCircle2, AlertCircle, Loader2, Send, RotateCcw, Info } from 'lucide-react';

interface AppointmentFormProps {
  initialCareType?: string;
  onOpenPrivacyPolicy?: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialCareType = '',
  onOpenPrivacyPolicy,
}) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    careType: initialCareType || '',
    preferredDate: todayStr,
    preferredTime: 'morning',
    notes: '',
    privacyConsent: false,
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const validateField = (name: string, value: any): string => {
    switch (name) {
      case 'parentName':
        if (!value || value.trim().length < 2) {
          return 'Please enter the parent or guardian name.';
        }
        return '';
      case 'phone':
        if (!value) {
          return 'Contact phone number is required.';
        }
        if (!validateIndianPhoneNumber(value)) {
          return 'Please enter a valid 10-digit Indian mobile number.';
        }
        return '';
      case 'careType':
        if (!value) {
          return 'Please choose a care category.';
        }
        return '';
      case 'preferredDate':
        if (value) {
          const selected = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (selected < today) {
            return 'Date cannot be in the past.';
          }
        }
        return '';
      case 'privacyConsent':
        if (!value) {
          return 'Consent is required to contact you regarding this visit.';
        }
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, (formData as any)[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const finalValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({ ...prev, [name]: finalValue }));

    if (touched[name]) {
      const error = validateField(name, finalValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    // Validate all fields
    const newErrors: Record<string, string> = {
      parentName: validateField('parentName', formData.parentName),
      phone: validateField('phone', formData.phone),
      careType: validateField('careType', formData.careType),
      preferredDate: validateField('preferredDate', formData.preferredDate),
      privacyConsent: validateField('privacyConsent', formData.privacyConsent),
    };

    setTouched({
      parentName: true,
      phone: true,
      careType: true,
      preferredDate: true,
      privacyConsent: true,
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => !!msg);
    if (hasErrors) {
      setSubmissionError('Please review the highlighted fields before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitAppointmentEnquiry({
        parentName: formData.parentName.trim(),
        phone: formData.phone.trim(),
        childName: formData.childName.trim() || undefined,
        careType: formData.careType,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        notes: formData.notes.trim() || undefined,
        privacyConsent: formData.privacyConsent,
      });

      if (res.success) {
        setSubmissionSuccess(res.message);
      } else {
        setSubmissionError(res.message || 'Unable to submit enquiry. Please try calling the clinic.');
      }
    } catch {
      setSubmissionError('Network error encountered. Please call the clinic directly at 097731 25404.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      parentName: '',
      phone: '',
      childName: '',
      careType: '',
      preferredDate: todayStr,
      preferredTime: 'morning',
      notes: '',
      privacyConsent: false,
    });
    setTouched({});
    setErrors({});
    setSubmissionSuccess(null);
    setSubmissionError(null);
  };

  return (
    <section
      id="appointment-section"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#c1e8ff]/30 scroll-mt-24"
      aria-label="Appointment Request"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-[0_8px_36px_rgba(0,102,135,0.12)] border border-[#dde9ff]">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-2 text-center items-center">
            <span className="px-4 py-1 rounded-full bg-[#fed669]/60 text-[#765c00] font-['Nunito_Sans',sans-serif] font-bold text-xs uppercase tracking-wider">
              Start the Conversation
            </span>
            <h2 className="font-['Nunito',sans-serif] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#051c36] tracking-tight">
              Let's Plan Your Child's Visit
            </h2>
            <p className="font-['Inter',sans-serif] text-sm sm:text-base text-[#3f484e] max-w-xl">
              Please fill in your details below. Our clinic desk will review availability and call you back to confirm a convenient appointment time.
            </p>
          </div>

          {/* Success Banner */}
          {submissionSuccess ? (
            <div
              role="alert"
              aria-live="polite"
              className="p-6 sm:p-8 rounded-3xl bg-[#b7efd5] border border-[#9cd2ba] text-[#002116] flex flex-col gap-4 animate-fadeIn"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#346854] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-['Nunito',sans-serif] font-bold text-xl text-[#051c36]">
                    Appointment Request Received
                  </h3>
                  <p className="font-['Inter',sans-serif] text-sm sm:text-base text-[#1a503d] font-semibold leading-relaxed">
                    {submissionSuccess}
                  </p>
                  <p className="text-xs sm:text-sm text-[#225744] mt-1">
                    For urgent pediatric medical needs or immediate assistance during OPD hours, please feel free to call our reception directly at{' '}
                    <a href={clinicData.phoneLink} className="underline font-bold text-[#051c36]">
                      {clinicData.phoneDisplay}
                    </a>.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#9cd2ba]/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#051c36] font-['Nunito_Sans',sans-serif] font-bold text-sm hover:bg-[#eff3ff] transition-colors shadow-sm cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-[#006687]" />
                  <span>Submit Another Request</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-2">
              {/* General Form Error Alert */}
              {submissionError && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="md:col-span-2 p-4 rounded-2xl bg-[#ffdad6] border border-[#ba1a1a]/30 text-[#93000a] text-sm flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#ba1a1a]" />
                  <span>{submissionError}</span>
                </div>
              )}

              {/* Parent Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="parent-name" className="font-['Nunito_Sans',sans-serif] font-bold text-sm text-[#051c36]">
                  Parent / Guardian Name <span className="text-[#ba1a1a]">*</span>
                </label>
                <input
                  id="parent-name"
                  name="parentName"
                  type="text"
                  required
                  placeholder="e.g. Priyaben Patel"
                  value={formData.parentName}
                  onChange={handleChange}
                  onBlur={() => handleBlur('parentName')}
                  aria-invalid={!!errors.parentName}
                  aria-describedby={errors.parentName ? 'parent-name-error' : undefined}
                  className={`w-full px-4 py-3 rounded-2xl bg-[#eff3ff] text-[#051c36] border text-sm sm:text-base focus:outline-none focus:ring-2 transition-all ${
                    errors.parentName
                      ? 'border-[#ba1a1a] focus:ring-[#ba1a1a]/40 bg-[#ffdad6]/20'
                      : 'border-[#dde9ff] focus:border-[#006687] focus:ring-[#006687]/20 focus:bg-white'
                  }`}
                />
                {errors.parentName && (
                  <span id="parent-name-error" className="text-xs text-[#ba1a1a] font-medium flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.parentName}
                  </span>
                )}
              </div>

              {/* Contact Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="parent-phone" className="font-['Nunito_Sans',sans-serif] font-bold text-sm text-[#051c36]">
                  Contact Phone Number <span className="text-[#ba1a1a]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="parent-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur('phone')}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'parent-phone-error' : undefined}
                    className={`w-full px-4 py-3 rounded-2xl bg-[#eff3ff] text-[#051c36] border text-sm sm:text-base focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-[#ba1a1a] focus:ring-[#ba1a1a]/40 bg-[#ffdad6]/20'
                        : 'border-[#dde9ff] focus:border-[#006687] focus:ring-[#006687]/20 focus:bg-white'
                    }`}
                  />
                  <Phone className="w-4 h-4 text-[#3f484e] absolute right-4 top-3.5 pointer-events-none" />
                </div>
                {errors.phone && (
                  <span id="parent-phone-error" className="text-xs text-[#ba1a1a] font-medium flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Child First Name (Optional) */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="child-name" className="font-['Nunito_Sans',sans-serif] font-bold text-sm text-[#051c36]">
                    Child's First Name
                  </label>
                  <span className="text-xs text-[#3f484e]">Optional</span>
                </div>
                <input
                  id="child-name"
                  name="childName"
                  type="text"
                  placeholder="e.g. Aarav"
                  value={formData.childName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-[#eff3ff] text-[#051c36] border border-[#dde9ff] text-sm sm:text-base focus:outline-none focus:border-[#006687] focus:ring-2 focus:ring-[#006687]/20 focus:bg-white transition-all"
                />
              </div>

              {/* Type of Care Needed */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="care-type" className="font-['Nunito_Sans',sans-serif] font-bold text-sm text-[#051c36]">
                  Type of Care Needed <span className="text-[#ba1a1a]">*</span>
                </label>
                <select
                  id="care-type"
                  name="careType"
                  required
                  value={formData.careType}
                  onChange={handleChange}
                  onBlur={() => handleBlur('careType')}
                  aria-invalid={!!errors.careType}
                  aria-describedby={errors.careType ? 'care-type-error' : undefined}
                  className={`w-full px-4 py-3 rounded-2xl bg-[#eff3ff] text-[#051c36] border text-sm sm:text-base focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                    errors.careType
                      ? 'border-[#ba1a1a] focus:ring-[#ba1a1a]/40 bg-[#ffdad6]/20'
                      : 'border-[#dde9ff] focus:border-[#006687] focus:ring-[#006687]/20 focus:bg-white'
                  }`}
                >
                  <option value="" disabled>Select care category</option>
                  <option value="pediatric">Children's General Healthcare / OPD</option>
                  <option value="dental">Child Dental Care & Check-up</option>
                  <option value="vaccination">Vaccination / Growth Check-up</option>
                  <option value="other">Other / Not Sure</option>
                </select>
                {errors.careType && (
                  <span id="care-type-error" className="text-xs text-[#ba1a1a] font-medium flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.careType}
                  </span>
                )}
              </div>

              {/* Preferred Date */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="preferred-date" className="font-['Nunito_Sans',sans-serif] font-bold text-sm text-[#051c36]">
                  Preferred Date
                </label>
                <input
                  id="preferred-date"
                  name="preferredDate"
                  type="date"
                  min={todayStr}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  onBlur={() => handleBlur('preferredDate')}
                  aria-invalid={!!errors.preferredDate}
                  aria-describedby={errors.preferredDate ? 'preferred-date-error' : undefined}
                  className={`w-full px-4 py-3 rounded-2xl bg-[#eff3ff] text-[#051c36] border text-sm sm:text-base focus:outline-none focus:ring-2 transition-all ${
                    errors.preferredDate
                      ? 'border-[#ba1a1a] focus:ring-[#ba1a1a]/40'
                      : 'border-[#dde9ff] focus:border-[#006687] focus:ring-[#006687]/20 focus:bg-white'
                  }`}
                />
                {errors.preferredDate && (
                  <span id="preferred-date-error" className="text-xs text-[#ba1a1a] font-medium flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.preferredDate}
                  </span>
                )}
              </div>

              {/* Preferred Time Window */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="preferred-time" className="font-['Nunito_Sans',sans-serif] font-bold text-sm text-[#051c36]">
                  Preferred Time Window
                </label>
                <select
                  id="preferred-time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-[#eff3ff] text-[#051c36] border border-[#dde9ff] text-sm sm:text-base focus:outline-none focus:border-[#006687] focus:ring-2 focus:ring-[#006687]/20 focus:bg-white transition-all cursor-pointer"
                >
                  <option value="morning">Morning (9:30 AM – 1:00 PM)</option>
                  <option value="afternoon">Afternoon (1:00 PM – 5:00 PM)</option>
                  <option value="evening">Evening (5:00 PM – 8:30 PM)</option>
                </select>
              </div>

              {/* Notes Textarea */}
              <div className="md:col-span-2 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="visit-notes" className="font-['Nunito_Sans',sans-serif] font-bold text-sm text-[#051c36]">
                    How can we best help your child? (Optional)
                  </label>
                  <span className="text-xs text-[#3f484e]">Optional</span>
                </div>
                <textarea
                  id="visit-notes"
                  name="notes"
                  rows={3}
                  placeholder="Briefly describe concerns or questions..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-[#eff3ff] text-[#051c36] border border-[#dde9ff] text-sm sm:text-base focus:outline-none focus:border-[#006687] focus:ring-2 focus:ring-[#006687]/20 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="md:col-span-2 flex flex-col gap-1 mt-1">
                <div className="flex items-start gap-3">
                  <input
                    id="privacy-consent"
                    name="privacyConsent"
                    type="checkbox"
                    required
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    onBlur={() => handleBlur('privacyConsent')}
                    className="w-5 h-5 rounded-md mt-0.5 accent-[#006687] cursor-pointer"
                  />
                  <label htmlFor="privacy-consent" className="text-xs sm:text-sm text-[#3f484e] cursor-pointer leading-normal">
                    I agree to be contacted by Star Kids Children Hospital & Child Dental Care via call or message regarding this visit request.{' '}
                    {onOpenPrivacyPolicy && (
                      <button
                        type="button"
                        onClick={onOpenPrivacyPolicy}
                        className="text-[#006687] font-semibold underline hover:text-[#004d67]"
                      >
                        View Privacy Notice
                      </button>
                    )}
                  </label>
                </div>
                {errors.privacyConsent && (
                  <span className="text-xs text-[#ba1a1a] font-medium flex items-center gap-1 ml-8">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.privacyConsent}
                  </span>
                )}
              </div>

              {/* Submit Button Row */}
              <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#eff3ff]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-['Nunito_Sans',sans-serif] font-bold text-base bg-[#fed669] hover:bg-[#ffdf90] text-[#765c00] shadow-md hover:shadow-lg disabled:opacity-60 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-[#765c00]" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#765c00]" />
                      <span>Request an Appointment</span>
                    </>
                  )}
                </button>

                <span className="text-xs sm:text-sm text-[#3f484e] font-medium">
                  Prefer phone? Call{' '}
                  <a href={clinicData.phoneLink} className="text-[#006687] font-bold hover:underline">
                    {clinicData.phoneDisplay}
                  </a>
                </span>
              </div>
            </form>
          )}

          {/* Medical Policy Disclaimer Notice */}
          <div className="p-4 rounded-2xl bg-[#eff3ff] border border-[#dde9ff] text-xs text-[#3f484e] flex items-start gap-2.5 mt-1">
            <Info className="w-4 h-4 text-[#006687] flex-shrink-0 mt-0.5" />
            <p>
              Our team will contact you to discuss availability and confirm your appointment. Please note that submitting this form is an appointment request, not a confirmed booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
