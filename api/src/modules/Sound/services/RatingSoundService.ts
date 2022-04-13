import AppErrors from '@shared/errors/App.error'
import SoundRepository from '../repositories/SoundRepository'

class RatingSoundService {
  private rating

  constructor() {
    this.rating = new SoundRepository()
  }
  private async itExistSound(id: number) {
    const itExist = await this.rating.existFromId(id)
    return itExist
  }

  async setRating(id: number, valuation: number) {
    const rate = await this.rating.rating(id, valuation)

    if (rate === false) {
      throw new AppErrors('Erro query setRating')
    }
    return rate
  }
  async getRating(id: number) {
    const itExist = await this.itExistSound(id)
    if (!itExist) {
      throw new AppErrors('There is no sound with this id')
    }
    const { vote, rating } = await this.rating.getRating(id)

    if (vote === 0) {
      return 0
    }
    const cal = rating / vote

    return cal
  }
}

export default RatingSoundService
