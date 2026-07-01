import { useMemo, useState } from 'react';
import { audioSamples, type AudioSample } from '../data/audioSamples';

type Props = {
  samples?: AudioSample[];
  accent?: string;
};

function embedSrc(sample: AudioSample, accent: string) {
  if (sample.samplyEmbedUrl) {
    const separator = sample.samplyEmbedUrl.includes('?') ? '&' : '?';
    return `${sample.samplyEmbedUrl}${separator}color=${accent.replace('#', '')}`;
  }
  if (sample.samplyPlayerId) {
    return `https://samply.app/embed/${sample.samplyPlayerId}?color=${accent.replace('#', '')}`;
  }
  return '';
}

export default function SamplyDashboard({ samples = audioSamples, accent = '#ead3c2' }: Props) {
  const safeSamples = Array.isArray(samples) ? samples : audioSamples;
  const categories = useMemo(() => ['All', ...Array.from(new Set(safeSamples.map((sample) => sample.category)))], [safeSamples]);
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? safeSamples : safeSamples.filter((sample) => sample.category === active);

  return (
    <section className="audio-dashboard" aria-label="Selected audio samples">
      <div className="filter-row" role="list" aria-label="Filter audio samples">
        {categories.map((category) => (
          <button
            className={`filter-button ${active === category ? 'active' : ''}`}
            key={category}
            type="button"
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="sample-grid">
        {filtered.map((sample) => {
          const src = embedSrc(sample, accent);
          return (
            <article className="sample-card" key={`${sample.title}-${sample.project}`}>
              <p className="eyebrow">{sample.category}</p>
              <h3>{sample.title}</h3>
              <div className="sample-meta">
                <span className="pill">{sample.project}</span>
                <span className="pill">{sample.role}</span>
                {sample.year ? <span className="pill">{sample.year}</span> : null}
              </div>
              <p>{sample.description}</p>
              {src ? (
                <iframe
                  className="samply-frame"
                  src={src}
                  title={`${sample.title} Samply player`}
                  loading="lazy"
                  frameBorder="0"
                  allowTransparency={true}
                  allow="autoplay; encrypted-media"
                />
              ) : (
                <div className="embed-placeholder">
                  <strong>Samply player placeholder</strong>
                  <p>
                    Paste this sample's Samply Player ID into <code>src/data/audioSamples.ts</code>. The site will render it as an iframe using <code>https://samply.app/embed/&lt;Player ID&gt;</code>.
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
