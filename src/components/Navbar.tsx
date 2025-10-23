'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/85 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/images/acumen-logo.png"
                alt="Acumen Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-deep"></span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#prediction" className="text-deep hover:text-accent transition-colors duration-200 font-medium">
              Prediction
            </Link>
            <Link href="#education" className="text-deep hover:text-accent transition-colors duration-200 font-medium">
              Tokenomics
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-deep hover:text-accent transition-colors duration-200 font-medium">
                Resources
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                <div className="min-w-[320px]">
                  {/* Card 1: Docs */}
                  <a href="/docs" className="group/card flex items-center p-4 bg-deep rounded-lg hover:bg-accent/10 transition-all duration-300 mb-2 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" style={{ transitionDelay: '0ms' }}>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="font-semibold text-white">Docs</span>
                      </div>
                      <p className="text-gray-300 text-sm">Visit our docs to get more info about our prediction marketplace</p>
                    </div>
                    <svg className="w-4 h-4 text-accent ml-2 transform group-hover/card:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  {/* Card 2: Blog */}
                  <a href="#blog" className="group/card flex items-center p-4 bg-deep rounded-lg hover:bg-accent/10 transition-all duration-300 mb-2 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" style={{ transitionDelay: '50ms' }}>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <span className="font-semibold text-white">Blog</span>
                      </div>
                      <p className="text-gray-300 text-sm">Read about product announcements, educational posts etc</p>
                    </div>
                    <svg className="w-4 h-4 text-accent ml-2 transform group-hover/card:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  {/* Card 3: GitHub */}
                  <a href="#github" className="group/card flex items-center p-4 bg-deep rounded-lg hover:bg-accent/10 transition-all duration-300 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" style={{ transitionDelay: '100ms' }}>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="font-semibold text-white">GitHub</span>
                      </div>
                      <p className="text-gray-300 text-sm">Contribute to our platform by actively contributing code, comments, feature upgrades etc</p>
                    </div>
                    <svg className="w-4 h-4 text-accent ml-2 transform group-hover/card:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Community Dropdown */}
            <div className="relative group">
              <button className="text-deep hover:text-accent transition-colors duration-200 font-medium">
                Community
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                <div className="min-w-[320px]">
                  {/* Card 1: X (Twitter) */}
                  <a href="#twitter" className="group/card flex items-center p-4 bg-deep rounded-lg hover:bg-accent/10 transition-all duration-300 mb-2 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" style={{ transitionDelay: '0ms' }}>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <span className="font-semibold text-white">X</span>
                      </div>
                      <p className="text-gray-300 text-sm">Follow us for the latest updates, announcements, and community discussions</p>
                    </div>
                    <svg className="w-4 h-4 text-accent ml-2 transform group-hover/card:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  {/* Card 2: Telegram */}
                  <a href="#telegram" className="group/card flex items-center p-4 bg-deep rounded-lg hover:bg-accent/10 transition-all duration-300 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" style={{ transitionDelay: '50ms' }}>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                        <span className="font-semibold text-white">Telegram</span>
                      </div>
                      <p className="text-gray-300 text-sm">Join our community chat for real-time discussions, support, and alpha insights</p>
                    </div>
                    <svg className="w-4 h-4 text-accent ml-2 transform group-hover/card:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Launch App Button - Desktop Only */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => window.open('https://predictions.acumhq.xyz', '_blank')}
              className="bg-accent hover:brightness-110 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Launch App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-deep/80 hover:text-accent transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-4 py-4 bg-white border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {/* Mobile Navigation Links */}
              <Link 
                href="#prediction" 
                className="text-deep hover:text-accent transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prediction
              </Link>
              <Link 
                href="#education" 
                className="text-deep hover:text-accent transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tokenomics
              </Link>
              
              {/* Mobile Resources Dropdown */}
              <div className="py-2">
                <button 
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center justify-between w-full text-deep font-medium mb-2 py-2"
                >
                  <span>Resources</span>
                  <svg 
                    className={`w-4 h-4 transform transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`ml-4 space-y-2 transition-all duration-300 ${isResourcesOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <a href="/docs" className="block text-deep/80 hover:text-accent transition-colors duration-200 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Docs
                  </a>
                  <a href="#blog" className="block text-deep/80 hover:text-accent transition-colors duration-200 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Blog
                  </a>
                  <a href="#github" className="block text-deep/80 hover:text-accent transition-colors duration-200 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    GitHub
                  </a>
                </div>
              </div>

              {/* Mobile Community Dropdown */}
              <div className="py-2">
                <button 
                  onClick={() => setIsCommunityOpen(!isCommunityOpen)}
                  className="flex items-center justify-between w-full text-deep font-medium mb-2 py-2"
                >
                  <span>Community</span>
                  <svg 
                    className={`w-4 h-4 transform transition-transform duration-200 ${isCommunityOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`ml-4 space-y-2 transition-all duration-300 ${isCommunityOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <a href="#twitter" className="block text-deep/80 hover:text-accent transition-colors duration-200 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    X (Twitter)
                  </a>
                  <a href="#telegram" className="block text-deep/80 hover:text-accent transition-colors duration-200 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Telegram
                  </a>
                </div>
              </div>

              {/* Mobile Launch App Button */}
              <button 
                className="bg-accent hover:brightness-110 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-4 w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://predictions.acumhq.xyz', '_blank');
                }}
              >
                Launch App
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
