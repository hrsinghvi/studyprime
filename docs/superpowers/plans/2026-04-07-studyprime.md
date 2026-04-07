# Study Prime Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Study Prime — a production-ready dark-mode tutoring SPA with React + Vite, Supabase backend (forms + auth), full auth flows (email/password + Google OAuth + OTP verification), and all sections per the design spec.

**Architecture:** React 18 SPA with React Router v6 for client-side routing. Global state via two React contexts (Auth, Toast). All data persistence and auth go through Supabase using the public anon key. Styling via CSS custom properties + plain CSS files co-located with components — no Tailwind, no CSS modules.

**Tech Stack:** React 18, Vite 5, React Router v6, @supabase/supabase-js, Vitest, @testing-library/react, @testing-library/user-event, @testing-library/jest-dom

---

## File Map

```
studyprime/
├── public/favicon.svg
├── index.html
├── vite.config.js
├── package.json
├── .env
├── .env.example
├── .gitignore
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles/
│   │   ├── variables.css
│   │   └── global.css
│   ├── lib/
│   │   └── supabase.js
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ToastContext.jsx
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.css
│   │   ├── ResultsCarousel/
│   │   │   ├── ResultsCarousel.jsx
│   │   │   └── ResultsCarousel.css
│   │   ├── Stats/
│   │   │   ├── Stats.jsx
│   │   │   ├── useCountUp.js
│   │   │   └── Stats.css
│   │   ├── FAQ/
│   │   │   ├── FAQ.jsx
│   │   │   └── FAQ.css
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactForm.css
│   │   ├── Careers/
│   │   │   ├── Careers.jsx
│   │   │   ├── JobCard.jsx
│   │   │   ├── ApplyModal.jsx
│   │   │   └── Careers.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── Toast/
│   │       ├── Toast.jsx
│   │       └── Toast.css
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ResultsPage.jsx
│   │   ├── FAQPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── CareersPage.jsx
│   │   └── SignInPage.jsx
│   └── test/
│       └── setup.js
```

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `.env`, `.env.example`, `.gitignore`, `src/main.jsx`, `src/test/setup.js`

- [ ] **Step 1: Initialize Vite React project and install dependencies**

```bash
cd /Users/hritviksinghvi/Downloads/studyprime
npm create vite@latest . -- --template react
npm install react-router-dom @supabase/supabase-js
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

Expected: `node_modules/` created, no errors.

- [ ] **Step 2: Write `vite.config.js`**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
})
```

- [ ] **Step 3: Add test script to `package.json`**

Open `package.json` and add `"test": "vitest"` to the `scripts` section. The scripts block should look like:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest"
}
```

- [ ] **Step 4: Create `src/test/setup.js`**

```js
import '@testing-library/jest-dom'
```

- [ ] **Step 5: Write `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Study Prime | Expert SAT, ACT & K-12 Tutoring</title>
    <meta name="description" content="Expert SAT, ACT, and K-12 subject tutoring in the Bay Area. Proven results. Study Prime." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 6: Create `.env`**

```
VITE_SUPABASE_URL=https://dwftvplavojatfokfbzn.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3ZnR2cGxhdm9qYXRmb2tmYnpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1ODUzNDksImV4cCI6MjA5MTE2MTM0OX0.yKiM9Flui2rIZ6FJLEGqfyWXTMqoUKn17nrBypafT4c
```

- [ ] **Step 7: Create `.env.example`**

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

- [ ] **Step 8: Write `.gitignore`**

```
# Dependencies
node_modules/

# Build output
dist/

# Environment variables — NEVER commit .env
.env
.env.local
.env.*.local

# Vite cache
.vite/

# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp
```

- [ ] **Step 9: Delete Vite boilerplate**

```bash
rm -rf src/assets src/App.css src/index.css
```

- [ ] **Step 10: Create minimal `src/main.jsx` (will be updated in Task 6)**

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/variables.css'
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 11: Run dev server to verify scaffold works**

```bash
npm run dev
```

Expected: Vite dev server starts on `http://localhost:5173` with no errors.

- [ ] **Step 12: Commit**

```bash
git init
git add -A
git commit -m "chore: scaffold Vite React project with dependencies"
```

---

## Task 2: CSS Design System

**Files:**
- Create: `src/styles/variables.css`, `src/styles/global.css`

- [ ] **Step 1: Write `src/styles/variables.css`**

```css
:root {
  /* Colors */
  --bg-primary: #262731;
  --bg-secondary: #2d2d38;
  --bg-hover: #333340;
  --accent: #13ae53;
  --accent-dark: #0a9944;
  --accent-glow: rgba(19, 174, 83, 0.25);
  --accent-subtle: rgba(19, 174, 83, 0.1);
  --accent-subtle-2: rgba(19, 174, 83, 0.2);
  --text-primary: #fafbfd;
  --text-secondary: #b0b3b9;
  --text-tertiary: #7a7d85;
  --error: #ef4444;
  --warning: #f59e0b;
  --border-default: #7a7d85;
  --border-accent: #13ae53;

  /* Typography */
  --font-primary: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-accent: 'Instrument Serif', Georgia, serif;

  /* Spacing */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 64px;
  --space-7: 80px;

  /* Layout */
  --container-max: 1280px;
  --nav-height: 70px;
  --radius-sm: 6px;
  --radius-md: 8px;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-default: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

- [ ] **Step 2: Write `src/styles/global.css`**

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-primary);
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: var(--font-primary);
}

input, select, textarea {
  font-family: var(--font-primary);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-primary);
  line-height: 1.2;
  color: var(--text-primary);
}

h1 { font-size: 3.5rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.2; }
h2 { font-size: 2.75rem; font-weight: 700; letter-spacing: -0.01em; line-height: 1.3; }
h3 { font-size: 2rem; font-weight: 600; line-height: 1.4; }
h4 { font-size: 1.5rem; font-weight: 600; line-height: 1.4; }

/* Containers */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 640px) {
  .container {
    padding: 0 20px;
  }
  h1 { font-size: 2.25rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.5rem; }
}

/* Scroll reveal animation utility */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
              transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Section header utility */
.section-header {
  text-align: center;
  margin-bottom: var(--space-6);
}

.section-header h2 {
  margin-bottom: 16px;
}

.section-underline {
  width: 60px;
  height: 3px;
  background: var(--accent);
  margin: 0 auto;
  border-radius: 2px;
}

/* Primary button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--accent);
  color: var(--bg-primary);
  padding: 12px 32px;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-primary);
  border: none;
  cursor: pointer;
  transition: background var(--transition-default),
              box-shadow var(--transition-default),
              transform var(--transition-default);
}

.btn-primary:hover {
  background: var(--accent-dark);
  box-shadow: 0 8px 24px var(--accent-glow);
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: scale(0.96);
  transition: transform 80ms ease-in;
}

.btn-primary:disabled {
  background: var(--text-tertiary);
  cursor: not-allowed;
  opacity: 0.6;
  transform: none;
  box-shadow: none;
}

/* Secondary button */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: var(--accent);
  padding: 12px 32px;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-primary);
  border: 1.5px solid var(--accent);
  cursor: pointer;
  transition: background var(--transition-default),
              transform var(--transition-default);
}

.btn-secondary:hover {
  background: var(--accent-subtle);
}

.btn-secondary:active {
  background: var(--accent-subtle-2);
  transform: scale(0.96);
}

/* Form inputs */
.form-input {
  width: 100%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  color: var(--text-primary);
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 400;
  transition: border-color var(--transition-fast),
              box-shadow var(--transition-fast);
}

.form-input::placeholder {
  color: var(--text-secondary);
  opacity: 0.7;
}

.form-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-subtle-2);
}

.form-input.error {
  border-color: var(--error);
}

.form-error {
  color: var(--error);
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 4px;
  display: block;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 6px;
}

/* Instrument Serif accent */
.serif {
  font-family: var(--font-accent);
  font-style: italic;
}

/* Focus visible for keyboard nav */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

- [ ] **Step 3: Verify fonts load and variables work**

Start `npm run dev`, open browser, verify body has `font-family: Instrument Sans` in DevTools.

- [ ] **Step 4: Commit**

```bash
git add src/styles/
git commit -m "feat: add CSS design system with variables and global styles"
```

---

## Task 3: Supabase Client + Database Schema

**Files:**
- Create: `src/lib/supabase.js`

- [ ] **Step 1: Write `src/lib/supabase.js`**

```js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

- [ ] **Step 2: Run the following SQL in the Supabase dashboard (SQL Editor)**

Go to `https://supabase.com/dashboard/project/dwftvplavojatfokfbzn/sql/new` and run:

```sql
-- Contact submissions table
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  grade text not null,
  topics text[] not null,
  message text,
  created_at timestamptz default now()
);

-- Career applications table
create table if not exists career_applications (
  id uuid primary key default gen_random_uuid(),
  job_title text not null,
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz default now()
);

-- Enable RLS on both tables
alter table contact_submissions enable row level security;
alter table career_applications enable row level security;

-- Allow anyone (anon) to INSERT (submit a form)
create policy "Allow anon insert on contact_submissions"
  on contact_submissions for insert
  to anon
  with check (true);

create policy "Allow anon insert on career_applications"
  on career_applications for insert
  to anon
  with check (true);
```

- [ ] **Step 3: Configure Supabase Auth settings**

In Supabase dashboard → Authentication → Email:
1. Set "Confirm email" to enabled
2. Set email confirm type to **OTP** (not magic link) — this sends a 6-digit code

In Supabase dashboard → Authentication → Providers:
1. Enable Google provider
2. Add Google OAuth Client ID and Secret (from Google Cloud Console)
3. Add Authorized redirect URI: `http://localhost:5173` (dev) and your production URL

- [ ] **Step 4: Write a test for Supabase client initialization**

Create `src/lib/supabase.test.js`:

```js
import { describe, it, expect } from 'vitest'
import { supabase } from './supabase'

describe('supabase client', () => {
  it('initializes without throwing', () => {
    expect(supabase).toBeDefined()
  })

  it('has auth property', () => {
    expect(supabase.auth).toBeDefined()
  })

  it('has from method for database access', () => {
    expect(typeof supabase.from).toBe('function')
  })
})
```

- [ ] **Step 5: Run the test**

```bash
npm test -- src/lib/supabase.test.js
```

Expected: 3 tests pass.

- [ ] **Step 6: Commit**

```bash
git add src/lib/
git commit -m "feat: add Supabase client and database schema"
```

---

## Task 4: Toast Context + Component

**Files:**
- Create: `src/context/ToastContext.jsx`, `src/components/Toast/Toast.jsx`, `src/components/Toast/Toast.css`

- [ ] **Step 1: Write `src/context/ToastContext.jsx`**

```jsx
import { createContext, useContext, useReducer, useCallback } from 'react'

const ToastContext = createContext(null)

function toastReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: action.id, message: action.message, variant: action.variant }]
    case 'REMOVE':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

export function ToastProvider({ children }) {
  const [toasts, dispatch] = useReducer(toastReducer, [])

  const addToast = useCallback((message, variant = 'success') => {
    const id = Date.now() + Math.random()
    dispatch({ type: 'ADD', id, message, variant })
    setTimeout(() => dispatch({ type: 'REMOVE', id }), 4000)
  }, [])

  const removeToast = useCallback((id) => {
    dispatch({ type: 'REMOVE', id })
  }, [])

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  )
}

function ToastContainer({ toasts, removeToast }) {
  if (toasts.length === 0) return null
  return (
    <div className="toast-container" aria-live="polite" aria-atomic="false">
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onRemove={() => removeToast(toast.id)} />
      ))}
    </div>
  )
}

function ToastItem({ toast, onRemove }) {
  return (
    <div className={`toast toast--${toast.variant}`} role="alert">
      <span className="toast__message">{toast.message}</span>
      <button
        className="toast__close"
        onClick={onRemove}
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
```

