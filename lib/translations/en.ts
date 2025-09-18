import { Translation } from './types'

export const en: Translation = {
  app: {
    title: 'VisibleDx: ME/CFS · Long COVID · POTS',
    subtitle: 'A guided, guideline-based diagnostic engine and decision support tool for clinicians treating patients with fatigue, dizziness, brain-fog, or palpitations.',
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
    age: 'Age',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    question: 'Question',
    of: 'of',
    step: 'Step',
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
    optional: 'Optional'
  },

  dashboard: {
    smartAssessment: {
      title: 'Smart Patient Assessment',
      description: 'Intelligent guided workflow with automated SOAP documentation',
      autoRouting: 'Auto-routing',
      soapNotes: 'SOAP notes',
      icdCodes: 'ICD-10 codes',
      startNew: 'Start New Assessment'
    },
    modules: {
      quickScreen: {
        title: 'Quick-Screen',
        description: '16 yes/no questions - 2 min assessment'
      },
      redFlag: {
        title: 'Red-flag Checker',
        description: 'Lab suggestions to rule out explanatory disease'
      },
      standTest: {
        title: 'Stand-Test Pro',
        description: '10-min NASA Lean protocol with HR monitoring'
      },
      pemQuest: {
        title: 'PEM-Quest',
        description: 'Post-Exertional Malaise assessment'
      },
      criteriaEngine: {
        title: 'Criteria Engine',
        description: 'CDC, IOM, ESC, WHO guidelines with ICD-10 codes'
      },
      subtypeAdvisor: {
        title: 'Subtype & Rx Advisor',
        description: 'Personalized treatment recommendations'
      }
    },
    stats: {
      diagnosticDelay: '4-5 year avg diagnostic delay',
      doctorsConsulted: '≥7 doctors typically consulted',
      sensitivityValidated: '94% sensitivity validated'
    },
    algorithm: {
      title: 'Diagnostic Algorithm',
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
    title: 'Quick-Screen Assessment',
    description: '16 questions · ~2 minutes · 92% sensitivity',
    questions: [
      'Do you experience severe fatigue that is not relieved by rest?',
      'Does physical or mental activity make your symptoms worse (Post-Exertional Malaise)?',
      'Do you have unrefreshing sleep, regardless of duration?',
      'Do you experience cognitive difficulties (brain fog, memory problems)?',
      'Do you have palpitations or rapid heart rate, especially when standing?',
      'Do you experience dizziness or lightheadedness when standing up?',
      'Have you had COVID-19 or suspected COVID-19 infection?',
      'Have your symptoms persisted for 3 months or longer?',
      'Do you experience muscle pain or joint pain without swelling?',
      'Do you have frequent headaches or changes in headache patterns?',
      'Do you experience temperature dysregulation (feeling too hot/cold)?',
      'Do you have gastrointestinal symptoms (nausea, bloating, changes in bowel habits)?',
      'Do you experience shortness of breath or breathing difficulties?',
      'Have you noticed decreased exercise tolerance or physical capacity?',
      'Do you experience sensitivity to light, sound, or touch?',
      'Have you been unable to maintain your previous level of activity?'
    ],
    categories: {
      core: 'Core',
      pem: 'PEM',
      cardiovascular: 'Cardiovascular',
      orthostatic: 'Orthostatic',
      history: 'History',
      duration: 'Duration',
      pain: 'Pain',
      neurological: 'Neurological',
      autonomic: 'Autonomic',
      gi: 'GI',
      respiratory: 'Respiratory',
      functional: 'Functional',
      sensory: 'Sensory'
    },
    results: {
      complete: 'Screening Complete',
      riskAssessment: 'Based on your responses, here\'s your risk assessment',
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
        'Proceed to Red-flag Checker',
        'Complete Stand-Test Pro',
        'Consider PEM-Quest assessment'
      ],
      medium: [
        'Consider Red-flag Checker',
        'Monitor symptoms closely',
        'Follow-up in 4-6 weeks'
      ],
      low: [
        'Routine clinical assessment',
        'Consider other diagnoses',
        'Reassess if symptoms worsen'
      ]
    }
  },

  redFlag: {
    title: 'Red-flag Checker',
    description: 'Identify symptoms requiring urgent evaluation and rule out explanatory diseases',
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
      title: 'Routine Screening Labs',
      description: 'Select categories of tests to rule out common explanatory conditions',
      categories: {
        basicMetabolic: {
          title: 'Basic Metabolic',
          indication: 'Rule out anemia, infection, inflammation, electrolyte abnormalities',
          tests: ['CBC with differential', 'Comprehensive metabolic panel', 'ESR', 'CRP']
        },
        endocrine: {
          title: 'Endocrine',
          indication: 'Rule out thyroid dysfunction, diabetes, adrenal insufficiency',
          tests: ['TSH', 'Free T4', 'HbA1c', 'Cortisol (AM)', 'Vitamin D']
        },
        nutritional: {
          title: 'Nutritional',
          indication: 'Rule out nutritional deficiencies causing fatigue',
          tests: ['Vitamin B12', 'Folate', 'Iron studies', 'Ferritin']
        },
        autoimmune: {
          title: 'Autoimmune',
          indication: 'Screen for autoimmune conditions',
          tests: ['ANA', 'RF', 'Anti-CCP', 'Celiac antibodies']
        },
        cardiac: {
          title: 'Cardiac',
          indication: 'Rule out structural heart disease, heart failure',
          tests: ['ECG', 'Echocardiogram', 'BNP/NT-proBNP']
        },
        infectious: {
          title: 'Infectious',
          indication: 'Rule out chronic infections',
          tests: ['Hepatitis B/C', 'HIV', 'Lyme antibodies', 'CMV/EBV antibodies']
        }
      }
    },
    results: {
      complete: 'Red-flag Assessment Complete',
      urgentEval: 'Urgent Evaluation Required',
      priorityTests: 'Priority Tests (Red Flags)',
      routineTests: 'Routine Screening Tests',
      noRedFlags: 'No Red Flags Identified',
      clinicalSupport: 'Clinical Decision Support',
      urgent: 'Expedite workup due to high-priority red flags. Consider same-day or next-day evaluation. Hold off on ME/CFS/POTS assessment until red flags ruled out.',
      priority: 'Complete recommended tests within 1-2 weeks. Can proceed with stand-test if cardiovascular red flags absent. Re-evaluate based on test results.',
      routine: 'Proceed with routine screening labs. Can continue with ME/CFS/Long COVID/POTS assessment. Consider 4-6 week follow-up for test results.',
      reassess: 'Reassess',
      generateRecommendations: 'Generate Recommendations'
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
    title: 'PEM-Quest Assessment',
    description: 'Post-Exertional Malaise evaluation - 5 validated questions',
    about: {
      title: 'About Post-Exertional Malaise (PEM)',
      description: 'PEM is the worsening of symptoms following physical or mental activity that was previously tolerated. It\'s a key feature of ME/CFS and often occurs in Long COVID. Symptoms may be delayed and can last days to weeks.'
    },
    questions: {
      frequency: {
        question: 'How often do you experience a worsening of symptoms following physical activity?',
        description: 'Consider activities like walking, climbing stairs, or household chores',
        options: [
          'Never',
          'Rarely (less than 25% of the time)',
          'Sometimes (25-50% of the time)',
          'Often (50-75% of the time)',
          'Always or almost always (more than 75% of the time)'
        ]
      },
      mentalFrequency: {
        question: 'How often do you experience a worsening of symptoms following mental activity?',
        description: 'Consider activities like reading, concentrating, or problem-solving',
        options: [
          'Never',
          'Rarely (less than 25% of the time)',
          'Sometimes (25-50% of the time)',
          'Often (50-75% of the time)',
          'Always or almost always (more than 75% of the time)'
        ]
      },
      onsetTime: {
        question: 'How soon after activity do your symptoms typically worsen?',
        options: [
          'No worsening occurs',
          'During the activity',
          'Immediately after (within 30 minutes)',
          'Within a few hours (2-6 hours)',
          'The next day or later'
        ]
      },
      severity: {
        question: 'How severe is the worsening of your symptoms after activity?',
        options: [
          'No worsening',
          'Mild - slightly worse than before activity',
          'Moderate - noticeably worse, but manageable',
          'Severe - significantly worse, difficult to function',
          'Very severe - unable to function, bedridden'
        ]
      },
      recoveryTime: {
        question: 'How long does it typically take for your symptoms to return to baseline after activity?',
        options: [
          'No recovery time needed',
          'A few hours',
          'About one day',
          'Several days (2-6 days)',
          'A week or more'
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
          'Strict activity pacing essential',
          'Consider disability evaluation',
          'Specialist ME/CFS clinic referral'
        ],
        moderate: [
          'Implement careful activity pacing',
          'Monitor for symptom progression',
          'Consider occupational therapy'
        ],
        mild: [
          'Begin gentle activity pacing',
          'Education on PEM recognition',
          'Regular symptom monitoring'
        ],
        none: [
          'PEM not significantly present',
          'Consider other diagnoses',
          'Standard activity as tolerated'
        ]
      },
      important: 'Important: PEM is the hallmark symptom of ME/CFS. If present, avoid activities that consistently trigger symptom worsening. Energy management and pacing are key treatment strategies.',
      retake: 'Retake Assessment'
    }
  },

  criteria: {
    title: 'Criteria Engine',
    description: 'Apply CDC, NASEM, ESC, WHO diagnostic criteria for final determination',
    mecfs: {
      title: 'ME/CFS Criteria (CDC/NASEM 2015)',
      description: 'Requires substantial fatigue, PEM, unrefreshing sleep, AND either cognitive impairment OR orthostatic intolerance',
      criteria: [
        'Substantial reduction or impairment in activity levels that persists for ≥6 months',
        'Post-exertional malaise (PEM) present',
        'Unrefreshing sleep',
        'Cognitive impairment (brain fog)',
        'Orthostatic intolerance OR autonomic dysfunction'
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
        'Heart rate increase ≥30 bpm within 10 minutes of standing',
        'Sustained heart rate ≥120 bpm while standing',
        'Orthostatic symptoms (dizziness, palpitations, fatigue)',
        'Symptoms present for ≥3 months',
        'Absence of orthostatic hypotension'
      ]
    },
    results: {
      complete: 'Diagnostic Criteria Assessment Complete',
      description: 'Based on CDC, NASEM, ESC, WHO guidelines',
      diagnosesMet: 'Diagnoses Meeting Criteria',
      criteriaMet: 'CRITERIA MET',
      clinicalRecommendations: 'Clinical Recommendations',
      mecfsManagement: [
        'Implement activity pacing and energy management',
        'Avoid graded exercise therapy (GET)',
        'Consider symptom-directed treatments',
        'Specialist ME/CFS clinic referral if available'
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
          secondLine: [
            'Ivabradine 2.5-7.5mg BID',
            'Methyldopa',
            'Labetalol for hypertension'
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
          secondLine: [
            'IVIG therapy',
            'Immunosuppressive agents',
            'Plasmapheresis for severe cases'
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
        'HR increase ≥30 bpm on standing',
        'Orthostatic symptoms',
        'Chronic duration ≥3 months',
        'No orthostatic hypotension'
      ]
    }
  },

  navigation: {
    assessmentModules: 'Assessment Modules',
    guidelines: 'Guidelines',
    diagnosticTools: 'Diagnostic Tools',
    clinicalGuidelines: 'Clinical Guidelines & References',
    guidelinesDescription: 'Evidence-based guidelines used in VisibleDx diagnostic algorithms',
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

  disclaimer: 'This tool is for educational purposes only and does not replace professional medical judgment or clinical evaluation',

  footer: {
    about: {
      title: 'About VisibleDx',
      description: 'VisibleDx is an evidence-based diagnostic decision support tool for ME/CFS, Long COVID, and POTS. It implements validated criteria from leading medical organizations to assist clinicians in systematic evaluation.',
      badges: {
        sensitivity: '94% Sensitivity',
        evidenceBased: 'Evidence-Based',
        openSource: 'Open Source'
      }
    },
    evidence: {
      title: 'Evidence Base',
      guidelines: [
        'CDC ME/CFS Case Definition (2015)',
        'NASEM ME/CFS Report (2015)',
        'WHO Long COVID Definition (2021)',
        'ESC POTS Guidelines (2018)',
        'AAS/EFAS POTS Consensus (2021)',
        'NASA Lean Stand Test Protocol'
      ]
    },
    notes: {
      title: 'Important Notes',
      items: [
        'Not a substitute for clinical assessment',
        'Requires confirmation with physical exam',
        'Consider patient history and context',
        'Rule out red flags before diagnosis',
        'Consult specialists for complex cases',
        'Monitor patient response to treatment'
      ]
    },
    bottom: {
      version: 'VisibleDx v1.0 - Educational Tool',
      copyright: '© 2024 VisibleDx',
      audienceLabel: 'For Healthcare Professionals',
      badge: 'Research & Education Use'
    },
    technical: 'Based on peer-reviewed literature and validated diagnostic criteria. Sensitivity data from clinical validation studies. Always consult current guidelines and specialist recommendations for complex cases.'
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