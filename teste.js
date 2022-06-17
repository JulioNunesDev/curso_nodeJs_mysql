const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','root','****',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>console.log('conectado com sucesso'))

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})




const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})


