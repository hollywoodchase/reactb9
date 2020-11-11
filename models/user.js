
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  withdraw: {
    type: Number,
    default: 0
  },
  deposit: {
    type: Number,
    default: 0
  },
  lastTrans: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
},
  { strict: false }
);


const User = mongoose.model("User", userSchema);

module.exports = User;

// {
//   "name": "Daniel Jones",
//   "username": "hollywoodchase",
//   "username_is_verified": true,
//   "password": "hollywood",
//   "balance": 5000,
//   "withdraw": "",
//   "deposit": "",
//   "lastTrans": ""
// }