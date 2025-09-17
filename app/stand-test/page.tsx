'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ArrowLeft, Heart, Play, Pause, Square, Timer, TrendingUp, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/lib/language-context'
import PPGCamera from '@/components/ppg-camera'

interface HeartRateReading {
  time: number
  hr: number
  bp?: { systolic: number; diastolic: number }
}

interface TestPhase {
  name: string
  duration: number
  position: 'lying' | 'standing'
  instructions: string
}

// Test phases will be generated from translations

export default function StandTest() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [readings, setReadings] = useState<HeartRateReading[]>([])
  const [currentHR, setCurrentHR] = useState<number | null>(null)
  const [currentBP, setCurrentBP] = useState<{ systolic: number; diastolic: number } | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const [testMethod, setTestMethod] = useState<'manual' | 'camera'>('manual')
  const [ppgStatus, setPPGStatus] = useState<'stopped' | 'starting' | 'detecting' | 'measuring'>('stopped')
  const { t } = useTranslation()
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeElapsed(prev => prev + 1)
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, isPaused])

  const getTestPhases = () => [
    {
      name: t.standTest.phases.baseline.name,
      duration: 300, // 5 minutes
      position: 'lying' as const,
      instructions: t.standTest.phases.baseline.instructions
    },
    {
      name: t.standTest.phases.standing.name,
      duration: 600, // 10 minutes
      position: 'standing' as const,
      instructions: t.standTest.phases.standing.instructions
    }
  ]

  useEffect(() => {
    const testPhases = getTestPhases()
    const phase = testPhases[currentPhase]
    if (phase && timeElapsed >= phase.duration && currentPhase < testPhases.length - 1) {
      setCurrentPhase(prev => prev + 1)
      setTimeElapsed(0)
    } else if (phase && timeElapsed >= phase.duration && currentPhase === testPhases.length - 1) {
      setIsRunning(false)
      setIsComplete(true)
    }
  }, [timeElapsed, currentPhase, t])

  const startTest = () => {
    setIsRunning(true)
    setIsPaused(false)
    setTimeElapsed(0)
    setCurrentPhase(0)
    setReadings([])
    setIsComplete(false)
  }

  const pauseTest = () => {
    setIsPaused(!isPaused)
  }

  const stopTest = () => {
    setIsRunning(false)
    setIsPaused(false)
    setTimeElapsed(0)
    setCurrentPhase(0)
  }

  const addReading = () => {
    if (currentHR) {
      const reading: HeartRateReading = {
        time: timeElapsed,
        hr: currentHR,
        bp: currentBP || undefined
      }
      setReadings(prev => [...prev, reading])
      setCurrentHR(null)
      setCurrentBP(null)
    }
  }

  const handlePPGHeartRate = (heartRate: number) => {
    const reading: HeartRateReading = {
      time: timeElapsed,
      hr: heartRate,
      bp: undefined
    }
    setReadings(prev => [...prev, reading])
  }

  const calculateResults = () => {
    const lyingReadings = readings.filter(r => r.time < 300)
    const standingReadings = readings.filter(r => r.time >= 300)
    
    if (lyingReadings.length === 0 || standingReadings.length === 0) {
      return null
    }

    const baselineHR = lyingReadings.reduce((sum, r) => sum + r.hr, 0) / lyingReadings.length
    const maxStandingHR = Math.max(...standingReadings.map(r => r.hr))
    const hrIncrease = maxStandingHR - baselineHR

    // POTS criteria: HR increase ≥30 bpm (≥40 for ages 12-19)
    const potsThreshold = 30
    const meetsPOTSCriteria = hrIncrease >= potsThreshold

    // Calculate sustained HR increase (average of standing phase)
    const sustainedStandingHR = standingReadings.reduce((sum, r) => sum + r.hr, 0) / standingReadings.length
    const sustainedHRIncrease = sustainedStandingHR - baselineHR

    return {
      baselineHR: Math.round(baselineHR),
      maxStandingHR: Math.round(maxStandingHR),
      sustainedStandingHR: Math.round(sustainedStandingHR),
      hrIncrease: Math.round(hrIncrease),
      sustainedHRIncrease: Math.round(sustainedHRIncrease),
      meetsPOTSCriteria,
      potsThreshold
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const currentPhaseData = getTestPhases()[currentPhase]
  const progress = currentPhaseData ? (timeElapsed / currentPhaseData.duration) * 100 : 0
  const results = calculateResults()

  if (isComplete && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-red-600" />
                {t.standTest.results.title}
              </CardTitle>
              <CardDescription>
                {t.standTest.results.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Badge 
                  className={`px-4 py-2 text-lg ${
                    results.meetsPOTSCriteria 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {results.meetsPOTSCriteria ? t.standTest.results.potsMet : t.standTest.results.potsNotMet}
                </Badge>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-blue-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-blue-800">{t.standTest.results.baseline}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-900">
                      {results.baselineHR} bpm
                    </div>
                    <p className="text-sm text-blue-700">{t.standTest.results.averageHR}</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-orange-800">{t.standTest.results.peakStanding}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-900">
                      {results.maxStandingHR} bpm
                    </div>
                    <p className="text-sm text-orange-700">{t.standTest.results.maxHR}</p>
                    <Badge variant="outline" className="mt-1">
                      +{results.hrIncrease} bpm
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-purple-800">{t.standTest.results.sustainedStanding}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-900">
                      {results.sustainedStandingHR} bpm
                    </div>
                    <p className="text-sm text-purple-700">{t.standTest.results.averageHR}</p>
                    <Badge variant="outline" className="mt-1">
                      +{results.sustainedHRIncrease} bpm
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              {results.meetsPOTSCriteria && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>POTS Criteria Met:</strong> Heart rate increase of {results.hrIncrease} bpm 
                    exceeds the threshold of {results.potsThreshold} bpm. Consider POTS subtyping and 
                    further evaluation.
                  </AlertDescription>
                </Alert>
              )}

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  {t.standTest.results.interpretation}
                </h4>
                <div className="text-sm space-y-2">
                  {results.meetsPOTSCriteria ? 
                    t.standTest.interpretations.potsMet.map((interpretation, index) => (
                      <p key={index}>• {interpretation}</p>
                    )) :
                    t.standTest.interpretations.potsNotMet.map((interpretation, index) => (
                      <p key={index}>• {interpretation}</p>
                    ))
                  }
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-900">{t.standTest.results.nextSteps}</h4>
                <div className="text-sm text-blue-800 space-y-1">
                  <p>• Complete PEM-Quest assessment</p>
                  <p>• Proceed to Criteria Engine for comprehensive diagnosis</p>
                  {results.meetsPOTSCriteria && (
                    <p>• Continue to Subtype & Treatment Advisor for POTS management</p>
                  )}
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => {
                  setIsComplete(false)
                  setReadings([])
                  setTimeElapsed(0)
                  setCurrentPhase(0)
                }} variant="outline">
                  {t.standTest.results.repeatTest}
                </Button>
                <Button asChild>
                  <Link href="/pem-quest">
                      {t.common.continue} to PEM-Quest
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
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          
          <div className="flex items-center gap-4 mb-4">
            <Heart className="h-5 w-5 text-red-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t.standTest.title}</h1>
              <p className="text-gray-600">{t.standTest.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {!isRunning && readings.length === 0 && (
            <Card>
              <CardHeader>
                <CardTitle>{t.standTest.setup.title}</CardTitle>
                <CardDescription>
                  {t.standTest.setup.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card 
                    className={`cursor-pointer transition-all ${
                      testMethod === 'manual' ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setTestMethod('manual')}
                  >
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">{t.standTest.setup.manual.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {t.standTest.setup.manual.description}
                      </p>
                      <Badge variant="outline">{t.standTest.setup.manual.recommended}</Badge>
                    </CardContent>
                  </Card>
                  
                  <Card 
                    className={`cursor-pointer transition-all ${
                      testMethod === 'camera' ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setTestMethod('camera')}
                  >
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">{t.standTest.setup.camera.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {t.standTest.setup.camera.description}
                      </p>
                      <Badge variant="secondary">{t.standTest.setup.camera.beta}</Badge>
                    </CardContent>
                  </Card>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    {t.standTest.setup.safety}
                  </AlertDescription>
                </Alert>

                <Button onClick={startTest} className="w-full" size="lg">
                  <Play className="h-4 w-4 mr-2" />
                  {t.standTest.setup.startTest}
                </Button>
              </CardContent>
            </Card>
          )}

          {isRunning && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Phase: {currentPhaseData?.name}</span>
                    <div className="flex items-center gap-2">
                      <Timer className="h-4 w-4" />
                      {formatTime(timeElapsed)} / {formatTime(currentPhaseData?.duration || 0)}
                    </div>
                  </CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <span>{currentPhaseData?.instructions}</span>
                    {testMethod === 'camera' && (
                      <Badge variant={ppgStatus === 'measuring' ? 'default' : 'secondary'} className="ml-2">
                        PPG: {ppgStatus}
                      </Badge>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={progress} className="h-3 mb-4" />
                  
                  <div className="flex gap-4 justify-center mb-4">
                    <Button onClick={pauseTest} variant="outline">
                      {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                      {isPaused ? t.standTest.controls.resume : t.standTest.controls.pause}
                    </Button>
                    <Button onClick={stopTest} variant="destructive">
                      <Square className="h-4 w-4 mr-2" />
                      {t.standTest.controls.stop}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {testMethod === 'manual' ? (
                <Card>
                  <CardHeader>
                  <CardTitle>{t.standTest.recording.title}</CardTitle>
                  <CardDescription>
                    {t.standTest.recording.description}
                  </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="hr">Heart Rate ({t.common.bpm})</Label>
                        <Input
                          id="hr"
                          type="number"
                          placeholder="75"
                          value={currentHR || ''}
                          onChange={(e) => setCurrentHR(parseInt(e.target.value) || null)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="systolic">{t.standTest.recording.systolicBP}</Label>
                        <Input
                          id="systolic"
                          type="number"
                          placeholder="120"
                          value={currentBP?.systolic || ''}
                          onChange={(e) => setCurrentBP(prev => ({
                            ...prev,
                            systolic: parseInt(e.target.value) || 0,
                            diastolic: prev?.diastolic || 0
                          }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="diastolic">{t.standTest.recording.diastolicBP}</Label>
                        <Input
                          id="diastolic"
                          type="number"
                          placeholder="80"
                          value={currentBP?.diastolic || ''}
                          onChange={(e) => setCurrentBP(prev => ({
                            ...prev,
                            systolic: prev?.systolic || 0,
                            diastolic: parseInt(e.target.value) || 0
                          }))}
                        />
                      </div>
                    </div>
                    
                    <Button onClick={addReading} disabled={!currentHR} className="w-full">
                      {t.standTest.recording.recordReading} at {formatTime(timeElapsed)}
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <PPGCamera
                  onHeartRateDetected={handlePPGHeartRate}
                  isActive={isRunning && !isPaused}
                  onStatusChange={setPPGStatus}
                />
              )}

              {readings.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>{t.standTest.recording.recentReadings}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm space-y-1">
                        {readings.slice(-5).map((reading, index) => (
                          <div key={index} className="flex justify-between">
                            <span>{formatTime(reading.time)}</span>
                            <span>{reading.hr} {t.common.bpm}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}