'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Users, Pill, Heart, Droplets, Activity, Brain, Shield, Download } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/lib/language-context'

interface POTSSubtype {
  id: string
  name: string
  description: string
  icon: any
  color: string
  criteria: { id: string; description: string; checked: boolean }[]
  treatments: {
    nonPharmacological: string[]
    firstLine: string[]
    secondLine: string[]
  }
}

const createSubtypes = (t: any): POTSSubtype[] => [
  {
    id: 'hypovolemic',
    name: t.subtype.subtypes.hypovolemic.name,
    description: t.subtype.subtypes.hypovolemic.description,
    icon: Droplets,
    color: 'blue',
    criteria: t.subtype.subtypes.hypovolemic.criteria.map((desc: string, index: number) => ({
      id: ['low_bp', 'thirst', 'salt_craving', 'volume_depletion', 'renin_high'][index],
      description: desc,
      checked: false
    })),
    treatments: {
      nonPharmacological: t.subtype.subtypes.hypovolemic.treatments.nonPharmacological,
      firstLine: t.subtype.subtypes.hypovolemic.treatments.firstLine,
      secondLine: t.subtype.subtypes.hypovolemic.treatments.secondLine
    }
  },
  {
    id: 'neuropathic',
    name: t.subtype.subtypes.neuropathic.name,
    description: t.subtype.subtypes.neuropathic.description,
    icon: Brain,
    color: 'purple',
    criteria: t.subtype.subtypes.neuropathic.criteria.map((desc: string, index: number) => ({
      id: ['distal_neuropathy', 'gi_dysfunction', 'anhidrosis', 'pupil_abnormal', 'diabetes_autoimmune'][index],
      description: desc,
      checked: false
    })),
    treatments: {
      nonPharmacological: t.subtype.subtypes.neuropathic.treatments.nonPharmacological,
      firstLine: t.subtype.subtypes.neuropathic.treatments.firstLine,
      secondLine: t.subtype.subtypes.neuropathic.treatments.secondLine
    }
  },
  {
    id: 'hyperadrenergic',
    name: t.subtype.subtypes.hyperadrenergic.name,
    description: t.subtype.subtypes.hyperadrenergic.description,
    icon: Activity,
    color: 'red',
    criteria: t.subtype.subtypes.hyperadrenergic.criteria.map((desc: string, index: number) => ({
      id: ['high_bp', 'anxiety_panic', 'migraine', 'cold_hands', 'norepinephrine_high'][index],
      description: desc,
      checked: false
    })),
    treatments: {
      nonPharmacological: t.subtype.subtypes.hyperadrenergic.treatments.nonPharmacological,
      firstLine: t.subtype.subtypes.hyperadrenergic.treatments.firstLine,
      secondLine: t.subtype.subtypes.hyperadrenergic.treatments.secondLine
    }
  },
  {
    id: 'autoimmune',
    name: t.subtype.subtypes.autoimmune.name,
    description: t.subtype.subtypes.autoimmune.description,
    icon: Shield,
    color: 'green',
    criteria: t.subtype.subtypes.autoimmune.criteria.map((desc: string, index: number) => ({
      id: ['autoimmune_history', 'rapid_onset', 'viral_trigger', 'antibodies', 'other_autoimmune'][index],
      description: desc,
      checked: false
    })),
    treatments: {
      nonPharmacological: t.subtype.subtypes.autoimmune.treatments.nonPharmacological,
      firstLine: t.subtype.subtypes.autoimmune.treatments.firstLine,
      secondLine: t.subtype.subtypes.autoimmune.treatments.secondLine
    }
  }
]

