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

const potsSubtypes: POTSSubtype[] = [
  {
    id: 'hypovolemic',
    name: 'Hypovolemic POTS',
    description: 'Low blood volume causing orthostatic intolerance',
    icon: Droplets,
    color: 'blue',
    criteria: [
      { id: 'low_bp', description: 'Low-normal blood pressure (<110/70)', checked: false },
      { id: 'thirst', description: 'Excessive thirst', checked: false },
      { id: 'salt_craving', description: 'Salt craving', checked: false },
      { id: 'volume_depletion', description: 'Signs of volume depletion', checked: false },
      { id: 'renin_high', description: 'Elevated renin/aldosterone (if available)', checked: false }
    ],
    treatments: {
      nonPharmacological: [
        'Increase fluid intake to 2.5-3L daily',
        'Increase sodium intake to 8-10g daily',
        'Compression garments (30-40 mmHg)',
        'Gradual exercise reconditioning'
      ],
      firstLine: [
        'Fludrocortisone 0.1-0.2mg daily',
        'Salt tablets if dietary intake insufficient'
      ],
      secondLine: [
        'Desmopressin (DDAVP) for severe cases',
        'Erythropoietin if anemic'
      ]
    }
  },
  {
    id: 'neuropathic',
    name: 'Neuropathic POTS',
    description: 'Peripheral autonomic neuropathy affecting blood vessel control',
    icon: Brain,
    color: 'purple',
    criteria: [
      { id: 'distal_neuropathy', description: 'Distal small fiber neuropathy symptoms', checked: false },
      { id: 'gi_dysfunction', description: 'GI dysfunction (gastroparesis, constipation)', checked: false },
      { id: 'anhidrosis', description: 'Anhidrosis or reduced sweating', checked: false },
      { id: 'pupil_abnormal', description: 'Pupillary abnormalities', checked: false },
      { id: 'diabetes_autoimmune', description: 'History of diabetes or autoimmune disease', checked: false }
    ],
    treatments: {
      nonPharmacological: [
        'Compression garments',
        'Leg elevation',
        'Avoid heat exposure',
        'Small frequent meals'
      ],
      firstLine: [
        'Midodrine 2.5-10mg TID',
        'Pyridostigmine 30-60mg TID'
      ],
      secondLine: [
        'Droxidopa (if available)',
        'Alpha-lipoic acid for neuropathy',
        'IVIG for autoimmune cases'
      ]
    }
  },
  {
    id: 'hyperadrenergic',
    name: 'Hyperadrenergic POTS',
    description: 'Excessive sympathetic nervous system activation',
    icon: Activity,
    color: 'red',
    criteria: [
      { id: 'high_bp', description: 'Hypertension when standing', checked: false },
      { id: 'anxiety_panic', description: 'Anxiety, panic attacks, tremor', checked: false },
      { id: 'migraine', description: 'Migraine headaches', checked: false },
      { id: 'cold_hands', description: 'Cold hands and feet', checked: false },
      { id: 'norepinephrine_high', description: 'Elevated standing norepinephrine >600 pg/mL', checked: false }
    ],
    treatments: {
      nonPharmacological: [
        'Stress reduction techniques',
        'Avoid stimulants (caffeine)',
        'Regular sleep schedule',
        'Gentle exercise'
      ],
      firstLine: [
        'Propranolol 10-40mg BID',
        'Clonidine 0.1-0.2mg BID'
      ],
      secondLine: [
        'Ivabradine 2.5-7.5mg BID',
        'Methyldopa',
        'Labetalol for hypertension'
      ]
    }
  },
  {
    id: 'autoimmune',
    name: 'Autoimmune POTS',
    description: 'Autoimmune-mediated autonomic dysfunction',
    icon: Shield,
    color: 'green',
    criteria: [
      { id: 'autoimmune_history', description: 'Personal/family history of autoimmune disease', checked: false },
      { id: 'rapid_onset', description: 'Rapid onset of symptoms', checked: false },
      { id: 'viral_trigger', description: 'Viral illness trigger (EBV, COVID, etc.)', checked: false },
      { id: 'antibodies', description: 'Positive autonomic antibodies (if tested)', checked: false },
      { id: 'other_autoimmune', description: 'Other autoimmune markers positive', checked: false }
    ],
    treatments: {
      nonPharmacological: [
        'Standard POTS measures',
        'Avoid infection triggers',
        'Stress management',
        'Anti-inflammatory diet'
      ],
      firstLine: [
        'Standard POTS medications',
        'Trial of corticosteroids'
      ],
      secondLine: [
        'IVIG therapy',
        'Immunosuppressive agents',
        'Plasmapheresis for severe cases'
      ]
    }
  }
]

