import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export function ValueProposition() {
  const values = [
    '100% local',
    'Human-readable files',
    'AI-powered insights from Claude Code',
  ];

  return (
    <Section className="bg-dark-elevated py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-light-accent mb-8 tracking-tight leading-[1.2]">
            Aissist is a local-first AI assistant that stores everything in Markdown.
          </h2>
          <p className="text-xl md:text-2xl text-light-primary mb-12 font-medium tracking-tight leading-relaxed">
            Your data stays fully on your machine. No cloud. No accounts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {values.map((value) => (
              <div key={value} className="flex items-center justify-center">
                <div className="text-accent-primary mr-4 text-3xl">✓</div>
                <p className="text-xl text-light-primary font-semibold tracking-tight">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
