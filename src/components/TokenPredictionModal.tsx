'use client';

import { useState } from 'react';

interface TokenPredictionProps {
  onClose: () => void;
}

export default function TokenPredictionModal({ onClose }: TokenPredictionProps) {
  const [selectedToken, setSelectedToken] = useState('');
  const [marketCapTarget, setMarketCapTarget] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [predictionAmount, setPredictionAmount] = useState('');

  const tokens = [
    { symbol: 'BONK', name: 'Bonk', currentMC: '$2.1B', color: 'text-orange-400' },
    { symbol: 'WIF', name: 'dogwifhat', currentMC: '$1.8B', color: 'text-pink-400' },
    { symbol: 'POPCAT', name: 'Popcat', currentMC: '$950M', color: 'text-yellow-400' },
    { symbol: 'MEW', name: 'Cat in a Dogs World', currentMC: '$1.2B', color: 'text-blue-400' },
    { symbol: 'PEPE', name: 'Pepe', currentMC: '$3.2B', color: 'text-green-400' },
    { symbol: 'FLOKI', name: 'Floki', currentMC: '$1.5B', color: 'text-red-400' }
  ];

  const marketCapTargets = [
    { value: '1B', label: '$1 Billion', multiplier: '2x' },
    { value: '2B', label: '$2 Billion', multiplier: '3x' },
    { value: '5B', label: '$5 Billion', multiplier: '5x' },
    { value: '10B', label: '$10 Billion', multiplier: '10x' },
    { value: '20B', label: '$20 Billion', multiplier: '20x' }
  ];

  const timeframes = [
    { value: '1M', label: '1 Month', odds: '1:8' },
    { value: '3M', label: '3 Months', odds: '1:5' },
    { value: '6M', label: '6 Months', odds: '1:3' },
    { value: '1Y', label: '1 Year', odds: '1:2' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-purple-400 mb-2">Token Market Cap Prediction</h2>
            <p className="text-white/80">Predict which Solana meme token will reach specific market cap milestones</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Token Selection */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Select Token</h3>
              <div className="grid grid-cols-2 gap-3">
                {tokens.map((token) => (
                  <button
                    key={token.symbol}
                    onClick={() => setSelectedToken(token.symbol)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      selectedToken === token.symbol
                        ? 'border-purple-500/60 bg-purple-500/10'
                        : 'border-purple-500/20 bg-black/20 hover:border-purple-500/40'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${token.color} mb-2`}>{token.symbol}</div>
                      <div className="text-white/70 text-sm mb-1">{token.name}</div>
                      <div className="text-white/60 text-xs">Current: {token.currentMC}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Market Cap Target</h3>
              <div className="space-y-3">
                {marketCapTargets.map((target) => (
                  <button
                    key={target.value}
                    onClick={() => setMarketCapTarget(target.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      marketCapTarget === target.value
                        ? 'border-green-500/60 bg-green-500/10'
                        : 'border-green-500/20 bg-black/20 hover:border-green-500/40'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-semibold">{target.label}</div>
                        <div className="text-white/70 text-sm">Potential {target.multiplier} return</div>
                      </div>
                      <div className="text-green-400 font-bold">{target.multiplier}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Prediction Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Timeframe</h3>
              <div className="space-y-3">
                {timeframes.map((timeframeOption) => (
                  <button
                    key={timeframeOption.value}
                    onClick={() => setTimeframe(timeframeOption.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      timeframe === timeframeOption.value
                        ? 'border-blue-500/60 bg-blue-500/10'
                        : 'border-blue-500/20 bg-black/20 hover:border-blue-500/40'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-semibold">{timeframeOption.label}</div>
                        <div className="text-white/70 text-sm">Odds: {timeframeOption.odds}</div>
                      </div>
                      <div className="text-blue-400 font-bold">{timeframeOption.odds}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Prediction Amount</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Amount in $ACUM</label>
                  <input
                    type="number"
                    value={predictionAmount}
                    onChange={(e) => setPredictionAmount(e.target.value)}
                    placeholder="Enter amount..."
                    className="w-full p-4 bg-black/20 border border-purple-500/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500/60 focus:outline-none transition-colors duration-200"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {['100', '500', '1000', '2500', '5000', '10000'].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setPredictionAmount(amount)}
                      className="p-3 bg-purple-500/20 border border-purple-500/20 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-colors duration-200"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Prediction Summary */}
            {selectedToken && marketCapTarget && timeframe && predictionAmount && (
              <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                <h4 className="text-lg font-semibold text-purple-300 mb-4">Prediction Summary</h4>
                <div className="space-y-3 text-white/80">
                  <div className="flex justify-between">
                    <span>Token:</span>
                    <span className="text-white font-semibold">{selectedToken}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target Market Cap:</span>
                    <span className="text-white font-semibold">${marketCapTarget}B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Timeframe:</span>
                    <span className="text-white font-semibold">{timeframes.find(t => t.value === timeframe)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prediction Amount:</span>
                    <span className="text-white font-semibold">{predictionAmount} $ACUM</span>
                  </div>
                  <div className="border-t border-purple-500/20 pt-3">
                    <div className="flex justify-between text-purple-300 font-semibold">
                      <span>Potential Return:</span>
                      <span>{marketCapTargets.find(t => t.value === marketCapTarget)?.multiplier}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-purple-500/20">
          <button
            onClick={onClose}
            className="px-6 py-3 border border-purple-500/50 text-purple-400 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300"
          >
            Cancel
          </button>
          <button
            disabled={!selectedToken || !marketCapTarget || !timeframe || !predictionAmount}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            Place Prediction
          </button>
        </div>
      </div>
    </div>
  );
}
