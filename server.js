const express = require('express');
const cors = require('cors');
const compression = require('compression');
//rutas

const usuarioRouter = require('./routes/usuarioRouter');
const app = express ();

app.use(express.json()); //Esto si o si porque vamos a trabajar con mongoose
app.use(express.urlencoded({extended:true})); //decodifica json desde form
app.use(cors());
app.use(compression());

app.use('/user',usuarioRouter);

app.get('/', (req, res)=>{
    res.send(`<h1> Bienvenide a la aplicacion con Mongoose</h1>`)
});

module.exports = app;