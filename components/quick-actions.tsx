'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { 
  Search, 
  Zap, 
  Clock, 
  FileText, 
  Heart, 
  Activity, 
  BarChart3, 
  Users,
  Home,
  Settings,
  HelpCircle,
  Keyboard
} from 'lucide-react'
import { useTranslation } from '@/lib/language-context'
import { useKeyboardShortcuts } from '@/hooks/use-keyboard-shortcuts'

interface QuickAction {
  id: string
  label: string
  description?: string
  icon: React.ComponentType<any>
  action: () => void
  shortcut?: string
  category: 'navigation' | 'modules' | 'tools' | 'help'
}

interface QuickActionsProps {
  onNavigate: (path: string) => void
  className?: string
}

export default function QuickActions({ onNavigate, className = '' }: QuickActionsProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [recentActions, setRecentActions] = useState<string[]>([])

  const actions: QuickAction[] = [
    // Navigation
    {
      id: 'home',
      label: 'Home',
      description: 'Go to dashboard',
      icon: Home,
      action: () => onNavigate('/'),
      shortcut: 'Alt+H',
      category: 'navigation'
    },
    
    // Training Modules
    {
      id: 'new-patient',
      label: t.dashboard.smartAssessment.title,
      description: t.dashboard.smartAssessment.description,
      icon: Users,
      action: () => onNavigate('/new-patient'),
      shortcut: 'Alt+N',
      category: 'modules'
    },
    {
      id: 'quick-screen',
      label: t.dashboard.modules.quickScreen.title,
      description: t.dashboard.modules.quickScreen.description,
      icon: Clock,
      action: () => onNavigate('/quick-screen'),
      shortcut: 'Alt+Q',
      category: 'modules'
    },
    {
      id: 'red-flag',
      label: t.dashboard.modules.redFlag.title,
      description: t.dashboard.modules.redFlag.description,
      icon: FileText,
      action: () => onNavigate('/red-flag-checker'),
      shortcut: 'Alt+R',
      category: 'modules'
    },
    {
      id: 'stand-test',
      label: t.dashboard.modules.standTest.title,
      description: t.dashboard.modules.standTest.description,
      icon: Heart,
      action: () => onNavigate('/stand-test'),
      shortcut: 'Alt+S',
      category: 'modules'
    },
    {
      id: 'pem-quest',
      label: t.dashboard.modules.pemQuest.title,
      description: t.dashboard.modules.pemQuest.description,
      icon: Activity,
      action: () => onNavigate('/pem-quest'),
      shortcut: 'Alt+P',
      category: 'modules'
    },
    {
      id: 'criteria-engine',
      label: t.dashboard.modules.criteriaEngine.title,
      description: t.dashboard.modules.criteriaEngine.description,
      icon: BarChart3,
      action: () => onNavigate('/criteria-engine'),
      shortcut: 'Alt+C',
      category: 'modules'
    },
    {
      id: 'subtype-advisor',
      label: t.dashboard.modules.subtypeAdvisor.title,
      description: t.dashboard.modules.subtypeAdvisor.description,
      icon: Settings,
      action: () => onNavigate('/subtype-advisor'),
      shortcut: 'Alt+T',
      category: 'modules'
    },
  ]

  // Keyboard shortcuts
  useKeyboardShortcuts({
    shortcuts: [
      { key: 'k', ctrlKey: true, callback: () => setOpen(true) },
      { key: '/', callback: () => setOpen(true) },
      ...actions.map(action => ({
        key: action.shortcut?.split('+')[1] || '',
        altKey: action.shortcut?.includes('Alt') || false,
        ctrlKey: action.shortcut?.includes('Ctrl') || false,
        callback: () => {
          action.action()
          trackRecentAction(action.id)
        }
      })).filter(shortcut => shortcut.key)
    ]
  })

  const trackRecentAction = (actionId: string) => {
    setRecentActions(prev => {
      const filtered = prev.filter(id => id !== actionId)
      return [actionId, ...filtered].slice(0, 5)
    })
  }

  const handleActionSelect = (action: QuickAction) => {
    action.action()
    trackRecentAction(action.id)
    setOpen(false)
  }

  const groupedActions = actions.reduce((acc, action) => {
    if (!acc[action.category]) acc[action.category] = []
    acc[action.category].push(action)
    return acc
  }, {} as Record<string, QuickAction[]>)

  const recentActionsList = recentActions
    .map(id => actions.find(action => action.id === id))
    .filter(Boolean) as QuickAction[]

  return (
    <>
      {/* Quick Access Button */}
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className={`flex items-center gap-2 ${className}`}
      >
        <Zap className="h-4 w-4" />
        Quick Actions
        <Badge variant="secondary" className="ml-2 text-xs">
          Ctrl+K
        </Badge>
      </Button>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search actions..." />
        <CommandList>
          <CommandEmpty>No actions found.</CommandEmpty>
          
          {/* Recent Actions */}
          {recentActionsList.length > 0 && (
            <>
              <CommandGroup heading="Recent">
                {recentActionsList.map((action) => (
                  <CommandItem
                    key={action.id}
                    onSelect={() => handleActionSelect(action)}
                    className="flex items-center gap-3"
                  >
                    <action.icon className="h-4 w-4" />
                    <div className="flex-1">
                      <div className="font-medium">{action.label}</div>
                      {action.description && (
                        <div className="text-xs text-gray-500">{action.description}</div>
                      )}
                    </div>
                    {action.shortcut && (
                      <Badge variant="outline" className="text-xs">
                        {action.shortcut}
                      </Badge>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </>
          )}

          {/* Training Modules */}
          <CommandGroup heading="Training Modules">
            {groupedActions.modules?.map((action) => (
              <CommandItem
                key={action.id}
                onSelect={() => handleActionSelect(action)}
                className="flex items-center gap-3"
              >
                <action.icon className="h-4 w-4" />
                <div className="flex-1">
                  <div className="font-medium">{action.label}</div>
                  {action.description && (
                    <div className="text-xs text-gray-500">{action.description}</div>
                  )}
                </div>
                {action.shortcut && (
                  <Badge variant="outline" className="text-xs">
                    {action.shortcut}
                  </Badge>
                )}
              </CommandItem>
            ))}
          </CommandGroup>

          {/* Navigation */}
          <CommandGroup heading="Navigation">
            {groupedActions.navigation?.map((action) => (
              <CommandItem
                key={action.id}
                onSelect={() => handleActionSelect(action)}
                className="flex items-center gap-3"
              >
                <action.icon className="h-4 w-4" />
                <div className="flex-1">
                  <div className="font-medium">{action.label}</div>
                  {action.description && (
                    <div className="text-xs text-gray-500">{action.description}</div>
                  )}
                </div>
                {action.shortcut && (
                  <Badge variant="outline" className="text-xs">
                    {action.shortcut}
                  </Badge>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

// Keyboard Shortcuts Help Component
export function KeyboardShortcutsHelp() {
  const [open, setOpen] = useState(false)

  const shortcuts = [
    { key: 'Ctrl + K', description: 'Open quick actions' },
    { key: '/', description: 'Open search' },
    { key: 'Alt + H', description: 'Go to home' },
    { key: 'Alt + N', description: 'Start new assessment session' },
    { key: 'Alt + Q', description: 'Quick screen module' },
    { key: 'Alt + R', description: 'Red flag checker' },
    { key: 'Alt + S', description: 'Stand test module' },
    { key: 'Alt + P', description: 'PEM assessment' },
    { key: 'Alt + C', description: 'Diagnostic criteria' },
    { key: 'Alt + T', description: 'Clinical management' },
    { key: 'Alt + ←', description: 'Go back' },
    { key: 'Alt + →', description: 'Go forward' },
    { key: 'Esc', description: 'Exit/Cancel' },
  ]

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2"
      >
        <Keyboard className="h-4 w-4" />
        Shortcuts
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Keyboard className="h-5 w-5" />
            Keyboard Shortcuts
          </h3>
          <div className="space-y-2">
            {shortcuts.map((shortcut, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <span className="text-sm">{shortcut.description}</span>
                <Badge variant="outline" className="font-mono">
                  {shortcut.key}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CommandDialog>
    </>
  )
}