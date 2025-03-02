import { Users } from "./users";

export interface medication {
    id: string;
    user: Users;
    userid: string;
    dosage: number;
    frequencyPerDay: number;
    frequencyPerWeek: number;
}

export type Medication =
    | medication;