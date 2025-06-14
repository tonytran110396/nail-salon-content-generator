
export interface User {
  id: string;
  email: string;
  phone: string;
  // password stored hashed, not kept in User object in frontend state after auth
}

export interface StoredUser extends User {
  passwordHash: string; // Base64 encoded for demo
}

export interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean;
  login: (emailOrPhone: string, passwordAttempt: string) => Promise<boolean>;
  signup: (email: string, phone: string, passwordPlain: string) => Promise<boolean>;
  logout: () => void;
}

export interface ContentFormData {
  postPurpose: string;
  topicKeywords: string;
  customerPersona?: string;
  brandName: string;
  productService: string;
  industry?: string;
  contentStyleConcept: string;
  customContentStyleConcept?: string;
  specialOffer?: string;
  callToActionText: string;
  address?: string;
  phoneNumber?: string;
  websiteLink?: string;
}

export interface GeneratedContent {
  caption: string;
  hashtags: string; // Should be parsed into an array of strings later
  imagePrompt: string;
}

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

export interface ToastContextType {
  addToast: (message: string, type: ToastType) => void;
  toasts: ToastMessage[];
  removeToast: (id: string) => void;
}

export enum ContentStyle {
  STORYTELLING = "Storytelling",
  AIDA = "AIDA (Attention, Interest, Desire, Action)",
  PAS = "PAS (Problem, Agitate, Solution)",
  BAB = "BAB (Before, After, Bridge)",
  QUICK_TIP = "Quick Tip / How-To",
  PROMOTIONAL = "Promotional / Special Offer",
  ENGAGEMENT = "Engagement Question / Poll",
  OTHER = "Other (Specify below)",
}
