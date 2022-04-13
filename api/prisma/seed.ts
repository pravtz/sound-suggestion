import { logger } from './../src/shared/utils/logger'
import { PrismaClient, Prisma } from '@prisma/client'
import { data } from './data/sounds'

const prisma = new PrismaClient()

const soundData: Prisma.SoundCreateInput[] = data

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

async function main() {
  logger.info(`cleaning the bank ...`)
  await prisma.$executeRawUnsafe(`delete from sounds`)
  logger.info(`resetting the auto increment of the id ...`)
  await prisma.$executeRawUnsafe(`alter table sounds AUTO_INCREMENT=0`)
  logger.info(`Start seeding ...`)
  for (const u of soundData) {
    const soundData = await prisma.sound.create({
      data: u
    })
    logger.info(`Created sound with id: ${soundData.id}`)
  }
  for (let i = 0; i < 600; i++) {
    const id = getRandomIntInclusive(1, 203)
    const valued = getRandomIntInclusive(1, 5)
    await prisma.$executeRawUnsafe(
      `UPDATE sounds SET rating = rating + ${valued}, vote = vote + 1 where id = ${id}`
    )
    logger.info(`Evaluated sound with id: ${id} e valued ${valued}`)
  }

  logger.info(`Seeding finished.`)
}

main()
  .catch((e) => {
    logger.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
