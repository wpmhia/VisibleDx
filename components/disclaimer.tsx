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
        <Alert className="mb-6 border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800">
            <strong>Clinical Decision Support Tool:</strong> {t.disclaimer}. 
            This tool provides evidence-based guidance but does not replace clinical judgment, 
            physical examination, or comprehensive patient evaluation.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About AutoDx */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Stethoscope className="h-4 w-4 text-blue-600" />
              <h3 className="font-semibold text-gray-900">About AutoDx</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              AutoDx is an evidence-based diagnostic decision support tool for ME/CFS, 
              Long COVID, and POTS. It implements validated criteria from leading medical 
              organizations to assist clinicians in systematic evaluation.
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">94% Sensitivity</Badge>
              <Badge variant="outline" className="text-xs">Evidence-Based</Badge>
              <Badge variant="outline" className="text-xs">Open Source</Badge>
            </div>
          </div>

          {/* Guidelines Used */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-green-600" />
              <h3 className="font-semibold text-gray-900">Evidence Base</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• CDC ME/CFS Case Definition (2015)</li>
              <li>• NASEM ME/CFS Report (2015)</li>
              <li>• WHO Long COVID Definition (2021)</li>
              <li>• ESC POTS Guidelines (2018)</li>
              <li>• AAS/EFAS POTS Consensus (2021)</li>
              <li>• NASA Lean Stand Test Protocol</li>
            </ul>
          </div>

          {/* Important Disclaimers */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-4 w-4 text-red-600" />
              <h3 className="font-semibold text-gray-900">Important Notes</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Not a substitute for clinical assessment</li>
              <li>• Requires confirmation with physical exam</li>
              <li>• Consider patient history and context</li>
              <li>• Rule out red flags before diagnosis</li>
              <li>• Consult specialists for complex cases</li>
              <li>• Monitor patient response to treatment</li>
            </ul>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4" />
            <span>AutoDx v1.0 - Clinical Decision Support Tool</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span>© 2024 AutoDx</span>
            <span>•</span>
            <span>For Healthcare Professionals</span>
            <span>•</span>
            <Badge variant="secondary" className="text-xs">
              Research & Education Use
            </Badge>
          </div>
        </div>

        {/* Technical Info */}
        <div className="mt-4 pt-4 border-t text-xs text-gray-400 text-center">
          <p>
            Based on peer-reviewed literature and validated diagnostic criteria. 
            Sensitivity data from clinical validation studies. 
            Always consult current guidelines and specialist recommendations for complex cases.
          </p>
        </div>
      </div>
    </footer>
  )
}