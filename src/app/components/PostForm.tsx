'use client'

import React from 'react'
import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormValues } from '../types'

type TPostForm = {
  submit: SubmitHandler<FormValues>
  isEditing: boolean
}

const PostForm: FC<TPostForm> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormValues>()

  return (
    <form
      className="flex flex-col items-center gap-4"
      onSubmit={handleSubmit(submit)}
    >
      <input
        type="text"
        {...register('title', { required: true })}
        placeholder="Título del Post"
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        {...register('content', { required: true })}
        className="textarea textarea-bordered w-full max-w-lg resize-none"
        placeholder="Contenido del Post"
      ></textarea>
      <select
        {...register('tag', { required: true })}
        className="select select-bordered w-full max-w-lg"
        defaultValue={''}
      >
        <option disabled value="">
          Elija una etiqueta
        </option>
        <option>Javascript</option>
        <option>Python</option>
      </select>
      <button className="btn btn-success w-full max-w-lg">
        {isEditing ? 'Editar' : 'Agregar'}
      </button>
    </form>
  )
}

export default PostForm
