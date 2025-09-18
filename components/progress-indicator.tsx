'use client'

import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Circle, Loader2 } from 'lucide-react'
import { useTranslation } from '@/lib/language-context'

interface Step {
  id: string
  title: string
  status: 'pending' | 'current' | 'completed'
}

interface ProgressIndicatorProps {
  steps: Step[]
  currentStep: number
  totalSteps: number
  isLoading?: boolean
  className?: string
}

export default function ProgressIndicator({ 
  steps, 
  currentStep, 
  totalSteps, 
  isLoading = false,
  className = '' 
}: ProgressIndicatorProps) {
  const { t } = useTranslation()
  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className={`w-full ${className}`}>
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            {t.common.progress}
          </span>
          <span className="text-sm text-gray-500">
            {t.common.step} {currentStep} {t.common.of} {totalSteps}
          </span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      {/* Step Indicators */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center flex-1">
            <div className="flex items-center w-full">
              {/* Step Circle */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 relative">
                {step.status === 'completed' ? (
                  <CheckCircle className="w-8 h-8 text-green-600" />
                ) : step.status === 'current' ? (
                  isLoading ? (
                    <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                  ) : (
                    <div className="w-4 h-4 bg-blue-600 rounded-full" />
                  )
                ) : (
                  <Circle className="w-8 h-8 text-gray-300" />
                )}
              </div>
              
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${
                  step.status === 'completed' ? 'bg-green-600' : 'bg-gray-200'
                }`} />
              )}
            </div>

            {/* Step Label */}
            <div className="mt-2 text-center">
              <p className={`text-xs font-medium ${
                step.status === 'current' 
                  ? 'text-blue-600' 
                  : step.status === 'completed'
                  ? 'text-green-600'
                  : 'text-gray-500'
              }`}>
                {step.title}
              </p>
              {step.status === 'current' && (
                <Badge variant="outline" className="mt-1 text-xs">
                  {isLoading ? t.common.processing : 'Current'}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}