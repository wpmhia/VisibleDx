'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  FileText, 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  Brain,
  Heart,
  Activity,
  Lightbulb,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/lib/language-context'

interface CaseAnalysisResult {
  overallScore: number
  mecfsLikelihood: 'very-high' | 'high' | 'moderate' | 'low' | 'very-low'
  criteriaAssessment: {
    debilitatingFatigue: boolean
    postExertionalMalaise: boolean
    unrefreshingSleep: boolean
    cognitiveDifficulties: boolean
    duration: boolean
  }
  redFlags: string[]
  pemIndicators: {
    present: boolean
    severity: 'none' | 'mild' | 'moderate' | 'severe'
    evidence: string[]
  }
  differentialDiagnoses: string[]
  recommendations: string[]
  keyFindings: string[]
}

// Clinical keyword patterns for analysis
const CLINICAL_PATTERNS = {
  // Core ME/CFS symptoms
  debilitatingFatigue: [
    'severe fatigue', 'debilitating fatigue', 'exhaustion', 'extreme tiredness',
    'profound fatigue', 'overwhelming fatigue', 'crushing fatigue'
  ],
  postExertionalMalaise: [
    'post-exertional malaise', 'PEM', 'crashes after activity', 'worsens with activity',
    'worse after exercise', 'activity intolerance', 'delayed recovery', 'payback',
    'flare after activity', 'symptom exacerbation'
  ],
  unrefreshingSleep: [
    'unrefreshing sleep', 'non-restorative sleep', 'wakes tired', 'poor sleep quality',
    'sleep doesn\'t help', 'still tired after sleep', 'no rest from sleep'
  ],
  cognitiveDifficulties: [
    'brain fog', 'cognitive dysfunction', 'memory problems', 'concentration issues',
    'word finding difficulties', 'mental fatigue', 'confusion', 'cognitive impairment'
  ],
  
  // Duration indicators
  duration: [
    'months', 'chronic', 'ongoing', 'persistent', 'long-term', '6 months', 'year'
  ],
  
  // Red flag symptoms
  redFlags: [
    'weight loss', 'fever', 'night sweats', 'lymphadenopathy', 'neurological deficits',
    'chest pain', 'shortness of breath', 'bleeding', 'jaundice', 'seizures'
  ],
  
  // Triggering events
  triggers: [
    'viral infection', 'flu', 'COVID', 'mononucleosis', 'stress', 'surgery',
    'vaccination', 'bacterial infection', 'illness'
  ],
  
  // Additional symptoms
  orthostatic: [
    'dizziness on standing', 'palpitations', 'racing heart', 'orthostatic intolerance',
    'POTS', 'tachycardia on standing'
  ],
  pain: [
    'muscle pain', 'joint pain', 'headaches', 'sore throat', 'tender lymph nodes'
  ]
}

