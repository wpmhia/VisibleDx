'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Activity, Clock, Users, FileText, BarChart3, Heart, User, Battery } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/lib/language-context'

const getModules = (t: any) => [
  {
    id: 'quick-screen',
    title: t.dashboard.modules.quickScreen.title,
    description: t.dashboard.modules.quickScreen.description,
    icon: Clock,
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
  },
  {
    id: 'energy-management',
    title: t.dashboard.modules.energyManagement.title,
    description: t.dashboard.modules.energyManagement.description,
    icon: Battery,
    route: '/energy-management'
  }
]

export default function Home() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const { t } = useTranslation()
  const modules = getModules(t)

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {t.app.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.app.subtitle}
          </p>
        </div>

        <div className="mb-8">
          <Card className="border border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900">{t.dashboard.smartAssessment.title}</h3>
                    <p className="text-sm text-green-700">{t.dashboard.smartAssessment.description}</p>
                  </div>
                </div>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/new-patient">
                    {t.dashboard.smartAssessment.startNew}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {modules.map((module) => (
            <Card 
              key={module.id} 
              className="hover:shadow-md transition-shadow duration-200 flex flex-col h-full"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <module.icon className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-base">{module.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow pt-0">
                <div className="flex-grow">
                </div>
                <Button 
                  className="w-full" 
                  variant="outline"
                  asChild
                >
                  <Link href={module.route}>
                    {t.dashboard.startAssessment}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart3 className="h-5 w-5" />
              {t.dashboard.algorithm.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="border border-blue-200 bg-blue-50 p-3 rounded-md">
                <h4 className="font-medium text-blue-900 mb-1">{t.dashboard.algorithm.mecfs.title}</h4>
                <p className="text-blue-700 text-xs">{t.dashboard.algorithm.mecfs.criteria}</p>
              </div>
              <div className="border border-green-200 bg-green-50 p-3 rounded-md">
                <h4 className="font-medium text-green-900 mb-1">{t.dashboard.algorithm.longCovid.title}</h4>
                <p className="text-green-700 text-xs">{t.dashboard.algorithm.longCovid.criteria}</p>
              </div>
              <div className="border border-purple-200 bg-purple-50 p-3 rounded-md">
                <h4 className="font-medium text-purple-900 mb-1">{t.dashboard.algorithm.pots.title}</h4>
                <p className="text-purple-700 text-xs">{t.dashboard.algorithm.pots.criteria}</p>
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
