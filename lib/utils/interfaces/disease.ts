export interface disease {
    id: number;
    name: string;
    usersJoinedIds: number[];
}

export type diseases = 
    | disease;