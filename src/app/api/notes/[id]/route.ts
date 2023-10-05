import { NextResponse } from 'next/server'
import { prisma } from '@/app/libs/prisma'
import { Prisma } from '@prisma/client'

interface IParams {
  params: { id: string }
}

export async function GET(request: Request, { params }: IParams) {
  const { id } = params
  try {
    const noteById = await prisma.note.findUnique({
      where: {
        id: +id,
      },
    })
    if (!noteById) {
      return NextResponse.json(
        {
          message: 'Nota no encontrada',
        },
        { status: 404 }
      )
    }
    return NextResponse.json(noteById)
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

export async function DELETE(request: Request, { params }: IParams) {
  const { id } = params
  try {
    const deletedNote = await prisma.note.delete({
      where: {
        id: +id,
      },
    })
    if (!deletedNote) {
      return NextResponse.json(
        { message: 'Nota no encontrada' },
        { status: 404 }
      )
    }
    return NextResponse.json(deletedNote)
  } catch (error) {
    console.log(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025')
        return NextResponse.json(
          {
            message: 'Nota no encontrada',
          },
          { status: 404 }
        )
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

export async function PUT(request: Request, { params }: IParams) {
  const { id } = params
  try {
    const { title, content } = await request.json()
    const updatedNote = await prisma.note.update({
      where: { id: +id },
      data: {
        title,
        content,
      },
    })
    return NextResponse.json(updatedNote)
  } catch (error) {
    console.log(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025')
        return NextResponse.json(
          {
            message: 'Nota no encontrada',
          },
          { status: 404 }
        )
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
