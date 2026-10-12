export interface ClinicInfo {
  name: string;
  shortName: string;
  tagline: string;
  subtitle: string;
  phone: string;
  phoneDisplay: string;
  phoneLink: string;
  address: {
    line1: string;
    mall: string;
    floor: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  googleRating: {
    score: number;
    reviewCount: number;
    starsText: string;
    label: string;
  };
  timings: {
    regular: string;
    sunday: string;
    display: string;
    note: string;
  };
  links: {
    googleMapsDirections: string;
    googleMapsEmbedOrUrl: string;
    googleBusinessProfile: string;
  };
}

export const clinicData: ClinicInfo = {
  name: "Star Kids Children Hospital & Child Dental Care",
  shortName: "Star Kids",
  tagline: "Big Care for Little Smiles.",
  subtitle: "Helping families navigate children's healthcare and dental visits with a welcoming, caring, and child-friendly approach in Kudasan, Gandhinagar.",
  phone: "09773125404",
  phoneDisplay: "097731 25404",
  phoneLink: "tel:09773125404",
  address: {
    line1: "210–211, 2nd Floor, Sarthak Fortune Mall",
    mall: "Sarthak Fortune Mall",
    floor: "2nd Floor (Elevator available)",
    area: "Randesan Road, Kudasan",
    city: "Gandhinagar",
    state: "Gujarat",
    pincode: "382426",
    full: "210–211, 2nd Floor, Sarthak Fortune Mall, Randesan Road, Kudasan, Gandhinagar, Gujarat 382426",
  },
  googleRating: {
    score: 4.9,
    reviewCount: 287,
    starsText: "★★★★★",
    label: "4.9 Rating (287 Reviews)",
  },
  timings: {
    regular: "Monday – Saturday: 9:00 AM – 8:30 PM",
    sunday: "Sunday: By prior emergency consultation",
    display: "Mon - Sat: 9:00 AM - 8:30 PM | Sun: Emergency Only",
    note: "Listed operating status: Open 24 hours (requiring clinic verification). Urgent pediatric triage available during OPD hours.",
  },
  links: {
    googleMapsDirections: "https://www.google.com/maps/dir/?api=1&destination=Sarthak+Fortune+Mall+Kudasan+Gandhinagar+Gujarat+382426",
    googleMapsEmbedOrUrl: "https://www.google.com/maps/search/?api=1&query=Star+Kids+Children+Hospital+Sarthak+Fortune+Mall+Kudasan+Gandhinagar",
    googleBusinessProfile: "https://www.google.com/maps/search/?api=1&query=Star+Kids+Children+Hospital+Kudasan+Gandhinagar",
  },
};

export interface CareCategory {
  id: string;
  title: string;
  description: string;
  linkText: string;
  iconName: "stethoscope" | "dentistry" | "health_and_safety";
  colorTheme: "primary" | "secondary" | "tertiary";
}

export const careCategories: CareCategory[] = [
  {
    id: "pediatric-healthcare",
    title: "Children's Healthcare",
    description: "Comprehensive pediatric OPD consultations, routine health assessments, and supportive advice to help parents care for growing kids with confidence.",
    linkText: "Learn visit preparation",
    iconName: "stethoscope",
    colorTheme: "primary",
  },
  {
    id: "child-dental-care",
    title: "Child Dental Care",
    description: "Learn about children's oral health, gentle cavity prevention, pediatric dental check-ups, and building healthy daily brushing habits from infancy.",
    linkText: "Explore pediatric dental",
    iconName: "dentistry",
    colorTheme: "secondary",
  },
  {
    id: "preventive-checkups",
    title: "Preventive Check-ups",
    description: "Understand the role of periodic physical milestones, age-appropriate vaccinations, dietary guidance, and preventive oral wellness reviews.",
    linkText: "Read milestone guide",
    iconName: "health_and_safety",
    colorTheme: "tertiary",
  },
];

export interface VisitPreparationStep {
  stepNumber: number;
  title: string;
  description: string;
  tip: string;
  icon: string;
  color: "primary" | "secondary" | "tertiary";
}

export const visitPreparationSteps: VisitPreparationStep[] = [
  {
    stepNumber: 1,
    title: "Talk About the Visit",
    description: "Explain what to expect using calm, positive, and age-appropriate language before arriving. Avoid using scary words like 'shots' or 'pain.'",
    tip: "Tip: Read a storybook together",
    icon: "forum",
    color: "primary",
  },
  {
    stepNumber: 2,
    title: "Bring Their Questions",
    description: "Share your child's curiosities or worries openly. Our doctors and dental team love answering curious questions and showing instruments gently.",
    tip: "Tip: Bring their favorite small toy",
    icon: "help_center",
    color: "secondary",
  },
  {
    stepNumber: 3,
    title: "One Step at a Time",
    description: "We follow the child's natural pace, allowing rest breaks whenever needed, and never rushing clinical procedures or examinations.",
    tip: "Tip: Celebrate the effort together",
    icon: "done_all",
    color: "tertiary",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const parentFaqItems: FaqItem[] = [
  {
    id: "faq-dental-prep",
    question: "How can I prepare my child for a dental visit?",
    answer: "Talk positively about the dentist, read cheerful storybooks about check-ups, and avoid using words that evoke fear like 'drill' or 'needle.' Let your child know the team is there to count their teeth and keep their smile strong.",
  },
  {
    id: "faq-what-to-bring",
    question: "What should I bring to an appointment?",
    answer: "Bring any previous health or dental records, your child's immunization card if applicable, a list of current medications, and a beloved comfort toy or security blanket to help them feel safe during their visit.",
  },
  {
    id: "faq-brushing-habits",
    question: "How can I help my child develop healthy brushing habits?",
    answer: "Make brushing fun with two-minute catchy brushing songs, use an age-appropriate soft-bristled brush, brush together as a family routine, and consult our pediatric dental team for recommended fluoride guidelines based on age.",
  },
  {
    id: "faq-request-appointment",
    question: "How do I request an appointment?",
    answer: "You can easily submit our online appointment request form below, or call the Kudasan clinic directly at 097731 25404. Our reception team will coordinate with your schedule and confirm an available slot.",
  },
];

export interface TrustPillar {
  title: string;
  description: string;
  icon: string;
  color: "primary" | "secondary" | "tertiary" | "accent";
}

export const trustPillars: TrustPillar[] = [
  {
    title: "Welcoming Environment",
    description: "A playful, cheerful waiting space and clinical rooms designed specifically to put little ones at ease.",
    icon: "child_care",
    color: "primary",
  },
  {
    title: "Respectful Communication",
    description: "Listening with genuine care to both child concerns and parental observations without judgment.",
    icon: "hearing",
    color: "tertiary",
  },
  {
    title: "Parent Involvement",
    description: "Keeping you fully informed and engaged in every healthcare and dental decision for your little one.",
    icon: "diversity_1",
    color: "secondary",
  },
  {
    title: "Focus on Comfort",
    description: "Unhurried examinations, gentle pacing, and empathetic professionals who respect your child's feelings.",
    icon: "sentiment_satisfied",
    color: "accent",
  },
];

export interface DoctorProfile {
  name: string;
  roleBadge: string;
  specialtyTag: string;
  qualifications: string;
  focus: string;
  photoUrl: string;
  badgeColor: "primary" | "secondary";
}

export const careTeam: DoctorProfile[] = [
  {
    name: "Pediatric Medical Consultant",
    roleBadge: "Pediatric Specialist",
    specialtyTag: "Child Health & Development",
    qualifications: "MBBS, MD (Pediatrics) · Child Health Specialist",
    focus: "Focusing on early childhood growth milestones, infant nutrition triage, vaccination protocols, and compassionate childhood recovery.",
    photoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB4Hb3vULN1mB80pK__oZI0-663vTALTt-jyPxzUD44sNJE3qKW0s-jjEmEuIue6Ygaik-OpHPkKz4LPF_quHdU_seVrWBugHrn_mV5om3ENzgnXyA__W-RqxmqDgwsriiZZEqlS7pfS8BJrnoIpWrhPRY_6JK4iWmk6W14G3xUAZoHhIXucr3W1C0_RzfReQku4bUQiFYMCL7NXllsLkvndJIB-lAqjaowbAFZlzdM6jXD3YMdiwJ",
    badgeColor: "primary",
  },
  {
    name: "Pediatric Dental Consultant",
    roleBadge: "Child Dental Specialist",
    specialtyTag: "Pedodontics & Preventive Smiles",
    qualifications: "BDS, MDS (Pedodontics) · Preventive Dental Care",
    focus: "Dedicated to pain-minimized child dental therapy, habit breaking appliances, dental trauma care, and fear-free dental cleanings.",
    photoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfzK7YkJDV2P-ArFpEmi8g7m3UQ_MDWCC6wIMo0KeP3YkXSVtO4Nb4CYiKCNID91eg6pE01D6KjWbwYeRsN2BGYYNNdn2T3f-q_SGE7vW5w_yGX6cyqX_fHGvDYibhUxieECyTz49XiDvatweiuMb-jKZFQrcA8wKOyIsXQ8PF__JsxhzbsoVyEZQco8d25pTbUtAbA02mSAukfhjTB6vje2kcKY3_KKu9SdfqrPDptuFY3VhWd1fu",
    badgeColor: "secondary",
  },
];
