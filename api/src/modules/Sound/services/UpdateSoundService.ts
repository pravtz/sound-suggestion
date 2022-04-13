import AppErrors from '@shared/errors/App.error'
import { soundUpdateType } from './../repositories/ISound'
import SoundRepository from '../repositories/SoundRepository'

class UpdateSoundService {
  async execute({ id, music, album, band, birth }: soundUpdateType) {
    const repository = new SoundRepository()
    const itExists = await repository.existFromId(id)
    if (!itExists) {
      throw new AppErrors(`😲 This "id" does not exist in the system`, 401)
    }
    const soundData = await repository.update({ id, music, album, band, birth })
    return soundData
  }
}

export default UpdateSoundService
