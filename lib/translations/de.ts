import { Translation } from './types'

export const de: Translation = {
  app: {
    title: 'AutoDx: ME/CFS · Long COVID · POTS',
    subtitle: 'Ein geführtes, leitlinienbasiertes Diagnosewerkzeug und Entscheidungsunterstützungstool für Kliniker, die Patienten mit Müdigkeit, Schwindel, Gehirnnebel oder Herzklopfen behandeln.',
    tagline: 'Unsichtbare Krankheiten sichtbar machen - mit Evidenz, Empathie und Code.',
    backToDashboard: 'Zurück zum Dashboard'
  },

  common: {
    yes: 'Ja',
    no: 'Nein',
    next: 'Weiter',
    previous: 'Zurück',
    continue: 'Fortfahren',
    complete: 'Abschließen',
    cancel: 'Abbrechen',
    save: 'Speichern',
    download: 'Herunterladen',
    loading: 'Laden',
    processing: 'Verarbeitung',
    error: 'Fehler',
    success: 'Erfolg',
    retry: 'Wiederholen',
    close: 'Schließen',
    age: 'Alter',
    gender: 'Geschlecht',
    male: 'Männlich',
    female: 'Weiblich',
    other: 'Andere',
    question: 'Frage',
    of: 'von',
    step: 'Schritt',
    minute: 'Minute',
    minutes: 'Minuten',
    bpm: 'Schläge/Min',
    criteria: 'Kriterien',
    met: 'Erfüllt',
    notMet: 'Nicht Erfüllt',
    high: 'Hoch',
    medium: 'Mittel',
    low: 'Niedrig',
    none: 'Keine',
    mild: 'Mild',
    moderate: 'Mäßig',
    severe: 'Schwer',
    confidence: 'Vertrauen',
    sensitivity: 'Sensitivität',
    score: 'Bewertung',
    results: 'Ergebnisse',
    recommendations: 'Empfehlungen',
    clinician: 'Kliniker',
    patientId: 'Patienten-ID',
    required: 'Erforderlich',
    optional: 'Optional'
  },

  dashboard: {
    smartAssessment: {
      title: 'Intelligente Patientenbewertung',
      description: 'Intelligenter geführter Workflow mit automatisierter SOAP-Dokumentation',
      autoRouting: 'Auto-Routing',
      soapNotes: 'SOAP-Notizen',
      icdCodes: 'ICD-10-Codes',
      startNew: 'Neue Bewertung Starten'
    },
    modules: {
      quickScreen: {
        title: 'Schnell-Screening',
        description: '16 Ja/Nein-Fragen - 2 Min Bewertung'
      },
      redFlag: {
        title: 'Warnzeichen-Prüfer',
        description: 'Labor-Vorschläge zum Ausschluss erklärender Krankheiten'
      },
      standTest: {
        title: 'Steh-Test Pro',
        description: '10-Min NASA Lean Protokoll mit HR-Überwachung'
      },
      pemQuest: {
        title: 'PEM-Quest',
        description: 'Post-Exertionale Malaise Bewertung'
      },
      criteriaEngine: {
        title: 'Kriterien-Engine',
        description: 'CDC, IOM, ESC, WHO Leitlinien mit ICD-10-Codes'
      },
      subtypeAdvisor: {
        title: 'Subtyp & Rx Berater',
        description: 'Personalisierte Behandlungsempfehlungen'
      }
    },
    stats: {
      diagnosticDelay: '4-5 Jahre durchschn. diagnostische Verzögerung',
      doctorsConsulted: '≥7 Ärzte typischerweise konsultiert',
      sensitivityValidated: '94% Sensitivität validiert'
    },
    algorithm: {
      title: 'Diagnostischer Algorithmus',
      mecfs: {
        title: 'ME/CFS',
        criteria: 'CDC/NASEM 2015 + IOM Kriterien',
        description: '3 Kern + 1 PEM Symptomcluster'
      },
      longCovid: {
        title: 'Long COVID',
        criteria: 'WHO + NASEM 2024 Kriterien',
        description: '≥3 Monate post-SARS-CoV-2'
      },
      pots: {
        title: 'POTS',
        criteria: 'ESC 2018 + AAS/EFAS 2021',
        description: 'HR↑≥30 Schläge/Min innerhalb 10 Min'
      }
    },
    startAssessment: 'Bewertung Starten'
  },

  quickScreen: {
    title: 'Schnell-Screening Bewertung',
    description: '16 Fragen · ~2 Minuten · 92% Sensitivität',
    questions: [
      'Leiden Sie unter schwerer Müdigkeit, die durch Ruhe nicht gelindert wird?',
      'Verschlechtern körperliche oder geistige Aktivitäten Ihre Symptome (Post-Exertionale Malaise)?',
      'Haben Sie nicht erholsamen Schlaf, unabhängig von der Dauer?',
      'Haben Sie kognitive Schwierigkeiten (Gehirnnebel, Gedächtnisprobleme)?',
      'Haben Sie Herzklopfen oder schnellen Herzschlag, besonders beim Stehen?',
      'Haben Sie Schwindel oder Benommenheit beim Aufstehen?',
      'Hatten Sie COVID-19 oder eine vermutete COVID-19-Infektion?',
      'Bestehen Ihre Symptome seit 3 Monaten oder länger?',
      'Haben Sie Muskelschmerzen oder Gelenkschmerzen ohne Schwellung?',
      'Haben Sie häufige Kopfschmerzen oder Veränderungen der Kopfschmerzmuster?',
      'Haben Sie Temperaturregulationsprobleme (sich zu warm/kalt fühlen)?',
      'Haben Sie gastrointestinale Symptome (Übelkeit, Blähungen, Veränderungen der Stuhlgewohnheiten)?',
      'Haben Sie Atemnot oder Atemprobleme?',
      'Haben Sie eine verminderte Belastungstoleranz oder körperliche Kapazität bemerkt?',
      'Haben Sie Empfindlichkeit gegenüber Licht, Geräuschen oder Berührung?',
      'Waren Sie nicht in der Lage, Ihr vorheriges Aktivitätsniveau aufrechtzuerhalten?'
    ],
    categories: {
      core: 'Kern',
      pem: 'PEM',
      cardiovascular: 'Kardiovaskulär',
      orthostatic: 'Orthostatisch',
      history: 'Anamnese',
      duration: 'Dauer',
      pain: 'Schmerz',
      neurological: 'Neurologisch',
      autonomic: 'Autonom',
      gi: 'GI',
      respiratory: 'Respiratorisch',
      functional: 'Funktional',
      sensory: 'Sensorisch'
    },
    results: {
      complete: 'Screening Abgeschlossen',
      riskAssessment: 'Basierend auf Ihren Antworten ist hier Ihre Risikobewertung',
      lowRisk: 'Niedriges Risiko für ME/CFS, Long COVID oder POTS',
      mediumRisk: 'Mittleres Risiko für ME/CFS, Long COVID oder POTS',
      highRisk: 'Hohes Risiko für ME/CFS, Long COVID oder POTS',
      totalResponses: 'Gesamt positive Antworten',
      coreSymptoms: 'Kernsymptome vorhanden',
      pemPresent: 'Post-exertionale Malaise',
      covidHistory: 'COVID-Anamnese',
      chronicSymptoms: 'Chronische Symptome (≥3 Monate)',
      nextSteps: 'Nächste Schritte',
      retake: 'Screening Wiederholen'
    },
    nextStepsRecommendations: {
      high: [
        'Weiter zum Warnzeichen-Prüfer',
        'Steh-Test Pro abschließen',
        'PEM-Quest Bewertung erwägen'
      ],
      medium: [
        'Warnzeichen-Prüfer erwägen',
        'Symptome genau überwachen',
        'Nachuntersuchung in 4-6 Wochen'
      ],
      low: [
        'Routine klinische Bewertung',
        'Andere Diagnosen erwägen',
        'Neubewertung bei Verschlechterung der Symptome'
      ]
    }
  },

  // Continue with abbreviated German translations for other sections...
  redFlag: {
    title: 'Warnzeichen-Prüfer',
    description: 'Symptome identifizieren, die dringende Bewertung erfordern und erklärende Krankheiten ausschließen',
    symptoms: {
      title: 'Warnzeichen Symptome',
      description: 'Markieren Sie alle vorhandenen Symptome, die möglicherweise dringende Bewertung erfordern',
      list: [
        'Anhaltende Fieber oder Nachtschweiß',
        'Unbeabsichtigter Gewichtsverlust >10% in 6 Monaten',
        'Brustschmerzen bei Anstrengung oder in Ruhe',
        'Progressive Atemnot',
        'Neue neurologische Symptome (Schwäche, Taubheit, Anfälle)',
        'Abnorme Blutungen oder Blutergüsse',
        'Vergrößerte Lymphknoten',
        'Gelbsucht oder Gelbfärbung von Haut/Augen'
      ]
    },
    routineLabs: {
      title: 'Routine-Screening Labore',
      description: 'Wählen Sie Testkategorien aus, um häufige erklärende Erkrankungen auszuschließen',
      categories: {
        basicMetabolic: {
          title: 'Grundstoffwechsel',
          indication: 'Anämie, Infektion, Entzündung, Elektrolytstörungen ausschließen',
          tests: ['Vollblutbild mit Differentialblutbild', 'Umfassendes Stoffwechselpanel', 'BSG', 'CRP']
        },
        endocrine: {
          title: 'Endokrin',
          indication: 'Schilddrüsenfunktionsstörung, Diabetes, Nebenniereninsuffizienz ausschließen',
          tests: ['TSH', 'Freies T4', 'HbA1c', 'Cortisol (morgens)', 'Vitamin D']
        },
        nutritional: {
          title: 'Ernährungsbedingt',
          indication: 'Nährstoffmängel ausschließen, die Müdigkeit verursachen',
          tests: ['Vitamin B12', 'Folsäure', 'Eisenstudien', 'Ferritin']
        },
        autoimmune: {
          title: 'Autoimmun',
          indication: 'Auf Autoimmunerkrankungen screenen',
          tests: ['ANA', 'RF', 'Anti-CCP', 'Zöliakie-Antikörper']
        },
        cardiac: {
          title: 'Herz',
          indication: 'Strukturelle Herzerkrankung, Herzinsuffizienz ausschließen',
          tests: ['EKG', 'Echokardiogramm', 'BNP/NT-proBNP']
        },
        infectious: {
          title: 'Infektiös',
          indication: 'Chronische Infektionen ausschließen',
          tests: ['Hepatitis B/C', 'HIV', 'Lyme-Antikörper', 'CMV/EBV-Antikörper']
        }
      }
    },
    results: {
      complete: 'Warnzeichen-Bewertung Abgeschlossen',
      urgentEval: 'Dringende Bewertung Erforderlich',
      priorityTests: 'Prioritätstests (Warnzeichen)',
      routineTests: 'Routine-Screening Tests',
      noRedFlags: 'Keine Warnzeichen Identifiziert',
      clinicalSupport: 'Klinische Entscheidungsunterstützung',
      urgent: 'Untersuchung beschleunigen aufgrund hochprioritärer Warnzeichen. Bewertung am gleichen Tag oder nächsten Tag erwägen. ME/CFS/POTS-Bewertung zurückstellen bis Warnzeichen ausgeschlossen.',
      priority: 'Empfohlene Tests innerhalb 1-2 Wochen abschließen. Kann mit Steh-Test fortfahren, wenn kardiovaskuläre Warnzeichen fehlen. Neubewertung basierend auf Testergebnissen.',
      routine: 'Mit Routine-Screening-Laboren fortfahren. Kann mit ME/CFS/Long COVID/POTS-Bewertung fortfahren. 4-6 Wochen Nachuntersuchung für Testergebnisse erwägen.',
      reassess: 'Neubewerten',
      generateRecommendations: 'Empfehlungen Generieren'
    }
  },

  // Continue with other sections using similar German medical terminology...
  standTest: {
    title: 'Steh-Test Pro',
    description: 'NASA Lean Steh-Test Protokoll - 10 Minuten Herzfrequenz-Überwachung',
    // ... continue with German translations
    setup: {
      title: 'Test-Setup',
      description: 'Wählen Sie Ihre bevorzugte Methode für die Herzfrequenz-Überwachung',
      manual: {
        title: 'Manuelle Eingabe',
        description: 'Verwenden Sie Pulsoximeter, Fitness-Tracker oder manuelle Pulszählung',
        recommended: 'Empfohlen'
      },
      camera: {
        title: 'Kamera PPG',
        description: 'Gerätekamera für Photoplethysmographie verwenden (experimentell)',
        beta: 'Beta-Funktion'
      },
      safety: 'Sicherheitshinweis: Stoppen Sie den Test sofort, wenn Sie Brustschmerzen, starken Schwindel verspüren oder sich schwach fühlen. Haben Sie einen Stuhl in der Nähe für die Sicherheit.',
      startTest: 'Steh-Test Starten'
    },
    phases: {
      baseline: {
        name: 'Baseline Liegend',
        instructions: 'Legen Sie sich bequem hin und bleiben Sie ruhig. Atmen Sie normal und entspannen Sie sich.'
      },
      standing: {
        name: 'Stehphase',
        instructions: 'Stehen Sie schnell auf und bleiben Sie stehen. Lehnen Sie sich nicht an Wände und bewegen Sie sich nicht umher.'
      }
    },
    recording: {
      title: 'Herzfrequenz Aufzeichnen',
      description: 'Aktuelle Herzfrequenz-Messung eingeben (alle 1-2 Minuten aufzeichnen)',
      baselineHR: 'Baseline HR (liegend)',
      peakHR: 'Spitzen-Steh-HR',
      systolicBP: 'Systolischer BD (optional)',
      diastolicBP: 'Diastolischer BD (optional)',
      recordReading: 'Messung Aufzeichnen',
      recentReadings: 'Aktuelle Messungen'
    },
    results: {
      title: 'Steh-Test Ergebnisse',
      description: 'NASA Lean Steh-Test Ergebnisse - 10-Minuten-Protokoll',
      baseline: 'Baseline (Liegend)',
      peakStanding: 'Spitze Stehend',
      sustainedStanding: 'Anhaltendes Stehen',
      averageHR: 'Durchschnittliche Herzfrequenz',
      maxHR: 'Maximale Herzfrequenz',
      hrIncrease: 'HR-Anstieg',
      potsCriteria: 'POTS-Kriterien',
      potsMet: 'POTS-Kriterien Erfüllt',
      potsNotMet: 'POTS-Kriterien Nicht Erfüllt',
      interpretation: 'Klinische Interpretation',
      nextSteps: 'Nächste Schritte',
      repeatTest: 'Test Wiederholen'
    },
    interpretations: {
      potsMet: [
        'Herzfrequenz-Anstieg deutet auf orthostatische Intoleranz hin, die mit POTS übereinstimmt',
        'Weiter zur POTS-Subtypisierung für gezielte Behandlungsempfehlungen',
        'Zusätzliche autonome Tests erwägen, falls klinisch indiziert',
        'Sekundäre Ursachen ausschließen (Dehydrierung, Medikamente, andere Erkrankungen)'
      ],
      potsNotMet: [
        'Normale orthostatische Herzfrequenz-Antwort',
        'POTS unwahrscheinlich basierend auf aktuellen Kriterien',
        'Andere Ursachen der Symptome erwägen (ME/CFS, Long COVID ohne POTS)',
        'Tests wiederholen, wenn Symptome anhalten oder sich verschlechtern'
      ]
    },
    controls: {
      pause: 'Pause',
      resume: 'Fortsetzen',
      stop: 'Test Stoppen'
    }
  },

  // Continue with abbreviated versions for other sections...
  pem: {
    title: 'PEM-Quest Bewertung',
    description: 'Post-Exertionale Malaise Bewertung - 5 validierte Fragen',
    about: {
      title: 'Über Post-Exertionale Malaise (PEM)',
      description: 'PEM ist die Verschlechterung von Symptomen nach körperlicher oder geistiger Aktivität, die zuvor toleriert wurde. Es ist ein Schlüsselmerkmal von ME/CFS und tritt oft bei Long COVID auf. Symptome können verzögert auftreten und Tage bis Wochen andauern.'
    },
    questions: {
      frequency: {
        question: 'Wie oft erleben Sie eine Verschlechterung der Symptome nach körperlicher Aktivität?',
        description: 'Berücksichtigen Sie Aktivitäten wie Gehen, Treppensteigen oder Hausarbeit',
        options: [
          'Nie',
          'Selten (weniger als 25% der Zeit)',
          'Manchmal (25-50% der Zeit)',
          'Oft (50-75% der Zeit)',
          'Immer oder fast immer (mehr als 75% der Zeit)'
        ]
      },
      mentalFrequency: {
        question: 'Wie oft erleben Sie eine Verschlechterung der Symptome nach geistiger Aktivität?',
        description: 'Berücksichtigen Sie Aktivitäten wie Lesen, Konzentrieren oder Problemlösung',
        options: [
          'Nie',
          'Selten (weniger als 25% der Zeit)',
          'Manchmal (25-50% der Zeit)',
          'Oft (50-75% der Zeit)',
          'Immer oder fast immer (mehr als 75% der Zeit)'
        ]
      },
      onsetTime: {
        question: 'Wie schnell nach der Aktivität verschlechtern sich Ihre Symptome typischerweise?',
        options: [
          'Keine Verschlechterung tritt auf',
          'Während der Aktivität',
          'Sofort danach (innerhalb 30 Minuten)',
          'Innerhalb weniger Stunden (2-6 Stunden)',
          'Am nächsten Tag oder später'
        ]
      },
      severity: {
        question: 'Wie schwer ist die Verschlechterung Ihrer Symptome nach Aktivität?',
        options: [
          'Keine Verschlechterung',
          'Mild - etwas schlechter als vor der Aktivität',
          'Mäßig - merklich schlechter, aber beherrschbar',
          'Schwer - erheblich schlechter, schwer zu funktionieren',
          'Sehr schwer - unfähig zu funktionieren, bettlägerig'
        ]
      },
      recoveryTime: {
        question: 'Wie lange dauert es typischerweise, bis Ihre Symptome nach Aktivität zur Baseline zurückkehren?',
        options: [
          'Keine Erholungszeit nötig',
          'Ein paar Stunden',
          'Etwa einen Tag',
          'Mehrere Tage (2-6 Tage)',
          'Eine Woche oder mehr'
        ]
      }
    },
    results: {
      complete: 'PEM-Bewertung Abgeschlossen',
      description: 'Post-Exertionale Malaise Bewertung basierend auf DePaul-Kriterien',
      status: 'PEM-Status',
      present: 'Post-Exertionale Malaise ist wahrscheinlich vorhanden',
      absent: 'Post-Exertionale Malaise ist unwahrscheinlich',
      severityLevels: {
        none: 'Keine',
        mild: 'Milde PEM',
        moderate: 'Mäßige PEM',
        severe: 'Schwere PEM'
      },
      clinicalInterpretation: 'Klinische Interpretation',
      recommendations: {
        severe: [
          'Strenge Aktivitäts-Pacing unerlässlich',
          'Erwägen Sie Behinderungsbewertung',
          'Spezialist ME/CFS-Klinik Überweisung'
        ],
        moderate: [
          'Sorgfältiges Aktivitäts-Pacing implementieren',
          'Überwachen auf Symptomprogression',
          'Ergotherapie erwägen'
        ],
        mild: [
          'Sanftes Aktivitäts-Pacing beginnen',
          'Bildung über PEM-Erkennung',
          'Regelmäßige Symptomüberwachung'
        ],
        none: [
          'PEM nicht signifikant vorhanden',
          'Andere Diagnosen erwägen',
          'Standardaktivität wie toleriert'
        ]
      },
      important: 'Wichtig: PEM ist das Kennzeichen-Symptom von ME/CFS. Falls vorhanden, vermeiden Sie Aktivitäten, die konsequent Symptomverschlechterung auslösen. Energiemanagement und Pacing sind wichtige Behandlungsstrategien.',
      retake: 'Bewertung Wiederholen'
    }
  },

  // Continue with other sections...
  criteria: {
    title: 'Kriterien-Engine',
    description: 'CDC, NASEM, ESC, WHO diagnostische Kriterien für endgültige Bestimmung anwenden',
    mecfs: {
      title: 'ME/CFS-Kriterien (CDC/NASEM 2015)',
      description: 'Erfordert erhebliche Müdigkeit, PEM, nicht erholsamen Schlaf UND entweder kognitive Beeinträchtigung ODER orthostatische Intoleranz',
      criteria: [
        'Erhebliche Reduktion oder Beeinträchtigung der Aktivitätsniveaus, die ≥6 Monate anhält',
        'Post-exertionale Malaise (PEM) vorhanden',
        'Nicht erholsamer Schlaf',
        'Kognitive Beeinträchtigung (Gehirnnebel)',
        'Orthostatische Intoleranz ODER autonome Dysfunktion'
      ]
    },
    longCovid: {
      title: 'Long COVID-Kriterien (WHO/NASEM 2024)',
      description: 'Post-akute Folgen der SARS-CoV-2-Infektion mit anhaltenden Multi-System-Symptomen',
      criteria: [
        'Bestätigte oder wahrscheinliche SARS-CoV-2-Infektion',
        'Symptome halten ≥3 Monate nach akuter Erkrankung an',
        'Multi-System-Symptome, die die tägliche Funktionsfähigkeit beeinträchtigen',
        'Symptome nicht durch alternative Diagnose erklärt'
      ],
      timing: {
        confirmed: 'Durch Test bestätigt',
        probable: 'Wahrscheinlich basierend auf Symptomen/Exposition',
        suspected: 'Vermutet basierend auf Timing'
      }
    },
    pots: {
      title: 'POTS-Kriterien (ESC 2018/AAS-EFAS 2021)',
      description: 'Herzfrequenz-Anstieg ≥30 Schläge/Min innerhalb 10 Minuten des Stehens, mit Symptomen aber ohne orthostatische Hypotonie',
      criteria: [
        'Herzfrequenz-Anstieg ≥30 Schläge/Min innerhalb 10 Minuten des Stehens',
        'Anhaltende Herzfrequenz ≥120 Schläge/Min beim Stehen',
        'Orthostatische Symptome (Schwindel, Herzklopfen, Müdigkeit)',
        'Symptome vorhanden für ≥3 Monate',
        'Abwesenheit von orthostatischer Hypotonie'
      ]
    },
    results: {
      complete: 'Diagnostische Kriterien Bewertung Abgeschlossen',
      description: 'Basierend auf CDC, NASEM, ESC, WHO-Leitlinien',
      diagnosesMet: 'Diagnosen, die Kriterien Erfüllen',
      criteriaMet: 'KRITERIEN ERFÜLLT',
      clinicalRecommendations: 'Klinische Empfehlungen',
      mecfsManagement: [
        'Aktivitäts-Pacing und Energiemanagement implementieren',
        'Graded Exercise Therapy (GET) vermeiden',
        'Symptom-gerichtete Behandlungen erwägen',
        'Spezialist ME/CFS-Klinik Überweisung falls verfügbar'
      ],
      longCovidManagement: [
        'Multidisziplinärer Ansatz zum Symptommanagement',
        'Long COVID-Klinik Überweisung falls verfügbar',
        'Überwachen auf Verbesserung über Zeit',
        'Individuelle Symptome behandeln (Müdigkeit, kognitiv, respiratorisch)'
      ],
      potsManagement: [
        'Weiter zur Subtyp-Bestimmung für gezielte Therapie',
        'Nicht-pharmakologisch: Salz, Flüssigkeiten, Kompressionsstrümpfe',
        'Kardiologie oder autonome Spezialist-Überweisung erwägen',
        'Graduelle Übungs-Rekonditionierung wenn angemessen'
      ],
      reassess: 'Kriterien Neubewerten',
      downloadReport: 'Bericht Herunterladen',
      potsSubtype: 'POTS-Subtyp Analyse'
    }
  },

  // Continue with other sections...
  subtype: {
    title: 'POTS-Subtyp & Behandlungsberater',
    description: 'POTS-Subtyp für personalisierte Behandlungsempfehlungen bestimmen',
    patientInfo: {
      title: 'Patienteninformation',
      description: 'Grundlegende Patientendaten für Behandlungsplanung',
      comorbidities: 'Relevante Komorbiditäten (alle zutreffenden ankreuzen)'
    },
    subtypes: {
      hypovolemic: {
        name: 'Hypovolämisches POTS',
        description: 'Niedriges Blutvolumen verursacht orthostatische Intoleranz',
        criteria: [
          'Niedrig-normaler Blutdruck (<110/70)',
          'Übermäßiger Durst',
          'Salzhunger',
          'Zeichen von Volumendepletion',
          'Erhöhtes Renin/Aldosteron (falls verfügbar)'
        ],
        treatments: {
          nonPharmacological: [
            'Flüssigkeitsaufnahme auf 2,5-3L täglich erhöhen',
            'Natriumaufnahme auf 8-10g täglich erhöhen',
            'Kompressionsstrümpfe (30-40 mmHg)',
            'Graduelle Übungs-Rekonditionierung'
          ],
          firstLine: [
            'Fludrocortison 0,1-0,2mg täglich',
            'Salztabletten bei unzureichender Nahrungsaufnahme'
          ],
          secondLine: [
            'Desmopressin (DDAVP) für schwere Fälle',
            'Erythropoietin bei Anämie'
          ]
        }
      },
      neuropathic: {
        name: 'Neuropathisches POTS',
        description: 'Periphere autonome Neuropathie beeinflusst Blutgefäßkontrolle',
        criteria: [
          'Distale kleine Faser Neuropathie Symptome',
          'GI-Dysfunktion (Gastroparese, Verstopfung)',
          'Anhidrose oder reduziertes Schwitzen',
          'Pupillen-Anomalien',
          'Anamnese von Diabetes oder Autoimmunerkrankung'
        ],
        treatments: {
          nonPharmacological: [
            'Kompressionsstrümpfe',
            'Beinerhöhung',
            'Hitzeexposition vermeiden',
            'Kleine häufige Mahlzeiten'
          ],
          firstLine: [
            'Midodrin 2,5-10mg TID',
            'Pyridostigmin 30-60mg TID'
          ],
          secondLine: [
            'Droxidopa (falls verfügbar)',
            'Alpha-Liponsäure für Neuropathie',
            'IVIG für Autoimmunfälle'
          ]
        }
      },
      hyperadrenergic: {
        name: 'Hyperadrenerges POTS',
        description: 'Übermäßige sympathische Nervensystem-Aktivierung',
        criteria: [
          'Hypertonie beim Stehen',
          'Angst, Panikattacken, Tremor',
          'Migräne-Kopfschmerzen',
          'Kalte Hände und Füße',
          'Erhöhtes stehendes Norepinephrin >600 pg/mL'
        ],
        treatments: {
          nonPharmacological: [
            'Stressreduktionstechniken',
            'Stimulanzien vermeiden (Koffein)',
            'Regelmäßiger Schlafplan',
            'Sanfte Übung'
          ],
          firstLine: [
            'Propranolol 10-40mg BID',
            'Clonidin 0,1-0,2mg BID'
          ],
          secondLine: [
            'Ivabradin 2,5-7,5mg BID',
            'Methyldopa',
            'Labetalol für Hypertonie'
          ]
        }
      },
      autoimmune: {
        name: 'Autoimmunes POTS',
        description: 'Autoimmun-vermittelte autonome Dysfunktion',
        criteria: [
          'Persönliche/Familienanamnese von Autoimmunerkrankung',
          'Rascher Symptombeginn',
          'Virale Erkrankung Auslöser (EBV, COVID, etc.)',
          'Positive autonome Antikörper (falls getestet)',
          'Andere Autoimmun-Marker positiv'
        ],
        treatments: {
          nonPharmacological: [
            'Standard-POTS-Maßnahmen',
            'Infektionsauslöser vermeiden',
            'Stressmanagement',
            'Entzündungshemmende Diät'
          ],
          firstLine: [
            'Standard-POTS-Medikation',
            'Versuch mit Kortikosteroiden'
          ],
          secondLine: [
            'IVIG-Therapie',
            'Immunsuppressive Mittel',
            'Plasmapherese für schwere Fälle'
          ]
        }
      }
    },
    results: {
      complete: 'POTS-Subtyp Analyse Abgeschlossen',
      description: 'Personalisierte Behandlungsempfehlungen basierend auf Subtyp-Bewertung',
      primary: 'Primär',
      likelihood: 'Wahrscheinlichkeit',
      criteriaMetTitle: 'Kriterien Erfüllt',
      allSubtypeScores: 'Alle Subtyp-Bewertungen',
      nonPharmacological: 'Nicht-Pharmakologisch',
      firstLineRx: 'Erste-Linie Rx',
      secondLineOptions: 'Zweite-Linie Optionen',
      mixedSubtype: 'Gemischte Subtyp-Überlegungen: Dieser Patient zeigt auch Merkmale mehrerer Subtypen. Kombinationstherapie-Ansätze erwägen und Antwort auf anfängliche Behandlung überwachen.',
      clinicalPearls: 'Klinische Perlen',
      pearls: [
        'Mit nicht-pharmakologischen Interventionen für alle POTS-Subtypen beginnen',
        'Medikation in niedrigen Dosen beginnen und langsam titrieren',
        'Antwort überwachen und Behandlung basierend auf Symptomverbesserung anpassen',
        'Spezialist-Überweisung für komplexe Fälle oder Behandlungsversagen erwägen',
        'Subtyp neu bewerten, wenn Behandlungsantwort schlecht ist'
      ],
      reassess: 'Subtyp Neubewerten',
      downloadPlan: 'Behandlungsplan Herunterladen'
    }
  },

  newPatient: {
    title: 'Neue Patientenbewertung',
    description: 'Intelligente geführte Bewertung für ME/CFS, Long COVID und POTS',
    demographics: {
      title: 'Patienteninformation',
      description: 'Grundlegende Demografie für klinische Dokumentation',
      step: 'Schritt 1 von 7: Patientendemografie',
      age: 'Patientenalter',
      gender: 'Geschlecht',
      clinicianName: 'Klinikername',
      patientId: 'Patienten-ID/MRN',
      startAssessment: 'Bewertung Starten'
    },
    progress: {
      step1: 'Demografie',
      step2: 'Schnell-Screening',
      step3: 'Warnzeichen',
      step4: 'Steh-Test',
      step5: 'PEM Quest',
      step6: 'Kriterien',
      step7: 'Zusammenfassung'
    },
    redFlags: {
      title: 'Warnzeichen-Bewertung',
      description: 'Auf Symptome prüfen, die dringende Bewertung erfordern',
      selectSymptoms: 'Alle vorhandenen Symptome auswählen',
      continueAssessment: 'Bewertung Fortsetzen'
    },
    standTest: {
      title: 'Orthostatische Bewertung',
      description: 'Baseline und stehende Herzfrequenzen aufzeichnen',
      measurements: 'Herzfrequenz-Messungen',
      measurementDescription: 'Herzfrequenz nach 5 Minuten Liegen und Spitzen-Herzfrequenz innerhalb 10 Minuten des Stehens eingeben',
      baselineHR: 'Baseline HR (liegend)',
      peakHR: 'Spitzen-Steh-HR',
      hrIncrease: 'HR-Anstieg',
      potsCriteria: 'POTS-Kriterien (≥30 Schläge/Min)',
      continueToPEM: 'Weiter zur PEM-Bewertung'
    },
    pemAssessment: {
      title: 'PEM-Bewertung',
      description: 'Post-Exertionale Malaise Bewertung',
      finalizeAssessment: 'Bewertung Abschließen'
    },
    processing: {
      title: 'Diagnostische Kriterien Verarbeiten...',
      description: 'Antworten gegen CDC, NASEM, ESC und WHO-Leitlinien analysieren'
    },
    results: {
      title: 'Patientenbewertung Abgeschlossen',
      description: 'Umfassende klinische Bewertung mit SOAP-Dokumentation',
      primary: 'Primär',
      noDefinitiveDiagnoses: 'Keine Definitiven Diagnosen: Alternative Diagnosen, subklinische Präsentationen oder laufende Symptomüberwachung erwägen. Einige Patienten können von symptomatischer Behandlung während der Überwachung auf Progression profitieren.',
      keyResults: 'Wichtige Bewertungsergebnisse',
      riskLevel: 'Risikostufe',
      screeningScore: 'Screening-Bewertung',
      pemPresent: 'PEM Vorhanden',
      potsCriteria: 'POTS-Kriterien',
      redFlags: 'Warnzeichen',
      priority: 'Priorität',
      newAssessment: 'Neue Bewertung',
      downloadSOAP: 'SOAP-Notiz Herunterladen'
    }
  },

  conditions: {
    mecfs: {
      name: 'ME/CFS',
      fullName: 'Myalgische Enzephalomyelitis/Chronisches Müdigkeitssyndrom',
      icdCode: 'G93.32',
      criteria: [
        'Erhebliche Müdigkeit nicht durch Ruhe gelindert',
        'Post-exertionale Malaise',
        'Nicht erholsamer Schlaf',
        'Kognitive Beeinträchtigung oder orthostatische Intoleranz'
      ]
    },
    longCovid: {
      name: 'Long COVID',
      fullName: 'Post-akute Folgen von SARS-CoV-2',
      icdCode: 'U09.9',
      criteria: [
        'COVID-19-Infektionsanamnese',
        'Symptome ≥3 Monate Dauer',
        'Multi-System-Beteiligung',
        'Funktionale Beeinträchtigung'
      ]
    },
    pots: {
      name: 'POTS',
      fullName: 'Posturales Orthostatisches Tachykardie-Syndrom',
      icdCode: 'I47.1',
      criteria: [
        'HR-Anstieg ≥30 Schläge/Min beim Stehen',
        'Orthostatische Symptome',
        'Chronische Dauer ≥3 Monate',
        'Keine orthostatische Hypotonie'
      ]
    }
  },

  languages: {
    en: 'English',
    nl: 'Nederlands',
    da: 'Dansk',
    de: 'Deutsch',
    sv: 'Svenska',
    no: 'Norsk',
    fr: 'Français'
  },

  disclaimer: 'Dieses Screening-Tool dient nur der klinischen Entscheidungsunterstützung und ersetzt nicht die professionelle medizinische Beurteilung'
}