- [ ] **Step 2: Write `src/components/Toast/Toast.css`**

```css
.toast-container {
  position: fixed;
  top: 90px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;
}

.toast {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 20px;
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  font-weight: 500;
  pointer-events: all;
  animation: toast-in 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  min-width: 280px;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.toast--success {
  background: var(--accent);
  color: var(--bg-primary);
}

.toast--error {
  background: var(--error);
  color: #fff;
}

.toast__message {
  flex: 1;
}

.toast__close {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  opacity: 0.8;
  padding: 0 2px;
  color: inherit;
  transition: opacity var(--transition-fast);
}

.toast__close:hover {
  opacity: 1;
}

@keyframes toast-in {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 640px) {
  .toast-container {
    right: 16px;
    left: 16px;
  }
  .toast {
    min-width: unset;
    max-width: unset;
  }
}
```

- [ ] **Step 3: Write test for ToastContext**

Create `src/context/ToastContext.test.jsx`:

```jsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToastProvider, useToast } from './ToastContext'
import '../components/Toast/Toast.css'

function TriggerComponent() {
  const { addToast } = useToast()
  return (
    <button onClick={() => addToast('Test message', 'success')}>
      Show toast
    </button>
  )
}

describe('ToastContext', () => {
  it('addToast renders a toast with correct message', async () => {
    const user = userEvent.setup()
    render(
      <ToastProvider>
        <TriggerComponent />
      </ToastProvider>
    )
    await user.click(screen.getByText('Show toast'))
    expect(screen.getByText('Test message')).toBeInTheDocument()
  })

  it('toast can be dismissed by clicking close button', async () => {
    const user = userEvent.setup()
    render(
      <ToastProvider>
        <TriggerComponent />
      </ToastProvider>
    )
    await user.click(screen.getByText('Show toast'))
    const closeBtn = screen.getByLabelText('Dismiss notification')
    await user.click(closeBtn)
    expect(screen.queryByText('Test message')).not.toBeInTheDocument()
  })
})
```

- [ ] **Step 4: Run the test**

```bash
npm test -- src/context/ToastContext.test.jsx
```

Expected: 2 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/context/ToastContext.jsx src/components/Toast/
git commit -m "feat: add Toast context and component"
```

---

## Task 5: Auth Context

**Files:**
- Create: `src/context/AuthContext.jsx`

- [ ] **Step 1: Write `src/context/AuthContext.jsx`**

```jsx
import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, session, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
```

- [ ] **Step 2: Commit**

```bash
git add src/context/AuthContext.jsx
git commit -m "feat: add Auth context with Supabase session management"
```

---

## Task 6: App Shell + Routing

**Files:**
- Create: `src/App.jsx`, update `src/main.jsx`

- [ ] **Step 1: Write `src/App.jsx`**

```jsx
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ToastProvider } from './context/ToastContext'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ResultsPage = lazy(() => import('./pages/ResultsPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const SignInPage = lazy(() => import('./pages/SignInPage'))

function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-secondary)'
    }}>
      Loading...
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <Navbar />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
```

- [ ] **Step 2: Create stub page files so routing doesn't error**

Create these files with minimal content (they'll be filled in later tasks):

`src/pages/HomePage.jsx`:
```jsx
export default function HomePage() { return <div style={{ minHeight: '100vh', padding: '100px 40px', color: 'white' }}>Home</div> }
```

`src/pages/ServicesPage.jsx`:
```jsx
export default function ServicesPage() { return <div style={{ minHeight: '100vh', padding: '100px 40px', color: 'white' }}>Services</div> }
```

`src/pages/ResultsPage.jsx`:
```jsx
export default function ResultsPage() { return <div style={{ minHeight: '100vh', padding: '100px 40px', color: 'white' }}>Results</div> }
```

`src/pages/FAQPage.jsx`:
```jsx
export default function FAQPage() { return <div style={{ minHeight: '100vh', padding: '100px 40px', color: 'white' }}>FAQ</div> }
```

`src/pages/ContactPage.jsx`:
```jsx
export default function ContactPage() { return <div style={{ minHeight: '100vh', padding: '100px 40px', color: 'white' }}>Contact</div> }
```

`src/pages/CareersPage.jsx`:
```jsx
export default function CareersPage() { return <div style={{ minHeight: '100vh', padding: '100px 40px', color: 'white' }}>Careers</div> }
```

`src/pages/SignInPage.jsx`:
```jsx
export default function SignInPage() { return <div style={{ minHeight: '100vh', padding: '100px 40px', color: 'white' }}>Sign In</div> }
```

- [ ] **Step 3: Create stub Navbar and Footer (will be filled in Tasks 7 & 8)**

`src/components/Navbar/Navbar.jsx`:
```jsx
export default function Navbar() { return <nav style={{ height: '70px', background: '#262731', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, display: 'flex', alignItems: 'center', padding: '0 40px', borderBottom: '1px solid #7a7d85' }}><span style={{ color: '#fafbfd', fontWeight: 700 }}>Study Prime</span></nav> }
```

`src/components/Navbar/Navbar.css`: (empty file for now)
```css
/* Navbar styles - see Task 7 */
```

`src/components/Footer/Footer.jsx`:
```jsx
export default function Footer() { return <footer style={{ background: '#262731', borderTop: '1px solid #7a7d85', padding: '32px 40px', color: '#7a7d85', textAlign: 'center' }}><p>© 2025 Study Prime</p></footer> }
```

`src/components/Footer/Footer.css`: (empty file for now)
```css
/* Footer styles - see Task 8 */
```

- [ ] **Step 4: Verify app loads with routing**

```bash
npm run dev
```

Navigate to `http://localhost:5173` — should show stub Home page with stub Navbar.
Navigate to `http://localhost:5173/faq` — should show FAQ stub.

- [ ] **Step 5: Commit**

```bash
git add src/App.jsx src/main.jsx src/pages/ src/components/Navbar/ src/components/Footer/
git commit -m "feat: add app shell with React Router and lazy-loaded pages"
```

---

## Task 7: Navbar Component

**Files:**
- Modify: `src/components/Navbar/Navbar.jsx`, `src/components/Navbar/Navbar.css`

- [ ] **Step 1: Write `src/components/Navbar/Navbar.jsx`**

```jsx
import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/results', label: 'Results' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { to: '/careers', label: 'Work With Us' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [navigate])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  async function handleSignOut() {
    await signOut()
    navigate('/')
  }

  return (
    <>
      <header className="navbar" role="banner">
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="Study Prime home">
            Study <span className="navbar__logo-accent">Prime</span>
          </Link>

          {/* Desktop nav links */}
          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="navbar__actions">
            {user ? (
              <button
                className="btn-secondary navbar__btn"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/sign-in" className="btn-secondary navbar__btn">
                  Sign In
                </Link>
                <Link to="/contact" className="btn-primary navbar__btn">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="navbar__mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <div className="navbar__mobile-actions">
            {user ? (
              <button className="btn-secondary" onClick={handleSignOut} style={{ width: '100%' }}>
                Sign Out
              </button>
            ) : (
              <>
                <Link
                  to="/sign-in"
                  className="btn-secondary"
                  style={{ display: 'block', textAlign: 'center' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/contact"
                  className="btn-primary"
                  style={{ display: 'block', textAlign: 'center' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
```

- [ ] **Step 2: Write `src/components/Navbar/Navbar.css`**

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background: var(--bg-primary);
  border-bottom: 1px solid rgba(122, 125, 133, 0.3);
  z-index: 1000;
}

.navbar__inner {
  max-width: var(--container-max);
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}

/* Logo */
.navbar__logo {
  font-family: var(--font-primary);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  flex-shrink: 0;
}

.navbar__logo-accent {
  font-family: var(--font-accent);
  font-style: italic;
  color: var(--accent);
}

/* Desktop nav links */
.navbar__links {
  display: flex;
  align-items: center;
  gap: 40px;
}

.navbar__link {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  transition: color var(--transition-default);
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width var(--transition-default);
}

.navbar__link:hover {
  color: var(--accent);
}

.navbar__link:hover::after {
  width: 100%;
}

.navbar__link--active {
  color: var(--accent);
}

.navbar__link--active::after {
  width: 100%;
}

/* Desktop actions */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.navbar__btn {
  padding: 10px 24px;
  font-size: 0.9375rem;
}

/* Hamburger */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  cursor: pointer;
  background: none;
  border: none;
}

.navbar__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform var(--transition-default), opacity var(--transition-default);
}

.navbar__hamburger--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar__hamburger--open span:nth-child(2) {
  opacity: 0;
}

.navbar__hamburger--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu */
.navbar__mobile {
  position: fixed;
  top: 0;
  right: -100%;
  width: 320px;
  max-width: 90vw;
  height: 100vh;
  background: var(--bg-secondary);
  z-index: 1100;
  padding: 80px 32px 32px;
  display: flex;
  flex-direction: column;
  transition: right var(--transition-slow);
  overflow-y: auto;
}

.navbar__mobile--open {
  right: 0;
}

.navbar__mobile nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.navbar__mobile-close {
  position: absolute;
  top: 20px;
  right: 24px;
  font-size: 2rem;
  color: var(--text-primary);
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
  opacity: 0.8;
  transition: opacity var(--transition-fast);
}

.navbar__mobile-close:hover {
  opacity: 1;
}

.navbar__mobile-link {
  display: block;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid rgba(122, 125, 133, 0.2);
  transition: color var(--transition-fast);
}

.navbar__mobile-link:hover,
.navbar__mobile-link--active {
  color: var(--accent);
}

.navbar__mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
}

/* Backdrop */
.navbar__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1050;
  backdrop-filter: blur(2px);
}

