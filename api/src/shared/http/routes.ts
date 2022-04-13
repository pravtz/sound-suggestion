import { Router } from 'express'
import musicRoutes from '@modules/Sound/routes'

const mainRoutes = Router()

// this is modules routes
mainRoutes.use('/api', musicRoutes)

export default mainRoutes
