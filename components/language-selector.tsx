'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Globe, Check } from 'lucide-react'
import { useTranslation } from '@/lib/language-context'
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '@/lib/translations/types'

export function LanguageSelector() {
  const { language, setLanguage } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = SUPPORTED_LANGUAGES.find(lang => lang.code === language)

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Globe className="h-4 w-4" />
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
      </Button>

      {isOpen && (
        <Card className="absolute top-full right-0 mt-2 z-50 min-w-[200px]">
          <CardContent className="p-2">
            <div className="space-y-1">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <Button
                  key={lang.code}
                  variant="ghost"
                  className="w-full justify-start gap-3"
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="flex-1 text-left">{lang.name}</span>
                  {language === lang.code && (
                    <Check className="h-4 w-4 text-green-600" />
                  )}
                </Button>
              ))}
            </div>
            <div className="mt-3 pt-2 border-t">
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">
                  Multi-language
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Medical terms
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}