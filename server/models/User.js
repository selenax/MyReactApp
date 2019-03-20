const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  name: String
});

//create new collection with model
mongoose.model('users', userSchema);
