const express = require('express')
const app = express()
let handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Postagem = require('./models/Post')



//config 
//template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', './views')
//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//conexao com banco de dados mysql





//rotas 

app.get('/', (req, res)=>{

        Postagem.findAll().then(function(posts) {
            
            res.render('home', {posts: posts})
      });

    
})

app.get('/cad', (req, res)=>{
    res.render('formulario')
})

app.post('/add', (req, res)=>{
   Postagem.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
   }).then(()=>{
    res.redirect('/')
   }).catch((err)=>{
    res.send('Houve um erro:' , + err)
   }) 
})

app.get('/deletar/:id', (req, res)=>{
    Postagem.destroy({where: {'id': req.params.id }})
})

app.listen(8081, ()=>console.log('servidor online!'))

