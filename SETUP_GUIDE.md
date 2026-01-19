# Portfolio Landing Page - Setup Guide

## 🎯 Bienvenue !

Vous avez un **portfolio landing page professionnel et multilingue** complètement fonctionnel !

## ✅ Ce qui est inclus

### 🌍 Multilingual (Français & English)
- Système i18n complet avec traductions
- Changement de langue en temps réel (Header + Mobile menu)
- Stockage de la préférence en localStorage

### 🔗 Boutons & Fonctionnalités Complètes

#### Hero Section
- ✅ **"Démarrer un projet"** → Scroll vers Contact
- ✅ **"Voir mes projets"** → Scroll vers Projects

#### Header
- ✅ **Navigation** → Liens ancre vers sections
- ✅ **"Commencer"** → Scroll vers Contact
- ✅ **Language Switcher** → FR/EN

#### Projects Section
- ✅ **Cartes projets** → Clique pour voir détails complets
- ✅ **Modal détaillée** → Budget, timeline, résultats complets
- ✅ **"Voir tous les projets"** → Placeholder pour page dédiée

#### Contact Section
- ✅ **Formulaire complet** → Collect: name, email, company, phone, project type, budget, message
- ✅ **Email/WhatsApp links** → Contacts directs
- ✅ **FAQ** → Questions/Réponses courantes

### 🎨 Design Premium
- Palette: Navy (#0047ab) + Cyan (#00b4d8) + Accent green
- Animations: Fade, Slide, Scale, Breathe, Glow
- Responsive: Mobile-first design
- Glassmorphism header
- Gradient overlays & effects

### 📱 Responsive
- ✅ Mobile perfect (hamburger menu)
- ✅ Tablet optimized
- ✅ Desktop premium

---

## 🚀 Pour personnaliser votre portfolio

### 1. **Ajouter votre photo**
```
Remplacez le placeholder SVG dans Identity.tsx par:
<Image
  src="/your-photo.jpg"
  alt="Sahab Youssef"
  fill
  className="object-cover rounded-2xl"
/>
```

### 2. **Mettre à jour vos contacts**
`/lib/translations.ts` → Section contact.options

### 3. **Ajouter vos vrais projets**
Dans `/lib/translations.ts`, mettez à jour:
- Project titles
- Descriptions détaillées
- Results (chiffres réels)
- Budget & timeline réels

### 4. **Intégrer le formulaire contact**
Le formulaire est prêt. Pour l'envoyer par email:

**Option A: EmailJS (Recommandé)**
```bash
npm install @emailjs/browser
```

Puis dans Contact.tsx, avant le handleSubmit:
```javascript
import emailjs from '@emailjs/browser';

// Dans handleSubmit:
await emailjs.send(
  'service_xxxxx',
  'template_xxxxx',
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    // ...
  },
  'user_xxxxx'
);
```

**Option B: Vercel Functions**
```javascript
// /pages/api/contact.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Votre logique d'envoi email
    return res.status(200).json({ success: true })
  }
}
```

### 5. **Ajouter Google Analytics**
```javascript
// Dans layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

---

## 📊 Structure des fichiers

```
/app
  ├── page.tsx (avec LanguageProvider)
  ├── layout.tsx (Métadonnées, fonts)
  └── globals.css (Animations, theme)

/components
  ├── Header.tsx (Navigation + Language switcher)
  ├── Hero.tsx (Section Hero avec CTAs)
  ├── Identity.tsx (Qui êtes-vous?)
  ├── Services.tsx (Services détaillés)
  ├── Stack.tsx (Technos & Stats)
  ├── CaseStudies.tsx (Projets + Modal)
  ├── ProjectModal.tsx (Détails projets)
  ├── Methodology.tsx (6 étapes)
  ├── Differentiation.tsx (Pourquoi vous?)
  ├── Contact.tsx (Formulaire + FAQ)
  └── Footer.tsx (Liens + Réseaux)

/context
  └── LanguageContext.tsx (Gestion langue)

/lib
  └── translations.ts (Toutes les traductions FR/EN)

/public
  ├── mockup-wordpress.jpg
  ├── mockup-react.jpg
  ├── mockup-seo.jpg
  └── mockup-ai.jpg
```

---

## 🎯 Checkpoints Avant Déploiement

- [ ] Ajouter photo de profil
- [ ] Mettre à jour textes personnels
- [ ] Ajouter vrais projets avec images
- [ ] Intégrer formulaire contact (EmailJS ou API)
- [ ] Tester responsive (mobile/tablet/desktop)
- [ ] Tester langue FR/EN
- [ ] Vérifier tous les liens
- [ ] Tester formulaire contact
- [ ] Ajouter favicon
- [ ] Vérifier SEO (metadata dans layout.tsx)

---

## 🚀 Déploiement

### Sur Vercel (Recommandé)
```bash
# 1. Connecter GitHub repo
# 2. Importer sur Vercel
# 3. Deploy!
```

### Custom Domain
Ajouter dans Vercel → Domains → Custom domain

### Optimisation Performance
```bash
# Vérifier Lighthouse
npm run build
```

---

## 💡 Tips Pro

1. **Meta tags** → Actualisez `layout.tsx` avec vos infos
2. **OG Image** → Ajouter `/public/og-image.jpg` (1200x630)
3. **XML Sitemap** → Créer `/public/sitemap.xml`
4. **robots.txt** → `/public/robots.txt`
5. **Schema.org** → Ajouter JSON-LD pour SEO

---

## 📞 Support

Tout fonctionne selon les spécifications :
- ✅ Buttons & Navigation
- ✅ Multi-langue
- ✅ Animations
- ✅ Responsive
- ✅ Modal projets
- ✅ Formulaire contact

**Besoin de modifier?** Cherchez la traduction dans `/lib/translations.ts`

Bon courage! 🚀
