import { Translation } from './types'

export const sv: Translation = {
  app: {
    title: 'VisibleDx',
    subtitle: 'ME/CFS, Long COVID & POTS Diagnostisk Platform',
    tagline: 'Evidensbaserat diagnostiskt verktyg för ME/CFS, Long COVID och POTS',
    backToDashboard: 'Tillbaka till Dashboard'
  },

  common: {
    yes: 'Ja',
    no: 'Nej',
    next: 'Nästa',
    previous: 'Föregående',
    continue: 'Fortsätt',
    complete: 'Slutför',
    cancel: 'Avbryt',
    save: 'Spara',
    download: 'Ladda ner',
    loading: 'Laddar...',
    processing: 'Bearbetar...',
    error: 'Fel',
    success: 'Framgång',
    retry: 'Försök igen',
    close: 'Stäng',
    age: 'Ålder',
    gender: 'Kön',
    male: 'Man',
    female: 'Kvinna',
    other: 'Annat',
    question: 'Fråga',
    of: 'av',
    step: 'Steg',
    minute: 'minut',
    minutes: 'minuter',
    bpm: 'slag/min',
    criteria: 'kriterier',
    met: 'Uppfyllt',
    notMet: 'Ej uppfyllt',
    high: 'Hög',
    medium: 'Medel',
    low: 'Låg',
    none: 'Ingen',
    mild: 'Lindrig',
    moderate: 'Måttlig',
    severe: 'Svår',
    confidence: 'Tillförlitlighet',
    sensitivity: 'Känslighet',
    score: 'Poäng',
    results: 'Resultat',
    recommendations: 'Rekommendationer',
    clinician: 'Kliniker',
    patientId: 'Patient-ID',
    required: 'Krävs',
    optional: 'Valfritt'
  },

  dashboard: {
    smartAssessment: {
      title: 'Smart Patientbedömning',
      description: 'Intelligent guidning genom diagnostisk process',
      autoRouting: 'Automatisk routing baserad på riskbedömning',
      soapNotes: 'Automatisk SOAP-notering',
      icdCodes: 'ICD-10 diagnoskoder inkluderade',
      startNew: 'Starta Ny Bedömning'
    },
    modules: {
      quickScreen: {
        title: 'Snabbscreening',
        description: '16 frågor för initial riskbedömning (92% känslighet)'
      },
      redFlag: {
        title: 'Larmsignalskontroll',
        description: 'Identifiera symptom som kräver akut utredning'
      },
      standTest: {
        title: 'Ståtest',
        description: 'NASA Lean Stand Test för POTS-diagnos'
      },
      pemQuest: {
        title: 'PEM Frågeformulär',
        description: 'DePaul Post-Exertional Malaise bedömning'
      },
      criteriaEngine: {
        title: 'Kriterieanalys',
        description: 'CDC, NASEM, ESC, WHO diagnostiska kriterier'
      },
      subtypeAdvisor: {
        title: 'Subtypsrådgivare',
        description: 'POTS-subtyp och behandlingsrekommendationer'
      }
    },
    stats: {
      diagnosticDelay: '4+ års genomsnittlig diagnostisk fördröjning',
      doctorsConsulted: '7+ läkare konsulterade före diagnos',
      sensitivityValidated: '92% känslighet (validerad)'
    },
    algorithm: {
      title: 'Diagnostisk Algoritm',
      mecfs: {
        title: 'ME/CFS',
        criteria: 'CDC/NASEM 2015',
        description: 'Kräver PEM + 3 av 4 kärnkriterier'
      },
      longCovid: {
        title: 'Long COVID',
        criteria: 'WHO/NASEM 2024',
        description: 'Post-akuta följder av SARS-CoV-2'
      },
      pots: {
        title: 'POTS',
        criteria: 'ESC 2018/AAS-EFAS 2021',
        description: 'Hjärtfrekvens ökning ≥30 slag/min vid stående'
      }
    },
    startAssessment: 'Starta Bedömning'
  },

  quickScreen: {
    title: 'Snabbscreening Bedömning',
    description: '16 evidensbaserade frågor (92% känslighet)',
    questions: [
      'Upplever du svår trötthet som inte lindras av vila?',
      'Gör fysisk eller mental aktivitet dina symptom värre (Post-Exertional Malaise)?',
      'Har du icke-återställande sömn, oavsett längd?',
      'Upplever du kognitiva svårigheter (hjärndimma, minnesproblem)?',
      'Har du hjärtklappning eller snabb hjärtfrekvens, särskilt när du står?',
      'Upplever du yrsel eller svindel när du reser dig?',
      'Har du haft COVID-19 eller misstänkt COVID-19-infektion?',
      'Har dina symptom bestått i 3 månader eller längre?',
      'Upplever du muskel- eller ledsmärta utan svullnad?',
      'Har du frekventa huvudvärk eller förändringar i huvudvärksmönster?',
      'Upplever du temperaturreglering (känner dig för varm/kall)?',
      'Har du gastrointestinala symptom (illamående, uppblåsthet, tarmförändringar)?',
      'Upplever du andnöd eller andningssvårigheter?',
      'Har du märkt minskad träningstoleranse eller fysisk kapacitet?',
      'Upplever du känslighet för ljus, ljud eller beröring?',
      'Har du varit oförmögen att behålla din tidigare aktivitetsnivå?'
    ],
    categories: {
      core: 'Kärnsymptom',
      pem: 'Post-Exertional Malaise',
      cardiovascular: 'Kardiovaskulär',
      orthostatic: 'Ortostatisk',
      history: 'Sjukdomshistoria',
      duration: 'Varaktighet',
      pain: 'Smärta',
      neurological: 'Neurologisk',
      autonomic: 'Autonom',
      gi: 'Gastrointestinal',
      respiratory: 'Respiratorisk',
      functional: 'Funktionell',
      sensory: 'Sensorisk'
    },
    results: {
      complete: 'Snabbscreening Slutförd',
      riskAssessment: 'Riskbedömning',
      lowRisk: 'LÅG RISK för ME/CFS, Long COVID eller POTS',
      mediumRisk: 'MEDEL RISK för kroniska symptom',
      highRisk: 'HÖG RISK för ME/CFS, Long COVID eller POTS',
      totalResponses: 'Totala positiva svar',
      coreSymptoms: 'Kärnsymptom identifierade',
      pemPresent: 'Post-Exertional Malaise närvarande',
      covidHistory: 'COVID-19 historia',
      chronicSymptoms: 'Kroniska symptom (≥3 mån)',
      nextSteps: 'Nästa Steg',
      retake: 'Gör Om Screeningen'
    },
    nextStepsRecommendations: {
      high: [
        'Fullständig medicinsk bedömning rekommenderas',
        'Överväg remiss till ME/CFS specialist',
        'Genomför orthostatisk bedömning (ståtest)',
        'Uteslut differentialdiagnoser'
      ],
      medium: [
        'Fortsatt symptomövervakning',
        'Överväg ytterligare diagnostisk testning',
        'Uppföljning inom 4-6 veckor',
        'Symtomspecifik behandling'
      ],
      low: [
        'Rutinmässig uppföljning',
        'Symtomloggning om tillståndet förvärras',
        'Hälsosam livsstil och stresshantering',
        'Återkomst vid nya eller förvärrade symptom'
      ]
    }
  },

  redFlag: {
    title: 'Larmsignalskontroll',
    description: 'Identifiera symptom som kräver brådskande utvärdering',
    symptoms: {
      title: 'Larmsignalsymptom',
      description: 'Välj alla närvarande symptom',
      list: [
        'Bestående feber eller nattsvettningar',
        'Oavsiktlig viktminskning >10% på 6 månader',
        'Bröstsmärta vid ansträngning eller vila',
        'Progressiv andnöd',
        'Nya neurologiska symptom (svaghet, domning, kramper)',
        'Onormal blödning eller blåmärken'
      ]
    },
    routineLabs: {
      title: 'Rutinlaboratorier',
      description: 'Rekommenderade tester för ME/CFS, Long COVID och POTS utredning',
      categories: {
        basicMetabolic: {
          title: 'Grundläggande Metabolisk Panel',
          indication: 'Obligatoriskt för alla patienter',
          tests: [
            'Komplett blodstatus (CBC) med differential',
            'Omfattande metabolisk panel (CMP)',
            'Thyroidstimulerande hormon (TSH)',
            'Vitamin B12 och folatniåer',
            '25-hydroxi vitamin D'
          ]
        },
        endocrine: {
          title: 'Endokrin Screening',
          indication: 'Vid trötthet och metabola symptom',
          tests: [
            'Morgon cortisol',
            'HbA1c eller fastande glukos',
            'Fritt T4 (om onormal TSH)',
            'Ferritin och järnstatus'
          ]
        },
        nutritional: {
          title: 'Näringsämnesbrister',
          indication: 'Vid trötthet och kognitiva symptom',
          tests: [
            'Magnesium, fosfor, zink',
            'Vitamin B1 (tiamin)',
            'Folat i röda blodkroppar',
            'Protein och albumin'
          ]
        },
        autoimmune: {
          title: 'Autoimmun Screening',
          indication: 'Vid misstanke om autoimmun komponent',
          tests: [
            'Antikärnantikroppar (ANA)',
            'Reumatoid faktor (RF)',
            'Sänkningsreaktion (ESR)',
            'C-reaktivt protein (CRP)'
          ]
        },
        cardiac: {
          title: 'Hjärt Bedömning',
          indication: 'Vid hjärtklappning eller ortostatiska symptom',
          tests: [
            'EKG (12-avlednings)',
            'Ekokardiogram',
            'Holter-monitor eller event-monitor',
            'BNP eller NT-proBNP'
          ]
        },
        infectious: {
          title: 'Infektiös Screening',
          indication: 'Vid misstanke om pågående eller tidigare infektion',
          tests: [
            'Epstein-Barr virus (EBV) panel',
            'Cytomegalovirus (CMV) IgG/IgM',
            'SARS-CoV-2 antikroppar',
            'Lyme sjukdom serologiska test'
          ]
        }
      }
    },
    results: {
      complete: 'Larmsignalbedömning Slutförd',
      urgentEval: 'BRÅDSKANDE UTVÄRDERING KRÄVS',
      priorityTests: 'Prioritetstester',
      routineTests: 'Rutintester',
      noRedFlags: 'Inga larmsignaler identifierade',
      clinicalSupport: 'Kliniskt Beslutsstöd',
      urgent: 'Brådskande',
      priority: 'Prioritet',
      routine: 'Rutin',
      reassess: 'Ombedöm Larmsignaler',
      generateRecommendations: 'Generera Labrekommendationer'
    }
  },

  standTest: {
    title: 'NASA Lean Stand Test',
    description: 'Ortostatisk hjärtfrekvens och blodtrycksbedömning för POTS-diagnos',
    setup: {
      title: 'Testinställning',
      description: 'Välj din föredragna metod för hjärtfrekvensövervakning',
      manual: {
        title: 'Manuell Registrering',
        description: 'Använd egen utrustning och mata in värden manuellt',
        recommended: 'Rekommenderat för klinisk noggrannhet'
      },
      camera: {
        title: 'Kamerabaserad Detektion',
        description: 'Experimentell hjärtfrekvensdetektion via kamera',
        beta: 'Beta-funktion - kan vara mindre noggrann'
      },
      safety: 'Säkerhetsvarning: Avsluta testet omedelbart om du upplever svår yrsel, bröstsmärta eller svimning',
      startTest: 'Starta Test'
    },
    phases: {
      baseline: {
        name: 'Baseline (Vila)',
        instructions: 'Ligg ner bekvämt i 5 minuter före mätning'
      },
      standing: {
        name: 'Stående Fas',
        instructions: 'Stå upprätt och still mot en vägg i 10 minuter'
      }
    },
    recording: {
      title: 'Registrera Vitala Tecken',
      description: 'Mata in hjärtfrekvens och blodtryck vid specifika tidsintervall',
      baselineHR: 'Baseline Hjärtfrekvens',
      peakHR: 'Högsta Hjärtfrekvens',
      systolicBP: 'Systoliskt Blodtryck',
      diastolicBP: 'Diastoliskt Blodtryck',
      recordReading: 'Registrera Avläsning',
      recentReadings: 'Senaste Avläsningar'
    },
    results: {
      title: 'Stand Test Resultat',
      description: 'Ortostatisk hjärtfrekvens och blodtrycksanalys',
      baseline: 'Baseline (liggande)',
      peakStanding: 'Högsta stående',
      sustainedStanding: 'Varaktigt stående',
      averageHR: 'Genomsnittlig hjärtfrekvens',
      maxHR: 'Maximal hjärtfrekvens',
      hrIncrease: 'Hjärtfrekvensökning',
      potsCriteria: 'POTS Kriterier',
      potsMet: 'POTS-kriterier UPPFYLLDA',
      potsNotMet: 'POTS-kriterier ej uppfyllda',
      interpretation: 'Tolkning',
      nextSteps: 'Nästa Steg',
      repeatTest: 'Upprepa Test'
    },
    interpretations: {
      potsMet: [
        'POTS-diagnos är trolig baserat på hjärtfrekvensrespons',
        'Remiss till kardiolog eller autonom specialist rekommenderas',
        'Överväg POTS-subtypsanalys för riktad behandling',
        'Icke-farmakologisk behandling kan påbörjas (salt, vätskor, kompression)'
      ],
      potsNotMet: [
        'POTS-kriterier ej uppfyllda vid detta test',
        'Överväg alternativa orsaker till ortostatiska symptom',
        'Kan behöva upprepas vid symtomatisk episod',
        'Andra former av autonom dysfunktion kan finnas'
      ]
    },
    controls: {
      pause: 'Pausa',
      resume: 'Återuppta',
      stop: 'Stoppa'
    }
  },

  pem: {
    title: 'Post-Exertional Malaise Bedömning',
    description: 'DePaul PEM Frågeformulär för ME/CFS diagnos',
    about: {
      title: 'Om Post-Exertional Malaise (PEM)',
      description: 'PEM är kärnsymtomet vid ME/CFS, karakteriserat av försämring av symptom efter fysisk, kognitiv eller emotionell ansträngning. Detta frågeformulär hjälper till att kvantifiera PEM-svårighetsgrad och frekvens.'
    },
    questions: {
      frequency: {
        question: 'Hur ofta upplever du en försämring av symptom efter fysisk aktivitet?',
        description: 'Omfattar alla typer av fysisk ansträngning',
        options: [
          'Aldrig',
          'Sällan (mindre än 25% av tiden)',
          'Ibland (25-50% av tiden)',
          'Ofta (50-75% av tiden)',
          'Alltid eller nästan alltid (mer än 75% av tiden)'
        ]
      },
      mentalFrequency: {
        question: 'Hur ofta upplever du en försämring av symptom efter mental aktivitet?',
        description: 'Omfattar kognitiv ansträngning, koncentration, problemlösning',
        options: [
          'Aldrig',
          'Sällan (mindre än 25% av tiden)',
          'Ibland (25-50% av tiden)',
          'Ofta (50-75% av tiden)',
          'Alltid eller nästan alltid (mer än 75% av tiden)'
        ]
      },
      onsetTime: {
        question: 'Hur snabbt efter aktivitet börjar dina symptom förvärras?',
        options: [
          'Symptomförvärring inträffar inte',
          'Omedelbart (inom 1 timme)',
          'Fördröjd (2-12 timmar senare)',
          'Nästa dag',
          'Flera dagar senare'
        ]
      },
      severity: {
        question: 'Hur svår är försämringen av dina symptom efter aktivitet?',
        options: [
          'Ingen försämring',
          'Lindrig - något värre än före aktivitet',
          'Måttlig - märkbart värre men hanterlig',
          'Svår - betydligt värre, svårt att fungera',
          'Mycket svår - oförmögen att fungera, sängbunden'
        ]
      },
      recoveryTime: {
        question: 'Hur lång tid tar det vanligtvis för dina symptom att återgå till baseline efter aktivitet?',
        options: [
          'Ingen återhämtningstid behövs',
          'Några timmar',
          'Ungefär en dag',
          'Flera dagar (2-6 dagar)',
          'En vecka eller mer'
        ]
      }
    },
    results: {
      complete: 'PEM Bedömning Slutförd',
      description: 'Post-Exertional Malaise utvärdering baserad på DePaul kriterier',
      status: 'PEM Status',
      present: 'Post-Exertional Malaise är sannolikt närvarande',
      absent: 'Post-Exertional Malaise är osannolikt',
      severityLevels: {
        none: 'Ingen',
        mild: 'Lindrig PEM',
        moderate: 'Måttlig PEM',
        severe: 'Svår PEM'
      },
      clinicalInterpretation: 'Klinisk Tolkning',
      recommendations: {
        severe: [
          'Strikt aktivitetsreglering (pacing) väsentlig',
          'Överväg funktionsnedsättningsutvärdering',
          'ME/CFS specialistklinik remiss'
        ],
        moderate: [
          'Implementera försiktig aktivitetsreglering',
          'Övervaka för symptomprogression',
          'Överväg arbetsterapi'
        ],
        mild: [
          'Börja försiktig aktivitetsreglering',
          'Utbildning om PEM-igenkänning',
          'Regelbunden symptomövervakning'
        ],
        none: [
          'PEM ej signifikant närvarande',
          'Överväg andra diagnoser',
          'Standard aktivitet som tolereras'
        ]
      },
      important: 'Viktigt: PEM är det karakteristiska symptomet vid ME/CFS. Om närvarande, undvik aktiviteter som konsekvent orsakar symptomförvärring. Energihantering och pacing är viktiga behandlingsstrategier.',
      retake: 'Gör Om Bedömning'
    }
  },

  criteria: {
    title: 'Kriterieanalys',
    description: 'Tillämpa CDC, NASEM, ESC, WHO diagnostiska kriterier för definitiv bestämning',
    mecfs: {
      title: 'ME/CFS Kriterier (CDC/NASEM 2015)',
      description: 'Kräver betydande trötthet, PEM, icke-återställande sömn, OCH kognitiva störningar ELLER ortostatisk intolerans',
      criteria: [
        'Betydande minskning eller begränsning av aktivitetsnivåer som varar ≥6 månader',
        'Post-exertional malaise (PEM) närvarande',
        'Icke-återställande sömn',
        'Kognitiva störningar (hjärndimma)',
        'Ortostatisk intolerans ELLER autonom dysfunktion'
      ]
    },
    longCovid: {
      title: 'Long COVID Kriterier (WHO/NASEM 2024)',
      description: 'Post-akuta följder av SARS-CoV-2-infektion med persistenta multisystemsymptom',
      criteria: [
        'Bekräftad eller sannolik SARS-CoV-2-infektion',
        'Symptom kvarstår ≥3 månader från akut sjukdom',
        'Multisystemsymptom som påverkar daglig funktion',
        'Symptom ej förklarade av alternativ diagnos'
      ],
      timing: {
        confirmed: 'Bekräftad av test',
        probable: 'Sannolik baserat på symptom/exponering',
        suspected: 'Misstänkt baserat på timing'
      }
    },
    pots: {
      title: 'POTS Kriterier (ESC 2018/AAS-EFAS 2021)',
      description: 'Hjärtfrekvensökning ≥30 slag/min inom 10 minuter av stående, med symptom men utan ortostatisk hypotension',
      criteria: [
        'Hjärtfrekvensökning ≥30 slag/min inom 10 minuter av stående',
        'Varaktig hjärtfrekvens ≥120 slag/min under stående',
        'Ortostatiska symptom (yrsel, hjärtklappning, trötthet)',
        'Symptom närvarande i ≥3 månader',
        'Frånvaro av ortostatisk hypotension'
      ]
    },
    results: {
      complete: 'Diagnostiska Kriterier Bedömning Slutförd',
      description: 'Baserat på CDC, NASEM, ESC, WHO riktlinjer',
      diagnosesMet: 'Diagnoser Som Uppfyller Kriterier',
      criteriaMet: 'KRITERIER UPPFYLLDA',
      clinicalRecommendations: 'Kliniska Rekommendationer',
      mecfsManagement: [
        'Implementera aktivitetsreglering och energihantering',
        'Undvik graderad träningsterapin (GET)',
        'Överväg symptomriktade behandlingar',
        'ME/CFS specialistklinik remiss om tillgänglig'
      ],
      longCovidManagement: [
        'Multidisciplinär approach för symptomhantering',
        'Long COVID klinik remiss om tillgänglig',
        'Övervaka för förbättring över tid',
        'Behandla individuella symptom (trötthet, kognitiva, respiratoriska)'
      ],
      potsManagement: [
        'Fortsätt till subtypbestämning för riktad terapi',
        'Icke-farmakologiskt: salt, vätskor, kompressionsstumpor',
        'Överväg kardiologi eller autonom specialist remiss',
        'Gradvis träningsrekonditionering när lämpligt'
      ],
      reassess: 'Ombedöm Kriterier',
      downloadReport: 'Ladda Ner Rapport',
      potsSubtype: 'POTS Subtypanalys'
    }
  },

  subtype: {
    title: 'POTS Subtyp & Behandlings Rådgivare',
    description: 'Bestäm POTS-subtyp för personaliserade behandlingsrekommendationer',
    patientInfo: {
      title: 'Patientinformation',
      description: 'Grundläggande patientuppgifter för behandlingsplanering',
      comorbidities: 'Relevanta Komorbiditeter (markera alla tillämpliga)'
    },
    subtypes: {
      hypovolemic: {
        name: 'Hypovolemisk POTS',
        description: 'Låg blodvolym orsakar ortostatisk intolerans',
        criteria: [
          'Låg-normal blodtryck (<110/70)',
          'Överdriven törst',
          'Saltbegär',
          'Tecken på volymutarmning',
          'Förhöjt renin/aldosteron (om tillgängligt)'
        ],
        treatments: {
          nonPharmacological: [
            'Öka vätskeintag till 2,5-3L dagligen',
            'Öka natriumintag till 8-10g dagligen',
            'Kompressionskläder (30-40 mmHg)',
            'Gradvis träningsrekonditionering'
          ],
          firstLine: [
            'Fludrokortison 0,1-0,2mg dagligen',
            'Salttabletter om kostintag otillräckligt'
          ],
          secondLine: [
            'Desmopressin (DDAVP) för svåra fall',
            'Erytropoietin vid anemi'
          ]
        }
      },
      neuropathic: {
        name: 'Neuropatisk POTS',
        description: 'Perifer autonom neuropati som påverkar blodkärlskontroll',
        criteria: [
          'Distala småfiberneuropatisymptom',
          'GI-dysfunktion (gastropares, obstipation)',
          'Anhidros eller minskad svettning',
          'Pupillavvikelser',
          'Historia av diabetes eller autoimmun sjukdom'
        ],
        treatments: {
          nonPharmacological: [
            'Kompressionskläder',
            'Benhöjning',
            'Undvik värmeexponering',
            'Små frekventa måltider'
          ],
          firstLine: [
            'Midodrin 2,5-10mg TID',
            'Pyridostigmin 30-60mg TID'
          ],
          secondLine: [
            'Droxidopa (om tillgängligt)',
            'Alfalipoinsyra för neuropati',
            'IVIG för autoimmuna fall'
          ]
        }
      },
      hyperadrenergic: {
        name: 'Hyperadrenerg POTS',
        description: 'Överdriven sympatisk nervsystemaktivering',
        criteria: [
          'Hypertension vid stående',
          'Ångest, panikattacker, tremor',
          'Migrän huvudvärk',
          'Kalla händer och fötter',
          'Förhöjt stående noradrenalin >600 pg/mL'
        ],
        treatments: {
          nonPharmacological: [
            'Stressreduktionstekniker',
            'Undvik stimulantia (koffein)',
            'Regelbundet sömnschema',
            'Skonsam träning'
          ],
          firstLine: [
            'Propranolol 10-40mg BID',
            'Klonidin 0,1-0,2mg BID'
          ],
          secondLine: [
            'Ivabradin 2,5-7,5mg BID',
            'Metyldopa',
            'Labetalol för hypertension'
          ]
        }
      },
      autoimmune: {
        name: 'Autoimmun POTS',
        description: 'Autoimmunmedierad autonom dysfunktion',
        criteria: [
          'Personlig/familjehistoria av autoimmun sjukdom',
          'Snabb debut av symptom',
          'Viral sjukdomsutlösare (EBV, COVID, etc.)',
          'Positiva autonoma antikroppar (om testade)',
          'Andra autoimmuna markörer positiva'
        ],
        treatments: {
          nonPharmacological: [
            'Standard POTS-åtgärder',
            'Undvik infektionsutlösare',
            'Stresshantering',
            'Antiinflammatorisk kost'
          ],
          firstLine: [
            'Standard POTS-mediciner',
            'Prova kortikosteroider'
          ],
          secondLine: [
            'IVIG-terapi',
            'Immunsuppressiva medel',
            'Plasmaferes för svåra fall'
          ]
        }
      }
    },
    results: {
      complete: 'POTS Subtypanalys Slutförd',
      description: 'Personaliserade behandlingsrekommendationer baserade på subtypbedömning',
      primary: 'Primär',
      likelihood: 'sannolikhet',
      criteriaMetTitle: 'Kriterier Uppfyllda',
      allSubtypeScores: 'Alla Subtyppoäng',
      nonPharmacological: 'Icke-Farmakologisk',
      firstLineRx: 'Första Linjen Rx',
      secondLineOptions: 'Andra Linjens Alternativ',
      mixedSubtype: 'Blandade Subtypöverväganden: Denna patient visar också funktioner hos flera subtyper. Överväg kombinationsterapiansatser och övervaka respons på initial behandling.',
      clinicalPearls: 'Kliniska Pärlor',
      pearls: [
        'Börja med icke-farmakologiska interventioner för alla POTS-subtyper',
        'Börja mediciner i låga doser och titrera långsamt',
        'Övervaka respons och justera behandling baserat på symptomförbättring',
        'Överväg specialistremiss för komplexa fall eller behandlingsmisslyckanden',
        'Ombedöm subtyp om behandlingsrespons är dålig'
      ],
      reassess: 'Ombedöm Subtyp',
      downloadPlan: 'Ladda Ner Behandlingsplan'
    }
  },

  newPatient: {
    title: 'Ny Patientbedömning',
    description: 'Intelligent guidning genom utvärdering för ME/CFS, Long COVID och POTS',
    demographics: {
      title: 'Patientinformation',
      description: 'Grundläggande demografi för klinisk dokumentation',
      step: 'Steg 1 av 7: Patientdemografi',
      age: 'Patientålder',
      gender: 'Kön',
      clinicianName: 'Klinikernamn',
      patientId: 'Patient-ID/MRN',
      startAssessment: 'Starta Bedömning'
    },
    progress: {
      step1: 'Demografi',
      step2: 'Snabbscreening',
      step3: 'Larmsignaler',
      step4: 'Ståtest',
      step5: 'PEM Quest',
      step6: 'Kriterier',
      step7: 'Sammanfattning'
    },
    redFlags: {
      title: 'Larmsignalbedömning',
      description: 'Kontrollera för symptom som kräver brådskande utvärdering',
      selectSymptoms: 'Välj alla närvarande symptom',
      continueAssessment: 'Fortsätt Bedömning'
    },
    standTest: {
      title: 'Ortostatisk Bedömning',
      description: 'Registrera baseline och stående hjärtfrekvenser',
      measurements: 'Hjärtfrekvensmätningar',
      measurementDescription: 'Ange hjärtfrekvens efter 5 minuters liggande och högsta hjärtfrekvens inom 10 minuter av stående',
      baselineHR: 'Baseline HR (liggande)',
      peakHR: 'Högsta Stående HR',
      hrIncrease: 'HR Ökning',
      potsCriteria: 'POTS Kriterier',
      continueToPEM: 'Fortsätt till PEM Bedömning'
    },
    pemAssessment: {
      title: 'PEM Bedömning',
      description: 'Post-Exertional Malaise utvärdering',
      finalizeAssessment: 'Slutför Bedömning'
    },
    processing: {
      title: 'Bearbetar Diagnostiska Kriterier...',
      description: 'Analyserar svar mot CDC, NASEM, ESC och WHO riktlinjer'
    },
    results: {
      title: 'Patientbedömning Slutförd',
      description: 'Omfattande klinisk utvärdering med SOAP-dokumentation',
      primary: 'Primär',
      noDefinitiveDiagnoses: 'Inga Definitiva Diagnoser',
      keyResults: 'Viktiga Bedömningsresultat',
      riskLevel: 'Risknivå',
      screeningScore: 'Screeningpoäng',
      pemPresent: 'PEM Närvarande',
      potsCriteria: 'POTS Kriterier',
      redFlags: 'Larmsignaler',
      priority: 'Prioritet',
      newAssessment: 'Ny Bedömning',
      downloadSOAP: 'Ladda Ner SOAP-not'
    }
  },

  conditions: {
    mecfs: {
      name: 'ME/CFS',
      fullName: 'Myalgisk Encefalomyelit/Kroniskt Trötthetssyndrom',
      icdCode: 'G93.32',
      criteria: [
        'Betydande trötthet ≥6 månader',
        'Post-exertional malaise',
        'Icke-återställande sömn',
        'Kognitiva störningar eller ortostatisk intolerans'
      ]
    },
    longCovid: {
      name: 'Long COVID',
      fullName: 'Post-COVID-19 Tillstånd',
      icdCode: 'U09.9',
      criteria: [
        'Bekräftad eller sannolik SARS-CoV-2-infektion',
        'Symptom ≥3 månader från akut episod',
        'Multisystemsymptom',
        'Funktionell påverkan'
      ]
    },
    pots: {
      name: 'POTS',
      fullName: 'Posturalt Ortostatiskt Takykardisyndrom',
      icdCode: 'I47.1',
      criteria: [
        'HR ökning ≥30 slag/min vid stående',
        'Varaktig HR ≥120 slag/min',
        'Ortostatiska symptom ≥3 månader',
        'Ingen ortostatisk hypotension'
      ]
    }
  },

  navigation: {
    assessmentModules: 'Bedömningsmoduler',
    guidelines: 'Riktlinjer',
    diagnosticTools: 'Diagnostiska Verktyg',
    clinicalGuidelines: 'Kliniska Riktlinjer & Referenser',
    guidelinesDescription: 'Evidensbaserade riktlinjer som används i VisibleDx diagnostiska algoritmer',
    assessmentModulesSection: 'Bedömningsmoduler',
    guidelinesSection: 'Riktlinjer & Referenser',
    moreGuidelines: 'fler riktlinjer'
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

  disclaimer: 'Detta verktyg är endast för utbildningsändamål och ersätter inte professionell medicinsk bedömning eller klinisk utvärdering',

  footer: {
    about: {
      title: 'Om VisibleDx',
      description: 'VisibleDx är ett evidensbaserat diagnostiskt beslutstödverktyg för ME/CFS, Long COVID och POTS. Det implementerar validerade kriterier från ledande medicinska organisationer för att hjälpa kliniker med systematisk utvärdering.',
      badges: {
        sensitivity: '94% Känslighet',
        evidenceBased: 'Evidensbaserat',
        openSource: 'Open Source'
      }
    },
    evidence: {
      title: 'Evidensbas',
      guidelines: [
        'CDC ME/CFS Falldefinition (2015)',
        'NASEM ME/CFS Rapport (2015)',
        'WHO Long COVID Definition (2021)',
        'ESC POTS Riktlinjer (2018)',
        'AAS/EFAS POTS Konsensus (2021)',
        'NASA Lean Stand Test Protokoll'
      ]
    },
    notes: {
      title: 'Viktiga Anteckningar',
      items: [
        'Inte en ersättning för klinisk bedömning',
        'Kräver bekräftelse med fysisk undersökning',
        'Överväg patienthistoria och sammanhang',
        'Uteslut röda flaggor innan diagnos',
        'Konsultera specialister för komplexa fall',
        'Övervaka patientrespons på behandling'
      ]
    },
    bottom: {
      version: 'VisibleDx v1.0 - Utbildningsverktyg',
      copyright: '© 2024 VisibleDx',
      audienceLabel: 'För Hälso- och sjukvårdspersonal',
      badge: 'Forskning & Utbildning'
    },
    technical: 'Baserat på peer-reviewed litteratur och validerade diagnostiska kriterier. Känslighetsdata från kliniska valideringsstudier. Konsultera alltid aktuella riktlinjer och specialistrekommendationer för komplexa fall.'
  }
}