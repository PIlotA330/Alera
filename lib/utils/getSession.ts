import prisma from '../db'
import { Users } from '../utils/interfaces/users'

async function getRandomUserId(fakeIndex:number = -1): Promise<string | undefined> {
    const userlist: Users[] = await prisma.user.findMany();
    if (userlist.length === 0) {
        return undefined;
    }
    if (fakeIndex == -1) {
        const randomIndex = Math.floor(Math.random() * userlist.length);
        return userlist[randomIndex].id;
    }
    return userlist[fakeIndex].id;
}

export { getRandomUserId };