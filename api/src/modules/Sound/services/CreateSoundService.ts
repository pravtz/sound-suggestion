import { soundCreateType } from './../repositories/ISound'
import SoundRepository from '../repositories/SoundRepository'

export default class CreateSoundService {
  async execute({ music, album, band, birth }: soundCreateType) {
    const repository = new SoundRepository()

    const sound = await repository.create({
      music,
      album,
      band,
      birth
    })
    return sound.id
  }
}
