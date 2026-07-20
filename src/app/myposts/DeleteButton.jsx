"use client"
export default function DeleteButton({postId}) {

    const handleDelete = async () => {
         const isConfirmed = window.confirm(
    "Apakah kamu yakin ingin menghapus post ini?"
  );

  if (!isConfirmed) return;
        const response =  await fetch(`/api/posts/${postId}`,{
            method:"DELETE",
        });
        if(!response.ok){
            throw new Error("gagal")
        }
        window.location.reload()
    }

  return (
   <button className="text-red-500" onClick={handleDelete}>Hapus</button>
  )
}
