'use client'

import BackButton from '@/app/components/BackButton'
import PostForm from '@/app/components/PostForm'
import { FormValues } from '@/app/types'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const PostEditPage = () => {
  const handleEditPost: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <div>
      <BackButton />
      <h2 className="text-2xl font-bold text-center mb-4">Editar Post</h2>
      <PostForm submit={handleEditPost} isEditing={true} />
    </div>
  )
}

export default PostEditPage
