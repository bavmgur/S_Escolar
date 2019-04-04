const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')

module.exports = (app) => {

  app.engine('hbs', expressHbs())
  app.set('view engine', 'hbs')

  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.get('/', (req, res) => {
    res.render('home')
  })

  app.get('/test', (req, res) => {
    res.render('test')
  })

}