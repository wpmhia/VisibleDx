'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ArrowLeft, ArrowRight, User, ClipboardList, FileText, Download, CheckCircle, AlertTriangle, Activity, Heart, Clock, BarChart3 } from 'lucide-react'
import Link from 'next/link'

interface PatientData {
  demographics: {
    age: number | null
    gender: string
    clinicianName: string
    patientId: string
  }
  quickScreen: {
    answers: Record<number, boolean>
    score: number
    riskLevel: string
  }
  redFlags: {
    symptoms: string[]
    labsRecommended: string[]
    priority: string
  }
  standTest: {
    performed: boolean
    baselineHR: number | null
    peakHR: number | null
    sustainedHR: number | null
    meetsPOTS: boolean
  }
  pemQuest: {
    answers: Record<string, string>
    score: number
    severity: string
    present: boolean
  }
  diagnoses: {
    mecfs: { met: boolean; confidence: string }
    longCovid: { met: boolean; confidence: string }
    pots: { met: boolean; confidence: string; subtype?: string }
  }
}

const initialPatientData: PatientData = {
  demographics: {
    age: null,
    gender: '',
    clinicianName: '',
    patientId: ''
  },
  quickScreen: {
    answers: {},
    score: 0,
    riskLevel: 'low'
  },
  redFlags: {
    symptoms: [],
    labsRecommended: [],
    priority: 'routine'
  },
  standTest: {
    performed: false,
    baselineHR: null,
    peakHR: null,
    sustainedHR: null,
    meetsPOTS: false
  },
  pemQuest: {
    answers: {},
    score: 0,
    severity: 'none',
    present: false
  },
  diagnoses: {
    mecfs: { met: false, confidence: 'low' },
    longCovid: { met: false, confidence: 'low' },
    pots: { met: false, confidence: 'low' }
  }
}

type WorkflowStep = 'demographics' | 'quickScreen' | 'redFlags' | 'standTest' | 'pemQuest' | 'criteria' | 'summary'

const screeningQuestions = [
  { id: 1, question: "Do you experience severe fatigue that is not relieved by rest?", category: "core" },
  { id: 2, question: "Does physical or mental activity make your symptoms worse (Post-Exertional Malaise)?", category: "pem" },
  { id: 3, question: "Do you have unrefreshing sleep, regardless of duration?", category: "core" },
  { id: 4, question: "Do you experience cognitive difficulties (brain fog, memory problems)?", category: "core" },
  { id: 5, question: "Do you have palpitations or rapid heart rate, especially when standing?", category: "cardiovascular" },
  { id: 6, question: "Do you experience dizziness or lightheadedness when standing up?", category: "orthostatic" },
  { id: 7, question: "Have you had COVID-19 or suspected COVID-19 infection?", category: "history" },
  { id: 8, question: "Have your symptoms persisted for 3 months or longer?", category: "duration" },
  { id: 9, question: "Do you experience muscle pain or joint pain without swelling?", category: "pain" },
  { id: 10, question: "Do you have frequent headaches or changes in headache patterns?", category: "neurological" },
  { id: 11, question: "Do you experience temperature dysregulation (feeling too hot/cold)?", category: "autonomic" },
  { id: 12, question: "Do you have gastrointestinal symptoms (nausea, bloating, changes in bowel habits)?", category: "gi" },
  { id: 13, question: "Do you experience shortness of breath or breathing difficulties?", category: "respiratory" },
  { id: 14, question: "Have you noticed decreased exercise tolerance or physical capacity?", category: "functional" },
  { id: 15, question: "Do you experience sensitivity to light, sound, or touch?", category: "sensory" },
  { id: 16, question: "Have you been unable to maintain your previous level of activity?", category: "functional" }
]

const redFlagSymptoms = [
  { id: 'fever', symptom: 'Persistent fever or night sweats', priority: 'high' },
  { id: 'weight_loss', symptom: 'Unintentional weight loss >10% in 6 months', priority: 'high' },
  { id: 'chest_pain', symptom: 'Chest pain with exertion or at rest', priority: 'high' },
  { id: 'dyspnea', symptom: 'Progressive shortness of breath', priority: 'high' },
  { id: 'neurological', symptom: 'New neurological symptoms (weakness, numbness, seizures)', priority: 'high' },
  { id: 'bleeding', symptom: 'Abnormal bleeding or bruising', priority: 'high' }
]

