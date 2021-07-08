// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Hello World! API')
})

// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})