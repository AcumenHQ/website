'use client';

import { useEffect, useState } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function PredictionReimagined() {
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
      color: { value: '#ffffff' },
      opacity: { value: 0.12 },
      size: { value: { min: 1, max: 2 } },
      move: { enable: true, speed: 0.3, direction: 'none', outModes: 'bounce' },
      links: { enable: true, distance: 100, color: '#ffffff', opacity: 0.08, width: 1 },
      shape: { type: 'circle' },
    },
    interactivity: { events: { resize: { enable: true } } },
  };

  return (
    <section className="relative w-full min-h-[100dvh] bg-deep text-white overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        {ready && (
          <Particles
            id="predictionParticles"
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
          
          {/* Bottom content - responsive layout */}
          <div className="pb-8 mt-24 sm:mt-48">
            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left: Text content */}
              <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  Prediction Reimagined
                </h2>
                <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8">
                  Predict the performance of new Solana meme tokens and earn rewards. Early $ACUM holders get 2x airdrops and exclusive leaderboard access.
                </p>
                
                {/* Learn More Link */}
                <a 
                  href="#prediction-details" 
                  className="inline-flex items-center justify-center text-white hover:text-white/80 transition-colors duration-200 group"
                >
                  <span className="text-1xll font-medium mr-2">Learn more about our prediction model</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Right: Animated Intertwined Delta Symbols */}
              <div className="flex items-center justify-center lg:justify-end mt-6 lg:mt-0 mr-8 sm:mr-12 lg:mr-20">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center relative">
                  {/* First Delta */}
                  <svg
                    className="w-full h-full text-white/60 animate-spin absolute"
                    style={{ animationDuration: '8s' }}
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      d="M50 10 L90 80 L10 80 Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                  </svg>

                  {/* Second Delta - Rotated 60 degrees and counter-spinning */}
                  <svg
                    className="w-full h-full text-white/40 animate-spin absolute"
                    style={{ animationDuration: '8s', animationDirection: 'reverse' }}
                    viewBox="0 0 100 100"
                    fill="none"
                    transform="rotate(60 50 50)"
                  >
                    <path
                      d="M50 10 L90 80 L10 80 Z"
                      fill="currentColor"
                      opacity="0.5"
                    />
                  </svg>

                  {/* Third Delta - Rotated 120 degrees and spinning */}
                  <svg
                    className="w-full h-full text-white/30 animate-spin absolute"
                    style={{ animationDuration: '8s' }}
                    viewBox="0 0 100 100"
                    fill="none"
                    transform="rotate(120 50 50)"
                  >
                    <path
                      d="M50 10 L90 80 L10 80 Z"
                      fill="currentColor"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
