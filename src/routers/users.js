import express from "express";
import createUsers from "../controller/users.js";
const Router = express.Router()

Router.post('/users', createUsers)

export default Router