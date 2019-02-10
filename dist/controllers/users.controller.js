"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor() {
        this.create = (req, res, next) => {
            // this is just example. 
            // tại đây sẽ kết nối đến service để thực hiện tạo user
            res.json({ message: 'Create success!' });
        };
        this.get = (req, res, next) => {
            const user = {
                username: 'Nguyen Trong',
                birthday: '02-12-1996',
                gender: 'male',
            };
            res.json({ user });
        };
    }
}
exports.default = new UserController();
