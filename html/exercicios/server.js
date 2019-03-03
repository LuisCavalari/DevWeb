const express = require('express')
 const app = express()
const body = require('body-parser')


app.use(body.urlencoded({extended:true}))

app.post('/usuarios',(req,res)=>{
    console.log(req.body)
    res.send(`<h1>Parabens</h1>`)
})

app.post('/usuarios/:id',(req,res)=>{
    console.log(req.param.id)
    console.log(req.body)
    res.send('Usuario alterado com sucesso')
})


app.listen(3003,()=>{
    console.log('escutando na porta 3003')
})