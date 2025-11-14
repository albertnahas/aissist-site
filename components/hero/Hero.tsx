'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Container } from '../layout/Container';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const installCommand = 'npm install -g aissist';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCTAClick = () => {
    const installSection = document.querySelector('#install');
    if (installSection) {
      installSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base via-dark-base to-dark-elevated opacity-50" />

      {/* Gradient orbs for visual interest */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl opacity-20" />

      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-light-accent mb-8 tracking-tighter leading-[1.1] mt-8">
            Your local-first AI assistant for goals, todos, and memory
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-light-secondary mb-16 max-w-3xl mx-auto font-medium tracking-tight leading-[1.4]">
            Organize your past, manage your present, and plan your future — all in Markdown on your machine.
          </p>

          {/* Install command */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative bg-dark-elevated border border-dark-border rounded-xl p-5 font-mono text-base">
              <code className="text-light-primary font-medium">$ {installCommand}</code>
              <button
                onClick={handleCopy}
                className="absolute right-5 top-1/2 -translate-y-1/2 px-4 py-2 bg-dark-base hover:bg-accent-primary text-light-primary hover:text-white rounded-lg transition-all text-sm font-medium"
                aria-label="Copy install command"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-20">
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="shadow-2xl text-lg px-8 py-4"
            >
              Install Aissist
            </Button>
          </div>

          {/* Demo GIF */}
          <div className="relative max-w-4xl mx-auto">
            {/* Decorative gradient behind demo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-50" />

            {/* Window-style panel */}
            <div className="relative bg-dark-elevated border border-dark-border rounded-xl overflow-hidden shadow-2xl">
              {/* Window chrome header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-dark-base/50 border-b border-dark-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-light-secondary font-mono">aissist demo</span>
                </div>
              </div>

              {/* Demo content */}
              <div className="aspect-video bg-dark-base">
                <img
                  src="/demos/demo.gif"
                  alt="Aissist demo showing goal creation and recall functionality"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
