import { NextResponse } from 'next/server'
import { prisma } from '@/app/libs/prisma'

export async function GET() {
  try {
    const notes = await prisma.note.findMany()
    return NextResponse.json(notes)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
      )
    }
  } finally {
    prisma.$disconnect()
  }
}

export async function POST(request: Request) {
  const { title, content } = await request.json()
  try {
    const newNote = await prisma.note.create({
      data: {
        title,
        content,
      },
    })
    return NextResponse.json(newNote)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
      )
    }
  } finally {
    prisma.$disconnect()
  }
}
