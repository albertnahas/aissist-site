import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'GitHub', href: 'https://github.com/albertnahas/aissist' },
    { label: 'Docs', href: 'https://github.com/albertnahas/aissist#readme' },
    { label: 'MIT License', href: 'https://github.com/albertnahas/aissist/blob/main/LICENSE' },
    { label: 'Contact', href: 'https://github.com/albertnahas' },
  ];

  return (
    <footer className="bg-dark-elevated border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <div className="text-light-secondary text-sm">
            © {currentYear} Albert Nahas
          </div>

          {/* Links */}
          <div className="mt-4 md:mt-0">
            <nav className="flex flex-wrap gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-primary hover:text-accent-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
