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
import { useTranslation } from '@/lib/language-context'

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

const createScreeningQuestions = (t: any) => t.quickScreen.questions.map((question: string, index: number) => ({
  id: index + 1,
  question,
  category: ['core', 'pem', 'core', 'core', 'cardiovascular', 'orthostatic', 'history', 'duration', 'pain', 'neurological', 'autonomic', 'gi', 'respiratory', 'functional', 'sensory', 'functional'][index]
}))

const createRedFlagSymptoms = (t: any) => t.redFlag.symptoms.list.map((symptom: string, index: number) => ({
  id: ['fever', 'weight_loss', 'chest_pain', 'dyspnea', 'neurological', 'bleeding', 'lymphadenopathy', 'jaundice'][index],
  symptom,
  priority: 'high'
}))

const createPemQuestions = (t: any) => [
  {
    id: 'frequency',
    question: t.pem.questions.frequency.question,
    options: t.pem.questions.frequency.options.map((label: string, index: number) => ({
      value: ['never', 'rarely', 'sometimes', 'often', 'always'][index],
      label,
      score: index
    }))
  },
  {
    id: 'severity',
    question: t.pem.questions.severity.question,
    options: t.pem.questions.severity.options.map((label: string, index: number) => ({
      value: ['none', 'mild', 'moderate', 'severe', 'very_severe'][index],
      label,
      score: index
    }))
  },
  {
    id: 'recovery_time',
    question: t.pem.questions.recoveryTime.question,
    options: t.pem.questions.recoveryTime.options.map((label: string, index: number) => ({
      value: ['no_recovery_needed', 'hours', 'one_day', 'several_days', 'week_or_more'][index],
      label,
      score: index
    }))
  }
]

