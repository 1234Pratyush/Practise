import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
    minlength:4,
  
  },
  role:{
    type:String,
    enum:["admin","user"],
    default:"user"
  },
},{
    timestamps:true,
});

const userModel = mongoose.model("User",userSchema);

export default userModel;