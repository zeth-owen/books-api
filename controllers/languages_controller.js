const express = require('express')
const languages = express.Router()
const Language = require('../models/language.js')

module.exports = languages

languages.get('/seed', (req, res) => {
    Language.insertMany([ ... ])
        .then(createdLanguages => {
            res.json({
                message: "Seed successful!"
            })
        })
})

// Index:
languages.get('/', (req, res) => {
    Language.find()
        .then(foundLanguages => {
            res.json(foundLanguages)
        })
})

// Show:
languages.get('/:name', (req, res) => {
    Language.findOne({ name: req.params.name .toLowerCase() })
        .then(foundLanguage => {
            res.json(foundLanguage)
        })
})