export default function CaseAnalyzer() {
  const [caseText, setCaseText] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<CaseAnalysisResult | null>(null)
  const { t } = useTranslation()

  const analyzeCaseText = (text: string): CaseAnalysisResult => {
    const lowerText = text.toLowerCase()
    
    // Check core criteria
    const criteriaAssessment = {
      debilitatingFatigue: CLINICAL_PATTERNS.debilitatingFatigue.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      postExertionalMalaise: CLINICAL_PATTERNS.postExertionalMalaise.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      unrefreshingSleep: CLINICAL_PATTERNS.unrefreshingSleep.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      cognitiveDifficulties: CLINICAL_PATTERNS.cognitiveDifficulties.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      duration: CLINICAL_PATTERNS.duration.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      )
    }

    // Calculate core symptom score
    const coreSymptoms = Object.values(criteriaAssessment).filter(Boolean).length
    
    // Check for red flags
    const redFlags = CLINICAL_PATTERNS.redFlags.filter(flag => 
      lowerText.includes(flag.toLowerCase())
    )

    // Assess PEM
    const pemEvidence = CLINICAL_PATTERNS.postExertionalMalaise.filter(pattern => 
      lowerText.includes(pattern.toLowerCase())
    )
    
    const pemIndicators = {
      present: pemEvidence.length > 0,
      severity: pemEvidence.length >= 3 ? 'severe' : 
               pemEvidence.length >= 2 ? 'moderate' : 
               pemEvidence.length >= 1 ? 'mild' : 'none' as 'none' | 'mild' | 'moderate' | 'severe',
      evidence: pemEvidence
    }

    // Calculate overall score (0-100)
    let score = 0
    score += coreSymptoms * 15 // Core symptoms worth 15 points each
    score += criteriaAssessment.duration ? 20 : 0 // Duration worth 20 points
    score += pemIndicators.present ? 10 : 0 // PEM bonus
    
    // Penalty for red flags
    score -= redFlags.length * 10

    // Ensure score is between 0-100
    score = Math.max(0, Math.min(100, score))

    // Determine likelihood
    let mecfsLikelihood: 'very-high' | 'high' | 'moderate' | 'low' | 'very-low'
    if (score >= 80) mecfsLikelihood = 'very-high'
    else if (score >= 65) mecfsLikelihood = 'high'
    else if (score >= 40) mecfsLikelihood = 'moderate'
    else if (score >= 20) mecfsLikelihood = 'low'
    else mecfsLikelihood = 'very-low'

    // Generate findings
    const keyFindings: string[] = []
    if (criteriaAssessment.debilitatingFatigue) keyFindings.push('Debilitating fatigue documented')
    if (criteriaAssessment.postExertionalMalaise) keyFindings.push('Post-exertional malaise present')
    if (criteriaAssessment.unrefreshingSleep) keyFindings.push('Unrefreshing sleep reported')
    if (criteriaAssessment.cognitiveDifficulties) keyFindings.push('Cognitive difficulties noted')
    if (criteriaAssessment.duration) keyFindings.push('Chronic duration (≥3 months)')

    // Generate recommendations
    const recommendations: string[] = []
    if (score >= 60) {
      recommendations.push('Strong consideration for ME/CFS diagnosis')
      recommendations.push('Complete NICE NG206 required investigations')
      recommendations.push('Consider referral to ME/CFS specialist service')
    } else if (score >= 30) {
      recommendations.push('Possible ME/CFS - requires further assessment')
      recommendations.push('Consider 3-month follow-up if symptoms persist')
    } else {
      recommendations.push('Low probability of ME/CFS')
      recommendations.push('Consider alternative diagnoses')
    }

    if (redFlags.length > 0) {
      recommendations.unshift('RED FLAGS PRESENT - Urgent evaluation required')
    }

    // Differential diagnoses to consider
    const differentialDiagnoses = [
      'Thyroid dysfunction',
      'Sleep disorders',
      'Depression/anxiety',
      'Autoimmune conditions',
      'Chronic infections',
      'Fibromyalgia'
    ]

    return {
      overallScore: score,
      mecfsLikelihood,
      criteriaAssessment,
      redFlags,
      pemIndicators,
      differentialDiagnoses,
      recommendations,
      keyFindings
    }
  }

  const handleAnalyze = async () => {
    if (!caseText.trim()) return

    setIsAnalyzing(true)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const result = analyzeCaseText(caseText)
    setAnalysisResult(result)
    setIsAnalyzing(false)
  }

  const getLikelihoodColor = (likelihood: string) => {
    switch (likelihood) {
      case 'very-high': return 'bg-red-100 text-red-800 border-red-200'
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'very-low': return 'bg-gray-100 text-gray-800 border-gray-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getLikelihoodText = (likelihood: string) => {
    switch (likelihood) {
      case 'very-high': return 'Very High (80-100%)'
      case 'high': return 'High (65-79%)'
      case 'moderate': return 'Moderate (40-64%)'
      case 'low': return 'Low (20-39%)'
      case 'very-low': return 'Very Low (0-19%)'
      default: return 'Unknown'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <FileText className="h-6 w-6 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Case Analyzer</h1>
              <p className="text-gray-600">AI-powered clinical case analysis for ME/CFS assessment</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Patient Case Input
              </CardTitle>
              <CardDescription>
                Enter clinical presentation, history, and examination findings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Clinical Case Description
                  </label>
                  <Textarea
                    placeholder="Enter patient case details here... 

Example:
32-year-old female presents with 8-month history of severe, debilitating fatigue following viral illness. Reports profound exhaustion that worsens significantly with minimal physical or mental activity. Experiences 'crashes' lasting days after simple tasks like grocery shopping. Sleep is unrefreshing despite 10+ hours. Significant brain fog with memory and concentration problems. Previously active marathon runner, now struggles with basic daily activities..."
                    value={caseText}
                    onChange={(e) => setCaseText(e.target.value)}
                    className="min-h-[300px] text-sm"
                  />
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={handleAnalyze}
                    disabled={!caseText.trim() || isAnalyzing}
                    className="flex-1"
                  >
                    {isAnalyzing ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4 mr-2" />
                        Analyze Case
                      </>
                    )}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setCaseText('')
                      setAnalysisResult(null)
                    }}
                  >
                    Clear
                  </Button>
                </div>

                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Tip:</strong> Include details about fatigue severity, activity tolerance, sleep quality, cognitive symptoms, duration, and any triggering events for best analysis.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            {analysisResult ? (
              <>
                {/* Overall Assessment */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      ME/CFS Likelihood Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">{analysisResult.overallScore}%</div>
                        <Badge className={`text-sm ${getLikelihoodColor(analysisResult.mecfsLikelihood)}`}>
                          {getLikelihoodText(analysisResult.mecfsLikelihood)}
                        </Badge>
                      </div>
                      
                      <Progress value={analysisResult.overallScore} className="h-3" />
                      
                      {analysisResult.redFlags.length > 0 && (
                        <Alert className="border-red-200 bg-red-50">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                          <AlertDescription className="text-red-800">
                            <strong>Red Flags Detected:</strong> {analysisResult.redFlags.join(', ')}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* NICE NG206 Criteria Assessment */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5" />
                      NICE NG206 Criteria Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { key: 'debilitatingFatigue', label: 'Debilitating fatigue' },
                        { key: 'postExertionalMalaise', label: 'Post-exertional malaise' },
                        { key: 'unrefreshingSleep', label: 'Unrefreshing sleep' },
                        { key: 'cognitiveDifficulties', label: 'Cognitive difficulties' },
                        { key: 'duration', label: 'Duration ≥3 months' }
                      ].map(({ key, label }) => (
                        <div key={key} className="flex items-center gap-2">
                          {analysisResult.criteriaAssessment[key as keyof typeof analysisResult.criteriaAssessment] ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                          )}
                          <span className={`text-sm ${
                            analysisResult.criteriaAssessment[key as keyof typeof analysisResult.criteriaAssessment] 
                              ? 'text-green-800 font-medium' 
                              : 'text-gray-600'
                          }`}>
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* PEM Assessment */}
                {analysisResult.pemIndicators.present && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5" />
                        Post-Exertional Malaise
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge variant="outline" className="capitalize">
                          {analysisResult.pemIndicators.severity} severity
                        </Badge>
                        <div className="text-sm text-gray-600">
                          <strong>Evidence found:</strong>
                          <ul className="list-disc list-inside mt-1">
                            {analysisResult.pemIndicators.evidence.map((evidence, idx) => (
                              <li key={idx}>{evidence}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Key Findings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      Key Clinical Findings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {analysisResult.keyFindings.map((finding, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{finding}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle>Clinical Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {analysisResult.recommendations.map((rec, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-sm">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Differential Diagnoses */}
                <Card>
                  <CardHeader>
                    <CardTitle>Consider Alternative Diagnoses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {analysisResult.differentialDiagnoses.map((diagnosis, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {diagnosis}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No Analysis Yet</h3>
                  <p className="text-gray-500">Enter a patient case and click "Analyze Case" to see results</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}