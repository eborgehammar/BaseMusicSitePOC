// All site identity lives here. Swap these values in the private repo.
export const site = {
  name: 'Example Piano Studio',
  tagline: 'Piano lessons for every stage of the journey',
  description:
    'Private piano lessons, online coaching, live sessions, and performance videos from Example Piano Studio.',
  // Must match `site` in astro.config.mjs
  url: 'https://www.example.com',
  // Placeholder only. No real contact address in the public repo.
  email: 'hello@example.com',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Lessons', href: '/lessons' },
    { label: 'Online Coaching', href: '/onlinecoaching' },
    { label: 'Live', href: '/live' },
    { label: 'Videos', href: '/videos' },
    { label: 'Contact', href: '/contact' },
  ],
  social: [
    { label: 'Social link 1', href: 'https://example.com/social-1' },
    { label: 'Social link 2', href: 'https://example.com/social-2' },
    { label: 'Social link 3', href: 'https://example.com/social-3' },
    { label: 'Social link 4', href: 'https://example.com/social-4' },
  ],
};
