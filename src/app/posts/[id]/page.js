import React from 'react'

export default async function PostDetailPage({params}) {
    const {id} = await params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
     if (!response.ok) {
      return <div>Post tidak ditemukan</div>
    }
    
    const data = await response.json();
  return (
    <div>
        <h1>{data.title}</h1>
        <h2>{data.body}</h2>
    </div>
  )
}
