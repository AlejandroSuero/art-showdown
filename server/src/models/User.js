const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredName = {
  type: String,
  required: true,
  min: 2,
  max: 25,
};
const requiredPassword = {
  type: String,
  required: true,
  min: 10,
  max: 30,
};

const userSchema = new Schema({
  username: requiredName,
  password: requiredPassword,
  confirmedPassword: requiredPassword,
  email: requiredName,
  name: requiredName,
  lastName: requiredName,
  secondLastName: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const userData = mongoose.model('UserData', userSchema);

module.exports = userData;
