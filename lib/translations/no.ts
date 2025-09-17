import { Translation } from './types'

export const no: Translation = {
  app: {
    title: 'VisibleDx',
    subtitle: 'ME/CFS, Long COVID & POTS Diagnostisk Plattform',
    tagline: 'Evidensbasert diagnostisk verktøy for ME/CFS, Long COVID og POTS',
    backToDashboard: 'Tilbake til Dashboard'
  },

  common: {
    yes: 'Ja',
    no: 'Nei',
    next: 'Neste',
    previous: 'Forrige',
    continue: 'Fortsett',
    complete: 'Fullfør',
    cancel: 'Avbryt',
    save: 'Lagre',
    download: 'Last ned',
    loading: 'Laster...',
    processing: 'Behandler...',
    error: 'Feil',
    success: 'Suksess',
    retry: 'Prøv igjen',
    close: 'Lukk',
    age: 'Alder',
    gender: 'Kjønn',
    male: 'Mann',
    female: 'Kvinne',
    other: 'Annet',
    question: 'Spørsmål',
    of: 'av',
    step: 'Steg',
    minute: 'minutt',
    minutes: 'minutter',
    bpm: 'slag/min',
    criteria: 'kriterier',
    met: 'Oppfylt',
    notMet: 'Ikke oppfylt',
    high: 'Høy',
    medium: 'Middels',
    low: 'Lav',
    none: 'Ingen',
    mild: 'Mild',
    moderate: 'Moderat',
    severe: 'Alvorlig',
    confidence: 'Tillit',
    sensitivity: 'Sensitivitet',
    score: 'Poengsum',
    results: 'Resultater',
    recommendations: 'Anbefalinger',
    clinician: 'Kliniker',
    patientId: 'Pasient-ID',
    required: 'Påkrevd',
    optional: 'Valgfritt'
  },

  dashboard: {
    smartAssessment: {
      title: 'Smart Pasientvurdering',
      description: 'Intelligent veiledning gjennom diagnostisk prosess',
      autoRouting: 'Automatisk ruting basert på risikovurdering',
      soapNotes: 'Automatisk SOAP-notater',
      icdCodes: 'ICD-10 diagnosekoder inkludert',
      startNew: 'Start Ny Vurdering'
    },
    modules: {
      quickScreen: {
        title: 'Hurtigscreening',
        description: '16 spørsmål for initial risikovurdering (92% sensitivitet)'
      },
      redFlag: {
        title: 'Røde Flagg Sjekk',
        description: 'Identifiser symptomer som krever akutt utredning'
      },
      standTest: {
        title: 'Ståtest',
        description: 'NASA Lean Stand Test for POTS-diagnose'
      },
      pemQuest: {
        title: 'PEM Spørreskjema',
        description: 'DePaul Post-Exertional Malaise vurdering'
      },
      criteriaEngine: {
        title: 'Kriterieanalyse',
        description: 'CDC, NASEM, ESC, WHO diagnostiske kriterier'
      },
      subtypeAdvisor: {
        title: 'Undertyperådgiver',
        description: 'POTS-undertype og behandlingsanbefalinger'
      }
    },
    stats: {
      diagnosticDelay: '4+ års gjennomsnittlig diagnostisk forsinkelse',
      doctorsConsulted: '7+ leger konsultert før diagnose',
      sensitivityValidated: '92% sensitivitet (validert)'
    },
    algorithm: {
      title: 'Diagnostisk Algoritme',
      mecfs: {
        title: 'ME/CFS',
        criteria: 'CDC/NASEM 2015',
        description: 'Krever PEM + 3 av 4 kjernekriter'
      },
      longCovid: {
        title: 'Long COVID',
        criteria: 'WHO/NASEM 2024',
        description: 'Post-akutte følger av SARS-CoV-2'
      },
      pots: {
        title: 'POTS',
        criteria: 'ESC 2018/AAS-EFAS 2021',
        description: 'Hjertefrekvens økning ≥30 slag/min ved stående'
      }
    },
    startAssessment: 'Start Vurdering'
  },

  quickScreen: {
    title: 'Hurtigscreening Vurdering',
    description: '16 evidensbaserte spørsmål (92% sensitivitet)',
    questions: [
      'Opplever du alvorlig tretthet som ikke lindres av hvile?',
      'Gjør fysisk eller mental aktivitet symptomene dine verre (Post-Exertional Malaise)?',
      'Har du ikke-oppfriskende søvn, uavhengig av varighet?',
      'Opplever du kognitive vansker (hjårnetåke, hukommelsesproblemer)?',
      'Har du hjertebank eller rask hjertefrekvens, spesielt når du står?',
      'Opplever du svimmelhet eller letthodethet når du reiser deg?',
      'Har du hatt COVID-19 eller mistenkt COVID-19-infeksjon?',
      'Har symptomene dine vedvart i 3 måneder eller lenger?',
      'Opplever du muskel- eller leddsmerter uten hevelse?',
      'Har du hyppige hodepiner eller endringer i hodepintemønster?',
      'Opplever du temperaturregulering (føler deg for varm/kald)?',
      'Har du gastrointestinale symptomer (kvalme, oppblåsthet, tarmendringer)?',
      'Opplever du pustevansker eller åndedrettsproblemer?',
      'Har du lagt merke til redusert treningstoleranse eller fysisk kapasitet?',
      'Opplever du følsomhet for lys, lyd eller berøring?',
      'Har du vært ute av stand til å opprettholde ditt tidligere aktivitetsnivå?'
    ],
    categories: {
      core: 'Kjernesymptom',
      pem: 'Post-Exertional Malaise',
      cardiovascular: 'Kardiovaskulær',
      orthostatic: 'Ortostatisk',
      history: 'Sykdomshistorie',
      duration: 'Varighet',
      pain: 'Smerte',
      neurological: 'Nevrologisk',
      autonomic: 'Autonom',
      gi: 'Gastrointestinal',
      respiratory: 'Respiratorisk',
      functional: 'Funksjonell',
      sensory: 'Sensorisk'
    },
    results: {
      complete: 'Hurtigscreening Fullført',
      riskAssessment: 'Risikovurdering',
      lowRisk: 'LAV RISIKO for ME/CFS, Long COVID eller POTS',
      mediumRisk: 'MIDDELS RISIKO for kroniske symptomer',
      highRisk: 'HØY RISIKO for ME/CFS, Long COVID eller POTS',
      totalResponses: 'Totale positive svar',
      coreSymptoms: 'Kjernesymptomer identifisert',
      pemPresent: 'Post-Exertional Malaise tilstede',
      covidHistory: 'COVID-19 historie',
      chronicSymptoms: 'Kroniske symptomer (≥3 mnd)',
      nextSteps: 'Neste Steg',
      retake: 'Ta Screeningen På Nytt'
    },
    nextStepsRecommendations: {
      high: [
        'Fullstendig medisinsk vurdering anbefales',
        'Vurder henvisning til ME/CFS-spesialist',
        'Utfør ortostatisk vurdering (ståtest)',
        'Utelukk differensialdiagnoser'
      ],
      medium: [
        'Fortsatt symptomovervåking',
        'Vurder ytterligere diagnostisk testing',
        'Oppfølging innen 4-6 uker',
        'Symptomspesifikk behandling'
      ],
      low: [
        'Rutinemessig oppfølging',
        'Symptomlogging hvis tilstanden forverres',
        'Sunn livsstil og stresshåndtering',
        'Retur ved nye eller forverrede symptomer'
      ]
    }
  },

  redFlag: {
    title: 'Røde Flagg Sjekk',
    description: 'Identifiser symptomer som krever rask evaluering',
    symptoms: {
      title: 'Røde Flagg Symptomer',
      description: 'Velg alle tilstedeværende symptomer',
      list: [
        'Vedvarende feber eller nattesvette',
        'Utilsiktet vekttap >10% på 6 måneder',
        'Brystsmerter ved anstrengelse eller hvile',
        'Progressiv pustevanske',
        'Nye nevrologiske symptomer (svakhet, nummenhet, kramper)',
        'Unormal blødning eller blåmerker'
      ]
    },
    routineLabs: {
      title: 'Rutinelaboratorier',
      description: 'Anbefalte tester for ME/CFS, Long COVID og POTS utredning',
      categories: {
        basicMetabolic: {
          title: 'Grunnleggende Metabolsk Panel',
          indication: 'Obligatorisk for alle pasienter',
          tests: [
            'Komplett blodtelling (CBC) med differential',
            'Omfattende metabolsk panel (CMP)',
            'Tyroideastimulerende hormon (TSH)',
            'Vitamin B12 og folatnivåer',
            '25-hydroksi vitamin D'
          ]
        },
        endocrine: {
          title: 'Endokrin Screening',
          indication: 'Ved tretthet og metabolske symptomer',
          tests: [
            'Morgen kortisol',
            'HbA1c eller fastende glukose',
            'Fritt T4 (hvis unormal TSH)',
            'Ferritin og jernstatus'
          ]
        },
        nutritional: {
          title: 'Næringsstoffmangel',
          indication: 'Ved tretthet og kognitive symptomer',
          tests: [
            'Magnesium, fosfor, sink',
            'Vitamin B1 (tiamin)',
            'Folat i røde blodceller',
            'Protein og albumin'
          ]
        },
        autoimmune: {
          title: 'Autoimmun Screening',
          indication: 'Ved mistenkt autoimmun komponent',
          tests: [
            'Antinukleære antistoffer (ANA)',
            'Revmatoid faktor (RF)',
            'Senkningsreaksjon (ESR)',
            'C-reaktivt protein (CRP)'
          ]
        },
        cardiac: {
          title: 'Hjerte Vurdering',
          indication: 'Ved hjertebank eller ortostatiske symptomer',
          tests: [
            'EKG (12-avlednings)',
            'Ekkokardiogram',
            'Holter-monitor eller hendelsesmonitor',
            'BNP eller NT-proBNP'
          ]
        },
        infectious: {
          title: 'Infeksiøs Screening',
          indication: 'Ved mistenkt pågående eller tidligere infeksjon',
          tests: [
            'Epstein-Barr virus (EBV) panel',
            'Cytomegalovirus (CMV) IgG/IgM',
            'SARS-CoV-2 antistoffer',
            'Lyme sykdom serologiske tester'
          ]
        }
      }
    },
    results: {
      complete: 'Røde Flagg Vurdering Fullført',
      urgentEval: 'RASK EVALUERING KREVES',
      priorityTests: 'Prioritetstester',
      routineTests: 'Rutinetester',
      noRedFlags: 'Ingen røde flagg identifisert',
      clinicalSupport: 'Klinisk Beslutningsstøtte',
      urgent: 'Rask',
      priority: 'Prioritet',
      routine: 'Rutine',
      reassess: 'Revurder Røde Flagg',
      generateRecommendations: 'Generer Laboratoriebefalinger'
    }
  },

  standTest: {
    title: 'NASA Lean Stand Test',
    description: 'Ortostatisk hjertefrekvens og blodtrykksvurdering for POTS-diagnose',
    setup: {
      title: 'Test Oppsett',
      description: 'Velg din foretrukne metode for hjertefrekvensovervåking',
      manual: {
        title: 'Manuell Registrering',
        description: 'Bruk egen utstyr og skriv inn verdier manuelt',
        recommended: 'Anbefalt for klinisk nøyaktighet'
      },
      camera: {
        title: 'Kamerabasert Deteksjon',
        description: 'Eksperimentell hjertefrekvensdeteksjon via kamera',
        beta: 'Beta-funksjon - kan være mindre nøyaktig'
      },
      safety: 'Sikkerhetsadvarsel: Stopp testen umiddelbart hvis du opplever alvorlig svimmelhet, brystsmerter eller besvimelse',
      startTest: 'Start Test'
    },
    phases: {
      baseline: {
        name: 'Baseline (Hvile)',
        instructions: 'Ligg komfortabelt i 5 minutter før måling'
      },
      standing: {
        name: 'Stående Fase',
        instructions: 'Stå oppreist og stille mot en vegg i 10 minutter'
      }
    },
    recording: {
      title: 'Registrer Vitale Tegn',
      description: 'Skriv inn hjertefrekvens og blodtrykk på spesifikke tidsintervaller',
      baselineHR: 'Baseline Hjertefrekvens',
      peakHR: 'Høyeste Hjertefrekvens',
      systolicBP: 'Systolisk Blodtrykk',
      diastolicBP: 'Diastolisk Blodtrykk',
      recordReading: 'Registrer Avlesning',
      recentReadings: 'Siste Avlesninger'
    },
    results: {
      title: 'Stand Test Resultater',
      description: 'Ortostatisk hjertefrekvens og blodtrykksanalyse',
      baseline: 'Baseline (liggende)',
      peakStanding: 'Høyeste stående',
      sustainedStanding: 'Vedvarende stående',
      averageHR: 'Gjennomsnittlig hjertefrekvens',
      maxHR: 'Maksimal hjertefrekvens',
      hrIncrease: 'Hjertefrekvensøkning',
      potsCriteria: 'POTS Kriterier',
      potsMet: 'POTS-kriterier OPPFYLT',
      potsNotMet: 'POTS-kriterier ikke oppfylt',
      interpretation: 'Tolkning',
      nextSteps: 'Neste Steg',
      repeatTest: 'Gjenta Test'
    },
    interpretations: {
      potsMet: [
        'POTS-diagnose er sannsynlig basert på hjertefrekvensrespons',
        'Henvisning til kardiolog eller autonom spesialist anbefales',
        'Vurder POTS-undertypanalyse for målrettet behandling',
        'Ikke-farmakologisk behandling kan startes (salt, væsker, kompresjon)'
      ],
      potsNotMet: [
        'POTS-kriterier ikke oppfylt ved denne testen',
        'Vurder alternative årsaker til ortostatiske symptomer',
        'Kan trenge å gjentas under symptomatisk episode',
        'Andre former for autonom dysfunksjon kan være tilstede'
      ]
    },
    controls: {
      pause: 'Pause',
      resume: 'Gjenoppta',
      stop: 'Stopp'
    }
  },

  pem: {
    title: 'Post-Exertional Malaise Vurdering',
    description: 'DePaul PEM Spørreskjema for ME/CFS diagnose',
    about: {
      title: 'Om Post-Exertional Malaise (PEM)',
      description: 'PEM er kjernesymptomet ved ME/CFS, karakterisert av forverring av symptomer etter fysisk, kognitiv eller emosjonell anstrengelse. Dette spørreskjemaet hjelper til med å kvantifisere PEM-alvorlighet og frekvens.'
    },
    questions: {
      frequency: {
        question: 'Hvor ofte opplever du en forverring av symptomer etter fysisk aktivitet?',
        description: 'Inkluderer alle typer fysisk anstrengelse',
        options: [
          'Aldri',
          'Sjelden (mindre enn 25% av tiden)',
          'Noen ganger (25-50% av tiden)',
          'Ofte (50-75% av tiden)',
          'Alltid eller nesten alltid (mer enn 75% av tiden)'
        ]
      },
      mentalFrequency: {
        question: 'Hvor ofte opplever du en forverring av symptomer etter mental aktivitet?',
        description: 'Inkluderer kognitiv anstrengelse, konsentrasjon, problemløsning',
        options: [
          'Aldri',
          'Sjelden (mindre enn 25% av tiden)',
          'Noen ganger (25-50% av tiden)',
          'Ofte (50-75% av tiden)',
          'Alltid eller nesten alltid (mer enn 75% av tiden)'
        ]
      },
      onsetTime: {
        question: 'Hvor raskt etter aktivitet begynner symptomene dine å forverres?',
        options: [
          'Symptomforverring skjer ikke',
          'Umiddelbart (innen 1 time)',
          'Forsinket (2-12 timer senere)',
          'Neste dag',
          'Flere dager senere'
        ]
      },
      severity: {
        question: 'Hvor alvorlig er forverringen av symptomene dine etter aktivitet?',
        options: [
          'Ingen forverring',
          'Mild - litt verre enn før aktivitet',
          'Moderat - merkbart verre, men håndterlig',
          'Alvorlig - betydelig verre, vanskelig å fungere',
          'Meget alvorlig - ute av stand til å fungere, sengeliggende'
        ]
      },
      recoveryTime: {
        question: 'Hvor lang tid tar det vanligvis for symptomene dine å returnere til baseline etter aktivitet?',
        options: [
          'Ingen restitusjonstid nødvendig',
          'Noen timer',
          'Omtrent en dag',
          'Flere dager (2-6 dager)',
          'En uke eller mer'
        ]
      }
    },
    results: {
      complete: 'PEM Vurdering Fullført',
      description: 'Post-Exertional Malaise evaluering basert på DePaul kriterier',
      status: 'PEM Status',
      present: 'Post-Exertional Malaise er sannsynligvis tilstede',
      absent: 'Post-Exertional Malaise er usannsynlig',
      severityLevels: {
        none: 'Ingen',
        mild: 'Mild PEM',
        moderate: 'Moderat PEM',
        severe: 'Alvorlig PEM'
      },
      clinicalInterpretation: 'Klinisk Tolkning',
      recommendations: {
        severe: [
          'Streng aktivitetspacing essensielt',
          'Vurder funksjonshemming evaluering',
          'ME/CFS spesialistklinikk henvisning'
        ],
        moderate: [
          'Implementer forsiktig aktivitetspacing',
          'Overvåk for symptomprogresjon',
          'Vurder ergoterapi'
        ],
        mild: [
          'Begynn forsiktig aktivitetspacing',
          'Utdanning om PEM-gjenkjennelse',
          'Regelmessig symptomovervåking'
        ],
        none: [
          'PEM ikke signifikant tilstede',
          'Vurder andre diagnoser',
          'Standard aktivitet som tolereres'
        ]
      },
      important: 'Viktig: PEM er det karakteristiske symptomet ved ME/CFS. Hvis tilstede, unngå aktiviteter som konsekvent forårsaker symptomforverring. Energistyring og pacing er viktige behandlingsstrategier.',
      retake: 'Ta Vurdering På Nytt'
    }
  },

  criteria: {
    title: 'Kriterieanalyse',
    description: 'Anvend CDC, NASEM, ESC, WHO diagnostiske kriterier for definitiv bestemmelse',
    mecfs: {
      title: 'ME/CFS Kriterier (CDC/NASEM 2015)',
      description: 'Krever betydelig tretthet, PEM, ikke-oppfriskende søvn, OG kognitive forstyrrelser ELLER ortostatisk intoleranse',
      criteria: [
        'Betydelig reduksjon eller begrensning av aktivitetsnivåer som varer ≥6 måneder',
        'Post-exertional malaise (PEM) tilstede',
        'Ikke-oppfriskende søvn',
        'Kognitive forstyrrelser (hjårnetåke)',
        'Ortostatisk intoleranse ELLER autonom dysfunksjon'
      ]
    },
    longCovid: {
      title: 'Long COVID Kriterier (WHO/NASEM 2024)',
      description: 'Post-akutte følger av SARS-CoV-2-infeksjon med vedvarende multisystemsymptomer',
      criteria: [
        'Bekreftet eller sannsynlig SARS-CoV-2-infeksjon',
        'Symptomer vedvarer ≥3 måneder fra akutt sykdom',
        'Multisystemsymptomer som påvirker daglig funksjon',
        'Symptomer ikke forklart av alternativ diagnose'
      ],
      timing: {
        confirmed: 'Bekreftet av test',
        probable: 'Sannsynlig basert på symptomer/eksponering',
        suspected: 'Mistenkt basert på timing'
      }
    },
    pots: {
      title: 'POTS Kriterier (ESC 2018/AAS-EFAS 2021)',
      description: 'Hjertefrekvensøkning ≥30 slag/min innen 10 minutter av stående, med symptomer men uten ortostatisk hypotensjon',
      criteria: [
        'Hjertefrekvensøkning ≥30 slag/min innen 10 minutter av stående',
        'Vedvarende hjertefrekvens ≥120 slag/min under stående',
        'Ortostatiske symptomer (svimmelhet, hjertebank, tretthet)',
        'Symptomer tilstede i ≥3 måneder',
        'Fravær av ortostatisk hypotensjon'
      ]
    },
    results: {
      complete: 'Diagnostiske Kriterier Vurdering Fullført',
      description: 'Basert på CDC, NASEM, ESC, WHO retningslinjer',
      diagnosesMet: 'Diagnoser Som Oppfyller Kriterier',
      criteriaMet: 'KRITERIER OPPFYLT',
      clinicalRecommendations: 'Kliniske Anbefalinger',
      mecfsManagement: [
        'Implementer aktivitetspacing og energistyring',
        'Unngå gradert treningsterapi (GET)',
        'Vurder symptomrettede behandlinger',
        'ME/CFS spesialistklinikk henvisning hvis tilgjengelig'
      ],
      longCovidManagement: [
        'Multidisiplinær tilnærming for symptomhåndtering',
        'Long COVID klinikk henvisning hvis tilgjengelig',
        'Overvåk for forbedring over tid',
        'Behandle individuelle symptomer (tretthet, kognitive, respiratoriske)'
      ],
      potsManagement: [
        'Fortsett til undertypebestemmelse for målrettet terapi',
        'Ikke-farmakologisk: salt, væsker, kompresjonsstøttes',
        'Vurder kardiologi eller autonom spesialist henvisning',
        'Gradvis treningsrekondisjonering når passende'
      ],
      reassess: 'Revurder Kriterier',
      downloadReport: 'Last Ned Rapport',
      potsSubtype: 'POTS Undertypanalyse'
    }
  },

  subtype: {
    title: 'POTS Undertype & Behandlings Rådgiver',
    description: 'Bestem POTS-undertype for personlige behandlingsanbefalinger',
    patientInfo: {
      title: 'Pasientinformasjon',
      description: 'Grunnleggende pasientdata for behandlingsplanlegging',
      comorbidities: 'Relevante Komorbiditeter (merk alle som gjelder)',
      comorbidityOptions: ['Diabetes', 'Autoimmun sykdom', 'EDS', 'MCAS']
    },
    subtypes: {
      hypovolemic: {
        name: 'Hypovolemisk POTS',
        description: 'Lavt blodvolum forårsaker ortostatisk intoleranse',
        criteria: [
          'Lav-normal blodtrykk (<110/70)',
          'Overdreven tørst',
          'Saltbegjær',
          'Tegn på volumutarming',
          'Forhøyet renin/aldosteron (hvis tilgjengelig)'
        ],
        treatments: {
          nonPharmacological: [
            'Øk væskeinntak til 2,5-3L daglig',
            'Øk natriuminntak til 8-10g daglig',
            'Kompresjonstaer (30-40 mmHg)',
            'Gradvis treningsrekondisjonering'
          ],
          firstLine: [
            'Fludrokortison 0,1-0,2mg daglig',
            'Salttabletter hvis kostinntak utilstrekkelig'
          ],
          secondLine: [
            'Desmopressin (DDAVP) for alvorlige tilfeller',
            'Erytropoietin ved anemi'
          ]
        }
      },
      neuropathic: {
        name: 'Neuropatisk POTS',
        description: 'Perifer autonom neuropati som påvirker blodkarkontroll',
        criteria: [
          'Distale småfiberneuropatisymptomer',
          'GI-dysfunksjon (gastroparese, forstoppelse)',
          'Anhidrose eller redusert svetting',
          'Pupillavvik',
          'Historie med diabetes eller autoimmun sykdom'
        ],
        treatments: {
          nonPharmacological: [
            'Kompresjonstaer',
            'Benelevasjon',
            'Unngå varmeeksponering',
            'Små hyppige måltider'
          ],
          firstLine: [
            'Midodrin 2,5-10mg TID',
            'Pyridostigmin 30-60mg TID'
          ],
          secondLine: [
            'Droksidopa (hvis tilgjengelig)',
            'Alfa-lipoinsyre for neuropati',
            'IVIG for autoimmune tilfeller'
          ]
        }
      },
      hyperadrenergic: {
        name: 'Hyperadrenerg POTS',
        description: 'Overdreven sympatisk nervesystemaktivering',
        criteria: [
          'Hypertensjon ved stående',
          'Angst, panikanfall, tremor',
          'Migrenesmerter',
          'Kalde hender og føtter',
          'Forhøyet stående noradrenalin >600 pg/mL'
        ],
        treatments: {
          nonPharmacological: [
            'Stressreduksjonsteknikker',
            'Unngå stimulantia (koffein)',
            'Regelmessig søvnplan',
            'Skånsom trening'
          ],
          firstLine: [
            'Propranolol 10-40mg BID',
            'Klonidin 0,1-0,2mg BID'
          ],
          secondLine: [
            'Ivabradin 2,5-7,5mg BID',
            'Metyldopa',
            'Labetalol for hypertensjon'
          ]
        }
      },
      autoimmune: {
        name: 'Autoimmun POTS',
        description: 'Autoimmunmediert autonom dysfunksjon',
        criteria: [
          'Personlig/familiehistorie med autoimmun sykdom',
          'Rask debut av symptomer',
          'Viral sykdomsutløser (EBV, COVID, etc.)',
          'Positive autonome antistoffer (hvis testet)',
          'Andre autoimmune markører positive'
        ],
        treatments: {
          nonPharmacological: [
            'Standard POTS-tiltak',
            'Unngå infeksjonsutløsere',
            'Stresshåndtering',
            'Antiinflammatorisk kosthold'
          ],
          firstLine: [
            'Standard POTS-medisiner',
            'Prøv kortikosteroider'
          ],
          secondLine: [
            'IVIG-terapi',
            'Immunsuppressive midler',
            'Plasmafrese for alvorlige tilfeller'
          ]
        }
      }
    },
    results: {
      complete: 'POTS Undertypanalyse Fullført',
      description: 'Personlige behandlingsanbefalinger basert på undertypvurdering',
      primary: 'Primær',
      likelihood: 'sannsynlighet',
      criteriaMetTitle: 'Kriterier Oppfylt',
      allSubtypeScores: 'Alle Undertypescorer',
      nonPharmacological: 'Ikke-Farmakologisk',
      firstLineRx: 'Første Linje Rx',
      secondLineOptions: 'Andre Linje Alternativer',
      mixedSubtype: 'Blandede Undertypebetraktninger: Denne pasienten viser også funksjoner fra flere undertyper. Vurder kombinasjonsterapitilnærminger og overvåk respons på initial behandling.',
      clinicalPearls: 'Kliniske Perler',
      pearls: [
        'Start med ikke-farmakologiske intervensjoner for alle POTS-undertyper',
        'Begynn medisiner i lave doser og titrer sakte',
        'Overvåk respons og juster behandling basert på symptomforbedring',
        'Vurder spesialisthenvisning for komplekse tilfeller eller behandlingssvikt',
        'Revurder undertype hvis behandlingsrespons er dårlig'
      ],
      reassess: 'Revurder Undertype',
      downloadPlan: 'Last Ned Behandlingsplan',
      analysisHeader: 'SUBTYPE ANALYSE',
      secondaryConsiderations: 'Sekundære hensyn',
      and: ' og '
    }
  },

  newPatient: {
    title: 'Ny Pasientvurdering',
    description: 'Intelligent veiledning gjennom evaluering for ME/CFS, Long COVID og POTS',
    demographics: {
      title: 'Pasientinformasjon',
      description: 'Grunnleggende demografi for klinisk dokumentasjon',
      step: 'Steg 1 av 7: Pasientdemografi',
      age: 'Pasientalder',
      gender: 'Kjønn',
      clinicianName: 'Klinikernavn',
      patientId: 'Pasient-ID/MRN',
      startAssessment: 'Start Vurdering'
    },
    progress: {
      step1: 'Demografi',
      step2: 'Hurtigscreening',
      step3: 'Røde Flagg',
      step4: 'Ståtest',
      step5: 'PEM Quest',
      step6: 'Kriterier',
      step7: 'Sammendrag'
    },
    redFlags: {
      title: 'Røde Flagg Vurdering',
      description: 'Sjekk for symptomer som krever rask evaluering',
      selectSymptoms: 'Velg alle tilstedeværende symptomer',
      continueAssessment: 'Fortsett Vurdering'
    },
    standTest: {
      title: 'Ortostatisk Vurdering',
      description: 'Registrer baseline og stående hjertefrekvenser',
      measurements: 'Hjertefrekvensmålinger',
      measurementDescription: 'Skriv inn hjertefrekvens etter 5 minutters liggende og høyeste hjertefrekvens innen 10 minutter av stående',
      baselineHR: 'Baseline HR (liggende)',
      peakHR: 'Høyeste Stående HR',
      hrIncrease: 'HR Økning',
      potsCriteria: 'POTS Kriterier',
      continueToPEM: 'Fortsett til PEM Vurdering'
    },
    pemAssessment: {
      title: 'PEM Vurdering',
      description: 'Post-Exertional Malaise evaluering',
      finalizeAssessment: 'Fullfør Vurdering'
    },
    processing: {
      title: 'Behandler Diagnostiske Kriterier...',
      description: 'Analyserer svar mot CDC, NASEM, ESC og WHO retningslinjer'
    },
    results: {
      title: 'Pasientvurdering Fullført',
      description: 'Omfattende klinisk evaluering med SOAP-dokumentasjon',
      primary: 'Primær',
      noDefinitiveDiagnoses: 'Ingen Definitive Diagnoser',
      keyResults: 'Viktige Vurderingsresultater',
      riskLevel: 'Risikonivå',
      screeningScore: 'Screeningscorer',
      pemPresent: 'PEM Tilstede',
      potsCriteria: 'POTS Kriterier',
      redFlags: 'Røde Flagg',
      priority: 'Prioritet',
      newAssessment: 'Ny Vurdering',
      downloadSOAP: 'Last Ned SOAP-note'
    }
  },

  conditions: {
    mecfs: {
      name: 'ME/CFS',
      fullName: 'Myalgisk Encefalomyelitt/Kronisk Tretthetssyndrom',
      icdCode: 'G93.32',
      criteria: [
        'Betydelig tretthet ≥6 måneder',
        'Post-exertional malaise',
        'Ikke-oppfriskende søvn',
        'Kognitive forstyrrelser eller ortostatisk intoleranse'
      ]
    },
    longCovid: {
      name: 'Long COVID',
      fullName: 'Post-COVID-19 Tilstand',
      icdCode: 'U09.9',
      criteria: [
        'Bekreftet eller sannsynlig SARS-CoV-2-infeksjon',
        'Symptomer ≥3 måneder fra akutt episode',
        'Multisystemsymptomer',
        'Funksjonell påvirkning'
      ]
    },
    pots: {
      name: 'POTS',
      fullName: 'Postural Ortostatisk Takykardisyndrom',
      icdCode: 'I47.1',
      criteria: [
        'HR økning ≥30 slag/min ved stående',
        'Vedvarende HR ≥120 slag/min',
        'Ortostatiske symptomer ≥3 måneder',
        'Ingen ortostatisk hypotensjon'
      ]
    }
  },

  navigation: {
    assessmentModules: 'Vurderingsmoduler',
    guidelines: 'Retningslinjer',
    diagnosticTools: 'Diagnostiske Verktøy',
    clinicalGuidelines: 'Kliniske Retningslinjer & Referanser',
    guidelinesDescription: 'Evidensbaserte retningslinjer brukt i VisibleDx diagnostiske algoritmer',
    assessmentModulesSection: 'Vurderingsmoduler',
    guidelinesSection: 'Retningslinjer & Referanser',
    moreGuidelines: 'flere retningslinjer'
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

  disclaimer: 'Dette verktøyet er kun for utdanningsformål og erstatter ikke profesjonell medisinsk vurdering eller klinisk evaluering',

  footer: {
    about: {
      title: 'Om VisibleDx',
      description: 'VisibleDx er et evidensbasert diagnostisk beslutningsstøtteverktøy for ME/CFS, Long COVID og POTS. Det implementerer validerte kriterier fra ledende medisinske organisasjoner for å hjelpe klinikere med systematisk evaluering.',
      badges: {
        sensitivity: '94% Sensitivitet',
        evidenceBased: 'Evidensbasert',
        openSource: 'Open Source'
      }
    },
    evidence: {
      title: 'Evidensgrunnlag',
      guidelines: [
        'CDC ME/CFS Casedefinisjon (2015)',
        'NASEM ME/CFS Rapport (2015)',
        'WHO Long COVID Definisjon (2021)',
        'ESC POTS Retningslinjer (2018)',
        'AAS/EFAS POTS Konsensus (2021)',
        'NASA Lean Stand Test Protokoll'
      ]
    },
    notes: {
      title: 'Viktige Merknader',
      items: [
        'Ikke en erstatning for klinisk vurdering',
        'Krever bekreftelse med fysisk undersøkelse',
        'Vurder pasienthistorie og kontekst',
        'Utelukk røde flagg før diagnose',
        'Konsulter spesialister for komplekse tilfeller',
        'Overvåk pasientrespons på behandling'
      ]
    },
    bottom: {
      version: 'VisibleDx v1.0 - Utdanningsverktøy',
      copyright: '© 2024 VisibleDx',
      audienceLabel: 'For Helsepersonell',
      badge: 'Forskning & Utdanning'
    },
    technical: 'Basert på peer-reviewed litteratur og validerte diagnostiske kriterier. Sensitivitetsdata fra kliniske valideringsstudier. Konsulter alltid gjeldende retningslinjer og spesialistanbefalinger for komplekse tilfeller.'
  }
}