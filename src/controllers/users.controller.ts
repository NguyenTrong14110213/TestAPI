import { NextFunction, Request, Response } from 'express'

class UserController {

    constructor() {
    }

    public create = (req: Request, res: Response, next: NextFunction) => {
        // this is just example. 
        // tại đây sẽ kết nối đến service để thực hiện tạo user
        res.json({ message: 'Create success!' })
    }
    public get = (req: Request, res: Response, next: NextFunction) => {
        const user = {
            username: 'Nguyen Trong',
            birthday: '02-12-1996',
            gender: 'male',
        }
        res.json({ user })
    }
}

export default new UserController()
