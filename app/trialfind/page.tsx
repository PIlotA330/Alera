"use client"
import prisma from '../../lib/db'
import { getRandomUserId } from '../../lib/utils/getSession'

export default async function Home() {
    const computedUserId = await getRandomUserId();
    const symptoms = await prisma.symptom.findMany({
        where: {
            userId: computedUserId,
        },
    });

  return (
    <main>
        <h1 className='p-7 text-3xl'> Trial Find </h1>
        <pre>{JSON.stringify(symptoms, null, 2)}</pre>
    </main>
  );
}
