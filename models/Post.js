const db = require('./db')


const Postagem = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Postagem.sync({force: true})

module.exports = Postagem;