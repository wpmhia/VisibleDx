import { Translation } from './types'

export const en: Translation = {
  app: {
    title: 'InvisibleDx: ME/CFS · Long COVID · POTS',
    subtitle: 'An educational tool for learning evidence-based criteria for ME/CFS, Long COVID, and POTS. For healthcare education and research purposes only.',
    tagline: 'Making invisible diseases visible - with evidence, empathy and code.',
    backToDashboard: 'Back to Dashboard'
  },

  common: {
    yes: 'Yes',
    no: 'No',
    next: 'Next',
    previous: 'Previous',
    continue: 'Continue',
    complete: 'Complete',
    cancel: 'Cancel',
    save: 'Save',
    download: 'Download',
    loading: 'Loading',
    processing: 'Processing',
    error: 'Error',
    success: 'Success',
    retry: 'Retry',
    close: 'Close',
    step: 'Step',
    of: 'of',
    progress: 'Progress',
    completing: 'Completing',
    saving: 'Saving',
    back: 'Back',
    goBack: 'Go Back',
    exit: 'Exit',
    restart: 'Restart',
    reset: 'Reset',
    confirm: 'Confirm',
    areYouSure: 'Are you sure?',
    age: 'Age',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    question: 'Question',
    minute: 'minute',
    minutes: 'minutes',
    bpm: 'bpm',
    criteria: 'Criteria',
    met: 'Met',
    notMet: 'Not Met',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    none: 'None',
    mild: 'Mild',
    moderate: 'Moderate',
    severe: 'Severe',
    confidence: 'Confidence',
    sensitivity: 'Sensitivity',
    score: 'Score',
    results: 'Results',
    recommendations: 'Recommendations',
    clinician: 'Clinician',
    patientId: 'Patient ID',
    required: 'Required',
    optional: 'Optional',
    category: 'Category'
  },

  dashboard: {
    smartAssessment: {
      title: 'Educational Simulation',
      description: 'Interactive learning workflow with educational documentation examples',
      autoRouting: 'Auto-routing',
      soapNotes: 'SOAP notes',
      icdCodes: 'ICD-10 codes',
      startNew: 'Start Learning Session'
    },
    modules: {
      quickScreen: {
        title: 'Initial Screening',
        description: 'Chief complaint & symptom review (16 questions, ~2 min)'
      },
      redFlag: {
        title: 'Differential Diagnosis',
        description: 'Rule out alternative diagnoses & red flag symptoms'
      },
      standTest: {
        title: 'Orthostatic Vitals',
        description: 'Standing test with heart rate monitoring (NASA protocol)'
      },
      pemQuest: {
        title: 'PEM Assessment',
        description: 'Post-exertional malaise symptom evaluation'
      },
      criteriaEngine: {
        title: 'Diagnostic Criteria',
        description: 'Apply clinical criteria (CDC, WHO, ESC guidelines)'
      },
      subtypeAdvisor: {
        title: 'Clinical Management',
        description: 'Condition subtyping & treatment planning examples'
      },
      energyManagement: {
        title: 'Energy Management',
        description: 'NICE NG206 energy management planning tool'
      },
      caseAnalyzer: {
        title: 'Case Analyzer',
        description: 'AI-powered clinical case analysis for ME/CFS assessment'
      }
    },
    stats: {
      diagnosticDelay: '4-5 year avg diagnostic delay',
      doctorsConsulted: '≥7 doctors typically consulted',
      sensitivityValidated: '94% sensitivity validated'
    },
    algorithm: {
      title: 'Educational Algorithm',
      mecfs: {
        title: 'ME/CFS',
        criteria: 'CDC/NASEM 2015 + IOM criteria',
        description: '3 core + 1 PEM symptom cluster'
      },
      longCovid: {
        title: 'Long COVID',
        criteria: 'WHO + NASEM 2024 criteria',
        description: '≥3 months post-SARS-CoV-2'
      },
      pots: {
        title: 'POTS',
        criteria: 'ESC 2018 + AAS/EFAS 2021',
        description: 'HR↑≥30 bpm within 10 min'
      }
    },
    startAssessment: 'Start Assessment'
  },

  quickScreen: {
    title: 'NICE ME/CFS Screening Assessment',
    description: 'NICE NG206 compliant screening · 4 core symptoms + additional features',
    questions: [
      'Do you experience debilitating fatigue that is worsened by activity, not caused by excessive exertion, and not significantly relieved by rest?',
      'Do you experience post-exertional malaise where symptoms worsen hours or days after activity, are disproportionate to the activity, and have prolonged recovery?',
      'Do you have unrefreshing sleep or sleep disturbance (feeling exhausted/flu-like on waking, broken sleep, altered sleep pattern)?',
      'Do you experience cognitive difficulties (brain fog, problems finding words/numbers, difficulty speaking, memory problems, concentration issues)?',
      'Do you experience orthostatic intolerance or autonomic dysfunction (dizziness, palpitations, fainting, nausea when standing/sitting upright)?',
      'Do you have temperature hypersensitivity (profuse sweating, chills, hot flushes, feeling very cold)?',
      'Do you experience neuromuscular symptoms (muscle twitching, myoclonic jerks)?',
      'Do you have flu-like symptoms (sore throat, tender glands, nausea, chills, muscle aches)?',
      'Do you have alcohol intolerance or intolerance to certain foods and chemicals?',
      'Do you experience heightened sensory sensitivities (to light, sound, touch, taste, smell)?',
      'Do you experience pain (pain on touch, muscle pain, headaches, eye pain, abdominal pain, joint pain without swelling)?',
      'Have your symptoms persisted for at least 6 weeks (adults) or 4 weeks (children/young people)?',
      'Has your ability to engage in occupational, educational, social or personal activities been significantly reduced from pre-illness levels?',
      'Are your symptoms NOT explained by another medical condition?',
      'Have you had COVID-19 or another triggering infection?',
      'Do you meet severity criteria for moderate to severe impact on daily functioning?'
    ],
    categories: {
      coreFatigue: 'Core: Debilitating Fatigue',
      corePEM: 'Core: Post-Exertional Malaise',
      coreSleep: 'Core: Unrefreshing Sleep',
      coreCognitive: 'Core: Cognitive Difficulties',
      additional: 'Additional: Orthostatic Intolerance',
      autonomic: 'Additional: Temperature/Autonomic',
      neuromuscular: 'Additional: Neuromuscular',
      fluLike: 'Additional: Flu-like Symptoms',
      intolerance: 'Additional: Food/Chemical Intolerance',
      sensory: 'Additional: Sensory Hypersensitivity',
      pain: 'Additional: Pain Symptoms',
      duration: 'Diagnostic: Duration Criteria',
      functional: 'Diagnostic: Functional Impairment',
      exclusion: 'Diagnostic: Exclusion Criteria',
      history: 'Risk Factor: Infection History',
      severity: 'Assessment: Severity Level'
    },
    results: {
      complete: 'Screening Complete',
      riskAssessment: 'Educational simulation - Based on your responses, here\'s the learning scenario',
      lowRisk: 'Low Risk for ME/CFS, Long COVID, or POTS',
      mediumRisk: 'Medium Risk for ME/CFS, Long COVID, or POTS',
      highRisk: 'High Risk for ME/CFS, Long COVID, or POTS',
      totalResponses: 'Total positive responses',
      coreSymptoms: 'Core symptoms present',
      pemPresent: 'Post-exertional malaise',
      covidHistory: 'COVID history',
      chronicSymptoms: 'Chronic symptoms (≥3 months)',
      nextSteps: 'Next Steps',
      retake: 'Retake Screening'
    },
    nextStepsRecommendations: {
      high: [
        'ME/CFS strongly suspected - NICE NG206 criteria met',
        'Complete differential diagnosis workup (Red-flag Checker)',
        'If no red flags: refer to ME/CFS specialist team after 3 months',
        'Begin personalised advice on energy management',
        'Advise rest and convalesce as needed',
        'Schedule review before 3 months if symptoms worsen'
      ],
      medium: [
        'Partial ME/CFS criteria met - continue monitoring',
        'Consider differential diagnoses (Red-flag Checker)',
        'Provide symptom management advice',
        'Re-assess in 4-6 weeks for symptom progression',
        'Monitor for development of full criteria'
      ],
      low: [
        'ME/CFS criteria not met based on current assessment',
        'Consider other causes of fatigue and symptoms',
        'Routine clinical evaluation as appropriate',
        'Reassess if symptom pattern changes or worsens'
      ]
    }
  },

  redFlag: {
    title: 'NICE NG206 Differential Diagnosis',
    description: 'NICE-compliant investigations to exclude other diagnoses when ME/CFS is suspected',
    symptoms: {
      title: 'Red Flag Symptoms',
      description: 'Check any symptoms present that may require urgent evaluation',
      list: [
        'Persistent fever or night sweats',
        'Unintentional weight loss >10% in 6 months',
        'Chest pain with exertion or at rest',
        'Progressive shortness of breath',
        'New neurological symptoms (weakness, numbness, seizures)',
        'Abnormal bleeding or bruising',
        'Enlarged lymph nodes',
        'Jaundice or yellowing of skin/eyes'
      ]
    },
    urgentCategories: [
      'Infectious/Inflammatory',
      'Malignancy/Metabolic', 
      'Cardiovascular',
      'Cardiopulmonary',
      'Neurological',
      'Hematological',
      'Infectious/Malignancy',
      'Hepatic'
    ],
    routineLabs: {
      title: 'NICE NG206 Required Investigations',
      description: 'Mandatory tests to exclude other diagnoses when ME/CFS is suspected',
      categories: {
        essential: {
          title: 'Essential Tests (NICE NG206)',
          indication: 'Required investigations for all patients with suspected ME/CFS',
          tests: ['Urinalysis for protein, blood and glucose', 'Full blood count', 'Urea and electrolytes', 'Liver function', 'Thyroid function (TSH)', 'ESR or plasma viscosity', 'C-reactive protein', 'Calcium and phosphate', 'HbA1c', 'Serum ferritin', 'Coeliac screening', 'Creatine kinase']
        },
        additional: {
          title: 'Additional Tests (Clinical Judgement)',
          indication: 'Consider based on clinical presentation and history',
          tests: ['Vitamin D', 'Vitamin B12 and folate levels', 'Serological tests if infection history', '9am cortisol for adrenal insufficiency']
        },
        paediatric: {
          title: 'Additional Paediatric Considerations',
          indication: 'Extra considerations for children and young people',
          tests: ['Growth parameters', 'Developmental assessment', 'School attendance review', 'Family history review']
        }
      }
    },
    results: {
      complete: 'NICE NG206 Differential Diagnosis Complete',
      urgentEval: 'Urgent Evaluation Required',
      priorityTests: 'Priority Tests (Red Flags)',
      routineTests: 'NICE NG206 Required Investigations',
      noRedFlags: 'No Red Flags - Proceed with NICE Investigations',
      clinicalSupport: 'NICE NG206 Clinical Guidance',
      urgent: 'Red flags present - complete urgent evaluation before ME/CFS assessment. Consider primary care or specialist referral for red flag symptoms.',
      priority: 'Complete NICE-required investigations. If normal, can proceed with ME/CFS diagnosis after 3 months of persistent symptoms.',
      routine: 'No red flags identified. Complete NICE NG206 mandatory investigations to exclude other diagnoses. If investigations normal and symptoms persist for 3 months, diagnose ME/CFS and refer to specialist team.',
      reassess: 'Reassess',
      generateRecommendations: 'Generate NICE Recommendations'
    }
  },

  standTest: {
    title: 'Stand-Test Pro',
    description: 'NASA Lean Stand Test Protocol - 10 minute heart rate monitoring',
    setup: {
      title: 'Test Setup',
      description: 'Choose your preferred method for heart rate monitoring',
      manual: {
        title: 'Manual Entry',
        description: 'Use pulse oximeter, fitness tracker, or manual pulse counting',
        recommended: 'Recommended'
      },
      camera: {
        title: 'Camera PPG',
        description: 'Use device camera for photoplethysmography (experimental)',
        beta: 'Beta Feature'
      },
      safety: 'Safety Note: Stop the test immediately if you experience chest pain, severe dizziness, or feel faint. Have a chair nearby for safety.',
      startTest: 'Start Stand Test'
    },
    phases: {
      baseline: {
        name: 'Baseline Lying',
        instructions: 'Lie down comfortably and remain still. Breathe normally and relax.'
      },
      standing: {
        name: 'Standing Phase',
        instructions: 'Stand up quickly and remain standing. Do not lean against walls or move around.'
      }
    },
    recording: {
      title: 'Record Heart Rate',
      description: 'Enter current heart rate reading (record every 1-2 minutes)',
      baselineHR: 'Baseline HR (lying down)',
      peakHR: 'Peak Standing HR',
      systolicBP: 'Systolic BP (optional)',
      diastolicBP: 'Diastolic BP (optional)',
      recordReading: 'Record Reading',
      recentReadings: 'Recent Readings'
    },
    results: {
      title: 'Stand-Test Results',
      description: 'NASA Lean Stand Test Results - 10 minute protocol',
      baseline: 'Baseline (Lying)',
      peakStanding: 'Peak Standing',
      sustainedStanding: 'Sustained Standing',
      averageHR: 'Average heart rate',
      maxHR: 'Maximum heart rate',
      hrIncrease: 'HR Increase',
      potsCriteria: 'POTS Criteria',
      potsMet: 'POTS Criteria Met',
      potsNotMet: 'POTS Criteria Not Met',
      interpretation: 'Clinical Interpretation',
      nextSteps: 'Next Steps',
      repeatTest: 'Repeat Test'
    },
    interpretations: {
      potsMet: [
        'Heart rate increase suggests orthostatic intolerance consistent with POTS',
        'Proceed to POTS subtyping for targeted treatment recommendations',
        'Consider additional autonomic testing if clinically indicated',
        'Rule out secondary causes (dehydration, medications, other conditions)'
      ],
      potsNotMet: [
        'Normal orthostatic heart rate response',
        'POTS unlikely based on current criteria',
        'Consider other causes of symptoms (ME/CFS, Long COVID without POTS)',
        'Repeat testing if symptoms persist or worsen'
      ]
    },
    controls: {
      pause: 'Pause',
      resume: 'Resume',
      stop: 'Stop Test'
    }
  },

  pem: {
    title: 'NICE NG206 Post-Exertional Malaise Assessment',
    description: 'NICE-compliant PEM evaluation based on NG206 core criteria',
    about: {
      title: 'NICE NG206 Definition of Post-Exertional Malaise',
      description: 'Post-exertional malaise is a worsening of symptoms after minimal cognitive, physical, emotional or social activity. The worsening is often delayed by hours or days, is disproportionate to the activity, and has prolonged recovery time that may last hours, days, weeks or longer.'
    },
    questions: {
      activityTolerance: {
        question: 'Do you experience a worsening of symptoms after minimal cognitive, physical, emotional or social activity?',
        description: 'NICE: Activity that could previously be tolerated or is minimal in nature',
        options: [
          'No - I can tolerate normal levels of activity',
          'Rarely - only after significant exertion',
          'Sometimes - after moderate activity',
          'Often - after minimal activity',
          'Always - any activity worsens symptoms'
        ]
      },
      delayedOnset: {
        question: 'When symptoms worsen after activity, is the onset often delayed by hours or days?',
        description: 'NICE: The worsening may not be immediate but delayed',
        options: [
          'No delayed onset - symptoms worsen immediately or not at all',
          'Sometimes delayed by a few hours',
          'Often delayed by several hours (4-12 hours)',
          'Usually delayed by 1-2 days',
          'Consistently delayed by days (sometimes 24-48+ hours)'
        ]
      },
      disproportionate: {
        question: 'When your symptoms worsen, is it disproportionate to the activity performed?',
        description: 'NICE: The response is excessive compared to the activity undertaken',
        options: [
          'No - symptom worsening matches activity level',
          'Slightly disproportionate',
          'Moderately disproportionate',
          'Significantly disproportionate',
          'Severely disproportionate - minimal activity causes major symptom flare'
        ]
      },
      prolongedRecovery: {
        question: 'How long does the prolonged recovery time last after symptom worsening?',
        description: 'NICE: Recovery may last hours, days, weeks or longer',
        options: [
          'No prolonged recovery needed',
          'Hours to recover',
          'Days to recover',
          'Weeks to recover',
          'Weeks to months or may not fully recover'
        ]
      },
      activityTypes: {
        question: 'Which types of activity trigger your post-exertional malaise?',
        description: 'NICE: PEM can follow any type of activity - cognitive, physical, emotional or social',
        options: [
          'No activities trigger PEM',
          'Only intense physical activity',
          'Physical and some cognitive activity',
          'Physical, cognitive, and emotional stress',
          'All types: physical, cognitive, emotional, and social activity'
        ]
      }
    },
    results: {
      complete: 'PEM Assessment Complete',
      description: 'Post-Exertional Malaise evaluation based on DePaul criteria',
      status: 'PEM Status',
      present: 'Post-Exertional Malaise is likely present',
      absent: 'Post-Exertional Malaise is unlikely',
      severityLevels: {
        none: 'None',
        mild: 'Mild PEM',
        moderate: 'Moderate PEM',
        severe: 'Severe PEM'
      },
      clinicalInterpretation: 'Clinical Interpretation',
      recommendations: {
        severe: [
          'NICE NG206: Strict energy management within energy limits',
          'Do not "push through" symptoms - this may worsen condition',
          'Refer to ME/CFS specialist team for personalised care planning',
          'Consider support for activities of daily living',
          'Avoid graded exercise therapy (GET) - contraindicated in ME/CFS'
        ],
        moderate: [
          'NICE NG206: Implement energy management principles',
          'Establish sustainable activity pattern within energy limits',
          'Plan periods of rest and activity',
          'Monitor for flare-ups and adjust activity accordingly',
          'Consider referral to ME/CFS specialist team'
        ],
        mild: [
          'NICE NG206: Begin energy management approach',
          'Learn to recognise early warning signs of PEM',
          'Avoid activities that consistently trigger symptom worsening',
          'Maintain activity within current energy limits',
          'Regular review and adjustment of activity levels'
        ],
        none: [
          'PEM criteria not met according to NICE NG206',
          'Consider other causes of post-activity symptoms',
          'Re-assess if symptom pattern changes',
          'Standard activity guidelines may apply'
        ]
      },
      important: 'NICE NG206: PEM is a core diagnostic criterion for ME/CFS. The NICE guideline emphasizes that people with ME/CFS should not use more energy than they perceive they have and should not "push through" their symptoms. Energy management is the recommended approach.',
      retake: 'Retake Assessment'
    }
  },

  criteria: {
    title: 'NICE NG206 Diagnostic Criteria Engine',
    description: 'Apply NICE NG206 diagnostic criteria for ME/CFS (3-month timeline)',
    mecfs: {
      title: 'ME/CFS Criteria (NICE NG206)',
      description: 'NICE NG206: Diagnose ME/CFS if ALL symptoms present for 3 months and NOT explained by another condition',
      criteria: [
        'Debilitating fatigue worsened by activity, not caused by excessive exertion, not significantly relieved by rest',
        'Post-exertional malaise: worsening often delayed by hours/days, disproportionate to activity, prolonged recovery',
        'Unrefreshing sleep or sleep disturbance (exhausted/flu-like on waking, broken sleep, altered pattern)',
        'Cognitive difficulties (brain fog, problems finding words/numbers, difficulty speaking, memory/concentration issues)',
        'Symptoms have persisted for 3 months',
        'Significant reduction in ability to engage in occupational, educational, social or personal activities from pre-illness levels',
        'Symptoms are NOT explained by another condition (after appropriate investigations)'
      ]
    },
    longCovid: {
      title: 'Long COVID Criteria (WHO/NASEM 2024)',
      description: 'Post-acute sequelae of SARS-CoV-2 infection with persistent multi-system symptoms',
      criteria: [
        'Confirmed or probable SARS-CoV-2 infection',
        'Symptoms persist ≥3 months from acute illness',
        'Multi-system symptoms affecting daily functioning',
        'Symptoms not explained by alternative diagnosis'
      ],
      timing: {
        confirmed: 'Confirmed by test',
        probable: 'Probable based on symptoms/exposure',
        suspected: 'Suspected based on timing'
      }
    },
    pots: {
      title: 'POTS Criteria (ESC 2018/AAS-EFAS 2021)',
      description: 'Heart rate increase ≥30 bpm within 10 minutes of standing, with symptoms but without orthostatic hypotension',
      criteria: [
        'Heart rate increase ≥30 bpm within 10 minutes of standing (≥40 bpm for ages 12-19)',
        'Sustained heart rate ≥120 bpm while standing OR sustained tachycardia',
        'Orthostatic symptoms: dizziness, palpitations, fatigue, brain fog, or syncope',
        'Chronic symptoms present for ≥3 months',
        'Absence of orthostatic hypotension (SBP drop <20 mmHg or DBP drop <10 mmHg)'
      ]
    },
    results: {
      complete: 'Diagnostic Criteria Assessment Complete',
      description: 'Based on CDC, NASEM, ESC, WHO guidelines',
      diagnosesMet: 'Diagnoses Meeting Criteria',
      criteriaMet: 'CRITERIA MET',
      clinicalRecommendations: 'Clinical Recommendations',
      mecfsManagement: [
        'NICE NG206: Refer to ME/CFS specialist team for personalised care and support plan',
        'Implement energy management - do not "push through" symptoms',
        'DO NOT offer graded exercise therapy (GET) - contraindicated',
        'DO NOT offer Lightning Process or therapies based on it',
        'Provide information about ME/CFS and support for families/carers',
        'Consider CBT to support symptom management (not curative)',
        'Symptom management: rest, sleep, pain, orthostatic intolerance as needed',
        'Review at least annually (6-monthly for children)'
      ],
      longCovidManagement: [
        'Multidisciplinary approach to symptom management',
        'Long COVID clinic referral if available',
        'Monitor for improvement over time',
        'Address individual symptoms (fatigue, cognitive, respiratory)'
      ],
      potsManagement: [
        'Proceed to subtype determination for targeted therapy',
        'Non-pharmacological: salt, fluids, compression garments',
        'Consider cardiology or autonomic specialist referral',
        'Gradual exercise reconditioning when appropriate'
      ],
      reassess: 'Reassess Criteria',
      downloadReport: 'Download Report',
      potsSubtype: 'POTS Subtype Analysis'
    }
  },

  subtype: {
    title: 'POTS Subtype & Treatment Advisor',
    description: 'Determine POTS subtype for personalized treatment recommendations',
    patientInfo: {
      title: 'Patient Information',
      description: 'Basic patient details for treatment planning',
      comorbidities: 'Relevant Comorbidities (check all that apply)',
      comorbidityOptions: ['Diabetes', 'Autoimmune Disease', 'EDS', 'MCAS']
    },
    subtypes: {
      hypovolemic: {
        name: 'Hypovolemic POTS',
        description: 'Low blood volume causing orthostatic intolerance',
        criteria: [
          'Low-normal blood pressure (<110/70)',
          'Excessive thirst',
          'Salt craving',
          'Signs of volume depletion',
          'Elevated renin/aldosterone (if available)'
        ],
        treatments: {
          nonPharmacological: [
            'Increase fluid intake to 2.5-3L daily',
            'Increase sodium intake to 8-10g daily',
            'Compression garments (30-40 mmHg)',
            'Gradual exercise reconditioning'
          ],
          firstLine: [
            'Fludrocortisone 0.1-0.2mg daily',
            'Salt tablets if dietary intake insufficient'
          ],
          firstLineMonitoring: [
            'Monitor serum electrolytes (K+, Na+) every 2-4 weeks initially',
            'Weekly blood pressure checks (watch for hypertension >140/90)',
            'Daily weight monitoring for fluid retention',
            'Monitor for edema, dyspnea, or signs of heart failure',
            'Contraindications: Active heart failure, severe hypertension, hypokalemia'
          ],
          secondLine: [
            'Desmopressin (DDAVP) for severe cases',
            'Erythropoietin if anemic'
          ]
        }
      },
      neuropathic: {
        name: 'Neuropathic POTS',
        description: 'Peripheral autonomic neuropathy affecting blood vessel control',
        criteria: [
          'Distal small fiber neuropathy symptoms',
          'GI dysfunction (gastroparesis, constipation)',
          'Anhidrosis or reduced sweating',
          'Pupillary abnormalities',
          'History of diabetes or autoimmune disease'
        ],
        treatments: {
          nonPharmacological: [
            'Compression garments',
            'Leg elevation',
            'Avoid heat exposure',
            'Small frequent meals'
          ],
          firstLine: [
            'Midodrine 2.5-10mg TID',
            'Pyridostigmine 30-60mg TID'
          ],
          firstLineMonitoring: [
            'Monitor supine blood pressure (risk of supine hypertension)',
            'Take last dose 4+ hours before bedtime',
            'Monitor for urinary retention, especially in men',
            'Watch for scalp tingling, goosebumps (dose-related effects)',
            'Contraindications: Severe heart disease, urinary retention, pheochromocytoma'
          ],
          secondLine: [
            'Droxidopa (if available)',
            'Alpha-lipoic acid for neuropathy',
            'IVIG for autoimmune cases'
          ]
        }
      },
      hyperadrenergic: {
        name: 'Hyperadrenergic POTS',
        description: 'Excessive sympathetic nervous system activation',
        criteria: [
          'Hypertension when standing',
          'Anxiety, panic attacks, tremor',
          'Migraine headaches',
          'Cold hands and feet',
          'Elevated standing norepinephrine >600 pg/mL'
        ],
        treatments: {
          nonPharmacological: [
            'Stress reduction techniques',
            'Avoid stimulants (caffeine)',
            'Regular sleep schedule',
            'Gentle exercise'
          ],
          firstLine: [
            'Propranolol 10-20mg BID-QID',
            'Clonidine 0.1-0.2mg BID'
          ],
          firstLineMonitoring: [
            'Monitor heart rate (target: reduce by 10-20 bpm)',
            'Blood pressure monitoring (watch for hypotension)',
            'Screen for asthma/COPD before starting beta-blockers',
            'Monitor for fatigue, depression, or exercise intolerance',
            'Contraindications: Asthma, severe heart failure, heart block'
          ],
          secondLine: [
            'Ivabradine 2.5-7.5mg BID',
            'Methyldopa',
            'Labetalol for hypertension'
          ],
          secondLineMonitoring: [
            'Ivabradine: ECG monitoring, target HR 60-70 bpm',
            'Monitor for visual disturbances (phosphenes) with ivabradine',
            'Avoid ivabradine with strong CYP3A4 inhibitors',
            'Regular cardiac rhythm assessment'
          ]
        }
      },
      autoimmune: {
        name: 'Autoimmune POTS',
        description: 'Autoimmune-mediated autonomic dysfunction',
        criteria: [
          'Personal/family history of autoimmune disease',
          'Rapid onset of symptoms',
          'Viral illness trigger (EBV, COVID, etc.)',
          'Positive autonomic antibodies (if tested)',
          'Other autoimmune markers positive'
        ],
        treatments: {
          nonPharmacological: [
            'Standard POTS measures',
            'Avoid infection triggers',
            'Stress management',
            'Anti-inflammatory diet'
          ],
          firstLine: [
            'Standard POTS medications',
            'Trial of corticosteroids'
          ],
          firstLineMonitoring: [
            'Monitor blood glucose (steroid-induced diabetes risk)',
            'Watch for mood changes, insomnia with steroids',
            'Bone density monitoring with long-term steroid use',
            'Monitor for signs of infection (immunosuppression)',
            'Regular complete blood count and metabolic panel'
          ],
          secondLine: [
            'IVIG therapy',
            'Immunosuppressive agents',
            'Plasmapheresis for severe cases'
          ],
          secondLineMonitoring: [
            'IVIG: Pre-medication for allergic reactions, monitor renal function',
            'Immunosuppressants: Regular CBC, liver function, infection screening',
            'Plasmapheresis: Coagulation monitoring, electrolyte replacement',
            'Monitor for opportunistic infections with immunotherapy'
          ]
        }
      }
    },
    results: {
      complete: 'POTS Subtype Analysis Complete',
      description: 'Personalized treatment recommendations based on subtype assessment',
      primary: 'Primary',
      likelihood: 'likelihood',
      criteriaMetTitle: 'Criteria Met',
      allSubtypeScores: 'All Subtype Scores',
      nonPharmacological: 'Non-Pharmacological',
      firstLineRx: 'First-Line Rx',
      secondLineOptions: 'Second-Line Options',
      mixedSubtype: 'Mixed Subtype Considerations: This patient also shows features of multiple subtypes. Consider combination therapy approaches and monitor response to initial treatment.',
      clinicalPearls: 'Clinical Pearls',
      pearls: [
        'Start with non-pharmacological interventions for all POTS subtypes',
        'Begin medications at low doses and titrate slowly',
        'Monitor response and adjust treatment based on symptom improvement',
        'Consider specialist referral for complex cases or treatment failures',
        'Re-assess subtype if treatment response is poor'
      ],
      reassess: 'Reassess Subtype',
      downloadPlan: 'Download Treatment Plan',
      analysisHeader: 'SUBTYPE ANALYSIS',
      secondaryConsiderations: 'Secondary considerations',
      and: ' and '
    }
  },

  newPatient: {
    title: 'New Patient Assessment',
    description: 'Intelligent guided evaluation for ME/CFS, Long COVID, and POTS',
    demographics: {
      title: 'Patient Information',
      description: 'Basic demographics for clinical documentation',
      step: 'Step 1 of 7: Patient Demographics',
      age: 'Patient Age',
      gender: 'Gender',
      clinicianName: 'Clinician Name',
      patientId: 'Patient ID/MRN',
    startAssessment: 'Start Assessment'
    },
    progress: {
      step1: 'Demographics',
      step2: 'Quick Screen',
      step3: 'Red Flags',
      step4: 'Stand Test',
      step5: 'PEM Quest',
      step6: 'Criteria',
      step7: 'Summary'
    },
    redFlags: {
      title: 'Red Flag Assessment',
      description: 'Check for symptoms requiring urgent evaluation',
      selectSymptoms: 'Select any symptoms present',
      continueAssessment: 'Continue Assessment'
    },
    standTest: {
      title: 'Orthostatic Assessment',
      description: 'Record baseline and standing heart rates',
      measurements: 'Heart Rate Measurements',
      measurementDescription: 'Enter heart rate after 5 minutes lying down and peak heart rate within 10 minutes of standing',
      baselineHR: 'Baseline HR (lying down)',
      peakHR: 'Peak Standing HR',
      hrIncrease: 'HR Increase',
      potsCriteria: 'POTS Criteria (≥30 bpm)',
      continueToPEM: 'Continue to PEM Assessment'
    },
    pemAssessment: {
      title: 'PEM Assessment',
      description: 'Post-Exertional Malaise evaluation',
      finalizeAssessment: 'Finalize Assessment'
    },
    processing: {
      title: 'Processing Diagnostic Criteria...',
      description: 'Analyzing responses against CDC, NASEM, ESC, and WHO guidelines'
    },
    results: {
      title: 'Patient Assessment Complete',
      description: 'Comprehensive clinical evaluation with SOAP documentation',
      primary: 'Primary',
      noDefinitiveDiagnoses: 'No Definitive Diagnoses: Consider alternative diagnoses, subclinical presentations, or ongoing symptom monitoring. Some patients may benefit from symptomatic treatment while monitoring for progression.',
      keyResults: 'Key Assessment Results',
      riskLevel: 'Risk Level',
      screeningScore: 'Screening Score',
      pemPresent: 'PEM Present',
      potsCriteria: 'POTS Criteria',
      redFlags: 'Red Flags',
      priority: 'Priority',
      newAssessment: 'New Assessment',
      downloadSOAP: 'Download SOAP Note'
    }
  },

  conditions: {
    mecfs: {
      name: 'ME/CFS',
      fullName: 'Myalgic Encephalomyelitis/Chronic Fatigue Syndrome',
      icdCode: 'G93.32',
      criteria: [
        'Substantial fatigue not relieved by rest',
        'Post-exertional malaise',
        'Unrefreshing sleep',
        'Cognitive impairment or orthostatic intolerance'
      ]
    },
    longCovid: {
      name: 'Long COVID',
      fullName: 'Post-acute sequelae of SARS-CoV-2',
      icdCode: 'U09.9',
      criteria: [
        'COVID-19 infection history',
        'Symptoms ≥3 months duration',
        'Multi-system involvement',
        'Functional impairment'
      ]
    },
    pots: {
      name: 'POTS',
      fullName: 'Postural Orthostatic Tachycardia Syndrome',
      icdCode: 'I47.1',
      criteria: [
        'HR increase ≥30 bpm on standing (≥40 for age 12-19)',
        'Orthostatic symptoms (dizziness, palpitations, fatigue)',
        'Chronic duration ≥3 months',
        'No orthostatic hypotension (SBP <20mmHg, DBP <10mmHg drop)'
      ]
    }
  },

  navigation: {
    assessmentModules: 'Assessment Modules',
    guidelines: 'Guidelines',
    diagnosticTools: 'Educational Tools',
    clinicalGuidelines: 'Clinical Guidelines & References',
    guidelinesDescription: 'Evidence-based guidelines used in InvisibleDx educational modules',
    assessmentModulesSection: 'Assessment Modules',
    guidelinesSection: 'Guidelines & References',
    moreGuidelines: 'more guidelines',
    smartBadge: 'Smart'
  },

  languages: {
    en: 'English',
    nl: 'Nederlands',
    da: 'Dansk'
  },

  disclaimer: 'EDUCATIONAL TOOL ONLY - This open-source educational tool is designed for healthcare education and learning purposes only. It is NOT a medical device and must NOT be used for patient care, diagnosis, or treatment decisions. Always consult qualified medical professionals for patient care.',

  footer: {
    about: {
      title: 'About InvisibleDx',
      description: 'InvisibleDx is an open-source educational tool for learning about ME/CFS, Long COVID, and POTS criteria. Designed exclusively for healthcare education and research purposes - NOT for patient care or medical use.',
      badges: {
        sensitivity: '94% Sensitivity',
        evidenceBased: 'Evidence-Based',
        openSource: 'Open Source'
      }
    },
    creator: {
      title: 'Creator & License',
      createdBy: 'Created by:',
      name: 'Willem Gielen MD',
      organization: 'Nordjysk Speciallaegeklinik',
      license: 'Open source under MIT License',
      linkedinProfile: 'LinkedIn Profile',
      organizationWebsite: 'Organization Website',
      githubRepository: 'GitHub Repository'
    },
    evidence: {
      title: 'Evidence Base',
      guidelines: [
        {
          title: 'ME/CFS Basics - CDC (2024)',
          url: 'https://www.cdc.gov/me-cfs/about/'
        },
        {
          title: 'NASEM ME/CFS Report (2015)',
          url: 'https://nap.nationalacademies.org/read/19012'
        },
        {
          title: 'D-A-CH ME/CFS Consensus (2024)',
          url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11093804/'
        },
        {
          title: 'WHO Long COVID Definition (2021)',
          url: 'https://www.who.int/publications/i/item/9789240025035'
        },
        {
          title: 'ESC POTS Guidelines (2018)',
          url: 'https://academic.oup.com/europace/article/20/6/921/4824690'
        },
        {
          title: 'AAS/EFAS POTS Consensus (2021)',
          url: 'https://link.springer.com/article/10.1007/s10286-021-00822-5'
        },
        {
          title: 'NASA Lean Stand Test Protocol',
          url: 'https://ntrs.nasa.gov/citations/20150021566'
        }
      ]
    },
    notes: {
      title: 'Important Notes',
      items: [
        'Training tool only - NOT for patient care',
        'Educational simulation - NOT real diagnosis',
        'Open-source software for learning purposes',
        'Must NOT replace medical professional judgment',
        'For healthcare education and research only',
        'Contact medical professionals for patient care'
      ]
    },
    bottom: {
      version: 'InvisibleDx v1.0 - Educational Tool',
      copyright: '© 2025 Willem Gielen MD - MIT License',
      audienceLabel: 'For Healthcare Education Only',
      badge: 'Research & Education Use'
    },
    technical: 'Educational simulation based on peer-reviewed literature. Training data for educational purposes only. This tool is NOT validated for clinical use and must NOT be used for patient care or medical decisions.'
  },

  ppgCamera: {
    title: 'Camera PPG Heart Rate',
    description: 'Place your fingertip gently over the camera lens with flashlight on',
    fingerDetected: 'Finger Detected',
    placeFingerPrompt: 'Place Finger',
    signalQuality: {
      poor: 'poor',
      fair: 'fair',
      good: 'good'
    },
    status: {
      stopped: 'stopped',
      starting: 'starting',
      detecting: 'detecting',
      measuring: 'measuring'
    },
    recordReading: 'Record Reading',
    instructions: {
      flashlight: 'Turn on your device\'s flashlight',
      placement: 'Gently place fingertip over camera lens',
      stillness: 'Stay still and breathe normally',
      wait: 'Wait for stable reading (10+ seconds)'
    },
    errors: {
      cameraAccess: 'Camera access denied',
      noCamera: 'No camera available'
    }
  },

  soapNotes: {
    clinician: 'Clinician',
    patientId: 'Patient ID',
    age: 'Age',
    gender: 'Gender',
    notSpecified: 'Not specified',
    notRecorded: 'Not recorded',
    pemPresent: 'Present',
    notPresent: 'Not present',
    baselineHR: 'Baseline HR',
    peakStandingHR: 'Peak Standing HR',
    hrIncrease: 'HR Increase',
    cannotCalculate: 'Cannot calculate',
    potsCriteriaMet: 'MET (≥30 bpm increase)',
    potsNotMet: 'Not met',
    severity: 'severity'
  }
}