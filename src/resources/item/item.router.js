import { Router } from 'express'
import { crudControllers } from './item.controllers'
const router = Router()

router
  .route('/')
  .get(crudControllers.getAll)
  .post(crudControllers.postOne)

router
  .route('/:id')
  .get(crudControllers.getOne)
  .put(crudControllers.putOne)
  .delete(crudControllers.deleteOne)
export default router
