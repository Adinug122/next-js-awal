import prisma from "@/lib/prisma";
import NextAuth from "next-auth";
import bcrypt from 'bcryptjs'
import Credentials from "next-auth/providers/credentials";

export const {handlers,signIn,signOut,auth} = NextAuth({
    providers:[
        Credentials({
            credentials:{
                email:{},
                password:{}
            },
            authorize: async(credentials) => {
                const user = await prisma.user.findUnique({
                    where: {email: credentials.email}
                })
                if(!user) return null
                const isValid = await bcrypt.compare(credentials.password, user.password)
                if(!isValid) return null
                return user
            }
        })
    ],
    pages:{
        signIn:'/login'
    },
     callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user
      const isOnMyPosts = request.nextUrl.pathname.startsWith('/myposts')
      
      if (isOnMyPosts && !isLoggedIn) {
        return false   // ini yang men-trigger redirect otomatis ke halaman login
      }
      return true
    },
     jwt({ token, user }) {
    if (user) {
      token.id = user.id
    }
    return token
  },
  session({ session, token }) {
    session.user.id = token.id
    return session
  }
  }
})