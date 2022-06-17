const express = require('express')
const app = express()


app.get('/',(req, res)=>{
   
res.send('Nome nao encontraxdox!')
})



app.listen(8081, ()=>console.log('servidor online!'))
