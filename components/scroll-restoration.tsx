'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollRestoration() {
  const pathname = usePathname()

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo(0, 0)
    
    // Also disable scroll anchoring globally
    if (typeof window !== 'undefined' && document.documentElement) {
      document.documentElement.style.scrollBehavior = 'auto'
      // Reset scroll anchoring
      document.documentElement.style.setProperty('overflow-anchor', 'none')
    }
  }, [pathname])

  useEffect(() => {
    // Disable scroll anchoring on mount
    if (typeof window !== 'undefined' && document.documentElement) {
      document.documentElement.style.setProperty('overflow-anchor', 'none')
    }
  }, [])

  return null
}