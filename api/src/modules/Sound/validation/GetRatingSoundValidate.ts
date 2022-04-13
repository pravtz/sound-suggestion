import { celebrate, Segments, Joi } from 'celebrate'

const GetRatingSoundValidate = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  })
})

export default GetRatingSoundValidate
