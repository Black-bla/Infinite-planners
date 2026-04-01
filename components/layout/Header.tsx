'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, User, Mail } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

const leftNavItems = [
  { href: '/', label: 'Home', id: 'home-left' },
  { href: '/services', label: 'Services', id: 'services' },
  { href: '/portfolio', label: 'Portfolio', id: 'portfolio' },
  { href: '/about', label: 'About', id: 'about' },
];


export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 hidden md:block bg-transparent">
      <div className="mx-auto px-4 py-4">
        <div className="relative flex items-center justify-between rounded-3xl border border-white/20 px-8 py-3 backdrop-blur shadow-lg" style={{background: 'linear-gradient(to right, #8B5E3C, #A68966)'}}>
          
          {/* Left Navigation Items */}
          <nav className="flex items-center gap-6 text-sm">
            {leftNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`transition-all duration-200 font-medium ${
                    isActive
                      ? 'text-white bg-white/20 px-3 py-1.5 rounded-full'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Center - Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-lg font-bold tracking-tight text-white text-2xl"
          >
            <span style={{ fontFamily: '"Brush Script MT", "Segoe Script", "Lucida Handwriting", cursive' }}>
              In<span style={{ color: '#8B5E3C' }}>f</span>inite
            </span>
          </Link>

          {/* Right Navigation Items & Actions */}
          <div className="flex items-center gap-6">
            {/* Icons and CTA */}
            <div className="flex items-center gap-3 border-l border-white/20 pl-6">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-lg" style={{color: '#8B5E3C'}}
              >
                <Mail size={16} />
                Book Now
              </Link>

              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
