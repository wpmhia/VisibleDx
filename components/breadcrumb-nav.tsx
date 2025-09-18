'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { useTranslation } from '@/lib/language-context'

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function BreadcrumbNav({ items, className = '' }: BreadcrumbNavProps) {
  const { t } = useTranslation()

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-1 text-sm ${className}`}>
      {/* Home Link */}
      <Link 
        href="/" 
        className="text-gray-500 hover:text-gray-700 transition-colors flex items-center"
        aria-label="Go to homepage"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {items.length > 0 && <ChevronRight className="h-4 w-4 text-gray-400" />}
      
      {/* Breadcrumb Items */}
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {item.current ? (
            <span 
              className="text-gray-900 font-medium"
              aria-current="page"
            >
              {item.label}
            </span>
          ) : (
            <Link 
              href={item.href}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              {item.label}
            </Link>
          )}
          
          {index < items.length - 1 && (
            <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
          )}
        </div>
      ))}
    </nav>
  )
}