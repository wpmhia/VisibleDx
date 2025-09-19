import React from 'react'

interface VirusIconProps {
  className?: string
  size?: number
}

export function VirusIcon({ className = "", size = 24 }: VirusIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Central virus body */}
      <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.1" />
      
      {/* Surface proteins/spikes around the virus */}
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      <circle cx="17" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="17" r="1.5" fill="currentColor" />
      <circle cx="7" cy="12" r="1.5" fill="currentColor" />
      <circle cx="15" cy="9" r="1" fill="currentColor" />
      <circle cx="15" cy="15" r="1" fill="currentColor" />
      <circle cx="9" cy="15" r="1" fill="currentColor" />
      <circle cx="9" cy="9" r="1" fill="currentColor" />
      
      {/* Internal structure */}
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="11" cy="11" r="0.5" fill="currentColor" />
      <circle cx="13" cy="13" r="0.5" fill="currentColor" />
    </svg>
  )
}