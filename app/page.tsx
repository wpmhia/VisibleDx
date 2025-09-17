'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Activity, Clock, Users, FileText, BarChart3, Heart } from 'lucide-react'

const modules = [
  {
    id: 'quick-screen',
    title: 'Quick-Screen',
    description: '16 yes/no questions - 2 min assessment',
    icon: Clock,
    sensitivity: '0.92',
    route: '/quick-screen'
  },
  {
    id: 'red-flag',
    title: 'Red-flag Checker',
    description: 'Lab suggestions to rule out explanatory disease',
    icon: FileText,
    route: '/red-flag-checker'
  },
  {
    id: 'stand-test',
    title: 'Stand-Test Pro',
    description: '10-min NASA Lean protocol with HR monitoring',
    icon: Heart,
    route: '/stand-test'
  },
  {
    id: 'pem-quest',
    title: 'PEM-Quest',
    description: 'Post-Exertional Malaise assessment',
    icon: Activity,
    route: '/pem-quest'
  },
  {
    id: 'criteria-engine',
    title: 'Criteria Engine',
    description: 'CDC, IOM, ESC, WHO guidelines with ICD-10 codes',
    icon: BarChart3,
    route: '/criteria-engine'
  },
  {
    id: 'subtype-advisor',
    title: 'Subtype & Rx Advisor',
    description: 'Personalized treatment recommendations',
    icon: Users,
    route: '/subtype-advisor'
  }
]

export default function Home() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AutoDx: ME/CFS · Long COVID · POTS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            A guided, guideline-based diagnostic engine and decision support tool for clinicians 
            treating patients with fatigue, dizziness, brain-fog, or palpitations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="px-3 py-1">
              4-5 year avg diagnostic delay
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              ≥7 doctors typically consulted
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              94% sensitivity validated
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {modules.map((module) => (
            <Card 
              key={module.id} 
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                selectedModule === module.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedModule(module.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <module.icon className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {module.sensitivity && (
                  <Badge variant="outline" className="mb-3">
                    Sensitivity: {module.sensitivity}
                  </Badge>
                )}
                <Button 
                  className="w-full" 
                  onClick={(e) => {
                    e.stopPropagation()
                    window.location.href = module.route
                  }}
                >
                  Start Assessment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Diagnostic Algorithm
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">ME/CFS</h4>
                <p className="text-blue-700">CDC/NASEM 2015 + IOM criteria</p>
                <p className="text-blue-700">3 core + 1 PEM symptom cluster</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Long COVID</h4>
                <p className="text-green-700">WHO + NASEM 2024 criteria</p>
                <p className="text-green-700">≥3 months post-SARS-CoV-2</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">POTS</h4>
                <p className="text-purple-700">ESC 2018 + AAS/EFAS 2021</p>
                <p className="text-purple-700">HR↑≥30 bpm within 10 min</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Making invisible diseases visible - with evidence, empathy and code.
          </p>
        </div>
      </div>
    </div>
  )
}
