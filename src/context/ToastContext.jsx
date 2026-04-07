import React, { createContext, useContext, useReducer, useCallback } from 'react'
import '../components/Toast/Toast.css'

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
