"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function LoginPage() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await signIn('credentials', {
        email,
        password,
        redirect:false
    })
    if(result.error){
        alert('Gagal Periksa email dan sandi')
    }else{
    window.location.href = '/myposts'
    }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
        <button type="submit">Submit</button>
    </form>
  )
}
