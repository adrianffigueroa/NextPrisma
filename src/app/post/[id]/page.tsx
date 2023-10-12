import BackButton from '@/app/components/BackButton'
import Button from '@/app/components/Button'
import React from 'react'

const PostDetailPage = () => {
  return (
    <>
      <BackButton />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold underline text-center">
          Título de Post
        </h2>
        <p className=" text-slate-600 mt-4">Cuerpo de post</p>
        <Button />
      </div>
    </>
  )
}

export default PostDetailPage
