'use strict'
const express = require('express')
const router = require('./routes')
const app = express()

// Acuérdense de agregar su router o cualquier middleware que necesiten acá.

app.use(express.json())
app.use(router)

module.exports = app
