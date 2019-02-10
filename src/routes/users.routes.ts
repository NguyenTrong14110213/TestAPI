import {Router} from 'express'
import UserController from '../controllers/users.controller'

export default class UsersRoutes {
  private router: Router
  constructor() {
    this.setupRoutes()
  }

  public getRouter(): Router {
    return this.router
  }

  private setupRoutes() {
    this.router = Router()
    this.router.post('/', UserController.create)
    this.router.get('/', UserController.get)

  }
}
