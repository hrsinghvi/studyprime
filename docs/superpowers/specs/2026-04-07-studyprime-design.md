# Study Prime — Design Spec
**Date:** 2026-04-07

---

## Overview

Study Prime is a premium, dark-mode-only tutoring website for SAT/ACT prep and K-12 subject tutoring in the Bay Area. It is a React + Vite SPA with client-side routing. Supabase handles all data persistence and authentication directly from the browser.

---

## Tech Stack

- **Framework:** React 18 + Vite
- **Routing:** React Router v6
- **Backend/DB:** Supabase (`@supabase/supabase-js`)
- **Styling:** CSS custom properties + plain CSS modules (no Tailwind) — keeps bundle lean and matches flat-color spec exactly
- **Fonts:** Instrument Sans + Instrument Serif via Google Fonts (loaded in `index.html`)
- **Animations:** CSS transitions + Intersection Observer API (no animation libraries)
- **Form email:** help.studyprime@gmail.com

### Supabase Config
- **Project URL:** `https://dwftvplavojatfokfbzn.supabase.co`
- **Anon key:** stored in `.env` as `VITE_SUPABASE_ANON_KEY` (public-safe, bundled)
- **Secret key:** stored in `.env` only, never imported in frontend code
- `.env` is gitignored

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#262731` | Page background |
| `--bg-secondary` | `#2d2d38` | Cards, sections |
| `--accent` | `#13ae53` | Brand green, CTAs |
| `--text-primary` | `#fafbfd` | Headings, body |
| `--text-secondary` | `#b0b3b9` | Secondary text |
| `--text-tertiary` | `#7a7d85` | Labels, hints |
| `--error` | `#ef4444` | Error states |
| `--warning` | `#f59e0b` | Warning states |

**No gradients. Ever.**

---

## Typography

- **Primary:** Instrument Sans (400, 500, 600, 700)
- **Accent:** Instrument Serif (400, 500) — used sparingly: logo "Prime", stat numbers, key testimonial phrases
- Scale: H1=3.5rem/700, H2=2.75rem/700, H3=2rem/600, H4=1.5rem/600, Body Large=1.125rem, Body=1rem, Small=0.875rem, Micro=0.75rem

---

## Routes & Pages

| Route | Component | Notes |
|-------|-----------|-------|
| `/` | `HomePage` | Hero, Services, Results carousel, Stats, FAQ, Contact |
| `/services` | `ServicesPage` | Expanded service detail |
| `/results` | `ResultsPage` | Full reviews + stats |
| `/faq` | `FAQPage` | Full FAQ accordion |
| `/contact` | `ContactPage` | Contact form only |
| `/careers` | `CareersPage` | Job listings + apply modal |
| `/sign-in` | `SignInPage` | Auth (sign in, sign up, forgot password) |

All routes share the sticky `<Navbar>` component. Home page contains all major sections (single-page feel).

---

## Supabase Database Schema

### `contact_submissions`
```sql
id          uuid primary key default gen_random_uuid()
name        text not null
email       text not null
phone       text
grade       text not null
topics      text[] not null
message     text
created_at  timestamptz default now()
```

### `career_applications`
```sql
id          uuid primary key default gen_random_uuid()
job_title   text not null
name        text not null
email       text not null
phone       text
message     text not null
created_at  timestamptz default now()
```

Row Level Security: enable RLS on both tables. Allow INSERT for `anon` role only (no SELECT/UPDATE/DELETE from frontend).

---

## Authentication

### Flows

**Sign In:**
- Email + password → `supabase.auth.signInWithPassword()`
- No OTP, no magic link on login
- "Sign in with Google" → `supabase.auth.signInWithOAuth({ provider: 'google' })`

**Sign Up:**
1. Name, email, password fields
2. `supabase.auth.signUp()` → Supabase sends 6-digit OTP to email
3. OTP entry screen shown inline (same page, no redirect)
4. `supabase.auth.verifyOtp({ type: 'signup' })` → account created
5. Redirect to `/`

**Forgot Password:**
1. Email input → `supabase.auth.resetPasswordForEmail()`
2. User receives OTP/reset email
3. New password entry → `supabase.auth.updateUser()`

**Supabase Dashboard Setup Required:**
- Auth → Email → set "Confirm email" to **OTP** (not magic link)
- Auth → Providers → enable **Google** (add OAuth client ID + secret from Google Cloud Console)
- Auth → URL Configuration → add site URL and redirect URLs

### Auth State
- `AuthContext` (React context) wraps the app
- Exposes `user`, `session`, `signOut()`
- Navbar shows "Sign Out" when authenticated, "Sign In" when not

---

## Component Architecture

```
src/
  components/
    Navbar/           — sticky nav, mobile hamburger, auth-aware
    Hero/             — hero section with staggered load animations
    Services/         — 6-card grid
    ResultsCarousel/  — infinite auto-scroll reviews
    Stats/            — 4 stat cards with count-up on scroll
    FAQ/              — accordion, keyboard accessible
    ContactForm/      — Supabase form submission
    Careers/          — job listing cards + apply modal
    Footer/           — minimal links
    Toast/            — global toast notification context + component
    Auth/             — SignIn, SignUp, OTPVerify, ForgotPassword sub-views
  pages/
    HomePage.jsx
    ServicesPage.jsx
    ResultsPage.jsx
    FAQPage.jsx
    ContactPage.jsx
    CareersPage.jsx
    SignInPage.jsx
  context/
    AuthContext.jsx
    ToastContext.jsx
  lib/
    supabase.js       — supabase client init
  styles/
    variables.css     — all CSS custom properties
    global.css        — resets, base styles
  App.jsx
  main.jsx
```