/* Responsive */
@media (max-width: 1024px) {
  .navbar__links {
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .navbar__links {
    display: none;
  }

  .navbar__actions {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
  }

  .navbar__inner {
    padding: 0 20px;
  }
}
```

- [ ] **Step 3: Add top padding to main to account for fixed navbar**

In `src/styles/global.css`, add after the `#root` rule:

```css
main {
  padding-top: var(--nav-height);
}
```

- [ ] **Step 4: Run dev server and verify Navbar renders correctly**

```bash
npm run dev
```

Check: logo displays, nav links show, hover underline works, hamburger appears on mobile viewport, menu opens/closes.

- [ ] **Step 5: Commit**

```bash
git add src/components/Navbar/ src/styles/global.css
git commit -m "feat: add Navbar with responsive mobile menu and active states"
```

---

## Task 8: Footer Component

**Files:**
- Modify: `src/components/Footer/Footer.jsx`, `src/components/Footer/Footer.css`

- [ ] **Step 1: Write `src/components/Footer/Footer.jsx`**

```jsx
import { Link } from 'react-router-dom'
import './Footer.css'

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/results', label: 'Results' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { to: '/careers', label: 'Careers' },
]

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__left">
          <Link to="/" className="footer__logo" aria-label="Study Prime home">
            Study <span className="footer__logo-accent">Prime</span>
          </Link>
          <p className="footer__copy">
            © {new Date().getFullYear()} Study Prime. All rights reserved.
          </p>
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          {FOOTER_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className="footer__link">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Write `src/components/Footer/Footer.css`**

```css
.footer {
  background: var(--bg-primary);
  border-top: 1px solid rgba(122, 125, 133, 0.3);
  padding: 32px 0;
  margin-top: auto;
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.footer__left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__logo {
  font-family: var(--font-primary);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
}

.footer__logo-accent {
  font-family: var(--font-accent);
  font-style: italic;
  color: var(--accent);
}

.footer__copy {
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
}

.footer__link {
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-default);
}

.footer__link:hover {
  color: var(--accent);
}

@media (max-width: 640px) {
  .footer__inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer__links {
    justify-content: center;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer/
git commit -m "feat: add Footer with nav links"
```

---

## Task 9: useScrollReveal Hook

**Files:**
- Create: `src/hooks/useScrollReveal.js`

- [ ] **Step 1: Write `src/hooks/useScrollReveal.js`**

```js
import { useRef, useEffect, useState } from 'react'

export default function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: options.threshold ?? 0.1, ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}
```

- [ ] **Step 2: Write test for useScrollReveal**

Create `src/hooks/useScrollReveal.test.jsx`:

```jsx
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import useScrollReveal from './useScrollReveal'

describe('useScrollReveal', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    const mockObserver = {
      observe: vi.fn(),
      disconnect: vi.fn(),
      unobserve: vi.fn(),
    }
    vi.stubGlobal('IntersectionObserver', vi.fn(() => mockObserver))
  })

  it('returns a ref and initial isVisible=false', () => {
    const { result } = renderHook(() => useScrollReveal())
    const [ref, isVisible] = result.current
    expect(isVisible).toBe(false)
    expect(ref).toBeDefined()
  })
})
```

- [ ] **Step 3: Run test**

```bash
npm test -- src/hooks/useScrollReveal.test.jsx
```

Expected: 1 test passes.

- [ ] **Step 4: Commit**

```bash
git add src/hooks/
git commit -m "feat: add useScrollReveal hook with IntersectionObserver"
```

---

## Task 10: Hero Section

**Files:**
- Create: `src/components/Hero/Hero.jsx`, `src/components/Hero/Hero.css`

- [ ] **Step 1: Write `src/components/Hero/Hero.jsx`**

```jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  const [scrollHint, setScrollHint] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setScrollHint(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__content container">
        <h1 className="hero__title">
          Your Path to{' '}
          <em className="serif hero__title-accent">Excellence</em>
        </h1>
        <p className="hero__subtitle">
          Expert SAT, ACT, and subject tutoring for students K–12.
          Proven results. Local Bay Area.
        </p>
        <div className="hero__ctas">
          <Link to="/contact" className="btn-primary hero__cta">
            Get Started
          </Link>
          <Link to="/results" className="btn-secondary hero__cta">
            Learn More
          </Link>
        </div>
      </div>

      {scrollHint && (
        <div className="hero__scroll-hint" aria-hidden="true">
          <span className="hero__scroll-text">Scroll to see results</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </section>
  )
}
```

- [ ] **Step 2: Write `src/components/Hero/Hero.css`**

```css
.hero {
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-7) 0;
  position: relative;
}

.hero__content {
  text-align: center;
  max-width: 800px;
}

.hero__title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-bottom: var(--space-3);
  animation: hero-fade-up 600ms cubic-bezier(0.4, 0, 0.2, 1) 100ms both;
}

.hero__title-accent {
  color: var(--accent);
  font-style: italic;
}

.hero__subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 560px;
  margin: 0 auto var(--space-4);
  animation: hero-fade-up 600ms cubic-bezier(0.4, 0, 0.2, 1) 200ms both;
}

.hero__ctas {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  animation: hero-fade-up 600ms cubic-bezier(0.4, 0, 0.2, 1) 300ms both;
}

.hero__cta {
  min-width: 160px;
  justify-content: center;
}

.hero__scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: var(--text-tertiary);
  animation: pulse 1.5s ease-in-out infinite;
}

.hero__scroll-text {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

@keyframes hero-fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@media (max-width: 640px) {
  .hero__title {
    font-size: 2.25rem;
  }

  .hero__subtitle {
    font-size: 1rem;
  }

  .hero__ctas {
    flex-direction: column;
    align-items: center;
  }

  .hero__cta {
    width: 100%;
    max-width: 280px;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero/
git commit -m "feat: add Hero section with staggered load animations"
```

---

## Task 11: Services Section

**Files:**
- Create: `src/components/Services/Services.jsx`, `src/components/Services/Services.css`

- [ ] **Step 1: Write `src/components/Services/Services.jsx`**

```jsx
import useScrollReveal from '../../hooks/useScrollReveal'
import './Services.css'

const SERVICES = [
  {
    title: 'SAT Prep',
    description: 'Targeted SAT preparation with full-length practice tests, score analysis, and personalized strategy. Average student improvement: 200+ points.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="12" width="32" height="24" rx="3" stroke="#13ae53" strokeWidth="2"/>
        <path d="M16 20h16M16 26h10" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="36" cy="34" r="6" fill="#262731" stroke="#13ae53" strokeWidth="2"/>
        <path d="M33.5 34l2 2 3.5-3.5" stroke="#13ae53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'ACT Prep',
    description: 'Comprehensive ACT coaching covering English, Math, Reading, and Science. Strategic timing and question techniques that actually work.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M10 36L24 12l14 24H10z" stroke="#13ae53" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M17 28h14" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Mathematics',
    description: 'From arithmetic to calculus — we meet students where they are. Clear explanations, real practice, and the confidence to solve hard problems.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M12 24h24M24 12v24" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 14l4 4M30 14l4 4M14 34l4-4M30 34l4-4" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'English & Writing',
    description: 'Essay structure, grammar, literary analysis, and reading comprehension. For assignments, standardized tests, and college applications.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M14 14h20v24H14z" stroke="#13ae53" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M19 20h10M19 25h10M19 30h6" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 8l6 6-14 14-7 1 1-7L30 8z" stroke="#13ae53" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Science',
    description: 'Biology, Chemistry, and Physics tutoring aligned to your curriculum. Concept clarity, lab prep, and exam strategies for high school science.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M20 10v14l-8 14h24L28 24V10H20z" stroke="#13ae53" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M20 10h8" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="32" r="1.5" fill="#13ae53"/>
        <circle cx="28" cy="34" r="1.5" fill="#13ae53"/>
      </svg>
    ),
  },
  {
    title: 'Languages',
    description: 'Spanish, French, Mandarin, and more. Conversational practice, grammar foundations, and AP Language exam preparation.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="14" stroke="#13ae53" strokeWidth="2"/>
        <path d="M24 10c0 0-6 6-6 14s6 14 6 14M24 10c0 0 6 6 6 14s-6 14-6 14M10 24h28" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section className="services" aria-labelledby="services-heading">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <h2 id="services-heading">What We Offer</h2>
          <div className="section-underline" />
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <article
      ref={ref}
      className={`service-card reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="service-card__icon" aria-hidden="true">
        {service.icon}
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.description}</p>
    </article>
  )
}
```

- [ ] **Step 2: Write `src/components/Services/Services.css`**

```css
.services {
  padding: var(--space-6) 0;
  background: var(--bg-primary);
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}

.service-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-3);
  cursor: default;
  transition: border-color var(--transition-default),
              box-shadow var(--transition-default),
              transform var(--transition-default),
              opacity 500ms ease,
              translate 500ms ease;
}

.service-card:hover {
  border-color: var(--accent);
  box-shadow: 0 12px 32px rgba(19, 174, 83, 0.15);
  transform: translateY(-4px);
}

.service-card__icon {
  margin-bottom: var(--space-2);
}

.service-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.service-card__desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services {
    padding: var(--space-5) 0;
  }

  .services__grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Services/
git commit -m "feat: add Services section with 6 service cards and scroll reveal"
```

---

## Task 12: Results Carousel

**Files:**
- Create: `src/components/ResultsCarousel/ResultsCarousel.jsx`, `src/components/ResultsCarousel/ResultsCarousel.css`

- [ ] **Step 1: Write `src/components/ResultsCarousel/ResultsCarousel.jsx`**

```jsx
import { useRef } from 'react'
import './ResultsCarousel.css'

const REVIEWS = [
  {
    name: 'Aiden Park',
    profile: 'High School Senior, 1520 SAT',
    stars: 5,
    text: 'Study Prime completely changed how I approach the SAT. My score went from 1310 to 1520 in four months. The practice tests and weekly feedback were game changers.',
  },
  {
    name: 'Maya Rodriguez',
    profile: 'High School Junior, 34 ACT',
    stars: 5,
    text: 'I went from a 28 to a 34 on the ACT. My tutor was incredibly patient and broke down the science section in a way that finally made sense. Could not recommend more.',
  },
  {
    name: 'James Liu',
    profile: '10th Grade, AP Chemistry',
    stars: 5,
    text: 'My chemistry grade went from a C to an A in six weeks. The tutor explained concepts I had been confused about for months in just one session. Genuinely impressive.',
  },
  {
    name: 'Sofia Chen',
    profile: '8th Grade, Math',
    stars: 5,
    text: 'My daughter struggled with algebra for two years. After three months with Study Prime, she is confident and her grade went from a D to a B+. Incredible transformation.',
  },
  {
    name: 'Ethan Nguyen',
    profile: 'High School Senior, 1490 SAT',
    stars: 5,
    text: 'The tutors actually care about your progress. They tailor every session to exactly what you need. My SAT went up 180 points in three months of working together.',
  },
  {
    name: 'Priya Patel',
    profile: 'High School Junior, AP Biology',
    stars: 5,
    text: 'AP Bio was overwhelming until I started working with Study Prime. My tutor helped me build a study system and I ended up scoring a 5 on the exam.',
  },
  {
    name: 'Lucas Thompson',
    profile: '9th Grade, English',
    stars: 5,
    text: 'My son always struggled with writing essays. His English tutor taught him a clear structure and now he actually enjoys writing. His teacher noticed the difference immediately.',
  },
  {
    name: 'Hannah Kim',
    profile: 'High School Senior, 1540 SAT',
    stars: 5,
    text: 'From 1380 to 1540 in five months. The personalized approach made all the difference. I knew exactly which areas to focus on and the progress was steady the whole time.',
  },
  {
    name: 'Carlos Martinez',
    profile: '11th Grade, Spanish AP',
    stars: 5,
    text: 'My Spanish AP tutor helped me go from conversational to truly fluent in academic Spanish. I scored a 4 on the AP exam and felt totally prepared walking in.',
  },
  {
    name: 'Zoe Williams',
    profile: 'High School Junior, 32 ACT',
    stars: 5,
    text: 'I had taken the ACT twice and plateaued at 29. After eight sessions with Study Prime, I hit a 32. The timing strategies for the math section alone were worth it.',
  },
  {
    name: 'Raj Sharma',
    profile: '7th Grade, Math',
    stars: 5,
    text: 'My son was really behind in math and losing confidence fast. His tutor was patient, encouraging, and found ways to make the material click. He is now ahead of his class.',
  },
  {
    name: 'Emma Johnson',
    profile: 'High School Senior, 1500 SAT',
    stars: 5,
    text: 'I started Study Prime four months before my test with a 1290. My final score was 1500. The reading and writing sections improved the most thanks to focused practice each week.',
  },
  {
    name: 'David Okafor',
    profile: '10th Grade, Physics',
    stars: 5,
    text: 'Physics was my worst subject. My tutor turned it around by connecting equations to real examples. I went from failing to getting the highest grade on the final exam.',
  },
  {
    name: 'Isabella Torres',
    profile: 'High School Junior, 33 ACT',
    stars: 5,
    text: 'Study Prime helped me raise my ACT from 27 to 33 in under three months. The sessions were focused and my tutor always came prepared with a clear plan for improvement.',
  },
  {
    name: 'Noah Chang',
    profile: '12th Grade, Calculus',
    stars: 5,
    text: 'AP Calculus was the hardest class I had ever taken. My tutor broke every concept down from scratch and I finished the year with an A and a 5 on the AP exam.',
  },
]

function StarRating({ count }) {
  return (
    <div className="review-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#13ae53" aria-hidden="true">
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1z"/>
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-card__header">
        <div>
          <p className="review-card__name">{review.name}</p>
          <p className="review-card__profile">{review.profile}</p>
        </div>
        <StarRating count={review.stars} />
      </div>
      <p className="review-card__text">{review.text}</p>
    </article>
  )
}

export default function ResultsCarousel() {
  const trackRef = useRef(null)

  return (
    <section className="carousel-section" aria-labelledby="results-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="results-heading">See What Our Students Say</h2>
          <p className="carousel-section__meta">15+ reviews &mdash; 4.9/5 average rating</p>
          <div className="section-underline" style={{ marginTop: '16px' }} />
        </div>
      </div>

      <div className="carousel-wrapper" aria-label="Student reviews carousel">
        <div className="carousel-track" ref={trackRef}>
          {/* Duplicate for seamless loop */}
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Write `src/components/ResultsCarousel/ResultsCarousel.css`**

```css
.carousel-section {
  padding: var(--space-6) 0;
  background: var(--bg-secondary);
  overflow: hidden;
}

.carousel-section__meta {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  text-align: center;
  margin-top: 8px;
}

.carousel-wrapper {
  overflow: hidden;
  margin-top: var(--space-5);
  cursor: grab;
  user-select: none;
}

.carousel-wrapper:active {
  cursor: grabbing;
}

.carousel-track {
  display: flex;
  gap: 20px;
  width: max-content;
  animation: carousel-scroll 60s linear infinite;
  padding: 8px 0 20px;
}

.carousel-track:hover {
  animation-play-state: paused;
}

@keyframes carousel-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.review-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-3);
  width: 380px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.review-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.review-card__name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
}

.review-card__profile {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 2px;
}

.review-card__text {
  font-size: 1rem;
  color: var(--text-primary);
  line-height: 1.7;
  flex: 1;
}

.review-stars {
  display: flex;
  gap: 3px;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .review-card {
    width: 300px;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ResultsCarousel/
git commit -m "feat: add infinite auto-scroll Results carousel with 15 reviews"
```

---

## Task 13: Stats Section + useCountUp Hook

**Files:**
- Create: `src/components/Stats/useCountUp.js`, `src/components/Stats/Stats.jsx`, `src/components/Stats/Stats.css`

- [ ] **Step 1: Write `src/components/Stats/useCountUp.js`**

```js
import { useState, useEffect, useRef } from 'react'

export default function useCountUp(target, duration = 1200, shouldStart = false) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!shouldStart) return

    let startTime = null

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3)
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      setCount(Math.round(target * eased))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, shouldStart])

  return count
}
```

- [ ] **Step 2: Write test for useCountUp**

Create `src/components/Stats/useCountUp.test.js`:

```js
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useCountUp from './useCountUp'

