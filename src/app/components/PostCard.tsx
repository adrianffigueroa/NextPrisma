import Link from 'next/link'
import React from 'react'

const PostCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href="/post/1" className="btn btn-primary hover:opacity-70">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard
