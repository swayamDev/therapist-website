# Therapist Website Template

**Live Demo → [blakepsychology.vercel.app](https://blakepsychology.vercel.app)**

> A clean, production-ready website template for therapists, psychologists, and mental health practitioners — built with Next.js 16, Tailwind CSS v4, and Framer Motion. Includes a working contact form with Google reCAPTCHA and Nodemailer.

---

## Table of Contents

- [Overview](#overview)
- [Sections](#sections)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Customisation Guide](#customisation-guide)
- [Contact Form](#contact-form)
- [Deployment](#deployment)

---

## Overview

This is a single-page website template designed specifically for mental health professionals. The demo is populated with fictional practitioner data (Dr. Serena Blake, PsyD) — everything is meant to be swapped out for your own content. All copy, images, services, FAQs, testimonials, pricing, and branding live in one place for easy editing.

---

## Sections

The page renders the following sections in order:

| Section | Description |
|---|---|
| **Banner** | Thin top bar for announcements or availability notices |
| **Navbar** | Sticky navigation with smooth-scroll anchor links |
| **Hero** | Full-screen image with headline, subheading, and CTA button |
| **Stats** | Animated counters (years of experience, sessions completed) triggered on scroll |
| **About** | Practitioner bio with photo |
| **Services** | Three service cards with images, descriptions, and availability tags |
| **Schedule Consultation** | Mid-page CTA section with booking prompt |
| **Pricing** | Two-card layout for Individual ($200) and Couples ($240) session fees |
| **Testimonials** | Infinite auto-scrolling testimonial carousel |
| **FAQ** | Accordion-style frequently asked questions |
| **Contact** | Full contact form with validation, reCAPTCHA, and email delivery |
| **Footer** | Links, social icons, and copyright |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4, shadcn/ui (accordion) |
| Animation | Framer Motion v12 |
| Email | Nodemailer v7 (Gmail SMTP) |
| Spam Protection | Google reCAPTCHA v2 |
| Icons | Lucide React, React Icons |
| Typography | Platypi (headings), Parkinsans (body) — Google Fonts |
| Notifications | react-hot-toast |
| Linting | ESLint 9 + `eslint-config-next` |
| Formatting | Prettier with `prettier-plugin-tailwindcss` |

---

## Getting Started

### Prerequisites

- Node.js 20+
- A Gmail account for sending emails (or another SMTP provider — see [Contact Form](#contact-form))
- A [Google reCAPTCHA v2](https://www.google.com/recaptcha/admin) site key and secret key

### Installation

```bash
git clone https://github.com/your-username/therapist-website.git
cd therapist-website
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Turbopack is enabled by default for faster local builds.

### Build for Production

```bash
npm run build
npm start
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Gmail SMTP credentials
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASSWORD=your-gmail-app-password

# The inbox that receives contact form submissions
CLINIC_EMAIL=your-clinic-email@example.com

# Google reCAPTCHA — https://www.google.com/recaptcha/admin
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
```

> **Gmail App Password:** If you use Gmail with 2FA (recommended), generate an App Password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) instead of using your account password directly.

---

## Customisation Guide

All content is designed to be swapped in one place per topic — no hunting through component files.

### Personal Info & Branding

**`src/app/layout.tsx`** — Update the site metadata:
- `title` — Practitioner name and credentials
- `description` — Short bio / SEO description
- `metadataBase` — Your production URL
- `keywords` — Relevant search terms
- `openGraph` and `twitter` — Social sharing preview content

**`public/`** — Replace the following assets with your own:
- `logo.png` — Your logo
- `home.webp` — Hero section background photo
- `about.webp` — About section photo
- `service1.webp`, `service2.webp`, `service3.webp` — Service card images
- `og-image.png` — Social sharing preview image (1200×630px recommended)
- `lotus.mp4` — Background video (used in the Schedule Consultation section)

### Content

**`src/constants/`** — All editable copy lives here:

```
src/constants/
├── nav-links.ts      ← Navigation anchor labels and hrefs
├── services.ts       ← Service title, description, image, availability tag
├── faq.ts            ← FAQ question and answer pairs
└── testimonial.ts    ← Client testimonials (quote, name, title)
```

**`src/components/HeroSection.tsx`** — Edit the headline, subheading, and CTA button label.

**`src/components/AboutSection.tsx`** — Edit the bio text and credentials.

**`src/components/StatsSection.tsx`** — Update the `target` values on the animated counters (years of experience, sessions count).

**`src/components/PricingSection.tsx`** — Update session types, prices, durations, and included features.

**`src/components/ScheduleConsultation.tsx`** — Update the mid-page CTA copy and button link.

**`src/components/Footer.tsx`** — Update social media links and copyright name.

### Colour Scheme

The template uses a teal/forest green palette (`#004346`, `#234245`, `#09bc8a`). To change it, do a project-wide find-and-replace on those hex values in the `src/components/` directory, or define CSS custom properties in `src/app/globals.css`.

---

## Contact Form

The contact form at `src/components/ContactSection.tsx` collects:

- Name, email, phone number
- Preferred contact method (email or phone)
- Preferred callback time
- Message
- Agreement to privacy terms
- Google reCAPTCHA v2 token (validated server-side)

On submission, `POST /api/send-email` (`src/app/api/send-email/route.ts`):

1. Verifies the reCAPTCHA token with Google's API
2. Sends a notification email to `CLINIC_EMAIL` with the full submission
3. Sends a confirmation email to the client's address

Both emails are sent via Gmail SMTP using Nodemailer. To use a different SMTP provider, replace the `createTransport` configuration in `route.ts` with your provider's settings.

---

## Deployment

The demo is live at **[blakepsychology.vercel.app](https://blakepsychology.vercel.app)**.

This is a standard Next.js app and deploys to Vercel in one step:

1. Push the repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add all four environment variables from the [Environment Variables](#environment-variables) section.
4. Deploy.

For other platforms (Netlify, Railway, Fly.io, etc.), any Node.js 20+ host works. The contact form API route requires a server runtime — this is not a purely static site.

---

## License

MIT — free to use, modify, and deploy for personal or client projects. Attribution appreciated but not required.
