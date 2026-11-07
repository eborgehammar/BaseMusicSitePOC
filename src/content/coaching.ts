// Placeholder coaching data. Sample prices only.

export interface CoachingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlight?: boolean;
}

export const coachingSteps: string[] = [
  'Book a free intro call',
  'Share your goals and current level',
  'Receive a weekly practice plan',
  'Check in and adjust as you grow',
];

export const coachingTiers: CoachingTier[] = [
  {
    name: 'Starter',
    price: '$50',
    period: '/month',
    features: ['Placeholder feature 1', 'Placeholder feature 2', 'Placeholder feature 3'],
  },
  {
    name: 'Standard',
    price: '$80',
    period: '/month',
    features: ['Placeholder feature 1', 'Placeholder feature 2', 'Placeholder feature 3', 'Placeholder feature 4'],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$110',
    period: '/month',
    features: ['Placeholder feature 1', 'Placeholder feature 2', 'Placeholder feature 3', 'Placeholder feature 4', 'Placeholder feature 5'],
  },
];

// Placeholder link. Replace with the real intake document in the private repo.
export const coachingIntakeUrl = 'https://example.com/docs/coaching-intake';
