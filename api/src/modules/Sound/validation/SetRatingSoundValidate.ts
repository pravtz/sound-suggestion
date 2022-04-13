import { celebrate, Segments, Joi } from 'celebrate'

const SetRatingSoundValidate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    valuation: Joi.number().min(0).max(5).required()
  }),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
})

export default SetRatingSoundValidate
