import { Blog } from "./blog";

export interface comment {
    id: string;
    userid: string;
    parentblog: Blog;
    parentblogid: string;
    contents: string;
    groupid: string;
    public: boolean;
}

export type Comment =
    | comment;