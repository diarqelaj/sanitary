'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      autoRaf: true,   // ← Lenis manages its own RAF, no manual loop needed
    })

    return () => lenis.destroy()
  }, [])

  return null
}