const pemQuestions = [
  {
    id: 'frequency',
    question: 'How often do you experience a worsening of symptoms following physical activity?',
    options: [
      { value: 'never', label: 'Never', score: 0 },
      { value: 'rarely', label: 'Rarely (less than 25% of the time)', score: 1 },
      { value: 'sometimes', label: 'Sometimes (25-50% of the time)', score: 2 },
      { value: 'often', label: 'Often (50-75% of the time)', score: 3 },
      { value: 'always', label: 'Always or almost always (more than 75% of the time)', score: 4 }
    ]
  },
  {
    id: 'severity',
    question: 'How severe is the worsening of your symptoms after activity?',
    options: [
      { value: 'none', label: 'No worsening', score: 0 },
      { value: 'mild', label: 'Mild - slightly worse than before activity', score: 1 },
      { value: 'moderate', label: 'Moderate - noticeably worse, but manageable', score: 2 },
      { value: 'severe', label: 'Severe - significantly worse, difficult to function', score: 3 },
      { value: 'very_severe', label: 'Very severe - unable to function, bedridden', score: 4 }
    ]
  },
  {
    id: 'recovery_time',
    question: 'How long does it typically take for your symptoms to return to baseline after activity?',
    options: [
      { value: 'no_recovery_needed', label: 'No recovery time needed', score: 0 },
      { value: 'hours', label: 'A few hours', score: 1 },
      { value: 'one_day', label: 'About one day', score: 2 },
      { value: 'several_days', label: 'Several days (2-6 days)', score: 3 },
      { value: 'week_or_more', label: 'A week or more', score: 4 }
    ]
  }
]

