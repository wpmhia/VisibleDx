'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Battery, CheckCircle, AlertTriangle, Clock, Target, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/lib/language-context'

interface EnergyActivity {
  type: 'cognitive' | 'physical' | 'emotional' | 'social'
  activity: string
  energyCost: number
  duration: number
  canReduce: boolean
}

export default function EnergyManagement() {
  const [currentStep, setCurrentStep] = useState(0)
  const [assessmentData, setAssessmentData] = useState({
    currentEnergyLevel: '',
    symptoms: [] as string[],
    dailyActivities: [] as EnergyActivity[],
    triggers: [] as string[],
    restPeriods: '',
    goals: '',
    energyLimits: ''
  })
  const [isComplete, setIsComplete] = useState(false)
  const { t } = useTranslation()

  const steps = [
    'Energy Assessment',
    'Activity Mapping', 
    'Trigger Identification',
    'Energy Plan Creation',
    'Results & Guidance'
  ]

  const energyLevels = [
    { value: 'severe', label: 'Severe limitation - Can only do essential self-care tasks', score: 1 },
    { value: 'moderate', label: 'Moderate limitation - Reduced activities, frequent rest needed', score: 2 },
    { value: 'mild', label: 'Mild limitation - Some activities affected, weekend recovery', score: 3 },
    { value: 'minimal', label: 'Minimal limitation - Slight reduction in stamina', score: 4 }
  ]

  const commonSymptoms = [
    'Post-exertional malaise',
    'Unrefreshing sleep',
    'Cognitive difficulties (brain fog)',
    'Orthostatic intolerance',
    'Temperature sensitivity',
    'Sensory hypersensitivity',
    'Muscle/joint pain',
    'Flu-like symptoms'
  ]

  const activityTypes = [
    { type: 'cognitive', label: 'Cognitive (thinking, concentrating)', examples: 'Reading, computer work, decision making' },
    { type: 'physical', label: 'Physical (movement, exertion)', examples: 'Walking, household tasks, exercise' },
    { type: 'emotional', label: 'Emotional (stress, feelings)', examples: 'Difficult conversations, worry, excitement' },
    { type: 'social', label: 'Social (interaction, engagement)', examples: 'Meetings, social events, phone calls' }
  ]

  const calculateEnergyBudget = () => {
    const energyLevel = energyLevels.find(e => e.value === assessmentData.currentEnergyLevel)?.score || 0
    const baseEnergy = energyLevel * 25 // 25, 50, 75, 100
    const symptomDrain = assessmentData.symptoms.length * 5
    const availableEnergy = Math.max(10, baseEnergy - symptomDrain)
    
    return {
      totalEnergy: baseEnergy,
      symptomDrain,
      availableEnergy,
      safeLevel: availableEnergy * 0.8, // 80% of available energy for safety margin
      emergencyReserve: availableEnergy * 0.2
    }
  }

  const generateEnergyPlan = () => {
    const budget = calculateEnergyBudget()
    const plan = {
      dailyEnergyBudget: budget.safeLevel,
      restSchedule: 'Plan rest periods between activities',
      activityPacing: 'Break activities into smaller chunks',
      monitoringSigns: 'Watch for early warning signs of energy depletion',
      emergencyProtocol: 'What to do during flare-ups'
    }

    const recommendations = []
    
    if (budget.availableEnergy < 30) {
      recommendations.push('Focus on essential activities only')
      recommendations.push('Frequent rest periods (every 15-30 minutes)')
      recommendations.push('Consider assistance with daily activities')
    } else if (budget.availableEnergy < 60) {
      recommendations.push('Moderate activity levels with regular breaks')
      recommendations.push('Alternate between different types of activities')
      recommendations.push('Plan demanding activities for your best time of day')
    } else {
      recommendations.push('Maintain awareness of energy limits')
      recommendations.push('Pre-emptive rest before activities')
      recommendations.push('Monitor for gradual increases in tolerance')
    }

    return { plan, recommendations, budget }
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setIsComplete(true)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  if (isComplete) {
    const { plan, recommendations, budget } = generateEnergyPlan()
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-green-600" />
                NICE NG206 Energy Management Plan
              </CardTitle>
              <CardDescription>
                Personalised energy management based on NICE guidelines for ME/CFS
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Battery className="h-5 w-5" />
                      Your Energy Budget
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Total Energy Capacity:</span>
                        <Badge>{budget.totalEnergy}%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Symptom Energy Cost:</span>
                        <Badge variant="destructive">-{budget.symptomDrain}%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Available Energy:</span>
                        <Badge variant="secondary">{budget.availableEnergy}%</Badge>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between items-center font-semibold">
                          <span className="text-sm">Safe Daily Budget:</span>
                          <Badge className="bg-green-100 text-green-800">{Math.round(budget.safeLevel)}%</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      NICE NG206 Principles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Energy management is self-management led by you</li>
                      <li>• Do not use more energy than you perceive you have</li>
                      <li>• Do not 'push through' your symptoms</li>
                      <li>• Activity is never automatically increased</li>
                      <li>• Flexible approach - adjust based on symptoms</li>
                      <li>• Long-term approach - stabilisation takes time</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="border-yellow-200 bg-yellow-50">
                <Lightbulb className="h-4 w-4" />
                <AlertDescription>
                  <strong>NICE NG206 Key Point:</strong> Energy management helps you learn to use the amount of energy you have while reducing your risk of post-exertional malaise. You are the expert in judging your own limits.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle>Your Personalised Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Daily Management:</h4>
                      <ul className="text-sm space-y-1">
                        {recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-600">•</span>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Activity Planning:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plan periods of rest and activity</li>
                        <li>• Alternate between different activity types</li>
                        <li>• Break activities into small chunks</li>
                        <li>• Use pre-emptive rest</li>
                        <li>• Monitor for early warning signs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold mb-2 text-red-900 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Flare-up and Relapse Management
                </h4>
                <div className="text-red-800 text-sm space-y-2">
                  <p><strong>During a flare-up:</strong> Temporarily reduce activity levels and increase rest periods</p>
                  <p><strong>During a relapse:</strong> Substantially reduce activities and reassess energy limits to stabilise symptoms</p>
                  <p><strong>Recovery:</strong> Do not return to usual activity levels until symptoms have stabilised</p>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => {
                  setCurrentStep(0)
                  setAssessmentData({
                    currentEnergyLevel: '',
                    symptoms: [],
                    dailyActivities: [],
                    triggers: [],
                    restPeriods: '',
                    goals: '',
                    energyLimits: ''
                  })
                  setIsComplete(false)
                }} variant="outline">
                  Create New Plan
                </Button>
                <Button onClick={() => {
                  const content = `NICE NG206 Energy Management Plan
                  
Energy Budget: ${Math.round(budget.safeLevel)}% daily
Current Energy Level: ${assessmentData.currentEnergyLevel}
Symptoms: ${assessmentData.symptoms.join(', ')}

Recommendations:
${recommendations.map(r => `• ${r}`).join('\n')}

Remember: You are the expert in judging your own limits. Do not push through symptoms.`
                  
                  const blob = new Blob([content], { type: 'text/plain' })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = 'energy-management-plan.txt'
                  a.click()
                  URL.revokeObjectURL(url)
                }}>
                  Download Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Battery className="h-5 w-5 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">NICE NG206 Energy Management</h1>
              <p className="text-gray-600">Create your personalised energy management plan</p>
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-gray-600 mt-2">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {steps[currentStep]}
            </CardTitle>
            <CardDescription>
              {currentStep === 0 && "Assess your current energy level and symptoms"}
              {currentStep === 1 && "Map your daily activities and energy costs"}
              {currentStep === 2 && "Identify triggers for symptom worsening"}
              {currentStep === 3 && "Set goals and energy limits"}
              {currentStep === 4 && "Review your personalised plan"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium">Current Energy Level</Label>
                    <RadioGroup 
                      value={assessmentData.currentEnergyLevel} 
                      onValueChange={(value) => setAssessmentData(prev => ({ ...prev, currentEnergyLevel: value }))}
                      className="mt-2"
                    >
                      {energyLevels.map((level) => (
                        <div key={level.value} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                          <RadioGroupItem value={level.value} id={level.value} className="mt-1" />
                          <Label htmlFor={level.value} className="cursor-pointer flex-1">
                            {level.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium">Current Symptoms (Select all that apply)</Label>
                    <div className="grid md:grid-cols-2 gap-2 mt-2">
                      {commonSymptoms.map((symptom) => (
                        <div key={symptom} className="flex items-center space-x-2">
                          <Checkbox
                            id={symptom}
                            checked={assessmentData.symptoms.includes(symptom)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setAssessmentData(prev => ({ 
                                  ...prev, 
                                  symptoms: [...prev.symptoms, symptom] 
                                }))
                              } else {
                                setAssessmentData(prev => ({ 
                                  ...prev, 
                                  symptoms: prev.symptoms.filter(s => s !== symptom) 
                                }))
                              }
                            }}
                          />
                          <Label htmlFor={symptom} className="text-sm">{symptom}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    NICE NG206: Consider all types of activity - cognitive, physical, emotional and social
                  </p>
                  {activityTypes.map((type) => (
                    <Card key={type.type} className="border-gray-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{type.label}</CardTitle>
                        <CardDescription className="text-xs">{type.examples}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-gray-600">
                          Consider how much energy these activities cost you on a typical day.
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="triggers" className="text-base font-medium">
                      What activities or situations consistently trigger symptom worsening?
                    </Label>
                    <Textarea
                      id="triggers"
                      placeholder="e.g., phone calls, standing for long periods, bright lights, social events..."
                      value={assessmentData.triggers.join('\n')}
                      onChange={(e) => setAssessmentData(prev => ({ 
                        ...prev, 
                        triggers: e.target.value.split('\n').filter(t => t.trim()) 
                      }))}
                      className="mt-2"
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="goals" className="text-base font-medium">
                      What are your priorities and goals for managing your energy?
                    </Label>
                    <Textarea
                      id="goals"
                      placeholder="e.g., be able to work part-time, maintain relationships, manage household tasks..."
                      value={assessmentData.goals}
                      onChange={(e) => setAssessmentData(prev => ({ ...prev, goals: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="limits" className="text-base font-medium">
                      What have you learned about your energy limits?
                    </Label>
                    <Textarea
                      id="limits"
                      placeholder="e.g., can work for 2 hours before needing rest, social events drain me for days..."
                      value={assessmentData.energyLimits}
                      onChange={(e) => setAssessmentData(prev => ({ ...prev, energyLimits: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-6">
                <Button 
                  onClick={prevStep} 
                  disabled={currentStep === 0}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  Previous
                </Button>
                
                <Button 
                  onClick={nextStep}
                  disabled={currentStep === 0 && !assessmentData.currentEnergyLevel}
                  className="flex items-center gap-2"
                >
                  {currentStep === steps.length - 1 ? 'Create Plan' : 'Next'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}