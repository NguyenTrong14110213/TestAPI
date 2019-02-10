"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
class UsersRoutes {
    constructor() {
        this.setupRoutes();
    }
    getRouter() {
        return this.router;
    }
    setupRoutes() {
        this.router = express_1.Router();
        this.router.post('/', users_controller_1.default.create);
        this.router.get('/', users_controller_1.default.get);
    }
}
exports.default = UsersRoutes;
