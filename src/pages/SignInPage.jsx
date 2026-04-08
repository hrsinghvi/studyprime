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
          StudyPrime
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
