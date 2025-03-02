import { comment } from './comment';
import { Diseases } from './disease';
import { Users } from './users'

export interface post {
    id: string;
    title: string;
    user: Users;
    userid: string;
    comments: comment[];
    contents: string;
    disease: Diseases;
    diseaseid: string;
    public: boolean;
}

export type Blog = 
    | post;