describe('useCountUp', () => {
  it('starts at 0 when shouldStart is false', () => {
    const { result } = renderHook(() => useCountUp(100, 1000, false))
    expect(result.current).toBe(0)
  })

  it('remains 0 when not started', () => {
    const { result, rerender } = renderHook(
      ({ shouldStart }) => useCountUp(100, 1000, shouldStart),
      { initialProps: { shouldStart: false } }
    )
    expect(result.current).toBe(0)
    rerender({ shouldStart: false })
    expect(result.current).toBe(0)
  })
})
```

- [ ] **Step 3: Run test**

```bash
npm test -- src/components/Stats/useCountUp.test.js
```

Expected: 2 tests pass.

- [ ] **Step 4: Write `src/components/Stats/Stats.jsx`**

```jsx
import useScrollReveal from '../../hooks/useScrollReveal'
import useCountUp from './useCountUp'
import './Stats.css'

const STATS = [
  {
    value: 280,
    suffix: '+',
    label: 'Average SAT Score Improvement',
    description: 'Points gained by students who complete our full SAT program',
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Students Tutored',
    description: 'Bay Area students who have worked with Study Prime tutors',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Success Rate',
    description: 'Of students achieve their target score or grade improvement',
  },
  {
    value: 4.9,
    suffix: '/5',
    label: 'Average Rating',
    description: 'Based on reviews from students and parents across all subjects',
    isDecimal: true,
  },
]

