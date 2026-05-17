const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: { email: 'admin@example.com', name: 'Admin' },
  })

  await prisma.post.create({
    data: {
      title: 'Welcome to WildPedia',
      content: 'This is a seeded post.',
      published: true,
      authorId: user.id,
    },
  })

  console.log('Seed completed')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
