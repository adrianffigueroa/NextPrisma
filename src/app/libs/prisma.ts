import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

declare global {
  var prisma: PrismaClient | undefined
}

if (process.env.NODE !== 'production') global.prisma = prisma
