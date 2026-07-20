"use client"

import { useState } from "react"


export default function PostsForm() {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("/api/posts",{
        method: "POST",
        headers: {
  "Content-Type": "application/json"
},
        body:JSON.stringify({
            title,
            body
        })
    })

    if(!res.ok){
    throw new Error("Error bro")      
    }
    setTitle("")
    setBody("")
    window.location.reload()
    }
  return (
 <form
  onSubmit={handleSubmit}
  className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg space-y-4"
>
  <h2 className="text-2xl font-bold text-gray-800">
    Tambah Post
  </h2>

  <input
    className="w-full rounded-lg border text-black border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Judul Post"
  />

  <textarea
    className="w-full rounded-lg border text-black border-gray-300 px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={body}
    onChange={(e) => setBody(e.target.value)}
    placeholder="Isi Post"
  />

  <button
    type="submit"
    className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
  >
    Tambah Post
  </button>
</form>
  )
}
