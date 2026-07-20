import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs'
export async function POST(request) {
const body = await request.json();
const hash = await bcrypt.hash(body.password,10)

const newUser = await prisma.user.create({
    data:{
        name: body.name,
        email: body.email,
        password: hash,
    }
})

return Response.json({message:"User berhasil dibuat",userId:newUser.id})
}   