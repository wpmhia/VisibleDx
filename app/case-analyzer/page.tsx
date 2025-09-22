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
  ArrowLeft,
  Droplets,
  Shield,
  Zap,
  Users
} from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/lib/language-context'

interface DiagnosticFramework {
  id: string
  name: string
  icon: any
  likelihood: 'very-high' | 'high' | 'moderate' | 'low' | 'very-low'
  score: number
  criteriaAssessment: Record<string, boolean>
  keyFindings: string[]
  recommendations: string[]
  icdCode: string
  confidence: 'high' | 'medium' | 'low'
}

interface CaseAnalysisResult {
  frameworks: DiagnosticFramework[]
  redFlags: string[]
  keyFindings: string[]
  overallRecommendations: string[]
  primaryDiagnosis: string | null
  secondaryDiagnoses: string[]
}

// Comprehensive clinical keyword patterns for all diagnostic frameworks
const CLINICAL_PATTERNS = {
  // ME/CFS (NICE NG206)
  mecfs: {
    debilitatingFatigue: [
      'severe fatigue', 'debilitating fatigue', 'exhaustion', 'extreme tiredness',
      'profound fatigue', 'overwhelming fatigue', 'crushing fatigue', 'disabling fatigue'
    ],
    postExertionalMalaise: [
      'post-exertional malaise', 'PEM', 'crashes after activity', 'worsens with activity',
      'worse after exercise', 'activity intolerance', 'delayed recovery', 'payback',
      'flare after activity', 'symptom exacerbation', 'delayed symptom onset'
    ],
    unrefreshingSleep: [
      'unrefreshing sleep', 'non-restorative sleep', 'wakes tired', 'poor sleep quality',
      'sleep doesn\'t help', 'still tired after sleep', 'no rest from sleep'
    ],
    cognitiveDifficulties: [
      'brain fog', 'cognitive dysfunction', 'memory problems', 'concentration issues',
      'word finding difficulties', 'mental fatigue', 'confusion', 'cognitive impairment'
    ],
    duration: [
      'months', 'chronic', 'ongoing', 'persistent', 'long-term', '6 months', 'year', '3 months'
    ]
  },

  // POTS
  pots: {
    heartRateIncrease: [
      'tachycardia on standing', 'heart rate increase', 'racing heart when standing',
      'palpitations standing', 'fast pulse standing', '30 bpm increase', 'HR increase'
    ],
    orthostatic: [
      'dizziness on standing', 'lightheaded standing', 'orthostatic intolerance',
      'syncope', 'presyncope', 'fainting', 'near fainting', 'dizzy when upright'
    ],
    symptoms: [
      'fatigue', 'weakness', 'tremor', 'nausea', 'headache', 'mental clouding',
      'chest discomfort', 'shortness of breath'
    ],
    duration: [
      'months', 'chronic', 'ongoing', 'persistent', '6 months'
    ]
  },

  // POTS Subtypes
  hypovolemic: [
    'low blood pressure', 'thirst', 'salt craving', 'volume depletion', 'dehydration',
    'increased renin', 'low blood volume'
  ],
  hyperadrenergic: [
    'high blood pressure', 'anxiety', 'panic attacks', 'migraine', 'cold hands',
    'high norepinephrine', 'tremor', 'sweating'
  ],
  neuropathic: [
    'distal neuropathy', 'GI dysfunction', 'gastroparesis', 'anhidrosis', 'pupil abnormalities',
    'diabetes', 'autoimmune neuropathy', 'small fiber neuropathy'
  ],
  autoimmune: [
    'autoimmune history', 'rapid onset', 'viral trigger', 'autoantibodies',
    'other autoimmune conditions', 'antibodies', 'immune dysfunction', 'PAIS'
  ],

  // Long COVID
  longCovid: {
    covidHistory: [
      'COVID-19', 'coronavirus', 'SARS-CoV-2', 'positive test', 'covid infection',
      'post-covid', 'long covid', 'long-haul covid'
    ],
    duration: [
      '4 weeks', 'months after covid', 'persistent symptoms', 'ongoing since covid'
    ],
    multisystem: [
      'multiple symptoms', 'systemic symptoms', 'multiorgan', 'widespread symptoms'
    ]
  },

  // Red Flags
  redFlags: [
    'weight loss', 'fever', 'night sweats', 'lymphadenopathy', 'neurological deficits',
    'chest pain', 'shortness of breath', 'bleeding', 'jaundice', 'seizures',
    'new headache', 'visual changes', 'weakness', 'sensory loss'
  ],

  // Triggers
  triggers: [
    'viral infection', 'flu', 'COVID', 'mononucleosis', 'stress', 'surgery',
    'vaccination', 'bacterial infection', 'illness', 'EBV', 'CMV'
  ]
}

