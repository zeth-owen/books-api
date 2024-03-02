// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const router = require('express').Router()


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// ROUTES
app.use('/books', require('./controllers/books'));

app.get('/', (req, res) => {
  res.send('Welcome to the Books API!')
})

// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})


module.exports = router;




