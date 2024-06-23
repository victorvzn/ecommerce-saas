import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
})

const adapter = new PrismaLibSQL(libsql)

declare global {
  var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV != 'production') globalThis.prisma = prismadb

export default prismadb

/*
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV != 'production') globalThis.prisma = prismadb

export default prismadb
*/
