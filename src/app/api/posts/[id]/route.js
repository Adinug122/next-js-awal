import prisma from "@/lib/prisma";


export async function PUT(request,{params}) {
 const {id} = await params;
 const body = await request.json()
 const updatedJson = await prisma.post.update({
    where: {id: Number(id)},
    data: {
        title: body.title,
        body: body.body
    }
 })

 return Response.json(updatedJson)
}

export async function DELETE(request,{params}) {
    const {id} = await params;
    const deletePost = await prisma.post.delete({
        where:{id:Number(id)}
    })

    return Response.json(deletePost)
}
