// Chronic Symptoms

export interface Fatigue {
    severity: 'Mild' | 'Moderate' | 'Severe';
    durationPerDay: number; // in hours
    energyLevel: number; // scale from 1-10
    impactedActivities: string[]; // list of affected activities
    triggers: string[]; // potential triggers
    timestamp: string; // ISO date format
}

export interface ChronicPain {
    location: string; // e.g., "Lower back", "Knees"
    type: 'Sharp' | 'Dull' | 'Burning' | 'Throbbing';
    severity: number; // 0-10 scale
    frequency: string; // e.g., "Daily", "Intermittent"
    triggers: string[];
    painReliefMethods: string[]; // Medications, Rest, Therapy, etc.
    timestamp: string;
}
  
export interface MuscleWeakness {
    affectedAreas: string[]; // e.g., ["Arms", "Legs"]
    severity: 'Mild' | 'Moderate' | 'Severe';
    gripStrengthTest: number | null; // Measured in lbs or null if not tested
    functionalImpact: string; // Description of difficulty
    progression: string; // e.g., "Stable", "Worsening", "Improving"
    timestamp: string;
}
  
export interface JointStiffness {
    affectedJoints: string[];
    morningStiffnessDuration: number; // in minutes
    severity: 'Mild' | 'Moderate' | 'Severe';
    rangeOfMotion: string; // "Limited", "Normal", "Severely Restricted"
    associatedPain: boolean;
    timestamp: string;
}
  
export interface ChronicRespiratoryIssue {
    type: 'Wheezing' | 'Shortness of Breath' | 'Chronic Cough';
    oxygenSaturation: number; // percentage
    frequency: string; // e.g., "Daily", "During Exercise"
    triggers: string[];
    medicationsUsed: string[];
    timestamp: string;
}
  
export interface Neuropathy {
    affectedAreas: string[];
    type: 'Burning' | 'Tingling' | 'Numbness';
    severity: number; // 0-10 scale
    temperatureSensitivity: boolean;
    dailyImpact: string;
    timestamp: string;
}
  
export interface CognitiveImpairment {
    memoryLossSeverity: 'Mild' | 'Moderate' | 'Severe';
    attentionSpan: number; // Minutes of sustained focus
    difficultyWithTasks: string[];
    correlationWithSleep: boolean;
    triggers: string[];
    timestamp: string;
}
  
export interface ChronicDigestiveIssue {
    type: 'Bloating' | 'Constipation' | 'Diarrhea' | 'Nausea';
    frequency: string; // "Daily", "After Meals", etc.
    foodTriggers: string[];
    severity: 'Mild' | 'Moderate' | 'Severe';
    treatmentMethods: string[];
    timestamp: string;
}
  
export interface SkinRash {
    location: string;
    type: 'Red' | 'Itchy' | 'Blistering' | 'Scaling';
    severity: 'Mild' | 'Moderate' | 'Severe';
    triggers: string[];
    treatmentUsed: string[];
    timestamp: string;
}
  
export interface TemperatureSensitivity {
    type: 'Cold Intolerance' | 'Heat Intolerance';
    environmentalTriggers: string[];
    skinReactions: boolean;
    impactOnDailyLife: string;
    timestamp: string;
}
  
// Acute Symptoms
  
export interface SevereHeadache {
    painSeverity: number; // 0-10 scale
    auraPresence: boolean;
    duration: number; // in hours
    triggers: string[];
    medicationUsed: string[];
    timestamp: string;
}
  
export interface Seizure {
    type: 'Tonic-clonic' | 'Absence' | 'Focal';
    duration: number; // in seconds
    triggers: string[];
    lossOfConsciousness: boolean;
    emergencyInterventionNeeded: boolean;
    timestamp: string;
}
  
export interface VisionIssue {
    type: 'Blurry' | 'Blackout' | 'Double Vision';
    affectedEye: 'Left' | 'Right' | 'Both';
    duration: number; // in minutes
    associatedSymptoms: string[];
    recoveryTime: number; // in minutes
    timestamp: string;
}
  
export interface AcuteShortnessOfBreath {
    severity: 'Mild' | 'Moderate' | 'Severe';
    oxygenSaturation: number;
    triggers: string[];
    emergencyInterventionNeeded: boolean;
    treatmentUsed: string[];
    timestamp: string;
}
  
export interface JointSwelling {
    affectedJoint: string;
    severity: 'Mild' | 'Moderate' | 'Severe';
    rednessAndWarmth: boolean;
    activityBeforeOnset: string;
    antiInflammatoryResponse: boolean;
    timestamp: string;
}
  
export interface SevereNausea {
    frequencyPerHour: number;
    triggers: string[];
    dehydrationSigns: boolean;
    hospitalizationRequired: boolean;
    timestamp: string;
}
  
export interface SpeechDifficulty {
    type: 'Slurred' | 'Slow' | 'Incoherent';
    duration: number; // in minutes
    otherSymptoms: string[];
    recoveryTime: number; // in minutes
    timestamp: string;
}
  
export interface Dizziness {
    frequency: string; // e.g., "Daily", "Once a week"
    duration: number; // in minutes
    triggers: string[];
    bloodPressureBefore: number;
    bloodPressureAfter: number;
    timestamp: string;
}
  
// Export all interfaces together
  
export type Symptom =
    | Fatigue
    | ChronicPain
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
  