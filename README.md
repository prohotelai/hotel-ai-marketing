# Hotel AI SaaS - Marketing Layer

> **Isolated Marketing Layer – No Core Access**
> This project is COMPLETELY SEPARATE from Core SaaS. No shared database, no shared auth, no internal dashboards.

## 🚀 Overview

This is the standalone marketing website for Hotel AI SaaS. It is designed to be fully decoupled from the Core SaaS platform and can be deployed independently on Vercel.

### Key Features

- **Multi-language support** (9 languages with RTL support)
- **Public marketing pages** (Landing, Features, Pricing, Contact, Affiliate)
- **Hotel public pages** with QR code generation
- **Lead registration** (stores in isolated database)
- **Analytics tracking** (privacy-compliant, no PII)

## 📁 Project Structure

```
saas-hotel-marketing/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Landing page
│   │   ├── features/           # Features page
│   │   ├── pricing/            # Pricing page
│   │   ├── contact/            # Contact form
│   │   ├── affiliate/          # Affiliate info
│   │   ├── register/           # Hotel registration
│   │   ├── hotel/[id]/         # Hotel public pages
│   │   └── api/                # API routes
│   │       ├── register/       # Registration endpoint
│   │       ├── contact/        # Contact form endpoint
│   │       └── track/          # Analytics tracking
│   ├── components/             # Reusable React components
│   ├── lib/                    # Utility functions
│   └── config/                 # Configuration files
├── public/
│   └── locales/               # Translation files (9 languages)
├── prisma/
│   └── schema.prisma          # Isolated tracking database
└── vercel.json                # Vercel deployment config
```

## 🌐 Supported Languages

| Code | Language | Direction |
|------|----------|-----------|
| en | English (default) | LTR |
| ar | العربية (Arabic) | RTL |
| fr | Français | LTR |
| de | Deutsch | LTR |
| es | Español | LTR |
| it | Italiano | LTR |
| ru | Русский | LTR |
| tr | Türkçe | LTR |
| zh | 中文 | LTR |

Language detection priority:
1. URL parameter (`?lang=fr`)
2. Cookie (`NEXT_LOCALE`)
3. Browser language
4. Fallback to English

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Neon.tech) via Prisma
- **Internationalization**: i18next + react-i18next
- **Form Validation**: Zod + react-hook-form
- **Email**: Resend
- **QR Codes**: qrcode

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (Neon.tech recommended)

### Installation

```bash
# Navigate to project directory
cd saas-hotel-marketing

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Update .env with your values
# - DATABASE_URL_TRACKING
# - RESEND_API_KEY

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

### Development

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🗄️ Database Models

### PendingHotel
Stores hotel registration leads (NO activation, NO Core interaction):
- `id` - UUID
- `hotelName` - Hotel name
- `location` - Hotel location
- `email` - Contact email
- `phone` - Contact phone
- `status` - Always "Pending"
- `createdAt` - Timestamp

### TrackingEvent
Privacy-compliant analytics:
- `id` - UUID
- `type` - pageView | qrScan | registration
- `publicHotelId` - Optional hotel ID
- `timestamp` - Event time
- `hashedIp` - SHA-256 hashed IP (no PII)

## 🔗 Key Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/features` | Features list |
| `/pricing` | Pricing tables |
| `/contact` | Contact form |
| `/affiliate` | Affiliate info |
| `/register` | Hotel registration |
| `/hotel/[id]` | Hotel public page |
| `/hotel/[id]/guest` | Guest access (placeholder) |
| `/hotel/[id]/staff` | Staff login (placeholder) |

### API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/register` | POST | Submit hotel registration |
| `/api/contact` | POST | Send contact form email |
| `/api/track` | POST | Track analytics event |

## 📦 Deployment (Vercel)

### Environment Variables

Set these in Vercel dashboard:
- `DATABASE_URL_TRACKING` - PostgreSQL connection string
- `RESEND_API_KEY` - Resend API key for emails

### Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

## ⚠️ Isolation Boundaries

This marketing layer is **completely isolated** from Core SaaS:

- ❌ NO authentication system
- ❌ NO admin panels
- ❌ NO access to Core database
- ❌ NO tenant secrets
- ❌ NO internal business logic
- ✅ Can call LIMITED public APIs (read-only)
- ✅ Stores only leads and analytics
- ✅ Deploys independently

## 📝 License

Proprietary - Hotel AI SaaS

# Deployed 2026-01-04T20:42:16Z

# Auto-deploy test Sun Jan  4 21:30:00 UTC 2026
