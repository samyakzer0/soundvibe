"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- TYPES ---

enum CableColor {
  RED = 'red',
  WHITE = 'white',
  YELLOW = 'yellow',
  BLUE = 'blue',
}

interface NavItemType {
  id: string;
  label: string;
  href: string;
  color: CableColor;
}

interface RCACableProps {
  color: CableColor;
  className?: string;
}

// --- CONSTANTS ---

const NAV_ITEMS: NavItemType[] = [
  { id: 'services', label: 'SERVICES', href: '#services', color: CableColor.RED },
  { id: 'about', label: 'ABOUT', href: '#about', color: CableColor.WHITE },
  { id: 'work', label: 'WORK', href: '#work', color: CableColor.YELLOW },
  { id: 'contact', label: 'CONTACT', href: '#contact', color: CableColor.BLUE },
];

// --- COMPONENTS ---

const RCACable: React.FC<RCACableProps> = ({ color, className = '' }) => {
  const colorMap = useMemo(() => {
    switch (color) {
      case CableColor.RED:
        return { main: '#D32F2F', dark: '#B71C1C', highlight: '#EF5350' };
      case CableColor.WHITE:
        return { main: '#E0E0E0', dark: '#BDBDBD', highlight: '#F5F5F5' };
      case CableColor.YELLOW:
        return { main: '#FBC02D', dark: '#F57F17', highlight: '#FFF176' };
      case CableColor.BLUE:
        return { main: '#1976D2', dark: '#0D47A1', highlight: '#42A5F5' };
      default:
        return { main: '#424242', dark: '#212121', highlight: '#616161' };
    }
  }, [color]);

  const gradId = `grad-${color}`;

  return (
    <svg
      viewBox="0 0 100 300"
      className={`w-full h-full drop-shadow-md ${className}`}
      preserveAspectRatio="xMidYMin meet"
    >
      <defs>
        <linearGradient id={`${gradId}-metal`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9E9E9E" />
          <stop offset="30%" stopColor="#EEEEEE" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#EEEEEE" />
          <stop offset="100%" stopColor="#9E9E9E" />
        </linearGradient>

        <linearGradient id={`${gradId}-gold`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C6A700" />
          <stop offset="30%" stopColor="#FFD54F" />
          <stop offset="60%" stopColor="#FFE082" />
          <stop offset="100%" stopColor="#C6A700" />
        </linearGradient>

        <linearGradient id={`${gradId}-plastic`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colorMap.dark} />
          <stop offset="30%" stopColor={colorMap.main} />
          <stop offset="50%" stopColor={colorMap.highlight} />
          <stop offset="70%" stopColor={colorMap.main} />
          <stop offset="100%" stopColor={colorMap.dark} />
        </linearGradient>

        <linearGradient id={`${gradId}-cable`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="40%" stopColor="#333333" />
          <stop offset="60%" stopColor="#4d4d4d" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>

      <path
        d="M 50 135 C 50 180, 20 220, 30 300"
        stroke={`url(#${gradId}-cable)`}
        strokeWidth="18"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="50" cy="135" r="8" fill="#000" opacity="0.4" />
      <path d="M 40 100 L 60 100 L 58 140 L 42 140 Z" fill={`url(#${gradId}-plastic)`} />
      <path d="M 41 110 H 59" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
      <path d="M 42 120 H 58" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
      <path d="M 42 130 H 58" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
      <rect x="30" y="40" width="40" height="60" rx="4" fill={`url(#${gradId}-plastic)`} />
      <rect x="30" y="55" width="40" height="2" fill="rgba(0,0,0,0.2)" />
      <rect x="30" y="70" width="40" height="2" fill="rgba(0,0,0,0.2)" />
      <rect x="30" y="85" width="40" height="2" fill="rgba(0,0,0,0.2)" />
      <path d="M 35 15 L 65 15 L 65 40 L 35 40 Z" fill={`url(#${gradId}-metal)`} />
      <rect x="48" y="15" width="4" height="25" fill="#111" opacity="0.6" />
      <path d="M 45 0 L 55 0 L 55 18 L 45 18 Z" fill={`url(#${gradId}-gold)`} />
      <circle cx="50" cy="1" r="5" fill={`url(#${gradId}-gold)`} />
    </svg>
  );
};

const NavItem: React.FC<{ item: NavItemType }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={item.href}
      className="relative group flex items-center justify-center h-10 px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: '1000px' }}
    >
      <span
        className={`
          relative z-20 text-xs md:text-sm font-bold tracking-[0.15em] transition-all duration-300
          ${isHovered ? 'text-white' : 'text-neutral-400'}
          cursor-pointer select-none uppercase whitespace-nowrap
        `}
      >
        {item.label}
      </span>

      <div
        className="absolute left-1/2 top-0 z-10 pointer-events-none will-change-transform"
        style={{
          width: '28px',
          height: '80px',
          transformOrigin: 'center center',
          transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: isHovered
            ? 'translate3d(-50%, -65px, 0) rotate(180deg) scale(1)'
            : 'translate3d(-50%, -150px, -60px) rotate(175deg) scale(0.8)',
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? 'blur(0px)' : 'blur(4px)',
        }}
      >
        <RCACable color={item.color} />
      </div>

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full bg-white/5 blur-md transition-all duration-500"
        style={{
          width: '40px',
          height: '40px',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'scale(1)' : 'scale(0.5)'
        }}
      />
    </Link>
  );
};

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        style={{
          paddingTop: isScrolled ? '1.5rem' : '0',
          transition: 'padding 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="flex items-center pointer-events-auto backdrop-blur-xl border-b border-white/5 overflow-hidden"
          style={{
            backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(0, 0, 0, 0.8)',
            border: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '0px solid transparent',
            borderBottomWidth: '1px',
            borderRadius: isScrolled ? '9999px' : '0px',
            padding: isScrolled ? '0.5rem 1.5rem' : '1rem 1.5rem',
            width: isScrolled ? 'auto' : '100%',
            maxWidth: isScrolled ? 'max-content' : '100%',
            justifyContent: isScrolled ? 'center' : 'space-between',
            gap: isScrolled ? '1rem' : '0rem',
            transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            boxShadow: isScrolled ? '0 10px 40px -10px rgba(0,0,0,0.5)' : 'none',
          }}
        >
          {/* Brand/Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group z-50 shrink-0"
          >
            <div className="w-8 h-8 relative shrink-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
              </div>
              <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <AnimatePresence mode="popLayout" initial={false}>
              {!isScrolled && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-bold tracking-tighter text-white overflow-hidden whitespace-nowrap"
                  style={{ fontSize: 'clamp(16px, 4vw, 24px)' }}
                >
                  SOUNDVIBE
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Divider in Pill Mode */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                className="h-6 w-[1px] bg-white/20 shrink-0"
              />
            )}
          </AnimatePresence>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center"
            style={{
              gap: isScrolled ? '0.25rem' : '2.5rem',
              transition: 'gap 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </div>

          {/* Get in touch button - Desktop only */}
          <div className="hidden md:block shrink-0">
            <AnimatePresence mode="popLayout">
              {!isScrolled && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href="#contact"
                    className="rounded-full px-6 py-2 bg-white text-black hover:bg-white/90 transition-all hover:scale-105 active:scale-95 font-bold uppercase text-[10px] tracking-widest whitespace-nowrap inline-block"
                  >
                    Get in touch
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-white shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white block origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white block"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white block origin-center"
              />
            </div>
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-24 px-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold uppercase tracking-tighter">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-4 border-b border-white/10 text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 py-4 text-center bg-white text-black rounded-full"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
