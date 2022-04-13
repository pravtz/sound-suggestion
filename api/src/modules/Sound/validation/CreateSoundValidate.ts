import { celebrate, Segments, Joi } from 'celebrate'

const CreateSoundValidate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    music: Joi.string().required(),
    album: Joi.string().required(),
    band: Joi.string().required(),
    birth: Joi.number().required()
  })
})

export default CreateSoundValidate
