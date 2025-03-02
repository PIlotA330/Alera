import React from 'react'
import { Card } from '@mui/material';
import SideBar from '../SideBar';
import prisma from '@/lib/db';
import { getRandomUserId } from '../../lib/utils/getSession'


interface Medicine {
    id: number;
    name: string;
    location: string;
    disease: string;
    password: string;
    gender: string;
    dDate: string;
    bDate: string;
    medication: string;
}

const MedicinePage = async () => {
    const computerUserId = await getRandomUserId();
    const medications = await prisma.medication.findMany({
        where : {
            userid: computerUserId
        },
    });

    return (
        <>
            <div className='flex flex-row h-screen w-full'>
                <SideBar />
                <div className='flex flex-col w-full place-items-center'>
                    <h1 className='text-4xl p-5'>Medications</h1>
                    <Card>
                    <ul className='p-15'>
                            {medications.map(medicine => <li key={medicine.id}>{medicine.name} @ {medicine.dosage}mg, {medicine.frequencyPerWeek} per frequencyPerWeek</li>)}
                        </ul>
                    </Card>
                </div>
            </div>
        </>

    )
}
export default MedicinePage
