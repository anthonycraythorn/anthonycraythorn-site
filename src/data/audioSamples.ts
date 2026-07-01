export type AudioSample = {
  title: string;
  project: string;
  category: string;
  role: string;
  year?: string;
  description: string;
  samplyPlayerId?: string;
  samplyEmbedUrl?: string;
};

// Samply embed format: https://samply.app/embed/<Player ID>?color=111111
export const audioSamples: AudioSample[] = [
  {
    title: 'Selected audio work',
    project: 'Studio selections',
    category: 'Selected work',
    role: 'Mix Engineer',
    description: 'A short listening selection highlighting balance, clarity, vocal detail and the emotional arc of the mix.',
    samplyEmbedUrl: 'https://samply.app/embed/rRYvt73HEi9AjR1C2LzV?si=JwVo0R3Bd9ZiJayQVcklpDnqu3V2',
  },
];
