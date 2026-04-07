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
