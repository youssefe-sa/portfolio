'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Identity() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Profile Image Placeholder */}
          <div className="relative order-2 md:order-1 animate-slide-in-left">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 border border-border p-2 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
              <img 
                src="/profile-photo.jpg" 
                alt="Profile Photo" 
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Right: Identity Content */}
          <div className="order-1 md:order-2 animate-slide-in-right">
            <div className="mb-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                {language === 'fr' ? 'Bonjour, je suis' : 'Hi, I\'m'} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t.identity.name}</span>
              </h2>
              <p className="text-lg font-semibold text-primary mb-4">{t.identity.tagline}</p>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {language === 'fr'
                  ? `Je suis un développeur spécialisé en WordPress, React et SEO. Depuis plus de 7 ans, j'aide des entreprises et des consultants à transformer leurs ambitions digitales en réalité.`
                  : `I'm a developer specialized in WordPress, React and SEO. For over 7 years, I've been helping businesses and consultants turn their digital ambitions into reality.`}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {language === 'fr'
                  ? `Mon expertise couvre la construction de sites web performants, l'optimisation SEO avancée, l'automatisation intelligente des processus et l'intégration d'IA pour booster vos conversions.`
                  : `My expertise covers building high-performance websites, advanced SEO optimization, smart process automation and AI integration to boost your conversions.`}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {language === 'fr'
                  ? `Je combine technique rigoureuse et stratégie commerciale pour créer des solutions qui ne sont pas seulement belles, mais surtout rentables.`
                  : `I combine rigorous technique and commercial strategy to create solutions that aren't just beautiful, but above all profitable.`}
              </p>

              {/* Key Values */}
              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all mt-1">
                    ✓
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    <strong>Premium</strong>: Solutions haut de gamme, jamais de compromis
                  </span>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all mt-1">
                    ✓
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    <strong>Consultant</strong>: Je pense comme un business person, pas seulement comme un dev
                  </span>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all mt-1">
                    ✓
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    <strong>Autonome</strong>: Capable de gérer un projet de A à Z
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