export default function NewPatientWorkflow() {
  const [currentStep, setCurrentStep] = useState<WorkflowStep>('demographics')
  const [patientData, setPatientData] = useState<PatientData>(initialPatientData)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const getStepProgress = () => {
    const steps: WorkflowStep[] = ['demographics', 'quickScreen', 'redFlags', 'standTest', 'pemQuest', 'criteria', 'summary']
    const currentIndex = steps.indexOf(currentStep)
    return ((currentIndex + 1) / steps.length) * 100
  }

  const calculateQuickScreenRisk = (answers: Record<number, boolean>) => {
    const totalYes = Object.values(answers).filter(Boolean).length
    const coreSymptoms = [1, 3, 4].filter(id => answers[id]).length
    const pemPresent = answers[2]
    const chronicity = answers[8]
    
    let riskLevel = 'low'
    if (totalYes >= 8 && coreSymptoms >= 2 && pemPresent && chronicity) {
      riskLevel = 'high'
    } else if (totalYes >= 5 && (coreSymptoms >= 2 || pemPresent)) {
      riskLevel = 'medium'
    }
    
    return { score: totalYes, riskLevel }
  }

  const calculatePEMScore = (answers: Record<string, string>) => {
    const totalScore = pemQuestions.reduce((sum, question) => {
      const answer = answers[question.id]
      const option = question.options.find(opt => opt.value === answer)
      return sum + (option?.score || 0)
    }, 0)

    const maxScore = pemQuestions.reduce((sum, question) => {
      return sum + Math.max(...question.options.map(opt => opt.score))
    }, 0)

    const percentage = (totalScore / maxScore) * 100
    
    let severity = 'none'
    if (percentage >= 75) severity = 'severe'
    else if (percentage >= 50) severity = 'moderate'
    else if (percentage >= 25) severity = 'mild'

    return { score: totalScore, severity, present: percentage >= 25 }
  }

  const determineNextStep = () => {
    switch (currentStep) {
      case 'demographics':
        return 'quickScreen'
      case 'quickScreen':
        return patientData.quickScreen.riskLevel !== 'low' ? 'redFlags' : 'standTest'
      case 'redFlags':
        return patientData.redFlags.priority === 'urgent' ? 'summary' : 'standTest'
      case 'standTest':
        return 'pemQuest'
      case 'pemQuest':
        return 'criteria'
      case 'criteria':
        return 'summary'
      default:
        return 'summary'
    }
  }

  const generateSOAPNote = () => {
    const { demographics, quickScreen, redFlags, standTest, pemQuest, diagnoses } = patientData
    const currentDate = new Date().toLocaleDateString()
    
    let soap = `CLINICAL ASSESSMENT - AutoDx Report\n`
    soap += `=========================================\n\n`
    soap += `Date: ${currentDate}\n`
    soap += `Clinician: ${demographics.clinicianName || 'Not specified'}\n`
    soap += `Patient ID: ${demographics.patientId || 'Not specified'}\n`
    soap += `Age: ${demographics.age || 'Not specified'} | Gender: ${demographics.gender || 'Not specified'}\n\n`

    soap += `SUBJECTIVE:\n`
    soap += `Chief Complaint: Chronic fatigue, post-exertional symptoms, and orthostatic intolerance\n`
    soap += `Quick-Screen Risk Assessment: ${quickScreen.riskLevel.toUpperCase()} (${quickScreen.score}/16 positive responses)\n`
    
    if (redFlags.symptoms.length > 0) {
      soap += `Red Flag Symptoms: ${redFlags.symptoms.join(', ')}\n`
    } else {
      soap += `Red Flag Symptoms: None identified\n`
    }
    
    soap += `Post-Exertional Malaise: ${pemQuest.present ? `Present (${pemQuest.severity} severity)` : 'Not present'}\n`
    soap += `Symptom Duration: ${patientData.quickScreen.answers[8] ? '≥3 months' : '<3 months or unclear'}\n\n`

    soap += `OBJECTIVE:\n`
    if (standTest.performed) {
      soap += `Orthostatic Vital Signs (10-min stand test):\n`
      soap += `  - Baseline HR: ${standTest.baselineHR || 'Not recorded'} bpm\n`
      soap += `  - Peak Standing HR: ${standTest.peakHR || 'Not recorded'} bpm\n`
      soap += `  - HR Increase: ${standTest.peakHR && standTest.baselineHR ? standTest.peakHR - standTest.baselineHR : 'Cannot calculate'} bpm\n`
      soap += `  - POTS Criteria: ${standTest.meetsPOTS ? 'MET (≥30 bpm increase)' : 'Not met'}\n`
    } else {
      soap += `Orthostatic Testing: Not performed\n`
    }
    
    if (redFlags.labsRecommended.length > 0) {
      soap += `Recommended Laboratory Studies: ${redFlags.labsRecommended.join(', ')}\n`
    }
    soap += `\n`

    soap += `ASSESSMENT:\n`
    const positiveDiagnoses: string[] = []
    if (diagnoses.mecfs.met) positiveDiagnoses.push(`ME/CFS (G93.32) - ${diagnoses.mecfs.confidence} confidence`)
    if (diagnoses.longCovid.met) positiveDiagnoses.push(`Long COVID (U09.9) - ${diagnoses.longCovid.confidence} confidence`)
    if (diagnoses.pots.met) positiveDiagnoses.push(`POTS (I47.1) - ${diagnoses.pots.confidence} confidence`)
    
    if (positiveDiagnoses.length > 0) {
      soap += `Diagnoses meeting criteria:\n`
      positiveDiagnoses.forEach(dx => soap += `  • ${dx}\n`)
    } else {
      soap += `No definitive diagnostic criteria met at this time\n`
      soap += `Consider: Alternative diagnoses, subclinical presentations, symptom monitoring\n`
    }
    soap += `\n`

    soap += `PLAN:\n`
    
    if (redFlags.priority === 'urgent') {
      soap += `URGENT: Complete red flag workup before proceeding with chronic illness evaluation\n`
      soap += `  - Expedite recommended laboratory studies\n`
      soap += `  - Consider same-day or next-day specialist consultation\n\n`
    }
    
    if (diagnoses.mecfs.met) {
      soap += `ME/CFS Management:\n`
      soap += `  • Activity pacing and energy management education\n`
      soap += `  • Avoid graded exercise therapy (contraindicated)\n`
      soap += `  • Symptom-directed treatments (sleep, pain, orthostatic symptoms)\n`
      soap += `  • ME/CFS specialist referral if available\n`
      soap += `  • Disability evaluation if functional capacity severely impaired\n\n`
    }
    
    if (diagnoses.longCovid.met) {
      soap += `Long COVID Management:\n`
      soap += `  • Multidisciplinary symptom management approach\n`
      soap += `  • Long COVID clinic referral if available\n`
      soap += `  • Monitor for improvement over time\n`
      soap += `  • Address individual symptoms (fatigue, cognitive, respiratory)\n\n`
    }
    
    if (diagnoses.pots.met) {
      soap += `POTS Management:\n`
      soap += `  • Non-pharmacological: Increase salt (8-10g/day), fluids (2.5-3L/day)\n`
      soap += `  • Compression garments (30-40 mmHg)\n`
      soap += `  • Consider pharmacological therapy based on subtype\n`
      soap += `  • Cardiology or autonomic specialist referral\n`
      soap += `  • Gradual exercise reconditioning when appropriate\n\n`
    }
    
    soap += `Follow-up:\n`
    soap += `  • Reassess in 4-6 weeks or sooner if symptoms worsen\n`
    soap += `  • Repeat stand test if POTS suspected but initial test inconclusive\n`
    soap += `  • Review laboratory results and adjust treatment accordingly\n`
    soap += `  • Patient education materials provided\n\n`
    
    soap += `Clinical Decision Support provided by AutoDx v1.0\n`
    soap += `This assessment is for clinical decision support only and does not replace physician judgment.\n`

    return soap
  }

  const handleDemographicsNext = () => {
    if (patientData.demographics.age && patientData.demographics.gender) {
      setCurrentStep('quickScreen')
    }
  }

  const handleQuickScreenAnswer = (questionId: number, answer: boolean) => {
    const newAnswers = { ...patientData.quickScreen.answers, [questionId]: answer }
    const risk = calculateQuickScreenRisk(newAnswers)
    
    setPatientData(prev => ({
      ...prev,
      quickScreen: {
        answers: newAnswers,
        score: risk.score,
        riskLevel: risk.riskLevel
      }
    }))
  }

  const handlePEMAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...patientData.pemQuest.answers, [questionId]: value }
    const pemScore = calculatePEMScore(newAnswers)
    
    setPatientData(prev => ({
      ...prev,
      pemQuest: {
        answers: newAnswers,
        score: pemScore.score,
        severity: pemScore.severity,
        present: pemScore.present
      }
    }))
  }

  const finalizeDiagnoses = () => {
    const { quickScreen, pemQuest, standTest } = patientData
    
    // ME/CFS criteria
    const coreSymptoms = [1, 3, 4].filter(id => quickScreen.answers[id]).length
    const hasPEM = pemQuest.present
    const hasOrthostatic = quickScreen.answers[6] || standTest.meetsPOTS
    const mecfsMet = coreSymptoms >= 3 && hasPEM && hasOrthostatic && quickScreen.answers[8]
    
    // Long COVID criteria
    const hasCovidHistory = quickScreen.answers[7]
    const hasDuration = quickScreen.answers[8]
    const hasMultiSystem = quickScreen.score >= 4
    const longCovidMet = hasCovidHistory && hasDuration && hasMultiSystem
    
    // POTS criteria
    const potsMet = standTest.meetsPOTS && quickScreen.answers[8] && (quickScreen.answers[5] || quickScreen.answers[6])
    
    setPatientData(prev => ({
      ...prev,
      diagnoses: {
        mecfs: { 
          met: mecfsMet, 
          confidence: mecfsMet ? (coreSymptoms === 3 && hasPEM ? 'high' : 'medium') : 'low' 
        },
        longCovid: { 
          met: longCovidMet, 
          confidence: longCovidMet ? 'high' : 'low' 
        },
        pots: { 
          met: potsMet, 
          confidence: potsMet ? 'high' : 'low' 
        }
      }
    }))
    
    setCurrentStep('summary')
    setIsComplete(true)
  }

  if (isComplete) {
    const soap = generateSOAPNote()
    const anyDiagnosis = Object.values(patientData.diagnoses).some(d => d.met)
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Patient Assessment Complete
              </CardTitle>
              <CardDescription>
                Comprehensive clinical evaluation with SOAP documentation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className={`border-2 ${patientData.diagnoses.mecfs.met ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                  <CardContent className="pt-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-sm">ME/CFS (G93.32)</h3>
                      <Badge variant={patientData.diagnoses.mecfs.met ? 'default' : 'secondary'} className="mt-2">
                        {patientData.diagnoses.mecfs.met ? 'CRITERIA MET' : 'Not Met'}
                      </Badge>
                      {patientData.diagnoses.mecfs.met && (
                        <p className="text-xs text-green-700 mt-1">
                          Confidence: {patientData.diagnoses.mecfs.confidence}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card className={`border-2 ${patientData.diagnoses.longCovid.met ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                  <CardContent className="pt-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-sm">Long COVID (U09.9)</h3>
                      <Badge variant={patientData.diagnoses.longCovid.met ? 'default' : 'secondary'} className="mt-2">
                        {patientData.diagnoses.longCovid.met ? 'CRITERIA MET' : 'Not Met'}
                      </Badge>
                      {patientData.diagnoses.longCovid.met && (
                        <p className="text-xs text-green-700 mt-1">
                          Confidence: {patientData.diagnoses.longCovid.confidence}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card className={`border-2 ${patientData.diagnoses.pots.met ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                  <CardContent className="pt-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-sm">POTS (I47.1)</h3>
                      <Badge variant={patientData.diagnoses.pots.met ? 'default' : 'secondary'} className="mt-2">
                        {patientData.diagnoses.pots.met ? 'CRITERIA MET' : 'Not Met'}
                      </Badge>
                      {patientData.diagnoses.pots.met && (
                        <p className="text-xs text-green-700 mt-1">
                          Confidence: {patientData.diagnoses.pots.confidence}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {!anyDiagnosis && (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>No Definitive Diagnoses:</strong> Consider alternative diagnoses, 
                    subclinical presentations, or ongoing symptom monitoring. Some patients may 
                    benefit from symptomatic treatment while monitoring for progression.
                  </AlertDescription>
                </Alert>
              )}

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-900">Key Assessment Results</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Risk Level:</strong> {patientData.quickScreen.riskLevel.toUpperCase()}</p>
                    <p><strong>Screening Score:</strong> {patientData.quickScreen.score}/16</p>
                    <p><strong>PEM Present:</strong> {patientData.pemQuest.present ? 'Yes' : 'No'}</p>
                  </div>
                  <div>
                    <p><strong>POTS Criteria:</strong> {patientData.standTest.meetsPOTS ? 'Met' : 'Not met'}</p>
                    <p><strong>Red Flags:</strong> {patientData.redFlags.symptoms.length > 0 ? patientData.redFlags.symptoms.length + ' identified' : 'None'}</p>
                    <p><strong>Priority:</strong> {patientData.redFlags.priority}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => {
                  setPatientData(initialPatientData)
                  setCurrentStep('demographics')
                  setCurrentQuestionIndex(0)
                  setIsComplete(false)
                }} variant="outline">
                  New Assessment
                </Button>
                <Button onClick={() => {
                  const blob = new Blob([soap], { type: 'text/plain' })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = `autodx-soap-note-${new Date().toISOString().split('T')[0]}.txt`
                  a.click()
                  URL.revokeObjectURL(url)
                }} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download SOAP Note
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Demographics Step
  if (currentStep === 'demographics') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <User className="h-5 w-5 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">New Patient Assessment</h1>
                <p className="text-gray-600">Intelligent guided evaluation for ME/CFS, Long COVID, and POTS</p>
              </div>
            </div>
            
            <Progress value={getStepProgress()} className="h-2" />
            <p className="text-sm text-gray-600 mt-2">Step 1 of 7: Patient Demographics</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
              <CardDescription>Basic demographics for clinical documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Patient Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="25"
                    value={patientData.demographics.age || ''}
                    onChange={(e) => setPatientData(prev => ({
                      ...prev,
                      demographics: { ...prev.demographics, age: parseInt(e.target.value) || null }
                    }))}
                  />
                </div>
                <div>
                  <Label>Gender *</Label>
                  <RadioGroup 
                    value={patientData.demographics.gender} 
                    onValueChange={(value) => setPatientData(prev => ({
                      ...prev,
                      demographics: { ...prev.demographics, gender: value }
                    }))}
                    className="flex gap-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="clinician">Clinician Name</Label>
                  <Input
                    id="clinician"
                    placeholder="Dr. Smith"
                    value={patientData.demographics.clinicianName}
                    onChange={(e) => setPatientData(prev => ({
                      ...prev,
                      demographics: { ...prev.demographics, clinicianName: e.target.value }
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor="patientId">Patient ID/MRN</Label>
                  <Input
                    id="patientId"
                    placeholder="12345"
                    value={patientData.demographics.patientId}
                    onChange={(e) => setPatientData(prev => ({
                      ...prev,
                      demographics: { ...prev.demographics, patientId: e.target.value }
                    }))}
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button 
                  onClick={handleDemographicsNext}
                  disabled={!patientData.demographics.age || !patientData.demographics.gender}
                  className="flex items-center gap-2"
                >
                  Start Assessment
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Quick Screen Step
  if (currentStep === 'quickScreen') {
    const currentQuestion = screeningQuestions[currentQuestionIndex]
    const currentAnswer = patientData.quickScreen.answers[currentQuestion.id]
    const progress = ((currentQuestionIndex + 1) / screeningQuestions.length) * 100

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="h-5 w-5 text-orange-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Quick Screening Assessment</h1>
                <p className="text-gray-600">16 evidence-based questions (92% sensitivity)</p>
              </div>
            </div>
            
            <Progress value={getStepProgress()} className="h-2 mb-2" />
            <Progress value={progress} className="h-1" />
            <p className="text-sm text-gray-600 mt-2">
              Question {currentQuestionIndex + 1} of {screeningQuestions.length}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
              <CardDescription>Category: {currentQuestion.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={() => handleQuickScreenAnswer(currentQuestion.id, true)}
                    variant={currentAnswer === true ? "default" : "outline"}
                    className="flex items-center gap-2 px-8"
                  >
                    Yes
                  </Button>
                  <Button
                    onClick={() => handleQuickScreenAnswer(currentQuestion.id, false)}
                    variant={currentAnswer === false ? "default" : "outline"}
                    className="flex items-center gap-2 px-8"
                  >
                    No
                  </Button>
                </div>

                <div className="flex justify-between pt-6">
                  <Button 
                    onClick={() => setCurrentQuestionIndex(prev => prev - 1)} 
                    disabled={currentQuestionIndex === 0}
                    variant="outline"
                  >
                    Previous
                  </Button>
                  
                  <Button 
                    onClick={() => {
                      if (currentQuestionIndex < screeningQuestions.length - 1) {
                        setCurrentQuestionIndex(prev => prev + 1)
                      } else {
                        setCurrentStep(determineNextStep())
                      }
                    }}
                    disabled={currentAnswer === undefined}
                  >
                    {currentQuestionIndex === screeningQuestions.length - 1 ? 'Continue' : 'Next'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Red Flags Step
  if (currentStep === 'redFlags') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Red Flag Assessment</h1>
                <p className="text-gray-600">Check for symptoms requiring urgent evaluation</p>
              </div>
            </div>
            <Progress value={getStepProgress()} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Red Flag Symptoms</CardTitle>
              <CardDescription>Select any symptoms present</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {redFlagSymptoms.map((flag) => (
                  <div key={flag.id} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                    <Checkbox
                      id={flag.id}
                      checked={patientData.redFlags.symptoms.includes(flag.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setPatientData(prev => ({
                            ...prev,
                            redFlags: {
                              ...prev.redFlags,
                              symptoms: [...prev.redFlags.symptoms, flag.id],
                              priority: flag.priority === 'high' ? 'urgent' : prev.redFlags.priority
                            }
                          }))
                        } else {
                          const newSymptoms = patientData.redFlags.symptoms.filter(s => s !== flag.id)
                          setPatientData(prev => ({
                            ...prev,
                            redFlags: {
                              ...prev.redFlags,
                              symptoms: newSymptoms,
                              priority: newSymptoms.some(s => redFlagSymptoms.find(rf => rf.id === s)?.priority === 'high') ? 'urgent' : 'routine'
                            }
                          }))
                        }
                      }}
                    />
                    <Label htmlFor={flag.id} className="cursor-pointer text-sm flex-1">
                      {flag.symptom}
                    </Label>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center pt-6">
                <Button onClick={() => setCurrentStep(determineNextStep())}>
                  Continue Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Stand Test Step
  if (currentStep === 'standTest') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <Heart className="h-5 w-5 text-red-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Orthostatic Assessment</h1>
                <p className="text-gray-600">Record baseline and standing heart rates</p>
              </div>
            </div>
            <Progress value={getStepProgress()} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Heart Rate Measurements</CardTitle>
              <CardDescription>Enter heart rate after 5 minutes lying down and peak heart rate within 10 minutes of standing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="baselineHR">Baseline HR (lying down)</Label>
                  <Input
                    id="baselineHR"
                    type="number"
                    placeholder="70"
                    value={patientData.standTest.baselineHR || ''}
                    onChange={(e) => setPatientData(prev => ({
                      ...prev,
                      standTest: {
                        ...prev.standTest,
                        baselineHR: parseInt(e.target.value) || null
                      }
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor="peakHR">Peak Standing HR</Label>
                  <Input
                    id="peakHR"
                    type="number"
                    placeholder="110"
                    value={patientData.standTest.peakHR || ''}
                    onChange={(e) => {
                      const peakHR = parseInt(e.target.value) || null
                      const baselineHR = patientData.standTest.baselineHR
                      const meetsPOTS = peakHR && baselineHR ? (peakHR - baselineHR >= 30) : false
                      
                      setPatientData(prev => ({
                        ...prev,
                        standTest: {
                          ...prev.standTest,
                          peakHR,
                          sustainedHR: peakHR,
                          meetsPOTS,
                          performed: true
                        }
                      }))
                    }}
                  />
                </div>
              </div>
              
              {patientData.standTest.baselineHR && patientData.standTest.peakHR && (
                <Alert className={patientData.standTest.meetsPOTS ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}>
                  <Heart className="h-4 w-4" />
                  <AlertDescription>
                    <strong>HR Increase: {patientData.standTest.peakHR - patientData.standTest.baselineHR} bpm</strong><br />
                    POTS Criteria (≥30 bpm): {patientData.standTest.meetsPOTS ? 'MET' : 'Not met'}
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="flex justify-center pt-4">
                <Button 
                  onClick={() => setCurrentStep(determineNextStep())}
                  disabled={!patientData.standTest.baselineHR || !patientData.standTest.peakHR}
                >
                  Continue to PEM Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // PEM Quest Step
  if (currentStep === 'pemQuest') {
    const currentPEMQuestion = pemQuestions[currentQuestionIndex % pemQuestions.length]
    const currentAnswer = patientData.pemQuest.answers[currentPEMQuestion.id]
    const progress = ((currentQuestionIndex + 1) / pemQuestions.length) * 100

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <Activity className="h-5 w-5 text-orange-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">PEM Assessment</h1>
                <p className="text-gray-600">Post-Exertional Malaise evaluation</p>
              </div>
            </div>
            <Progress value={getStepProgress()} className="h-2 mb-2" />
            <Progress value={progress} className="h-1" />
            <p className="text-sm text-gray-600 mt-2">
              Question {(currentQuestionIndex % pemQuestions.length) + 1} of {pemQuestions.length}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{currentPEMQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={currentAnswer || ''} 
                onValueChange={(value) => handlePEMAnswer(currentPEMQuestion.id, value)}
                className="space-y-3"
              >
                {currentPEMQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <Label htmlFor={option.value} className="cursor-pointer flex-1">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between pt-6">
                <Button 
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)} 
                  disabled={currentQuestionIndex === 0}
                  variant="outline"
                >
                  Previous
                </Button>
                
                <Button 
                  onClick={() => {
                    if (currentQuestionIndex < pemQuestions.length - 1) {
                      setCurrentQuestionIndex(prev => prev + 1)
                    } else {
                      setCurrentStep('criteria')
                    }
                  }}
                  disabled={!currentAnswer}
                >
                  {currentQuestionIndex === pemQuestions.length - 1 ? 'Finalize Assessment' : 'Next'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Criteria Step (auto-process)
  if (currentStep === 'criteria') {
    useEffect(() => {
      finalizeDiagnoses()
    }, [])
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Processing Diagnostic Criteria...</h3>
              <p className="text-gray-600">Analyzing responses against CDC, NASEM, ESC, and WHO guidelines</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return <div>Loading...</div>
}