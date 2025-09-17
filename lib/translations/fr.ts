import { Translation } from './types'

export const fr: Translation = {
  app: {
    title: 'VisibleDx',
    subtitle: 'Plateforme Diagnostique ME/CFS, Long COVID & POTS',
    tagline: 'Outil diagnostique basé sur les preuves pour ME/CFS, Long COVID et POTS',
    backToDashboard: 'Retour au Tableau de Bord'
  },

  common: {
    yes: 'Oui',
    no: 'Non',
    next: 'Suivant',
    previous: 'Précédent',
    continue: 'Continuer',
    complete: 'Terminer',
    cancel: 'Annuler',
    save: 'Enregistrer',
    download: 'Télécharger',
    loading: 'Chargement...',
    processing: 'Traitement...',
    error: 'Erreur',
    success: 'Succès',
    retry: 'Réessayer',
    close: 'Fermer',
    age: 'Âge',
    gender: 'Genre',
    male: 'Homme',
    female: 'Femme',
    other: 'Autre',
    question: 'Question',
    of: 'de',
    step: 'Étape',
    minute: 'minute',
    minutes: 'minutes',
    bpm: 'bpm',
    criteria: 'critères',
    met: 'Satisfait',
    notMet: 'Non satisfait',
    high: 'Élevé',
    medium: 'Moyen',
    low: 'Faible',
    none: 'Aucun',
    mild: 'Léger',
    moderate: 'Modéré',
    severe: 'Sévère',
    confidence: 'Confiance',
    sensitivity: 'Sensibilité',
    score: 'Score',
    results: 'Résultats',
    recommendations: 'Recommandations',
    clinician: 'Clinicien',
    patientId: 'ID Patient',
    required: 'Requis',
    optional: 'Optionnel'
  },

  dashboard: {
    smartAssessment: {
      title: 'Évaluation Intelligente des Patients',
      description: 'Guidance intelligente à travers le processus diagnostique',
      autoRouting: 'Routage automatique basé sur l\'évaluation des risques',
      soapNotes: 'Notes SOAP automatiques',
      icdCodes: 'Codes de diagnostic ICD-10 inclus',
      startNew: 'Démarrer Nouvelle Évaluation'
    },
    modules: {
      quickScreen: {
        title: 'Dépistage Rapide',
        description: '16 questions pour l\'évaluation initiale des risques (92% sensibilité)'
      },
      redFlag: {
        title: 'Vérification Drapeaux Rouges',
        description: 'Identifier les symptômes nécessitant une évaluation urgente'
      },
      standTest: {
        title: 'Test de Position Debout',
        description: 'Test NASA Lean Stand pour le diagnostic POTS'
      },
      pemQuest: {
        title: 'Questionnaire PEM',
        description: 'Évaluation DePaul Post-Exertional Malaise'
      },
      criteriaEngine: {
        title: 'Moteur de Critères',
        description: 'Critères diagnostiques CDC, NASEM, ESC, WHO'
      },
      subtypeAdvisor: {
        title: 'Conseiller de Sous-types',
        description: 'Sous-type POTS et recommandations de traitement'
      }
    },
    stats: {
      diagnosticDelay: '4+ ans de retard diagnostique moyen',
      doctorsConsulted: '7+ médecins consultés avant le diagnostic',
      sensitivityValidated: '92% sensibilité (validée)'
    },
    algorithm: {
      title: 'Algorithme Diagnostique',
      mecfs: {
        title: 'ME/CFS',
        criteria: 'CDC/NASEM 2015',
        description: 'Nécessite PEM + 3 des 4 critères principaux'
      },
      longCovid: {
        title: 'Long COVID',
        criteria: 'WHO/NASEM 2024',
        description: 'Séquelles post-aiguës du SARS-CoV-2'
      },
      pots: {
        title: 'POTS',
        criteria: 'ESC 2018/AAS-EFAS 2021',
        description: 'Augmentation fréquence cardiaque ≥30 bpm en position debout'
      }
    },
    startAssessment: 'Démarrer l\'Évaluation'
  },

  quickScreen: {
    title: 'Évaluation de Dépistage Rapide',
    description: '16 questions basées sur les preuves (92% sensibilité)',
    questions: [
      'Ressentez-vous une fatigue sévère qui n\'est pas soulagée par le repos ?',
      'L\'activité physique ou mentale aggrave-t-elle vos symptômes (Malaise Post-Effort) ?',
      'Avez-vous un sommeil non réparateur, quelle que soit la durée ?',
      'Ressentez-vous des difficultés cognitives (brouillard cérébral, problèmes de mémoire) ?',
      'Avez-vous des palpitations ou une fréquence cardiaque rapide, surtout en position debout ?',
      'Ressentez-vous des étourdissements ou une sensation de tête légère en vous levant ?',
      'Avez-vous eu la COVID-19 ou une infection COVID-19 suspectée ?',
      'Vos symptômes persistent-ils depuis 3 mois ou plus ?',
      'Ressentez-vous des douleurs musculaires ou articulaires sans gonflement ?',
      'Avez-vous des maux de tête fréquents ou des changements dans les schémas de maux de tête ?',
      'Ressentez-vous une dysrégulation thermique (sensation d\'avoir trop chaud/froid) ?',
      'Avez-vous des symptômes gastro-intestinaux (nausées, ballonnements, changements intestinaux) ?',
      'Ressentez-vous un essoufflement ou des difficultés respiratoires ?',
      'Avez-vous remarqué une diminution de la tolérance à l\'exercice ou de la capacité physique ?',
      'Ressentez-vous une sensibilité à la lumière, au son ou au toucher ?',
      'Avez-vous été incapable de maintenir votre niveau d\'activité antérieur ?'
    ],
    categories: {
      core: 'Symptôme Principal',
      pem: 'Malaise Post-Effort',
      cardiovascular: 'Cardiovasculaire',
      orthostatic: 'Orthostatique',
      history: 'Antécédents Médicaux',
      duration: 'Durée',
      pain: 'Douleur',
      neurological: 'Neurologique',
      autonomic: 'Autonome',
      gi: 'Gastro-intestinal',
      respiratory: 'Respiratoire',
      functional: 'Fonctionnel',
      sensory: 'Sensoriel'
    },
    results: {
      complete: 'Dépistage Rapide Terminé',
      riskAssessment: 'Évaluation des Risques',
      lowRisk: 'FAIBLE RISQUE pour ME/CFS, Long COVID ou POTS',
      mediumRisk: 'RISQUE MOYEN pour symptômes chroniques',
      highRisk: 'RISQUE ÉLEVÉ pour ME/CFS, Long COVID ou POTS',
      totalResponses: 'Total réponses positives',
      coreSymptoms: 'Symptômes principaux identifiés',
      pemPresent: 'Malaise Post-Effort présent',
      covidHistory: 'Antécédents COVID-19',
      chronicSymptoms: 'Symptômes chroniques (≥3 mois)',
      nextSteps: 'Prochaines Étapes',
      retake: 'Refaire le Dépistage'
    },
    nextStepsRecommendations: {
      high: [
        'Évaluation médicale complète recommandée',
        'Considérer une référence à un spécialiste ME/CFS',
        'Effectuer une évaluation orthostatique (test debout)',
        'Exclure les diagnostics différentiels'
      ],
      medium: [
        'Surveillance continue des symptômes',
        'Considérer des tests diagnostiques supplémentaires',
        'Suivi dans 4-6 semaines',
        'Traitement spécifique aux symptômes'
      ],
      low: [
        'Suivi de routine',
        'Journalisation des symptômes si condition s\'aggrave',
        'Mode de vie sain et gestion du stress',
        'Retour en cas de symptômes nouveaux ou aggravés'
      ]
    }
  },

  redFlag: {
    title: 'Vérification Drapeaux Rouges',
    description: 'Identifier les symptômes nécessitant une évaluation urgente',
    symptoms: {
      title: 'Symptômes Drapeaux Rouges',
      description: 'Sélectionner tous les symptômes présents',
      list: [
        'Fièvre persistante ou sueurs nocturnes',
        'Perte de poids involontaire >10% en 6 mois',
        'Douleur thoracique à l\'effort ou au repos',
        'Essoufflement progressif',
        'Nouveaux symptômes neurologiques (faiblesse, engourdissement, convulsions)',
        'Saignement anormal ou ecchymoses'
      ]
    },
    routineLabs: {
      title: 'Laboratoires de Routine',
      description: 'Tests recommandés pour l\'investigation ME/CFS, Long COVID et POTS',
      categories: {
        basicMetabolic: {
          title: 'Panel Métabolique de Base',
          indication: 'Obligatoire pour tous les patients',
          tests: [
            'Numération formule sanguine complète (NFS) avec différentielle',
            'Panel métabolique complet (PMC)',
            'Hormone stimulant la thyroïde (TSH)',
            'Niveaux vitamine B12 et folate',
            '25-hydroxy vitamine D'
          ]
        },
        endocrine: {
          title: 'Dépistage Endocrinien',
          indication: 'En cas de fatigue et symptômes métaboliques',
          tests: [
            'Cortisol matinal',
            'HbA1c ou glucose à jeun',
            'T4 libre (si TSH anormale)',
            'Ferritine et statut du fer'
          ]
        },
        nutritional: {
          title: 'Carences Nutritionnelles',
          indication: 'En cas de fatigue et symptômes cognitifs',
          tests: [
            'Magnésium, phosphore, zinc',
            'Vitamine B1 (thiamine)',
            'Folate des globules rouges',
            'Protéine et albumine'
          ]
        },
        autoimmune: {
          title: 'Dépistage Auto-immun',
          indication: 'En cas de composante auto-immune suspectée',
          tests: [
            'Anticorps antinucléaires (ANA)',
            'Facteur rhumatoïde (FR)',
            'Vitesse de sédimentation (VS)',
            'Protéine C réactive (CRP)'
          ]
        },
        cardiac: {
          title: 'Évaluation Cardiaque',
          indication: 'En cas de palpitations ou symptômes orthostatiques',
          tests: [
            'ECG (12 dérivations)',
            'Échocardiogramme',
            'Holter ou moniteur d\'événements',
            'BNP ou NT-proBNP'
          ]
        },
        infectious: {
          title: 'Dépistage Infectieux',
          indication: 'En cas d\'infection en cours ou antérieure suspectée',
          tests: [
            'Panel virus Epstein-Barr (EBV)',
            'Cytomégalovirus (CMV) IgG/IgM',
            'Anticorps SARS-CoV-2',
            'Tests sérologiques maladie de Lyme'
          ]
        }
      }
    },
    results: {
      complete: 'Évaluation Drapeaux Rouges Terminée',
      urgentEval: 'ÉVALUATION URGENTE REQUISE',
      priorityTests: 'Tests Prioritaires',
      routineTests: 'Tests de Routine',
      noRedFlags: 'Aucun drapeau rouge identifié',
      clinicalSupport: 'Support Décisionnel Clinique',
      urgent: 'Urgent',
      priority: 'Priorité',
      routine: 'Routine',
      reassess: 'Réévaluer Drapeaux Rouges',
      generateRecommendations: 'Générer Recommandations Laboratoire'
    }
  },

  standTest: {
    title: 'Test NASA Lean Stand',
    description: 'Évaluation fréquence cardiaque et pression artérielle orthostatique pour diagnostic POTS',
    setup: {
      title: 'Configuration du Test',
      description: 'Choisissez votre méthode préférée pour la surveillance de la fréquence cardiaque',
      manual: {
        title: 'Enregistrement Manuel',
        description: 'Utilisez votre propre équipement et saisissez les valeurs manuellement',
        recommended: 'Recommandé pour la précision clinique'
      },
      camera: {
        title: 'Détection par Caméra',
        description: 'Détection expérimentale de la fréquence cardiaque via caméra',
        beta: 'Fonction bêta - peut être moins précise'
      },
      safety: 'Avertissement de sécurité : Arrêtez le test immédiatement si vous ressentez des étourdissements sévères, douleur thoracique ou évanouissement',
      startTest: 'Démarrer le Test'
    },
    phases: {
      baseline: {
        name: 'Ligne de Base (Repos)',
        instructions: 'Allongez-vous confortablement pendant 5 minutes avant la mesure'
      },
      standing: {
        name: 'Phase Debout',
        instructions: 'Tenez-vous debout et immobile contre un mur pendant 10 minutes'
      }
    },
    recording: {
      title: 'Enregistrer Signes Vitaux',
      description: 'Saisir fréquence cardiaque et pression artérielle à intervalles spécifiques',
      baselineHR: 'Fréquence Cardiaque de Base',
      peakHR: 'Fréquence Cardiaque Maximale',
      systolicBP: 'Pression Artérielle Systolique',
      diastolicBP: 'Pression Artérielle Diastolique',
      recordReading: 'Enregistrer Lecture',
      recentReadings: 'Lectures Récentes'
    },
    results: {
      title: 'Résultats Test Debout',
      description: 'Analyse fréquence cardiaque et pression artérielle orthostatique',
      baseline: 'Ligne de base (allongé)',
      peakStanding: 'Pic debout',
      sustainedStanding: 'Debout soutenu',
      averageHR: 'Fréquence cardiaque moyenne',
      maxHR: 'Fréquence cardiaque maximale',
      hrIncrease: 'Augmentation fréquence cardiaque',
      potsCriteria: 'Critères POTS',
      potsMet: 'Critères POTS SATISFAITS',
      potsNotMet: 'Critères POTS non satisfaits',
      interpretation: 'Interprétation',
      nextSteps: 'Prochaines Étapes',
      repeatTest: 'Répéter le Test'
    },
    interpretations: {
      potsMet: [
        'Diagnostic POTS probable basé sur la réponse de fréquence cardiaque',
        'Référence à un cardiologue ou spécialiste autonome recommandée',
        'Considérer l\'analyse de sous-type POTS pour traitement ciblé',
        'Traitement non pharmacologique peut être initié (sel, fluides, compression)'
      ],
      potsNotMet: [
        'Critères POTS non satisfaits lors de ce test',
        'Considérer causes alternatives des symptômes orthostatiques',
        'Peut nécessiter répétition lors d\'épisode symptomatique',
        'Autres formes de dysfonction autonome peuvent être présentes'
      ]
    },
    controls: {
      pause: 'Pause',
      resume: 'Reprendre',
      stop: 'Arrêter'
    }
  },

  pem: {
    title: 'Évaluation Malaise Post-Effort',
    description: 'Questionnaire DePaul PEM pour diagnostic ME/CFS',
    about: {
      title: 'À propos du Malaise Post-Effort (PEM)',
      description: 'Le PEM est le symptôme principal du ME/CFS, caractérisé par l\'aggravation des symptômes après un effort physique, cognitif ou émotionnel. Ce questionnaire aide à quantifier la sévérité et la fréquence du PEM.'
    },
    questions: {
      frequency: {
        question: 'À quelle fréquence ressentez-vous une aggravation des symptômes après une activité physique ?',
        description: 'Inclut tous types d\'effort physique',
        options: [
          'Jamais',
          'Rarement (moins de 25% du temps)',
          'Parfois (25-50% du temps)',
          'Souvent (50-75% du temps)',
          'Toujours ou presque toujours (plus de 75% du temps)'
        ]
      },
      mentalFrequency: {
        question: 'À quelle fréquence ressentez-vous une aggravation des symptômes après une activité mentale ?',
        description: 'Inclut effort cognitif, concentration, résolution de problèmes',
        options: [
          'Jamais',
          'Rarement (moins de 25% du temps)',
          'Parfois (25-50% du temps)',
          'Souvent (50-75% du temps)',
          'Toujours ou presque toujours (plus de 75% du temps)'
        ]
      },
      onsetTime: {
        question: 'Combien de temps après l\'activité vos symptômes commencent-ils à s\'aggraver ?',
        options: [
          'L\'aggravation des symptômes ne se produit pas',
          'Immédiatement (dans l\'heure)',
          'Retardé (2-12 heures plus tard)',
          'Le lendemain',
          'Plusieurs jours plus tard'
        ]
      },
      severity: {
        question: 'Quelle est la sévérité de l\'aggravation de vos symptômes après l\'activité ?',
        options: [
          'Aucune aggravation',
          'Légère - un peu pire qu\'avant l\'activité',
          'Modérée - nettement pire mais gérable',
          'Sévère - significativement pire, difficile de fonctionner',
          'Très sévère - incapable de fonctionner, alité'
        ]
      },
      recoveryTime: {
        question: 'Combien de temps faut-il généralement pour que vos symptômes reviennent à la normale après l\'activité ?',
        options: [
          'Aucun temps de récupération nécessaire',
          'Quelques heures',
          'Environ un jour',
          'Plusieurs jours (2-6 jours)',
          'Une semaine ou plus'
        ]
      }
    },
    results: {
      complete: 'Évaluation PEM Terminée',
      description: 'Évaluation Malaise Post-Effort basée sur les critères DePaul',
      status: 'Statut PEM',
      present: 'Malaise Post-Effort probablement présent',
      absent: 'Malaise Post-Effort improbable',
      severityLevels: {
        none: 'Aucun',
        mild: 'PEM Léger',
        moderate: 'PEM Modéré',
        severe: 'PEM Sévère'
      },
      clinicalInterpretation: 'Interprétation Clinique',
      recommendations: {
        severe: [
          'Gestion stricte de l\'activité (pacing) essentielle',
          'Considérer évaluation d\'invalidité',
          'Référence clinique spécialisée ME/CFS'
        ],
        moderate: [
          'Implémenter gestion prudente de l\'activité',
          'Surveiller progression des symptômes',
          'Considérer ergothérapie'
        ],
        mild: [
          'Commencer gestion prudente de l\'activité',
          'Éducation sur reconnaissance PEM',
          'Surveillance régulière des symptômes'
        ],
        none: [
          'PEM pas significativement présent',
          'Considérer autres diagnostics',
          'Activité standard comme tolérée'
        ]
      },
      important: 'Important : Le PEM est le symptôme caractéristique du ME/CFS. Si présent, évitez les activités qui causent systématiquement l\'aggravation des symptômes. La gestion énergétique et le pacing sont des stratégies de traitement importantes.',
      retake: 'Refaire l\'Évaluation'
    }
  },

  criteria: {
    title: 'Moteur de Critères',
    description: 'Appliquer les critères diagnostiques CDC, NASEM, ESC, WHO pour détermination définitive',
    mecfs: {
      title: 'Critères ME/CFS (CDC/NASEM 2015)',
      description: 'Nécessite fatigue substantielle, PEM, sommeil non réparateur, ET troubles cognitifs OU intolérance orthostatique',
      criteria: [
        'Réduction ou limitation substantielle des niveaux d\'activité durant ≥6 mois',
        'Malaise post-effort (PEM) présent',
        'Sommeil non réparateur',
        'Troubles cognitifs (brouillard cérébral)',
        'Intolérance orthostatique OU dysfonction autonome'
      ]
    },
    longCovid: {
      title: 'Critères Long COVID (WHO/NASEM 2024)',
      description: 'Séquelles post-aiguës de l\'infection SARS-CoV-2 avec symptômes multi-systémiques persistants',
      criteria: [
        'Infection SARS-CoV-2 confirmée ou probable',
        'Symptômes persistent ≥3 mois depuis maladie aiguë',
        'Symptômes multi-systémiques affectant fonctionnement quotidien',
        'Symptômes non expliqués par diagnostic alternatif'
      ],
      timing: {
        confirmed: 'Confirmé par test',
        probable: 'Probable basé sur symptômes/exposition',
        suspected: 'Suspecté basé sur timing'
      }
    },
    pots: {
      title: 'Critères POTS (ESC 2018/AAS-EFAS 2021)',
      description: 'Augmentation fréquence cardiaque ≥30 bpm dans 10 minutes debout, avec symptômes mais sans hypotension orthostatique',
      criteria: [
        'Augmentation fréquence cardiaque ≥30 bpm dans 10 minutes debout',
        'Fréquence cardiaque soutenue ≥120 bpm en position debout',
        'Symptômes orthostatiques (étourdissements, palpitations, fatigue)',
        'Symptômes présents ≥3 mois',
        'Absence d\'hypotension orthostatique'
      ]
    },
    results: {
      complete: 'Évaluation Critères Diagnostiques Terminée',
      description: 'Basé sur les directives CDC, NASEM, ESC, WHO',
      diagnosesMet: 'Diagnostics Satisfaisant les Critères',
      criteriaMet: 'CRITÈRES SATISFAITS',
      clinicalRecommendations: 'Recommandations Cliniques',
      mecfsManagement: [
        'Implémenter gestion de l\'activité et de l\'énergie',
        'Éviter thérapie d\'exercice graduée (GET)',
        'Considérer traitements dirigés par symptômes',
        'Référence clinique spécialisée ME/CFS si disponible'
      ],
      longCovidManagement: [
        'Approche multidisciplinaire pour gestion des symptômes',
        'Référence clinique Long COVID si disponible',
        'Surveiller amélioration au fil du temps',
        'Traiter symptômes individuels (fatigue, cognitifs, respiratoires)'
      ],
      potsManagement: [
        'Procéder à détermination de sous-type pour thérapie ciblée',
        'Non-pharmacologique : sel, fluides, bas de compression',
        'Considérer référence cardiologie ou spécialiste autonome',
        'Reconditionnement exercice graduel quand approprié'
      ],
      reassess: 'Réévaluer Critères',
      downloadReport: 'Télécharger Rapport',
      potsSubtype: 'Analyse Sous-type POTS'
    }
  },

  subtype: {
    title: 'Conseiller Sous-type & Traitement POTS',
    description: 'Déterminer sous-type POTS pour recommandations de traitement personnalisées',
    patientInfo: {
      title: 'Information Patient',
      description: 'Détails de base du patient pour planification du traitement',
      comorbidities: 'Comorbidités Pertinentes (cocher toutes qui s\'appliquent)',
      comorbidityOptions: ['Diabète', 'Maladie Auto-immune', 'EDS', 'MCAS']
    },
    subtypes: {
      hypovolemic: {
        name: 'POTS Hypovolémique',
        description: 'Volume sanguin bas causant intolérance orthostatique',
        criteria: [
          'Pression artérielle basse-normale (<110/70)',
          'Soif excessive',
          'Envie de sel',
          'Signes de déplétion volumique',
          'Rénine/aldostérone élevées (si disponible)'
        ],
        treatments: {
          nonPharmacological: [
            'Augmenter apport liquidien à 2,5-3L quotidien',
            'Augmenter apport sodium à 8-10g quotidien',
            'Vêtements de compression (30-40 mmHg)',
            'Reconditionnement exercice graduel'
          ],
          firstLine: [
            'Fludrocortisone 0,1-0,2mg quotidien',
            'Comprimés de sel si apport alimentaire insuffisant'
          ],
          secondLine: [
            'Desmopressine (DDAVP) pour cas sévères',
            'Érythropoïétine si anémique'
          ]
        }
      },
      neuropathic: {
        name: 'POTS Neuropathique',
        description: 'Neuropathie autonome périphérique affectant contrôle des vaisseaux sanguins',
        criteria: [
          'Symptômes neuropathie petites fibres distales',
          'Dysfonction GI (gastroparésie, constipation)',
          'Anhidrose ou transpiration réduite',
          'Anomalies pupillaires',
          'Antécédents diabète ou maladie auto-immune'
        ],
        treatments: {
          nonPharmacological: [
            'Vêtements de compression',
            'Élévation des jambes',
            'Éviter exposition à la chaleur',
            'Petits repas fréquents'
          ],
          firstLine: [
            'Midodrine 2,5-10mg TID',
            'Pyridostigmine 30-60mg TID'
          ],
          secondLine: [
            'Droxidopa (si disponible)',
            'Acide alpha-lipoïque pour neuropathie',
            'IVIG pour cas auto-immuns'
          ]
        }
      },
      hyperadrenergic: {
        name: 'POTS Hyperadrénergique',
        description: 'Activation excessive du système nerveux sympathique',
        criteria: [
          'Hypertension en position debout',
          'Anxiété, attaques de panique, tremor',
          'Maux de tête migraineux',
          'Mains et pieds froids',
          'Norépinéphrine debout élevée >600 pg/mL'
        ],
        treatments: {
          nonPharmacological: [
            'Techniques de réduction du stress',
            'Éviter stimulants (caféine)',
            'Horaire de sommeil régulier',
            'Exercice doux'
          ],
          firstLine: [
            'Propranolol 10-40mg BID',
            'Clonidine 0,1-0,2mg BID'
          ],
          secondLine: [
            'Ivabradine 2,5-7,5mg BID',
            'Méthyldopa',
            'Labétalol pour hypertension'
          ]
        }
      },
      autoimmune: {
        name: 'POTS Auto-immun',
        description: 'Dysfonction autonome médiée par auto-immunité',
        criteria: [
          'Antécédents personnels/familiaux de maladie auto-immune',
          'Début rapide des symptômes',
          'Déclencheur maladie virale (EBV, COVID, etc.)',
          'Anticorps autonomes positifs (si testés)',
          'Autres marqueurs auto-immuns positifs'
        ],
        treatments: {
          nonPharmacological: [
            'Mesures POTS standard',
            'Éviter déclencheurs infectieux',
            'Gestion du stress',
            'Régime anti-inflammatoire'
          ],
          firstLine: [
            'Médicaments POTS standard',
            'Essai de corticostéroïdes'
          ],
          secondLine: [
            'Thérapie IVIG',
            'Agents immunosuppresseurs',
            'Plasmaphérèse pour cas sévères'
          ]
        }
      }
    },
    results: {
      complete: 'Analyse Sous-type POTS Terminée',
      description: 'Recommandations de traitement personnalisées basées sur évaluation sous-type',
      primary: 'Primaire',
      likelihood: 'probabilité',
      criteriaMetTitle: 'Critères Satisfaits',
      allSubtypeScores: 'Tous Scores Sous-types',
      nonPharmacological: 'Non-Pharmacologique',
      firstLineRx: 'Première Ligne Rx',
      secondLineOptions: 'Options Deuxième Ligne',
      mixedSubtype: 'Considérations Sous-type Mixte : Ce patient montre aussi caractéristiques de plusieurs sous-types. Considérer approches thérapie combinaison et surveiller réponse au traitement initial.',
      clinicalPearls: 'Perles Cliniques',
      pearls: [
        'Commencer avec interventions non-pharmacologiques pour tous sous-types POTS',
        'Commencer médicaments à faibles doses et titrer lentement',
        'Surveiller réponse et ajuster traitement basé sur amélioration symptômes',
        'Considérer référence spécialiste pour cas complexes ou échecs traitement',
        'Réévaluer sous-type si réponse traitement est pauvre'
      ],
      reassess: 'Réévaluer Sous-type',
      downloadPlan: 'Télécharger Plan Traitement'
    }
  },

  newPatient: {
    title: 'Évaluation Nouveau Patient',
    description: 'Guidance intelligente à travers l\'évaluation pour ME/CFS, Long COVID et POTS',
    demographics: {
      title: 'Information Patient',
      description: 'Démographie de base pour documentation clinique',
      step: 'Étape 1 de 7 : Démographie Patient',
      age: 'Âge Patient',
      gender: 'Genre',
      clinicianName: 'Nom Clinicien',
      patientId: 'ID Patient/DME',
      startAssessment: 'Démarrer Évaluation'
    },
    progress: {
      step1: 'Démographie',
      step2: 'Dépistage Rapide',
      step3: 'Drapeaux Rouges',
      step4: 'Test Debout',
      step5: 'PEM Quest',
      step6: 'Critères',
      step7: 'Résumé'
    },
    redFlags: {
      title: 'Évaluation Drapeaux Rouges',
      description: 'Vérifier symptômes nécessitant évaluation urgente',
      selectSymptoms: 'Sélectionner tous symptômes présents',
      continueAssessment: 'Continuer Évaluation'
    },
    standTest: {
      title: 'Évaluation Orthostatique',
      description: 'Enregistrer fréquences cardiaques de base et debout',
      measurements: 'Mesures Fréquence Cardiaque',
      measurementDescription: 'Saisir fréquence cardiaque après 5 minutes allongé et fréquence cardiaque pic dans 10 minutes debout',
      baselineHR: 'FC Base (allongé)',
      peakHR: 'FC Pic Debout',
      hrIncrease: 'Augmentation FC',
      potsCriteria: 'Critères POTS',
      continueToPEM: 'Continuer à Évaluation PEM'
    },
    pemAssessment: {
      title: 'Évaluation PEM',
      description: 'Évaluation Malaise Post-Effort',
      finalizeAssessment: 'Finaliser Évaluation'
    },
    processing: {
      title: 'Traitement Critères Diagnostiques...',
      description: 'Analyse des réponses contre directives CDC, NASEM, ESC et WHO'
    },
    results: {
      title: 'Évaluation Patient Terminée',
      description: 'Évaluation clinique complète avec documentation SOAP',
      primary: 'Primaire',
      noDefinitiveDiagnoses: 'Aucun Diagnostic Définitif',
      keyResults: 'Résultats Clés Évaluation',
      riskLevel: 'Niveau Risque',
      screeningScore: 'Score Dépistage',
      pemPresent: 'PEM Présent',
      potsCriteria: 'Critères POTS',
      redFlags: 'Drapeaux Rouges',
      priority: 'Priorité',
      newAssessment: 'Nouvelle Évaluation',
      downloadSOAP: 'Télécharger Note SOAP'
    }
  },

  conditions: {
    mecfs: {
      name: 'ME/CFS',
      fullName: 'Encéphalomyélite Myalgique/Syndrome de Fatigue Chronique',
      icdCode: 'G93.32',
      criteria: [
        'Fatigue substantielle ≥6 mois',
        'Malaise post-effort',
        'Sommeil non réparateur',
        'Troubles cognitifs ou intolérance orthostatique'
      ]
    },
    longCovid: {
      name: 'Long COVID',
      fullName: 'Condition Post-COVID-19',
      icdCode: 'U09.9',
      criteria: [
        'Infection SARS-CoV-2 confirmée ou probable',
        'Symptômes ≥3 mois depuis épisode aigu',
        'Symptômes multi-systémiques',
        'Impact fonctionnel'
      ]
    },
    pots: {
      name: 'POTS',
      fullName: 'Syndrome de Tachycardie Orthostatique Posturale',
      icdCode: 'I47.1',
      criteria: [
        'Augmentation FC ≥30 bpm debout',
        'FC soutenue ≥120 bpm',
        'Symptômes orthostatiques ≥3 mois',
        'Pas d\'hypotension orthostatique'
      ]
    }
  },

  navigation: {
    assessmentModules: 'Modules d\'Évaluation',
    guidelines: 'Directives',
    diagnosticTools: 'Outils Diagnostiques',
    clinicalGuidelines: 'Directives Cliniques & Références',
    guidelinesDescription: 'Directives basées sur des preuves utilisées dans les algorithmes diagnostiques VisibleDx',
    assessmentModulesSection: 'Modules d\'Évaluation',
    guidelinesSection: 'Directives & Références',
    moreGuidelines: 'plus de directives'
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

  disclaimer: 'Cet outil est uniquement à des fins éducatives et ne remplace pas le jugement médical professionnel ou l\'évaluation clinique',

  footer: {
    about: {
      title: 'À propos de VisibleDx',
      description: 'VisibleDx est un outil d\'aide à la décision diagnostique basé sur les preuves pour ME/SFC, COVID Long et POTS. Il implémente des critères validés d\'organisations médicales de premier plan pour aider les cliniciens dans l\'évaluation systématique.',
      badges: {
        sensitivity: '94% Sensibilité',
        evidenceBased: 'Basé sur les Preuves',
        openSource: 'Open Source'
      }
    },
    evidence: {
      title: 'Base de Preuves',
      guidelines: [
        'Définition de Cas CDC ME/SFC (2015)',
        'Rapport NASEM ME/SFC (2015)',
        'Définition OMS COVID Long (2021)',
        'Directives ESC POTS (2018)',
        'Consensus AAS/EFAS POTS (2021)',
        'Protocole NASA Lean Stand Test'
      ]
    },
    notes: {
      title: 'Notes Importantes',
      items: [
        'Pas un substitut à l\'évaluation clinique',
        'Nécessite confirmation par examen physique',
        'Considérer l\'historique et le contexte du patient',
        'Exclure les drapeaux rouges avant diagnostic',
        'Consulter des spécialistes pour les cas complexes',
        'Surveiller la réponse du patient au traitement'
      ]
    },
    bottom: {
      version: 'VisibleDx v1.0 - Outil Éducatif',
      copyright: '© 2024 VisibleDx',
      audienceLabel: 'Pour les Professionnels de Santé',
      badge: 'Recherche & Éducation'
    },
    technical: 'Basé sur la littérature évaluée par les pairs et des critères diagnostiques validés. Données de sensibilité d\'études de validation clinique. Consultez toujours les directives actuelles et les recommandations de spécialistes pour les cas complexes.'
  }
}