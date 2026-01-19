'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate API call or send to email service
      console.log('[v0] Form submitted:', formData)
      // In production, integrate with EmailJS, SendGrid, or similar
      
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', company: '', phone: '', projectType: '', budget: '', message: '' })
        setLoading(false)
      }, 3000)
    } catch (error) {
      console.error('[v0] Form submission error:', error)
      setLoading(false)
    }
  }

  const projectTypes = [
    { value: 'wordpress', label: language === 'fr' ? 'Site WordPress' : 'WordPress Site' },
    { value: 'react', label: language === 'fr' ? 'App React/Next.js' : 'React/Next.js App' },
    { value: 'seo', label: language === 'fr' ? 'Optimisation SEO' : 'SEO Optimization' },
    { value: 'automation', label: language === 'fr' ? 'Automation & AI' : 'Automation & AI' },
    { value: 'consulting', label: language === 'fr' ? 'Consulting' : 'Consulting' },
    { value: 'other', label: language === 'fr' ? 'Autre' : 'Other' },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t.contact.description}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: '📧', label: language === 'fr' ? 'Email' : 'Email', value: 'sahab@example.com', link: 'mailto:sahab@example.com' },
            { icon: '💬', label: t.contact.options.whatsapp, value: '+33 6 XX XX XX XX', link: 'https://wa.me/33XXXXXXXXX' },
            { icon: '📅', label: t.contact.options.calendly, value: language === 'fr' ? 'Calendrier' : 'Calendar', link: '#' },
          ].map((option, i) => (
            <a
              key={i}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-border bg-white text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{option.icon}</div>
              <p className="text-sm text-muted-foreground mb-1">{option.label}</p>
              <p className="text-lg font-semibold text-primary group-hover:text-primary">{option.value}</p>
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border bg-white p-8 md:p-12 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            {language === 'fr' ? 'Parlez-moi de votre projet' : 'Tell Me About Your Project'}
          </h3>

          {submitted ? (
            <div className="py-12 text-center">
              <div className="text-6xl mb-4 animate-scale-in">✓</div>
              <p className="text-xl font-semibold text-primary mb-2">{t.contact.form.success}</p>
              <p className="text-muted-foreground">
                {language === 'fr' ? 'Je vous recontacterai sous 24h.' : 'I will contact you within 24 hours.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    placeholder={language === 'fr' ? 'Jean Dupont' : 'John Doe'}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.form.company}</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    placeholder={language === 'fr' ? 'Votre entreprise' : 'Your Company'}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    placeholder="+33 6 XX XX XX XX"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.form.projectType}</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  >
                    <option value="">{language === 'fr' ? '-- Sélectionner --' : '-- Select --'}</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.form.budget}</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  >
                    <option value="">{language === 'fr' ? '-- Sélectionner --' : '-- Select --'}</option>
                    <option value="<2000">{language === 'fr' ? 'Moins de 2 000 €' : 'Under $2,000'}</option>
                    <option value="2000-5000">{language === 'fr' ? '2 000 - 5 000 €' : '$2,000 - $5,000'}</option>
                    <option value="5000-10000">{language === 'fr' ? '5 000 - 10 000 €' : '$5,000 - $10,000'}</option>
                    <option value=">10000">{language === 'fr' ? 'Plus de 10 000 €' : 'Over $10,000'}</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.form.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                  placeholder={language === 'fr' ? 'Décrivez votre projet, vos défis, et ce que vous cherchez à accomplir...' : 'Describe your project, challenges, and what you want to achieve...'}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 animate-breathe disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (language === 'fr' ? 'Envoi...' : 'Sending...') : t.contact.form.submit}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                {language === 'fr' ? 'Je répondrai à votre message dans les 24 heures • Aucun spam' : 'I will respond within 24 hours • No spam'}
              </p>
            </form>
          )}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-8">{t.contact.faq.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">{t.contact.faq.q1}</h4>
              <p className="text-muted-foreground text-sm">{t.contact.faq.a1}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">{t.contact.faq.q2}</h4>
              <p className="text-muted-foreground text-sm">{t.contact.faq.a2}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">{t.contact.faq.q3}</h4>
              <p className="text-muted-foreground text-sm">{t.contact.faq.a3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
