const express = require("express");
const app = express();

require('dotenv').config()

const port = process.env.PORT || 3000;

//Base de datos
const mongoose = require('mongoose');


const url = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.hltbc.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + "/public"))

app.use('/', require('./router/rutasWeb'));
app.use('/animales', require('./router/animales'));


app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo404: "404",
        descripcion: "Titulo del sitio web"
    })
})


app.listen(port, () => {
    console.log('Servidor a su servicio en el puerto', port)
})