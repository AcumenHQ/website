'use client';

import { useEffect, useState } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import Link from 'next/link';
import Image from 'next/image';
import { loadSlim } from '@tsparticles/slim';
import TokenPredictionModal from '@/components/TokenPredictionModal';

interface Prediction {
  id: number;
  title: string;
  description: string;
  options: string[];
  endDate: string;
  totalPool: string;
  participants: number;
}

export default function PredictionsPage() {
  const [ready, setReady] = useState(false);
  const [activeCategory, setActiveCategory] = useState('sports');
  const [selectedPrediction, setSelectedPrediction] = useState<Prediction | null>(null);
  const [showTokenModal, setShowTokenModal] = useState(false);

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
      number: { value: 40 },
      color: { value: '#6f46be' },
      opacity: { value: 0.15 },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 0.5, direction: 'none', outModes: 'bounce' },
      links: { enable: true, distance: 120, color: '#6f46be', opacity: 0.1, width: 1 },
      shape: { type: 'circle' },
    },
    interactivity: { events: { resize: { enable: true } } },
  };

  const categories = [
    {
      id: 'sports',
      name: 'Sports',
      icon: '⚽',
      description: 'Predict game outcomes, player performances, and tournament results',
      color: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 'entertainment',
      name: 'Entertainment',
      icon: '🎬',
      description: 'Predict movie box office, award shows, and entertainment industry trends',
      color: 'from-purple-500/10 to-purple-600/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 'tokens',
      name: 'Tokens',
      icon: '🪙',
      description: 'Predict token market caps, price movements, and DeFi protocol performance',
      color: 'from-green-500/10 to-green-600/10',
      borderColor: 'border-green-500/20',
      textColor: 'text-green-300'
    }
  ];

  const sportsPredictions = [
    {
      id: 1,
      title: 'Premier League Winner 2024/25',
      description: 'Predict which team will win the Premier League this season',
      options: ['Manchester City', 'Arsenal', 'Liverpool', 'Chelsea'],
      endDate: '2025-05-25',
      totalPool: '$12,450',
      participants: 1247
    },
    {
      id: 2,
      title: 'NBA Finals MVP',
      description: 'Who will be the Finals MVP in the 2024-25 NBA season?',
      options: ['Luka Doncic', 'Jayson Tatum', 'Nikola Jokic', 'Giannis Antetokounmpo'],
      endDate: '2025-06-15',
      totalPool: '$8,920',
      participants: 892
    }
  ];

  const entertainmentPredictions = [
    {
      id: 3,
      title: 'Oscars Best Picture 2025',
      description: 'Predict which movie will win Best Picture at the 2025 Academy Awards',
      options: ['Dune: Part Two', 'Oppenheimer', 'Barbie', 'Killers of the Flower Moon'],
      endDate: '2025-03-10',
      totalPool: '$15,680',
      participants: 1568
    },
    {
      id: 4,
      title: 'Box Office Hit of 2025',
      description: 'Which movie will have the highest worldwide box office gross in 2025?',
      options: ['Avatar 3', 'Spider-Man 4', 'Jurassic World 4', 'Fast & Furious 11'],
      endDate: '2025-12-31',
      totalPool: '$22,340',
      participants: 2234
    }
  ];

  const tokenPredictions = [
    {
      id: 5,
      title: 'Solana Meme Token Market Cap',
      description: 'Which Solana meme token will reach $1B market cap first?',
      options: ['BONK', 'WIF', 'POPCAT', 'MEW'],
      endDate: '2025-06-30',
      totalPool: '$45,670',
      participants: 4567
    },
    {
      id: 6,
      title: 'Ethereum Layer 2 TVL',
      description: 'Which Layer 2 will have the highest TVL by end of 2025?',
      options: ['Arbitrum', 'Optimism', 'Polygon', 'Base'],
      endDate: '2025-12-31',
      totalPool: '$38,920',
      participants: 3892
    }
  ];

  const getPredictionsForCategory = (categoryId: string) => {
    switch (categoryId) {
      case 'sports':
        return sportsPredictions;
      case 'entertainment':
        return entertainmentPredictions;
      case 'tokens':
        return tokenPredictions;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white">
      {/* Particles Background */}
      <div className="fixed inset-0 z-0 overflow-hidden w-full h-full">
        {ready && (
          <Particles
            id="predictionsParticles"
            options={options}
            style={{ pointerEvents: 'none', width: '100%', height: '100%' }}
          />
        )}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="hover:opacity-80 transition-opacity duration-300">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/images/artboard-9.png"
                    alt="Acumen Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </Link>
              <span className="text-purple-400 font-medium">Predictions</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-white/80 hover:text-purple-400 transition-colors duration-300">
                Home
              </Link>
              <Link href="/docs" className="text-white/80 hover:text-purple-400 transition-colors duration-300">
                Docs
              </Link>
              <a href="https://acumhq.xyz" className="text-white/80 hover:text-purple-400 transition-colors duration-300">
                App
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Prediction Marketplace
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Make predictions across multiple categories and earn rewards for your accuracy. 
            Hold $ACUM tokens to unlock exclusive prediction opportunities.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-2xl font-bold text-purple-400 mb-2">$89,460</div>
              <div className="text-white/70">Total Prize Pool</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-2xl font-bold text-purple-400 mb-2">12,340</div>
              <div className="text-white/70">Active Predictors</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-2xl font-bold text-purple-400 mb-2">156</div>
              <div className="text-white/70">Live Predictions</div>
            </div>
          </div>
        </section>

        {/* Category Selection */}
        <section className="mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-8 text-purple-400 text-center">Choose Your Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-br ${category.color} ${category.borderColor} border-opacity-60`
                      : 'bg-black/20 border-purple-500/20 hover:border-purple-500/40'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className={`text-xl font-semibold mb-3 ${
                      activeCategory === category.id ? category.textColor : 'text-white'
                    }`}>
                      {category.name}
                    </h3>
                    <p className="text-white/70 text-sm">{category.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Active Predictions */}
        <section className="mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-purple-400">
                {categories.find(c => c.id === activeCategory)?.name} Predictions
              </h2>
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Create Prediction
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {getPredictionsForCategory(activeCategory).map((prediction) => (
                <div
                  key={prediction.id}
                  className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedPrediction(prediction)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{prediction.title}</h3>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      Live
                    </span>
                  </div>
                  
                  <p className="text-white/80 mb-4">{prediction.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {prediction.options.map((option, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                        <span className="text-white/90">{option}</span>
                        <button 
                          onClick={() => activeCategory === 'tokens' && prediction.id === 5 ? setShowTokenModal(true) : setSelectedPrediction(prediction)}
                          className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg text-sm hover:bg-purple-500/30 transition-colors duration-200"
                        >
                          {activeCategory === 'tokens' && prediction.id === 5 ? 'Advanced Predict' : 'Predict'}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-white/70">
                    <div>
                      <span className="text-purple-400 font-semibold">${prediction.totalPool}</span> Prize Pool
                    </div>
                    <div>
                      <span className="text-purple-400 font-semibold">{prediction.participants}</span> Participants
                    </div>
                    <div>
                      Ends: <span className="text-purple-400">{prediction.endDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-8 text-purple-400 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Choose Category</h3>
                <p className="text-white/70">Select from Sports, Entertainment, or Token predictions</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Make Prediction</h3>
                <p className="text-white/70">Place your prediction with $ACUM tokens</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Earn Rewards</h3>
                <p className="text-white/70">Get rewarded for accurate predictions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-4 text-purple-300">Ready to Start Predicting?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Connect your wallet and start making predictions across multiple categories. 
              Hold $ACUM tokens to unlock exclusive features and higher rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Connect Wallet
              </button>
              <button className="border border-purple-500/50 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-purple-500/20">
        <p className="text-white/60 mb-4">
          Hold $ACUM, Predict, Learn, & Earn.
        </p>
        <div className="flex justify-center space-x-6 text-sm text-white/60">
          <Link href="/" className="hover:text-purple-400 transition-colors duration-300">Home</Link>
          <Link href="/docs" className="hover:text-purple-400 transition-colors duration-300">Docs</Link>
          <a href="https://acumhq.xyz" className="hover:text-purple-400 transition-colors duration-300">App</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">Community</a>
        </div>
      </footer>

      {/* Token Prediction Modal */}
      {showTokenModal && (
        <TokenPredictionModal onClose={() => setShowTokenModal(false)} />
      )}
    </div>
  );
}
