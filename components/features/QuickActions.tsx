import React from 'react';
import { Card } from '../ui/Card';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { QUICK_ACTIONS } from '@/lib/content';

// Simple icon placeholder component
function Icon({ name }: { name: string }) {
  return (
    <div className="w-12 h-12 bg-accent-primary/20 rounded-lg flex items-center justify-center text-accent-primary text-2xl font-bold">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

export function QuickActions() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_ACTIONS.map((action) => (
            <Card key={action.id} hover className="p-6">
              <Icon name={action.icon} />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-light-accent">
                {action.title}
              </h3>
              <p className="text-light-secondary text-sm">
                {action.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
