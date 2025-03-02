// interfaces for people
export interface patient {
    id: number;
    name: string,
    username: string;
    password: string;
    dateLastSignedIn: string;
    dateSignedUp: string;
}

export interface doctor {
    id: number;
    name: string;
    username: string;
    password: string;
    specialty: string;
    dateSignedUp: string;
}

export type Users = 
  | patient
  | doctor;