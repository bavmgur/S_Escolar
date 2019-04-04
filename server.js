const express = require('express')
const path = require('path')
const config = require('./config/config.dev')
const app = express()

require('./app')(app)

app.listen(config.PORT, () => console.log(`Aplicacion funcionando en el puerto ${config.PORT}`))