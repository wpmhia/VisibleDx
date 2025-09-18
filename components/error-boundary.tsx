'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  Copy,
  CheckCircle 
} from 'lucide-react'

interface ErrorBoundaryProps {
  error?: Error
  reset?: () => void
  children?: React.ReactNode
}

interface ErrorRecoveryProps {
  error: Error
  onRetry: () => void
  onGoHome: () => void
  showDetails?: boolean
}

export function ErrorRecovery({ 
  error, 
  onRetry, 
  onGoHome, 
  showDetails = false 
}: ErrorRecoveryProps) {
  const [copied, setCopied] = useState(false)
  const [detailsVisible, setDetailsVisible] = useState(showDetails)

  const copyErrorDetails = async () => {
    const errorInfo = `
Error: ${error.message}
Stack: ${error.stack}
Timestamp: ${new Date().toISOString()}
User Agent: ${navigator.userAgent}
URL: ${window.location.href}
    `.trim()

    try {
      await navigator.clipboard.writeText(errorInfo)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy error details:', err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="max-w-lg w-full">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle className="text-xl text-gray-900">
            Something went wrong
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              An unexpected error occurred in the training module. Your progress has been saved where possible.
            </AlertDescription>
          </Alert>

          <div className="flex flex-col gap-3">
            <Button onClick={onRetry} className="w-full flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
            <Button variant="outline" onClick={onGoHome} className="w-full flex items-center gap-2">
              <Home className="h-4 w-4" />
              Go to Home
            </Button>
          </div>

          <div className="border-t pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDetailsVisible(!detailsVisible)}
              className="w-full flex items-center gap-2"
            >
              <Bug className="h-4 w-4" />
              {detailsVisible ? 'Hide' : 'Show'} Technical Details
            </Button>

            {detailsVisible && (
              <div className="mt-3 space-y-3">
                <div className="bg-gray-100 p-3 rounded-md">
                  <p className="text-sm font-medium text-gray-700 mb-1">Error Message:</p>
                  <p className="text-xs text-gray-600 font-mono break-all">
                    {error.message}
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyErrorDetails}
                  className="w-full flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy Error Details
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Share these details with technical support if the problem persists.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Simple error boundary hook
export function useErrorBoundary() {
  const [error, setError] = useState<Error | null>(null)

  const resetError = () => setError(null)

  const captureError = (error: Error) => {
    console.error('Captured error:', error)
    setError(error)
  }

  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason)
      if (event.reason instanceof Error) {
        captureError(event.reason)
      } else {
        captureError(new Error(String(event.reason)))
      }
    }

    const handleError = (event: ErrorEvent) => {
      console.error('Global error:', event.error)
      captureError(event.error || new Error(event.message))
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    window.addEventListener('error', handleError)

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      window.removeEventListener('error', handleError)
    }
  }, [])

  return { error, resetError, captureError }
}

// Network error component
interface NetworkErrorProps {
  onRetry: () => void
  isRetrying?: boolean
}

export function NetworkError({ onRetry, isRetrying = false }: NetworkErrorProps) {
  return (
    <Alert className="border-amber-200 bg-amber-50">
      <AlertTriangle className="h-4 w-4 text-amber-600" />
      <AlertDescription className="text-amber-800 flex items-center justify-between">
        <span>Network error - Please check your connection and try again.</span>
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          disabled={isRetrying}
          className="ml-4"
        >
          {isRetrying ? (
            <>
              <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
              Retrying...
            </>
          ) : (
            <>
              <RefreshCw className="h-3 w-3 mr-1" />
              Retry
            </>
          )}
        </Button>
      </AlertDescription>
    </Alert>
  )
}

// Validation error component
interface ValidationErrorsProps {
  errors: string[]
  onFixErrors?: () => void
}

export function ValidationErrors({ errors, onFixErrors }: ValidationErrorsProps) {
  if (errors.length === 0) return null

  return (
    <Alert className="border-red-200 bg-red-50">
      <AlertTriangle className="h-4 w-4 text-red-600" />
      <AlertDescription className="text-red-800">
        <div className="space-y-2">
          <p className="font-medium">Please fix the following errors:</p>
          <ul className="text-sm space-y-1">
            {errors.map((error, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>{error}</span>
              </li>
            ))}
          </ul>
          {onFixErrors && (
            <Button
              variant="outline"
              size="sm"
              onClick={onFixErrors}
              className="mt-2"
            >
              Help me fix these
            </Button>
          )}
        </div>
      </AlertDescription>
    </Alert>
  )
}