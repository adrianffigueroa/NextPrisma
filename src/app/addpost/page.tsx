'use client'

import React from 'react'
import PostForm from '../components/PostForm'
import { SubmitHandler } from 'react-hook-form'
import { FormValues } from '../types'
import BackButton from '../components/BackButton'

const AddPost = () => {
  const handleCreatePost: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <div>
      <BackButton />
      <h2 className="text-2xl font-bold text-center mb-4">
        Agregar Nuevo Post
      </h2>
      <PostForm submit={handleCreatePost} isEditing={false} />
    </div>
  )
}

export default AddPost