export default function SubtypeAdvisor() {
  const { t } = useTranslation()
  const potsSubtypes = createSubtypes(t)
  const [subtypeData, setSubtypeData] = useState(potsSubtypes.map(s => ({ ...s })))
  const [patientAge, setPatientAge] = useState<number | null>(null)
  const [comorbidities, setComorbidities] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)

  const handleCriteriaChange = (subtypeId: string, criteriaId: string, checked: boolean) => {
    setSubtypeData(prev => prev.map(subtype => 
      subtype.id === subtypeId 
        ? {
            ...subtype,
            criteria: subtype.criteria.map(c => 
              c.id === criteriaId ? { ...c, checked } : c
            )
          }
        : subtype
    ))
  }

  const calculateSubtypeScores = () => {
    return subtypeData.map(subtype => {
      const score = subtype.criteria.filter(c => c.checked).length
      const maxScore = subtype.criteria.length
      const percentage = (score / maxScore) * 100
      
      return {
        ...subtype,
        score,
        maxScore,
        percentage: Math.round(percentage),
        likelihood: percentage >= 60 ? 'high' : percentage >= 40 ? 'medium' : 'low'
      }
    }).sort((a, b) => b.percentage - a.percentage)
  }

  const generateTreatmentPlan = () => {
    const scores = calculateSubtypeScores()
    const primarySubtype = scores[0]
    const secondarySubtypes = scores.filter(s => s.percentage >= 40 && s.id !== primarySubtype.id)
    
    let plan = `${t.subtype.title}\n`
    plan += "=============================\n\n"
    
    plan += "SUBTYPE ANALYSIS:\n"
    plan += `${t.subtype.results.primary}: ${primarySubtype.name} (${primarySubtype.percentage}% ${t.subtype.results.likelihood})\n`
    if (secondarySubtypes.length > 0) {
      plan += "Secondary considerations:\n"
      secondarySubtypes.forEach(s => {
        plan += `  • ${s.name} (${s.percentage}% ${t.subtype.results.likelihood})\n`
      })
    }
    plan += "\n"
    
    plan += `${t.common.recommendations.toUpperCase()}:\n\n`
    plan += `${t.subtype.results.nonPharmacological}:\n`
    primarySubtype.treatments.nonPharmacological.forEach(treatment => {
      plan += `  • ${treatment}\n`
    })
    plan += "\n"
    
    plan += `${t.subtype.results.firstLineRx}:\n`
    primarySubtype.treatments.firstLine.forEach(treatment => {
      plan += `  • ${treatment}\n`
    })
    plan += "\n"
    
    plan += `${t.subtype.results.secondLineOptions}:\n`
    primarySubtype.treatments.secondLine.forEach(treatment => {
      plan += `  • ${treatment}\n`
    })
    
    return plan
  }

  if (isComplete) {
    const scores = calculateSubtypeScores()
    const primarySubtype = scores[0]
    const secondarySubtypes = scores.filter(s => s.percentage >= 40 && s.id !== primarySubtype.id)
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card>
            <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-blue-600" />
                {t.subtype.results.complete}
              </CardTitle>
              <CardDescription>
                {t.subtype.results.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Badge className={`px-4 py-2 text-lg bg-${primarySubtype.color}-100 text-${primarySubtype.color}-800`}>
                  {t.subtype.results.primary}: {primarySubtype.name}
                </Badge>
                <p className="text-sm text-gray-600 mt-2">
                  {primarySubtype.percentage}% {t.subtype.results.likelihood} ({primarySubtype.score}/{primarySubtype.maxScore} {t.common.criteria})
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className={`border-${primarySubtype.color}-200`}>
                  <CardHeader className="pb-3">
                    <CardTitle className={`text-lg text-${primarySubtype.color}-800 flex items-center gap-2`}>
                      <primarySubtype.icon className="h-5 w-5" />
                      {primarySubtype.name}
                    </CardTitle>
                    <CardDescription>{primarySubtype.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">{t.subtype.results.criteriaMetTitle}:</h4>
                      {primarySubtype.criteria.filter(c => c.checked).map((criterion, index) => (
                        <div key={index} className="text-sm flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          {criterion.description}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">{t.subtype.results.allSubtypeScores}</h3>
                  {scores.map((subtype) => (
                    <div key={subtype.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <subtype.icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{subtype.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={subtype.likelihood === 'high' ? 'default' : 'secondary'} className="text-xs">
                          {subtype.percentage}%
                        </Badge>
                        <span className="text-xs text-gray-600">
                          {subtype.score}/{subtype.maxScore}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      {t.subtype.results.nonPharmacological}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {primarySubtype.treatments.nonPharmacological.map((treatment, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                      <Pill className="h-5 w-5" />
                      {t.subtype.results.firstLineRx}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {primarySubtype.treatments.firstLine.map((treatment, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-purple-800 flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      {t.subtype.results.secondLineOptions}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {primarySubtype.treatments.secondLine.map((treatment, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {secondarySubtypes.length > 0 && (
                <Alert className="border-yellow-200 bg-yellow-50">
                  <Shield className="h-4 w-4 text-yellow-600" />
                  <AlertDescription className="text-yellow-800">
                    <strong>{t.subtype.results.mixedSubtype}</strong> {secondarySubtypes.map(s => s.name).join(' and ')}.
                  </AlertDescription>
                </Alert>
              )}

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{t.subtype.results.clinicalPearls}</h4>
                <div className="text-sm space-y-2">
                  {t.subtype.results.pearls.map((pearl, index) => (
                    <p key={index}>• {pearl}</p>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => {
                  const newSubtypes = createSubtypes(t)
                  setSubtypeData(newSubtypes.map(s => ({ ...s })))
                  setIsComplete(false)
                }} variant="outline">
                  {t.subtype.results.reassess}
                </Button>
                <Button onClick={() => {
                  const plan = generateTreatmentPlan()
                  const blob = new Blob([plan], { type: 'text/plain' })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = 'pots-treatment-plan.txt'
                  a.click()
                  URL.revokeObjectURL(url)
                }} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {t.subtype.results.downloadPlan}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-6">
          
          <div className="flex items-center gap-4 mb-4">
            <Users className="h-5 w-5 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t.subtype.title}</h1>
              <p className="text-gray-600">{t.subtype.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.subtype.patientInfo.title}</CardTitle>
              <CardDescription>{t.subtype.patientInfo.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">{t.common.age}</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="25"
                    value={patientAge || ''}
                    onChange={(e) => setPatientAge(parseInt(e.target.value) || null)}
                  />
                </div>
                <div>
                  <Label>{t.subtype.patientInfo.comorbidities}</Label>
                  <div className="flex gap-4 mt-2">
                    {t.subtype.patientInfo.comorbidityOptions.map((condition, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox
                          id={`comorbidity-${index}`}
                          checked={comorbidities.includes(condition)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setComorbidities(prev => [...prev, condition])
                            } else {
                              setComorbidities(prev => prev.filter(c => c !== condition))
                            }
                          }}
                        />
                        <Label htmlFor={`comorbidity-${index}`} className="text-sm">{condition}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {subtypeData.map((subtype) => (
            <Card key={subtype.id} className={`border-${subtype.color}-200`}>
              <CardHeader>
                <CardTitle className={`text-lg text-${subtype.color}-800 flex items-center gap-2`}>
                  <subtype.icon className="h-5 w-5" />
                  {subtype.name}
                </CardTitle>
                <CardDescription>{subtype.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {subtype.criteria.map((criterion) => (
                    <div key={criterion.id} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                      <Checkbox
                        id={`${subtype.id}-${criterion.id}`}
                        checked={criterion.checked}
                        onCheckedChange={(checked) => handleCriteriaChange(subtype.id, criterion.id, !!checked)}
                      />
                      <Label htmlFor={`${subtype.id}-${criterion.id}`} className="cursor-pointer text-sm flex-1">
                        {criterion.description}
                      </Label>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">
                    <strong>{t.common.score}:</strong> {subtype.criteria.filter(c => c.checked).length}/{subtype.criteria.length} {t.common.criteria} {t.common.met.toLowerCase()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-center">
            <Button onClick={() => setIsComplete(true)} size="lg" className="px-8">
              <Pill className="h-4 w-4 mr-2" />
              {t.common.recommendations}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}