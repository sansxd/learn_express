const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  password: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model('user', userSchema);
module.exports = User;
