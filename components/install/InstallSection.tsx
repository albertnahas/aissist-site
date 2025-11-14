'use client';

import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

export function InstallSection() {
  const commands = [
    'npm install -g aissist',
    'aissist init',
    'aissist goal add "Start using Aissist"',
  ];

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (command: string, index: number) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Section id="install">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light-accent mb-6">
            Get started in seconds
          </h2>
          <p className="text-xl text-light-secondary mb-12">
            Install Aissist globally with npm and start tracking your productivity immediately.
          </p>

          {/* Terminal-style code block */}
          <div className="bg-dark-elevated border border-dark-border rounded-lg p-6 text-left mb-8">
            <div className="space-y-4 font-mono text-sm">
              {commands.map((command, index) => (
                <div key={index} className="relative group">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-success">$</span>
                    <code className="text-light-primary flex-1">{command}</code>
                    <button
                      onClick={() => handleCopy(command, index)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 bg-dark-base hover:bg-accent-primary text-light-primary hover:text-white rounded text-xs"
                      aria-label={`Copy ${command}`}
                    >
                      {copiedIndex === index ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation link */}
          <div>
            <a
              href="https://github.com/albertnahas/aissist#readme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                View Full Documentation →
              </Button>
            </a>
          </div>

          {/* Prerequisites note */}
          <p className="text-sm text-light-secondary mt-8">
            Requires Node.js 18+ and npm. For AI features, install{' '}
            <a
              href="https://claude.ai/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-primary hover:underline"
            >
              Claude Code CLI
            </a>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}
