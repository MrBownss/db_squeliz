import Sequelize from "sequelize";

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'squeliz',
    dialect: 'mysql'
})

const checking = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connnection has been established succesfully')
    } catch (error){
        console.error('Unnable to connect to the database', error);
    }
}
checking()

export default sequelize