import prisma from "@/lib/prisma"
import PostsForm from "./PostsForm"
import DeleteButton from "./DeleteButton"
import PostsItem from "./PostsItem"
import { auth } from "@/auth"
import LogoutButton from "./LogoutButton"

export default async function page() {
  const session = await auth()
  if(!session){
    return <p>Kamu harus login dulu</p>
  }
    const posts = await prisma.post.findMany({
      where: {authorId: Number(session.user.id)}
    })
  return (
   <>
   <p>Hallo {session.user.name}</p>
   <LogoutButton/>
   <PostsForm/>
      {posts.map((e) => (
        <PostsItem key={e.id} post={e} />
      ))}
   </>
  )
}
