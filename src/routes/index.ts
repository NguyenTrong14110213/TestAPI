import {Router} from 'express'
import UsersRoutes from './users.routes'

const router = Router()

router.use('/users', new UsersRoutes().getRouter())

export {router}
