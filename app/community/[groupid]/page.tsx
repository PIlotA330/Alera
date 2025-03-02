import Link from "next/link";
import prisma from "../../../lib/db"; // Adjust the import path as necessary
import SideBar from "../../SideBar";
import { Card } from "@mui/material";



interface Post {
    id: string;
    title: string;
    contents: string;
}
export default async function GroupPage({ params }: { params: { groupid: string } }) {
    const { groupid } = await params;

    const posts = await prisma.blog.findMany({
        where: { diseaseid: groupid },
    });

    if (!posts) {
        return <div>Post not found</div>;
    }

    return (
        <div className="flex flex-row h-screen w-full">
            <SideBar />
            <div className="flex flex-col w-full place-items-center">
                <Card>
                <ul className='p-15 m-3'>
                    {posts.map(post => <li key={post.id}>
                        <h2 className="pt-2">{post.title}</h2>
                        <p className="pb-2">{post.contents}</p>
                        </li>)}
                </ul>
                </Card>
            </div>
        </div>
    );
}