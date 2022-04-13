import SoundRepository from '../repositories/SoundRepository'

class DeleteSoundService {
  async execute(id: number) {
    const repository = new SoundRepository()
    const soundDel = await repository.delete(id)
    return soundDel
  }
}

export default DeleteSoundService
