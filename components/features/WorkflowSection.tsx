import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { WORKFLOW_STEPS } from '@/lib/content';

export function WorkflowSection() {
  return (
    <Section className="bg-dark-elevated">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-light-accent mb-6 tracking-tight leading-[1.2]">
            Your workflow, streamlined
          </h2>
          <p className="text-xl md:text-2xl text-light-secondary max-w-3xl mx-auto font-medium tracking-tight leading-relaxed">
            From capture to reflection, Aissist guides you through a complete productivity system.
          </p>
        </div>

        <div className="space-y-32">
          {WORKFLOW_STEPS.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-light-accent tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xl text-light-secondary mb-8 font-medium tracking-tight leading-relaxed">
                  {step.description}
                </p>
                <div className="bg-dark-base border border-dark-border rounded-xl p-5 font-mono text-base">
                  <code className="text-accent-primary font-medium">$ {step.command}</code>
                </div>
              </div>

              {/* Demo GIF */}
              <div className="flex-1 w-full">
                <div className="relative">
                  {/* Subtle glow behind demo */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-accent-primary/10 via-purple-500/10 to-blue-500/10 rounded-xl blur-xl opacity-60" />

                  {/* Window-style panel */}
                  <div className="relative bg-dark-elevated border border-dark-border rounded-xl overflow-hidden shadow-xl">
                    {/* Window chrome header */}
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-dark-base/50 border-b border-dark-border">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-xs text-light-secondary font-mono">{step.id}</span>
                      </div>
                    </div>

                    {/* Demo content */}
                    <div className="aspect-video bg-dark-base">
                      <img
                        src={`/demos/${
                          step.id === 'capture' ? 'demo-1-progress.gif' :
                          step.id === 'understand' ? 'demo-2-memory.gif' :
                          step.id === 'plan' ? 'demo.gif' :
                          'demo-3-todos.gif'
                        }`}
                        alt={`Demo of ${step.title} step in Aissist workflow`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
