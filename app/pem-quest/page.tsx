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

interface PEMQuestion {
  id: string
  question: string
  description?: string
  options: { value: string; label: string; score: number }[]
}

const pemQuestions: PEMQuestion[] = [
  {
    id: 'frequency',
    question: 'How often do you experience a worsening of symptoms following physical activity?',
    description: 'Consider activities like walking, climbing stairs, or household chores',
    options: [
      { value: 'never', label: 'Never', score: 0 },
      { value: 'rarely', label: 'Rarely (less than 25% of the time)', score: 1 },
      { value: 'sometimes', label: 'Sometimes (25-50% of the time)', score: 2 },
      { value: 'often', label: 'Often (50-75% of the time)', score: 3 },
      { value: 'always', label: 'Always or almost always (more than 75% of the time)', score: 4 }
    ]
  },
  {
    id: 'mental_frequency',
    question: 'How often do you experience a worsening of symptoms following mental activity?',
    description: 'Consider activities like reading, concentrating, or problem-solving',
    options: [
      { value: 'never', label: 'Never', score: 0 },
      { value: 'rarely', label: 'Rarely (less than 25% of the time)', score: 1 },
      { value: 'sometimes', label: 'Sometimes (25-50% of the time)', score: 2 },
      { value: 'often', label: 'Often (50-75% of the time)', score: 3 },
      { value: 'always', label: 'Always or almost always (more than 75% of the time)', score: 4 }
    ]
  },
  {
    id: 'onset_time',
    question: 'How soon after activity do your symptoms typically worsen?',
    options: [
      { value: 'no_worsening', label: 'No worsening occurs', score: 0 },
      { value: 'during', label: 'During the activity', score: 2 },
      { value: 'immediately', label: 'Immediately after (within 30 minutes)', score: 3 },
      { value: 'hours', label: 'Within a few hours (2-6 hours)', score: 4 },
      { value: 'next_day', label: 'The next day or later', score: 3 }
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

export default function PEMQuest() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

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

  const calculatePEMScore = () => {
    const totalScore = pemQuestions.reduce((sum, question) => {
      const answer = answers[question.id]
      const option = question.options.find(opt => opt.value === answer)
      return sum + (option?.score || 0)
    }, 0)

    const maxScore = pemQuestions.reduce((sum, question) => {
      return sum + Math.max(...question.options.map(opt => opt.score))
    }, 0)

    const percentage = (totalScore / maxScore) * 100

    let severity = 'None'
    let color = 'bg-green-100 text-green-800'
    
    if (percentage >= 75) {
      severity = 'Severe PEM'
      color = 'bg-red-100 text-red-800'
    } else if (percentage >= 50) {
      severity = 'Moderate PEM'
      color = 'bg-orange-100 text-orange-800'
    } else if (percentage >= 25) {
      severity = 'Mild PEM'
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
                PEM Assessment Complete
              </CardTitle>
              <CardDescription>
                Post-Exertional Malaise evaluation based on DePaul criteria
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
                  <h3 className="font-semibold text-lg">Assessment Results</h3>
                  
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
                  <h3 className="font-semibold text-lg">Clinical Interpretation</h3>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-900">PEM Status</h4>
                    <p className="text-blue-800 text-sm mb-2">
                      {pemScore.isPEMPresent 
                        ? 'Post-Exertional Malaise is likely present'
                        : 'Post-Exertional Malaise is unlikely'
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
                    <h4 className="font-semibold mb-2 text-yellow-900">Recommendations</h4>
                    <div className="text-yellow-800 text-sm space-y-1">
                      {pemScore.severity === 'Severe PEM' && (
                        <>
                          <p>• Strict activity pacing essential</p>
                          <p>• Consider disability evaluation</p>
                          <p>• Specialist ME/CFS clinic referral</p>
                        </>
                      )}
                      {pemScore.severity === 'Moderate PEM' && (
                        <>
                          <p>• Implement careful activity pacing</p>
                          <p>• Monitor for symptom progression</p>
                          <p>• Consider occupational therapy</p>
                        </>
                      )}
                      {pemScore.severity === 'Mild PEM' && (
                        <>
                          <p>• Begin gentle activity pacing</p>
                          <p>• Education on PEM recognition</p>
                          <p>• Regular symptom monitoring</p>
                        </>
                      )}
                      {pemScore.severity === 'None' && (
                        <>
                          <p>• PEM not significantly present</p>
                          <p>• Consider other diagnoses</p>
                          <p>• Standard activity as tolerated</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <Alert>
                <Activity className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> PEM is the hallmark symptom of ME/CFS. If present, 
                  avoid activities that consistently trigger symptom worsening. Energy management 
                  and pacing are key treatment strategies.
                </AlertDescription>
              </Alert>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => {
                  setAnswers({})
                  setCurrentQuestion(0)
                  setIsComplete(false)
                }} variant="outline">
                  Retake Assessment
                </Button>
                <Button asChild>
                  <Link href="/criteria-engine">
                    Continue to Criteria Engine
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
            Back to Dashboard
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <Activity className="h-5 w-5 text-orange-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">PEM-Quest Assessment</h1>
              <p className="text-gray-600">Post-Exertional Malaise evaluation - 5 validated questions</p>
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-gray-600 mt-2">
            Question {currentQuestion + 1} of {pemQuestions.length}
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
                  Previous
                </Button>
                
                <Button 
                  onClick={nextQuestion}
                  disabled={!currentAnswer}
                  className="flex items-center gap-2"
                >
                  {currentQuestion === pemQuestions.length - 1 ? 'Complete Assessment' : 'Next Question'}
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
                  <h4 className="font-semibold mb-1">About Post-Exertional Malaise (PEM)</h4>
                  <p>
                    PEM is the worsening of symptoms following physical or mental activity that 
                    was previously tolerated. It's a key feature of ME/CFS and often occurs 
                    in Long COVID. Symptoms may be delayed and can last days to weeks.
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