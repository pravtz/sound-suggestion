import { celebrate, Segments, Joi } from 'celebrate'

const ListSoundValidate = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.string()
  })
})

export default ListSoundValidate
