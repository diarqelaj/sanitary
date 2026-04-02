'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export function SmoothScroll() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1.5,        // how long the smoothing takes in seconds
      effects: true,      // enables data-speed / data-lag attributes
      smoothTouch: 0.1,   // slight smoothing on touch devices
    })

    return () => smoother.kill()
  }, [])

  return null
}