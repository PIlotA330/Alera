// interfaces for people

import { Diseases } from './disease'
import { Symptom } from './symptoms'
import { Medication } from './medication'
import { Blog } from './blog'

export interface patient {
    id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    dateLastSignedIn: string;
    dateSignedUp: string;
    gender: string;
    location: string;
    birthdate: string;
    diagnosisDate: string;
    diseases: Diseases[];
    diseaseIds: string[];
    symptoms: Symptom[];
    posts: Blog[];
    medications: Medication[];
}

export interface doctor {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    specialty: string; // make sure to check this is an optional field
    dateSignedUp: string;
    diseases: Diseases[];
}

export type Users = 
  | patient
  | doctor;