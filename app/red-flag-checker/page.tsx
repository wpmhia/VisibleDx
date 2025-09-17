'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { FileText, AlertTriangle, CheckCircle, Activity, Heart, Brain } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/lib/language-context'

const getRedFlagSymptoms = (t: any) => t.redFlag.symptoms.list.map((symptom: string, index: number) => ({
  id: ['fever', 'weight_loss', 'chest_pain', 'dyspnea', 'neurological', 'bleeding', 'lymphadenopathy', 'jaundice'][index],
  symptom,
  category: ['Infectious/Inflammatory', 'Malignancy/Metabolic', 'Cardiovascular', 'Cardiopulmonary', 'Neurological', 'Hematological', 'Infectious/Malignancy', 'Hepatic'][index],
  priority: 'high',
  tests: [
    ['CBC with differential', 'ESR', 'CRP', 'Blood cultures', 'Chest X-ray'],
    ['CBC', 'Comprehensive metabolic panel', 'TSH', 'HbA1c', 'CT chest/abdomen/pelvis'],
    ['ECG', 'Troponin', 'Chest X-ray', 'Echocardiogram', 'Stress test'],
    ['Chest X-ray', 'ECG', 'Echocardiogram', 'Pulmonary function tests', 'D-dimer'],
    ['MRI brain', 'Neurological consultation', 'EEG if seizures'],
    ['CBC with platelet count', 'PT/PTT', 'Peripheral blood smear'],
    ['CBC with differential', 'LDH', 'CT chest/abdomen/pelvis'],
    ['Liver function tests', 'Hepatitis panel', 'Abdominal ultrasound']
  ][index]
}))

const getRoutineLabs = (t: any) => [
  {
    category: t.redFlag.routineLabs.categories.basicMetabolic.title,
    tests: t.redFlag.routineLabs.categories.basicMetabolic.tests,
    indication: t.redFlag.routineLabs.categories.basicMetabolic.indication
  },
  {
    category: t.redFlag.routineLabs.categories.endocrine.title,
    tests: t.redFlag.routineLabs.categories.endocrine.tests,
    indication: t.redFlag.routineLabs.categories.endocrine.indication
  },
  {
    category: t.redFlag.routineLabs.categories.nutritional.title,
    tests: t.redFlag.routineLabs.categories.nutritional.tests,
    indication: t.redFlag.routineLabs.categories.nutritional.indication
  },
  {
    category: t.redFlag.routineLabs.categories.autoimmune.title,
    tests: t.redFlag.routineLabs.categories.autoimmune.tests,
    indication: t.redFlag.routineLabs.categories.autoimmune.indication
  },
  {
    category: t.redFlag.routineLabs.categories.cardiac.title,
    tests: t.redFlag.routineLabs.categories.cardiac.tests,
    indication: t.redFlag.routineLabs.categories.cardiac.indication
  },
  {
    category: t.redFlag.routineLabs.categories.infectious.title,
    tests: t.redFlag.routineLabs.categories.infectious.tests,
    indication: t.redFlag.routineLabs.categories.infectious.indication
  }
]

