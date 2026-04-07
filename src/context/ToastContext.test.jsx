import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToastProvider, useToast } from './ToastContext'

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
