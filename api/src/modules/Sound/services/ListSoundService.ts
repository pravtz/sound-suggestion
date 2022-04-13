import SoundRepository from '../repositories/SoundRepository'

class ListSoundService {
  async execute(page: number | null) {
    const repository = new SoundRepository()
    const soundAll = await repository.listAll(page)
    if (page >= 1 && page !== null) {
      return this.paginate(page, soundAll)
    } else {
      return soundAll
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async paginate(page: number, obj: any) {
    const repository = new SoundRepository()
    const total = await repository.countSounds()
    const take = 20
    const last_page = parseInt(String(total / take), 10)
    return {
      total: total,
      per_page: take,
      current_page: page,
      last_page: last_page,
      next_page: page === last_page ? null : page + 1,
      prev_page: page === 1 ? null : page - 1,
      to: page === 1 ? 1 : (page - 1) * take + 1,
      from: page * take,
      data: obj
    }
  }
}

export default ListSoundService
