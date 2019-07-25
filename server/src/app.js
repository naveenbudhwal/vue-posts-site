const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/posts')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function(callback) {
  console.log('Connection Succeeded')
})

app.get('/posts', (req, res) => {
  res.send([
    {
      title: 'Hello World!',
      description: 'Hi there! How are you?'
    }
  ])
})

app.listen(process.env.PORT || 8082)
