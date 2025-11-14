import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export function PrivacySection() {
  const claims = [
    'Your data never leaves your computer',
    'No tracking. No telemetry',
    'Built for productivity, not addiction',
  ];

  return (
    <Section className="bg-dark-elevated">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent-success/20 text-accent-success rounded-full text-sm font-medium mb-6">
              Privacy First
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-light-accent mb-6">
              Your data, your rules
            </h2>
          </div>

          <div className="space-y-6">
            {claims.map((claim) => (
              <div
                key={claim}
                className="flex items-start gap-4 p-6 bg-dark-base border border-dark-border rounded-lg"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-success flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <p className="text-xl text-light-primary font-medium">
                  {claim}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-light-secondary mt-12">
            All data is stored locally in human-readable Markdown files. Git-friendly, offline-first, and completely under your control.
          </p>
        </div>
      </Container>
    </Section>
  );
}
