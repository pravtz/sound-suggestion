import { celebrate, Segments, Joi } from 'celebrate'

const DeleteSoundValidate = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  })
})

export default DeleteSoundValidate
