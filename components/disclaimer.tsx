'use client'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Info, Stethoscope, Shield, BookOpen, AlertTriangle } from 'lucide-react'
import { useTranslation } from '@/lib/language-context'

export default function Disclaimer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-50 border-t py-8 mt-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Disclaimer */}
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>TRAINING TOOL ONLY - NOT FOR MEDICAL USE:</strong> {t.disclaimer}
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About VisibleDx */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Stethoscope className="h-4 w-4 text-blue-600" />
              <h3 className="font-semibold text-gray-900">{t.footer.about.title}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {t.footer.about.description}
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">{t.footer.about.badges.sensitivity}</Badge>
              <Badge variant="outline" className="text-xs">{t.footer.about.badges.evidenceBased}</Badge>
              <Badge variant="outline" className="text-xs">{t.footer.about.badges.openSource}</Badge>
            </div>
          </div>

          {/* Guidelines Used */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-green-600" />
              <h3 className="font-semibold text-gray-900">{t.footer.evidence.title}</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              {t.footer.evidence.guidelines.map((guideline, index) => (
                <li key={index}>
                  • <a 
                      href={guideline.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {guideline.title}
                    </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Disclaimers */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-4 w-4 text-red-600" />
              <h3 className="font-semibold text-gray-900">{t.footer.notes.title}</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              {t.footer.notes.items.map((note, index) => (
                <li key={index}>• {note}</li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4" />
            <span>{t.footer.bottom.version}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span>{t.footer.bottom.copyright}</span>
            <span>•</span>
            <span>{t.footer.bottom.audienceLabel}</span>
            <span>•</span>
            <Badge variant="secondary" className="text-xs">
              {t.footer.bottom.badge}
            </Badge>
          </div>
        </div>

        {/* Technical Info */}
        <div className="mt-4 pt-4 border-t text-xs text-gray-400 text-center">
          <p>
            {t.footer.technical}
          </p>
        </div>
      </div>
    </footer>
  )
}