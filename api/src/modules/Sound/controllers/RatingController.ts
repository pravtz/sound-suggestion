import AppErrors from '@shared/errors/App.error'
import { Request, Response } from 'express'
import RatingSoundService from '../services/RatingSoundService'

export default class RatingController {
  public async getRating(request: Request, response: Response) {
    const validation = new RatingSoundService()
    try {
      const { id } = request.params
      const idNumber = Number(id)
      const soundValidation = await validation.getRating(idNumber)
      return response.status(201).json(soundValidation)
    } catch (error) {
      throw new AppErrors(`🚫 Error controller:getRating! Details: ${error}`)
    }
  }
  public async setRating(request: Request, response: Response) {
    const validation = new RatingSoundService()
    try {
      const { id } = request.params
      const idNumber = Number(id)
      const { valuation } = request.body
      const valuationNumber = Number(valuation)
      const setSound = await validation.setRating(idNumber, valuationNumber)

      return response.status(201).json(setSound)
    } catch (error) {
      throw new AppErrors(`🚫 Error controller:setRating! Details: ${error}`)
    }
  }
  public async getTopRating(request: Request, response: Response) {
    const istance = new RatingSoundService()
    try {
      const list = await istance.getTopRating()
      return response.status(201).json(list)
    } catch (error) {
      throw new AppErrors(`🚫 Error controller:getTopRating! Details: ${error}`)
    }
  }
}
