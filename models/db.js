const Sequelize = require('sequelize')

const sequelize = new Sequelize('Postapp', 'root', 'julio', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>console.log('Banco de dados Mysql, conectado com sucesso!')).catch((err)=>console.log(err, "erro ao conectar com o banco de dados MYSQL!"))


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}