function StatCard({ stat, index }) {
  const [ref, isVisible] = useScrollReveal()
  const count = useCountUp(stat.isDecimal ? 49 : stat.value, 1200, isVisible)
  const display = stat.isDecimal ? (count / 10).toFixed(1) : count.toLocaleString()

  return (
    <article
      ref={ref}
      className={`stat-card reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="stat-card__number" aria-live="polite">
        <span className="serif">{display}</span>
        <span className="stat-card__suffix">{stat.suffix}</span>
      </div>
      <h3 className="stat-card__label">{stat.label}</h3>
      <p className="stat-card__desc">{stat.description}</p>
    </article>
  )
}

export default function Stats() {
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section className="stats" aria-labelledby="stats-heading">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <h2 id="stats-heading">
            The <em className="serif">Results</em> Speak
          </h2>
          <div className="section-underline" style={{ width: '80px' }} />
        </div>

        <div className="stats__grid">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Write `src/components/Stats/Stats.css`**

```css
.stats {
  padding: var(--space-6) 0;
  background: var(--bg-primary);
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

.stat-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  text-align: center;
}

.stat-card__number {
  font-size: 3.5rem;
  line-height: 1;
  color: var(--accent);
  margin-bottom: 12px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
}

.stat-card__number .serif {
  font-family: var(--font-accent);
  font-weight: 400;
}

.stat-card__suffix {
  font-family: var(--font-accent);
  font-size: 2rem;
  font-style: italic;
}

.stat-card__label {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.stat-card__desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .stats {
    padding: var(--space-5) 0;
  }

  .stats__grid {
    grid-template-columns: 1fr;
  }

  .stat-card__number {
    font-size: 2.75rem;
  }
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/Stats/
git commit -m "feat: add Stats section with count-up animations on scroll"
```

---

## Task 14: FAQ Section

**Files:**
- Create: `src/components/FAQ/FAQ.jsx`, `src/components/FAQ/FAQ.css`

- [ ] **Step 1: Write `src/components/FAQ/FAQ.jsx`**

```jsx
import { useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './FAQ.css'

const FAQS = [
  {
    question: 'How long does it take to see results?',
    answer: 'Most students see meaningful improvement within 4-8 weeks of consistent sessions. For standardized test prep, we recommend starting at least 3 months before your test date for the best results. Subject tutoring improvements are often visible within 2-3 weeks.',
  },
  {
    question: 'What subjects do you tutor?',
    answer: 'We offer tutoring in SAT and ACT prep, Mathematics (K-12 through calculus), English and Language Arts, Biology, Chemistry, Physics, History, and Languages including Spanish, French, and Mandarin. If your subject is not listed, contact us and we will do our best to match you with the right tutor.',
  },
  {
    question: 'How are your tutors qualified?',
    answer: 'All Study Prime tutors are rigorously vetted. They hold bachelor\'s degrees or higher in their subject areas, have demonstrated teaching ability, and score in the 95th percentile or above on any standardized test they teach. We also conduct ongoing quality reviews to ensure consistently excellent sessions.',
  },
  {
    question: 'Do you offer group sessions?',
    answer: 'We offer small group sessions of 2-4 students for select SAT and ACT prep programs. Group sessions offer a more affordable option while maintaining a high level of personalization. Contact us to ask about current group availability.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our rates vary by subject and session type. One-on-one tutoring starts at competitive Bay Area rates with no long-term contracts required. We offer session packages that provide better per-session value. Contact us for a full pricing breakdown tailored to your needs.',
  },
  {
    question: 'Can I schedule a free consultation?',
    answer: 'Yes. We offer a free 20-minute consultation to discuss your goals, assess your current standing, and match you with the right tutor. Fill out the contact form and we will schedule a time that works for you.',
  },
  {
    question: 'Do you guarantee score improvements?',
    answer: 'We stand behind our methods. Students who complete our full SAT or ACT prep program and follow through on all practice and homework consistently see significant score improvements. While we cannot guarantee a specific score, our 95% success rate speaks for itself.',
  },
  {
    question: 'Online vs. in-person tutoring — which do you offer?',
    answer: 'We offer both online and in-person tutoring throughout the Bay Area. Online sessions are conducted via video call with shared digital whiteboards and document tools. Many students and families prefer the flexibility of online, while others value the in-person connection. Both formats are equally effective.',
  },
  {
    question: 'How do I get started?',
    answer: 'Fill out the contact form on our Contact page with your name, email, grade level, and subjects. We will reach out within 24 hours to schedule your free consultation and match you with a tutor.',
  },
  {
    question: 'What if I am not satisfied?',
    answer: 'Your satisfaction matters to us. If you are not happy with a session, let us know and we will work to find a better tutor match or adjust our approach. We take feedback seriously and are committed to making things right.',
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  const answerId = `faq-answer-${index}`
  const questionId = `faq-question-${index}`

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__trigger"
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span className="faq-item__question">{faq.question}</span>
        <svg
          className="faq-item__chevron"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div
        className="faq-item__body"
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        hidden={!isOpen}
      >
        <p className="faq-item__answer">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ({ limit }) {
  const [openIndex, setOpenIndex] = useState(null)
  const [headerRef, headerVisible] = useScrollReveal()

  const displayFaqs = limit ? FAQS.slice(0, limit) : FAQS

  function toggle(index) {
    setOpenIndex(prev => prev === index ? null : index)
  }

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p className="faq__subtitle">Everything you need to know</p>
        </div>

        <div className="faq__list" role="list">
          {displayFaqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { FAQS }
```

- [ ] **Step 2: Write `src/components/FAQ/FAQ.css`**

```css
.faq {
  padding: var(--space-6) 0;
  background: var(--bg-primary);
}

.faq__subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-top: 8px;
  text-align: center;
}

.faq__list {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: border-color var(--transition-fast);
}

.faq-item:hover,
.faq-item--open {
  border-color: var(--accent);
}

.faq-item__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 24px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background var(--transition-fast);
}

.faq-item__trigger:hover {
  background: var(--bg-hover);
}

.faq-item__question {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.5;
}

.faq-item__chevron {
  color: var(--accent);
  flex-shrink: 0;
  transition: transform var(--transition-default);
}

.faq-item--open .faq-item__chevron {
  transform: rotate(180deg);
}

.faq-item__body {
  overflow: hidden;
}

.faq-item__body[hidden] {
  display: none;
}

.faq-item__answer {
  padding: 0 24px 20px;
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 640px) {
  .faq {
    padding: var(--space-5) 0;
  }

  .faq-item__trigger {
    padding: 16px 20px;
  }

  .faq-item__answer {
    padding: 0 20px 16px;
  }
}
```

- [ ] **Step 3: Write test for FAQ accordion**

Create `src/components/FAQ/FAQ.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from '../../context/ToastContext'
import FAQ from './FAQ'

function renderFAQ() {
  return render(
    <BrowserRouter>
      <ToastProvider>
        <FAQ limit={3} />
      </ToastProvider>
    </BrowserRouter>
  )
}

describe('FAQ accordion', () => {
  it('renders FAQ questions', () => {
    renderFAQ()
    expect(screen.getByText('How long does it take to see results?')).toBeInTheDocument()
  })

  it('answers are hidden by default', () => {
    renderFAQ()
    const answer = screen.getByText(/Most students see meaningful improvement/)
    expect(answer.closest('[hidden]')).not.toBeNull()
  })

  it('clicking a question reveals its answer', async () => {
    const user = userEvent.setup()
    renderFAQ()
    const btn = screen.getByText('How long does it take to see results?').closest('button')
    await user.click(btn)
    const body = document.getElementById('faq-answer-0')
    expect(body).not.toHaveAttribute('hidden')
  })

  it('clicking an open question closes it', async () => {
    const user = userEvent.setup()
    renderFAQ()
    const btn = screen.getByText('How long does it take to see results?').closest('button')
    await user.click(btn)
    await user.click(btn)
    const body = document.getElementById('faq-answer-0')
    expect(body).toHaveAttribute('hidden')
  })

  it('opening one question closes any previously open question', async () => {
    const user = userEvent.setup()
    renderFAQ()
    const q1 = screen.getByText('How long does it take to see results?').closest('button')
    const q2 = screen.getByText('What subjects do you tutor?').closest('button')
    await user.click(q1)
    await user.click(q2)
    expect(document.getElementById('faq-answer-0')).toHaveAttribute('hidden')
    expect(document.getElementById('faq-answer-1')).not.toHaveAttribute('hidden')
  })
})
```

- [ ] **Step 4: Run tests**

```bash
npm test -- src/components/FAQ/FAQ.test.jsx
```

Expected: 5 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/components/FAQ/
git commit -m "feat: add accessible FAQ accordion with keyboard navigation"
```

---

## Task 15: Contact Form

**Files:**
- Create: `src/components/ContactForm/ContactForm.jsx`, `src/components/ContactForm/ContactForm.css`

- [ ] **Step 1: Write `src/components/ContactForm/ContactForm.jsx`**

```jsx
import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useToast } from '../../context/ToastContext'
import './ContactForm.css'

const GRADE_OPTIONS = [
  'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade',
  '5th Grade', '6th Grade', '7th Grade', '8th Grade', '9th Grade',
  '10th Grade', '11th Grade', '12th Grade', 'College',
]

const TOPIC_OPTIONS = [
  'SAT Prep', 'ACT Prep', 'Math', 'English', 'Science', 'Biology',
  'Chemistry', 'Physics', 'History', 'Languages', 'Spanish', 'French',
  'Mandarin', 'Writing', 'Reading Comprehension', 'AP Courses',
]

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export { validateEmail }

export default function ContactForm() {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)
  const [topicSearch, setTopicSearch] = useState('')
  const [topicOpen, setTopicOpen] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    topics: [],
    message: '',
  })

  const [errors, setErrors] = useState({})

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!validateEmail(form.email)) next.email = 'Please enter a valid email'
    if (!form.grade) next.grade = 'Please select a grade'
    if (form.topics.length === 0) next.topics = 'Please select at least one topic'
    return next
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  function handleBlur(e) {
    const { name } = e.target
    const validationErrors = validate()
    if (validationErrors[name]) {
      setErrors(prev => ({ ...prev, [name]: validationErrors[name] }))
    }
  }

  function toggleTopic(topic) {
    setForm(prev => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter(t => t !== topic)
        : [...prev.topics, topic],
    }))
    if (errors.topics) setErrors(prev => ({ ...prev, topics: '' }))
  }

  function removeTopic(topic) {
    setForm(prev => ({ ...prev, topics: prev.topics.filter(t => t !== topic) }))
  }

  const filteredTopics = TOPIC_OPTIONS.filter(t =>
    t.toLowerCase().includes(topicSearch.toLowerCase())
  )

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    const { error } = await supabase.from('contact_submissions').insert([{
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      grade: form.grade,
      topics: form.topics,
      message: form.message.trim() || null,
    }])
    setLoading(false)

    if (error) {
      addToast('Something went wrong. Please try again.', 'error')
    } else {
      addToast('Your inquiry has been sent! We\'ll be in touch within 24 hours.', 'success')
      setForm({ name: '', email: '', phone: '', grade: '', topics: [], message: '' })
      setErrors({})
    }
  }

  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="contact-heading">Get Started Today</h2>
          <p className="contact-section__subtitle">
            Fill out the form and we'll schedule your first consultation.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact inquiry form"
        >
          {/* Name */}
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">
              Full Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Jane Smith"
              autoComplete="name"
              aria-required="true"
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name && (
              <span id="contact-name-error" className="form-error" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">
              Email Address <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="jane@example.com"
              autoComplete="email"
              aria-required="true"
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
            />
            {errors.email && (
              <span id="contact-email-error" className="form-error" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="contact-phone" className="form-label">
              Phone <span className="form-label__optional">(optional)</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              className="form-input"
              value={form.phone}
              onChange={handleChange}
              placeholder="(415) 555-0123"
              autoComplete="tel"
            />
          </div>

          {/* Grade */}
          <div className="form-group">
            <label htmlFor="contact-grade" className="form-label">
              Student Grade <span aria-hidden="true">*</span>
            </label>
            <select
              id="contact-grade"
              name="grade"
              className={`form-input ${errors.grade ? 'error' : ''}`}
              value={form.grade}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-describedby={errors.grade ? 'contact-grade-error' : undefined}
            >
              <option value="">Select grade level</option>
              {GRADE_OPTIONS.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            {errors.grade && (
              <span id="contact-grade-error" className="form-error" role="alert">
                {errors.grade}
              </span>
            )}
          </div>

          {/* Topics */}
          <div className="form-group">
            <label className="form-label" id="topics-label">
              Topics to Study <span aria-hidden="true">*</span>
            </label>

            {/* Selected pills */}
            {form.topics.length > 0 && (
              <div className="topic-pills" aria-label="Selected topics">
                {form.topics.map(topic => (
                  <span key={topic} className="topic-pill">
                    {topic}
                    <button
                      type="button"
                      className="topic-pill__remove"
                      onClick={() => removeTopic(topic)}
                      aria-label={`Remove ${topic}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Searchable dropdown */}
            <div className="topic-dropdown">
              <input
                type="text"
                className={`form-input ${errors.topics ? 'error' : ''}`}
                placeholder="Search or select subjects..."
                value={topicSearch}
                onChange={e => setTopicSearch(e.target.value)}
                onFocus={() => setTopicOpen(true)}
                onBlur={() => setTimeout(() => setTopicOpen(false), 150)}
                aria-labelledby="topics-label"
                aria-haspopup="listbox"
                aria-expanded={topicOpen}
                aria-describedby={errors.topics ? 'contact-topics-error' : undefined}
              />
              {topicOpen && filteredTopics.length > 0 && (
                <ul className="topic-dropdown__list" role="listbox" aria-labelledby="topics-label">
                  {filteredTopics.map(topic => (
                    <li
                      key={topic}
                      role="option"
                      aria-selected={form.topics.includes(topic)}
                      className={`topic-dropdown__option ${form.topics.includes(topic) ? 'topic-dropdown__option--selected' : ''}`}
                      onMouseDown={() => toggleTopic(topic)}
                    >
                      {topic}
                      {form.topics.includes(topic) && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8l4 4 6-6" stroke="#13ae53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {errors.topics && (
              <span id="contact-topics-error" className="form-error" role="alert">
                {errors.topics}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">
              Message <span className="form-label__optional">(optional)</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="form-input contact-form__textarea"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us more about your goals and needs..."
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="btn-primary contact-form__submit"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <svg className="contact-form__spinner" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10"/>
                </svg>
                Sending...
              </>
            ) : (
              'Send Inquiry'
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Write `src/components/ContactForm/ContactForm.css`**

```css
.contact-section {
  padding: var(--space-6) 0;
  background: var(--bg-primary);
}

.contact-section__subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  text-align: center;
  margin-top: 8px;
}

.contact-form {
  max-width: 500px;
  margin: 0 auto;
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label__optional {
  color: var(--text-tertiary);
  font-weight: 400;
  font-size: 0.8125rem;
}

/* Topic pills */
.topic-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.topic-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--accent-subtle-2);
  color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.8125rem;
  font-weight: 500;
}

.topic-pill__remove {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--accent);
  font-size: 1rem;
  line-height: 1;
  padding: 0;
  opacity: 0.8;
  transition: opacity var(--transition-fast);
}

.topic-pill__remove:hover {
  opacity: 1;
}

/* Topic dropdown */
.topic-dropdown {
  position: relative;
}

.topic-dropdown__list {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  border: 1px solid var(--accent);
  border-radius: var(--radius-sm);
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.topic-dropdown__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  font-size: 0.9375rem;
  color: var(--text-primary);
  cursor: pointer;
  transition: background var(--transition-fast);
}

.topic-dropdown__option:hover {
  background: var(--bg-hover);
}

.topic-dropdown__option--selected {
  color: var(--accent);
  background: var(--accent-subtle);
}

/* Textarea */
.contact-form__textarea {
  resize: vertical;
  min-height: 100px;
}

/* Submit button */
.contact-form__submit {
  width: 100%;
  justify-content: center;
  padding: 14px 32px;
  font-size: 1rem;
}

/* Spinner */
.contact-form__spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 640px) {
  .contact-section {
    padding: var(--space-5) 0;
  }

  .contact-form {
    padding: var(--space-3);
  }
}
```

- [ ] **Step 3: Write test for form validation**

Create `src/components/ContactForm/ContactForm.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest'
import { validateEmail } from './ContactForm'

describe('validateEmail', () => {
  it('accepts valid email addresses', () => {
    expect(validateEmail('user@example.com')).toBe(true)
    expect(validateEmail('test+tag@domain.co.uk')).toBe(true)
  })

  it('rejects invalid email addresses', () => {
    expect(validateEmail('notanemail')).toBe(false)
    expect(validateEmail('@domain.com')).toBe(false)
    expect(validateEmail('user@')).toBe(false)
    expect(validateEmail('')).toBe(false)
  })
})
```

- [ ] **Step 4: Run test**

```bash
npm test -- src/components/ContactForm/ContactForm.test.jsx
```

Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/components/ContactForm/
git commit -m "feat: add Contact form with Supabase submission and validation"
```

---

## Task 16: Careers Section

**Files:**
- Create: `src/components/Careers/Careers.jsx`, `src/components/Careers/JobCard.jsx`, `src/components/Careers/ApplyModal.jsx`, `src/components/Careers/Careers.css`

- [ ] **Step 1: Write `src/components/Careers/Careers.jsx`**

```jsx
import { useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import JobCard from './JobCard'
import ApplyModal from './ApplyModal'
import './Careers.css'

export const JOBS = [
  {
    id: 'sat-act-specialist',
    title: 'SAT/ACT Specialist',
    location: 'Bay Area, CA',
    type: 'Full-time',
    shortDesc: 'Experienced SAT/ACT tutors to join our Bay Area team.',
    fullDesc: 'We are seeking expert SAT/ACT tutors who are passionate about helping students reach their full potential. You will work one-on-one with students to develop personalized strategies, administer practice tests, and track measurable score improvements.',
    requirements: [
      '2+ years of SAT/ACT tutoring experience',
      'Scored in the 95th percentile or higher on the SAT or ACT',
      'Bachelor\'s degree required',
      'Strong communication and patience',
      'Flexible scheduling — evenings and weekends required',
    ],
    compensation: '$40–$70/hour depending on experience',
  },
  {
    id: 'math-tutor',
    title: 'Math Tutor (Elementary & Middle School)',
    location: 'Bay Area, CA',
    type: 'Part-time',
    shortDesc: 'Help elementary and middle school students master math fundamentals.',
    fullDesc: 'Join our team helping younger students build confidence and mastery in mathematics. You will cover topics from basic arithmetic through pre-algebra and geometry, working to identify and close gaps while building genuine understanding.',
    requirements: [
      'Bachelor\'s degree in Math, Education, or related field preferred',
      'Experience working with K-8 students',
      'Patience, enthusiasm, and genuine love for teaching',
      'Minimum 10 hours/week availability',
    ],
    compensation: '$35–$55/hour depending on experience',
  },
  {
    id: 'english-tutor',
    title: 'English & Language Arts Tutor',
    location: 'Bay Area, CA',
    type: 'Part-time',
    shortDesc: 'Specialize in writing, reading comprehension, and literature analysis.',
    fullDesc: 'We are looking for a skilled English tutor who can help students at all levels improve their writing, reading comprehension, and analytical skills. Sessions range from essay drafting to AP Literature exam preparation.',
    requirements: [
      'Strong writing and communication skills',
      'Experience tutoring or teaching English/Language Arts',
      'Ability to explain complex literary concepts clearly',
      'Minimum 10 hours/week availability',
    ],
    compensation: '$35–$55/hour depending on experience',
  },
  {
    id: 'science-tutor',
    title: 'Science Tutor (Biology, Chemistry, Physics)',
    location: 'Bay Area, CA',
    type: 'Part-time',
    shortDesc: 'Tutor high school science with hands-on, engaging methods.',
    fullDesc: 'We need science tutors who can make complex topics engaging and accessible for high school students. You will tutor in one or more of Biology, Chemistry, and Physics, covering coursework and AP exam preparation with clear, example-based explanations.',
    requirements: [
      'Bachelor\'s degree in a science field',
      'Experience with high school science curriculum',
      'Laboratory experience preferred',
      'Flexible scheduling available',
    ],
    compensation: '$38–$60/hour depending on experience and subject',
  },
]

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section className="careers" aria-labelledby="careers-heading">
      <div className="container">
        <div className="careers__layout">
          {/* Left: Job listings */}
          <div className="careers__listings">
            <div
              ref={headerRef}
              className={`reveal ${headerVisible ? 'visible' : ''}`}
            >
              <h2 id="careers-heading">Join Our Team</h2>
              <p className="careers__subtitle">
                We're hiring passionate tutors. Help us change education.
              </p>
            </div>

            <div className="careers__jobs">
              {JOBS.map((job, i) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={i}
                  onViewDetails={() => setSelectedJob(job)}
                />
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <aside className="careers__cta" aria-label="Join our team call to action">
            <h3 className="careers__cta-title">Passionate About Education?</h3>
            <p className="careers__cta-body">
              We're looking for tutors who care about student success. Apply now to
              join a team making a real difference in Bay Area students' lives.
            </p>
            <button
              className="btn-primary careers__cta-btn"
              onClick={() => setSelectedJob(JOBS[0])}
            >
              Apply Now
            </button>
          </aside>
        </div>
      </div>

      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  )
}
```

- [ ] **Step 2: Write `src/components/Careers/JobCard.jsx`**

```jsx
import useScrollReveal from '../../hooks/useScrollReveal'

export default function JobCard({ job, index, onViewDetails }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <article
      ref={ref}
      className={`job-card reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="job-card__header">
        <div>
          <h3 className="job-card__title">{job.title}</h3>
          <p className="job-card__location">{job.location}</p>
        </div>
        <span className="job-card__badge">{job.type}</span>
      </div>
      <p className="job-card__desc">{job.shortDesc}</p>
      <button
        className="job-card__link"
        onClick={onViewDetails}
        aria-label={`View details for ${job.title}`}
      >
        View Details →
      </button>
    </article>
  )
}
```

- [ ] **Step 3: Write `src/components/Careers/ApplyModal.jsx`**

```jsx
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { useToast } from '../../context/ToastContext'
import { validateEmail } from '../ContactForm/ContactForm'

export default function ApplyModal({ job, onClose }) {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})

  // Close on Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Trap body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!validateEmail(form.email)) next.email = 'Please enter a valid email'
    if (!form.message.trim()) next.message = 'Please include a message or cover letter'
    return next
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    const { error } = await supabase.from('career_applications').insert([{
      job_title: job.title,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      message: form.message.trim(),
    }])
    setLoading(false)

    if (error) {
      addToast('Something went wrong. Please try again.', 'error')
    } else {
      addToast('Application submitted! We\'ll be in touch soon.', 'success')
      onClose()
    }
  }

  return (
    <div
      className="modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal">
        <div className="modal__header">
          <div>
            <h2 id="modal-title" className="modal__title">Apply: {job.title}</h2>
            <p className="modal__subtitle">{job.location} &middot; {job.type}</p>
          </div>
          <button
            className="modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="modal__job-details">
          <p className="modal__job-desc">{job.fullDesc}</p>
          <ul className="modal__requirements">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
          {job.compensation && (
            <p className="modal__compensation">
              <strong>Compensation:</strong> {job.compensation}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="modal__form" noValidate>
          <div className="form-group">
            <label htmlFor="apply-name" className="form-label">Full Name *</label>
            <input id="apply-name" name="name" type="text" className={`form-input ${errors.name ? 'error' : ''}`} value={form.name} onChange={handleChange} placeholder="Jane Smith" autoComplete="name" />
            {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="apply-email" className="form-label">Email *</label>
            <input id="apply-email" name="email" type="email" className={`form-input ${errors.email ? 'error' : ''}`} value={form.email} onChange={handleChange} placeholder="jane@example.com" autoComplete="email" />
            {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="apply-phone" className="form-label">Phone <span className="form-label__optional">(optional)</span></label>
            <input id="apply-phone" name="phone" type="tel" className="form-input" value={form.phone} onChange={handleChange} placeholder="(415) 555-0123" autoComplete="tel" />
          </div>

          <div className="form-group">
            <label htmlFor="apply-message" className="form-label">Cover Letter / Message *</label>
            <textarea id="apply-message" name="message" className={`form-input ${errors.message ? 'error' : ''}`} style={{ minHeight: '120px', resize: 'vertical' }} value={form.message} onChange={handleChange} placeholder="Tell us about your teaching experience and why you want to join Study Prime..." />
            {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading} aria-busy={loading}>
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Write `src/components/Careers/Careers.css`**

```css
.careers {
  padding: var(--space-6) 0;
  background: var(--bg-secondary);
}

.careers__layout {
  display: grid;
  grid-template-columns: 65fr 35fr;
  gap: var(--space-4);
  align-items: start;
}

.careers__subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-top: 8px;
  margin-bottom: var(--space-4);
}

.careers__jobs {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Job card */
.job-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 20px;
  transition: border-color var(--transition-default),
              box-shadow var(--transition-default),
              transform var(--transition-default);
}

.job-card:hover {
  border-color: var(--accent);
  box-shadow: 0 8px 24px rgba(19, 174, 83, 0.15);
  transform: translateX(4px);
}

.job-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}

.job-card__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
}

.job-card__location {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 3px;
}

.job-card__badge {
  background: var(--accent-subtle-2);
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
}

.job-card__desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.job-card__link {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--accent);
  padding: 0;
  font-family: var(--font-primary);
  transition: opacity var(--transition-fast);
}

.job-card__link:hover {
  opacity: 0.8;
}

/* CTA card */
.careers__cta {
  background: var(--bg-primary);
  border: 2px solid var(--accent);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  position: sticky;
  top: calc(var(--nav-height) + 20px);
}

.careers__cta-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.careers__cta-body {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
}

.careers__cta-btn {
  width: 100%;
  justify-content: center;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  backdrop-filter: blur(4px);
}

.modal {
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-default);
  width: 100%;
  max-width: 580px;
  max-height: 90vh;
  overflow-y: auto;
  padding: var(--space-4);
  animation: modal-in 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modal-in {
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.modal__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: var(--space-3);
}

.modal__title {
  font-size: 1.25rem;
  font-weight: 600;
}

.modal__subtitle {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 4px;
}

.modal__close {
  font-size: 1.75rem;
  color: var(--text-secondary);
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
  padding: 0 4px;
  flex-shrink: 0;
  transition: color var(--transition-fast);
}

.modal__close:hover {
  color: var(--text-primary);
}

.modal__job-details {
  background: var(--bg-primary);
  border-radius: var(--radius-sm);
  padding: var(--space-3);
  margin-bottom: var(--space-3);
}

.modal__job-desc {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.modal__requirements {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.modal__requirements li {
  font-size: 0.875rem;
  color: var(--text-secondary);
  padding-left: 20px;
  position: relative;
}

.modal__requirements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 600;
}

.modal__compensation {
  font-size: 0.875rem;
  color: var(--text-primary);
}

.modal__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 1024px) {
  .careers__layout {
    grid-template-columns: 1fr;
  }

  .careers__cta {
    position: static;
    order: -1;
  }
}

@media (max-width: 640px) {
  .careers {
    padding: var(--space-5) 0;
  }
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Careers/
git commit -m "feat: add Careers section with job listings and apply modal"
```

---

## Task 17: HomePage Assembly

**Files:**
- Modify: `src/pages/HomePage.jsx`

- [ ] **Step 1: Write `src/pages/HomePage.jsx`**

```jsx
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import ResultsCarousel from '../components/ResultsCarousel/ResultsCarousel'
import Stats from '../components/Stats/Stats'
import FAQ from '../components/FAQ/FAQ'
import ContactForm from '../components/ContactForm/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ResultsCarousel />
      <Stats />
      <FAQ limit={6} />
      <ContactForm />
    </>
  )
}
```

- [ ] **Step 2: Verify the home page renders all sections**

```bash
npm run dev
```

Open `http://localhost:5173` — all sections should render: Hero, Services grid, Results carousel scrolling, Stats with count-up, FAQ accordion, Contact form.

- [ ] **Step 3: Commit**

```bash
git add src/pages/HomePage.jsx
git commit -m "feat: assemble HomePage with all sections"
```

---

## Task 18: Auth Pages (Sign In / Sign Up / OTP / Forgot Password)

**Files:**
- Modify: `src/pages/SignInPage.jsx`
- Create: `src/pages/SignInPage.css`

- [ ] **Step 1: Write `src/pages/SignInPage.jsx`**

```jsx
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { validateEmail } from '../components/ContactForm/ContactForm'
import './SignInPage.css'

// Sub-views
const VIEW = {
  SIGN_IN: 'sign_in',
  SIGN_UP: 'sign_up',
  OTP: 'otp',
  FORGOT: 'forgot',
  RESET: 'reset',
}

// --- Sign In View ---
function SignInView({ onSwitch }) {
  const navigate = useNavigate()
  const { addToast } = useToast()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  function validate() {
    const next = {}
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!validateEmail(form.email)) next.email = 'Enter a valid email'
    if (!form.password) next.password = 'Password is required'
    return next
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email.trim(),
      password: form.password,
    })
    setLoading(false)

    if (error) {
      setErrors({ password: error.message || 'Invalid email or password' })
    } else {
      navigate('/')
    }
  }

  async function handleGoogleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    })
  }

  return (
    <div className="auth-card">
      <h1 className="auth-card__title">Welcome Back</h1>
      <p className="auth-card__subtitle">Sign in to your Study Prime account</p>

      <button className="btn-google" onClick={handleGoogleSignIn} type="button">
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.79h5.38a4.6 4.6 0 01-2 3.02v2.5h3.24c1.9-1.75 3-4.33 3-7.31z" fill="#4285F4"/>
          <path d="M10 20c2.7 0 4.96-.9 6.62-2.43l-3.24-2.51c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.75-5.59-4.12H1.08v2.59A10 10 0 0010 20z" fill="#34A853"/>
          <path d="M4.41 11.9A6.02 6.02 0 014.1 10c0-.66.11-1.3.31-1.9V5.51H1.08A10 10 0 000 10c0 1.61.38 3.13 1.08 4.49l3.33-2.59z" fill="#FBBC05"/>
          <path d="M10 3.96c1.47 0 2.79.5 3.83 1.5l2.86-2.86C14.96.99 12.7 0 10 0 6.09 0 2.72 2.19 1.08 5.51l3.33 2.59C5.2 5.72 7.4 3.96 10 3.96z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>

      <div className="auth-divider"><span>or</span></div>

      <form onSubmit={handleSubmit} noValidate className="auth-form">
        <div className="form-group">
          <label htmlFor="signin-email" className="form-label">Email</label>
          <input id="signin-email" name="email" type="email" className={`form-input ${errors.email ? 'error' : ''}`} value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" />
          {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
        </div>

        <div className="form-group">
          <div className="auth-form__label-row">
            <label htmlFor="signin-password" className="form-label">Password</label>
            <button type="button" className="auth-link" onClick={() => onSwitch(VIEW.FORGOT)}>
              Forgot password?
            </button>
          </div>
          <input id="signin-password" name="password" type="password" className={`form-input ${errors.password ? 'error' : ''}`} value={form.password} onChange={handleChange} placeholder="••••••••" autoComplete="current-password" />
          {errors.password && <span className="form-error" role="alert">{errors.password}</span>}
        </div>

        <button type="submit" className="btn-primary auth-form__submit" disabled={loading} aria-busy={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <p className="auth-card__switch">
        Don't have an account?{' '}
        <button type="button" className="auth-link" onClick={() => onSwitch(VIEW.SIGN_UP)}>
          Sign up
        </button>
      </p>
    </div>
  )
}

// --- Sign Up View ---
function SignUpView({ onSwitch, onOTPSent }) {
  const { addToast } = useToast()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!validateEmail(form.email)) next.email = 'Enter a valid email'
    if (!form.password) next.password = 'Password is required'
    else if (form.password.length < 8) next.password = 'Password must be at least 8 characters'
    if (form.password !== form.confirmPassword) next.confirmPassword = 'Passwords do not match'
    return next
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: form.email.trim(),
      password: form.password,
      options: {
        data: { full_name: form.name.trim() },
      },
    })
    setLoading(false)

    if (error) {
      addToast(error.message || 'Sign up failed. Please try again.', 'error')
    } else {
      onOTPSent(form.email.trim())
    }
  }

  async function handleGoogleSignUp() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    })
  }

  return (
    <div className="auth-card">
      <h1 className="auth-card__title">Create Account</h1>
      <p className="auth-card__subtitle">Join Study Prime and start your journey</p>

      <button className="btn-google" onClick={handleGoogleSignUp} type="button">
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.79h5.38a4.6 4.6 0 01-2 3.02v2.5h3.24c1.9-1.75 3-4.33 3-7.31z" fill="#4285F4"/>
          <path d="M10 20c2.7 0 4.96-.9 6.62-2.43l-3.24-2.51c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.75-5.59-4.12H1.08v2.59A10 10 0 0010 20z" fill="#34A853"/>
          <path d="M4.41 11.9A6.02 6.02 0 014.1 10c0-.66.11-1.3.31-1.9V5.51H1.08A10 10 0 000 10c0 1.61.38 3.13 1.08 4.49l3.33-2.59z" fill="#FBBC05"/>
          <path d="M10 3.96c1.47 0 2.79.5 3.83 1.5l2.86-2.86C14.96.99 12.7 0 10 0 6.09 0 2.72 2.19 1.08 5.51l3.33 2.59C5.2 5.72 7.4 3.96 10 3.96z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>

      <div className="auth-divider"><span>or</span></div>

      <form onSubmit={handleSubmit} noValidate className="auth-form">
        <div className="form-group">
          <label htmlFor="signup-name" className="form-label">Full Name</label>
          <input id="signup-name" name="name" type="text" className={`form-input ${errors.name ? 'error' : ''}`} value={form.name} onChange={handleChange} placeholder="Jane Smith" autoComplete="name" />
          {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="signup-email" className="form-label">Email</label>
          <input id="signup-email" name="email" type="email" className={`form-input ${errors.email ? 'error' : ''}`} value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" />
          {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="signup-password" className="form-label">Password</label>
          <input id="signup-password" name="password" type="password" className={`form-input ${errors.password ? 'error' : ''}`} value={form.password} onChange={handleChange} placeholder="At least 8 characters" autoComplete="new-password" />
          {errors.password && <span className="form-error" role="alert">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="signup-confirm" className="form-label">Confirm Password</label>
          <input id="signup-confirm" name="confirmPassword" type="password" className={`form-input ${errors.confirmPassword ? 'error' : ''}`} value={form.confirmPassword} onChange={handleChange} placeholder="Repeat password" autoComplete="new-password" />
          {errors.confirmPassword && <span className="form-error" role="alert">{errors.confirmPassword}</span>}
        </div>

        <button type="submit" className="btn-primary auth-form__submit" disabled={loading} aria-busy={loading}>
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
      </form>

      <p className="auth-card__switch">
        Already have an account?{' '}
        <button type="button" className="auth-link" onClick={() => onSwitch(VIEW.SIGN_IN)}>
          Sign in
        </button>
      </p>
    </div>
  )
}

// --- OTP Verification View ---
function OTPView({ email, onSuccess }) {
  const navigate = useNavigate()
  const { addToast } = useToast()
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [resending, setResending] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!otp.trim()) { setError('Enter the 6-digit code'); return }

    setLoading(true)
    const { error: verifyError } = await supabase.auth.verifyOtp({
      email,
      token: otp.trim(),
      type: 'signup',
    })
    setLoading(false)

    if (verifyError) {
      setError(verifyError.message || 'Invalid or expired code. Try again.')
    } else {
      addToast('Account verified! Welcome to Study Prime.', 'success')
      navigate('/')
    }
  }

  async function handleResend() {
    setResending(true)
    await supabase.auth.resend({ type: 'signup', email })
    setResending(false)
    addToast('Verification code resent to ' + email, 'success')
  }

  return (
    <div className="auth-card">
      <h1 className="auth-card__title">Check Your Email</h1>
      <p className="auth-card__subtitle">
        We sent a 6-digit code to <strong>{email}</strong>. Enter it below to verify your account.
      </p>

      <form onSubmit={handleSubmit} noValidate className="auth-form">
        <div className="form-group">
          <label htmlFor="otp-code" className="form-label">Verification Code</label>
          <input
            id="otp-code"
            type="text"
            inputMode="numeric"
            maxLength={6}
            className={`form-input auth-otp-input ${error ? 'error' : ''}`}
            value={otp}
            onChange={e => { setOtp(e.target.value.replace(/\D/g, '')); setError('') }}
            placeholder="000000"
            autoComplete="one-time-code"
            aria-describedby={error ? 'otp-error' : undefined}
          />
          {error && <span id="otp-error" className="form-error" role="alert">{error}</span>}
        </div>

        <button type="submit" className="btn-primary auth-form__submit" disabled={loading} aria-busy={loading}>
          {loading ? 'Verifying...' : 'Verify Account'}
        </button>
      </form>

      <p className="auth-card__switch">
        Didn't get the code?{' '}
        <button type="button" className="auth-link" onClick={handleResend} disabled={resending}>
          {resending ? 'Resending...' : 'Resend code'}
        </button>
      </p>
    </div>
  )
}

// --- Forgot Password View ---
function ForgotView({ onSwitch, onResetSent }) {
  const { addToast } = useToast()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) { setError('Email is required'); return }
    if (!validateEmail(email)) { setError('Enter a valid email'); return }

    setLoading(true)
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/sign-in`,
    })
    setLoading(false)

    if (resetError) {
      addToast(resetError.message || 'Something went wrong.', 'error')
    } else {
      addToast('Reset code sent to ' + email, 'success')
      onResetSent(email.trim())
    }
  }

  return (
    <div className="auth-card">
      <h1 className="auth-card__title">Reset Password</h1>
      <p className="auth-card__subtitle">
        Enter your email and we'll send you a reset code.
      </p>

      <form onSubmit={handleSubmit} noValidate className="auth-form">
        <div className="form-group">
          <label htmlFor="forgot-email" className="form-label">Email</label>
          <input id="forgot-email" type="email" className={`form-input ${error ? 'error' : ''}`} value={email} onChange={e => { setEmail(e.target.value); setError('') }} placeholder="you@example.com" autoComplete="email" />
          {error && <span className="form-error" role="alert">{error}</span>}
        </div>

        <button type="submit" className="btn-primary auth-form__submit" disabled={loading} aria-busy={loading}>
          {loading ? 'Sending...' : 'Send Reset Code'}
        </button>
      </form>

      <p className="auth-card__switch">
        Remember it?{' '}
        <button type="button" className="auth-link" onClick={() => onSwitch(VIEW.SIGN_IN)}>
          Back to Sign In
        </button>
      </p>
    </div>
  )
}

// --- Reset Password View (after OTP) ---
function ResetPasswordView({ email }) {
  const navigate = useNavigate()
  const { addToast } = useToast()
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const next = {}
    if (!otp.trim()) next.otp = 'Enter the reset code'
    if (!password) next.password = 'Enter a new password'
    else if (password.length < 8) next.password = 'Password must be at least 8 characters'
    if (password !== confirmPassword) next.confirmPassword = 'Passwords do not match'
    if (Object.keys(next).length > 0) { setErrors(next); return }

    setLoading(true)

    // Verify the recovery OTP first
    const { error: otpError } = await supabase.auth.verifyOtp({
      email,
      token: otp.trim(),
      type: 'recovery',
    })

    if (otpError) {
      setLoading(false)
      setErrors({ otp: otpError.message || 'Invalid or expired code' })
      return
    }

    // Now update the password
    const { error: updateError } = await supabase.auth.updateUser({ password })
    setLoading(false)

    if (updateError) {
      addToast(updateError.message || 'Failed to update password.', 'error')
    } else {
      addToast('Password updated successfully!', 'success')
      navigate('/')
    }
  }

  return (
    <div className="auth-card">
      <h1 className="auth-card__title">Set New Password</h1>
      <p className="auth-card__subtitle">
        Enter the code we sent to <strong>{email}</strong>, then choose a new password.
      </p>

      <form onSubmit={handleSubmit} noValidate className="auth-form">
        <div className="form-group">
          <label htmlFor="reset-otp" className="form-label">Reset Code</label>
          <input id="reset-otp" type="text" inputMode="numeric" maxLength={6} className={`form-input auth-otp-input ${errors.otp ? 'error' : ''}`} value={otp} onChange={e => { setOtp(e.target.value.replace(/\D/g, '')); if (errors.otp) setErrors(p => ({ ...p, otp: '' })) }} placeholder="000000" autoComplete="one-time-code" />
          {errors.otp && <span className="form-error" role="alert">{errors.otp}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="reset-password" className="form-label">New Password</label>
          <input id="reset-password" type="password" className={`form-input ${errors.password ? 'error' : ''}`} value={password} onChange={e => { setPassword(e.target.value); if (errors.password) setErrors(p => ({ ...p, password: '' })) }} placeholder="At least 8 characters" autoComplete="new-password" />
          {errors.password && <span className="form-error" role="alert">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="reset-confirm" className="form-label">Confirm New Password</label>
          <input id="reset-confirm" type="password" className={`form-input ${errors.confirmPassword ? 'error' : ''}`} value={confirmPassword} onChange={e => { setConfirmPassword(e.target.value); if (errors.confirmPassword) setErrors(p => ({ ...p, confirmPassword: '' })) }} placeholder="Repeat password" autoComplete="new-password" />
          {errors.confirmPassword && <span className="form-error" role="alert">{errors.confirmPassword}</span>}
        </div>

        <button type="submit" className="btn-primary auth-form__submit" disabled={loading} aria-busy={loading}>
          {loading ? 'Updating...' : 'Update Password'}
        </button>
      </form>
    </div>
  )
}

// --- Main SignInPage ---
export default function SignInPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [view, setView] = useState(VIEW.SIGN_IN)
  const [pendingEmail, setPendingEmail] = useState('')

  // Redirect if already logged in
  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])

  function handleOTPSent(email) {
    setPendingEmail(email)
    setView(VIEW.OTP)
  }

  function handleResetSent(email) {
    setPendingEmail(email)
    setView(VIEW.RESET)
  }

  return (
    <div className="sign-in-page">
      <div className="sign-in-page__inner">
        <Link to="/" className="sign-in-page__logo">
          Study <span className="sign-in-page__logo-accent">Prime</span>
        </Link>

        {view === VIEW.SIGN_IN && (
          <SignInView onSwitch={setView} />
        )}
        {view === VIEW.SIGN_UP && (
          <SignUpView onSwitch={setView} onOTPSent={handleOTPSent} />
        )}
        {view === VIEW.OTP && (
          <OTPView email={pendingEmail} onSuccess={() => navigate('/')} />
        )}
        {view === VIEW.FORGOT && (
          <ForgotView onSwitch={setView} onResetSent={handleResetSent} />
        )}
        {view === VIEW.RESET && (
          <ResetPasswordView email={pendingEmail} />
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Write `src/pages/SignInPage.css`**

```css
.sign-in-page {
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-5) 20px;
}

.sign-in-page__inner {
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.sign-in-page__logo {
  font-family: var(--font-primary);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
}

.sign-in-page__logo-accent {
  font-family: var(--font-accent);
  font-style: italic;
  color: var(--accent);
}

/* Auth card */
.auth-card {
  width: 100%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-4);
}

.auth-card__title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
}

.auth-card__subtitle {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: var(--space-3);
  line-height: 1.5;
}

.auth-card__switch {
  text-align: center;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: var(--space-3);
}

/* Google button */
.btn-google {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 24px;
  background: var(--bg-primary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: 0.9375rem;
  font-weight: 500;
  font-family: var(--font-primary);
  cursor: pointer;
  transition: border-color var(--transition-fast), background var(--transition-fast);
}

.btn-google:hover {
  border-color: var(--text-secondary);
  background: var(--bg-hover);
}

/* Divider */
.auth-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: var(--space-3) 0;
  color: var(--text-tertiary);
  font-size: 0.875rem;
}

.auth-divider::before,
.auth-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border-default);
}

/* Auth form */
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.auth-form__label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.auth-form__label-row .form-label {
  margin-bottom: 0;
}

.auth-form__submit {
  width: 100%;
  justify-content: center;
  padding: 13px 32px;
  margin-top: 4px;
}

/* Auth link (inline text buttons) */
.auth-link {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--accent);
  font-size: inherit;
  font-family: var(--font-primary);
  font-weight: 500;
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: opacity var(--transition-fast);
}

.auth-link:hover {
  opacity: 0.8;
}

.auth-link:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* OTP input */
.auth-otp-input {
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0.3em;
  font-weight: 600;
}
```

- [ ] **Step 3: Test sign-in page renders and switches views**

```bash
npm run dev
```

Navigate to `http://localhost:5173/sign-in`. Verify:
1. Sign In form displays with Google button
2. Clicking "Sign up" switches to Sign Up view
3. Clicking "Forgot password?" switches to Forgot Password view
4. All forms have proper field labels and error display areas

- [ ] **Step 4: Commit**

```bash
git add src/pages/SignInPage.jsx src/pages/SignInPage.css
git commit -m "feat: add Auth pages with sign-in, sign-up, OTP verification, and forgot password"
```

---

## Task 19: Sub-pages

**Files:**
- Modify: `src/pages/ServicesPage.jsx`, `src/pages/ResultsPage.jsx`, `src/pages/FAQPage.jsx`, `src/pages/ContactPage.jsx`, `src/pages/CareersPage.jsx`

- [ ] **Step 1: Write `src/pages/ServicesPage.jsx`**

```jsx
import Services from '../components/Services/Services'

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <div className="container" style={{ paddingTop: '40px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '8px' }}>Our Services</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto 60px' }}>
          Expert tutoring tailored to every student's needs and goals.
        </p>
      </div>
      <Services />
    </div>
  )
}
```

- [ ] **Step 2: Write `src/pages/ResultsPage.jsx`**

```jsx
import ResultsCarousel from '../components/ResultsCarousel/ResultsCarousel'
import Stats from '../components/Stats/Stats'

export default function ResultsPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <div className="container" style={{ paddingTop: '40px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '8px' }}>Student Results</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto 60px' }}>
          Real results from real students across the Bay Area.
        </p>
      </div>
      <Stats />
      <ResultsCarousel />
    </div>
  )
}
```

- [ ] **Step 3: Write `src/pages/FAQPage.jsx`**

```jsx
import FAQ from '../components/FAQ/FAQ'

export default function FAQPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <FAQ />
    </div>
  )
}
```

- [ ] **Step 4: Write `src/pages/ContactPage.jsx`**

```jsx
import ContactForm from '../components/ContactForm/ContactForm'

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <ContactForm />
    </div>
  )
}
```

- [ ] **Step 5: Write `src/pages/CareersPage.jsx`**

```jsx
import Careers from '../components/Careers/Careers'

export default function CareersPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <Careers />
    </div>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add src/pages/
git commit -m "feat: add all sub-pages (Services, Results, FAQ, Contact, Careers)"
```

---

## Task 20: Final Polish + Build Verification

- [ ] **Step 1: Add FAQ JSON-LD schema to index.html**

Open `index.html` and add before the closing `</head>` tag:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to see results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most students see meaningful improvement within 4-8 weeks of consistent sessions. For standardized test prep, we recommend starting at least 3 months before your test date."
      }
    },
    {
      "@type": "Question",
      "name": "What subjects do you tutor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SAT prep, ACT prep, Mathematics (K-12 through calculus), English, Biology, Chemistry, Physics, History, and Languages including Spanish, French, and Mandarin."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer a free consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer a free 20-minute consultation to discuss your goals and match you with the right tutor."
      }
    }
  ]
}
</script>
```

- [ ] **Step 2: Verify all routes work**

```bash
npm run dev
```

Check each route loads correctly:
- `/` — Hero + all sections
- `/services` — Services page
- `/results` — Results + Stats
- `/faq` — Full FAQ
- `/contact` — Contact form
- `/careers` — Job listings
- `/sign-in` — Auth page

- [ ] **Step 3: Verify carousel pauses on hover**

On homepage, hover over the review carousel — it should stop scrolling.

- [ ] **Step 4: Verify count-up animations trigger on scroll**

Scroll down to the Stats section — numbers should count up from 0 when they enter the viewport.

- [ ] **Step 5: Verify FAQ keyboard navigation**

Tab to an FAQ item and press Enter to open it. Press Enter again to close.

- [ ] **Step 6: Run production build and check for errors**

```bash
npm run build
```

Expected: Build completes successfully with no errors. Check `dist/` directory is created.

- [ ] **Step 7: Preview production build**

```bash
npm run preview
```

Open `http://localhost:4173` and verify the production build works identically to dev.

- [ ] **Step 8: Run all tests**

```bash
npm test
```

Expected: All tests pass.

- [ ] **Step 9: Final commit**

```bash
git add -A
git commit -m "feat: complete Study Prime v1.0 — all sections, auth, Supabase integration"
```

---

## Self-Review: Spec Coverage Check

| Spec Requirement | Covered By |
|---|---|
| Dark mode, flat colors, CSS variables | Task 2 |
| Instrument Sans + Serif fonts | Task 1 (index.html) |
| Sticky navbar, hover underlines, mobile hamburger | Task 7 |
| Hero with staggered animations + scroll hint | Task 10 |
| 6 service cards, hover effects, scroll reveal | Task 11 |
| Infinite auto-scroll carousel, pause on hover, 15 reviews | Task 12 |
| Stats section with count-up on scroll | Task 13 |
| FAQ accordion, ARIA, keyboard nav, JSON-LD schema | Task 14, Task 20 |
| Contact form, Supabase submission, validation, toast | Task 15 |
| Careers with job cards, modal, apply form, Supabase | Task 16 |
| Footer with nav links | Task 8 |
| React Router, lazy loading, all routes | Task 6 |
| Email/password sign in (no OTP on login) | Task 18 |
| Sign up with OTP email verification | Task 18 |
| Google OAuth | Task 18 |
| Forgot password with OTP | Task 18 |
| Supabase DB schema + RLS | Task 3 |
| Toast notifications | Task 4 |
| useScrollReveal hook | Task 9 |
| Mobile responsiveness | All component CSS |
| Accessibility (ARIA, focus, contrast) | All components |
