'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { BarChart3, CheckCircle, AlertTriangle, FileText, Download } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/lib/language-context'

interface DiagnosticCriteria {
  id: string
  condition: string
  met: boolean
  criteria: { id: string; description: string; met: boolean }[]
  icdCode: string
  confidence: 'high' | 'medium' | 'low'
}

// Criteria will be generated from translations

export default function CriteriaEngine() {
  const { t } = useTranslation()
  
  const getMECFSCriteria = () => t.criteria.mecfs.criteria.map((desc, index) => ({
    id: ['fatigue', 'pem', 'sleep', 'cognitive', 'orthostatic'][index],
    description: desc,
    met: false
  }))
  
  const getLongCovidCriteria = () => t.criteria.longCovid.criteria.map((desc, index) => ({
    id: ['covid_history', 'duration', 'multisystem', 'unexplained'][index],
    description: desc,
    met: false
  }))
  
  const getPOTSCriteria = () => t.criteria.pots.criteria.map((desc, index) => ({
    id: ['hr_increase', 'sustained', 'symptoms', 'duration_pots', 'no_oh'][index],
    description: desc,
    met: false
  }))

  const [mecfsChecked, setMecfsChecked] = useState(() => getMECFSCriteria())
  const [longCovidChecked, setLongCovidChecked] = useState(() => getLongCovidCriteria())
  const [potsChecked, setPotsChecked] = useState(() => getPOTSCriteria())
  const [covidTiming, setCovidTiming] = useState<string>('')
  const [isComplete, setIsComplete] = useState(false)

  const handleMECFSChange = (id: string, checked: boolean) => {
    setMecfsChecked(prev => prev.map(item => 
      item.id === id ? { ...item, met: checked } : item
    ))
  }

  const handleLongCovidChange = (id: string, checked: boolean) => {
    setLongCovidChecked(prev => prev.map(item => 
      item.id === id ? { ...item, met: checked } : item
    ))
  }

  const handlePOTSChange = (id: string, checked: boolean) => {
    setPotsChecked(prev => prev.map(item => 
      item.id === id ? { ...item, met: checked } : item
    ))
  }

  const calculateDiagnoses = (): DiagnosticCriteria[] => {
    const diagnoses: DiagnosticCriteria[] = []

    // ME/CFS Diagnosis (requires fatigue, PEM, sleep, and either cognitive OR orthostatic)
    const mecfsCore = mecfsChecked.filter(c => ['fatigue', 'pem', 'sleep'].includes(c.id) && c.met).length
    const mecfsAdditional = mecfsChecked.filter(c => ['cognitive', 'orthostatic'].includes(c.id) && c.met).length
    const mecfsMet = mecfsCore === 3 && mecfsAdditional >= 1
    
    diagnoses.push({
      id: 'mecfs',
      condition: t.conditions.mecfs.fullName,
      met: mecfsMet,
      criteria: mecfsChecked,
      icdCode: t.conditions.mecfs.icdCode,
      confidence: mecfsMet ? (mecfsCore === 3 && mecfsAdditional === 2 ? 'high' : 'medium') : 'low'
    })

    // Long COVID Diagnosis
    const longCovidMet = longCovidChecked.filter(c => c.met).length >= 3
    diagnoses.push({
      id: 'longcovid',
      condition: t.conditions.longCovid.fullName,
      met: longCovidMet,
      criteria: longCovidChecked,
      icdCode: t.conditions.longCovid.icdCode,
      confidence: longCovidMet ? 'high' : 'low'
    })

    // POTS Diagnosis (requires HR increase + symptoms + duration + no OH)
    const potsEssential = potsChecked.filter(c => ['hr_increase', 'symptoms', 'duration_pots', 'no_oh'].includes(c.id) && c.met).length
    const potsMet = potsEssential >= 4
    
    diagnoses.push({
      id: 'pots',
      condition: t.conditions.pots.fullName,
      met: potsMet,
      criteria: potsChecked,
      icdCode: t.conditions.pots.icdCode,
      confidence: potsMet ? 'high' : 'low'
    })

    return diagnoses
  }

  const generateReport = () => {
    const diagnoses = calculateDiagnoses()
    const positives = diagnoses.filter(d => d.met)
    
    let report = "AutoDx Clinical Decision Support Report\n"
    report += "=====================================\n\n"
    
    report += "DIAGNOSTIC SUMMARY:\n"
    if (positives.length === 0) {
      report += "• No criteria met for ME/CFS, Long COVID, or POTS\n"
      report += "• Consider alternative diagnoses\n"
      report += "• Reassess if symptoms progress\n\n"
    } else {
      positives.forEach(dx => {
        report += `• ${dx.condition} - CRITERIA MET (${dx.icdCode})\n`
        report += `  Confidence: ${dx.confidence.toUpperCase()}\n`
      })
      report += "\n"
    }

    report += "DETAILED CRITERIA ASSESSMENT:\n\n"
    
    diagnoses.forEach(dx => {
      report += `${dx.condition} (${dx.icdCode}):\n`
      dx.criteria.forEach(criterion => {
        report += `  ${criterion.met ? '✓' : '✗'} ${criterion.description}\n`
      })
      report += `  Result: ${dx.met ? 'CRITERIA MET' : 'Criteria not met'}\n\n`
    })

    return report
  }

  if (isComplete) {
    const diagnoses = calculateDiagnoses()
    const positives = diagnoses.filter(d => d.met)
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-green-600" />
                {t.criteria.results.complete}
              </CardTitle>
              <CardDescription>
                {t.criteria.results.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {positives.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-center mb-4">{t.criteria.results.diagnosesMet}</h3>
                  {positives.map((diagnosis) => (
                    <Alert key={diagnosis.id} className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription>
                        <div className="flex justify-between items-start">
                          <div>
                            <strong className="text-green-800">{diagnosis.condition}</strong>
                            <p className="text-green-700 text-sm mt-1">
                              ICD-10 Code: {diagnosis.icdCode} | Confidence: {diagnosis.confidence}
                            </p>
                          </div>
                          <Badge className="bg-green-100 text-green-800">
                            {t.criteria.results.criteriaMet}
                          </Badge>
                        </div>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              ) : (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>{t.newPatient.results.noDefinitiveDiagnoses}</strong>
                  </AlertDescription>
                </Alert>
              )}

              <div className="grid md:grid-cols-3 gap-4">
                {diagnoses.map((diagnosis) => (
                  <Card key={diagnosis.id} className={`border-2 ${
                    diagnosis.met ? 'border-green-500 bg-green-50' : 'border-gray-200'
                  }`}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-semibold">
                        {diagnosis.condition.split('(')[0].trim()}
                      </CardTitle>
                      <div className="flex justify-between items-center">
                        <Badge variant={diagnosis.met ? 'default' : 'secondary'} className="text-xs">
                          {diagnosis.icdCode}
                        </Badge>
                        <Badge variant={diagnosis.met ? 'default' : 'outline'} className="text-xs">
                          {diagnosis.met ? t.common.met : t.common.notMet}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {diagnosis.criteria.map((criterion) => (
                          <div key={criterion.id} className="flex items-start gap-2 text-xs">
                            <span className={criterion.met ? 'text-green-600' : 'text-gray-400'}>
                              {criterion.met ? '✓' : '✗'}
                            </span>
                            <span className={criterion.met ? 'text-green-700' : 'text-gray-600'}>
                              {criterion.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-900">{t.criteria.results.clinicalRecommendations}</h4>
                <div className="text-blue-800 text-sm space-y-2">
                  {positives.some(d => d.id === 'mecfs') && (
                    <div>
                      <strong>ME/CFS Management:</strong>
                      <ul className="ml-4 list-disc space-y-1 mt-1">
                        {t.criteria.results.mecfsManagement.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {positives.some(d => d.id === 'longcovid') && (
                    <div>
                      <strong>Long COVID Management:</strong>
                      <ul className="ml-4 list-disc space-y-1 mt-1">
                        {t.criteria.results.longCovidManagement.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {positives.some(d => d.id === 'pots') && (
                    <div>
                      <strong>POTS Management:</strong>
                      <ul className="ml-4 list-disc space-y-1 mt-1">
                        {t.criteria.results.potsManagement.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => {
                  setMecfsChecked(getMECFSCriteria())
                  setLongCovidChecked(getLongCovidCriteria())
                  setPotsChecked(getPOTSCriteria())
                  setIsComplete(false)
                }} variant="outline">
                  {t.criteria.results.reassess}
                </Button>
                <Button onClick={() => {
                  const report = generateReport()
                  const blob = new Blob([report], { type: 'text/plain' })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = 'autodx-diagnostic-report.txt'
                  a.click()
                  URL.revokeObjectURL(url)
                }} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {t.criteria.results.downloadReport}
                </Button>
                {positives.some(d => d.id === 'pots') && (
                  <Button asChild>
                    <Link href="/subtype-advisor">
                      {t.criteria.results.potsSubtype}
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
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t.criteria.title}</h1>
              <p className="text-gray-600">{t.criteria.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-blue-800">{t.criteria.mecfs.title}</CardTitle>
              <CardDescription>
                {t.criteria.mecfs.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mecfsChecked.map((criterion) => (
                  <div key={criterion.id} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                    <Checkbox
                      id={criterion.id}
                      checked={criterion.met}
                      onCheckedChange={(checked) => handleMECFSChange(criterion.id, !!checked)}
                    />
                    <Label htmlFor={criterion.id} className="cursor-pointer text-sm flex-1">
                      {criterion.description}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-green-800">{t.criteria.longCovid.title}</CardTitle>
              <CardDescription>
                {t.criteria.longCovid.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {longCovidChecked.map((criterion) => (
                  <div key={criterion.id} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                    <Checkbox
                      id={criterion.id}
                      checked={criterion.met}
                      onCheckedChange={(checked) => handleLongCovidChange(criterion.id, !!checked)}
                    />
                    <Label htmlFor={criterion.id} className="cursor-pointer text-sm flex-1">
                      {criterion.description}
                    </Label>
                  </div>
                ))}
              </div>
              
              {longCovidChecked.find(c => c.id === 'covid_history')?.met && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <Label className="text-sm font-medium">COVID-19 infection timing:</Label>
                  <RadioGroup value={covidTiming} onValueChange={setCovidTiming} className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="confirmed" id="confirmed" />
                      <Label htmlFor="confirmed" className="text-sm">{t.criteria.longCovid.timing.confirmed}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="probable" id="probable" />
                      <Label htmlFor="probable" className="text-sm">{t.criteria.longCovid.timing.probable}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="suspected" id="suspected" />
                      <Label htmlFor="suspected" className="text-sm">{t.criteria.longCovid.timing.suspected}</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-purple-800">{t.criteria.pots.title}</CardTitle>
              <CardDescription>
                {t.criteria.pots.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {potsChecked.map((criterion) => (
                  <div key={criterion.id} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                    <Checkbox
                      id={criterion.id}
                      checked={criterion.met}
                      onCheckedChange={(checked) => handlePOTSChange(criterion.id, !!checked)}
                    />
                    <Label htmlFor={criterion.id} className="cursor-pointer text-sm flex-1">
                      {criterion.description}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button onClick={() => setIsComplete(true)} size="lg" className="px-8">
              <FileText className="h-4 w-4 mr-2" />
              {t.criteria.results.downloadReport}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}