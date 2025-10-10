'use client';

import { useEffect, useState } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import Link from 'next/link';
import Image from 'next/image';
import { loadSlim } from '@tsparticles/slim';

export default function DocsPage() {
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
      number: { value: 40 },
      color: { value: '#6f46be' }, // Secondary color particles
      opacity: { value: 0.15 },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 0.5, direction: 'none', outModes: 'bounce' },
      links: { enable: true, distance: 120, color: '#6f46be', opacity: 0.1, width: 1 },
      shape: { type: 'circle' },
    },
    interactivity: { events: { resize: { enable: true } } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white">
      {/* Particles Background */}
      <div className="fixed inset-0 z-0 overflow-hidden w-full h-full">
        {ready && (
          <Particles
            id="docsParticles"
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
              <span className="text-purple-400 font-medium">Docs</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-white/80 hover:text-purple-400 transition-colors duration-300">
                Home
              </Link>
              <a href="https://acumhq.xyz" className="text-white/80 hover:text-purple-400 transition-colors duration-300">
                App
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Acumen Documentation
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            The ultimate Solana prediction marketplace and Web3 education platform. 
            Hold $ACUM tokens to unlock exclusive alpha and prediction opportunities.
          </p>
        </section>

        {/* Table of Contents */}
        <section className="mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#overview" className="block p-4 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105">
                <h3 className="font-semibold text-white mb-2">Platform Overview</h3>
                <p className="text-white/70 text-sm">Learn about Acumen&apos;s core features and mission</p>
              </a>
              <a href="#tokenomics" className="block p-4 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105">
                <h3 className="font-semibold text-white mb-2">$ACUM Tokenomics</h3>
                <p className="text-white/70 text-sm">Detailed token economics and distribution</p>
              </a>
              <a href="#prediction-marketplace" className="block p-4 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105">
                <h3 className="font-semibold text-white mb-2">Prediction Marketplace</h3>
                <p className="text-white/70 text-sm">How to predict and earn rewards</p>
              </a>
              <a href="#education-alpha" className="block p-4 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105">
                <h3 className="font-semibold text-white mb-2">Education & Alpha</h3>
                <p className="text-white/70 text-sm">Web3 education and exclusive insights</p>
              </a>
              <a href="#roadmap" className="block p-4 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105">
                <h3 className="font-semibold text-white mb-2">Roadmap</h3>
                <p className="text-white/70 text-sm">Future development plans</p>
              </a>
              <a href="#getting-started" className="block p-4 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105">
                <h3 className="font-semibold text-white mb-2">Getting Started</h3>
                <p className="text-white/70 text-sm">How to begin your Acumen journey</p>
              </a>
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section id="overview" className="mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Platform Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/90 mb-6">
                Acumen is a revolutionary project on the Solana blockchain with a native token, $ACUM, 
                that serves two primary purposes: prediction marketplace and education/alpha platform.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Prediction Marketplace</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Predict Solana meme token performance</li>
                    <li>• Track market cap milestones</li>
                    <li>• Earn rewards for accurate predictions</li>
                    <li>• Early holder benefits and airdrops</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Education & Alpha</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Free Web3 onboarding courses</li>
                    <li>• Early alpha insights and trends</li>
                    <li>• Project opportunities and roles</li>
                    <li>• Discord moderator positions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section id="tokenomics" className="mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">$ACUM Tokenomics</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-black/20 rounded-lg overflow-hidden">
                <thead className="bg-purple-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-purple-300 font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left text-purple-300 font-semibold">Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-500/20">
                  <tr className="hover:bg-purple-500/5 transition-colors duration-200">
                    <td className="px-6 py-4 text-white font-medium">Token Platform</td>
                    <td className="px-6 py-4 text-white/80">Pumpfun (Initial Listing)</td>
                  </tr>
                  <tr className="hover:bg-purple-500/5 transition-colors duration-200">
                    <td className="px-6 py-4 text-white font-medium">Utility</td>
                    <td className="px-6 py-4 text-white/80">Stray Utility Project (Specific details TBD by platform)</td>
                  </tr>
                  <tr className="hover:bg-purple-500/5 transition-colors duration-200">
                    <td className="px-6 py-4 text-white font-medium">Development Funds</td>
                    <td className="px-6 py-4 text-white/80">Buy Dev Wallet (Used for ongoing development and operations)</td>
                  </tr>
                  <tr className="hover:bg-purple-500/5 transition-colors duration-200">
                    <td className="px-6 py-4 text-white font-medium">Dev Supply Lock</td>
                    <td className="px-6 py-4 text-white/80">Locked for several months (Enhances trust and prevents immediate sell-off)</td>
                  </tr>
                  <tr className="hover:bg-purple-500/5 transition-colors duration-200">
                    <td className="px-6 py-4 text-white font-medium">Revenue Stream</td>
                    <td className="px-6 py-4 text-white/80">Creator Fees from the prediction/education platform</td>
                  </tr>
                  <tr className="hover:bg-purple-500/5 transition-colors duration-200">
                    <td className="px-6 py-4 text-white font-medium">Buyback Mechanism</td>
                    <td className="px-6 py-4 text-white/80">Creator Fees are used to perform $ACUM token Buybacks</td>
                  </tr>
                  <tr className="hover:bg-purple-500/5 transition-colors duration-200">
                    <td className="px-6 py-4 text-white font-medium">Buyback Storage</td>
                    <td className="px-6 py-4 text-white/80">Buybacks are stored in a dedicated Treasury</td>
                  </tr>
                  <tr className="hover:bg-purple-500/5 transition-colors duration-200">
                    <td className="px-6 py-4 text-white font-medium">User Incentive</td>
                    <td className="px-6 py-4 text-white/80">A percentage (%) of the Treasury-held Buybacks will be Airdropped to users (Rewarding engagement and loyalty)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Early Holder Rewards</h4>
                  <p className="text-white/80 text-sm">2x airdrop of initial holdings into prediction accounts for top 300 holders</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Community Airdrops</h4>
                  <p className="text-white/80 text-sm">Free $ACUM tokens distributed to active users and supporters</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Sustainable Growth</h4>
                  <p className="text-white/80 text-sm">Creator fees fund buybacks and treasury for long-term value</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Governance Rights</h4>
                  <p className="text-white/80 text-sm">Hold $ACUM tokens to participate in platform decisions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prediction Marketplace */}
        <section id="prediction-marketplace" className="mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Prediction Marketplace</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">How It Works</h3>
              <p className="text-white/90 mb-6">
                Our prediction marketplace allows users to predict the performance of new Solana meme tokens 
                and earn rewards based on accuracy. The platform tracks various metrics and provides 
                comprehensive analytics for informed decision-making.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Market Analysis</h4>
                <p className="text-white/80 text-sm">Analyze token performance metrics and market trends</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Make Predictions</h4>
                <p className="text-white/80 text-sm">Predict market cap milestones and timeframes</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Earn Rewards</h4>
                <p className="text-white/80 text-sm">Get rewarded for accurate predictions and participation</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Early Holder Benefits</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span><strong className="text-white">2x Airdrop:</strong> Early holders receive 2x their initial holdings in prediction accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span><strong className="text-white">Leaderboard Access:</strong> Top 300 holders get exclusive leaderboard privileges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span><strong className="text-white">Free Tokens:</strong> All users receive free $ACUM tokens to get started</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Alpha */}
        <section id="education-alpha" className="mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Education & Alpha Sessions</h2>
            
            <div className="mb-8">
              <p className="text-white/90 mb-6">
                By holding a specific amount of $ACUM tokens, you gain access to exclusive educational resources 
                and alpha insights. This feature is live from day one and designed to help newcomers transition 
                from Web2 to Web3 seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Educational Resources</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span>Free Web3 onboarding courses for beginners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span>Blockchain fundamentals and Solana ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span>DeFi protocols and yield farming strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span>NFT marketplace and trading techniques</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Alpha Insights</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span>Early alpha insights and crypto trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span>Information on potential projects and partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span>Ambassadorships and collaboration opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span>Discord moderator roles and community positions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Roadmap</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phase 1: Foundation</h3>
                  <p className="text-white/80 mb-2">Establish core platform infrastructure and token launch</p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Token launch on Pumpfun</li>
                    <li>• Basic prediction marketplace</li>
                    <li>• Educational content platform</li>
                    <li>• Community building and early adoption</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500/60 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phase 2: Growth</h3>
                  <p className="text-white/80 mb-2">Expand features and enhance user experience</p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Advanced prediction analytics</li>
                    <li>• Enhanced educational modules</li>
                    <li>• Community governance features</li>
                    <li>• Mobile application development</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500/40 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phase 3: Innovation</h3>
                  <p className="text-white/80 mb-2">Introduce cutting-edge features and partnerships</p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• AI-powered prediction models</li>
                    <li>• Cross-chain integration</li>
                    <li>• Institutional partnerships</li>
                    <li>• Advanced DeFi integrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started" className="mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Getting Started</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Step 1: Acquire $ACUM Tokens</h3>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">1.</span>
                      <span>Visit Pumpfun to purchase $ACUM tokens</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">2.</span>
                      <span>Connect your Solana wallet (Phantom, Solflare, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">3.</span>
                      <span>Complete your token purchase</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Step 2: Access Platform</h3>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">1.</span>
                      <span>Visit <a href="https://acumhq.xyz" className="text-purple-400 hover:text-purple-300 underline">acumhq.xyz</a></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">2.</span>
                      <span>Connect your wallet to verify token holdings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">3.</span>
                      <span>Start predicting and learning!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Ready to Begin?</h3>
                <p className="text-white/80 mb-6">
                  Join thousands of users already earning rewards and learning about Web3
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://acumhq.xyz" 
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Launch App
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center px-8 py-3 border border-purple-500/50 text-purple-400 font-semibold rounded-full hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
                  >
                    Join Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-purple-500/20">
          <p className="text-white/60 mb-4">
            Hold $ACUM, Predict, Learn, & Earn.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-white/60">
            <Link href="/" className="hover:text-purple-400 transition-colors duration-300">Home</Link>
            <a href="https://acumhq.xyz" className="hover:text-purple-400 transition-colors duration-300">App</a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Community</a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Support</a>
          </div>
        </footer>
      </main>
    </div>
  );
}