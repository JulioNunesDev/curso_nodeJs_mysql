const express = require('express')
const app = express()
let handlebars = require('express-handlebars')
const body = require('body-parser')


//config 
//template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', './views')
//Body Parser
app.use(body.urlencoded({extended: false}))
app.use(body.json())

//conexao com banco de dados mysql





//rotas 

app.get('/cad', (req, res)=>{
    res.render('formulario')
})

app.post('/add', (req, res)=>{
   res.send('seus dados foram salva' + req.body.titulo + " " + req.body.conteudo) 
})

app.listen(8081, ()=>console.log('servidor online!'))

