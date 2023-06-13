import Users from "../models/users.js";
import massage from "../utils/message.js";
import path from "path"

//CRUD
const createUsers = async (req, res) => {
    const data = req.body
    const file = req.file
    
    if (file) {
        try {
                await Users.sync()
                const detailEmail = await Users.findOne({
                where: { email: data.email }
                })
            
            if (detailEmail) {
                return massage(res, 404, ' Email has been register')
            } else {
                data.image = `${file.filename}`
                const result = await Users.create(data)
                massage(res, 201, "Create user success", result)
            }
        } catch (error) {
            massage(res, 500, "Internal server error")
        } 
        
    } else {
        return massage(res, 423, 'Field image required')
    }
    
}

const detailUsers = async (req, res) => {
    const id_user = req.params.id
    try {
        await Users.sync()
        const detail = await Users.findOne({
            where: {id: id_user}
        })

        if (!detail) {
            return massage(res, 404, `User ID ${id_user} not found`)
        } else {
            return massage(res, 200, "Detail user", detail)
        }

    } catch (error) {
        massage(res, 500, "Internal server error")
    }
}

const updateUsers = async (req, res) => {
    const id_user = req.params.id
    const body = req.body
    try {
        await Users.sync()
        await Users.update(body, {
            where: {id: id_user}
        })
        return massage(res, 200, "Update users success")

    } catch (error) {
        massage(res, 500, "Internal server error")
    }
}

const deleteUser = async (req, res) => {
    const id_user = req.params.id
    try {
        await Users.sync()
        const detail = await Users.destroy({
            where: {id: id_user}
        })

        if (!detail) {
            return massage(res, 404, `User ID ${id_user} not found`)
        } else {
            return massage(res, 200, "Delete user sucess",)
        }

    } catch (error) {
        massage(res, 500, "Internal server error")
    }
}

export { 
    createUsers,
    detailUsers,
    updateUsers,
    deleteUser
    }
