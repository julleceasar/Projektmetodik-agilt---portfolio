import mongoose from "mongoose";
const {Schema, model} = mongoose

const UserSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  slogan: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  project: Array,
  html: Number,
  css: Number,
  javaScript: Number,
  php: Number
 
  
  
});



const User = model("User", UserSchema);

export default User;