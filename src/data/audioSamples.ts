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

// Samply embed docs: https://docs.samply.app/embedding.html
// Samply embed format: https://samply.app/embed/<Player ID>?color=ead3c2
export const audioSamples: AudioSample[] = [
  {
    title: 'Selected audio work',
    project: 'Samply showcase',
    category: 'Mixing',
    role: 'Mix Engineer',
    description: 'A curated Samply player for songs, sounds and mixes hosted directly by Samply.',
    samplyEmbedUrl: 'https://samply.app/embed/rRYvt73HEi9AjR1C2LzV?si=JwVo0R3Bd9ZiJayQVcklpDnqu3V2',
  },
];
