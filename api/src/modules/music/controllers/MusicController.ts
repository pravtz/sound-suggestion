import AppErrors from '@shared/errors/App.error'
import { Request, Response } from 'express'

export default class MusicController {
  public async index(request: Request, response: Response) {
    try {
      return response.status(204).json({ status: 'method not yet implemented' })
    } catch (error) {
      throw new AppErrors(`❌  Error controller:index! Details: ${error}`)
    }
  }
  public async store(request: Request, response: Response) {
    try {
      return response.status(204).json({ status: 'method not yet implemented' })
    } catch (error) {
      throw new AppErrors(`❌  Error controller:store! Details: ${error}`)
    }
  }
  public async show(request: Request, response: Response) {
    try {
      return response.status(204).json({ status: 'method not yet implemented' })
    } catch (error) {
      throw new AppErrors(`❌  Error controller:show! Details: ${error}`)
    }
  }
  public async update(request: Request, response: Response) {
    try {
      return response.status(204).json({ status: 'method not yet implemented' })
    } catch (error) {
      throw new AppErrors(`❌  Error controller:update! Details: ${error}`)
    }
  }
  public async delete(request: Request, response: Response) {
    try {
      return response.status(204).json({ status: 'method not yet implemented' })
    } catch (error) {
      throw new AppErrors(`❌  Error controller:delete! Details: ${error}`)
    }
  }
}
