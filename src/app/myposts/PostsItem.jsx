"use client"

import { useState } from "react"
import DeleteButton from "./DeleteButton";

export default function PostsItem({post}) {
    const [isEditing,setEditing] = useState(false);
      const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/posts/${post.id}`,{
       method:"PUT",
       headers:{
  "Content-Type": "application/json"
},  
       body: JSON.stringify({
      title,
      body,
    }),
    });
    if(!response.ok){
        throw new Error("Gagal mengupdate post")
    }
    setEditing(false)
    window.location.reload();
  }

  if(isEditing){
      return (
       <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800">
        Edit Post
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
  }else{
    return(
    <div className="max-w-5xl mx-auto grid gap-6 mt-8">

    <div
      key={post.id}
      className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition"
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-2">
        {post.title}
      </h2>
      <p className="text-gray-700 mb-4">
        {post.body}
      </p>
      <p className="text-sm text-gray-500">
         {post.createdAt.toLocaleDateString()}
      </p>
    <div className="flex gap-2">
    <DeleteButton postId={post.id} />
    <button className="text-yellow-400" onClick={() => setEditing(true)}>
        Edit
    </button>
    </div>
    </div>

</div>
  )}
}
