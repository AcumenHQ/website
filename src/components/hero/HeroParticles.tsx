'use client';

import { useEffect, useState } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function HeroParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    detectRetina: true,
    fpsLimit: 60,
    particles: {
      number: { value: 85 },
      color: { value: '#ffffff' },
      opacity: { value: 0.2 },
      size: { value: { min: 1, max: 2.8 } },
      move: { enable: true, speed: 0.45, direction: 'none', outModes: 'bounce' },
      links: { enable: true, distance: 120, color: '#ffffff', opacity: 0.1, width: 1 },
      shape: { type: 'circle' },
    },
    interactivity: { events: { resize: { enable: true } } },
  };

  if (!ready) return null;
  return (
    <Particles
      id="heroParticles"
      options={options}
      style={{ pointerEvents: 'none', zIndex: 0, width: '100%', height: '100%' }}
    />
  );
}


