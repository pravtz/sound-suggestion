import { Sound } from '@prisma/client'
import { prisma } from '@shared/database/client'
import AppErrors from '@shared/errors/App.error'
import { ISoundRepository, soundCreateType, soundUpdateType } from './ISound'

class SoundRepository implements ISoundRepository {
  async create({ music, album, band, birth }: soundCreateType) {
    try {
      const sound = await prisma.sound.create({
        data: {
          music,
          album,
          band,
          birth
        }
      })
      return sound
    } catch (error) {
      throw new AppErrors(`🗄 Error Repository create, Details: ${error}`)
    }
  }
  async listAll(page: number | null): Promise<Sound[]> {
    try {
      if (page === 0 || page === null) {
        const sound = await prisma.sound.findMany()
        return sound
      } else {
        const sound = await prisma.sound.findMany({
          skip: 20 * (page - 1),
          take: 20
        })
        return sound
      }
    } catch (error) {
      throw new AppErrors(`🗄 Error Repository listAll, Details: ${error}`)
    }
  }
  async showFromId(id: number) {
    const sound = await prisma.sound.findUnique({
      where: {
        id
      }
    })
    return sound
  }
  async update({ id, music, album, band, birth }: soundUpdateType) {
    const soundData = await prisma.sound.update({
      where: {
        id
      },
      data: {
        music,
        album,
        band,
        birth
      }
    })
    return { id: soundData.id }
  }
  async delete(id: number) {
    const soundData = await prisma.sound.delete({
      where: {
        id
      }
    })
    return { id: soundData.id }
  }
  async existFromId(id: number) {
    const existSound = await prisma.sound.findFirst({
      where: {
        id
      }
    })
    return !!existSound
  }
  async rating(id: number, valuation: number) {
    const voteRating = await prisma.$queryRawUnsafe(
      `UPDATE sounds SET rating = rating + ${valuation}, vote = vote + 1 where id = ${id}`
    )

    return voteRating ? valuation : false
  }
  async getRating(id: number) {
    const getratingAndVote = await prisma.sound.findUnique({
      where: {
        id
      },
      select: {
        rating: true,
        vote: true
      }
    })
    if (getratingAndVote == null) {
      return {
        rating: 0,
        vote: 0
      }
    }
    return getratingAndVote
  }
  async countSounds() {
    const count = await prisma.sound.count()
    return count
  }
}

export default SoundRepository
