'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/use-active-section';

type HeaderProps = {
  sectionIds: string[];
};

const OlipopLogo = () => (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4"/>
      <path d="M30 70C35 50, 65 50, 70 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M35 40C40 30, 60 30, 65 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="42" cy="55" r="5" fill="currentColor"/>
      <circle cx="58" cy="55" r="5" fill="currentColor"/>
    </svg>
)


const navLinks = [
  { href: '#product', label: 'Product' },
  { href: '#ingredients', label: 'Ingredients' },
  { href: '#nutrition', label: 'Nutrition' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Header({ sectionIds }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds, { rootMargin: '0px 0px -80% 0px' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <OlipopLogo />
          <span className="text-xl font-bold">Olipop</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleSmoothScroll}
              className={cn(
                'text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary relative',
                activeSection === link.href.substring(1) && 'text-primary'
              )}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
