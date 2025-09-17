'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Circle, ArrowLeft, ArrowRight, Clock, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/lib/language-context'

const screeningQuestions = [
  {
    id: 1,
    question: "Do you experience severe fatigue that is not relieved by rest?",
    category: "core"
  },
  {
    id: 2,
    question: "Does physical or mental activity make your symptoms worse (Post-Exertional Malaise)?",
    category: "pem"
  },
  {
    id: 3,
    question: "Do you have unrefreshing sleep, regardless of duration?",
    category: "core"
  },
  {
    id: 4,
    question: "Do you experience cognitive difficulties (brain fog, memory problems)?",
    category: "core"
  },
  {
    id: 5,
    question: "Do you have palpitations or rapid heart rate, especially when standing?",
    category: "cardiovascular"
  },
  {
    id: 6,
    question: "Do you experience dizziness or lightheadedness when standing up?",
    category: "orthostatic"
  },
  {
    id: 7,
    question: "Have you had COVID-19 or suspected COVID-19 infection?",
    category: "history"
  },
  {
    id: 8,
    question: "Have your symptoms persisted for 3 months or longer?",
    category: "duration"
  },
  {
    id: 9,
    question: "Do you experience muscle pain or joint pain without swelling?",
    category: "pain"
  },
  {
    id: 10,
    question: "Do you have frequent headaches or changes in headache patterns?",
    category: "neurological"
  },
  {
    id: 11,
    question: "Do you experience temperature dysregulation (feeling too hot/cold)?",
    category: "autonomic"
  },
  {
    id: 12,
    question: "Do you have gastrointestinal symptoms (nausea, bloating, changes in bowel habits)?",
    category: "gi"
  },
  {
    id: 13,
    question: "Do you experience shortness of breath or breathing difficulties?",
    category: "respiratory"
  },
  {
    id: 14,
    question: "Have you noticed decreased exercise tolerance or physical capacity?",
    category: "functional"
  },
  {
    id: 15,
    question: "Do you experience sensitivity to light, sound, or touch?",
    category: "sensory"
  },
  {
    id: 16,
    question: "Have you been unable to maintain your previous level of activity?",
    category: "functional"
  }
]

export default function QuickScreen() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const { t } = useTranslation()

  const handleAnswer = (questionId: number, answer: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < screeningQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setIsComplete(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const calculateRisk = () => {
    const totalYes = Object.values(answers).filter(Boolean).length
    const coreSymptoms = [1, 3, 4].filter(id => answers[id]).length
    const pemPresent = answers[2]
    const covidHistory = answers[7]
    const chronicity = answers[8]
    
    let riskLevel = 'Low'
    let riskColor = 'bg-green-100 text-green-800'
    
    if (totalYes >= 8 && coreSymptoms >= 2 && pemPresent && chronicity) {
      riskLevel = 'High'
      riskColor = 'bg-red-100 text-red-800'
    } else if (totalYes >= 5 && (coreSymptoms >= 2 || pemPresent)) {
      riskLevel = 'Medium'
      riskColor = 'bg-yellow-100 text-yellow-800'
    }
    
    return { riskLevel, riskColor, totalYes, coreSymptoms, pemPresent, covidHistory, chronicity }
  }

  const progress = ((currentQuestion + 1) / t.quickScreen.questions.length) * 100
  const currentQuestionData = {
    id: currentQuestion + 1,
    question: t.quickScreen.questions[currentQuestion],
    category: Object.keys(t.quickScreen.categories)[currentQuestion % Object.keys(t.quickScreen.categories).length]
  }
  const currentAnswer = answers[currentQuestionData?.id]

  if (isComplete) {
    const risk = calculateRisk()
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Screening Complete
              </CardTitle>
              <CardDescription>
                Based on your responses, here's your risk assessment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Badge className={`px-4 py-2 text-lg ${risk.riskColor}`}>
                  {risk.riskLevel} Risk for ME/CFS, Long COVID, or POTS
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Assessment Results</h4>
                  <ul className="text-sm space-y-1">
                    <li>Total positive responses: {risk.totalYes}/16</li>
                    <li>Core symptoms present: {risk.coreSymptoms}/3</li>
                    <li>Post-exertional malaise: {risk.pemPresent ? 'Yes' : 'No'}</li>
                    <li>COVID history: {risk.covidHistory ? 'Yes' : 'No'}</li>
                    <li>Chronic symptoms (≥3 months): {risk.chronicity ? 'Yes' : 'No'}</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-900">Next Steps</h4>
                  <ul className="text-sm space-y-1 text-blue-800">
                    {risk.riskLevel === 'High' && (
                      <>
                        <li>• Proceed to Red-flag Checker</li>
                        <li>• Complete Stand-Test Pro</li>
                        <li>• Consider PEM-Quest assessment</li>
                      </>
                    )}
                    {risk.riskLevel === 'Medium' && (
                      <>
                        <li>• Consider Red-flag Checker</li>
                        <li>• Monitor symptoms closely</li>
                        <li>• Follow-up in 4-6 weeks</li>
                      </>
                    )}
                    {risk.riskLevel === 'Low' && (
                      <>
                        <li>• Routine clinical assessment</li>
                        <li>• Consider other diagnoses</li>
                        <li>• Reassess if symptoms worsen</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => {
                  setAnswers({})
                  setCurrentQuestion(0)
                  setIsComplete(false)
                }} variant="outline">
                  Retake Screening
                </Button>
                {risk.riskLevel !== 'Low' && (
                  <Button asChild>
                    <Link href="/red-flag-checker">
                      Continue to Red-flag Checker
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
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4" />
            {t.app.backToDashboard}
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <Clock className="h-5 w-5 text-gray-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t.quickScreen.title}</h1>
              <p className="text-gray-600">{t.quickScreen.description}</p>
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
            <p className="text-sm text-gray-600 mt-2">
            {t.common.question} {currentQuestion + 1} {t.common.of} {t.quickScreen.questions.length}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {currentQuestionData.question}
            </CardTitle>
            <CardDescription>
              Category: {currentQuestionData.category.charAt(0).toUpperCase() + currentQuestionData.category.slice(1)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => handleAnswer(currentQuestionData.id, true)}
                  variant={currentAnswer === true ? "default" : "outline"}
                  className="flex items-center gap-2 px-8"
                >
                  {currentAnswer === true ? <CheckCircle className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                  {t.common.yes}
                </Button>
                <Button
                  onClick={() => handleAnswer(currentQuestionData.id, false)}
                  variant={currentAnswer === false ? "default" : "outline"}
                  className="flex items-center gap-2 px-8"
                >
                  {currentAnswer === false ? <CheckCircle className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                  {t.common.no}
                </Button>
              </div>

              <div className="flex justify-between pt-6">
                <Button 
                  onClick={prevQuestion} 
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {t.common.previous}
                </Button>
                
                <Button 
                  onClick={nextQuestion}
                  disabled={currentAnswer === undefined}
                  className="flex items-center gap-2"
                >
                  {currentQuestion === t.quickScreen.questions.length - 1 ? t.common.complete : t.common.next}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <AlertTriangle className="h-4 w-4" />
            This screening tool is for clinical decision support only and does not replace professional medical judgment
          </div>
        </div>
      </div>
    </div>
  )
}