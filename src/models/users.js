import sequelize from "../utils/config.js";
import DataType from "sequelize";

const Users = sequelize.define('Users', {
    email: {
        type: DataType.STRING,
        allowNull: false
    },
    password: {
        type: DataType.STRING,
        allowNull: false
    },
    image: {
        type: DataType.STRING,
        allowNull: false
    }
})

export default Users