const mongoose = require('mongoose'); // use for model schema
const bcrypt = require('bcrypt');  //using for hashing password
const saltRounds = 10; //used for hashing plain text password
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 email: {
  type: String,
  trim: true,
  required: true
 },
 password: {
  type: String,
  trim: true,
  required: true
 }
});
// hash user password before saving into database
UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});
module.exports = mongoose.model('User', UserSchema);

