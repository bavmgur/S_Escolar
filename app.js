const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')
const sassMiddleware = require('node-sass-middleware')

const srcPath = __dirname + '/sass'
const destPath = __dirname + '/public'

module.exports = (app) => {

  app.engine('hbs', expressHbs({ defaultLayout: 'main.hbs' }))
  app.set('view engine', 'hbs')

  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(sassMiddleware({
    src: srcPath,
    dest: destPath,
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/prefix'
  }))
  console.log(srcPath, destPath)
  app.use(express.static(path.join(__dirname, 'public')))

  app.get('/', (req, res) => {
    res.render('home')
  })

  app.get('/test', (req, res) => {
    res.render('test')
  })

}