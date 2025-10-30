# KRS SERVICE AUTO - Website

Site web profesional, modern și responsive pentru service auto KRS SERVICE AUTO din București.

## 🚀 Caracteristici

- **Next.js 14** cu App Router
- **TypeScript** pentru siguranță tipurilor
- **Tailwind CSS** pentru styling modern
- **Framer Motion** pentru animații subtile
- **Responsive Design** - mobile-first
- **SEO Optimizat** - meta tags, Open Graph, JSON-LD
- **Performance Optimizat** - lazy loading, code splitting
- **Accessibility** - ARIA labels, keyboard navigation

## 📋 Pagini Incluse

- **Acasă** - Landing page cu hero, servicii, testimoniale
- **Servicii** - Lista detaliată cu filtrare și căutare
- **Despre noi** - Povestea, echipa, valorile, galerie
- **Contact** - Formular de programare cu validare
- **FAQ** - Întrebări frecvente cu acordeon
- **Politica GDPR** - Informații despre prelucrarea datelor
- **Termeni și Condiții** - Condiții generale de serviciu
- **404** - Pagină personalizată pentru erori

## 🛠️ Tehnologii

- **Next.js 14.0.4** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Instalare și Rulare

### 1. Instalare dependențe

```bash
npm install
```

### 2. Rulare în development

```bash
npm run dev
```

Site-ul va fi disponibil la `http://localhost:3000`

### 3. Build pentru producție

```bash
npm run build
npm run start
```

### 4. Linting

```bash
npm run lint
```

## 🎨 Design System

### Culori
- **Navy**: #071A2B (background/accente)
- **Blue Primary**: #1461D9 (butoane primary, CTA)
- **Blue Accent**: #4AB3FF (hover, micro accents)
- **Gray Text**: #6B7280 (text secundar)
- **Gray Light**: #F7FAFC (fundal ușor)

### Fonturi
- **Inter** - Font principal pentru body
- **Poppins** - Font pentru titluri

### Componente
- **Button** - Butoane cu variante (primary, secondary, outline)
- **ServiceCard** - Carduri pentru servicii
- **Modal** - Modal pentru galerie
- **TestimonialCarousel** - Carousel pentru testimoniale
- **Header** - Header sticky cu navigație
- **Footer** - Footer cu informații de contact

## 📱 Responsive Design

Site-ul este optimizat pentru toate dispozitivele:
- **Mobile First** - Design optimizat pentru telefoane
- **Tablet** - Layout adaptat pentru tablete
- **Desktop** - Experiență completă pe desktop

## 🔍 SEO și Performance

### SEO Features
- Meta tags complete pentru fiecare pagină
- Open Graph și Twitter Cards
- JSON-LD LocalBusiness schema
- Sitemap.xml automat generat
- Robots.txt configurat
- Structured data pentru servicii

### Performance
- Next/Image pentru optimizarea imaginilor
- Lazy loading pentru componente
- Code splitting automat
- Font optimization
- Bundle optimization

## 📞 Date de Contact

- **Adresă**: Strada Toporași 69, București 052034
- **Telefon**: 0769393545
- **Email**: contact@krs-service-auto.ro
- **Program**: Luni-Vineri 09:00-18:00, Sâmbătă 09:00-14:00

## 🗺️ Google Maps

Site-ul include un iframe Google Maps cu locația exactă:
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.932316483413!2d26.08001009678955!3d44.3935111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff2d60e49a8f%3A0xb31f2921d344c4b3!2sKRS%20SERVICE%20AUTO!5e0!3m2!1sen!2sro!4v1760513136545!5m2!1sen!2sro" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

## 🖼️ Imagini Necesare

Pentru ca site-ul să funcționeze complet, sunt necesare următoarele imagini:

### Echipă (400x400px)
- `/team/cristian.jpg`
- `/team/alexandru.jpg`
- `/team/mihai.jpg`

### Galerie (800x600px)
- `/gallery/workshop-1.jpg`
- `/gallery/workshop-2.jpg`
- `/gallery/workshop-3.jpg`
- `/gallery/team-work.jpg`
- `/gallery/before-after-1.jpg`
- `/gallery/before-after-2.jpg`

### Despre noi (1200x800px)
- `/about/workshop-main.jpg`

### Favicon
- `/favicon.ico`
- `/favicon-16x16.png`
- `/favicon-32x32.png`
- `/apple-touch-icon.png`

## 🚀 Deployment

### Vercel (Recomandat)
1. Conectează repository-ul la Vercel
2. Configurează variabilele de mediu dacă este necesar
3. Deploy automat la fiecare push

### Netlify
1. Conectează repository-ul la Netlify
2. Configurează build command: `npm run build`
3. Setează publish directory: `.next`

### Server propriu
1. Rulează `npm run build`
2. Copiază folderul `.next` pe server
3. Configurează server-ul pentru Next.js

## 📈 Optimizări SEO Suplimentare

### Google Search Console
1. Adaugă site-ul în Google Search Console
2. Submit sitemap-ul: `https://domeniul-tau.ro/sitemap.xml`
3. Monitorizează performanța

### Google Analytics
1. Adaugă Google Analytics 4
2. Configurează evenimente personalizate
3. Monitorizează conversiile

### Local SEO
1. Creează Google My Business
2. Adaugă recenzii clienți
3. Optimizează pentru căutări locale

## 🔧 Configurări Avansate

### Environment Variables
Creează `.env.local` pentru variabile de mediu:
```env
NEXT_PUBLIC_SITE_URL=https://krs-service-auto.ro
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Custom Domain
1. Configurează DNS-ul pentru domeniul personalizat
2. Actualizează `next.config.js` dacă este necesar
3. Testează toate linkurile

## 📞 Suport

Pentru întrebări sau probleme:
- **Email**: contact@krs-service-auto.ro
- **Telefon**: 0769393545

## 📄 Licență

Acest proiect este proprietatea KRS SERVICE AUTO. Toate drepturile rezervate.

---

**KRS SERVICE AUTO** - Reparații rapide. Calitate garantată. 🚗✨
