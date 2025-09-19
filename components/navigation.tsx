'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { 
  Home, 
  Menu, 
  Stethoscope, 
  Clock, 
  AlertTriangle, 
  Heart, 
  Activity, 
  BarChart3, 
  Settings,
  BookOpen,
  ExternalLink,
  Info,
  User
} from 'lucide-react'
import { useTranslation } from '@/lib/language-context'
import { LanguageSelector } from '@/components/language-selector'

const getAssessmentModules = (t: any) => [
  {
    href: '/new-patient',
    icon: User,
    title: t.newPatient.title,
    description: t.newPatient.description,
    badge: t.navigation.smartBadge
  },
  {
    href: '/quick-screen',
    icon: Clock,
    title: t.dashboard.modules.quickScreen.title,
    description: t.dashboard.modules.quickScreen.description,
    badge: null
  },
  {
    href: '/red-flag-checker',
    icon: AlertTriangle,
    title: t.dashboard.modules.redFlag.title,
    description: t.dashboard.modules.redFlag.description,
    badge: null
  },
  {
    href: '/stand-test',
    icon: Heart,
    title: t.dashboard.modules.standTest.title,
    description: t.dashboard.modules.standTest.description,
    badge: null
  },
  {
    href: '/pem-quest',
    icon: Activity,
    title: t.dashboard.modules.pemQuest.title,
    description: t.dashboard.modules.pemQuest.description,
    badge: null
  },
  {
    href: '/criteria-engine',
    icon: BarChart3,
    title: t.dashboard.modules.criteriaEngine.title,
    description: t.dashboard.modules.criteriaEngine.description,
    badge: null
  },
  {
    href: '/subtype-advisor',
    icon: Settings,
    title: t.dashboard.modules.subtypeAdvisor.title,
    description: t.dashboard.modules.subtypeAdvisor.description,
    badge: null
  }
]

const guidelines = [
  {
    title: 'ME/CFS Basics - CDC (2024)',
    url: 'https://www.cdc.gov/me-cfs/about/',
    organization: 'CDC'
  },
  {
    title: 'ME/CFS - NASEM Report (2015)',
    url: 'https://www.nationalacademies.org/our-work/a-review-of-the-continuing-challenges-in-the-diagnosis-and-treatment-of-myalgic-encephalomyelitis-chronic-fatigue-syndrome-me-cfs',
    organization: 'NASEM'
  },
  {
    title: 'D-A-CH ME/CFS Consensus Statement (2024)',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11093804/',
    organization: 'D-A-CH'
  },
  {
    title: 'Long COVID - WHO Clinical Case Definition (2021)',
    url: 'https://www.who.int/publications/i/item/WHO-2019-nCoV-Post_COVID-19_condition-Clinical_case_definition-2021.1',
    organization: 'WHO'
  },
  {
    title: 'POTS - ESC Guidelines (2018)',
    url: 'https://academic.oup.com/eurheartj/article/39/21/1840/4939241',
    organization: 'ESC'
  },
  {
    title: 'POTS - AAS/EFAS Consensus (2021)',
    url: 'https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.120.050854',
    organization: 'AAS/EFAS'
  },
  {
    title: 'Long COVID - NASEM Framework (2024)',
    url: 'https://www.nationalacademies.org/our-work/a-framework-for-measuring-progress-in-addressing-long-covid',
    organization: 'NASEM'
  }
]

export default function Navigation() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const assessmentModules = getAssessmentModules(t)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Home Link */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Stethoscope className="h-6 w-6 text-blue-600" />
          <div className="font-bold text-lg">
            <span className="text-blue-600">Visible</span>
            <span className="text-gray-900">Dx</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                {t.navigation.assessmentModules}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
              <DropdownMenuLabel>{t.navigation.diagnosticTools}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {assessmentModules.map((module) => (
                  <DropdownMenuItem key={module.href} asChild>
                    <Link href={module.href} className="flex items-center gap-3 p-3">
                      <module.icon className="h-4 w-4 text-blue-600" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{module.title}</span>
                          {module.badge && (
                            <Badge variant="secondary" className="text-xs">
                              {module.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-600">{module.description}</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                {t.navigation.guidelines}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{t.navigation.clinicalGuidelines}</SheetTitle>
                <SheetDescription>
                  {t.navigation.guidelinesDescription}
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm leading-relaxed">{guideline.title}</h4>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {guideline.organization}
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        asChild
                        className="shrink-0"
                      >
                        <a 
                          href={guideline.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <LanguageSelector />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSelector />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-blue-600" />
                   InvisibleDx Menu
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-500">
                    {t.navigation.assessmentModulesSection}
                  </h3>
                  <div className="space-y-2">
                    {assessmentModules.map((module) => (
                      <Link
                        key={module.href}
                        href={module.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <module.icon className="h-4 w-4 text-blue-600" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{module.title}</span>
                            {module.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {module.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-600">{module.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-500">
                    {t.navigation.guidelinesSection}
                  </h3>
                  <div className="space-y-2">
                    {guidelines.slice(0, 3).map((guideline, index) => (
                      <a
                        key={index}
                        href={guideline.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <ExternalLink className="h-3 w-3 text-gray-500" />
                        <div className="flex-1">
                          <span className="text-sm font-medium">{guideline.title}</span>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {guideline.organization}
                          </Badge>
                        </div>
                      </a>
                    ))}
                    <div className="text-xs text-gray-500 p-2">
                      + {guidelines.length - 3} {t.navigation.moreGuidelines}
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}