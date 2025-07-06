# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DeHotelVergelijker.nl is a Dutch hotel comparison platform built on Next.js 15. Originally based on the Chisfis template, it's being transformed into a production-ready travel comparison site featuring hotels, car rentals, activities (experiences), vacation homes (real estate), flights, and eSIM services.

## Development Commands

```bash
# Install dependencies (automatically runs prisma generate)
npm install

# Run development server (default port 3000)
npm run dev

# Build for production (includes prisma generate)
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Database commands
npx prisma generate    # Generate Prisma client
npx prisma db push     # Push schema to database
npx prisma studio      # Open Prisma Studio GUI (port 5555)
```

## Architecture Overview

### Tech Stack
- **Frontend**: Next.js 15.3.2 (App Router), React 19, TypeScript 5.2
- **Styling**: Tailwind CSS 4.1.5 with custom configuration
- **Database**: PostgreSQL with Prisma ORM 6.11.1
- **Authentication**: NextAuth.js 4.24 with Prisma adapter
- **Deployment**: Vercel (configured in vercel.json)
- **UI Components**: Headless UI, Heroicons, custom components

### Critical Architecture Patterns

1. **Route Groups Structure**:
   - `(app)` - Main application routes with ApplicationLayout
   - `(auth)` - Authentication pages with minimal layout
   - `(account)` - User account pages with PageNavigation
   - Routes use [[...handle]] for dynamic category/listing slugs

2. **Search Parameter Flow**:
   - Search forms pass location, dates, guests via URL params
   - Category pages read searchParams to display dynamic content
   - Location keywords are highlighted with `text-primary-600` class

3. **Component Organization**:
   - Server Components by default (async functions)
   - Client Components marked with 'use client' for interactivity
   - Search forms, dropdowns, and modals are client components
   - Data fetching happens in server components

4. **Data Layer**:
   - Mock data in `/src/data/*.ts` (categories, listings, authors)
   - Services in `/src/services/` for business logic
   - API routes handle external integrations
   - Prisma models define production schema

### Key API Routes

- `GET /api/hotels` - Search hotels with filters
- `GET /api/hotels/[id]` - Get hotel details
- `GET /api/hotels/[id]/availability` - Check room availability
- `/api/auth/[...nextauth]` - NextAuth endpoints
- `GET /api/travelpayouts/test` - Test external API connection

### Notification System

Custom notification system with:
- `NotificationService` singleton for state management
- `useNotifications` hook for React components
- Types: price_alert, new_deal, booking_reminder, system
- Supports mark as read, delete, and bulk operations

### Translation System

- Language files in `/public/locales/` (nl.ts, en.ts)
- T utility in `/src/utils/getT.ts` for translations
- Primary language: Dutch (nl)
- All user-facing text should use translations

### Affiliate Integration Points

1. **eSIM Page** - Airalo affiliate links:
   - Main link: `https://airalo.tpo.lv/Eonf0kHG`
   - App link: `https://airalo.tpo.lv/SmkV9cGd`

2. **Hotel Booking** - Designed for multiple providers:
   - Booking.com, Hotels.com, Expedia, Agoda
   - Click tracking via ClickTracking model
   - Revenue tracking for commissions

### Environment Variables

Required for production:
- `DATABASE_URL` - PostgreSQL connection
- `DIRECT_URL` - Direct database connection (Prisma)
- `NEXTAUTH_SECRET` - Session encryption
- `NEXTAUTH_URL` - Authentication callback URL

Optional integrations:
- Hotel API keys (BOOKING_API_KEY, etc.)
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Maps
- Email service credentials (SMTP_*)
- Analytics and monitoring

### Vercel Deployment

The project uses explicit framework detection:
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

Build process automatically runs `prisma generate` before Next.js build.

### Current Development State

1. **Mock Data Phase**: Currently using static data from `/src/data/`
2. **Database Ready**: Prisma schema defined but not actively used
3. **Dutch Localization**: Actively being implemented throughout
4. **Multi-Service Platform**: Hotels primary, but includes cars, activities, real estate, flights, eSIM

### Important Implementation Notes

- Always check for existing components before creating new ones
- Use primary-600 color for brand highlighting
- Maintain Dutch language in UI, English in code/comments
- Category pages support location-based dynamic headings
- Search forms should pass all parameters (location, dates, guests)
- Images use Next.js Image component with proper sizing
- Dark mode support via Tailwind dark: prefix