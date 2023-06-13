import express from "express";
import {createUsers, detailUsers, updateUsers, deleteUser} from "../controller/users.js";
import {runValidation, validationCheck} from "../validation/index.js";
import multer from "multer";
import path from 'path'

const Router = express.Router()

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./public/")
    },
    filename: function(req, file, cb) {
        const uniquesuffix = `user_${Date.now()}${path.extname(file.originalname)}`
        cb(null, uniquesuffix)
    }
})

const upload = multer({storage: storage})

Router.post(
    '/users', 
    upload.single('image'),
    validationCheck, 
    runValidation,
    createUsers
    )
Router.get('/users/:id', detailUsers)
Router.delete('/users/:id', deleteUser)
Router.patch('/users/:id', updateUsers)

export default Router