export interface post {
    id: number;
    title: string;
    userid: number;
    contents: string;
    groupId: number;
    public: boolean;
}

export interface comment {
    id: number;
    userid: number;
    parentPostId: number;
    contents: string;
    groupId: number;
}

export type Blog = 
    | post
    | comment;