import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
     title :{
        type:String,
        required:true,
        trim:true,
     },
     description:{
        type:String,
        required:true,
        maxlength:300,      
     },
     createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Auth",
      required:true,
     },
     status:{
      type:String,
      enum:["pending","completed"],
      default:"pending",
     },
},{
   timestamps:true,
})

const todoModel = mongoose.model("todo",todoSchema);

export default todoModel;