// Chronic Symptoms

import { Users } from "./users";

export interface EmotionalScale {
    id: string;
    user: Users;
    userId: string;
    timestamp: string;
    energyLevel: number;
}

export interface Fatigue {
    id: string;
    user: Users;
    userId: string;
    severityStr: 'Mild' | 'Moderate' | 'Severe';
    durationPerDay: number; // in hours
    energyLevel: number; // scale from 1-10
    trigger: string; // potential triggers
    timestamp: string; // ISO date format
}

export interface GeneralPain {
    id: string;
    user: Users;
    userId: string;
    location: string; // e.g., "Lower back", "Knees"
    severityStr: 'Sharp' | 'Dull' | 'Burning' | 'Throbbing';
    severityNum: number; // 0-10 scale
    frequency: string;
    trigger: string;
    treatmentUsed: string; // Medications, Rest, Therapy, etc.
    timestamp: string;
}
  
export interface MuscleWeakness {
    id: string;
    user: Users;
    userId: string;
    location: string; // e.g., ["Arms", "Legs"]
    severityStr: 'Mild' | 'Moderate' | 'Severe';
    timestamp: string;
}
  
export interface JointStiffness {
    id: string;
    user: Users;
    userId: string;
    location: string;
    durationPerDay: number; // in minutes
    severityStr: 'Mild' | 'Moderate' | 'Severe';
    timestamp: string;
}
  
export interface ChronicRespiratoryIssue {
    id: string;
    user: Users;
    userId: string;
    type: 'Wheezing' | 'Shortness of Breath' | 'Chronic Cough';
    frequency: string; // e.g., "Daily", "During Exercise"
    trigger: string;
    treatmentUsed: string;
    timestamp: string;
}
  
export interface Neuropathy {
    id: string;
    user: Users;
    userId: string;
    location: string;
    type: 'Burning' | 'Tingling' | 'Numbness';
    severityNum: number; // 0-10 scale
    durationPerDay: string;
    timestamp: string;
}
  
export interface CognitiveImpairment {
    id: string;
    user: Users;
    userId: string;
    severityStr: 'Mild' | 'Moderate' | 'Severe';
    durationPerDay: number; // Minutes of sustained focus
    trigger: string;
    timestamp: string;
}
  
export interface ChronicDigestiveIssue {
    id: string;
    user: Users;
    userId: string;
    type: 'Bloating' | 'Constipation' | 'Diarrhea' | 'Nausea';
    frequency: string; // "Daily", "After Meals", etc.
    trigger: string;
    severityStr: 'Mild' | 'Moderate' | 'Severe';
    treatmentUsed: string;
    timestamp: string;
}
  
export interface SkinRash {
    id: string;
    user: Users;
    userId: string;
    location: string;
    type: 'Red' | 'Itchy' | 'Blistering' | 'Scaling';
    severityStr: 'Mild' | 'Moderate' | 'Severe';
    trigger: string;
    treatmentUsed: string[];
    timestamp: string;
}
  
export interface TemperatureSensitivity {
    id: string;
    user: Users;
    userId: string;
    type: 'Cold Intolerance' | 'Heat Intolerance';
    trigger: string;
    timestamp: string;
}
  
// Acute Symptoms
  
export interface SevereHeadache {
    id: string;
    user: Users;
    userId: string;
    severityNum: number; // 0-10 scale
    durationPerDay: number; // in hours
    trigger: string;
    treatmentUsed: string;
    timestamp: string;
}
  
export interface Seizure {
    id: string;
    user: Users;
    userId: string;
    type: 'Tonic-clonic' | 'Absence' | 'Focal';
    durationPerDay: number; // in seconds
    frequency: number;
    severityNum : number;
    trigger: string;
    treatmentUsed: string;
    timestamp: string;
}
  
export interface VisionIssue {
    id: string;
    user: Users;
    userId: string;
    type: 'Blurry' | 'Blackout' | 'Double Vision';
    location: 'Left' | 'Right' | 'Both';
    duration: number; // in minutes
    timestamp: string;
}
  
export interface AcuteShortnessOfBreath {
    id: string;
    user: Users;
    userId: string;
    severityStr: 'Mild' | 'Moderate' | 'Severe';
    trigger: string;
    treatmentUsed: string;
    timestamp: string;
}
  
export interface JointSwelling {
    id: string;
    user: Users;
    userId: string;
    location: string;
    severityStr: 'Mild' | 'Moderate' | 'Severe';
    trigger: string;
    timestamp: string;
}
  
export interface SevereNausea {
    id: string;
    user: Users;
    userId: string;
    frequency: number;
    trigger: string;
    treatmentUsed: string;
    timestamp: string;
}
  
export interface SpeechDifficulty {
    id: string;
    user: Users;
    userId: string;
    type: 'Slurred' | 'Slow' | 'Incoherent';
    durationPerDay: number; // in minutes
    timestamp: string;
}
  
export interface Dizziness {
    id: string;
    user: Users;
    userId: string;
    frequency: string; // e.g., "Daily", "Once a week"
    durationPerDay: number; // in minutes
    trigger: string;
    bloodPressure: number;
    timestamp: string;
}
  
// Export all interfaces together
  
export type Symptom =
    | EmotionalScale
    | Fatigue
    | GeneralPain
    | MuscleWeakness
    | JointStiffness
    | ChronicRespiratoryIssue
    | Neuropathy
    | CognitiveImpairment
    | ChronicDigestiveIssue
    | SkinRash
    | TemperatureSensitivity
    | SevereHeadache
    | Seizure
    | VisionIssue
    | AcuteShortnessOfBreath
    | JointSwelling
    | SevereNausea
    | SpeechDifficulty
    | Dizziness;