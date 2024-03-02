const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true} ,
    quantity: { type: Number, required: true },
    imageURL: { type: String, required: true }
})
  
module.exports = mongoose.model('Book', bookSchema)


