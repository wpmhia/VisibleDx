'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { 
  HelpCircle, 
  Info, 
  BookOpen, 
  Lightbulb,
  ExternalLink 
} from 'lucide-react'

interface HelpTooltipProps {
  content: string
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export function HelpTooltip({ content, children, side = 'top' }: HelpTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side} className="max-w-xs">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

interface ContextualInfoProps {
  title?: string
  content: string
  type?: 'info' | 'tip' | 'help' | 'reference'
  trigger?: 'hover' | 'click'
  placement?: 'inline' | 'icon'
}

export function ContextualInfo({ 
  title, 
  content, 
  type = 'info',
  trigger = 'hover',
  placement = 'icon' 
}: ContextualInfoProps) {
  const [isOpen, setIsOpen] = useState(false)

  const icons = {
    info: Info,
    tip: Lightbulb,
    help: HelpCircle,
    reference: BookOpen,
  }

  const colors = {
    info: 'text-blue-600',
    tip: 'text-amber-600',
    help: 'text-gray-600',
    reference: 'text-green-600',
  }

  const Icon = icons[type]

  const TriggerComponent = placement === 'inline' ? (
    <Button variant="link" className="p-0 h-auto font-normal text-current">
      <Icon className={`h-4 w-4 mr-1 ${colors[type]}`} />
      {title || 'More info'}
    </Button>
  ) : (
    <Icon className={`h-4 w-4 cursor-pointer ${colors[type]} hover:opacity-70`} />
  )

  if (trigger === 'hover') {
    return (
      <HelpTooltip content={content}>
        {TriggerComponent}
      </HelpTooltip>
    )
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        {TriggerComponent}
      </PopoverTrigger>
      <PopoverContent className="w-80">
        {title && (
          <div className="font-semibold mb-2 flex items-center gap-2">
            <Icon className={`h-4 w-4 ${colors[type]}`} />
            {title}
          </div>
        )}
        <p className="text-sm text-gray-600">{content}</p>
      </PopoverContent>
    </Popover>
  )
}

interface ClinicalReferenceProps {
  title: string
  criteria: string[]
  source: string
  sourceUrl?: string
  className?: string
}

export function ClinicalReference({ 
  title, 
  criteria, 
  source, 
  sourceUrl,
  className = '' 
}: ClinicalReferenceProps) {
  return (
    <div className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            {title}
          </h4>
          <ul className="text-sm text-blue-800 space-y-1">
            {criteria.map((criterion, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{criterion}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {source}
            </Badge>
            {sourceUrl && (
              <a 
                href={sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProgressHintProps {
  currentStep: string
  nextStep?: string
  totalSteps?: number
  className?: string
}

export function ProgressHint({ 
  currentStep, 
  nextStep, 
  totalSteps,
  className = '' 
}: ProgressHintProps) {
  return (
    <div className={`bg-amber-50 border border-amber-200 rounded-lg p-3 ${className}`}>
      <div className="flex items-center gap-2 text-amber-800">
        <Lightbulb className="h-4 w-4 text-amber-600" />
        <div className="text-sm">
          <span className="font-medium">Current: </span>
          {currentStep}
          {nextStep && (
            <>
              <span className="mx-2">→</span>
              <span className="font-medium">Next: </span>
              {nextStep}
            </>
          )}
          {totalSteps && (
            <span className="text-amber-600 ml-2">
              ({totalSteps} steps total)
            </span>
          )}
        </div>
      </div>
    </div>
  )
}