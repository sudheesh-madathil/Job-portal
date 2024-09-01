// server/models/User/googleAuth.js
const mongoose = require('mongoose');



const googleAuthSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: String,
  avatar: String,
});

module.exports = mongoose.model('GoogleAuth', googleAuthSchema);
