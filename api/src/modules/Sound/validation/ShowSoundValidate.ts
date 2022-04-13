import { celebrate, Segments, Joi } from 'celebrate'

const ShowSoundValidate = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  })
})

export default ShowSoundValidate
