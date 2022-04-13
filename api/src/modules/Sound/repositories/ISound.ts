import type { Sound } from '@prisma/client'

export type soundCreateType = {
  music: string
  album: string
  band: string
  birth: number
}
export type soundUpdateType = {
  id: number
  music?: string
  album?: string
  band?: string
  birth?: number
}
export type ratingType = {
  rating: number
  vote: number
}

export interface ISoundRepository {
  create({ music, album, band, birth }: soundCreateType): Promise<Sound>
  listAll(page: number | null): Promise<Sound[]>
  showFromId(id: number): Promise<Sound | null>
  update({
    id,
    music,
    album,
    band,
    birth
  }: soundUpdateType): Promise<{ id: number }>
  delete(id: number): Promise<{ id: number }>
  existFromId(id: number): Promise<boolean>
  rating(id: number, valuation: number): Promise<number | boolean>
  getRating(id: number): Promise<ratingType>
}
