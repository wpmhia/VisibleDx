'use client'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Info, EyeOff, Shield, BookOpen, AlertTriangle, User, ExternalLink, Github } from 'lucide-react'
import { useTranslation } from '@/lib/language-context'

export default function Disclaimer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-16">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Critical Disclaimer - First */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Educational Tool Only</h3>
              <p className="text-red-700 text-sm leading-relaxed">
                This is an educational tool for healthcare learning. NOT a medical device. 
                Never use for patient care or diagnosis. Always consult medical professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Clean Hierarchy */}
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          
          {/* Left: Creator & Source */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Created by</h3>
            <div className="space-y-3">
              <div>
                <a 
                  href="https://www.linkedin.com/in/willem-gielen/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Willem Gielen MD
                </a>
              </div>
              <div>
                <a 
                  href="https://InvisibleDx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  InvisibleDx.com
                </a>
              </div>
              <div className="pt-2">
                <a 
                  href="https://github.com/wpmhia/InvisibleDx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm"
                >
                  <Github className="h-4 w-4" />
                  View Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Right: Medical Guidelines */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Based on Medical Guidelines</h3>
            <div className="space-y-2">
              <a 
                href="https://www.cdc.gov/me-cfs/about/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-blue-600 hover:text-blue-700 text-sm"
              >
                CDC ME/CFS Guidelines
              </a>
              <a 
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11093804/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-blue-600 hover:text-blue-700 text-sm"
              >
                D-A-CH ME/CFS Consensus (2024)
              </a>
              <a 
                href="https://www.who.int/publications/i/item/9789240025035" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-blue-600 hover:text-blue-700 text-sm"
              >
                WHO Long COVID Definition
              </a>
              <a 
                href="https://academic.oup.com/europace/article/20/6/921/4824690" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-blue-600 hover:text-blue-700 text-sm"
              >
                ESC POTS Guidelines
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar - Simple */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              <span className="font-medium">InvisibleDx</span> • Educational Tool • v1.0
            </div>
            <div>
              © 2025 Willem Gielen MD • MIT License
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}