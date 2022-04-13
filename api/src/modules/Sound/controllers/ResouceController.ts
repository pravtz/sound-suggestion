import AppErrors from '@shared/errors/App.error'
import { Request, Response } from 'express'
import CreateSoundService from '../services/CreateSoundService'
import DeleteSoundService from '../services/DeleteSoundService'
import ListSoundService from '../services/ListSoundService'
import ShowSoundService from '../services/ShowSoundService'
import UpdateSoundService from '../services/UpdateSoundService'

export default class ResourceController {
  /**
   * Index
   * @returns Objeto
   */
  public async index(request: Request, response: Response) {
    const sounds = new ListSoundService()
    try {
      const { page } = request.query
      let pageNumber = Number(page)
      if (page === undefined) {
        pageNumber = 0
      }
      const dataSound = await sounds.execute(pageNumber)
      return response.status(200).json(dataSound)
    } catch (error) {
      throw new AppErrors(`❌  Error controller:index! Details: ${error}`)
    }
  }
  /**
   * Store
   * @returns Object Id
   */
  public async store(request: Request, response: Response) {
    const sound = new CreateSoundService()
    try {
      const { music, album, band, birth } = request.body
      const dataSound = await sound.execute({ music, album, band, birth })
      return response.status(201).json({ id: dataSound })
    } catch (error) {
      throw new AppErrors(`❌  Error controller:show! Details: ${error}`)
    }
  }
  /**
   * Show
   * @returns Object
   */
  public async show(request: Request, response: Response) {
    const sound = new ShowSoundService()
    try {
      const { id } = request.params
      const idNumber = Number(id)
      const soundData = await sound.execute(idNumber)

      return response.status(201).json(soundData)
    } catch (error) {
      throw new AppErrors(`❌  Error controller:show! Details: ${error}`)
    }
  }
  /**
   * Update
   * @returns Object
   */
  public async update(request: Request, response: Response) {
    const sound = new UpdateSoundService()
    try {
      const { id } = request.params
      const idNumber = Number(id)
      const { music, album, band, birth } = request.body
      const soundData = await sound.execute({
        id: idNumber,
        music,
        album,
        band,
        birth
      })
      return response.status(201).json(soundData)
    } catch (error) {
      throw new AppErrors(`❌  Error controller:update! Details: ${error}`)
    }
  }
  /**
   * Delete
   * @returns Object
   */
  public async delete(request: Request, response: Response) {
    const service = new DeleteSoundService()
    const { id } = request.params
    const idNumber = Number(id)

    const itDeleted = await service.execute(idNumber)

    try {
      return response.status(201).json({ id: itDeleted })
    } catch (error) {
      throw new AppErrors(`❌  Error controller:delete! Details: ${error}`)
    }
  }
}
