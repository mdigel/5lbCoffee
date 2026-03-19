'use client'

import { useEffect, useState } from "react"
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

    if (!key || key === 'YOUR_POSTHOG_PROJECT_API_KEY') {
      console.warn('[PostHog] Missing or placeholder API key — skipping init')
      return
    }

    if (!posthog.__loaded) {
      posthog.init(key, {
        api_host: host || 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: true,
        capture_pageleave: true,
        loaded: () => setInitialized(true),
      })
    }
  }, [])

  return (
    <PHProvider client={posthog}>
      {children}
    </PHProvider>
  )
}
