'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Circle, ArrowLeft, ArrowRight, Clock, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/lib/language-context'

const questionCategories = [
  "core", "pem", "core", "core", "cardiovascular", "orthostatic", "history", 
  "duration", "pain", "neurological", "autonomic", "gi", "respiratory", 
  "functional", "sensory", "functional"
]

export default function QuickScreen() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const { t } = useTranslation()
  
  const screeningQuestions = t.quickScreen.questions

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
    category: questionCategories[currentQuestion]
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
                {t.quickScreen.results.complete}
              </CardTitle>
              <CardDescription>
                {t.quickScreen.results.riskAssessment}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Badge className={`px-4 py-2 text-lg ${risk.riskColor}`}>
                  {risk.riskLevel === 'High' ? t.quickScreen.results.highRisk : 
                   risk.riskLevel === 'Medium' ? t.quickScreen.results.mediumRisk : 
                   t.quickScreen.results.lowRisk}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{t.common.results}</h4>
                  <ul className="text-sm space-y-1">
                    <li>{t.quickScreen.results.totalResponses}: {risk.totalYes}/16</li>
                    <li>{t.quickScreen.results.coreSymptoms}: {risk.coreSymptoms}/3</li>
                    <li>{t.quickScreen.results.pemPresent}: {risk.pemPresent ? t.common.yes : t.common.no}</li>
                    <li>{t.quickScreen.results.covidHistory}: {risk.covidHistory ? t.common.yes : t.common.no}</li>
                    <li>{t.quickScreen.results.chronicSymptoms}: {risk.chronicity ? t.common.yes : t.common.no}</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-900">{t.quickScreen.results.nextSteps}</h4>
                  <ul className="text-sm space-y-1 text-blue-800">
                    {risk.riskLevel === 'High' && 
                      t.quickScreen.nextStepsRecommendations.high.map((step, index) => (
                        <li key={index}>• {step}</li>
                      ))
                    }
                    {risk.riskLevel === 'Medium' && 
                      t.quickScreen.nextStepsRecommendations.medium.map((step, index) => (
                        <li key={index}>• {step}</li>
                      ))
                    }
                    {risk.riskLevel === 'Low' && 
                      t.quickScreen.nextStepsRecommendations.low.map((step, index) => (
                        <li key={index}>• {step}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => {
                  setAnswers({})
                  setCurrentQuestion(0)
                  setIsComplete(false)
                }} variant="outline">
                  {t.quickScreen.results.retake}
                </Button>
                {risk.riskLevel !== 'Low' && (
                  <Button asChild>
                    <Link href="/red-flag-checker">
                      {t.common.continue} to Red-flag Checker
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
              Category: {t.quickScreen.categories[currentQuestionData.category as keyof typeof t.quickScreen.categories]}
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