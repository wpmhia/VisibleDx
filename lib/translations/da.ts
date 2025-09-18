import { Translation } from './types'

export const da: Translation = {
  app: {
    title: 'VisibleDx: ME/CFS · Long COVID · POTS',
    subtitle: 'Et uddannelsesmæssigt træningsværktøj til at lære evidensbaserede kriterier for ME/CFS, Long COVID og POTS. Kun til sundhedsuddannelse og træning.',
    tagline: 'Gør usynlige sygdomme synlige - med evidens, empati og kode.',
    backToDashboard: 'Tilbage til Dashboard'
  },

  common: {
    yes: 'Ja',
    no: 'Nej',
    next: 'Næste',
    previous: 'Forrige',
    continue: 'Fortsæt',
    complete: 'Afslut',
    cancel: 'Annuller',
    save: 'Gem',
    download: 'Download',
    loading: 'Indlæser',
    processing: 'Behandler',
    error: 'Fejl',
    success: 'Succes',
    retry: 'Prøv igen',
    close: 'Luk',
    step: 'Trin',
    of: 'af',
    progress: 'Fremgang',
    completing: 'Færdiggør',
    saving: 'Gemmer',
    back: 'Tilbage',
    goBack: 'Gå Tilbage',
    exit: 'Afslut',
    restart: 'Genstart',
    reset: 'Nulstil',
    confirm: 'Bekræft',
    areYouSure: 'Er du sikker?',
    age: 'Alder',
    gender: 'Køn',
    male: 'Mand',
    female: 'Kvinde',
    other: 'Anden',
    question: 'Spørgsmål',
    minute: 'minut',
    minutes: 'minutter',
    bpm: 'slag/min',
    criteria: 'Kriterier',
    met: 'Opfyldt',
    notMet: 'Ikke Opfyldt',
    high: 'Høj',
    medium: 'Mellem',
    low: 'Lav',
    none: 'Ingen',
    mild: 'Mild',
    moderate: 'Moderat',
    severe: 'Alvorlig',
    confidence: 'Tillid',
    sensitivity: 'Sensitivitet',
    score: 'Score',
    results: 'Resultater',
    recommendations: 'Anbefalinger',
    clinician: 'Kliniker',
    patientId: 'Patient ID',
    required: 'Påkrævet',
    optional: 'Valgfri'
  },

  dashboard: {
    smartAssessment: {
      title: 'Smart Patient Vurdering',
      description: 'Intelligent guidet arbejdsgang med automatiseret SOAP dokumentation',
      autoRouting: 'Auto-routing',
      soapNotes: 'SOAP noter',
      icdCodes: 'ICD-10 koder',
      startNew: 'Start Ny Vurdering'
    },
    modules: {
      quickScreen: {
        title: 'Hurtig Screening',
        description: '16 ja/nej spørgsmål - 2 min vurdering'
      },
      redFlag: {
        title: 'Rødt Flag Checker',
        description: 'Lab forslag til at udelukke forklarende sygdomme'
      },
      standTest: {
        title: 'Stand-Test Pro',
        description: '10-min NASA Lean protokol med HR overvågning'
      },
      pemQuest: {
        title: 'PEM-Quest',
        description: 'Post-Exertionel Utilpashed vurdering'
      },
      criteriaEngine: {
        title: 'Kriterier Motor',
        description: 'CDC, IOM, ESC, WHO retningslinjer med ICD-10 koder'
      },
      subtypeAdvisor: {
        title: 'Subtype & Rx Rådgiver',
        description: 'Personaliserede behandlingsanbefalinger'
      }
    },
    stats: {
      diagnosticDelay: '4-5 år gns. diagnostisk forsinkelse',
      doctorsConsulted: '≥7 læger typisk konsulteret',
      sensitivityValidated: '94% sensitivitet valideret'
    },
    algorithm: {
      title: 'Diagnostisk Algoritme',
      mecfs: {
        title: 'ME/CFS',
        criteria: 'CDC/NASEM 2015 + IOM kriterier',
        description: '3 kerne + 1 PEM symptomklynge'
      },
      longCovid: {
        title: 'Lang COVID',
        criteria: 'WHO + NASEM 2024 kriterier',
        description: '≥3 måneder post-SARS-CoV-2'
      },
      pots: {
        title: 'POTS',
        criteria: 'ESC 2018 + AAS/EFAS 2021',
        description: 'HR↑≥30 slag/min inden for 10 min'
      }
    },
    startAssessment: 'Start Vurdering'
  },

  // For brevity, I'll include key translations for other sections...
  // The pattern continues for all other sections following Danish translations

  quickScreen: {
    title: 'Hurtig Screening Vurdering',
    description: '16 spørgsmål · ~2 minutter · 92% sensitivitet',
    questions: [
      'Oplever du alvorlig træthed, der ikke lindres af hvile?',
      'Gør fysisk eller mental aktivitet dine symptomer værre (Post-Exertionel Utilpashed)?',
      'Har du ikke-forfriskende søvn, uanset varighed?',
      'Oplever du kognitive problemer (hjernetåge, hukommelsesproblemer)?',
      'Har du hjertebanken eller hurtig puls, især når du står?',
      'Oplever du svimmelhed eller ørhed når du rejser dig?',
      'Har du haft COVID-19 eller mistænkt COVID-19 infektion?',
      'Har dine symptomer bestået i 3 måneder eller længere?',
      'Oplever du muskelsmerter eller ledsmerter uden hævelse?',
      'Har du ofte hovedpine eller ændringer i hovedpinemønstre?',
      'Oplever du temperaturreguleringsproblemer (føler dig for varm/kold)?',
      'Har du gastrointestinale symptomer (kvalme, oppustethed, ændringer i afføringsmønstre)?',
      'Oplever du åndenød eller vejrtrækningsproblemer?',
      'Har du bemærket nedsat træningstoleranse eller fysisk kapacitet?',
      'Oplever du følsomhed over for lys, lyd eller berøring?',
      'Har du været ude af stand til at opretholde dit tidligere aktivitetsniveau?'
    ],
    categories: {
      core: 'Kerne',
      pem: 'PEM',
      cardiovascular: 'Kardiovaskulær',
      orthostatic: 'Ortostatisk',
      history: 'Historie',
      duration: 'Varighed',
      pain: 'Smerte',
      neurological: 'Neurologisk',
      autonomic: 'Autonom',
      gi: 'GI',
      respiratory: 'Respiratorisk',
      functional: 'Funktionel',
      sensory: 'Sensorisk'
    },
    results: {
      complete: 'Screening Afsluttet',
      riskAssessment: 'Baseret på dine svar, her er din risikovurdering',
      lowRisk: 'Lav Risiko for ME/CFS, Lang COVID eller POTS',
      mediumRisk: 'Mellem Risiko for ME/CFS, Lang COVID eller POTS',
      highRisk: 'Høj Risiko for ME/CFS, Lang COVID eller POTS',
      totalResponses: 'Samlet positive svar',
      coreSymptoms: 'Kernesymptomer til stede',
      pemPresent: 'Post-exertionel utilpashed',
      covidHistory: 'COVID historie',
      chronicSymptoms: 'Kroniske symptomer (≥3 måneder)',
      nextSteps: 'Næste Trin',
      retake: 'Gentag Screening'
    },
    nextStepsRecommendations: {
      high: [
        'Fortsæt til Rødt Flag Checker',
        'Fuldfør Stand-Test Pro',
        'Overvej PEM-Quest vurdering'
      ],
      medium: [
        'Overvej Rødt Flag Checker',
        'Overvåg symptomer nøje',
        'Opfølgning om 4-6 uger'
      ],
      low: [
        'Rutinemæssig klinisk vurdering',
        'Overvej andre diagnoser',
        'Revurder hvis symptomer forværres'
      ]
    }
  },

  redFlag: {
    title: 'Rødt Flag Checker',
    description: 'Identificer symptomer, der kræver akut evaluering og udeluk forklarende sygdomme',
    symptoms: {
      title: 'Rødt Flag Symptomer',
      description: 'Markér alle tilstedeværende symptomer, der kan kræve akut evaluering',
      list: [
        'Vedvarende feber eller natlig svedtendens',
        'Utilsigtet vægttab >10% på 6 måneder',
        'Brystsmerter ved anstrengelse eller i hvile',
        'Progressiv åndenød',
        'Nye neurologiske symptomer (svaghed, følelsesløshed, kramper)',
        'Abnorm blødning eller blå mærker',
        'Forstørrede lymfeknuder',
        'Gulsot eller gulning af hud/øjne'
      ]
    },
    urgentCategories: [
      'Infektiøs/Inflammatorisk',
      'Malignitet/Metabolisk', 
      'Kardiovaskulær',
      'Kardiopulmonær',
      'Neurologisk',
      'Hæmatologisk',
      'Infektiøs/Malignitet',
      'Hepatisk'
    ],
    routineLabs: {
      title: 'Rutine Screening Laboratorier',
      description: 'Vælg kategorier af tests for at udelukke almindelige forklarende tilstande',
      categories: {
        basicMetabolic: {
          title: 'Basis Metabolisk',
          indication: 'Udeluk anæmi, infektion, inflammation, elektrolytforstyrrelser',
          tests: ['Komplet blodtælling med differentiering', 'Omfattende metabolisk panel', 'BSR', 'CRP']
        },
        endocrine: {
          title: 'Endokrin',
          indication: 'Udeluk skjoldbruskkirteldysfunktion, diabetes, binyrebarkinsufficiens',
          tests: ['TSH', 'Fri T4', 'HbA1c', 'Cortisol (morgen)', 'Vitamin D']
        },
        nutritional: {
          title: 'Ernæringsmæssig',
          indication: 'Udeluk ernæringsmangel, der forårsager træthed',
          tests: ['Vitamin B12', 'Folat', 'Jernundersøgelser', 'Ferritin']
        },
        autoimmune: {
          title: 'Autoimmun',
          indication: 'Screen for autoimmune tilstande',
          tests: ['ANA', 'RF', 'Anti-CCP', 'Cøliaki antistoffer']
        },
        cardiac: {
          title: 'Hjerte',
          indication: 'Udeluk strukturel hjertesygdom, hjertesvigt',
          tests: ['EKG', 'Ekkokardiogram', 'BNP/NT-proBNP']
        },
        infectious: {
          title: 'Infektiøs',
          indication: 'Udeluk kroniske infektioner',
          tests: ['Hepatitis B/C', 'HIV', 'Lyme antistoffer', 'CMV/EBV antistoffer']
        }
      }
    },
    results: {
      complete: 'Rødt Flag Vurdering Afsluttet',
      urgentEval: 'Akut Evaluering Påkrævet',
      priorityTests: 'Prioritetstest (Røde Flag)',
      routineTests: 'Rutine Screening Tests',
      noRedFlags: 'Ingen Røde Flag Identificeret',
      clinicalSupport: 'Klinisk Beslutningsstøtte',
      urgent: 'Fremskynde workup på grund af høj prioritet røde flag. Overvej samme dag eller næste dag evaluering. Udsæt ME/CFS/POTS vurdering indtil røde flag er udelukket.',
      priority: 'Fuldfør anbefalede tests inden for 1-2 uger. Kan fortsætte med stand-test hvis kardiovaskulære røde flag er fraværende. Revurder baseret på testresultater.',
      routine: 'Fortsæt med rutine screening laboratorier. Kan fortsætte med ME/CFS/Lang COVID/POTS vurdering. Overvej 4-6 ugers opfølgning for testresultater.',
      reassess: 'Revurder',
      generateRecommendations: 'Generer Anbefalinger'
    }
  },

  // Continue with other sections following the same pattern...
  standTest: {
    title: 'Stand-Test Pro',
    description: 'NASA Lean Stand Test Protokol - 10 minutters hjertefrekvens overvågning',
    setup: {
      title: 'Test Opsætning',
      description: 'Vælg din foretrukne metode til hjertefrekvens overvågning',
      manual: {
        title: 'Manuel Indtastning',
        description: 'Brug pulsoximeter, fitness tracker eller manuel pulstælling',
        recommended: 'Anbefalet'
      },
      camera: {
        title: 'Kamera PPG',
        description: 'Brug enhedskamera til fotoplethysmografi (eksperimentel)',
        beta: 'Beta Funktion'
      },
      safety: 'Sikkerhedsnote: Stop testen øjeblikkeligt hvis du oplever brystsmerter, alvorlig svimmelhed eller føler dig svag. Hav en stol i nærheden for sikkerhed.',
      startTest: 'Start Stand Test'
    },
    phases: {
      baseline: {
        name: 'Baseline Liggende',
        instructions: 'Lig behageligt ned og forbliv stille. Ånd normalt og slap af.'
      },
      standing: {
        name: 'Stående Fase',
        instructions: 'Rejs dig hurtigt og forbliv stående. Læn dig ikke mod vægge og bevæg dig ikke rundt.'
      }
    },
    recording: {
      title: 'Optag Hjertefrekvens',
      description: 'Indtast nuværende hjertefrekvens aflæsning (optag hver 1-2 minutter)',
      baselineHR: 'Baseline HR (liggende)',
      peakHR: 'Peak Stående HR',
      systolicBP: 'Systolisk BP (valgfri)',
      diastolicBP: 'Diastolisk BP (valgfri)',
      recordReading: 'Optag Aflæsning',
      recentReadings: 'Seneste Aflæsninger'
    },
    results: {
      title: 'Stand-Test Resultater',
      description: 'NASA Lean Stand Test Resultater - 10 minutters protokol',
      baseline: 'Baseline (Liggende)',
      peakStanding: 'Peak Stående',
      sustainedStanding: 'Vedvarende Stående',
      averageHR: 'Gennemsnitlig hjertefrekvens',
      maxHR: 'Maksimal hjertefrekvens',
      hrIncrease: 'HR Stigning',
      potsCriteria: 'POTS Kriterier',
      potsMet: 'POTS Kriterier Opfyldt',
      potsNotMet: 'POTS Kriterier Ikke Opfyldt',
      interpretation: 'Klinisk Fortolkning',
      nextSteps: 'Næste Trin',
      repeatTest: 'Gentag Test'
    },
    interpretations: {
      potsMet: [
        'Hjertefrekvens stigning tyder på ortostatisk intolerance i overensstemmelse med POTS',
        'Fortsæt til POTS subtyping for målrettede behandlingsanbefalinger',
        'Overvej yderligere autonom testning hvis klinisk indiceret',
        'Udeluk sekundære årsager (dehydrering, medicin, andre tilstande)'
      ],
      potsNotMet: [
        'Normal ortostatisk hjertefrekvens respons',
        'POTS usandsynlig baseret på nuværende kriterier',
        'Overvej andre årsager til symptomer (ME/CFS, Lang COVID uden POTS)',
        'Gentag testning hvis symptomer fortsætter eller forværres'
      ]
    },
    controls: {
      pause: 'Pause',
      resume: 'Genoptag',
      stop: 'Stop Test'
    }
  },

  // Continue with abbreviated versions for remaining sections...
  pem: {
    title: 'PEM-Quest Vurdering',
    description: 'Post-Exertionel Utilpashed evaluering - 5 validerede spørgsmål',
    about: {
      title: 'Om Post-Exertionel Utilpashed (PEM)',
      description: 'PEM er forværring af symptomer efter fysisk eller mental aktivitet, der tidligere blev tolereret. Det er et nøgletræk ved ME/CFS og forekommer ofte ved Lang COVID. Symptomer kan være forsinkede og kan vare dage til uger.'
    },
    // ... continue with other pem translations
    questions: {
      frequency: {
        question: 'Hvor ofte oplever du en forværring af symptomer efter fysisk aktivitet?',
        description: 'Overvej aktiviteter som gang, trappegang eller husarbejde',
        options: [
          'Aldrig',
          'Sjældent (mindre end 25% af tiden)',
          'Nogle gange (25-50% af tiden)',
          'Ofte (50-75% af tiden)',
          'Altid eller næsten altid (mere end 75% af tiden)'
        ]
      },
      // Continue with other questions...
      mentalFrequency: {
        question: 'Hvor ofte oplever du en forværring af symptomer efter mental aktivitet?',
        description: 'Overvej aktiviteter som læsning, koncentration eller problemløsning',
        options: [
          'Aldrig',
          'Sjældent (mindre end 25% af tiden)',
          'Nogle gange (25-50% af tiden)',
          'Ofte (50-75% af tiden)',
          'Altid eller næsten altid (mere end 75% af tiden)'
        ]
      },
      onsetTime: {
        question: 'Hvor hurtigt efter aktivitet forværres dine symptomer typisk?',
        options: [
          'Ingen forværring opstår',
          'Under aktiviteten',
          'Umiddelbart efter (inden for 30 minutter)',
          'Inden for få timer (2-6 timer)',
          'Næste dag eller senere'
        ]
      },
      severity: {
        question: 'Hvor alvorlig er forværringen af dine symptomer efter aktivitet?',
        options: [
          'Ingen forværring',
          'Mild - lidt værre end før aktivitet',
          'Moderat - mærkbart værre, men håndterbar',
          'Alvorlig - betydeligt værre, svært at fungere',
          'Meget alvorlig - ude af stand til at fungere, sengeliggende'
        ]
      },
      recoveryTime: {
        question: 'Hvor længe tager det typisk for dine symptomer at vende tilbage til baseline efter aktivitet?',
        options: [
          'Ingen restitutionstid nødvendig',
          'Få timer',
          'Omkring en dag',
          'Flere dage (2-6 dage)',
          'En uge eller mere'
        ]
      }
    },
    results: {
      complete: 'PEM Vurdering Afsluttet',
      description: 'Post-Exertionel Utilpashed evaluering baseret på DePaul kriterier',
      status: 'PEM Status',
      present: 'Post-Exertionel Utilpashed er sandsynligvis til stede',
      absent: 'Post-Exertionel Utilpashed er usandsynlig',
      severityLevels: {
        none: 'Ingen',
        mild: 'Mild PEM',
        moderate: 'Moderat PEM',
        severe: 'Alvorlig PEM'
      },
      clinicalInterpretation: 'Klinisk Fortolkning',
      recommendations: {
        severe: [
          'Strikt aktivitetspacing essentiel',
          'Overvej invaliditetsevaluering',
          'Specialist ME/CFS klinik henvisning'
        ],
        moderate: [
          'Implementer omhyggelig aktivitetspacing',
          'Overvåg for symptomprogression',
          'Overvej ergoterapibehandling'
        ],
        mild: [
          'Begynd forsigtigt aktivitetspacing',
          'Uddannelse om PEM genkendelse',
          'Regelmæssig symptomovervågning'
        ],
        none: [
          'PEM ikke betydeligt til stede',
          'Overvej andre diagnoser',
          'Standard aktivitet som tolereret'
        ]
      },
      important: 'Vigtigt: PEM er det karakteristiske symptom på ME/CFS. Hvis til stede, undgå aktiviteter, der konsekvent udløser symptomforværring. Energistyring og pacing er vigtige behandlingsstrategier.',
      retake: 'Gentag Vurdering'
    }
  },

  // Continue with abbreviated versions of remaining sections...
  criteria: {
    title: 'Kriterier Motor',
    description: 'Anvend CDC, NASEM, ESC, WHO diagnostiske kriterier for endelig bestemmelse',
    mecfs: {
      title: 'ME/CFS Kriterier (CDC/NASEM 2015)',
      description: 'Kræver betydelig træthed, PEM, ikke-forfriskende søvn, OG enten kognitiv svækkelse ELLER ortostatisk intolerance',
      criteria: [
        'Betydelig reduktion eller svækkelse af aktivitetsniveauer, der varer ≥6 måneder',
        'Post-exertionel utilpashed (PEM) til stede',
        'Ikke-forfriskende søvn',
        'Kognitiv svækkelse (hjernetåge)',
        'Ortostatisk intolerance ELLER autonom dysfunktion'
      ]
    },
    longCovid: {
      title: 'Lang COVID Kriterier (WHO/NASEM 2024)',
      description: 'Post-akutte følger af SARS-CoV-2 infektion med vedvarende multi-system symptomer',
      criteria: [
        'Bekræftet eller sandsynlig SARS-CoV-2 infektion',
        'Symptomer fortsætter ≥3 måneder fra akut sygdom',
        'Multi-system symptomer, der påvirker daglig funktionsevne',
        'Symptomer ikke forklaret af alternativ diagnose'
      ],
      timing: {
        confirmed: 'Bekræftet ved test',
        probable: 'Sandsynlig baseret på symptomer/eksponering',
        suspected: 'Mistænkt baseret på timing'
      }
    },
    pots: {
      title: 'POTS Kriterier (ESC 2018/AAS-EFAS 2021)',
      description: 'Hjertefrekvens stigning ≥30 slag/min inden for 10 minutter af at stå, med symptomer men uden ortostatisk hypotension',
      criteria: [
        'Hjertefrekvens stigning ≥30 slag/min inden for 10 minutter af at stå',
        'Vedvarende hjertefrekvens ≥120 slag/min mens stående',
        'Ortostatiske symptomer (svimmelhed, hjertebanken, træthed)',
        'Symptomer til stede i ≥3 måneder',
        'Fravær af ortostatisk hypotension'
      ]
    },
    results: {
      complete: 'Diagnostiske Kriterier Vurdering Afsluttet',
      description: 'Baseret på CDC, NASEM, ESC, WHO retningslinjer',
      diagnosesMet: 'Diagnoser Der Opfylder Kriterier',
      criteriaMet: 'KRITERIER OPFYLDT',
      clinicalRecommendations: 'Kliniske Anbefalinger',
      mecfsManagement: [
        'Implementer aktivitetspacing og energistyring',
        'Undgå gradueret træningsterapi (GET)',
        'Overvej symptom-rettede behandlinger',
        'Specialist ME/CFS klinik henvisning hvis tilgængelig'
      ],
      longCovidManagement: [
        'Multidisciplinær tilgang til symptomstyring',
        'Lang COVID klinik henvisning hvis tilgængelig',
        'Overvåg for forbedring over tid',
        'Behandl individuelle symptomer (træthed, kognitiv, respiratorisk)'
      ],
      potsManagement: [
        'Fortsæt til subtype bestemmelse for målrettet terapi',
        'Ikke-farmakologisk: salt, væsker, kompressionstrømper',
        'Overvej kardiologi eller autonom specialist henvisning',
        'Gradvis træningsrekonditionering når passende'
      ],
      reassess: 'Revurder Kriterier',
      downloadReport: 'Download Rapport',
      potsSubtype: 'POTS Subtype Analyse'
    }
  },

  // Continue with the rest of the sections...
  subtype: {
    title: 'POTS Subtype & Behandling Rådgiver',
    description: 'Bestem POTS subtype for personaliserede behandlingsanbefalinger',
    patientInfo: {
      title: 'Patient Information',
      description: 'Grundlæggende patientdata til behandlingsplanlægning',
      comorbidities: 'Relevante Komorbiditeter (markér alle der gælder)',
      comorbidityOptions: ['Diabetes', 'Autoimmun sygdom', 'EDS', 'MCAS']
    },
    subtypes: {
      hypovolemic: {
        name: 'Hypovolemisk POTS',
        description: 'Lavt blodvolumen forårsager ortostatisk intolerance',
        criteria: [
          'Lav-normal blodtryk (<110/70)',
          'Overdreven tørst',
          'Salttrang',
          'Tegn på volumendepletion',
          'Forhøjet renin/aldosteron (hvis tilgængelig)'
        ],
        treatments: {
          nonPharmacological: [
            'Øg væskeindtag til 2,5-3L dagligt',
            'Øg natriumindtag til 8-10g dagligt',
            'Kompressionstrømper (30-40 mmHg)',
            'Gradvis træningsrekonditionering'
          ],
          firstLine: [
            'Fludrocortison 0,1-0,2mg dagligt',
            'Salttabletter hvis kosten ikke er tilstrækkelig'
          ],
          secondLine: [
            'Desmopressin (DDAVP) for alvorlige tilfælde',
            'Erythropoietin hvis anæmisk'
          ]
        }
      },
      neuropathic: {
        name: 'Neuropatisk POTS',
        description: 'Perifer autonom neuropati påvirker blodkarkontrol',
        criteria: [
          'Distal lille fiber neuropati symptomer',
          'GI dysfunktion (gastroparese, forstoppelse)',
          'Anhidrose eller reduceret svedelidelse',
          'Pupil abnormiteter',
          'Historie med diabetes eller autoimmun sygdom'
        ],
        treatments: {
          nonPharmacological: [
            'Kompressionstrømper',
            'Benforhøjelse',
            'Undgå varmeeksponering',
            'Små hyppige måltider'
          ],
          firstLine: [
            'Midodrin 2,5-10mg TID',
            'Pyridostigmin 30-60mg TID'
          ],
          secondLine: [
            'Droxidopa (hvis tilgængelig)',
            'Alpha-liponsyre for neuropati',
            'IVIG for autoimmune tilfælde'
          ]
        }
      },
      hyperadrenergic: {
        name: 'Hyperadrenerg POTS',
        description: 'Overdreven sympatisk nervesystem aktivering',
        criteria: [
          'Hypertension når stående',
          'Angst, panikangreb, tremor',
          'Migræne hovedpiner',
          'Kolde hænder og fødder',
          'Forhøjet stående norepinephrin >600 pg/mL'
        ],
        treatments: {
          nonPharmacological: [
            'Stressreducering teknikker',
            'Undgå stimulanter (koffein)',
            'Regelmæssigt søvnskema',
            'Mild træning'
          ],
          firstLine: [
             'Propranolol 10-20mg BID-QID',
            'Clonidin 0,1-0,2mg BID'
          ],
          secondLine: [
            'Ivabradin 2,5-7,5mg BID',
            'Methyldopa',
            'Labetalol for hypertension'
          ]
        }
      },
      autoimmune: {
        name: 'Autoimmun POTS',
        description: 'Autoimmun-medieret autonom dysfunktion',
        criteria: [
          'Personlig/familie historie med autoimmun sygdom',
          'Hurtig symptom debut',
          'Viral sygdom trigger (EBV, COVID, osv.)',
          'Positive autonome antistoffer (hvis testet)',
          'Andre autoimmune markører positive'
        ],
        treatments: {
          nonPharmacological: [
            'Standard POTS foranstaltninger',
            'Undgå infektionstrig',
            'Stresshåndtering',
            'Anti-inflammatorisk diæt'
          ],
          firstLine: [
            'Standard POTS medicin',
            'Forsøg med kortikosteroider'
          ],
          secondLine: [
            'IVIG terapi',
            'Immunsuppressive midler',
            'Plasmaferese for alvorlige tilfælde'
          ]
        }
      }
    },
    results: {
      complete: 'POTS Subtype Analyse Afsluttet',
      description: 'Personaliserede behandlingsanbefalinger baseret på subtype vurdering',
      primary: 'Primær',
      likelihood: 'sandsynlighed',
      criteriaMetTitle: 'Kriterier Opfyldt',
      allSubtypeScores: 'Alle Subtype Scores',
      nonPharmacological: 'Ikke-Farmakologisk',
      firstLineRx: 'Første Linje Rx',
      secondLineOptions: 'Anden Linje Muligheder',
      mixedSubtype: 'Blandede Subtype Overvejelser: Denne patient viser også træk af flere subtyper. Overvej kombinationsterapi tilgange og overvåg respons på initial behandling.',
      clinicalPearls: 'Kliniske Perler',
      pearls: [
        'Start med ikke-farmakologiske interventioner for alle POTS subtyper',
        'Begynd medicin i lave doser og titrer langsomt',
        'Overvåg respons og juster behandling baseret på symptomforbedring',
        'Overvej specialist henvisning for komplekse tilfælde eller behandlingssvigt',
        'Revurder subtype hvis behandlingsrespons er dårlig'
      ],
      reassess: 'Revurder Subtype',
      downloadPlan: 'Download Behandlingsplan',
      analysisHeader: 'SUBTYPE ANALYSE',
      secondaryConsiderations: 'Sekundære overvejelser',
      and: ' og '
    }
  },

  newPatient: {
    title: 'Ny Patient Vurdering',
    description: 'Intelligent guidet evaluering for ME/CFS, Lang COVID og POTS',
    demographics: {
      title: 'Patient Information',
      description: 'Grundlæggende demografi til klinisk dokumentation',
      step: 'Trin 1 af 7: Patient Demografi',
      age: 'Patient Alder',
      gender: 'Køn',
      clinicianName: 'Kliniker Navn',
      patientId: 'Patient ID/MRN',
      startAssessment: 'Start Vurdering'
    },
    progress: {
      step1: 'Demografi',
      step2: 'Hurtig Screening',
      step3: 'Røde Flag',
      step4: 'Stand Test',
      step5: 'PEM Quest',
      step6: 'Kriterier',
      step7: 'Sammendrag'
    },
    redFlags: {
      title: 'Rødt Flag Vurdering',
      description: 'Tjek for symptomer, der kræver akut evaluering',
      selectSymptoms: 'Vælg alle tilstedeværende symptomer',
      continueAssessment: 'Fortsæt Vurdering'
    },
    standTest: {
      title: 'Ortostatisk Vurdering',
      description: 'Optag baseline og stående hjertefrekvenser',
      measurements: 'Hjertefrekvens Målinger',
      measurementDescription: 'Indtast hjertefrekvens efter 5 minutters liggende og peak hjertefrekvens inden for 10 minutter af at stå',
      baselineHR: 'Baseline HR (liggende)',
      peakHR: 'Peak Stående HR',
      hrIncrease: 'HR Stigning',
      potsCriteria: 'POTS Kriterier (≥30 slag/min)',
      continueToPEM: 'Fortsæt til PEM Vurdering'
    },
    pemAssessment: {
      title: 'PEM Vurdering',
      description: 'Post-Exertionel Utilpashed evaluering',
      finalizeAssessment: 'Afslut Vurdering'
    },
    processing: {
      title: 'Behandler Diagnostiske Kriterier...',
      description: 'Analyserer svar mod CDC, NASEM, ESC og WHO retningslinjer'
    },
    results: {
      title: 'Patient Vurdering Afsluttet',
      description: 'Omfattende klinisk evaluering med SOAP dokumentation',
      primary: 'Primær',
      noDefinitiveDiagnoses: 'Ingen Definitive Diagnoser: Overvej alternative diagnoser, subkliniske præsentationer eller løbende symptomovervågning. Nogle patienter kan have gavn af symptomatisk behandling mens de overvåges for progression.',
      keyResults: 'Vigtige Vurdering Resultater',
      riskLevel: 'Risikoniveau',
      screeningScore: 'Screening Score',
      pemPresent: 'PEM Til Stede',
      potsCriteria: 'POTS Kriterier',
      redFlags: 'Røde Flag',
      priority: 'Prioritet',
      newAssessment: 'Ny Vurdering',
      downloadSOAP: 'Download SOAP Note'
    }
  },

  conditions: {
    mecfs: {
      name: 'ME/CFS',
      fullName: 'Myalgisk Encephalomyelitis/Kronisk Træthedssyndrom',
      icdCode: 'G93.32',
      criteria: [
        'Betydelig træthed ikke lindret af hvile',
        'Post-exertionel utilpashed',
        'Ikke-forfriskende søvn',
        'Kognitiv svækkelse eller ortostatisk intolerance'
      ]
    },
    longCovid: {
      name: 'Lang COVID',
      fullName: 'Post-akutte følger af SARS-CoV-2',
      icdCode: 'U09.9',
      criteria: [
        'COVID-19 infektionshistorie',
        'Symptomer ≥3 måneder varighed',
        'Multi-system involvering',
        'Funktionel svækkelse'
      ]
    },
    pots: {
      name: 'POTS',
      fullName: 'Postural Ortostatisk Takykardi Syndrom',
      icdCode: 'I47.1',
      criteria: [
        'HR stigning ≥30 slag/min ved at stå',
        'Ortostatiske symptomer',
        'Kronisk varighed ≥3 måneder',
        'Ingen ortostatisk hypotension'
      ]
    }
  },

  navigation: {
    assessmentModules: 'Vurderingsmoduler',
    guidelines: 'Retningslinjer',
    diagnosticTools: 'Diagnostiske Værktøjer',
    clinicalGuidelines: 'Kliniske Retningslinjer & Referencer',
    guidelinesDescription: 'Evidensbaserede retningslinjer brugt i VisibleDx diagnostiske algoritmer',
    assessmentModulesSection: 'Vurderingsmoduler',
    guidelinesSection: 'Retningslinjer & Referencer',
    moreGuidelines: 'flere retningslinjer',
    smartBadge: 'Smart'
  },

  languages: {
    en: 'English',
    nl: 'Nederlands',
    da: 'Dansk'
  },

  disclaimer: 'KUN UDDANNELSESVÆRKTØJ - Dette open-source træningsværktøj er designet til sundhedsuddannelse og træning kun. Det er IKKE et medicinsk udstyr og må IKKE bruges til patientbehandling, diagnose eller behandlingsbeslutninger. Konsulter altid kvalificerede medicinske fagfolk for patientbehandling.',

  footer: {
    about: {
      title: 'Om VisibleDx',
      description: 'VisibleDx er et open-source uddannelses træningsværktøj til at lære om ME/CFS, Long COVID og POTS kriterier. Designet udelukkende til sundhedsuddannelse, træning og forskning - IKKE til patientbehandling eller medicinsk brug.',
      badges: {
        sensitivity: '94% Sensitivitet',
        evidenceBased: 'Evidensbaseret',
        openSource: 'Open Source'
      }
    },
    creator: {
      title: 'Skaber & Licens',
      createdBy: 'Skabt af',
      name: 'Willem Gielen MD',
      organization: 'Nordjysk Speciallaegeklinik',
      location: 'Hjørring, Danmark',
      license: 'Open source under MIT Licens',
      linkedinProfile: 'LinkedIn Profil',
      organizationWebsite: 'Organisations Hjemmeside',
      githubRepository: 'GitHub Repository'
    },
    evidence: {
      title: 'Evidensbase',
      guidelines: [
        {
          title: 'CDC ME/CFS Diagnose (2024)',
          url: 'https://www.cdc.gov/me-cfs/hcp/diagnosis/?CDC_AAref_Val=https://www.cdc.gov/me-cfs/healthcare-providers/diagnosis/index.html'
        },
        {
          title: 'NASEM ME/CFS Rapport (2015)',
          url: 'https://nap.nationalacademies.org/read/19012'
        },
        {
          title: 'WHO Long COVID Definition (2021)',
          url: 'https://www.who.int/publications/i/item/9789240025035'
        },
        {
          title: 'ESC POTS Retningslinjer (2018)',
          url: 'https://academic.oup.com/europace/article/20/6/921/4824690'
        },
        {
          title: 'AAS/EFAS POTS Konsensus (2021)',
          url: 'https://link.springer.com/article/10.1007/s10286-021-00822-5'
        },
        {
          title: 'NASA Lean Stand Test Protokol',
          url: 'https://ntrs.nasa.gov/citations/20150021566'
        }
      ]
    },
    notes: {
      title: 'Vigtige Noter',
      items: [
        'Ikke en erstatning for klinisk vurdering',
        'Kræver bekræftelse med fysisk undersøgelse',
        'Overvej patienthistorie og kontekst',
        'Udeluk røde flag før diagnose',
        'Konsulter specialister ved komplekse tilfælde',
        'Overvåg patientrespons på behandling'
      ]
    },
    bottom: {
      version: 'VisibleDx v1.0 - Uddannelsesværktøj',
      copyright: '© 2024 Willem Gielen MD - MIT Licens',
      audienceLabel: 'For Sundhedsprofessionelle',
      badge: 'Forskning & Uddannelse'
    },
    technical: 'Baseret på peer-reviewed litteratur og validerede diagnostiske kriterier. Sensitivitetsdata fra kliniske valideringsstudier. Konsulter altid aktuelle retningslinjer og specialistanbefalinger for komplekse tilfælde.'
  },

  ppgCamera: {
    title: 'Kamera PPG Puls',
    description: 'Placer din fingerspids forsigtigt over kameralinsen med blitz tændt',
    fingerDetected: 'Finger Detekteret',
    placeFingerPrompt: 'Placer Finger',
    signalQuality: {
      poor: 'dårlig',
      fair: 'rimelig',
      good: 'god'
    },
    status: {
      stopped: 'stoppet',
      starting: 'starter',
      detecting: 'detekterer',
      measuring: 'måler'
    },
    recordReading: 'Gem Måling',
    instructions: {
      flashlight: 'Tænd din enheds blitzlys',
      placement: 'Placer fingerspids forsigtigt over kameralinsen',
      stillness: 'Hold dig i ro og træk vejret normalt',
      wait: 'Vent på stabil måling (10+ sekunder)'
    },
    errors: {
      cameraAccess: 'Kamera adgang nægtet',
      noCamera: 'Ingen kamera tilgængelig'
    }
  },

  soapNotes: {
    clinician: 'Kliniker',
    patientId: 'Patient ID',
    age: 'Alder',
    gender: 'Køn',
    notSpecified: 'Ikke specificeret',
    notRecorded: 'Ikke registreret',
    pemPresent: 'Til stede',
    notPresent: 'Ikke til stede',
    baselineHR: 'Baseline HR',
    peakStandingHR: 'Peak Stående HR',
    hrIncrease: 'HR Stigning',
    cannotCalculate: 'Kan ikke beregne',
    potsCriteriaMet: 'OPFYLDT (≥30 slag/min stigning)',
    potsNotMet: 'Ikke opfyldt',
    severity: 'sværhedsgrad'
  }
}