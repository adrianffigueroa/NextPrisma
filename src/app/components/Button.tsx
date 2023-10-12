import { Pencil, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Button = () => {
  return (
    <div>
      <Link href="/post/edit/id" className="btn btn-primary">
        <Pencil />
        Editar
      </Link>
      <button className="btn btn-error ml-2">
        <Trash2 /> Eliminar
      </button>
    </div>
  )
}

export default Button
