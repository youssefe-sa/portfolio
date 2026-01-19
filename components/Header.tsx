'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const navItems = [
    { label: t.header.services, href: '#services' },
    { label: t.header.projects, href: '#projects' },
    { label: t.header.expertise, href: '#expertise' },
    { label: t.header.contact, href: '#contact' },
  ]

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-sm">SY</span>
            </div>
            <span className="font-semibold text-primary hidden sm:inline-block">Sahab Youssef</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <span>{language.toUpperCase()}</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${languageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {languageOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-border rounded-lg shadow-lg overflow-hidden animate-scale-in">
                  <button
                    onClick={() => {
                      setLanguage('fr')
                      setLanguageOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${language === 'fr' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary/50'}`}
                  >
                    🇫🇷 Français
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setLanguageOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${language === 'en' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary/50'}`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              )}
            </div>

            {/* CTA Button Desktop */}
            <button
              onClick={handleContactClick}
              className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-breathe"
            >
              {t.header.startProject}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 animate-fade-in-down">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setLanguage('fr')}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${language === 'fr' ? 'bg-primary text-white' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}
              >
                🇫🇷 FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${language === 'en' ? 'bg-primary text-white' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}
              >
                🇬🇧 EN
              </button>
            </div>
            <button onClick={handleContactClick} className="w-full px-4 py-2 bg-primary text-white rounded-lg font-medium mt-2">
              {t.header.startProject}
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
