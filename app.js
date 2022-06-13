const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
const PORT = config.get('port') || 5000 

app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.routes.js'))


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