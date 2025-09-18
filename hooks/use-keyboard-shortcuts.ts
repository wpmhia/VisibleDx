'use client'

import { useEffect } from 'react'

interface KeyboardShortcut {
  key: string
  ctrlKey?: boolean
  altKey?: boolean
  shiftKey?: boolean
  callback: () => void
  description?: string
}

interface UseKeyboardShortcutsProps {
  shortcuts: KeyboardShortcut[]
  enabled?: boolean
}

export function useKeyboardShortcuts({ shortcuts, enabled = true }: UseKeyboardShortcutsProps) {
  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      const matchingShortcut = shortcuts.find(shortcut => {
        return (
          event.key.toLowerCase() === shortcut.key.toLowerCase() &&
          !!event.ctrlKey === !!shortcut.ctrlKey &&
          !!event.altKey === !!shortcut.altKey &&
          !!event.shiftKey === !!shortcut.shiftKey
        )
      })

      if (matchingShortcut) {
        event.preventDefault()
        matchingShortcut.callback()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [shortcuts, enabled])
}

// Common keyboard shortcuts
export const createNavigationShortcuts = (
  onBack?: () => void,
  onNext?: () => void,
  onHome?: () => void,
  onExit?: () => void
): KeyboardShortcut[] => [
  ...(onBack ? [{ key: 'ArrowLeft', altKey: true, callback: onBack, description: 'Alt + ← to go back' }] : []),
  ...(onNext ? [{ key: 'ArrowRight', altKey: true, callback: onNext, description: 'Alt + → to go next' }] : []),
  ...(onHome ? [{ key: 'h', altKey: true, callback: onHome, description: 'Alt + H to go home' }] : []),
  ...(onExit ? [{ key: 'Escape', callback: onExit, description: 'Esc to exit' }] : []),
]