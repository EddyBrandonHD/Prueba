const express = require('express');
const router = express.Router();

const Animal = require('../models/animal')

router.get('/', async (req, res) => {

    try {
        const arrayAnimalesDB = await Animal.find()
        console.log(arrayAnimalesDB);

        res.render("animales",{
            arrayAnimales:  arrayAnimalesDB
     //       arrayAnimales: [
       //         {id: 'jajaa', nombre:'rex', descripcion: 'ANimal en exstincion'},
         //       {id: 'hola', nombre:'perro', descripcion: 'ANimal en chido'},
           //     {id: 'xD', nombre:'gato', descripcion: 'ANimal en su casa'},
             //   {id: 'aaa', nombre:'raton', descripcion: 'ANimal en tortillas'}
           // ]
        })
    } catch (error) {
        console.log(error)
    }


});

module.exports = router;