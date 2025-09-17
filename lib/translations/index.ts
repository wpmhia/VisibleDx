import { en } from './en'
import { nl } from './nl'
import { da } from './da'
import { de } from './de'
// Import other languages when created
// import { sv } from './sv'
// import { no } from './no'
// import { fr } from './fr'

export const translations = {
  en,
  nl,
  da,
  de,
  // Add other languages when available
  sv: en, // Fallback to English for now
  no: en, // Fallback to English for now
  fr: en  // Fallback to English for now
}

export * from './types'