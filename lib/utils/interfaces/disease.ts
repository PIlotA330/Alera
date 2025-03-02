import { Blog } from "./blog";
import { Users } from "./users";

export interface disease {
    id: string;
    name: string;
    users: Users[];
    userIds: string[];
    blogs: Blog[];
}

export type Diseases = 
    | disease;