export default function CaseAnalyzer() {
  const [caseText, setCaseText] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<CaseAnalysisResult | null>(null)
  const { t } = useTranslation()

  const analyzeCaseText = (text: string): CaseAnalysisResult => {
    const lowerText = text.toLowerCase()
    const frameworks: DiagnosticFramework[] = []
    
    // ME/CFS Analysis (NICE NG206)
    const mecfsCriteria = {
      debilitatingFatigue: CLINICAL_PATTERNS.mecfs.debilitatingFatigue.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      postExertionalMalaise: CLINICAL_PATTERNS.mecfs.postExertionalMalaise.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      unrefreshingSleep: CLINICAL_PATTERNS.mecfs.unrefreshingSleep.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      cognitiveDifficulties: CLINICAL_PATTERNS.mecfs.cognitiveDifficulties.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      duration: CLINICAL_PATTERNS.mecfs.duration.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      )
    }
    
    const mecfsCoreSymptoms = Object.values(mecfsCriteria).filter(Boolean).length
    let mecfsScore = mecfsCoreSymptoms * 20 // Each criterion worth 20 points
    const mecfsLikelihood = mecfsScore >= 80 ? 'very-high' : 
                           mecfsScore >= 60 ? 'high' : 
                           mecfsScore >= 40 ? 'moderate' : 
                           mecfsScore >= 20 ? 'low' : 'very-low'
    
    const mecfsFindings: string[] = []
    if (mecfsCriteria.debilitatingFatigue) mecfsFindings.push('Debilitating fatigue present')
    if (mecfsCriteria.postExertionalMalaise) mecfsFindings.push('Post-exertional malaise documented')
    if (mecfsCriteria.unrefreshingSleep) mecfsFindings.push('Unrefreshing sleep reported')
    if (mecfsCriteria.cognitiveDifficulties) mecfsFindings.push('Cognitive difficulties noted')
    if (mecfsCriteria.duration) mecfsFindings.push('Chronic duration (≥3 months)')

    frameworks.push({
      id: 'mecfs',
      name: 'ME/CFS (NICE NG206)',
      icon: Brain,
      likelihood: mecfsLikelihood,
      score: mecfsScore,
      criteriaAssessment: mecfsCriteria,
      keyFindings: mecfsFindings,
      recommendations: mecfsScore >= 60 ? [
        'Strong consideration for ME/CFS diagnosis',
        'Complete NICE NG206 investigations',
        'Consider specialist referral'
      ] : ['Possible ME/CFS - requires further assessment'],
      icdCode: 'G93.3',
      confidence: mecfsCoreSymptoms >= 4 ? 'high' : mecfsCoreSymptoms >= 3 ? 'medium' : 'low'
    })

    // POTS Analysis
    const potsCriteria = {
      heartRateIncrease: CLINICAL_PATTERNS.pots.heartRateIncrease.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      orthostatic: CLINICAL_PATTERNS.pots.orthostatic.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      symptoms: CLINICAL_PATTERNS.pots.symptoms.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      duration: CLINICAL_PATTERNS.pots.duration.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      )
    }
    
    const potsCoreSymptoms = Object.values(potsCriteria).filter(Boolean).length
    let potsScore = potsCoreSymptoms * 25 // Each criterion worth 25 points
    const potsLikelihood = potsScore >= 75 ? 'very-high' : 
                          potsScore >= 50 ? 'high' : 
                          potsScore >= 25 ? 'moderate' : 'low'
    
    const potsFindings: string[] = []
    if (potsCriteria.heartRateIncrease) potsFindings.push('Heart rate increase on standing')
    if (potsCriteria.orthostatic) potsFindings.push('Orthostatic symptoms present')
    if (potsCriteria.symptoms) potsFindings.push('Associated POTS symptoms')
    if (potsCriteria.duration) potsFindings.push('Chronic symptoms')

    frameworks.push({
      id: 'pots',
      name: 'POTS',
      icon: Heart,
      likelihood: potsLikelihood,
      score: potsScore,
      criteriaAssessment: potsCriteria,
      keyFindings: potsFindings,
      recommendations: potsScore >= 50 ? [
        'Consider POTS diagnosis',
        'Perform stand test or tilt table',
        'Consider POTS subtyping'
      ] : ['Consider orthostatic intolerance assessment'],
      icdCode: 'G90.1',
      confidence: potsCoreSymptoms >= 3 ? 'high' : potsCoreSymptoms >= 2 ? 'medium' : 'low'
    })

    // Long COVID Analysis
    const longCovidCriteria = {
      covidHistory: CLINICAL_PATTERNS.longCovid.covidHistory.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      duration: CLINICAL_PATTERNS.longCovid.duration.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ),
      multisystem: CLINICAL_PATTERNS.longCovid.multisystem.some(pattern => 
        lowerText.includes(pattern.toLowerCase())
      )
    }
    
    const longCovidSymptoms = Object.values(longCovidCriteria).filter(Boolean).length
    let longCovidScore = longCovidSymptoms * 33 // Each criterion worth 33 points
    const longCovidLikelihood = longCovidScore >= 66 ? 'high' : 
                               longCovidScore >= 33 ? 'moderate' : 'low'
    
    const longCovidFindings: string[] = []
    if (longCovidCriteria.covidHistory) longCovidFindings.push('COVID-19 infection history')
    if (longCovidCriteria.duration) longCovidFindings.push('Persistent symptoms post-COVID')
    if (longCovidCriteria.multisystem) longCovidFindings.push('Multi-system involvement')

    frameworks.push({
      id: 'longcovid',
      name: 'Long COVID',
      icon: Zap,
      likelihood: longCovidLikelihood,
      score: longCovidScore,
      criteriaAssessment: longCovidCriteria,
      keyFindings: longCovidFindings,
      recommendations: longCovidScore >= 33 ? [
        'Consider Long COVID diagnosis',
        'Multidisciplinary assessment',
        'Symptom-based management'
      ] : ['Monitor for post-COVID symptoms'],
      icdCode: 'U09.9',
      confidence: longCovidSymptoms >= 2 ? 'high' : 'low'
    })

    // POTS Subtype Analysis
    const subtypeScores = {
      hypovolemic: CLINICAL_PATTERNS.hypovolemic.filter(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ).length,
      hyperadrenergic: CLINICAL_PATTERNS.hyperadrenergic.filter(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ).length,
      neuropathic: CLINICAL_PATTERNS.neuropathic.filter(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ).length,
      autoimmune: CLINICAL_PATTERNS.autoimmune.filter(pattern => 
        lowerText.includes(pattern.toLowerCase())
      ).length
    }

    // Add subtype frameworks if POTS is suspected
    if (potsScore >= 25) {
      Object.entries(subtypeScores).forEach(([subtype, score]) => {
        if (score > 0) {
          const subtypeScore = (score / 3) * 100 // Normalize to 100
          const subtypeLikelihood = subtypeScore >= 66 ? 'high' : 
                                   subtypeScore >= 33 ? 'moderate' : 'low'
          
          frameworks.push({
            id: `pots_${subtype}`,
            name: `POTS - ${subtype.charAt(0).toUpperCase() + subtype.slice(1)}`,
            icon: subtype === 'hypovolemic' ? Droplets : 
                  subtype === 'hyperadrenergic' ? Activity :
                  subtype === 'neuropathic' ? Brain : Shield,
            likelihood: subtypeLikelihood,
            score: subtypeScore,
            criteriaAssessment: { [subtype]: score > 0 },
            keyFindings: [`${subtype} POTS features present`],
            recommendations: [`Consider ${subtype} POTS subtype treatment`],
            icdCode: 'G90.1',
            confidence: score >= 2 ? 'high' : 'medium'
          })
        }
      })
    }

    // Check for red flags
    const redFlags = CLINICAL_PATTERNS.redFlags.filter(flag => 
      lowerText.includes(flag.toLowerCase())
    )

    // Sort frameworks by likelihood and score
    frameworks.sort((a, b) => {
      const likelihoodOrder = { 'very-high': 5, 'high': 4, 'moderate': 3, 'low': 2, 'very-low': 1 }
      return likelihoodOrder[b.likelihood] - likelihoodOrder[a.likelihood] || b.score - a.score
    })

    // Determine primary and secondary diagnoses
    const primaryFramework = frameworks.find(f => f.likelihood === 'very-high' || f.likelihood === 'high')
    const primaryDiagnosis = primaryFramework ? primaryFramework.name : null
    const secondaryDiagnoses = frameworks
      .filter(f => f !== primaryFramework && (f.likelihood === 'moderate' || f.likelihood === 'high'))
      .map(f => f.name)

    // Generate overall key findings
    const keyFindings = frameworks
      .filter(f => f.likelihood !== 'very-low' && f.likelihood !== 'low')
      .flatMap(f => f.keyFindings)

    // Generate overall recommendations
    const overallRecommendations: string[] = []
    if (redFlags.length > 0) {
      overallRecommendations.push('🚨 RED FLAGS PRESENT - Urgent evaluation required')
    }
    
    if (primaryDiagnosis) {
      overallRecommendations.push(`Primary consideration: ${primaryDiagnosis}`)
    }
    
    if (secondaryDiagnoses.length > 0) {
      overallRecommendations.push(`Also consider: ${secondaryDiagnoses.join(', ')}`)
    }

    overallRecommendations.push('Complete targeted diagnostic workup')
    overallRecommendations.push('Consider specialist referral if indicated')

    return {
      frameworks,
      redFlags,
      keyFindings,
      overallRecommendations,
      primaryDiagnosis,
      secondaryDiagnoses
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
      case 'very-high': return 'Very High'
      case 'high': return 'High'
      case 'moderate': return 'Moderate'
      case 'low': return 'Low'
      case 'very-low': return 'Very Low'
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
              <p className="text-gray-600">Multi-framework clinical case analysis for ME/CFS, POTS, Long COVID & more</p>
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

Example with POTS:
28-year-old patient with 6-month history of severe fatigue and dizziness on standing. Heart rate increases from 70 to 120 bpm when standing, with palpitations and lightheadedness. Reports post-exertional malaise after minimal activity. Has history of autoimmune conditions and viral trigger. Also experiences brain fog, unrefreshing sleep, and salt cravings. POTS suspected with possible autoimmune (PAIS) subtype.

Example with Long COVID:
35-year-old with COVID-19 infection 8 months ago, now experiencing persistent multi-system symptoms including debilitating fatigue, brain fog, and exercise intolerance..."
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
                    <strong>Tip:</strong> Include details about fatigue, orthostatic symptoms, heart rate changes, post-exertional malaise, sleep quality, cognitive symptoms, autoimmune history, COVID history, and triggering events for comprehensive analysis across all diagnostic frameworks.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            {analysisResult ? (
              <>
                {/* Red Flags Alert */}
                {analysisResult.redFlags.length > 0 && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      <strong>🚨 RED FLAGS DETECTED:</strong> {analysisResult.redFlags.join(', ')}
                      <br /><strong>Urgent evaluation required before proceeding with complex diagnoses.</strong>
                    </AlertDescription>
                  </Alert>
                )}

                {/* Primary Diagnosis */}
                {analysisResult.primaryDiagnosis && (
                  <Card className="border-2 border-blue-500 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <CheckCircle className="h-5 w-5" />
                        Primary Diagnostic Consideration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-semibold text-blue-900">
                        {analysisResult.primaryDiagnosis}
                      </div>
                      {analysisResult.secondaryDiagnoses.length > 0 && (
                        <div className="mt-2 text-sm text-blue-800">
                          <strong>Also consider:</strong> {analysisResult.secondaryDiagnoses.join(', ')}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* All Diagnostic Frameworks */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Multi-Framework Analysis Results
                    </CardTitle>
                    <CardDescription>
                      Assessment across all available diagnostic criteria
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {analysisResult.frameworks.map((framework) => (
                        <Card key={framework.id} className={`${
                          framework.likelihood === 'very-high' || framework.likelihood === 'high' 
                            ? 'border-2 border-orange-400 bg-orange-50' 
                            : framework.likelihood === 'moderate' 
                            ? 'border-yellow-300 bg-yellow-50'
                            : 'border-gray-200'
                        }`}>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm flex items-center gap-2">
                              <framework.icon className="h-4 w-4" />
                              {framework.name}
                            </CardTitle>
                            <div className="flex justify-between items-center">
                              <Badge className={`text-xs ${getLikelihoodColor(framework.likelihood)}`}>
                                {getLikelihoodText(framework.likelihood)}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {framework.score}% • {framework.confidence}
                              </Badge>
                            </div>
                            <div className="text-xs text-gray-600">
                              ICD-10: {framework.icdCode}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <Progress value={framework.score} className="h-2" />
                              
                              {framework.keyFindings.length > 0 && (
                                <div>
                                  <div className="text-xs font-medium text-gray-700 mb-1">Key Findings:</div>
                                  {framework.keyFindings.map((finding, idx) => (
                                    <div key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                                      <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                                      {finding}
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {framework.recommendations.length > 0 && (
                                <div>
                                  <div className="text-xs font-medium text-gray-700 mb-1">Recommendations:</div>
                                  {framework.recommendations.map((rec, idx) => (
                                    <div key={idx} className="text-xs text-blue-700 flex items-start gap-1">
                                      <span className="text-blue-600 mt-0.5">•</span>
                                      {rec}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Overall Key Findings */}
                {analysisResult.keyFindings.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        Overall Key Clinical Findings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-2">
                        {analysisResult.keyFindings.map((finding, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            {finding}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Overall Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      Clinical Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {analysisResult.overallRecommendations.map((rec, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className={`mt-1 ${rec.includes('🚨') ? 'text-red-600' : 'text-blue-600'}`}>
                            {rec.includes('🚨') ? '🚨' : '•'}
                          </span>
                          <span className={`text-sm ${rec.includes('🚨') ? 'text-red-800 font-semibold' : ''}`}>
                            {rec.replace('🚨 ', '')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Next Steps */}
                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Activity className="h-5 w-5" />
                      Suggested Next Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/quick-screen" 
                          className="flex items-center gap-2 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <div>
                            <div className="text-sm font-medium">Quick Screen</div>
                            <div className="text-xs text-gray-600">Structured assessment</div>
                          </div>
                        </Link>
                        
                        <Link href="/stand-test" 
                          className="flex items-center gap-2 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow">
                          <Heart className="h-4 w-4 text-red-600" />
                          <div>
                            <div className="text-sm font-medium">Stand Test</div>
                            <div className="text-xs text-gray-600">POTS evaluation</div>
                          </div>
                        </Link>
                        
                        <Link href="/criteria-engine" 
                          className="flex items-center gap-2 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow">
                          <Brain className="h-4 w-4 text-purple-600" />
                          <div>
                            <div className="text-sm font-medium">Criteria Engine</div>
                            <div className="text-xs text-gray-600">Formal diagnosis</div>
                          </div>
                        </Link>
                      </div>
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