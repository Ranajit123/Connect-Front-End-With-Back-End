const mongoose = require ('mongoose');

const userShema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  phnumber:{
    type: Number,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  cpassword:{
    type: String,
    required: true
  },
})

const User = mongoose.model('USER', userShema);
module.exports = User;