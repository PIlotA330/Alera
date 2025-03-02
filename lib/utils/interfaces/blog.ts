export interface post {
    id: number;
    title: string;
    userid: number;
    contents: string;
    group: string;
}

export interface comment {
    id: number;
    userid: number;
    parentPostId: number;
    contents: string;
    group: string;
}

export type Blog = 
    | post
    | comment;