'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-white via-secondary/10 to-primary/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <Link href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SY</span>
              </div>
              <span className="font-semibold text-primary">Sahab Youssef</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-muted-foreground">© {currentYear} {t.footer.copyright}</p>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold text-foreground mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              {['WordPress Dev', 'React & Next.js', 'SEO Optimization', 'Automation & AI', 'Consulting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold text-foreground mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              {['Blog', 'Case Studies', 'Tech Stack', 'Méthodologie', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p>
                <a href="mailto:hello@sahabyoussef.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  hello@sahabyoussef.com
                </a>
              </p>
              <p>
                <a href="tel:+33612345678" className="text-muted-foreground hover:text-primary transition-colors">
                  +33 6 12 34 56 78
                </a>
              </p>
              <div className="flex gap-4 pt-2">
                {[
                  { label: 'LinkedIn', icon: '💼' },
                  { label: 'GitHub', icon: '💻' },
                  { label: 'Twitter', icon: '🐦' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground">
            Conçu & développé avec ❤️ par Sahab Youssef | Powered by React + Next.js + Vercel
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Conditions
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Mentions Légales
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 pt-8 border-t border-border flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-2 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-sm font-medium"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
