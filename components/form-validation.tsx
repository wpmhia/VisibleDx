'use client'

import { useState, useEffect } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { AlertTriangle, CheckCircle } from 'lucide-react'

export interface ValidationRule {
  field: string
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => string | null
  message?: string
}

export interface ValidationError {
  field: string
  message: string
}

interface FormValidationProps {
  data: Record<string, any>
  rules: ValidationRule[]
  onValidationChange?: (isValid: boolean, errors: ValidationError[]) => void
  showErrors?: boolean
  className?: string
}

export function validateForm(data: Record<string, any>, rules: ValidationRule[]): ValidationError[] {
  const errors: ValidationError[] = []

  rules.forEach(rule => {
    const value = data[rule.field]
    
    // Required field validation
    if (rule.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
      errors.push({
        field: rule.field,
        message: rule.message || `${rule.field} is required`
      })
      return
    }

    // Skip other validations if field is empty and not required
    if (!value) return

    // Min length validation
    if (rule.minLength && typeof value === 'string' && value.length < rule.minLength) {
      errors.push({
        field: rule.field,
        message: rule.message || `${rule.field} must be at least ${rule.minLength} characters`
      })
    }

    // Max length validation
    if (rule.maxLength && typeof value === 'string' && value.length > rule.maxLength) {
      errors.push({
        field: rule.field,
        message: rule.message || `${rule.field} must not exceed ${rule.maxLength} characters`
      })
    }

    // Pattern validation
    if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
      errors.push({
        field: rule.field,
        message: rule.message || `${rule.field} format is invalid`
      })
    }

    // Custom validation
    if (rule.custom) {
      const customError = rule.custom(value)
      if (customError) {
        errors.push({
          field: rule.field,
          message: customError
        })
      }
    }
  })

  return errors
}

export default function FormValidation({
  data,
  rules,
  onValidationChange,
  showErrors = true,
  className = ''
}: FormValidationProps) {
  const [errors, setErrors] = useState<ValidationError[]>([])

  useEffect(() => {
    const validationErrors = validateForm(data, rules)
    setErrors(validationErrors)
    onValidationChange?.(validationErrors.length === 0, validationErrors)
  }, [data, rules, onValidationChange])

  if (!showErrors || errors.length === 0) {
    return null
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {errors.map((error, index) => (
        <Alert key={index} className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            {error.message}
          </AlertDescription>
        </Alert>
      ))}
    </div>
  )
}

// Confirmation Dialog Component
interface ConfirmationDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
  variant?: 'default' | 'destructive'
}

export function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default'
}: ConfirmationDialogProps) {
  if (!isOpen) return null

  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6">
        <div className="flex items-center gap-3 mb-4">
          {variant === 'destructive' ? (
            <AlertTriangle className="h-6 w-6 text-red-600" />
          ) : (
            <CheckCircle className="h-6 w-6 text-blue-600" />
          )}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{message}</p>
        
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button 
            variant={variant === 'destructive' ? 'destructive' : 'default'}
            onClick={handleConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}