export default function RedFlagChecker() {
  const [selectedRedFlags, setSelectedRedFlags] = useState<string[]>([])
  const [selectedRoutineLabs, setSelectedRoutineLabs] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const { t } = useTranslation()
  const redFlagSymptoms = getRedFlagSymptoms(t)
  const routineLabs = getRoutineLabs(t)

  const handleRedFlagChange = (redFlagId: string, checked: boolean) => {
    if (checked) {
      setSelectedRedFlags(prev => [...prev, redFlagId])
    } else {
      setSelectedRedFlags(prev => prev.filter(id => id !== redFlagId))
    }
  }

  const handleRoutineLabChange = (categoryKey: string, checked: boolean) => {
    if (checked) {
      setSelectedRoutineLabs(prev => [...prev, categoryKey])
    } else {
      setSelectedRoutineLabs(prev => prev.filter(cat => cat !== categoryKey))
    }
  }

  const generateRecommendations = () => {
    const urgentTests = new Set<string>()
    const routineTests = new Set<string>()
    
    // Add tests based on red flags
    selectedRedFlags.forEach(flagId => {
      const flag = redFlagSymptoms.find(f => f.id === flagId)
      if (flag) {
        flag.tests.forEach(test => urgentTests.add(test))
      }
    })

    // Add routine tests
    selectedRoutineLabs.forEach(categoryKey => {
      const category = routineLabs.find(cat => cat.category === categoryKey)
      if (category) {
        category.tests.forEach(test => routineTests.add(test))
      }
    })

    const hasHighPriorityFlags = selectedRedFlags.some(flagId => 
      redFlagSymptoms.find(f => f.id === flagId)?.priority === 'high'
    )

    return {
      urgentTests: Array.from(urgentTests),
      routineTests: Array.from(routineTests),
      hasHighPriorityFlags,
      recommendation: hasHighPriorityFlags ? 'urgent' : selectedRedFlags.length > 0 ? 'priority' : 'routine'
    }
  }

  if (isComplete) {
    const recommendations = generateRecommendations()
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-green-600" />
                {t.redFlag.results.complete}
              </CardTitle>
              <CardDescription>
                Laboratory and diagnostic recommendations based on clinical presentation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {recommendations.hasHighPriorityFlags && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>{t.redFlag.results.urgentEval}:</strong> High-priority red flags detected. 
                    Consider immediate or expedited workup.
                  </AlertDescription>
                </Alert>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.urgentTests.length > 0 && (
                  <Card className="border-red-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-red-800 flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        {t.redFlag.results.priorityTests}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {recommendations.urgentTests.map((test, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Activity className="h-3 w-3 text-red-600" />
                            {test}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {recommendations.routineTests.length > 0 && (
                  <Card className="border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        {t.redFlag.results.routineTests}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {recommendations.routineTests.map((test, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Activity className="h-3 w-3 text-blue-600" />
                            {test}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>

              {selectedRedFlags.length === 0 && selectedRoutineLabs.length === 0 && (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="pt-6">
                    <div className="text-center text-green-800">
                      <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">{t.redFlag.results.noRedFlags}</h3>
                      <p className="text-sm">
                        Patient can proceed to targeted ME/CFS, Long COVID, or POTS assessment.
                        Consider basic metabolic panel if not done recently.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  {t.redFlag.results.clinicalSupport}
                </h4>
                <div className="text-sm space-y-2">
                  {recommendations.recommendation === 'urgent' && (
                    <p className="text-red-700">
                      {t.redFlag.results.urgent}
                    </p>
                  )}
                  {recommendations.recommendation === 'priority' && (
                    <p className="text-yellow-700">
                      {t.redFlag.results.priority}
                    </p>
                  )}
                  {recommendations.recommendation === 'routine' && (
                    <p className="text-green-700">
                      {t.redFlag.results.routine}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => {
                  setSelectedRedFlags([])
                  setSelectedRoutineLabs([])
                  setIsComplete(false)
                }} variant="outline">
                  {t.redFlag.results.reassess}
                </Button>
                {recommendations.recommendation === 'routine' && (
                  <Button asChild>
                    <Link href="/stand-test">
                      {t.common.continue} to Stand-Test Pro
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t.redFlag.title}</h1>
              <p className="text-gray-600">{t.redFlag.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-red-800">{t.redFlag.symptoms.title}</CardTitle>
              <CardDescription>
                {t.redFlag.symptoms.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {redFlagSymptoms.map((flag, index) => (
                  <div key={flag.id} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                    <Checkbox
                      id={flag.id}
                      checked={selectedRedFlags.includes(flag.id)}
                      onCheckedChange={(checked) => handleRedFlagChange(flag.id, !!checked)}
                    />
                    <div className="flex-1">
                      <label htmlFor={flag.id} className="text-sm font-medium cursor-pointer">
                        {t.redFlag.symptoms.list[index]}
                      </label>
                      <div className="flex gap-2 mt-1">
                        <Badge 
                          variant={flag.priority === 'high' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {flag.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-blue-800">{t.redFlag.routineLabs.title}</CardTitle>
              <CardDescription>
                {t.redFlag.routineLabs.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {routineLabs.map((labCategory, index) => (
                  <div key={labCategory.category} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                    <Checkbox
                      id={labCategory.category}
                      checked={selectedRoutineLabs.includes(labCategory.category)}
                      onCheckedChange={(checked) => handleRoutineLabChange(labCategory.category, !!checked)}
                    />
                    <div className="flex-1">
                      <label htmlFor={labCategory.category} className="text-sm font-medium cursor-pointer">
                        {labCategory.category}
                      </label>
                      <p className="text-xs text-gray-600 mt-1">{labCategory.indication}</p>
                      <div className="text-xs text-gray-500 mt-1">
                        {labCategory.tests.slice(0, 3).join(', ')}
                        {labCategory.tests.length > 3 && ` + ${labCategory.tests.length - 3} more`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button onClick={() => setIsComplete(true)} className="px-8">
              {t.redFlag.results.generateRecommendations}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}