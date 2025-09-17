'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Camera, Heart, Pause, Play, AlertTriangle, CheckCircle } from 'lucide-react'

interface PPGCameraProps {
  onHeartRateDetected: (heartRate: number) => void
  isActive: boolean
  onStatusChange?: (status: 'stopped' | 'starting' | 'detecting' | 'measuring') => void
}

interface PPGSample {
  timestamp: number
  value: number
}

export default function PPGCamera({ onHeartRateDetected, isActive, onStatusChange }: PPGCameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animationRef = useRef<number | null>(null)
  const samplesRef = useRef<PPGSample[]>([])
  const lastHeartRateRef = useRef<number>(0)
  const measurementStartRef = useRef<number>(0)

  const [isStarted, setIsStarted] = useState(false)
  const [currentHeartRate, setCurrentHeartRate] = useState<number | null>(null)
  const [fingerDetected, setFingerDetected] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [signalQuality, setSignalQuality] = useState<'poor' | 'fair' | 'good' | null>(null)

  // PPG signal processing parameters
  const SAMPLE_RATE = 30 // fps
  const WINDOW_SIZE = 256 // samples for FFT analysis
  const MIN_HR = 40
  const MAX_HR = 200
  const MEASUREMENT_DURATION = 10000 // 10 seconds minimum

  const startCamera = useCallback(async () => {
    try {
      setError(null)
      onStatusChange?.('starting')
      
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 640 },
          height: { ideal: 480 },
          frameRate: { ideal: SAMPLE_RATE }
        }
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        streamRef.current = stream
        
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play()
          setIsStarted(true)
          onStatusChange?.('detecting')
          measurementStartRef.current = Date.now()
          startProcessing()
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Camera access denied')
      onStatusChange?.('stopped')
    }
  }, [onStatusChange])

  const stopCamera = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    
    setIsStarted(false)
    setFingerDetected(false)
    setCurrentHeartRate(null)
    setSignalQuality(null)
    samplesRef.current = []
    onStatusChange?.('stopped')
  }, [onStatusChange])

  const processFrame = useCallback(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    
    if (!video || !canvas || video.videoWidth === 0) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to match video
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    
    // Draw video frame to canvas
    ctx.drawImage(video, 0, 0)
    
    // Get image data from center region (where finger should be)
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const regionSize = Math.min(canvas.width, canvas.height) * 0.3
    
    const imageData = ctx.getImageData(
      centerX - regionSize / 2,
      centerY - regionSize / 2,
      regionSize,
      regionSize
    )
    
    // Calculate average red channel intensity (PPG signal)
    let redSum = 0
    let brightness = 0
    const pixels = imageData.data
    
    for (let i = 0; i < pixels.length; i += 4) {
      redSum += pixels[i] // Red channel
      brightness += (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3
    }
    
    const numPixels = pixels.length / 4
    const avgRed = redSum / numPixels
    const avgBrightness = brightness / numPixels
    
    // Finger detection based on brightness and red intensity
    const fingerPresent = avgBrightness > 50 && avgBrightness < 200 && avgRed > 80
    setFingerDetected(fingerPresent)
    
    if (fingerPresent) {
      // Add sample to buffer
      const sample: PPGSample = {
        timestamp: Date.now(),
        value: avgRed
      }
      
      samplesRef.current.push(sample)
      
      // Keep only recent samples (last 10 seconds)
      const cutoffTime = Date.now() - 10000
      samplesRef.current = samplesRef.current.filter(s => s.timestamp > cutoffTime)
      
      // Process heart rate if we have enough samples
      if (samplesRef.current.length > SAMPLE_RATE * 3) { // 3 seconds minimum
        const heartRate = calculateHeartRate()
        if (heartRate && heartRate !== lastHeartRateRef.current) {
          setCurrentHeartRate(heartRate)
          lastHeartRateRef.current = heartRate
          
          // Auto-record if measurement is stable and sufficient duration
          const measurementDuration = Date.now() - measurementStartRef.current
          if (measurementDuration > MEASUREMENT_DURATION && signalQuality === 'good') {
            onHeartRateDetected(heartRate)
            onStatusChange?.('measuring')
          }
        }
      }
    }
  }, [onHeartRateDetected, onStatusChange, signalQuality])

  const calculateHeartRate = useCallback((): number | null => {
    const samples = samplesRef.current
    if (samples.length < WINDOW_SIZE / 2) return null

    // Get recent samples
    const recentSamples = samples.slice(-WINDOW_SIZE)
    if (recentSamples.length < 50) return null

    // Apply simple moving average filter to smooth signal
    const smoothed = recentSamples.map((_, i) => {
      const windowStart = Math.max(0, i - 2)
      const windowEnd = Math.min(recentSamples.length, i + 3)
      const windowSamples = recentSamples.slice(windowStart, windowEnd)
      return windowSamples.reduce((sum, s) => sum + s.value, 0) / windowSamples.length
    })

    // Find peaks in the smoothed signal
    const peaks: number[] = []
    const threshold = Math.max(...smoothed) * 0.6
    
    for (let i = 2; i < smoothed.length - 2; i++) {
      if (smoothed[i] > threshold &&
          smoothed[i] > smoothed[i - 1] &&
          smoothed[i] > smoothed[i - 2] &&
          smoothed[i] > smoothed[i + 1] &&
          smoothed[i] > smoothed[i + 2]) {
        // Ensure minimum distance between peaks
        if (peaks.length === 0 || i - peaks[peaks.length - 1] > SAMPLE_RATE / 4) {
          peaks.push(i)
        }
      }
    }

    if (peaks.length < 3) {
      setSignalQuality('poor')
      return null
    }

    // Calculate intervals between peaks
    const intervals: number[] = []
    for (let i = 1; i < peaks.length; i++) {
      const sampleInterval = peaks[i] - peaks[i - 1]
      const timeInterval = (sampleInterval / SAMPLE_RATE) * 1000 // ms
      intervals.push(timeInterval)
    }

    // Calculate average interval and heart rate
    const avgInterval = intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length
    const heartRate = Math.round(60000 / avgInterval) // BPM

    // Validate heart rate range
    if (heartRate < MIN_HR || heartRate > MAX_HR) {
      setSignalQuality('poor')
      return null
    }

    // Assess signal quality based on interval consistency
    const intervalStdDev = Math.sqrt(
      intervals.reduce((sum, interval) => sum + Math.pow(interval - avgInterval, 2), 0) / intervals.length
    )
    
    const coefficientOfVariation = intervalStdDev / avgInterval
    
    if (coefficientOfVariation < 0.1) {
      setSignalQuality('good')
    } else if (coefficientOfVariation < 0.2) {
      setSignalQuality('fair')
    } else {
      setSignalQuality('poor')
    }

    return heartRate
  }, [])

  const startProcessing = useCallback(() => {
    const process = () => {
      processFrame()
      animationRef.current = requestAnimationFrame(process)
    }
    process()
  }, [processFrame])

  useEffect(() => {
    if (isActive && !isStarted) {
      startCamera()
    } else if (!isActive && isStarted) {
      stopCamera()
    }
  }, [isActive, isStarted, startCamera, stopCamera])

  useEffect(() => {
    return () => {
      stopCamera()
    }
  }, [stopCamera])

  const manualRecord = () => {
    if (currentHeartRate) {
      onHeartRateDetected(currentHeartRate)
      onStatusChange?.('measuring')
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5" />
          Camera PPG Heart Rate
        </CardTitle>
        <CardDescription>
          Place your fingertip gently over the camera lens with flashlight on
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="relative">
          <video
            ref={videoRef}
            className="w-full max-w-md mx-auto rounded-lg border"
            style={{ transform: 'scaleX(-1)' }} // Mirror the video
            playsInline
            muted
          />
          <canvas
            ref={canvasRef}
            className="hidden"
          />
          
          {isStarted && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 border-2 border-white rounded-full opacity-50" />
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <Badge variant={fingerDetected ? "default" : "secondary"} className="mb-2">
              {fingerDetected ? (
                <>
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Finger Detected
                </>
              ) : (
                "Place Finger"
              )}
            </Badge>
          </div>
          
          <div className="text-center">
            {signalQuality && (
              <Badge 
                variant={signalQuality === 'good' ? 'default' : signalQuality === 'fair' ? 'secondary' : 'destructive'}
                className="mb-2"
              >
                Signal: {signalQuality}
              </Badge>
            )}
          </div>
        </div>

        {currentHeartRate && (
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="text-2xl font-bold text-green-900">
                {currentHeartRate} BPM
              </span>
            </div>
            <Button 
              onClick={manualRecord}
              disabled={!fingerDetected || signalQuality === 'poor'}
              size="sm"
            >
              Record Reading
            </Button>
          </div>
        )}

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-sm">
            <strong>Instructions:</strong>
            <br />• Turn on your device's flashlight
            <br />• Gently place fingertip over camera lens
            <br />• Stay still and breathe normally
            <br />• Wait for stable reading (10+ seconds)
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}