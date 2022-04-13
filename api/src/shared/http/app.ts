import { logger } from './../utils/logger'
import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import { errors } from 'celebrate'
import AppErrors from '../errors/App.error'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.use(errors())

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppErrors) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      })
    }
    logger.error(error)
    return response.status(500).json({
      status: 'error',
      message: '💩 Internal server error'
    })
  }
)

export default app
