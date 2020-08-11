const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  bio: {
    type: String
  },
  date: {
    type: Date
  }
}, {
    collection: 'user'
  })

module.exports = mongoose.model('User', userSchema)