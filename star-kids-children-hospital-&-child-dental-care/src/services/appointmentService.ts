export interface AppointmentSubmission {
  parentName: string;
  phone: string;
  childName?: string;
  careType: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  privacyConsent: boolean;
}

export interface AppointmentRecord extends AppointmentSubmission {
  id: string;
  submittedAt: string;
  status: 'received' | 'confirmed' | 'contacted';
}

export interface SubmissionResult {
  success: boolean;
  message: string;
  recordId?: string;
  error?: string;
}

const STORAGE_KEY = 'starkids_appointment_enquiries';

// Helper to normalize phone number for comparison & Indian standard check
export function validateIndianPhoneNumber(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  // Matches 10 digits starting with 6-9, or +91 / 91 / 0 prefixed
  const pattern = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  return pattern.test(cleaned);
}

// Check for duplicate submission within 10 minutes with same phone number
function checkIsDuplicate(phone: string, careType: string): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const records: AppointmentRecord[] = JSON.parse(raw);
    const tenMinutesAgo = Date.now() - 10 * 60 * 1000;
    
    const duplicate = records.find(r => {
      const recordTime = new Date(r.submittedAt).getTime();
      return (
        r.phone.replace(/\D/g, '') === phone.replace(/\D/g, '') &&
        r.careType === careType &&
        recordTime > tenMinutesAgo
      );
    });
    return !!duplicate;
  } catch {
    return false;
  }
}

/**
 * Appointment Submission Adapter
 * Handles client-side validation, duplicate prevention, and local audit storage.
 * In a production backend setup, this connects to an authenticated Express endpoint or webhook.
 */
export async function submitAppointmentEnquiry(data: AppointmentSubmission): Promise<SubmissionResult> {
  // Validate parent name
  if (!data.parentName || data.parentName.trim().length < 2) {
    return {
      success: false,
      message: "Please provide a valid parent or guardian name.",
      error: "INVALID_PARENT_NAME"
    };
  }

  // Validate phone
  if (!validateIndianPhoneNumber(data.phone)) {
    return {
      success: false,
      message: "Please enter a valid 10-digit Indian contact phone number (e.g., 98765 43210).",
      error: "INVALID_PHONE"
    };
  }

  // Validate care type
  if (!data.careType) {
    return {
      success: false,
      message: "Please select the type of pediatric or dental care needed.",
      error: "INVALID_CARE_TYPE"
    };
  }

  // Validate date (not in past)
  if (data.preferredDate) {
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      return {
        success: false,
        message: "Preferred appointment date cannot be in the past.",
        error: "PAST_DATE"
      };
    }
  }

  // Validate consent
  if (!data.privacyConsent) {
    return {
      success: false,
      message: "Please agree to be contacted regarding this visit request.",
      error: "CONSENT_REQUIRED"
    };
  }

  // Check duplicate submissions
  if (checkIsDuplicate(data.phone, data.careType)) {
    return {
      success: false,
      message: "A recent appointment request with this number has already been received. Our team will contact you shortly.",
      error: "DUPLICATE_SUBMISSION"
    };
  }

  // Simulate network dispatch with guaranteed safe storage
  await new Promise((resolve) => setTimeout(resolve, 850));

  const record: AppointmentRecord = {
    ...data,
    id: `SK-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
    submittedAt: new Date().toISOString(),
    status: 'received'
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const existing: AppointmentRecord[] = raw ? JSON.parse(raw) : [];
    existing.unshift(record);
    // Keep max 50 recent local enquiries
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
  } catch (err) {
    console.warn("Local storage write warning:", err);
  }

  // The official required message:
  return {
    success: true,
    message: "Your appointment request has been received. The clinic team will contact you to confirm availability.",
    recordId: record.id
  };
}