export default function SubtypeAdvisor() {
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
    
    let plan = "POTS Subtype & Treatment Plan\n"
    plan += "=============================\n\n"
    
    plan += "SUBTYPE ANALYSIS:\n"
    plan += `Primary: ${primarySubtype.name} (${primarySubtype.percentage}% likelihood)\n`
    if (secondarySubtypes.length > 0) {
      plan += "Secondary considerations:\n"
      secondarySubtypes.forEach(s => {
        plan += `  • ${s.name} (${s.percentage}% likelihood)\n`
      })
    }
    plan += "\n"
    
    plan += "TREATMENT RECOMMENDATIONS:\n\n"
    plan += "Non-Pharmacological:\n"
    primarySubtype.treatments.nonPharmacological.forEach(treatment => {
      plan += `  • ${treatment}\n`
    })
    plan += "\n"
    
    plan += "First-Line Medications:\n"
    primarySubtype.treatments.firstLine.forEach(treatment => {
      plan += `  • ${treatment}\n`
    })
    plan += "\n"
    
    plan += "Second-Line Options:\n"
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
                POTS Subtype Analysis Complete
              </CardTitle>
              <CardDescription>
                Personalized treatment recommendations based on subtype assessment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Badge className={`px-4 py-2 text-lg bg-${primarySubtype.color}-100 text-${primarySubtype.color}-800`}>
                  Primary: {primarySubtype.name}
                </Badge>
                <p className="text-sm text-gray-600 mt-2">
                  {primarySubtype.percentage}% likelihood ({primarySubtype.score}/{primarySubtype.maxScore} criteria)
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
                      <h4 className="font-semibold text-sm">Criteria Met:</h4>
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
                  <h3 className="font-semibold text-lg">All Subtype Scores</h3>
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
                      Non-Pharmacological
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
                      First-Line Rx
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
                      Second-Line Options
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
                    <strong>Mixed Subtype Considerations:</strong> This patient also shows features of{' '}
                    {secondarySubtypes.map(s => s.name).join(' and ')}. Consider combination therapy approaches 
                    and monitor response to initial treatment.
                  </AlertDescription>
                </Alert>
              )}

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Clinical Pearls</h4>
                <div className="text-sm space-y-2">
                  <p>• Start with non-pharmacological interventions for all POTS subtypes</p>
                  <p>• Begin medications at low doses and titrate slowly</p>
                  <p>• Monitor response and adjust treatment based on symptom improvement</p>
                  <p>• Consider specialist referral for complex cases or treatment failures</p>
                  <p>• Re-assess subtype if treatment response is poor</p>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => {
                  setSubtypeData(potsSubtypes.map(s => ({ ...s })))
                  setIsComplete(false)
                }} variant="outline">
                  Reassess Subtype
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
                  Download Treatment Plan
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
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <Users className="h-5 w-5 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">POTS Subtype & Treatment Advisor</h1>
              <p className="text-gray-600">Determine POTS subtype for personalized treatment recommendations</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
              <CardDescription>Basic patient details for treatment planning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Patient Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="25"
                    value={patientAge || ''}
                    onChange={(e) => setPatientAge(parseInt(e.target.value) || null)}
                  />
                </div>
                <div>
                  <Label>Relevant Comorbidities (check all that apply)</Label>
                  <div className="flex gap-4 mt-2">
                    {['Diabetes', 'Autoimmune disease', 'EDS', 'MCAS'].map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox
                          id={condition}
                          checked={comorbidities.includes(condition)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setComorbidities(prev => [...prev, condition])
                            } else {
                              setComorbidities(prev => prev.filter(c => c !== condition))
                            }
                          }}
                        />
                        <Label htmlFor={condition} className="text-sm">{condition}</Label>
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
                    <strong>Score:</strong> {subtype.criteria.filter(c => c.checked).length}/{subtype.criteria.length} criteria met
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-center">
            <Button onClick={() => setIsComplete(true)} size="lg" className="px-8">
              <Pill className="h-4 w-4 mr-2" />
              Generate Treatment Recommendations
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}