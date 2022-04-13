import { celebrate, Segments, Joi } from 'celebrate'

const UpdateSoundValidate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    music: Joi.string().required(),
    album: Joi.string().required(),
    band: Joi.string().required(),
    birth: Joi.number().required()
  }),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  })
})

export default UpdateSoundValidate
