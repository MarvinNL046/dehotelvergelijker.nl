# dehotelvergelijker.nl - Production Setup Guide

Een moderne hotel vergelijkingswebsite gebouwd met Next.js 15, TypeScript, en Tailwind CSS.

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone [repository-url]
cd dehotelvergelijker.nl
npm install
```

### 2. Database Setup

```bash
# Optie 1: Lokale PostgreSQL
createdb dehotelvergelijker

# Optie 2: Supabase (gratis tier)
# Maak een project op https://supabase.com
# Kopieer de connection string naar .env.local

# Genereer Prisma client en push schema
npx prisma generate
npx prisma db push
```

### 3. Environment Variables

Kopieer `.env.example` naar `.env.local` en vul in:

```bash
# Essentieel voor productie:
DATABASE_URL=             # PostgreSQL connection string
NEXTAUTH_SECRET=          # Genereer met: openssl rand -base64 32
BOOKING_API_KEY=          # Van Booking.com affiliate program
GOOGLE_MAPS_API_KEY=      # Voor locatie search
```

### 4. Development

```bash
npm run dev
# Open http://localhost:3000
```

## 📁 Project Structuur

```
src/
├── app/                  # Next.js App Router pages
├── components/           # React componenten
├── lib/                  # Utilities (prisma, auth)
├── services/            # Business logic
├── types/               # TypeScript types
└── data/                # Mock data (wordt vervangen door DB)
```

## 🔧 Key Features Implementatie Status

### ✅ Voltooid
- Database schema (hotels, rooms, users, reviews)
- TypeScript types voor alle data modellen
- API routes voor hotel search & details
- NextAuth setup voor authentication
- Hotel service layer voor data operations
- Production-ready folder structuur

### 📋 TODO voor Live
1. **Hotel Data Import**
   - Booking.com API integratie
   - Data sync cron jobs
   - Image CDN setup

2. **Frontend Aanpassingen**
   - Homepage: Focus op hotels ipv alle categorieën
   - Nederlandse vertalingen
   - Hotel-specifieke filters

3. **Performance**
   - Redis caching voor prijzen
   - Image optimization
   - Static generation voor hotel pages

4. **Business Features**
   - Affiliate link tracking
   - Analytics dashboard
   - A/B testing setup

## 🚀 Deployment naar Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

## 🔐 Security Checklist

- [ ] NEXTAUTH_SECRET is sterk en uniek
- [ ] Database heeft SSL enabled
- [ ] API routes hebben rate limiting
- [ ] Input validatie op alle forms
- [ ] CORS headers correct geconfigureerd

## 📊 Monitoring

- [ ] Sentry voor error tracking
- [ ] Google Analytics voor traffic
- [ ] Vercel Analytics voor performance
- [ ] Uptime monitoring (UptimeRobot)

## 🤝 API Integraties Nodig

1. **Booking.com Partner Program**
   - Aanmelden: https://www.booking.com/affiliate-program
   - API documentatie krijgen
   - Affiliate ID voor tracking

2. **Google Cloud Console**
   - Maps JavaScript API
   - Places API
   - Geocoding API

3. **Email Service** (kies één)
   - SendGrid
   - Postmark
   - Amazon SES

## 💡 Development Tips

1. **Database Seeding**
   ```bash
   npx prisma db seed
   ```

2. **Type Safety**
   - Gebruik `npm run type-check` voor TypeScript validatie
   - Prisma genereert automatisch types

3. **Testing Locally**
   ```bash
   npm run build
   npm run start
   ```

## 🆘 Support

- Template issues: booliitheme@gmail.com
- Next.js docs: https://nextjs.org/docs
- Prisma docs: https://www.prisma.io/docs

---

Made with ❤️ for dehotelvergelijker.nl