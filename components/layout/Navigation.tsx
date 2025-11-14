'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  { label: 'Features', href: '#features' },
  { label: 'Docs', href: 'https://github.com/albertnahas/aissist#readme', external: true },
  { label: 'GitHub', href: 'https://github.com/albertnahas/aissist', external: true },
  { label: 'Install', href: '#install' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external: boolean) => {
    if (!external && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-base/80 backdrop-blur-xl border-b border-dark-border/50 shadow-premium-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 group">
              <img src="/logo.jpg" alt="Aissist Logo" className="h-8 w-8 rounded group-hover:scale-105 transition-transform duration-300" />
              <span className="text-xl font-bold text-light-accent">Aissist</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-light-primary hover:text-accent-primary transition-colors duration-200 group py-1"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary group-hover:w-full transition-all duration-300 ease-smooth-out" />
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href, false)}
                  className="relative text-light-primary hover:text-accent-primary transition-colors duration-200 cursor-pointer group py-1"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary group-hover:w-full transition-all duration-300 ease-smooth-out" />
                </a>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-light-primary hover:text-accent-primary hover:bg-dark-elevated/80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-primary shadow-premium-sm hover:shadow-premium-md"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6 transition-transform duration-200 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-fade-in-up">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-elevated/80 backdrop-blur-xl border-b border-dark-border/50">
            {menuItems.map((item, index) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-base font-medium text-light-primary hover:text-accent-primary hover:bg-dark-base/50 transition-all duration-200 min-h-[44px] flex items-center shadow-premium-sm hover:shadow-premium-md hover:-translate-x-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href, false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-light-primary hover:text-accent-primary hover:bg-dark-base/50 transition-all duration-200 min-h-[44px] flex items-center cursor-pointer shadow-premium-sm hover:shadow-premium-md hover:-translate-x-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
