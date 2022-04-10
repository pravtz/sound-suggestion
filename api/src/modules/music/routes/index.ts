import { Router } from 'express'
import MusicController from '../controllers/MusicController'

const musicRoutes = Router()

const musicController = new MusicController()

// routes basic
musicRoutes.get('/', musicController.index)
musicRoutes.post('/', musicController.store)
musicRoutes.get('/:id', musicController.show)
musicRoutes.put('/:id', musicController.update)
musicRoutes.delete('/:id', musicController.delete)

export default musicRoutes
