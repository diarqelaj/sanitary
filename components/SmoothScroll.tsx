'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll() {
  useEffect(() => {
  const lenis = new Lenis({
  lerp: 0.12,
  smoothWheel: true,
})
    // log every scroll event
    lenis.on('scroll', ({ scroll, velocity, direction, progress }: {
      scroll: number
      velocity: number
      direction: number
      progress: number
    }) => {
      console.log('[lenis scroll]', {
        scroll: scroll.toFixed(2),
        velocity: velocity.toFixed(4),  // watch this → should approach 0 smoothly
        direction,
        progress: progress.toFixed(4),
      })
    })

    let rafId: number
    let frameCount = 0

    function raf(time: number) {
      frameCount++
      const before = performance.now()
      lenis.raf(time)
      const after = performance.now()

      // log if a single frame takes too long — indicates jank
      if (after - before > 4) {
        console.warn(`[lenis] slow frame #${frameCount}: ${(after - before).toFixed(2)}ms`)
      }

      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      console.log('[lenis] destroyed')
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null
}