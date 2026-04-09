import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
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
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const LocalCityPage = lazy(() => import('./pages/LocalCityPage'))
const SATPage = lazy(() => import('./pages/SATPage'))
const ACTPage = lazy(() => import('./pages/ACTPage'))
const MathPage = lazy(() => import('./pages/MathPage'))
const EnglishPage = lazy(() => import('./pages/EnglishPage'))
const SciencePage = lazy(() => import('./pages/SciencePage'))

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
    <HelmetProvider>
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
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/tutoring/:city" element={<LocalCityPage />} />
                <Route path="/sat-prep" element={<SATPage />} />
                <Route path="/act-prep" element={<ACTPage />} />
                <Route path="/math-tutoring" element={<MathPage />} />
                <Route path="/english-tutoring" element={<EnglishPage />} />
                <Route path="/science-tutoring" element={<SciencePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
    </HelmetProvider>
  )
}
