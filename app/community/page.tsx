import Link from "next/link";
import prisma from "../../lib/db"; // Adjust the import path as necessary
import { getRandomUserId } from "@/lib/utils/getSession";
import SideBar from '../SideBar';
import { Card } from '@mui/material';

export default async function PostPage()
{
    const computerUserId = await getRandomUserId();
    const currentUser = prisma.user.findFirst({
        where : {
            id: computerUserId
        },
    });

    const groupsJoined = await currentUser.diseases();

    return(
        <>
            <div className='flex flex-row h-screen w-full'>
                <SideBar />
                <div className='flex flex-col w-full place-items-center'>
                    <h1 className="text-4xl p-5">All Groups ({groupsJoined?.length})</h1>
                    <Card>
                        <ul className='p-15'>
                        {groupsJoined?.map((group)=>(
                        <li key={group.id} className="flex items-center justify-between px-5">
                            <Link href={`/community/${group.id}`}>{group.name}</Link>
                        </li>
                        ))}
                        </ul>
                    </Card>
                </div>
                
            </div>
        </>
    );
}    
