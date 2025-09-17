export interface Translation {
  // App Title and Navigation
  app: {
    title: string
    subtitle: string
    tagline: string
    backToDashboard: string
  }

  // Common UI Elements
  common: {
    yes: string
    no: string
    next: string
    previous: string
    continue: string
    complete: string
    cancel: string
    save: string
    download: string
    loading: string
    processing: string
    error: string
    success: string
    retry: string
    close: string
    age: string
    gender: string
    male: string
    female: string
    other: string
    question: string
    of: string
    step: string
    minute: string
    minutes: string
    bpm: string
    criteria: string
    met: string
    notMet: string
    high: string
    medium: string
    low: string
    none: string
    mild: string
    moderate: string
    severe: string
    confidence: string
    sensitivity: string
    score: string
    results: string
    recommendations: string
    clinician: string
    patientId: string
    required: string
    optional: string
  }

  // Dashboard
  dashboard: {
    smartAssessment: {
      title: string
      description: string
      autoRouting: string
      soapNotes: string
      icdCodes: string
      startNew: string
    }
    modules: {
      quickScreen: {
        title: string
        description: string
      }
      redFlag: {
        title: string
        description: string
      }
      standTest: {
        title: string
        description: string
      }
      pemQuest: {
        title: string
        description: string
      }
      criteriaEngine: {
        title: string
        description: string
      }
      subtypeAdvisor: {
        title: string
        description: string
      }
    }
    stats: {
      diagnosticDelay: string
      doctorsConsulted: string
      sensitivityValidated: string
    }
    algorithm: {
      title: string
      mecfs: {
        title: string
        criteria: string
        description: string
      }
      longCovid: {
        title: string
        criteria: string
        description: string
      }
      pots: {
        title: string
        criteria: string
        description: string
      }
    }
    startAssessment: string
  }

  // Quick Screen
  quickScreen: {
    title: string
    description: string
    questions: string[]
    categories: {
      core: string
      pem: string
      cardiovascular: string
      orthostatic: string
      history: string
      duration: string
      pain: string
      neurological: string
      autonomic: string
      gi: string
      respiratory: string
      functional: string
      sensory: string
    }
    results: {
      complete: string
      riskAssessment: string
      lowRisk: string
      mediumRisk: string
      highRisk: string
      totalResponses: string
      coreSymptoms: string
      pemPresent: string
      covidHistory: string
      chronicSymptoms: string
      nextSteps: string
      retake: string
    }
    nextStepsRecommendations: {
      high: string[]
      medium: string[]
      low: string[]
    }
  }

  // Red Flag Checker
  redFlag: {
    title: string
    description: string
    symptoms: {
      title: string
      description: string
      list: string[]
    }
    routineLabs: {
      title: string
      description: string
      categories: {
        basicMetabolic: {
          title: string
          indication: string
          tests: string[]
        }
        endocrine: {
          title: string
          indication: string
          tests: string[]
        }
        nutritional: {
          title: string
          indication: string
          tests: string[]
        }
        autoimmune: {
          title: string
          indication: string
          tests: string[]
        }
        cardiac: {
          title: string
          indication: string
          tests: string[]
        }
        infectious: {
          title: string
          indication: string
          tests: string[]
        }
      }
    }
    results: {
      complete: string
      urgentEval: string
      priorityTests: string
      routineTests: string
      noRedFlags: string
      clinicalSupport: string
      urgent: string
      priority: string
      routine: string
      reassess: string
      generateRecommendations: string
    }
  }

  // Stand Test
  standTest: {
    title: string
    description: string
    setup: {
      title: string
      description: string
      manual: {
        title: string
        description: string
        recommended: string
      }
      camera: {
        title: string
        description: string
        beta: string
      }
      safety: string
      startTest: string
    }
    phases: {
      baseline: {
        name: string
        instructions: string
      }
      standing: {
        name: string
        instructions: string
      }
    }
    recording: {
      title: string
      description: string
      baselineHR: string
      peakHR: string
      systolicBP: string
      diastolicBP: string
      recordReading: string
      recentReadings: string
    }
    results: {
      title: string
      description: string
      baseline: string
      peakStanding: string
      sustainedStanding: string
      averageHR: string
      maxHR: string
      hrIncrease: string
      potsCriteria: string
      potsMet: string
      potsNotMet: string
      interpretation: string
      nextSteps: string
      repeatTest: string
    }
    interpretations: {
      potsMet: string[]
      potsNotMet: string[]
    }
    controls: {
      pause: string
      resume: string
      stop: string
    }
  }

  // PEM Quest
  pem: {
    title: string
    description: string
    about: {
      title: string
      description: string
    }
    questions: {
      frequency: {
        question: string
        description: string
        options: string[]
      }
      mentalFrequency: {
        question: string
        description: string
        options: string[]
      }
      onsetTime: {
        question: string
        options: string[]
      }
      severity: {
        question: string
        options: string[]
      }
      recoveryTime: {
        question: string
        options: string[]
      }
    }
    results: {
      complete: string
      description: string
      status: string
      present: string
      absent: string
      severityLevels: {
        none: string
        mild: string
        moderate: string
        severe: string
      }
      clinicalInterpretation: string
      recommendations: {
        severe: string[]
        moderate: string[]
        mild: string[]
        none: string[]
      }
      important: string
      retake: string
    }
  }

  // Criteria Engine
  criteria: {
    title: string
    description: string
    mecfs: {
      title: string
      description: string
      criteria: string[]
    }
    longCovid: {
      title: string
      description: string
      criteria: string[]
      timing: {
        confirmed: string
        probable: string
        suspected: string
      }
    }
    pots: {
      title: string
      description: string
      criteria: string[]
    }
    results: {
      complete: string
      description: string
      diagnosesMet: string
      criteriaMet: string
      clinicalRecommendations: string
      mecfsManagement: string[]
      longCovidManagement: string[]
      potsManagement: string[]
      reassess: string
      downloadReport: string
      potsSubtype: string
    }
  }

  // Subtype Advisor
  subtype: {
    title: string
    description: string
    patientInfo: {
      title: string
      description: string
      comorbidities: string
    }
    subtypes: {
      hypovolemic: {
        name: string
        description: string
        criteria: string[]
        treatments: {
          nonPharmacological: string[]
          firstLine: string[]
          secondLine: string[]
        }
      }
      neuropathic: {
        name: string
        description: string
        criteria: string[]
        treatments: {
          nonPharmacological: string[]
          firstLine: string[]
          secondLine: string[]
        }
      }
      hyperadrenergic: {
        name: string
        description: string
        criteria: string[]
        treatments: {
          nonPharmacological: string[]
          firstLine: string[]
          secondLine: string[]
        }
      }
      autoimmune: {
        name: string
        description: string
        criteria: string[]
        treatments: {
          nonPharmacological: string[]
          firstLine: string[]
          secondLine: string[]
        }
      }
    }
    results: {
      complete: string
      description: string
      primary: string
      likelihood: string
      criteriaMetTitle: string
      allSubtypeScores: string
      nonPharmacological: string
      firstLineRx: string
      secondLineOptions: string
      mixedSubtype: string
      clinicalPearls: string
      pearls: string[]
      reassess: string
      downloadPlan: string
    }
  }

  // New Patient Workflow
  newPatient: {
    title: string
    description: string
    demographics: {
      title: string
      description: string
      step: string
      age: string
      gender: string
      clinicianName: string
      patientId: string
      startAssessment: string
    }
    progress: {
      step1: string
      step2: string
      step3: string
      step4: string
      step5: string
      step6: string
      step7: string
    }
    redFlags: {
      title: string
      description: string
      selectSymptoms: string
      continueAssessment: string
    }
    standTest: {
      title: string
      description: string
      measurements: string
      measurementDescription: string
      baselineHR: string
      peakHR: string
      hrIncrease: string
      potsCriteria: string
      continueToPEM: string
    }
    pemAssessment: {
      title: string
      description: string
      finalizeAssessment: string
    }
    processing: {
      title: string
      description: string
    }
    results: {
      title: string
      description: string
      primary: string
      noDefinitiveDiagnoses: string
      keyResults: string
      riskLevel: string
      screeningScore: string
      pemPresent: string
      potsCriteria: string
      redFlags: string
      priority: string
      newAssessment: string
      downloadSOAP: string
    }
  }

  // Medical Conditions
  conditions: {
    mecfs: {
      name: string
      fullName: string
      icdCode: string
      criteria: string[]
    }
    longCovid: {
      name: string
      fullName: string
      icdCode: string
      criteria: string[]
    }
    pots: {
      name: string
      fullName: string
      icdCode: string
      criteria: string[]
    }
  }

  // Navigation
  navigation: {
    assessmentModules: string
    guidelines: string
    diagnosticTools: string
    clinicalGuidelines: string
    guidelinesDescription: string
    assessmentModulesSection: string
    guidelinesSection: string
    moreGuidelines: string
  }

  // Languages
  languages: {
    en: string
    nl: string
    da: string
    de: string
    sv: string
    no: string
    fr: string
  }

  // Disclaimer
  disclaimer: string

  // Footer
  footer: {
    about: {
      title: string
      description: string
      badges: {
        sensitivity: string
        evidenceBased: string
        openSource: string
      }
    }
    evidence: {
      title: string
      guidelines: string[]
    }
    notes: {
      title: string
      items: string[]
    }
    bottom: {
      version: string
      copyright: string
      audienceLabel: string
      badge: string
    }
    technical: string
  }
}

export type SupportedLanguage = 'en' | 'nl' | 'da' | 'de' | 'sv' | 'no' | 'fr'

export const SUPPORTED_LANGUAGES: { code: SupportedLanguage; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
]