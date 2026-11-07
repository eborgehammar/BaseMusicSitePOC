// Placeholder studio data. Replace with real copy and prices in the private repo.

export interface Program {
  title: string;
  description: string;
}

export const programs: Program[] = [
  {
    title: 'Beginner Lessons',
    description: 'Placeholder: a short description of the beginner program.',
  },
  {
    title: 'Intermediate Lessons',
    description: 'Placeholder: a short description of the intermediate program.',
  },
  {
    title: 'Performance Preparation',
    description: 'Placeholder: a short description of performance coaching.',
  },
  {
    title: 'Recitals',
    description: 'Placeholder: a short description of studio recitals.',
  },
];

export const tuition = [
  { length: '30-minute lesson', price: '$40' },
  { length: '45-minute lesson', price: '$55' },
  { length: '60-minute lesson', price: '$70' },
];

export const policies: string[] = [
  'Placeholder: sample cancellation policy.',
  'Placeholder: sample make-up lesson policy.',
  'Placeholder: sample payment schedule.',
];
