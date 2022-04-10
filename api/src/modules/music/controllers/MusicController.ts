import AppErrors from "@shared/errors/App.error";
import { Request, Response } from "express";

export default class MusicController {

  public async index(request: Request, response: Response){
    try {
      return response.status(201).json({status:"ok"})
    } catch (error) {
      throw new AppErrors('❌  deu ruim!')
    }
  }
  public async store(request: Request, response: Response){}
  public async show(request: Request, response: Response){}
  public async update(request: Request, response: Response){}
  public async delete(request: Request, response: Response){}
}