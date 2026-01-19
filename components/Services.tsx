'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      icon: '🔧',
      title: t.services.service1.title,
      description: t.services.service1.desc,
      features: language === 'fr' ? ['Bricks Builder Expert', 'Optimisation Performance', 'Sécurité'] : ['Bricks Builder Expert', 'Performance Optimization', 'Security']
    },
    {
      icon: '⚛️',
      title: t.services.service2.title,
      description: t.services.service2.desc,
      features: language === 'fr' ? ['Next.js Expert', 'Fonctionnalités Temps Réel', 'Architecture Scalable'] : ['Next.js Expertise', 'Real-time Features', 'Scalable Architecture']
    },
    {
      icon: '🔍',
      title: t.services.service3.title,
      description: t.services.service3.desc,
      features: language === 'fr' ? ['SEO Technique', 'Stratégie Contenu', 'Croissance Rankings'] : ['Technical SEO', 'Content Strategy', 'Rankings Growth']
    },
    {
      icon: '⚙️',
      title: t.services.service4.title,
      description: t.services.service4.desc,
      features: language === 'fr' ? ['Workflows Zapier', 'Scripts Custom', 'Économies Temps'] : ['Zapier Workflows', 'Custom Scripts', 'Time Savings']
    },
    {
      icon: '🤖',
      title: language === 'fr' ? 'Intégration IA' : 'AI Integration',
      description: language === 'fr' ? 'Intégrez l\'IA dans vos outils. Chatbots, génération de contenu, analyse de données intelligente.' : 'Integrate AI into your tools. Chatbots, content generation, intelligent data analysis.',
      features: language === 'fr' ? ['Intégration ChatGPT', 'Automation IA', 'Workflows Intelligents'] : ['ChatGPT Integration', 'AI Automation', 'Smart Workflows']
    },
    {
      icon: '📊',
      title: t.services.service5.title,
      description: t.services.service5.desc,
      features: ['Digital Audit', 'Tech Roadmap', 'Growth Strategy']
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.services.description}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-border bg-white hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-primary transition-colors"></span>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300">
                <span className="text-sm font-semibold">En savoir plus</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
