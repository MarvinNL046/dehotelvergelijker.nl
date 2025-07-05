# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DeHotelVergelijker.nl is a hotel comparison website for the Dutch market built with Next.js 15, TypeScript, Prisma, and Tailwind CSS. The project uses the Chisfis template as a base but is being transformed into a production-ready hotel comparison platform.

## Development Commands

```bash
# Install dependencies (automatically runs prisma generate)
npm install

# Run development server
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
npx prisma studio      # Open Prisma Studio GUI
```

## Architecture Overview

### Tech Stack
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (or Supabase)
- **Auth**: NextAuth.js with Google/Email providers
- **Deployment**: Vercel

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (app)/             # Main application routes
│   │   ├── (home-pages)/  # Homepage variants
│   │   ├── (categories)/  # Category listing pages
│   │   ├── (listings)/    # Individual listing pages
│   │   └── (other-pages)/ # About, contact, etc.
│   ├── (auth)/            # Authentication pages
│   ├── (account)/         # User account pages
│   └── api/               # API routes
│       ├── auth/          # NextAuth endpoints
│       └── hotels/        # Hotel data endpoints
├── components/            # Reusable React components
├── services/              # Business logic layer
│   ├── hotel-service.ts   # Hotel data operations
│   └── travelpayouts.ts   # External API integration
├── lib/                   # Utilities
│   ├── prisma.ts         # Prisma client singleton
│   └── auth.ts           # NextAuth configuration
├── types/                 # TypeScript type definitions
│   └── hotel.ts          # Hotel-related types
└── data/                  # Mock data (being replaced by DB)
```

### Key API Routes

- `GET /api/hotels` - Search hotels with filters
- `GET /api/hotels/[id]` - Get hotel details
- `GET /api/hotels/[id]/availability` - Check room availability
- `/api/auth/[...nextauth]` - NextAuth endpoints
- `GET /api/travelpayouts/test` - Test external API connection

### Database Schema

The application uses Prisma with PostgreSQL. Key models:
- **Hotel**: Core hotel information, amenities, location
- **Room**: Room types and configurations
- **Availability**: Real-time pricing and availability
- **User**: User accounts with favorites and alerts
- **Review**: User reviews and ratings
- **PriceAlert**: Price drop notifications
- **ClickTracking**: Affiliate revenue tracking

### External Integrations

The project is designed to integrate with:
- **RateHawk**: Primary hotel data provider (B2B)
- **Booking.com**: Affiliate program for commissions
- **Google Maps**: Location search and display
- **Email providers**: For notifications

### Environment Variables

Critical environment variables:
- `DATABASE_URL` - PostgreSQL connection
- `NEXTAUTH_SECRET` - Auth session encryption
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Maps integration
- Hotel API keys (various providers)

### Current State

The project currently uses mock data in development. In production with `DATABASE_URL` set, it attempts to fetch from the database. The transition from template to production involves:
1. Replacing mock data with real API integrations
2. Implementing the affiliate tracking system
3. Adding Dutch localization throughout
4. Optimizing for SEO and performance

### Important Notes

- The project was migrated from a Vite React template to Next.js
- Prisma must be generated during build for Vercel deployment
- The template includes multiple property types (cars, flights, etc.) but focus is on hotels only
- Dutch market focus requires specific content and SEO optimization