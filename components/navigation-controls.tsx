'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, RotateCcw, X } from 'lucide-react'
import { useTranslation } from '@/lib/language-context'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

interface NavigationControlsProps {
  onBack?: () => void
  onNext?: () => void
  onHome?: () => void
  onRestart?: () => void
  onExit?: () => void
  canGoBack?: boolean
  canGoNext?: boolean
  nextLabel?: string
  backLabel?: string
  showHome?: boolean
  showRestart?: boolean
  showExit?: boolean
  isNextLoading?: boolean
  exitConfirmation?: boolean
  className?: string
}

export default function NavigationControls({
  onBack,
  onNext,
  onHome,
  onRestart,
  onExit,
  canGoBack = true,
  canGoNext = true,
  nextLabel,
  backLabel,
  showHome = true,
  showRestart = false,
  showExit = true,
  isNextLoading = false,
  exitConfirmation = true,
  className = ''
}: NavigationControlsProps) {
  const { t } = useTranslation()

  const ExitButton = () => (
    <Button
      variant="outline"
      onClick={onExit}
      className="flex items-center gap-2"
    >
      <X className="h-4 w-4" />
      {t.common.exit}
    </Button>
  )

  const ExitWithConfirmation = () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <X className="h-4 w-4" />
          {t.common.exit}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t.common.areYouSure}</AlertDialogTitle>
          <AlertDialogDescription>
            Your progress will be lost if you exit this assessment module. You can always restart from the beginning.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t.common.cancel}</AlertDialogCancel>
          <AlertDialogAction onClick={onExit}>
            {t.common.exit}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )

  return (
    <div className={`flex items-center justify-between w-full ${className}`}>
      {/* Left Side Controls */}
      <div className="flex items-center gap-2">
        {showHome && onHome && (
          <Button
            variant="ghost"
            onClick={onHome}
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Home
          </Button>
        )}
        
        {onBack && (
          <Button
            variant="outline"
            onClick={onBack}
            disabled={!canGoBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel || t.common.back}
          </Button>
        )}
      </div>

      {/* Center Controls */}
      <div className="flex items-center gap-2">
        {showRestart && onRestart && (
          <Button
            variant="ghost"
            onClick={onRestart}
            className="flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            {t.common.restart}
          </Button>
        )}
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-2">
        {onNext && (
          <Button
            onClick={onNext}
            disabled={!canGoNext || isNextLoading}
            className="flex items-center gap-2"
          >
            {nextLabel || t.common.next}
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}

        {showExit && onExit && (
          exitConfirmation ? <ExitWithConfirmation /> : <ExitButton />
        )}
      </div>
    </div>
  )
}