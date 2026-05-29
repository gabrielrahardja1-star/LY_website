'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Services', href: '#services-children' },
  { label: 'Meet the Team', href: '#meet-the-team' },
  { label: 'Collaboration', href: '#what-we-do' },
  { label: 'Blog', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 px-6'
          : 'py-4 px-6'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <a href="#hero">
          <Image
            src={scrolled ? '/images/logo-blue.png' : '/images/logo-white.png'}
            alt="The Light Years CDC"
            width={160}
            height={50}
            className="h-10 w-auto object-contain"
          />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-[family-name:var(--font-montserrat)] font-semibold text-sm transition-colors hover:text-[#e86500] ${
                  scrolled ? 'text-[#3a2e69]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
