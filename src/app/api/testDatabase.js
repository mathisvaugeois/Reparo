const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // const allUsers = await prisma.user.findMany()
    // console.log(allUsers)

    // await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'alice@prisma.io',
    //         annonce: {
    //         create: { title: 'Hello World', content: 'content Hello world' },
    //         },
    //     },
    // })
        
    const allUsers = await prisma.user.findMany({
        include: {
        annonce: true,
        },
    })
    console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })