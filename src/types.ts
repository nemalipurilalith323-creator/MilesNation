export type EventType = 'Offline' | 'Virtual';
export type EventStatus = 'Draft' | 'Published' | 'Registration Open' | 'Registration Closed' | 'Completed' | 'Cancelled';
export type RegistrationStatus = 'Pending Payment' | 'Confirmed' | 'Cancelled' | 'Refund Pending' | 'Refunded';
export type PaymentStatus = 'Pending' | 'Paid' | 'Failed' | 'Refunded';
export type SubmissionStatus = 'Pending' | 'Approved' | 'Rejected';

export interface UserProfile {
  uid: string;
  displayName: string;
  email?: string;
  phoneNumber?: string;
  photoURL?: string;
  role: 'participant' | 'administrator';
  emailVerified: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface DistanceOption {
  label: string;
  price: number;
  currency: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  type: EventType;
  eventDate: string;
  registrationOpensAt: string;
  registrationClosesAt: string;
  location: string;
  venueAddress?: string;
  virtualInstructions?: string;
  distances: DistanceOption[];
  priceType: 'Free' | 'Paid';
  currency: string;
  capacity: number;
  registrationCount: number;
  status: EventStatus;
  organizer?: string;
  terms?: string;
}

export interface Registration {
  id: string;
  userId: string;
  eventId: string;
  selectedDistance: string;
  amount: number;
  currency: string;
  registrationStatus: RegistrationStatus;
  paymentStatus: PaymentStatus;
  paymentReference?: string;
  participantDetails?: {
    fullName: string;
    email: string;
    phone?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Submission {
  id: string;
  userId: string;
  challengeId: string;
  distanceKm: number;
  activityDate: string;
  durationSeconds?: number;
  proofStoragePath?: string;
  status: SubmissionStatus;
  reviewNotes?: string;
  reviewedBy?: string;
  createdAt: string;
  reviewedAt?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  goalKm: number;
  coverImage: string;
  type: 'Virtual';
  status: 'Open' | 'Closed';
}

export interface LeaderboardEntry {
  rank: number;
  displayName: string;
  avatar?: string;
  verifiedDistance: number;
  badge: string;
}
