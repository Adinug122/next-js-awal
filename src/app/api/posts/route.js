import prisma from "@/lib/prisma";
import { auth } from "@/auth"
export async function POST(request) {
    const body = await request.json();
    const session = await auth();
    if(!session){
      return Response.json({error:"Harus login dulu"},{status:401})
    }
  const newPosts = await prisma.post.create({
    data:{
         title: body.title,
      body: body.body,
      authorId:Number(session.user.id)
    }
  })
  return Response.json(newPosts)
}


export async function GET() {
  const posts = await prisma.post.findMany()

  return Response.json(posts)
}