---

## Section Specifications

### Navbar
- Fixed, height 70px, z-index 1000, background `--bg-primary`
- Left: Logo (text-based, "Study" + "Prime" in Instrument Serif)
- Center: Home, Services, Results, FAQ, Contact, Work With Us
- Right: "Get Started" (primary button) + "Sign In" / user avatar when logged in
- Mobile: hamburger → full-screen slide-out menu from right (300ms)
- Active link: `--accent` color + underline
- Hover: color → `--accent` + underline grows 0→100% in 200ms

### Hero Section
- Full viewport height, centered flex
- H1: "Your Path to Excellence" (Instrument Serif on "Excellence")
- Subheading: `--text-secondary`, 18px
- Two CTAs: "Get Started" (primary) + "Learn More" (secondary)
- Scroll indicator: appears at 3s, pulses (opacity 0.5→1, 1.5s loop)
- Staggered load: H1 (100ms), subheading (200ms), buttons (300ms) — fade + slide up

### Services Section
- H2: "What We Offer" + 3px `--accent` underline (60px wide, centered)
- 3-col desktop / 2-col tablet / 1-col mobile grid, 24px gap
- 6 cards: SAT Prep, ACT Prep, Math, English, Science, Languages
- Card: `--bg-secondary`, 24px padding, 8px radius, 1px `--text-tertiary` border
- Hover: border → `--accent`, shadow, translateY(-4px), 250ms

### Results Carousel
- Background: `--bg-secondary`
- Infinite horizontal auto-scroll, ~60px/sec, pause on hover, touch/swipe
- 15 review cards (no images, no em dashes in text), 380px wide desktop
- Stars in `--accent`, rating below name
- Duplicate card set for seamless loop

### Stats Section
- 4 stat cards in 2×2 grid
- Numbers in Instrument Serif, `--accent`, 3.5rem
- Count-up animation (0 → target, 1.2s easeOutCubic) on Intersection Observer trigger
- Stats: +280 SAT avg, 1000+ students, 95% success rate, 4.9/5 stars

### FAQ Section
- Max-width 700px, centered
- Accordion: click to expand, chevron rotates 180°, answer slides down 200ms
- Keyboard accessible: Tab to focus, Enter/Space to toggle
- ARIA: `aria-expanded`, `aria-controls`, `role="button"`
- 10 FAQs as specified
- JSON-LD FAQ schema in `<Helmet>` or `<head>`

### Contact Form
- Max-width 500px, centered card
- Fields: name*, email*, phone, grade*, topics* (multi-select with pills), message
- Supabase INSERT on submit → success/error toast
- Loading state on submit button
- Real-time validation on blur, inline error messages

### Careers Section
- Two-column: job listings (65%) + CTA card (35%), stacked on mobile
- 4 job listing cards with hover slide (translateX(4px))
- Click card → modal overlay with full job description + apply form
- Apply form → Supabase `career_applications` INSERT

### Footer
- Border-top `--text-tertiary`, padding 32px 40px
- Left: logo + copyright
- Right: nav links
- Mobile: stacked, centered

---

## Animations Summary

| Animation | Trigger | Duration | Easing |
|-----------|---------|----------|--------|
| Hero elements cascade | Page load | 600ms each | easeOutCubic |
| Section fade+slide-up | Intersection Observer | 500ms | easeOutCubic |
| Button hover lift | Hover | 200ms | easeOutCubic |
| Button click scale | Click | 80ms down, 200ms up | easeInCubic / elastic |
| Card hover lift | Hover | 250ms | easeOutCubic |
| FAQ chevron rotate | Click | 200ms | easeOutCubic |
| FAQ answer expand | Click | 200ms | easeOutCubic |
| Carousel scroll | Continuous | n/a | linear |
| Count-up numbers | Intersection Observer | 1200ms | easeOutCubic |
| Toast slide in/out | State change | 300ms | easeOutCubic |
| Mobile menu slide | Click | 300ms | easeInOutCubic |
| Nav underline grow | Hover | 200ms | easeInOutCubic |

---

## Accessibility

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- All interactive elements keyboard-navigable
- ARIA labels on buttons, form fields, accordion items
- Color contrast: `#fafbfd` on `#262731` = 12:1 (exceeds WCAG AA)
- Focus states: visible via `box-shadow` outline in `--accent`
- All SVG icons decorative → `aria-hidden="true"`

---

## Performance

- Lazy-load all page components via `React.lazy` + `Suspense`
- Google Fonts with `display=swap`
- No heavy animation libraries (Framer Motion, GSAP, etc.)
- No analytics by default
- Target: Lighthouse 90+ across all categories

---

## Environment Variables (`.env`)

```
VITE_SUPABASE_URL=https://dwftvplavojatfokfbzn.supabase.co
VITE_SUPABASE_ANON_KEY=<anon key>
```

Secret key is never used in frontend code.

---

## Out of Scope (this build)

- User dashboard / protected routes (auth works but no gated content yet)
- Blog, pricing page, student portal
- Payment integration
- Admin panel
