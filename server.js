const express = require('express')
const mongoose = require('mongoose')

const app = express();

//iniciando o banco de dados
mongoose.connection('mongodb://localhost:27017/program01', {useNewUrlParser: true});

//primeira rota
app.get('/',(req,res)=>{
    res.send('Hello Rocketseat')
})

app.listen(3000)