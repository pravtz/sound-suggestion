import SoundRepository from '../repositories/SoundRepository'

class ShowSoundService {
  async execute(id: number) {
    const repository = new SoundRepository()
    const soundDel = await repository.showFromId(id)
    return soundDel
  }
}

export default ShowSoundService
