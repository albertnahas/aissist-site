import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ease-smooth-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-base active:scale-[0.98]';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-accent-primary to-accent-primary hover:from-accent-hover hover:to-accent-primary text-white shadow-premium-md hover:shadow-glow-cyan hover:shadow-premium-lg hover:brightness-110 transform hover:-translate-y-0.5',
    secondary: 'bg-dark-elevated hover:bg-dark-border text-light-primary border border-dark-border shadow-premium-sm hover:shadow-premium-md hover:border-light-secondary/30 transform hover:-translate-y-0.5',
    ghost: 'text-light-primary hover:bg-dark-elevated/80 hover:shadow-premium-sm transform hover:-translate-y-0.5',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
