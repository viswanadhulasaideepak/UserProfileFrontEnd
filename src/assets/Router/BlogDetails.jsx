import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
    const {id}=useParams();
  return (
    <div>
      <h1>Blog Details-----{id}</h1>
    </div>
  )
}
