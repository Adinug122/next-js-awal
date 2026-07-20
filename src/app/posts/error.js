'use client'

export default function Error({ error, reset }) {
  return (
    <div>
      <p>Terjadi kesalahan: {error.message}</p>
      <button onClick={() => reset()}>Coba lagi</button>
    </div>
  )
}