export default function NewPatientWorkflow() {
  const { t } = useTranslation()
  const [currentStep, setCurrentStep] = useState<WorkflowStep>('demographics')
  const [patientData, setPatientData] = useState<PatientData>(initialPatientData)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  
  const screeningQuestions = createScreeningQuestions(t)
  const redFlagSymptoms = createRedFlagSymptoms(t)
  const pemQuestions = createPemQuestions(t)

  // Auto-process criteria when in criteria step
  useEffect(() => {
    if (currentStep === 'criteria') {
      finalizeDiagnoses()
    }
  }, [currentStep])

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
                {t.newPatient.results.title}
              </CardTitle>
              <CardDescription>
                {t.newPatient.results.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className={`border-2 ${patientData.diagnoses.mecfs.met ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                  <CardContent className="pt-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-sm">ME/CFS (G93.32)</h3>
                      <Badge variant={patientData.diagnoses.mecfs.met ? 'default' : 'secondary'} className="mt-2">
                        {patientData.diagnoses.mecfs.met ? t.criteria.results.criteriaMet : t.common.notMet}
                      </Badge>
                      {patientData.diagnoses.mecfs.met && (
                        <p className="text-xs text-green-700 mt-1">
                          {t.common.confidence}: {patientData.diagnoses.mecfs.confidence}
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
                        {patientData.diagnoses.longCovid.met ? t.criteria.results.criteriaMet : t.common.notMet}
                      </Badge>
                      {patientData.diagnoses.longCovid.met && (
                        <p className="text-xs text-green-700 mt-1">
                          {t.common.confidence}: {patientData.diagnoses.longCovid.confidence}
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
                        {patientData.diagnoses.pots.met ? t.criteria.results.criteriaMet : t.common.notMet}
                      </Badge>
                      {patientData.diagnoses.pots.met && (
                        <p className="text-xs text-green-700 mt-1">
                          {t.common.confidence}: {patientData.diagnoses.pots.confidence}
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
                    <strong>{t.newPatient.results.noDefinitiveDiagnoses}:</strong> Consider alternative diagnoses, 
                    subclinical presentations, or ongoing symptom monitoring. Some patients may 
                    benefit from symptomatic treatment while monitoring for progression.
                  </AlertDescription>
                </Alert>
              )}

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-900">{t.newPatient.results.keyResults}</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>{t.newPatient.results.riskLevel}:</strong> {patientData.quickScreen.riskLevel.toUpperCase()}</p>
                    <p><strong>{t.newPatient.results.screeningScore}:</strong> {patientData.quickScreen.score}/16</p>
                    <p><strong>{t.newPatient.results.pemPresent}:</strong> {patientData.pemQuest.present ? t.common.yes : t.common.no}</p>
                  </div>
                  <div>
                    <p><strong>{t.newPatient.results.potsCriteria}:</strong> {patientData.standTest.meetsPOTS ? t.common.met : t.common.notMet}</p>
                    <p><strong>{t.newPatient.results.redFlags}:</strong> {patientData.redFlags.symptoms.length > 0 ? patientData.redFlags.symptoms.length + ' identified' : t.common.none}</p>
                    <p><strong>{t.newPatient.results.priority}:</strong> {patientData.redFlags.priority}</p>
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
                  {t.newPatient.results.newAssessment}
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
                  {t.newPatient.results.downloadSOAP}
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
              {t.app.backToDashboard}
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <User className="h-5 w-5 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t.newPatient.title}</h1>
                <p className="text-gray-600">{t.newPatient.description}</p>
              </div>
            </div>
            
            <Progress value={getStepProgress()} className="h-2" />
            <p className="text-sm text-gray-600 mt-2">{t.newPatient.demographics.step}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t.newPatient.demographics.title}</CardTitle>
              <CardDescription>{t.newPatient.demographics.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">{t.newPatient.demographics.age} *</Label>
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
                  <Label>{t.newPatient.demographics.gender} *</Label>
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
                      <Label htmlFor="female">{t.common.female}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">{t.common.male}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">{t.common.other}</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="clinician">{t.newPatient.demographics.clinicianName}</Label>
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
                  <Label htmlFor="patientId">{t.newPatient.demographics.patientId}</Label>
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
                  {t.newPatient.demographics.startAssessment}
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
                <h1 className="text-2xl font-bold text-gray-900">{t.quickScreen.title}</h1>
                <p className="text-gray-600">{t.quickScreen.description}</p>
              </div>
            </div>
            
            <Progress value={getStepProgress()} className="h-2 mb-2" />
            <Progress value={progress} className="h-1" />
            <p className="text-sm text-gray-600 mt-2">
              {t.common.question} {currentQuestionIndex + 1} {t.common.of} {screeningQuestions.length}
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
                    {t.common.yes}
                  </Button>
                  <Button
                    onClick={() => handleQuickScreenAnswer(currentQuestion.id, false)}
                    variant={currentAnswer === false ? "default" : "outline"}
                    className="flex items-center gap-2 px-8"
                  >
                    {t.common.no}
                  </Button>
                </div>

                <div className="flex justify-between pt-6">
                  <Button 
                    onClick={() => setCurrentQuestionIndex(prev => prev - 1)} 
                    disabled={currentQuestionIndex === 0}
                    variant="outline"
                  >
                    {t.common.previous}
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
                    {currentQuestionIndex === screeningQuestions.length - 1 ? t.common.continue : t.common.next}
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
                <h1 className="text-2xl font-bold text-gray-900">{t.newPatient.redFlags.title}</h1>
                <p className="text-gray-600">{t.newPatient.redFlags.description}</p>
              </div>
            </div>
            <Progress value={getStepProgress()} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t.redFlag.symptoms.title}</CardTitle>
              <CardDescription>{t.newPatient.redFlags.selectSymptoms}</CardDescription>
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
                  {t.newPatient.redFlags.continueAssessment}
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
                <h1 className="text-2xl font-bold text-gray-900">{t.newPatient.standTest.title}</h1>
                <p className="text-gray-600">{t.newPatient.standTest.description}</p>
              </div>
            </div>
            <Progress value={getStepProgress()} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t.newPatient.standTest.measurements}</CardTitle>
              <CardDescription>{t.newPatient.standTest.measurementDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="baselineHR">{t.newPatient.standTest.baselineHR}</Label>
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
                  <Label htmlFor="peakHR">{t.newPatient.standTest.peakHR}</Label>
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
                    <strong>{t.newPatient.standTest.hrIncrease}: {patientData.standTest.peakHR - patientData.standTest.baselineHR} {t.common.bpm}</strong><br />
                    {t.newPatient.standTest.potsCriteria} (≥30 {t.common.bpm}): {patientData.standTest.meetsPOTS ? t.common.met.toUpperCase() : t.common.notMet}
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="flex justify-center pt-4">
                <Button 
                  onClick={() => setCurrentStep(determineNextStep())}
                  disabled={!patientData.standTest.baselineHR || !patientData.standTest.peakHR}
                >
                  {t.newPatient.standTest.continueToPEM}
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
                <h1 className="text-2xl font-bold text-gray-900">{t.newPatient.pemAssessment.title}</h1>
                <p className="text-gray-600">{t.newPatient.pemAssessment.description}</p>
              </div>
            </div>
            <Progress value={getStepProgress()} className="h-2 mb-2" />
            <Progress value={progress} className="h-1" />
            <p className="text-sm text-gray-600 mt-2">
              {t.common.question} {(currentQuestionIndex % pemQuestions.length) + 1} {t.common.of} {pemQuestions.length}
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
                  {currentQuestionIndex === pemQuestions.length - 1 ? t.newPatient.pemAssessment.finalizeAssessment : t.common.next}
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
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">{t.newPatient.processing.title}</h3>
              <p className="text-gray-600">{t.newPatient.processing.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return <div>Loading...</div>
}