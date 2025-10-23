'use client';

import Navbar from '@/components/Navbar';
import HeroParticles from '@/components/hero/HeroParticles';
import PredictionReimagined from '@/components/sections/PredictionReimagined';
import EducationAlpha from '@/components/sections/EducationAlpha';
import Tokenomics from '@/components/sections/Tokenomics';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - full viewport with left-aligned text and bottom CTAs */}
      <section className="relative h-[100dvh] min-h-[100dvh] w-full bg-accent overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <HeroParticles />
        </div>
        <div className="relative z-10 h-full w-full px-4 sm:px-6 lg:px-8 pt-20">
          <div className="h-full grid grid-rows-[1fr_auto]">
            <div className="flex items-center justify-center sm:justify-start">
              <div className="max-w-2xl text-center sm:text-left">
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Predict. <span className="opacity-90">Earn.</span> Learn.
                </h1>
                <p className="text-base sm:text-lg text-white/80">
                  The ultimate Solana prediction marketplace and Web3 education platform. Hold $ACUM tokens to unlock exclusive alpha and prediction opportunities.
                </p>
              </div>
            </div>
            <div className="pb-8">
              <div className="max-w-2xl mx-auto sm:mx-0">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4">
                  <button 
                    onClick={() => window.open('https://predictions.acumhq.xyz', '_blank')}
                    className="bg-white text-deep px-5 py-3 sm:px-6 sm:py-3 rounded-lg font-semibold text-base sm:text-lg cursor-pointer"
                  >
                    Start Predicting
                  </button>
                  <button className="border-2 border-white text-white px-5 py-3 sm:px-6 sm:py-3 rounded-lg font-semibold text-base sm:text-lg cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prediction Reimagined Section */}
      <PredictionReimagined />

      {/* Education & Alpha Sessions Section */}
      <EducationAlpha />

      {/* Tokenomics Section */}
      <Tokenomics />

      {/* CTA Section */}
      <section className="relative w-full min-h-[100vh] bg-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-accent mb-6">
            Ready to Join the best prediction platform and Web3 education platform?
          </h2>
          <p className="text-1xl sm:text-1xl text-accent mb-12 max-w-2xl mx-auto">
            Hold $ACUM tokens and unlock exclusive prediction opportunities and Web3 education.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://predictions.acumhq.xyz', '_blank')}
              className="border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Get Started Now
            </button>
            <button className="border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
              View Whitepaper
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/images/acumen-logo.png"
                    alt="Acumen Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-white"></span>
              </div>
              <p className="text-gray-400">
                The ultimate Solana prediction marketplace and Web3 education platform.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Prediction Marketplace</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Education Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leaderboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alpha Sessions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tokenomics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Medium</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Acumen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}