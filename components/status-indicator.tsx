'use client'

import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  CheckCircle, 
  AlertCircle, 
  AlertTriangle, 
  Info, 
  Clock,
  XCircle 
} from 'lucide-react'
import { colors } from '@/lib/design-system'

export type StatusType = 'success' | 'warning' | 'error' | 'info' | 'pending' | 'neutral'

interface StatusIndicatorProps {
  type: StatusType
  title?: string
  message: string
  variant?: 'badge' | 'alert' | 'inline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const statusConfig = {
  success: {
    icon: CheckCircle,
    colors: {
      badge: 'bg-green-100 text-green-800 border-green-200',
      alert: 'border-green-200 bg-green-50',
      text: 'text-green-800',
      icon: 'text-green-600',
    },
  },
  warning: {
    icon: AlertTriangle,
    colors: {
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      alert: 'border-amber-200 bg-amber-50',
      text: 'text-amber-800',
      icon: 'text-amber-600',
    },
  },
  error: {
    icon: XCircle,
    colors: {
      badge: 'bg-red-100 text-red-800 border-red-200',
      alert: 'border-red-200 bg-red-50',
      text: 'text-red-800',
      icon: 'text-red-600',
    },
  },
  info: {
    icon: Info,
    colors: {
      badge: 'bg-blue-100 text-blue-800 border-blue-200',
      alert: 'border-blue-200 bg-blue-50',
      text: 'text-blue-800',
      icon: 'text-blue-600',
    },
  },
  pending: {
    icon: Clock,
    colors: {
      badge: 'bg-gray-100 text-gray-800 border-gray-200',
      alert: 'border-gray-200 bg-gray-50',
      text: 'text-gray-800',
      icon: 'text-gray-600',
    },
  },
  neutral: {
    icon: AlertCircle,
    colors: {
      badge: 'bg-gray-100 text-gray-800 border-gray-200',
      alert: 'border-gray-200 bg-gray-50',
      text: 'text-gray-800',
      icon: 'text-gray-600',
    },
  },
}

const sizeClasses = {
  sm: {
    icon: 'h-3 w-3',
    text: 'text-xs',
    badge: 'text-xs px-2 py-1',
  },
  md: {
    icon: 'h-4 w-4',
    text: 'text-sm',
    badge: 'text-sm px-3 py-1',
  },
  lg: {
    icon: 'h-5 w-5',
    text: 'text-base',
    badge: 'text-base px-4 py-2',
  },
}

export default function StatusIndicator({
  type,
  title,
  message,
  variant = 'alert',
  size = 'md',
  className = ''
}: StatusIndicatorProps) {
  const config = statusConfig[type]
  const Icon = config.icon
  const sizeClass = sizeClasses[size]

  if (variant === 'badge') {
    return (
      <Badge 
        variant="outline" 
        className={`${config.colors.badge} ${sizeClass.badge} flex items-center gap-1 ${className}`}
      >
        <Icon className={sizeClass.icon} />
        {message}
      </Badge>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Icon className={`${sizeClass.icon} ${config.colors.icon}`} />
        <span className={`${sizeClass.text} ${config.colors.text}`}>
          {message}
        </span>
      </div>
    )
  }

  return (
    <Alert className={`${config.colors.alert} ${className}`}>
      <Icon className={`${sizeClass.icon} ${config.colors.icon}`} />
      {title && (
        <div className={`font-semibold ${config.colors.text} mb-1`}>
          {title}
        </div>
      )}
      <AlertDescription className={config.colors.text}>
        {message}
      </AlertDescription>
    </Alert>
  )
}