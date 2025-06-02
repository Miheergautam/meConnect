// lib/auth.ts
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'
import { prisma } from './prisma'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user) return null

        const isValid = await compare(credentials.password, user.password)
        if (!isValid) return null

        return { id: user.id, email: user.email }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET
}
