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
    joinedGroupIds: number[];
}

export interface doctor {
    id: number;
    name: string;
    username: string;
    password: string;
    specialty: string[];
    dateSignedUp: string;
    joinedGroupIds: number[];
}

export type Users = 
  | patient
  | doctor;