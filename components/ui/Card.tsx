import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles = 'bg-dark-elevated/80 backdrop-blur-xl border border-dark-border/50 rounded-xl shadow-premium-sm';
  const hoverStyles = hover
    ? 'transition-all duration-300 ease-smooth-out hover:border-accent-primary/50 hover:shadow-premium-md hover:shadow-glow-cyan/20 hover:-translate-y-1 hover:bg-dark-elevated group'
    : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
