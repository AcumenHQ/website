'use client';

import { useEffect, useState } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function EducationAlpha() {
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
      number: { value: 60 },
      color: { value: '#ffffff' }, // White particles
      opacity: { value: 0.12 },
      size: { value: { min: 1, max: 2 } },
      move: { enable: true, speed: 0.3, direction: 'none', outModes: 'bounce' },
      links: { enable: true, distance: 100, color: '#ffffff', opacity: 0.08, width: 1 },
      shape: { type: 'circle' },
    },
    interactivity: { events: { resize: { enable: true } } },
  };

  return (
    <section className="relative w-full min-h-[100dvh] bg-accent text-white overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        {ready && (
          <Particles
            id="educationParticles"
            options={options}
            style={{ pointerEvents: 'none', width: '100%', height: '100%' }}
          />
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-24 h-full">
        <div className="h-full grid grid-rows-[1fr_auto]">
          {/* Empty space above */}
          <div></div>
          
          {/* Text content */}
          <div className="pb-8">
            <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Education & Alpha Sessions
              </h2>
              <p className="text-base sm:text-lg text-white/80">
                Exclusive Web3 education and early alpha insights for $ACUM holders. Perfect for newcomers transitioning from Web2 to Web3.
              </p>
            </div>
          </div>
          
          {/* Bottom row - responsive layout */}
          <div className="pb-8">
            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              {/* Left: Single combined link */}
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#learning-alpha"
                  className="inline-flex items-center justify-center border border-white/30 text-white px-5 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 hover:scale-95"
                >
                  <span className="mr-2">Start learning and join alpha sessions</span>
                  <svg
                    className="w-5 h-5 transform transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Right: Cards */}
              <div className="flex items-end justify-center lg:justify-end gap-4 mr-8 sm:mr-12 lg:mr-20">
                {/* Card 1: Education */}
                <div className="bg-accent rounded-lg p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ height: '160px', width: '100px' }}>
                  <div className="flex flex-col items-center justify-center h-full">
                    <svg className="w-8 h-8 lg:w-12 lg:h-12 text-white mb-2 lg:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-white text-xs lg:text-sm font-medium">Education</span>
                  </div>
                </div>

                {/* Card 2: Alpha Sessions */}
                <div className="bg-accent rounded-lg p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ height: '220px', width: '100px' }}>
                  <div className="flex flex-col items-center justify-center h-full">
                    <svg className="w-8 h-8 lg:w-12 lg:h-12 text-white mb-2 lg:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-white text-xs lg:text-sm font-medium">Alpha</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
