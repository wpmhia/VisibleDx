import { Translation } from './types'

export const nl: Translation = {
  app: {
    title: 'InvisibleDx: ME/CVS · Long COVID · POTS',
    subtitle: 'Een educatief instrument voor het leren van evidence-based criteria voor ME/CVS, Long COVID en POTS. Alleen voor zorgverlening onderwijs en onderzoek.',
    tagline: 'Onzichtbare ziekten zichtbaar maken - met bewijs, empathie en code.',
    backToDashboard: 'Terug naar Dashboard'
  },

  common: {
    yes: 'Ja',
    no: 'Nee',
    next: 'Volgende',
    previous: 'Vorige',
    continue: 'Doorgaan',
    complete: 'Voltooien',
    cancel: 'Annuleren',
    save: 'Opslaan',
    download: 'Downloaden',
    loading: 'Laden',
    processing: 'Verwerken',
    error: 'Fout',
    success: 'Succes',
    retry: 'Opnieuw',
    close: 'Sluiten',
    step: 'Stap',
    of: 'van',
    progress: 'Voortgang',
    completing: 'Afronden',
    saving: 'Opslaan',
    back: 'Terug',
    goBack: 'Ga Terug',
    exit: 'Afsluiten',
    restart: 'Herstart',
    reset: 'Reset',
    confirm: 'Bevestigen',
    areYouSure: 'Weet je het zeker?',
    age: 'Leeftijd',
    gender: 'Geslacht',
    male: 'Man',
    female: 'Vrouw',
    other: 'Anders',
    question: 'Vraag',
    minute: 'minuut',
    minutes: 'minuten',
    bpm: 'spm',
    criteria: 'Criteria',
    met: 'Voldaan',
    notMet: 'Niet Voldaan',
    high: 'Hoog',
    medium: 'Gemiddeld',
    low: 'Laag',
    none: 'Geen',
    mild: 'Mild',
    moderate: 'Matig',
    severe: 'Ernstig',
    confidence: 'Betrouwbaarheid',
    sensitivity: 'Sensitiviteit',
    score: 'Score',
    results: 'Resultaten',
    recommendations: 'Aanbevelingen',
    clinician: 'Clinicus',
    patientId: 'Patiënt ID',
    required: 'Verplicht',
    optional: 'Optioneel',
    category: 'Categorie'
  },

  dashboard: {
    smartAssessment: {
      title: 'Slimme Patiënt Beoordeling',
      description: 'Intelligente begeleide workflow met geautomatiseerde SOEP documentatie',
      autoRouting: 'Auto-routing',
      soapNotes: 'SOEP notities',
      icdCodes: 'ICD-10 codes',
      startNew: 'Nieuwe Beoordeling Starten'
    },
    modules: {
      quickScreen: {
        title: 'Snelle Screening',
        description: '16 ja/nee vragen - 2 min beoordeling'
      },
      redFlag: {
        title: 'Alarmsignaal Checker',
        description: 'Lab suggesties om verklarende ziekten uit te sluiten'
      },
      standTest: {
        title: 'Sta-Test Pro',
        description: '10-min NASA Lean protocol met HR monitoring'
      },
      pemQuest: {
        title: 'PEM-Quest',
        description: 'Post-Exertionele Malaise beoordeling'
      },
      criteriaEngine: {
        title: 'Criteria Engine',
        description: 'CDC, IOM, ESC, WHO richtlijnen met ICD-10 codes'
      },
      subtypeAdvisor: {
        title: 'Subtype & Rx Adviseur',
        description: 'Gepersonaliseerde behandelingsaanbevelingen'
      },
      energyManagement: {
        title: 'Energiebeheer',
        description: 'NICE NG206 energiebeheer planningsgereedschap'
      }
    },
    stats: {
      diagnosticDelay: '4-5 jaar gem. diagnostische vertraging',
      doctorsConsulted: '≥7 artsen typisch geraadpleegd',
      sensitivityValidated: '94% sensitiviteit gevalideerd'
    },
    algorithm: {
      title: 'Diagnostisch Algoritme',
      mecfs: {
        title: 'ME/CVS',
        criteria: 'CDC/NASEM 2015 + IOM criteria',
        description: '3 kern + 1 PEM symptoom cluster'
      },
      longCovid: {
        title: 'Long COVID',
        criteria: 'WHO + NASEM 2024 criteria',
        description: '≥3 maanden post-SARS-CoV-2'
      },
      pots: {
        title: 'POTS',
        criteria: 'ESC 2018 + AAS/EFAS 2021',
        description: 'HR↑≥30 spm binnen 10 min'
      }
    },
    startAssessment: 'Beoordeling Starten'
  },

  quickScreen: {
    title: 'Snelle Screening Beoordeling',
    description: '16 vragen · ~2 minuten · 92% sensitiviteit',
    questions: [
      'Heeft u ernstige vermoeidheid die niet verbetert door rust?',
      'Maken fysieke of mentale activiteiten uw symptomen erger (Post-Exertionele Malaise)?',
      'Heeft u niet-verkwikkende slaap, ongeacht de duur?',
      'Heeft u cognitieve problemen (brain fog, geheugenproblemen)?',
      'Heeft u hartkloppingen of een snelle hartslag, vooral bij het staan?',
      'Heeft u duizeligheid of licht gevoel in het hoofd bij het opstaan?',
      'Heeft u COVID-19 gehad of een vermoedelijke COVID-19 infectie?',
      'Blijven uw symptomen al 3 maanden of langer bestaan?',
      'Heeft u spierpijn of gewrichtspijn zonder zwelling?',
      'Heeft u vaak hoofdpijn of veranderingen in hoofdpijnpatronen?',
      'Heeft u temperatuurregulatieproblemen (te warm/koud voelen)?',
      'Heeft u gastro-intestinale symptomen (misselijkheid, opgeblazen gevoel, veranderingen in darmgewoonten)?',
      'Heeft u kortademigheid of ademhalingsproblemen?',
      'Heeft u een verminderde inspanningstolerantie of fysieke capaciteit opgemerkt?',
      'Heeft u gevoeligheid voor licht, geluid of aanraking?',
      'Bent u niet in staat uw vorige activiteitenniveau te handhaven?'
    ],
    categories: {
      coreFatigue: 'Kern: Invaliderende Vermoeidheid',
      corePEM: 'Kern: Post-Exertionele Malaise',
      coreSleep: 'Kern: Niet-verfrissende Slaap',
      coreCognitive: 'Kern: Cognitieve Problemen',
      additional: 'Aanvullend: Orthostatische Intolerantie',
      autonomic: 'Aanvullend: Temperatuur/Autonoom',
      neuromuscular: 'Aanvullend: Neuromusculair',
      fluLike: 'Aanvullend: Griepachtige Symptomen',
      intolerance: 'Aanvullend: Voedsel/Chemische Intolerantie',
      sensory: 'Aanvullend: Sensorische Overgevoeligheid',
      pain: 'Aanvullend: Pijnsymptomen',
      duration: 'Diagnostisch: Duratiecriteria',
      functional: 'Diagnostisch: Functionele Beperking',
      exclusion: 'Diagnostisch: Exclusiecriteria',
      history: 'Risicofactor: Infectiegeschiedenis',
      severity: 'Beoordeling: Ernstniveau'
    },
    results: {
      complete: 'Screening Voltooid',
      riskAssessment: 'Gebaseerd op uw antwoorden, hier is uw risicobeoordeling',
      lowRisk: 'Laag Risico voor ME/CVS, Long COVID, of POTS',
      mediumRisk: 'Gemiddeld Risico voor ME/CVS, Long COVID, of POTS',
      highRisk: 'Hoog Risico voor ME/CVS, Long COVID, of POTS',
      totalResponses: 'Totaal positieve antwoorden',
      coreSymptoms: 'Kernsymptomen aanwezig',
      pemPresent: 'Post-exertionele malaise',
      covidHistory: 'COVID geschiedenis',
      chronicSymptoms: 'Chronische symptomen (≥3 maanden)',
      nextSteps: 'Volgende Stappen',
      retake: 'Screening Herhalen'
    },
    nextStepsRecommendations: {
      high: [
        'Ga door naar Alarmsignaal Checker',
        'Voltooi Sta-Test Pro',
        'Overweeg PEM-Quest beoordeling'
      ],
      medium: [
        'Overweeg Alarmsignaal Checker',
        'Monitor symptomen nauwlettend',
        'Follow-up in 4-6 weken'
      ],
      low: [
        'Routine klinische beoordeling',
        'Overweeg andere diagnoses',
        'Herbeoordeel als symptomen verergeren'
      ]
    }
  },

  redFlag: {
    title: 'Alarmsignaal Checker',
    description: 'Identificeer symptomen die urgente evaluatie vereisen en sluit verklarende ziekten uit',
    symptoms: {
      title: 'Alarmsignaal Symptomen',
      description: 'Vink alle aanwezige symptomen aan die mogelijk urgente evaluatie vereisen',
      list: [
        'Aanhoudende koorts of nachtzweten',
        'Onbedoeld gewichtsverlies >10% in 6 maanden',
        'Pijn op de borst bij inspanning of in rust',
        'Progressieve kortademigheid',
        'Nieuwe neurologische symptomen (zwakte, gevoelloosheid, toevallen)',
        'Abnormale bloedingen of blauwe plekken',
        'Vergrote lymfeklieren',
        'Geelzucht of geel worden van huid/ogen'
      ]
    },
    urgentCategories: [
      'Infectieus/Inflammatoir',
      'Maligniteit/Metabool', 
      'Cardiovasculair',
      'Cardiopulmonaal',
      'Neurologisch',
      'Hematologisch',
      'Infectieus/Maligniteit',
      'Hepatisch'
    ],
    routineLabs: {
      title: 'NICE NG206 Vereiste Onderzoeken',
      description: 'Verplichte tests om andere diagnoses uit te sluiten wanneer ME/CFS wordt vermoed',
      categories: {
        essential: {
          title: 'Essentiële Tests (NICE NG206)',
          indication: 'Vereiste onderzoeken voor alle patiënten met vermoedelijke ME/CFS',
          tests: ['Urineanalyse voor eiwit, bloed en glucose', 'Volledige bloedtelling', 'Ureum en elektrolyten', 'Leverfunctie', 'Schildklierfunctie (TSH)', 'BSE of plasmaviscositeit', 'C-reactief proteïne', 'Calcium en fosfaat', 'HbA1c', 'Serum ferritine', 'Coeliakie screening', 'Creatinekinase']
        },
        additional: {
          title: 'Aanvullende Tests (Klinisch Oordeel)',
          indication: 'Overweeg gebaseerd op klinische presentatie en geschiedenis',
          tests: ['Vitamine D', 'Vitamine B12 en folaatspiegels', 'Serologische tests bij infectiegeschiedenis', '9 uur cortisol voor bijnierinsufficientie']
        },
        paediatric: {
          title: 'Aanvullende Pediatrische Overwegingen',
          indication: 'Extra overwegingen voor kinderen en jongeren',
          tests: ['Groeiparameters', 'Ontwikkelingsbeoordeling', 'Schoolfrequentie beoordeling', 'Familiegeschiedenis beoordeling']
        }
      }
    },
    results: {
      complete: 'Alarmsignaal Beoordeling Voltooid',
      urgentEval: 'Urgente Evaluatie Vereist',
      priorityTests: 'Prioriteit Tests (Alarmsignalen)',
      routineTests: 'Routine Screening Tests',
      noRedFlags: 'Geen Alarmsignalen Geïdentificeerd',
      clinicalSupport: 'Klinische Beslissingsondersteuning',
      urgent: 'Versnel workup vanwege hoge prioriteit alarmsignalen. Overweeg evaluatie op dezelfde dag of volgende dag. Stel ME/CVS/POTS beoordeling uit tot alarmsignalen zijn uitgesloten.',
      priority: 'Voltooi aanbevolen tests binnen 1-2 weken. Kan doorgaan met sta-test als cardiovasculaire alarmsignalen afwezig zijn. Herbeoordeel op basis van testresultaten.',
      routine: 'Ga door met routine screening labs. Kan doorgaan met ME/CVS/Long COVID/POTS beoordeling. Overweeg 4-6 weken follow-up voor testresultaten.',
      reassess: 'Herbeoordelen',
      generateRecommendations: 'Aanbevelingen Genereren'
    }
  },

  standTest: {
    title: 'Sta-Test Pro',
    description: 'NASA Lean Sta Test Protocol - 10 minuten hartslagmonitoring',
    setup: {
      title: 'Test Setup',
      description: 'Kies uw voorkeursmethode voor hartslagmonitoring',
      manual: {
        title: 'Handmatige Invoer',
        description: 'Gebruik polsoximeter, fitness tracker, of handmatige polstelling',
        recommended: 'Aanbevolen'
      },
      camera: {
        title: 'Camera PPG',
        description: 'Gebruik apparaatcamera voor fotoplethysmografie (experimenteel)',
        beta: 'Beta Functie'
      },
      safety: 'Veiligheidsnoot: Stop de test onmiddellijk als u pijn op de borst, ernstige duizeligheid ervaart of zich flauw voelt. Heb een stoel in de buurt voor de veiligheid.',
      startTest: 'Sta Test Starten'
    },
    phases: {
      baseline: {
        name: 'Baseline Liggend',
        instructions: 'Lig comfortabel neer en blijf stil. Adem normaal en ontspan.'
      },
      standing: {
        name: 'Sta Fase',
        instructions: 'Sta snel op en blijf staan. Leun niet tegen muren en beweeg niet rond.'
      }
    },
    recording: {
      title: 'Hartslag Opnemen',
      description: 'Voer huidige hartslagmeting in (neem elke 1-2 minuten op)',
      baselineHR: 'Baseline HR (liggend)',
      peakHR: 'Piek Staande HR',
      systolicBP: 'Systolische BP (optioneel)',
      diastolicBP: 'Diastolische BP (optioneel)',
      recordReading: 'Meting Opnemen',
      recentReadings: 'Recente Metingen'
    },
    results: {
      title: 'Sta-Test Resultaten',
      description: 'NASA Lean Sta Test Resultaten - 10 minuten protocol',
      baseline: 'Baseline (Liggend)',
      peakStanding: 'Piek Staand',
      sustainedStanding: 'Aanhoudend Staand',
      averageHR: 'Gemiddelde hartslag',
      maxHR: 'Maximale hartslag',
      hrIncrease: 'HR Toename',
      potsCriteria: 'POTS Criteria',
      potsMet: 'POTS Criteria Voldaan',
      potsNotMet: 'POTS Criteria Niet Voldaan',
      interpretation: 'Klinische Interpretatie',
      nextSteps: 'Volgende Stappen',
      repeatTest: 'Test Herhalen'
    },
    interpretations: {
      potsMet: [
        'Hartslagtoename suggereert orthostatische intolerantie consistent met POTS',
        'Ga door naar POTS subtyping voor gerichte behandelingsaanbevelingen',
        'Overweeg aanvullende autonome testing indien klinisch geïndiceerd',
        'Sluit secundaire oorzaken uit (dehydratie, medicijnen, andere aandoeningen)'
      ],
      potsNotMet: [
        'Normale orthostatische hartslagrespons',
        'POTS onwaarschijnlijk op basis van huidige criteria',
        'Overweeg andere oorzaken van symptomen (ME/CVS, Long COVID zonder POTS)',
        'Herhaal testing als symptomen aanhouden of verergeren'
      ]
    },
    controls: {
      pause: 'Pauzeren',
      resume: 'Hervatten',
      stop: 'Test Stoppen'
    }
  },

  pem: {
    title: 'PEM-Quest Beoordeling',
    description: 'Post-Exertionele Malaise evaluatie - 5 gevalideerde vragen',
    about: {
      title: 'Over Post-Exertionele Malaise (PEM)',
      description: 'PEM is de verergering van symptomen na fysieke of mentale activiteit die voorheen werd verdragen. Het is een kernkenmerk van ME/CVS en komt vaak voor bij Long COVID. Symptomen kunnen vertraagd zijn en dagen tot weken duren.'
    },
    questions: {
      activityTolerance: {
        question: 'Ervaart u een verergering van symptomen na minimale cognitieve, fysieke, emotionele of sociale activiteit?',
        description: 'NICE: Activiteit die eerder kon worden verdragen of minimaal van aard is',
        options: [
          'Nee - ik kan normale activiteitsniveaus verdragen',
          'Zelden - alleen na aanzienlijke inspanning',
          'Soms - na matige activiteit',
          'Vaak - na minimale activiteit',
          'Altijd - elke activiteit verergert symptomen'
        ]
      },
      delayedOnset: {
        question: 'Wanneer symptomen verergeren na activiteit, is het begin vaak vertraagd met uren of dagen?',
        description: 'NICE: De verergering kan niet onmiddellijk zijn, maar vertraagd',
        options: [
          'Geen vertraagd begin - symptomen verergeren onmiddellijk of helemaal niet',
          'Soms vertraagd met een paar uur',
          'Vaak vertraagd met meerdere uren (4-12 uur)',
          'Meestal vertraagd met 1-2 dagen',
          'Consequent vertraagd met dagen (soms 24-48+ uur)'
        ]
      },
      disproportionate: {
        question: 'Wanneer uw symptomen verergeren, is dit onevenredig ten opzichte van de uitgevoerde activiteit?',
        description: 'NICE: De reactie is overdreven vergeleken met de ondernomen activiteit',
        options: [
          'Nee - symptoomverergering komt overeen met activiteitsniveau',
          'Enigszins onevenredig',
          'Matig onevenredig',
          'Aanzienlijk onevenredig',
          'Ernstig onevenredig - minimale activiteit veroorzaakt grote symptoomopvlamming'
        ]
      },
      prolongedRecovery: {
        question: 'Hoe lang duurt de verlengde hersteltijd na symptoomverergering?',
        description: 'NICE: Herstel kan uren, dagen, weken of langer duren',
        options: [
          'Geen verlengd herstel nodig',
          'Uren om te herstellen',
          'Dagen om te herstellen',
          'Weken om te herstellen',
          'Weken tot maanden of herstelt mogelijk niet volledig'
        ]
      },
      activityTypes: {
        question: 'Welke soorten activiteit veroorzaken uw post-exertionele malaise?',
        description: 'NICE: PEM kan volgen op elk type activiteit - cognitief, fysiek, emotioneel of sociaal',
        options: [
          'Geen activiteiten veroorzaken PEM',
          'Alleen intense fysieke activiteit',
          'Fysieke en wat cognitieve activiteit',
          'Fysieke, cognitieve en emotionele stress',
          'Alle soorten: fysieke, cognitieve, emotionele en sociale activiteit'
        ]
      }
    },
    results: {
      complete: 'PEM Beoordeling Voltooid',
      description: 'Post-Exertionele Malaise evaluatie gebaseerd op DePaul criteria',
      status: 'PEM Status',
      present: 'Post-Exertionele Malaise is waarschijnlijk aanwezig',
      absent: 'Post-Exertionele Malaise is onwaarschijnlijk',
      severityLevels: {
        none: 'Geen',
        mild: 'Milde PEM',
        moderate: 'Matige PEM',
        severe: 'Ernstige PEM'
      },
      clinicalInterpretation: 'Klinische Interpretatie',
      recommendations: {
        severe: [
          'Strikte activiteitenpacing essentieel',
          'Overweeg invaliditeitsevaluatie',
          'Specialist ME/CVS kliniek verwijzing'
        ],
        moderate: [
          'Implementeer zorgvuldige activiteitenpacing',
          'Monitor voor symptoomprogressie',
          'Overweeg ergotherapie'
        ],
        mild: [
          'Begin voorzichtige activiteitenpacing',
          'Educatie over PEM herkenning',
          'Regelmatige symptoommonitoring'
        ],
        none: [
          'PEM niet significant aanwezig',
          'Overweeg andere diagnoses',
          'Standaard activiteit zoals verdragen'
        ]
      },
      important: 'Belangrijk: PEM is het kenmerkende symptoom van ME/CVS. Indien aanwezig, vermijd activiteiten die consistent symptoomverergering veroorzaken. Energiemanagement en pacing zijn belangrijke behandelingsstrategieën.',
      retake: 'Beoordeling Herhalen'
    }
  },

  criteria: {
    title: 'Criteria Engine',
    description: 'Pas CDC, NASEM, ESC, WHO diagnostische criteria toe voor definitieve bepaling',
    mecfs: {
      title: 'ME/CVS Criteria (CDC/NASEM 2015)',
      description: 'Vereist substantiële vermoeidheid, PEM, niet-verkwikkende slaap, EN cognitieve stoornissen OF orthostatische intolerantie',
      criteria: [
        'Substantiële vermindering of beperking van activiteitenniveaus die ≥6 maanden aanhoudt',
        'Post-exertionele malaise (PEM) aanwezig',
        'Niet-verkwikkende slaap',
        'Cognitieve stoornissen (brain fog)',
        'Orthostatische intolerantie OF autonome disfunctie'
      ]
    },
    longCovid: {
      title: 'Long COVID Criteria (WHO/NASEM 2024)',
      description: 'Post-acute gevolgen van SARS-CoV-2 infectie met persistente multi-systeem symptomen',
      criteria: [
        'Bevestigde of waarschijnlijke SARS-CoV-2 infectie',
        'Symptomen houden ≥3 maanden aan vanaf acute ziekte',
        'Multi-systeem symptomen die dagelijks functioneren beïnvloeden',
        'Symptomen niet verklaard door alternatieve diagnose'
      ],
      timing: {
        confirmed: 'Bevestigd door test',
        probable: 'Waarschijnlijk gebaseerd op symptomen/blootstelling',
        suspected: 'Vermoed gebaseerd op timing'
      }
    },
    pots: {
      title: 'POTS Criteria (ESC 2018/AAS-EFAS 2021)',
      description: 'Hartslagtoename ≥30 spm binnen 10 minuten van staan, met symptomen maar zonder orthostatische hypotensie',
      criteria: [
        'Hartslagtoename ≥30 spm binnen 10 minuten van staan',
        'Aanhoudende hartslag ≥120 spm tijdens staan',
        'Orthostatische symptomen (duizeligheid, hartkloppingen, vermoeidheid)',
        'Symptomen aanwezig voor ≥3 maanden',
        'Afwezigheid van orthostatische hypotensie'
      ]
    },
    results: {
      complete: 'Diagnostische Criteria Beoordeling Voltooid',
      description: 'Gebaseerd op CDC, NASEM, ESC, WHO richtlijnen',
      diagnosesMet: 'Diagnoses Die Voldoen aan Criteria',
      criteriaMet: 'CRITERIA VOLDAAN',
      clinicalRecommendations: 'Klinische Aanbevelingen',
      mecfsManagement: [
        'Implementeer activiteitenpacing en energiemanagement',
        'Vermijd graded exercise therapy (GET)',
        'Overweeg symptoom-gerichte behandelingen',
        'Specialist ME/CVS kliniek verwijzing indien beschikbaar'
      ],
      longCovidManagement: [
        'Multidisciplinaire benadering van symptoommanagement',
        'Long COVID kliniek verwijzing indien beschikbaar',
        'Monitor voor verbetering over tijd',
        'Behandel individuele symptomen (vermoeidheid, cognitief, respiratoir)'
      ],
      potsManagement: [
        'Ga door naar subtype bepaling voor gerichte therapie',
        'Niet-farmacologisch: zout, vloeistoffen, compressiekousen',
        'Overweeg cardiologie of autonome specialist verwijzing',
        'Geleidelijke oefenreconditionering wanneer geschikt'
      ],
      reassess: 'Criteria Herbeoordelen',
      downloadReport: 'Rapport Downloaden',
      potsSubtype: 'POTS Subtype Analyse'
    }
  },

  subtype: {
    title: 'POTS Subtype & Behandeling Adviseur',
    description: 'Bepaal POTS subtype voor gepersonaliseerde behandelingsaanbevelingen',
    patientInfo: {
      title: 'Patiënt Informatie',
      description: 'Basis patiëntgegevens voor behandelingsplanning',
      comorbidities: 'Relevante Comorbiditeiten (vink alle toepasselijke aan)',
      comorbidityOptions: ['Diabetes', 'Auto-immuunziekte', 'EDS', 'MCAS']
    },
    subtypes: {
      hypovolemic: {
        name: 'Hypovolemische POTS',
        description: 'Laag bloedvolume veroorzaakt orthostatische intolerantie',
        criteria: [
          'Laag-normale bloeddruk (<110/70)',
          'Overmatige dorst',
          'Zoutverlangen',
          'Tekenen van volumedepletie',
          'Verhoogd renine/aldosteron (indien beschikbaar)'
        ],
        treatments: {
          nonPharmacological: [
            'Verhoog vloeistofinname tot 2,5-3L dagelijks',
            'Verhoog natriuminname tot 8-10g dagelijks',
            'Compressiekousen (30-40 mmHg)',
            'Geleidelijke oefenreconditionering'
          ],
          firstLine: [
            'Fludrocortison 0,1-0,2mg dagelijks',
            'Zouttabletten als dieetinname onvoldoende'
          ],
          secondLine: [
            'Desmopressine (DDAVP) voor ernstige gevallen',
            'Erythropoëtine bij anemie'
          ]
        }
      },
      neuropathic: {
        name: 'Neuropathische POTS',
        description: 'Perifere autonome neuropathie die bloedvatcontrole beïnvloedt',
        criteria: [
          'Distale kleine vezel neuropathie symptomen',
          'GI disfunctie (gastroparese, constipatie)',
          'Anhidrose of verminderd zweten',
          'Pupilafwijkingen',
          'Geschiedenis van diabetes of auto-immuunziekte'
        ],
        treatments: {
          nonPharmacological: [
            'Compressiekousen',
            'Beenverhoging',
            'Vermijd warmte-blootstelling',
            'Kleine frequente maaltijden'
          ],
          firstLine: [
            'Midodrine 2,5-10mg TID',
            'Pyridostigmine 30-60mg TID'
          ],
          secondLine: [
            'Droxidopa (indien beschikbaar)',
            'Alfa-liponzuur voor neuropathie',
            'IVIG voor auto-immune gevallen'
          ]
        }
      },
      hyperadrenergic: {
        name: 'Hyperadrenerge POTS',
        description: 'Overmatige sympathische zenuwstelsel activatie',
        criteria: [
          'Hypertensie bij staan',
          'Angst, paniekaanvallen, tremor',
          'Migraine hoofdpijn',
          'Koude handen en voeten',
          'Verhoogd staand norepinefrine >600 pg/mL'
        ],
        treatments: {
          nonPharmacological: [
            'Stressreductietechnieken',
            'Vermijd stimulantia (cafeïne)',
            'Regelmatig slaapschema',
            'Zachte oefening'
          ],
          firstLine: [
            'Propranolol 10-20mg BID-QID',
            'Clonidine 0,1-0,2mg BID'
          ],
          secondLine: [
            'Ivabradine 2,5-7,5mg BID',
            'Methyldopa',
            'Labetalol voor hypertensie'
          ]
        }
      },
      autoimmune: {
        name: 'Auto-immune POTS',
        description: 'Auto-immuun-gemedieerde autonome disfunctie',
        criteria: [
          'Persoonlijke/familie geschiedenis van auto-immuunziekte',
          'Snelle aanvang van symptomen',
          'Virale ziekte trigger (EBV, COVID, etc.)',
          'Positieve autonome antilichamen (indien getest)',
          'Andere auto-immune markers positief'
        ],
        treatments: {
          nonPharmacological: [
            'Standaard POTS maatregelen',
            'Vermijd infectie triggers',
            'Stressmanagement',
            'Anti-inflammatoir dieet'
          ],
          firstLine: [
            'Standaard POTS medicatie',
            'Proef van corticosteroïden'
          ],
          secondLine: [
            'IVIG therapie',
            'Immunosuppressieve middelen',
            'Plasmaferese voor ernstige gevallen'
          ]
        }
      }
    },
    results: {
      complete: 'POTS Subtype Analyse Voltooid',
      description: 'Gepersonaliseerde behandelingsaanbevelingen gebaseerd op subtype beoordeling',
      primary: 'Primair',
      likelihood: 'waarschijnlijkheid',
      criteriaMetTitle: 'Criteria Voldaan',
      allSubtypeScores: 'Alle Subtype Scores',
      nonPharmacological: 'Niet-Farmacologisch',
      firstLineRx: 'Eerste Lijn Rx',
      secondLineOptions: 'Tweede Lijn Opties',
      mixedSubtype: 'Gemengde Subtype Overwegingen: Deze patiënt toont ook kenmerken van meerdere subtypes. Overweeg combinatietherapie benaderingen en monitor respons op initiële behandeling.',
      clinicalPearls: 'Klinische Parels',
      pearls: [
        'Begin met niet-farmacologische interventies voor alle POTS subtypes',
        'Begin medicatie in lage doses en titreer langzaam',
        'Monitor respons en pas behandeling aan gebaseerd op symptoomverbetering',
        'Overweeg specialist verwijzing voor complexe gevallen of behandelingsfalen',
        'Herbeoordeel subtype als behandelingsrespons slecht is'
      ],
      reassess: 'Subtype Herbeoordelen',
      downloadPlan: 'Behandelingsplan Downloaden',
      analysisHeader: 'SUBTYPE ANALYSE',
      secondaryConsiderations: 'Secundaire overwegingen',
      and: ' en '
    }
  },

  newPatient: {
    title: 'Nieuwe Patiënt Beoordeling',
    description: 'Intelligente begeleide evaluatie voor ME/CVS, Long COVID, en POTS',
    demographics: {
      title: 'Patiënt Informatie',
      description: 'Basis demografie voor klinische documentatie',
      step: 'Stap 1 van 7: Patiënt Demografie',
      age: 'Patiënt Leeftijd',
      gender: 'Geslacht',
      clinicianName: 'Clinicus Naam',
      patientId: 'Patiënt ID/MRN',
      startAssessment: 'Beoordeling Starten'
    },
    progress: {
      step1: 'Demografie',
      step2: 'Snelle Screening',
      step3: 'Alarmsignalen',
      step4: 'Sta Test',
      step5: 'PEM Quest',
      step6: 'Criteria',
      step7: 'Samenvatting'
    },
    redFlags: {
      title: 'Alarmsignaal Beoordeling',
      description: 'Controleer op symptomen die urgente evaluatie vereisen',
      selectSymptoms: 'Selecteer alle aanwezige symptomen',
      continueAssessment: 'Beoordeling Voortzetten'
    },
    standTest: {
      title: 'Orthostatische Beoordeling',
      description: 'Noteer baseline en staande hartslagen',
      measurements: 'Hartslagmetingen',
      measurementDescription: 'Voer hartslag in na 5 minuten liggen en piek hartslag binnen 10 minuten staan',
      baselineHR: 'Baseline HR (liggend)',
      peakHR: 'Piek Staande HR',
      hrIncrease: 'HR Toename',
      potsCriteria: 'POTS Criteria (≥30 spm)',
      continueToPEM: 'Doorgaan naar PEM Beoordeling'
    },
    pemAssessment: {
      title: 'PEM Beoordeling',
      description: 'Post-Exertionele Malaise evaluatie',
      finalizeAssessment: 'Beoordeling Afronden'
    },
    processing: {
      title: 'Diagnostische Criteria Verwerken...',
      description: 'Analyseren van antwoorden tegen CDC, NASEM, ESC, en WHO richtlijnen'
    },
    results: {
      title: 'Patiënt Beoordeling Voltooid',
      description: 'Uitgebreide klinische evaluatie met SOEP documentatie',
      primary: 'Primair',
      noDefinitiveDiagnoses: 'Geen Definitieve Diagnoses: Overweeg alternatieve diagnoses, subklinische presentaties, of lopende symptoommonitoring. Sommige patiënten kunnen baat hebben bij symptomatische behandeling tijdens monitoring voor progressie.',
      keyResults: 'Belangrijke Beoordeling Resultaten',
      riskLevel: 'Risiconiveau',
      screeningScore: 'Screening Score',
      pemPresent: 'PEM Aanwezig',
      potsCriteria: 'POTS Criteria',
      redFlags: 'Alarmsignalen',
      priority: 'Prioriteit',
      newAssessment: 'Nieuwe Beoordeling',
      downloadSOAP: 'SOEP Notitie Downloaden'
    }
  },

  conditions: {
    mecfs: {
      name: 'ME/CVS',
      fullName: 'Myalgische Encefalomyelitis/Chronisch Vermoeidheidssyndroom',
      icdCode: 'G93.32',
      criteria: [
        'Substantiële vermoeidheid niet verlicht door rust',
        'Post-exertionele malaise',
        'Niet-verkwikkende slaap',
        'Cognitieve stoornissen of orthostatische intolerantie'
      ]
    },
    longCovid: {
      name: 'Long COVID',
      fullName: 'Post-acute gevolgen van SARS-CoV-2',
      icdCode: 'U09.9',
      criteria: [
        'COVID-19 infectie geschiedenis',
        'Symptomen ≥3 maanden duur',
        'Multi-systeem betrokkenheid',
        'Functionele beperking'
      ]
    },
    pots: {
      name: 'POTS',
      fullName: 'Posturaal Orthostatisch Tachycardie Syndroom',
      icdCode: 'I47.1',
      criteria: [
        'HR toename ≥30 spm bij staan',
        'Orthostatische symptomen',
        'Chronische duur ≥3 maanden',
        'Geen orthostatische hypotensie'
      ]
    }
  },

  navigation: {
    assessmentModules: 'Beoordelingsmodules',
    guidelines: 'Richtlijnen',
    diagnosticTools: 'Diagnostische Hulpmiddelen',
    clinicalGuidelines: 'Klinische Richtlijnen & Referenties',
    guidelinesDescription: 'Evidence-based richtlijnen gebruikt in InvisibleDx diagnostische algoritmen',
    assessmentModulesSection: 'Beoordelingsmodules',
    guidelinesSection: 'Richtlijnen & Referenties',
    moreGuidelines: 'meer richtlijnen',
    smartBadge: 'Slim'
  },

  languages: {
    en: 'English',
    nl: 'Nederlands',
    da: 'Dansk'
  },

  disclaimer: 'ALLEEN EDUCATIEF INSTRUMENT - Dit open-source educatief instrument is ontworpen voor zorgverlening onderwijs en leren alleen. Het is GEEN medisch hulpmiddel en mag NIET gebruikt worden voor patiëntenzorg, diagnose of behandelingsbeslissingen. Raadpleeg altijd gekwalificeerde medische professionals voor patiëntenzorg.',

  footer: {
    about: {
      title: 'Over InvisibleDx',
      description: 'InvisibleDx is een open-source educatief instrument voor het leren over ME/CVS, Long COVID en POTS criteria. Exclusief ontworpen voor zorgverlening onderwijs en onderzoek - NIET voor patiëntenzorg of medisch gebruik.',
      badges: {
        sensitivity: '94% Sensitiviteit',
        evidenceBased: 'Evidence-Based',
        openSource: 'Open Source'
      }
    },
    creator: {
      title: 'Maker & Licentie',
      createdBy: 'Gemaakt door',
      name: 'Willem Gielen MD',
      organization: 'Nordjysk Speciallaegeklinik',
      license: 'Open source onder MIT Licentie',
      linkedinProfile: 'LinkedIn Profiel',
      organizationWebsite: 'Organisatie Website',
      githubRepository: 'GitHub Repository'
    },
    evidence: {
      title: 'Wetenschappelijke Basis',
      guidelines: [
        {
          title: 'ME/CVS Basis - CDC (2024)',
          url: 'https://www.cdc.gov/me-cfs/about/'
        },
        {
          title: 'NASEM ME/CVS Rapport (2015)',
          url: 'https://nap.nationalacademies.org/read/19012'
        },
        {
          title: 'D-A-CH ME/CVS Consensus (2024)',
          url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11093804/'
        },
        {
          title: 'WHO Long COVID Definitie (2021)',
          url: 'https://www.who.int/publications/i/item/9789240025035'
        },
        {
          title: 'ESC POTS Richtlijnen (2018)',
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
      title: 'Belangrijke Opmerkingen',
      items: [
        'Geen vervanging voor klinische beoordeling',
        'Vereist bevestiging met lichamelijk onderzoek',
        'Houd rekening met patiëntgeschiedenis en context',
        'Sluit rode vlaggen uit voor diagnose',
        'Raadpleeg specialisten bij complexe gevallen',
        'Monitor patiëntrespons op behandeling'
      ]
    },
    bottom: {
      version: 'InvisibleDx v1.0 - Educatief Instrument',
      copyright: '© 2025 Willem Gielen MD - MIT Licentie',
      audienceLabel: 'Voor Zorgverleners',
      badge: 'Onderzoek & Onderwijs'
    },
    technical: 'Gebaseerd op peer-reviewed literatuur en gevalideerde diagnostische criteria. Sensitiviteitsgegevens uit klinische validatiestudies. Raadpleeg altijd actuele richtlijnen en specialistenadvies bij complexe gevallen.'
  },

  ppgCamera: {
    title: 'Camera PPG Hartslag',
    description: 'Plaats je vingertop voorzichtig over de cameralens met flitslicht aan',
    fingerDetected: 'Vinger Gedetecteerd',
    placeFingerPrompt: 'Plaats Vinger',
    signalQuality: {
      poor: 'slecht',
      fair: 'redelijk',
      good: 'goed'
    },
    status: {
      stopped: 'gestopt',
      starting: 'starten',
      detecting: 'detecteren',
      measuring: 'meten'
    },
    recordReading: 'Meting Opslaan',
    instructions: {
      flashlight: 'Zet de flitslicht van je apparaat aan',
      placement: 'Plaats vingertop voorzichtig over cameralens',
      stillness: 'Blijf stil en adem normaal',
      wait: 'Wacht op stabiele meting (10+ seconden)'
    },
    errors: {
      cameraAccess: 'Camera toegang geweigerd',
      noCamera: 'Geen camera beschikbaar'
    }
  },

  soapNotes: {
    clinician: 'Clinicus',
    patientId: 'Patiënt ID',
    age: 'Leeftijd',
    gender: 'Geslacht',
    notSpecified: 'Niet gespecificeerd',
    notRecorded: 'Niet opgenomen',
    pemPresent: 'Aanwezig',
    notPresent: 'Niet aanwezig',
    baselineHR: 'Baseline HS',
    peakStandingHR: 'Piek Staande HS',
    hrIncrease: 'HS Toename',
    cannotCalculate: 'Kan niet berekenen',
    potsCriteriaMet: 'VOLDAAN (≥30 spm toename)',
    potsNotMet: 'Niet voldaan',
    severity: 'ernst'
  }
}