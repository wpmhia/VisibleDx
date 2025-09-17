'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ArrowLeft, ArrowRight, Activity, Clock, TrendingDown, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/lib/language-context'

interface PEMQuestion {
  id: string
  question: string
  description?: string
  options: { value: string; label: string; score: number }[]
}

// PEM questions will be generated from translations

export default function PEMQuest() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const { t } = useTranslation()

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < pemQuestions.length - 1) {
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

  const getPEMQuestions = () => {
    const scoreArrays = [[0,1,2,3,4], [0,1,2,3,4], [0,2,3,4,3], [0,1,2,3,4], [0,1,2,3,4]]
    
    return [
      {
        id: 'frequency',
        question: t.pem.questions.frequency.question,
        description: t.pem.questions.frequency.description,
        options: t.pem.questions.frequency.options.map((label, index) => ({
          value: ['never', 'rarely', 'sometimes', 'often', 'always'][index],
          label,
          score: scoreArrays[0][index]
        }))
      },
      {
        id: 'mental_frequency',
        question: t.pem.questions.mentalFrequency.question,
        description: t.pem.questions.mentalFrequency.description,
        options: t.pem.questions.mentalFrequency.options.map((label, index) => ({
          value: ['never', 'rarely', 'sometimes', 'often', 'always'][index],
          label,
          score: scoreArrays[1][index]
        }))
      },
      {
        id: 'onset_time',
        question: t.pem.questions.onsetTime.question,
        options: t.pem.questions.onsetTime.options.map((label, index) => ({
          value: ['no_worsening', 'during', 'immediately', 'hours', 'next_day'][index],
          label,
          score: scoreArrays[2][index]
        }))
      },
      {
        id: 'severity',
        question: t.pem.questions.severity.question,
        options: t.pem.questions.severity.options.map((label, index) => ({
          value: ['none', 'mild', 'moderate', 'severe', 'very_severe'][index],
          label,
          score: scoreArrays[3][index]
        }))
      },
      {
        id: 'recovery_time',
        question: t.pem.questions.recoveryTime.question,
        options: t.pem.questions.recoveryTime.options.map((label, index) => ({
          value: ['no_recovery_needed', 'hours', 'one_day', 'several_days', 'week_or_more'][index],
          label,
          score: scoreArrays[4][index]
        }))
      }
    ]
  }

  const calculatePEMScore = () => {
    const pemQuestions = getPEMQuestions()
    const totalScore = pemQuestions.reduce((sum, question) => {
      const answer = answers[question.id]
      const option = question.options.find(opt => opt.value === answer)
      return sum + (option?.score || 0)
    }, 0)

    const maxScore = pemQuestions.reduce((sum, question) => {
      return sum + Math.max(...question.options.map(opt => opt.score))
    }, 0)

    const percentage = (totalScore / maxScore) * 100

    let severity = t.pem.results.severityLevels.none
    let color = 'bg-green-100 text-green-800'
    
    if (percentage >= 75) {
      severity = t.pem.results.severityLevels.severe
      color = 'bg-red-100 text-red-800'
    } else if (percentage >= 50) {
      severity = t.pem.results.severityLevels.moderate
      color = 'bg-orange-100 text-orange-800'
    } else if (percentage >= 25) {
      severity = t.pem.results.severityLevels.mild
      color = 'bg-yellow-100 text-yellow-800'
    }

    const isPEMPresent = percentage >= 25

    return {
      totalScore,
      maxScore,
      percentage: Math.round(percentage),
      severity,
      color,
      isPEMPresent
    }
  }

  const pemQuestions = getPEMQuestions()
  const progress = ((currentQuestion + 1) / pemQuestions.length) * 100
  const current = pemQuestions[currentQuestion]
  const currentAnswer = answers[current?.id]

  if (isComplete) {
    const pemScore = calculatePEMScore()
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-green-600" />
                {t.pem.results.complete}
              </CardTitle>
              <CardDescription>
                {t.pem.results.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Badge className={`px-4 py-2 text-lg ${pemScore.color}`}>
                  {pemScore.severity}
                </Badge>
                <p className="text-sm text-gray-600 mt-2">
                  Score: {pemScore.totalScore}/{pemScore.maxScore} ({pemScore.percentage}%)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">{t.common.results}</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    {pemQuestions.map((question) => {
                      const answer = answers[question.id]
                      const option = question.options.find(opt => opt.value === answer)
                      return (
                        <div key={question.id} className="border-b border-gray-200 pb-2 last:border-b-0">
                          <p className="text-sm font-medium text-gray-700 mb-1">
                            {question.question}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">{option?.label}</span>
                            <Badge variant="outline" className="text-xs">
                              {option?.score} pts
                            </Badge>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">{t.pem.results.clinicalInterpretation}</h3>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-900">{t.pem.results.status}</h4>
                    <p className="text-blue-800 text-sm mb-2">
                      {pemScore.isPEMPresent 
                        ? t.pem.results.present
                        : t.pem.results.absent
                      }
                    </p>
                    
                    {pemScore.isPEMPresent && (
                      <div className="text-blue-800 text-sm space-y-1">
                        <p>• PEM is a key diagnostic criterion for ME/CFS</p>
                        <p>• Consider activity pacing and energy management</p>
                        <p>• Avoid graded exercise therapy (GET)</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-yellow-900">{t.common.recommendations}</h4>
                    <div className="text-yellow-800 text-sm space-y-1">
                      {pemScore.severity === t.pem.results.severityLevels.severe && 
                        t.pem.results.recommendations.severe.map((rec, index) => (
                          <p key={index}>• {rec}</p>
                        ))
                      }
                      {pemScore.severity === t.pem.results.severityLevels.moderate && 
                        t.pem.results.recommendations.moderate.map((rec, index) => (
                          <p key={index}>• {rec}</p>
                        ))
                      }
                      {pemScore.severity === t.pem.results.severityLevels.mild && 
                        t.pem.results.recommendations.mild.map((rec, index) => (
                          <p key={index}>• {rec}</p>
                        ))
                      }
                      {pemScore.severity === t.pem.results.severityLevels.none && 
                        t.pem.results.recommendations.none.map((rec, index) => (
                          <p key={index}>• {rec}</p>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>

              <Alert>
                <Activity className="h-4 w-4" />
                <AlertDescription>
                    {t.pem.results.important}
                </AlertDescription>
              </Alert>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => {
                  setAnswers({})
                  setCurrentQuestion(0)
                  setIsComplete(false)
                }} variant="outline">
                  {t.pem.results.retake}
                </Button>
                <Button asChild>
                  <Link href="/criteria-engine">
                      {t.common.continue} to Criteria Engine
                  </Link>
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
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4" />
            {t.app.backToDashboard}
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <Activity className="h-5 w-5 text-orange-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t.pem.title}</h1>
              <p className="text-gray-600">{t.pem.description}</p>
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-gray-600 mt-2">
            {t.common.question} {currentQuestion + 1} {t.common.of} {pemQuestions.length}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {current.question}
            </CardTitle>
            {current.description && (
              <CardDescription>
                {current.description}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <RadioGroup 
                value={currentAnswer || ''} 
                onValueChange={(value) => handleAnswer(current.id, value)}
                className="space-y-3"
              >
                {current.options.map((option) => (
                  <div key={option.value} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="cursor-pointer font-medium">
                        {option.label}
                      </Label>
                      <div className="flex justify-between items-center mt-1">
                        <Badge variant="outline" className="text-xs">
                          {option.score} {option.score === 1 ? 'point' : 'points'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>

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
                  disabled={!currentAnswer}
                  className="flex items-center gap-2"
                >
                  {currentQuestion === pemQuestions.length - 1 ? t.common.complete + ' Assessment' : t.common.next + ' Question'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <TrendingDown className="h-5 w-5 text-orange-600 mt-1" />
                <div className="text-sm text-orange-800">
                  <h4 className="font-semibold mb-1">{t.pem.about.title}</h4>
                  <p>
                    {t.pem.about.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}