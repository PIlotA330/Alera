// Chronic Symptoms

export interface EmotionalScale {
    userid: number;
    timestamp: string;
    rating: number;
}

export interface Fatigue {
    userid: number;
    severity: 'Mild' | 'Moderate' | 'Severe';
    durationPerDay: number; // in hours
    energyLevel: number; // scale from 1-10
    impactedActivities: string[]; // list of affected activities
    triggers: string[]; // potential triggers
    timestamp: string; // ISO date format
}

export interface GeneralPain {
    userid: number;
    location: string; // e.g., "Lower back", "Knees"
    type: 'Sharp' | 'Dull' | 'Burning' | 'Throbbing';
    severity: number; // 0-10 scale
    frequency: string;
    triggers: string[];
    painReliefMethods: string[]; // Medications, Rest, Therapy, etc.
    timestamp: string;
}
  
export interface MuscleWeakness {
    userid: number;
    affectedAreas: string[]; // e.g., ["Arms", "Legs"]
    severity: 'Mild' | 'Moderate' | 'Severe';
    gripStrengthTest: number | null; // Measured in lbs or null if not tested
    functionalImpact: string; // Description of difficulty
    progression: string; // e.g., "Stable", "Worsening", "Improving"
    timestamp: string;
}
  
export interface JointStiffness {
    userid: number;
    affectedJoints: string[];
    morningStiffnessDuration: number; // in minutes
    severity: 'Mild' | 'Moderate' | 'Severe';
    rangeOfMotion: string; // "Limited", "Normal", "Severely Restricted"
    associatedPain: boolean;
    timestamp: string;
}
  
export interface ChronicRespiratoryIssue {
    userid: number;
    type: 'Wheezing' | 'Shortness of Breath' | 'Chronic Cough';
    oxygenSaturation: number; // percentage
    frequency: string; // e.g., "Daily", "During Exercise"
    triggers: string[];
    medicationsUsed: string[];
    timestamp: string;
}
  
export interface Neuropathy {
    userid: number;
    affectedAreas: string[];
    type: 'Burning' | 'Tingling' | 'Numbness';
    severity: number; // 0-10 scale
    temperatureSensitivity: boolean;
    dailyImpact: string;
    timestamp: string;
}
  
export interface CognitiveImpairment {
    userid: number;
    memoryLossSeverity: 'Mild' | 'Moderate' | 'Severe';
    attentionSpan: number; // Minutes of sustained focus
    difficultyWithTasks: string[];
    correlationWithSleep: boolean;
    triggers: string[];
    timestamp: string;
}
  
export interface ChronicDigestiveIssue {
    userid: number;
    type: 'Bloating' | 'Constipation' | 'Diarrhea' | 'Nausea';
    frequency: string; // "Daily", "After Meals", etc.
    foodTriggers: string[];
    severity: 'Mild' | 'Moderate' | 'Severe';
    treatmentMethods: string[];
    timestamp: string;
}
  
export interface SkinRash {
    userid: number;
    location: string;
    type: 'Red' | 'Itchy' | 'Blistering' | 'Scaling';
    severity: 'Mild' | 'Moderate' | 'Severe';
    triggers: string[];
    treatmentUsed: string[];
    timestamp: string;
}
  
export interface TemperatureSensitivity {
    userid: number;
    type: 'Cold Intolerance' | 'Heat Intolerance';
    environmentalTriggers: string[];
    skinReactions: boolean;
    impactOnDailyLife: string;
    timestamp: string;
}
  
// Acute Symptoms
  
export interface SevereHeadache {
    userid: number;
    painSeverity: number; // 0-10 scale
    auraPresence: boolean;
    duration: number; // in hours
    triggers: string[];
    medicationUsed: string[];
    timestamp: string;
}
  
export interface Seizure {
    userid: number;
    type: 'Tonic-clonic' | 'Absence' | 'Focal';
    duration: number; // in seconds
    triggers: string[];
    lossOfConsciousness: boolean;
    emergencyInterventionNeeded: boolean;
    timestamp: string;
}
  
export interface VisionIssue {
    userid: number;
    type: 'Blurry' | 'Blackout' | 'Double Vision';
    affectedEye: 'Left' | 'Right' | 'Both';
    duration: number; // in minutes
    associatedSymptoms: string[];
    recoveryTime: number; // in minutes
    timestamp: string;
}
  
export interface AcuteShortnessOfBreath {
    userid: number;
    severity: 'Mild' | 'Moderate' | 'Severe';
    oxygenSaturation: number;
    triggers: string[];
    emergencyInterventionNeeded: boolean;
    treatmentUsed: string[];
    timestamp: string;
}
  
export interface JointSwelling {
    userid: number;
    affectedJoint: string;
    severity: 'Mild' | 'Moderate' | 'Severe';
    rednessAndWarmth: boolean;
    activityBeforeOnset: string;
    antiInflammatoryResponse: boolean;
    timestamp: string;
}
  
export interface SevereNausea {
    userid: number;
    frequencyPerHour: number;
    triggers: string[];
    dehydrationSigns: boolean;
    hospitalizationRequired: boolean;
    timestamp: string;
}
  
export interface SpeechDifficulty {
    userid: number;
    type: 'Slurred' | 'Slow' | 'Incoherent';
    duration: number; // in minutes
    otherSymptoms: string[];
    recoveryTime: number; // in minutes
    timestamp: string;
}
  
export interface Dizziness {
    userid: number;
    frequency: string; // e.g., "Daily", "Once a week"
    duration: number; // in minutes
    triggers: string[];
    bloodPressureBefore: number;
    bloodPressureAfter: number;
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
  