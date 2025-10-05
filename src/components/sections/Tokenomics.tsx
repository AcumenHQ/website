'use client';

import { useEffect, useState } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

export default function Tokenomics() {
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
    <section id="tokenomics" className="relative w-full min-h-[100dvh] bg-deep text-white overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        {ready && (
          <Particles
            id="tokenomicsParticles"
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
          <div className="pb-8">
            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              {/* Left: Text content */}
              <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  Tokenomics
                </h2>
                <p className="text-base sm:text-lg text-white/80 mb-5">
                  Our tokenomics are designed to create a sustainable ecosystem that rewards early supporters, drives community engagement, and funds continuous innovation. Hold $ACUM tokens to participate in governance and unlock exclusive benefits.
                </p>
                
                {/* Outlined link with shrink hover */}
                <div className="mt-10 sm:mt-12 lg:mt-24 flex justify-center lg:justify-start">
                  <a
                    href="#tokenomics-details"
                    className="inline-flex items-center justify-center border border-white/30 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 hover:scale-95"
                  >
                    <span className="mr-1">Explore our tokenomics model</span>
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
              </div>

              {/* Right: Cards */}
              <div className="flex items-end justify-center lg:justify-end gap-3 lg:gap-4 mr-8 sm:mr-12 lg:mr-20">
                {/* Card 1: Token Buybacks */}
                <div className="bg-gradient-to-br from-deep to-deep/80 rounded-lg p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ height: '240px', width: '100px' }}>
                  <div className="flex flex-col items-center justify-center h-full">
                    <svg className="w-8 h-8 lg:w-12 lg:h-12 text-white mb-2 lg:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="text-white text-xs lg:text-sm font-medium text-center">Token Buybacks</span>
                  </div>
                </div>

                {/* Card 2: Community Rewards */}
                <div className="bg-gradient-to-br from-deep to-deep/80 rounded-lg p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ height: '280px', width: '100px' }}>
                  <div className="flex flex-col items-center justify-center h-full">
                    <svg className="w-8 h-8 lg:w-12 lg:h-12 text-white mb-2 lg:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-white text-xs lg:text-sm font-medium text-center">Community Rewards</span>
                  </div>
                </div>

                {/* Card 3: Product Development */}
                <div className="bg-gradient-to-br from-deep to-deep/80 rounded-lg p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ height: '320px', width: '100px' }}>
                  <div className="flex flex-col items-center justify-center h-full">
                    <svg className="w-8 h-8 lg:w-12 lg:h-12 text-white mb-2 lg:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-white text-xs lg:text-sm font-medium text-center">Product Development</span>
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
