const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    nombre: String,
    descripcion: String
});

const Animal = mongoose.model('Animal', animalSchema, "animales");

module.exports = Animal;