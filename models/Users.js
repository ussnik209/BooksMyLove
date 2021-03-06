const { Schema, model } = require('mongoose')

const schema = new Schema({
  mail: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  surname: {type: String, required: true},
  isAuthor: {type: Boolean, default: false}
})

module.exports = model('User', schema)