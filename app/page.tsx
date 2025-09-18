'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Activity, Clock, Users, FileText, BarChart3, Heart, User } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/lib/language-context'

const getModules = (t: any) => [
  {
    id: 'quick-screen',
    title: t.dashboard.modules.quickScreen.title,
    description: t.dashboard.modules.quickScreen.description,
    icon: Clock,
    sensitivity: '0.92',
    route: '/quick-screen'
  },
  {
    id: 'red-flag',
    title: t.dashboard.modules.redFlag.title,
    description: t.dashboard.modules.redFlag.description,
    icon: FileText,
    route: '/red-flag-checker'
  },
  {
    id: 'stand-test',
    title: t.dashboard.modules.standTest.title,
    description: t.dashboard.modules.standTest.description,
    icon: Heart,
    route: '/stand-test'
  },
  {
    id: 'pem-quest',
    title: t.dashboard.modules.pemQuest.title,
    description: t.dashboard.modules.pemQuest.description,
    icon: Activity,
    route: '/pem-quest'
  },
  {
    id: 'criteria-engine',
    title: t.dashboard.modules.criteriaEngine.title,
    description: t.dashboard.modules.criteriaEngine.description,
    icon: BarChart3,
    route: '/criteria-engine'
  },
  {
    id: 'subtype-advisor',
    title: t.dashboard.modules.subtypeAdvisor.title,
    description: t.dashboard.modules.subtypeAdvisor.description,
    icon: Users,
    route: '/subtype-advisor'
  }
]

export default function Home() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const { t } = useTranslation()
  const modules = getModules(t)

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.app.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {t.app.subtitle}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="px-3 py-1">
              {t.dashboard.stats.diagnosticDelay}
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              {t.dashboard.stats.doctorsConsulted}
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              {t.dashboard.stats.sensitivityValidated}
            </Badge>
          </div>
        </div>

        <div className="mb-8">
          <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <User className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900">{t.dashboard.smartAssessment.title}</h3>
                    <p className="text-green-700">{t.dashboard.smartAssessment.description}</p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">{t.dashboard.smartAssessment.autoRouting}</Badge>
                      <Badge variant="secondary" className="text-xs">{t.dashboard.smartAssessment.soapNotes}</Badge>
                      <Badge variant="secondary" className="text-xs">{t.dashboard.smartAssessment.icdCodes}</Badge>
                    </div>
                  </div>
                </div>
                <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/new-patient">
                    {t.dashboard.smartAssessment.startNew}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {modules.map((module) => (
            <Card 
              key={module.id} 
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 flex flex-col h-full ${
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
              <CardContent className="flex flex-col flex-grow">
                <div className="flex-grow">
                  {module.sensitivity && (
                    <Badge variant="outline" className="mb-3">
                      {t.common.sensitivity}: {module.sensitivity}
                    </Badge>
                  )}
                </div>
                <Button 
                  className="w-full mt-auto" 
                  onClick={(e) => {
                    e.stopPropagation()
                    window.location.href = module.route
                  }}
                >
                  {t.dashboard.startAssessment}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              {t.dashboard.algorithm.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">{t.dashboard.algorithm.mecfs.title}</h4>
                <p className="text-blue-700">{t.dashboard.algorithm.mecfs.criteria}</p>
                <p className="text-blue-700">{t.dashboard.algorithm.mecfs.description}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">{t.dashboard.algorithm.longCovid.title}</h4>
                <p className="text-green-700">{t.dashboard.algorithm.longCovid.criteria}</p>
                <p className="text-green-700">{t.dashboard.algorithm.longCovid.description}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">{t.dashboard.algorithm.pots.title}</h4>
                <p className="text-purple-700">{t.dashboard.algorithm.pots.criteria}</p>
                <p className="text-purple-700">{t.dashboard.algorithm.pots.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            {t.app.tagline}
          </p>
        </div>
      </div>
    </div>
  )
}
