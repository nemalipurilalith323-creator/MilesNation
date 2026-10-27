import type { Challenge, EventItem, LeaderboardEntry, Registration, Submission, UserProfile } from '../types';

const now = new Date();
const futureDate = (days: number) => new Date(now.getTime() + days * 24 * 60 * 60 * 1000).toISOString();

export const mockUser: UserProfile = {
  uid: 'user-1',
  displayName: 'Aarav Singh',
  email: 'aarav@example.com',
  phoneNumber: '+91 98765 43210',
  photoURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  role: 'participant',
  emailVerified: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

export const mockEvents: EventItem[] = [
  {
    id: 'evt-1',
    slug: 'bangalore-city-marathon',
    title: 'Bangalore City Marathon',
    description: 'A premium city race through the tech capital with a high-energy finish experience for all levels.',
    coverImage: 'https://images.unsplash.com/photo-1541534401786-2077eed87a74?auto=format&fit=crop&w=1200&q=80',
    type: 'Offline',
    eventDate: futureDate(30),
    registrationOpensAt: new Date().toISOString(),
    registrationClosesAt: futureDate(20),
    location: 'Bangalore',
    venueAddress: 'MG Road, Bengaluru',
    distances: [
      { label: '5K', price: 0, currency: 'INR' },
      { label: '10K', price: 799, currency: 'INR' },
      { label: '21K', price: 1499, currency: 'INR' },
      { label: '42K', price: 2299, currency: 'INR' }
    ],
    priceType: 'Paid',
    currency: 'INR',
    capacity: 1200,
    registrationCount: 420,
    status: 'Registration Open',
    organizer: 'MilesNation Events',
    terms: 'Participation is subject to race day rules and verification.'
  },
  {
    id: 'evt-2',
    slug: 'goa-beach-run',
    title: 'Goa Beach Run',
    description: 'A scenic coastal challenge with sunrise warm-ups and a community finish line near the shore.',
    coverImage: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80',
    type: 'Offline',
    eventDate: futureDate(45),
    registrationOpensAt: new Date().toISOString(),
    registrationClosesAt: futureDate(30),
    location: 'Goa',
    venueAddress: 'Candolim Beach, Goa',
    distances: [
      { label: '3K', price: 0, currency: 'INR' },
      { label: '5K', price: 499, currency: 'INR' },
      { label: '10K', price: 999, currency: 'INR' }
    ],
    priceType: 'Paid',
    currency: 'INR',
    capacity: 800,
    registrationCount: 260,
    status: 'Registration Open',
    organizer: 'Goa Active Club',
    terms: 'The beach route is subject to weather updates.'
  },
  {
    id: 'evt-3',
    slug: '100k-virtual-challenge',
    title: '100K Virtual Challenge',
    description: 'Run at your own pace anywhere, any time, and compete across your favorite routes this month.',
    coverImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    type: 'Virtual',
    eventDate: futureDate(60),
    registrationOpensAt: new Date().toISOString(),
    registrationClosesAt: futureDate(40),
    location: 'Virtual',
    virtualInstructions: 'Submit your completed distance with proof and maintain the challenge activity window.',
    distances: [
      { label: '100K', price: 0, currency: 'INR' },
      { label: '50K', price: 0, currency: 'INR' }
    ],
    priceType: 'Free',
    currency: 'INR',
    capacity: 5000,
    registrationCount: 1200,
    status: 'Published',
    organizer: 'MilesNation Community',
    terms: 'Proof submissions are reviewed before leaderboard inclusion.'
  }
];

export const mockChallenges: Challenge[] = [
  {
    id: 'challenge-1',
    title: '100K Virtual Challenge',
    description: 'Sustain your momentum with a month-long goals-based community challenge.',
    goalKm: 100,
    coverImage: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80',
    type: 'Virtual',
    status: 'Open'
  }
];

export const mockRegistrations: Registration[] = [
  {
    id: 'reg-1',
    userId: 'user-1',
    eventId: 'evt-1',
    selectedDistance: '10K',
    amount: 799,
    currency: 'INR',
    registrationStatus: 'Confirmed',
    paymentStatus: 'Paid',
    paymentReference: 'pay_mock_1',
    participantDetails: {
      fullName: 'Aarav Singh',
      email: 'aarav@example.com'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const mockSubmissions: Submission[] = [
  {
    id: 'sub-1',
    userId: 'user-1',
    challengeId: 'challenge-1',
    distanceKm: 24,
    activityDate: new Date().toISOString(),
    durationSeconds: 1200,
    proofStoragePath: 'virtual-proof/sample.jpg',
    status: 'Pending',
    createdAt: new Date().toISOString()
  }
];

export const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, displayName: 'Ananya R.', verifiedDistance: 280, badge: 'Marathon Finisher' },
  { rank: 2, displayName: 'Karan V.', verifiedDistance: 240, badge: '10K Club' },
  { rank: 3, displayName: 'Meera P.', verifiedDistance: 210, badge: 'Virtual Challenge Completed' }
];
