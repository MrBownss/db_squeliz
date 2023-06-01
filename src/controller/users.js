import Users from "../models/users.js";
import massage from "../utils/message.js";

//CRUD
const createUsers = async (req, res) => {
    const body = req.body

    try {
        
    } catch (error) {
        massage(res, 500, "Internal server ERROR")
    }
}

export default createUsers