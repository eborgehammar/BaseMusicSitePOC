// Placeholder video list. `embedUrl` stays empty until real videos are added;
// VideoEmbed shows a placeholder when it is empty.

export interface Video {
  id: string;
  title: string;
  date: string;
  embedUrl: string;
}

export const videos: Video[] = [
  { id: 'video-1', title: 'Sample performance 1', date: '2026-01-01', embedUrl: '' },
  { id: 'video-2', title: 'Sample performance 2', date: '2026-02-01', embedUrl: '' },
  { id: 'video-3', title: 'Sample performance 3', date: '2026-03-01', embedUrl: '' },
];
