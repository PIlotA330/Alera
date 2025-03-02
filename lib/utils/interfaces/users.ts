// interfaces for people
export interface patient {
    id: number;
    name: string,
    username: string;
    password: string;
    dateLastSignedIn: string;
    dateSignedUp: string;
    disease: string[];
    gender: string;
    location: string;
    birthdate: string;
    diagnosisDate: string;
}

export interface doctor {
    id: number;
    name: string;
    username: string;
    password: string;
    specialty: string[];
    dateSignedUp: string;
}

export type Users = 
  | patient
  | doctor;