'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Stack() {
  const { language } = useLanguage()
  const t = translations[language]

  const stackCategories = [
    {
      title: language === 'fr' ? 'Frontend' : 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      color: 'from-blue-500/20 to-blue-500/5'
    },
    {
      title: language === 'fr' ? 'CMS & Builder' : 'CMS & Builder',
      items: ['WordPress', 'Bricks Builder', 'Elementor Pro', 'ACF', language === 'fr' ? 'Plugins Custom' : 'Custom Plugins'],
      color: 'from-purple-500/20 to-purple-500/5'
    },
    {
      title: language === 'fr' ? 'Backend & Base de Données' : 'Backend & DB',
      items: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
      color: 'from-green-500/20 to-green-500/5'
    },
    {
      title: language === 'fr' ? 'Automation & IA' : 'Automation & AI',
      items: ['Zapier', 'Make', 'GitHub Actions', language === 'fr' ? 'Intégration GPT' : 'GPT Integration', language === 'fr' ? 'Scripts Custom' : 'Custom Scripts'],
      color: 'from-orange-500/20 to-orange-500/5'
    },
    {
      title: language === 'fr' ? 'SEO & Analytics' : 'SEO & Analytics',
      items: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Schema Markup', 'Core Web Vitals'],
      color: 'from-pink-500/20 to-pink-500/5'
    },
    {
      title: language === 'fr' ? 'Déploiement & DevOps' : 'Deployment & DevOps',
      items: ['Vercel', 'GitHub', 'Docker', 'CI/CD', 'Netlify'],
      color: 'from-cyan-500/20 to-cyan-500/5'
    },
  ]

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
            {t.stack.title}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {language === 'fr' ? 'Technologies & Expertise' : 'Tech Stack & Expertise'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.stack.description}
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stackCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border border-border bg-gradient-to-br ${category.color} hover:border-primary/50 transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-foreground mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: '100+', label: 'Projets Réussis' },
            { number: '7+', label: 'Ans d\'Expérience' },
            { number: '95%', label: 'Taux de Satisfaction' },
            { number: '50M+', label: 'Visiteurs Générés' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center group hover:border-primary/50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
