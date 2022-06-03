const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('auth', require('./routes/auth.routes.js'))

const PORT = config.get('port') || 5000 

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`///////\nServer listening port ${PORT}...\n///////`))
  } catch (error) {
    console.log('Server error', error.message)
    process.exit(1)
  }
}

start()
