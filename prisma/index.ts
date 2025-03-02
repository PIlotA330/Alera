import { PrismaClient } from '@prisma/client'
import { now } from 'mongoose'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
      data: {
        name: 'Richard Lee',
        email: 'lee@alera.org',
        password: 'helloworld',
        dateLastSignedIn: '2025-03-02T09:24:23.742Z',
        dateSignedUp: '2024-10-02T09:24:23.742Z',
        
      },
    })
  
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
      },
    })
    console.dir(allUsers, { depth: null })
  }