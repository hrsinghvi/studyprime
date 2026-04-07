import { describe, it, expect, vi, beforeEach } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FAQ from './FAQ'

beforeEach(() => {
  const mockObserver = {
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  }
  vi.stubGlobal('IntersectionObserver', vi.fn(() => mockObserver))
})

function renderFAQ(props = {}) {
  return render(<FAQ {...props} />)
}

describe('FAQ accordion', () => {
  it('renders FAQ questions', () => {
    renderFAQ({ limit: 3 })
    expect(screen.getByText('How long does it take to see results?')).toBeInTheDocument()
  })

  it('answers are hidden by default', () => {
    renderFAQ({ limit: 3 })
    const answer = screen.getByText(/Most students see meaningful improvement/)
    expect(answer.closest('[hidden]')).not.toBeNull()
  })

  it('clicking a question reveals its answer', async () => {
    const user = userEvent.setup()
    renderFAQ({ limit: 3 })
    const btn = screen.getByText('How long does it take to see results?').closest('button')
    await user.click(btn)
    const body = document.getElementById('faq-answer-0')
    expect(body).not.toHaveAttribute('hidden')
  })

  it('clicking an open question closes it', async () => {
    const user = userEvent.setup()
    renderFAQ({ limit: 3 })
    const btn = screen.getByText('How long does it take to see results?').closest('button')
    await user.click(btn)
    await user.click(btn)
    const body = document.getElementById('faq-answer-0')
    expect(body).toHaveAttribute('hidden')
  })

  it('opening one question closes any previously open question', async () => {
    const user = userEvent.setup()
    renderFAQ({ limit: 3 })
    const q1 = screen.getByText('How long does it take to see results?').closest('button')
    const q2 = screen.getByText('What subjects do you tutor?').closest('button')
    await user.click(q1)
    await user.click(q2)
    expect(document.getElementById('faq-answer-0')).toHaveAttribute('hidden')
    expect(document.getElementById('faq-answer-1')).not.toHaveAttribute('hidden')
  })

  it('limit prop limits the number of questions displayed', () => {
    renderFAQ({ limit: 2 })
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })

  it('shows all questions when limit prop is not provided', () => {
    renderFAQ()
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(10)
  })
})
