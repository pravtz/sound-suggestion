import { Router } from 'express'
import RatingController from '../controllers/RatingController'
import ResourceController from '../controllers/ResouceController'

// import validation
import CreateSoundValidate from '../validation/CreateSoundValidate'
import ListSoundValidate from '../validation/ListSoundValidate'
import ShowSoundValidate from '../validation/ShowSoundValidate'
import UpdateSoundValidate from '../validation/UpdateSoundValidate'
import DeleteSoundValidate from '../validation/DeleteSoundValidate'
import GetRatingSoundValidate from '../validation/GetRatingSoundValidate'
import SetRatingSoundValidate from '../validation/SetRatingSoundValidate'

const soundsRoutes = Router()

const resourceController = new ResourceController()
const ratingController = new RatingController()

// basic routes
soundsRoutes.get('/', ListSoundValidate, resourceController.index)
soundsRoutes.post('/', CreateSoundValidate, resourceController.store)
soundsRoutes.get('/:id', ShowSoundValidate, resourceController.show)
soundsRoutes.put('/:id', UpdateSoundValidate, resourceController.update)
soundsRoutes.delete('/:id', DeleteSoundValidate, resourceController.delete)

// special routes
soundsRoutes.get(
  '/rating/:id',
  GetRatingSoundValidate,
  ratingController.getRating
)
soundsRoutes.post(
  '/rating/:id',
  SetRatingSoundValidate,
  ratingController.setRating
)

export default soundsRoutes
