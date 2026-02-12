'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import Link from 'next/link'

export default function MentionsLegales() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {language === 'fr' ? 'Mentions Légales' : 'Legal Notices'}
          </h1>
          <p className="text-lg text-muted-foreground">
            {language === 'fr' 
              ? 'Informations légales et identité de l\'entreprise'
              : 'Legal information and company identity'}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
        </div>

        {/* Content */}
        <div className="space-y-8 animate-fade-in-up">
          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Éditeur du site' : 'Site Publisher'}
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-foreground">
                    {language === 'fr' ? 'Nom et prénom :' : 'First and last name:'}
                  </p>
                  <p className="text-muted-foreground">Sahab Youssef</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {language === 'fr' ? 'Statut juridique :' : 'Legal status:'}
                  </p>
                  <p className="text-muted-foreground">
                    {language === 'fr' ? 'Entrepreneur individuel' : 'Sole proprietorship'}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="font-semibold text-foreground">
                    {language === 'fr' ? 'Adresse :' : 'Address:'}
                  </p>
                  <p className="text-muted-foreground">
                    {language === 'fr' ? 'Maroc, Casablanca' : 'Morocco, Casablanca'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {language === 'fr' ? 'Téléphone :' : 'Phone:'}
                  </p>
                  <p className="text-muted-foreground">+212 751 134318</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-foreground">
                  {language === 'fr' ? 'Email :' : 'Email:'}
                </p>
                <p className="text-muted-foreground">sahabyoussef@gmail.com</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Hébergement' : 'Hosting'}
            </h2>
            <div className="space-y-3">
              <p className="font-semibold text-foreground">
                {language === 'fr' ? 'Prestataire d\'hébergement :' : 'Hosting provider:'}
              </p>
              <p className="text-muted-foreground">
                {language === 'fr' 
                  ? 'Le site portfolio est hébergé par Vercel Inc., entreprise américaine spécialisée dans l\'hébergement cloud pour applications modernes.'
                  : 'The portfolio site is hosted by Vercel Inc., an American company specializing in cloud hosting for modern applications.'}
              </p>
              <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  {language === 'fr' 
                    ? 'Vercel Inc. - 440 N Barranca Ave #4133 - Covina, CA 91723, USA'
                    : 'Vercel Inc. - 440 N Barranca Ave #4133 - Covina, CA 91723, USA'}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Propriété intellectuelle' : 'Intellectual Property'}
            </h2>
            <div className="space-y-3">
              <p className="font-semibold text-foreground">
                {language === 'fr' ? 'Contenu du site :' : 'Site content:'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fr' 
                  ? 'L\'ensemble du contenu (textes, images, vidéos, logos) présent sur ce site portfolio est la propriété exclusive de Sahab Youssef, sauf mentions contraires. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.'
                  : 'All content (texts, images, videos, logos) present on this portfolio site is the exclusive property of Sahab Youssef, unless otherwise stated. Any unauthorized reproduction, distribution or use is strictly prohibited.'}
              </p>
              <p className="font-semibold text-foreground mt-4">
                {language === 'fr' ? 'Technologies utilisées :' : 'Technologies used:'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fr' 
                  ? 'Ce site est développé avec React, Next.js, TailwindCSS et déployé sur Vercel. Le design et l\'architecture sont des créations originales.'
                  : 'This site is developed with React, Next.js, TailwindCSS and deployed on Vercel. The design and architecture are original creations.'}
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Données personnelles' : 'Personal Data'}
            </h2>
            <div className="space-y-3">
              <p className="font-semibold text-foreground">
                {language === 'fr' ? 'Collecte et traitement :' : 'Collection and processing:'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fr' 
                  ? 'Les données personnelles collectées via le formulaire de contact (nom, email, téléphone, entreprise) sont exclusivement utilisées pour répondre aux demandes professionnelles. Elles ne sont ni vendues, ni partagées avec des tiers sans consentement explicite.'
                  : 'Personal data collected via the contact form (name, email, phone, company) is exclusively used to respond to professional inquiries. They are neither sold nor shared with third parties without explicit consent.'}
              </p>
              <p className="font-semibold text-foreground mt-4">
                {language === 'fr' ? 'Conformité RGPD :' : 'GDPR Compliance:'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fr' 
                  ? 'Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d\'un droit d\'accès, de modification et de suppression de vos données. Contactez-nous pour exercer ces droits.'
                  : 'In accordance with the General Data Protection Regulation (GDPR), you have the right to access, modify and delete your data. Contact us to exercise these rights.'}
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Cookies' : 'Cookies'}
            </h2>
            <div className="space-y-3">
              <p className="font-semibold text-foreground">
                {language === 'fr' ? 'Utilisation des cookies :' : 'Cookie usage:'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fr' 
                  ? 'Ce site n\'utilise pas de cookies publicitaires ou de suivi. Seuls les cookies techniques essentiels au bon fonctionnement du site peuvent être utilisés.'
                  : 'This site does not use advertising or tracking cookies. Only technical cookies essential for the proper functioning of the site may be used.'}
              </p>
              <p className="font-semibold text-foreground mt-4">
                {language === 'fr' ? 'Gestion des cookies :' : 'Cookie management:'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fr' 
                  ? 'Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Cela n\'affectera pas l\'accès au contenu principal du site.'
                  : 'You can disable cookies in your browser settings. This will not affect access to the main content of the site.'}
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Liens externes' : 'External Links'}
            </h2>
            <div className="space-y-3">
              <p className="font-semibold text-foreground">
                {language === 'fr' ? 'Projets clients :' : 'Client projects:'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fr' 
                  ? 'La section "Projets en Action" contient des liens vers des sites web développés pour nos clients. Ces sites sont la propriété de leurs clients respectifs et ne relèvent pas de notre responsabilité.'
                  : 'The "Live Projects" section contains links to websites developed for our clients. These sites are the property of their respective clients and are not our responsibility.'}
              </p>
              <p className="font-semibold text-foreground mt-4">
                {language === 'fr' ? 'Responsabilité :' : 'Responsibility:'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fr' 
                  ? 'Nous ne sommes pas responsables du contenu, des politiques de confidentialité ou des pratiques des sites externes vers lesquels nous dirigeons des liens.'
                  : 'We are not responsible for the content, privacy policies or practices of external sites to which we provide links.'}
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Droit applicable et juridiction' : 'Applicable Law and Jurisdiction'}
            </h2>
            <div className="space-y-3">
              <p className="font-semibold text-foreground">
                {language === 'fr' ? 'Droit applicable :' : 'Applicable law:'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fr' 
                  ? 'Les présentes mentions légales sont régies par le droit marocain. En cas de litige, les tribunaux de Casablanca seront seuls compétents.'
                  : 'These legal notices are governed by Moroccan law. In case of dispute, only the courts of Casablanca will have jurisdiction.'}
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Contact légal' : 'Legal Contact'}
            </h2>
            <div className="space-y-3">
              <p className="font-semibold text-foreground">
                {language === 'fr' ? 'Pour toute question juridique :' : 'For any legal question:'}
              </p>
              <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="font-semibold text-primary">📧 sahabyoussef@gmail.com</p>
                <p className="font-semibold text-primary mt-2">📞 +212 751 134318</p>
                <p className="font-semibold text-primary mt-2">
                  {language === 'fr' ? '📍 Maroc, Casablanca' : '📍 Morocco, Casablanca'}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Mise à jour' : 'Updates'}
            </h2>
            <div className="space-y-3">
              <p className="font-semibold text-foreground">
                {language === 'fr' ? 'Dernière modification :' : 'Last modification:'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fr' 
                  ? 'Ces mentions légales ont été mises à jour en Décembre 2024. Nous nous réservons le droit de les modifier à tout moment pour refléter les changements légaux ou opérationnels.'
                  : 'These legal notices were updated in December 2024. We reserve the right to modify them at any time to reflect legal or operational changes.'}
                </p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {language === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
          </Link>
        </div>
      </div>
    </div>
  )
}
