import React from 'react';
import { Card } from '../ui/Card';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { FEATURES } from '@/lib/content';

// Simple icon placeholder component with gradient
function Icon({ name }: { name: string }) {
  return (
    <div className="relative w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold overflow-hidden shadow-premium-sm group-hover:shadow-premium-md transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/30 via-purple-500/20 to-blue-500/30 group-hover:from-accent-primary/40 group-hover:via-purple-500/30 group-hover:to-blue-500/40 transition-all duration-300" />
      <span className="relative z-10 text-light-accent group-hover:scale-110 transition-transform duration-300">
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}

export function FeatureGrid() {
  return (
    <Section id="features" className="relative">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-40 animate-drift-slow" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-40 animate-drift-delayed" />

      <Container className="relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-light-accent mb-6 tracking-tight leading-[1.2]">
            Everything you need for productivity
          </h2>
          <p className="text-xl md:text-2xl text-light-secondary max-w-3xl mx-auto font-medium tracking-tight leading-relaxed">
            Aissist combines goals, todos, history, and AI-powered insights in one local-first tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <Card
              key={feature.id}
              hover
              className="p-8 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon name={feature.icon} />
              <h3 className="text-2xl font-bold mt-6 mb-4 text-light-accent tracking-tight">
                {feature.title}
              </h3>
              <p className="text-lg text-light-secondary leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
