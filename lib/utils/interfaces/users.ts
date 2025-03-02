// interfaces for people

import { Diseases } from './disease'
import { Symptom } from './symptoms'
import { Medication } from './medication'
import { Blog } from './blog'

export interface patient {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    dateLastSignedIn: Date;
    dateSignedUp: Date;
    gender: string;
    location: string;
    birthdate: Date;
    diagnosisDate: Date;
    diseaseIds: string[];
    specialty: string | null;
    diseases?: any;
    symptoms?: any;
    posts?: any;
    medications?: any;
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